/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

const gulp = require('gulp');
const args = require('yargs').argv;
const fs = require('fs');
const path = require('path');
import * as glob from "glob";
const execSync = require('child_process').execSync;
import { Argv } from "./scripts/commandLine";
import { getDataFromPullRequest } from "./scripts/github";
import { regenerate } from "./scripts/gulp";

const azureSDKForNodeRepoRoot = __dirname;
const azureRestAPISpecsRoot = args['azure-rest-api-specs-root'] || path.resolve(azureSDKForNodeRepoRoot, '..', 'azure-rest-api-specs');
const packageArgument = args['package'];
const use = args['use'];
const whatif = args['whatif'];
const regexForExcludedServices = /\/(intune|documentdbManagement|insightsManagement|insights|search)\//i;

function findReadmeNodejsMdFilePaths(azureRestAPISpecsRoot: string): string[] {
  const specificationFolderPath = path.resolve(azureRestAPISpecsRoot, 'specification');
  return glob.sync('**/readme.nodejs.md', { absolute: true, cwd: specificationFolderPath });
}

function getPackageNameFromReadmeNodejsMdFileContents(readmeNodejsMdFileContents: string): string | undefined {
  const matches: RegExpMatchArray | null = readmeNodejsMdFileContents.match(/package-name: (\S*)/);
  return matches && matches.length >= 2 ? matches[1] : undefined;
}

function getOutputFolderFromReadmeNodeJsMdFileContents(readmeNodejsMdFileContents: string): string | undefined {
  const matches: RegExpMatchArray | null = readmeNodejsMdFileContents.match(/output-folder: (\S*)/);
  return matches && matches.length >= 2 ? matches[1] : undefined;
}

function getServiceNameFromOutputFolderValue(outputFolderValue: string): string {
  const outputFolderSegments = outputFolderValue.split('/');
  return outputFolderSegments[outputFolderSegments.length - 1];
}

gulp.task('default', function () {
  console.log('gulp codegen [--azure-rest-api-specs-root <azure-rest-api-specs root>] [--use <autorest.nodejs root>] [--package <package name>]');
  console.log('  --azure-rest-api-specs-root');
  console.log('    Root location of the local clone of the azure-rest-api-specs-root repository.');
  console.log('  --use');
  console.log('    Root location of autorest.nodejs repository. If this is not specified, then the latest installed generator for NodeJS will be used.');
  console.log('  --package');
  console.log('    NPM package to regenerate. If no package is specified, then all packages will be regenerated.');
  console.log();
  console.log('gulp publish [--package <package name>]');
  console.log('  --package');
  console.log('    The name of the package to publish. If no package is specified, then all packages will be published.');
});

//This task is used to generate libraries based on the mappings specified above.
gulp.task('codegen', function () {
  const nodejsReadmeFilePaths = findReadmeNodejsMdFilePaths(azureRestAPISpecsRoot);

  for (let i = 0; i < nodejsReadmeFilePaths.length; ++i) {
    const nodejsReadmeFilePath = nodejsReadmeFilePaths[i];

    const nodejsReadmeFileContents = fs.readFileSync(nodejsReadmeFilePath, 'utf8');
    const packageName = getPackageNameFromReadmeNodejsMdFileContents(nodejsReadmeFileContents);

    if (packageName && (!packageArgument || packageArgument === packageName || packageName.endsWith(`-${packageArgument}`))) {
      console.log(`>>>>>>>>>>>>>>>>>>> Start: "${packageName}" >>>>>>>>>>>>>>>>>>>>>>>>>`);

      const readmeFilePath = path.resolve(path.dirname(nodejsReadmeFilePath), 'readme.md');

      let cmd = `autorest --nodejs --node-sdks-folder=${azureSDKForNodeRepoRoot} --license-header=MICROSOFT_MIT_NO_VERSION ${readmeFilePath}`;
      if (use) {
        cmd += ` --use=${use}`;
      }
      else {
        const localAutorestNodejsFolderPath = path.resolve(azureSDKForNodeRepoRoot, '..', 'autorest.nodejs');
        if (fs.existsSync(localAutorestNodejsFolderPath) && fs.lstatSync(localAutorestNodejsFolderPath).isDirectory()) {
          cmd += ` --use=${localAutorestNodejsFolderPath}`;
        }
      }

      try {
        console.log('Executing command:');
        console.log('------------------------------------------------------------');
        console.log(cmd);
        console.log('------------------------------------------------------------');
        const result = execSync(cmd, { encoding: 'utf8' });
        console.log('Output:');
        console.log(result);
      } catch (err) {
        console.log('Error:');
        console.log(`An error occurred while generating client for package: "${packageName}":\n ${err.stderr}`);
      }

      console.log(`>>>>>>>>>>>>>>>>>>> End: "${packageName}" >>>>>>>>>>>>>>>>>>>>>>>>>`);
      console.log();
    }
  }
});

//This task validates that the entry in "main" and "types" in package.json points to a file that exists on the disk.
// for best results run on mac or linux. Windows is case insenstive for file paths. Hence it will not catch those issues.
//If not tested this will cause "module not found" errors for customers when they try to use the package.
gulp.task('validate-each-packagejson', () => {
  let packagePaths = glob.sync(path.join(azureSDKForNodeRepoRoot, '/lib/services', '/**/package.json'), { ignore: '**/node_modules/**' });
  packagePaths.forEach((packagePath) => {
    const packageJson = require(packagePath);
    //console.log(package);
    if (!packageJson.name.startsWith('azure-asm-')) {
      console.log(`Validating package: ${packageJson.name}`);
      if (packageJson.main) {
        let mainPath = path.resolve(path.dirname(packagePath), packageJson.main);
        if (!fs.existsSync(mainPath)) console.log(`\t>${mainPath} does not exist.`);
      } else {
        console.log(`\t>Could not find "main" entry in package.json for ${packagePath}.`);
      }
      if (packageJson.types) {
        let typesPath = path.resolve(path.dirname(packagePath), packageJson.types);
        if (!fs.existsSync(typesPath)) console.log(`\t>${typesPath} does not exist.`);
      } else {
        console.log(`\t>Could not find "types" entry in package.json for ${packagePath}.`);
      }
    }
  });
});

//This task updates the dependencies in package.json to the relative service libraries inside lib/services directory.
gulp.task('update-deps-rollup', () => {

  let packagePaths = glob.sync(path.join(azureSDKForNodeRepoRoot, './lib/services', '/**/package.json')).filter((packagePath) => {
    return packagePath.match(regexForExcludedServices) === null;
  });
  let rollupPackage = require('./package.json');
  let rollupDependencies = rollupPackage.dependencies;
  rollupDependencies['ms-rest'] = './runtime/ms-rest';
  rollupDependencies['ms-rest-azure'] = './runtime/ms-rest-azure';
  packagePaths.forEach((packagePath) => {
    const packageJson = require(packagePath);
    //console.log(package);
    const packageName = packageJson.name;
    const packageDir = path.dirname(packagePath);
    if (rollupDependencies[packageName]) {
      rollupDependencies[packageName] = packageDir;
    } else {
      console.log(`Could not find ${packageName} as a dependecy in rollup package.json file..`);
    }
  });
  fs.writeFileSync('./package.json', JSON.stringify(rollupPackage, null, 2), { 'encoding': 'utf8' });
});

gulp.task('sync-package-service-mapping', () => {
  let packageMapping = require('./package_service_mapping');
  for (const readmeNodeJsMdFilePath of findReadmeNodejsMdFilePaths(azureRestAPISpecsRoot)) {
    const readmeNodeJsMdFileContents = fs.readFileSync(readmeNodeJsMdFilePath, 'utf8');
    const packageName = getPackageNameFromReadmeNodejsMdFileContents(readmeNodeJsMdFileContents);
    if (packageName && !packageMapping[packageName]) {
      const category = readmeNodeJsMdFilePath.includes('resource-manager') ? 'Management' : 'Client';
      const outputFolder: string | undefined = getOutputFolderFromReadmeNodeJsMdFileContents(readmeNodeJsMdFileContents);
      if (outputFolder) {
        packageMapping[packageName] = {
          category: 'Management',
          'service_name': getServiceNameFromOutputFolderValue(outputFolder)
        };
      }
    }
  }
  packageMapping = Object.keys(packageMapping).sort().reduce((r: any, k: any) => (r[k] = packageMapping[k], r), {});
  fs.writeFileSync('./package_service_mapping.json', JSON.stringify(packageMapping, null, 2), { 'encoding': 'utf8' });
});

//This task ensures that all the exposed createSomeClient() methods, can correctly instantiate clients. By doing this we test,
//that the "main" entry in package.json points to a file at the correct location. We test the signature of the client constructor 
//is as expected. As of now HD Isnight is expected to fail as it is still using the Hyak generator. Once it moves to Autorest, it should
//not fail. Before executing this task, execute `gulp update-deps-rollup`, `rm -rf node_modules` and `npm install` so that the changes inside the sdks in lib/services
//are installed inside the node_modules folder.
gulp.task('test-create-rollup', () => {
  const azure = require('./lib/azure');
  const keys = Object.keys(azure).filter((key) => { return key.startsWith('create') && !key.startsWith('createASM') && key.endsWith('Client') && key !== 'createSchedulerClient'; });
  //console.dir(keys);
  //console.log(keys.length);
  const creds = { signRequest: {} };
  const subId = '1234556';

  keys.forEach((key) => {
    console.log(key);
    const Client = azure[key];
    var c;
    try {
      if (key === 'createKeyVaultClient' || key === 'createSubscriptionManagementClient' ||
        key === 'createDataLakeAnalyticsJobManagementClient' || key === 'createDataLakeStoreFileSystemManagementClient' ||
        key === 'createDataLakeAnalyticsCatalogManagementClient') {
        c = new Client(creds);
      } else if (key === 'createServiceFabricClient') {
        c = new Client();
      } else {
        c = new Client(creds, subId);
      }
      //console.dir(Object.keys(c));
    } catch (err) {
      console.dir(err);
    }
  });
});

// This task synchronizes the dependencies in package.json to the versions of relative service libraries inside lib/services directory.
// This should be done in the end to ensure that all the package dependencies have the correct version.
gulp.task('sync-deps-rollup', () => {
  let packagePaths = glob.sync(path.join(azureSDKForNodeRepoRoot, './lib/services', '/**/package.json')).filter((packagePath) => {
    return packagePath.match(regexForExcludedServices) === null;
  });
  //console.log(packagePaths);
  console.log(`Total packages found under lib/services: ${packagePaths.length}`);
  let rollupPackage = require('./package.json');
  let rollupDependencies = rollupPackage.dependencies;
  rollupDependencies['ms-rest'] = '^2.2.2';
  rollupDependencies['ms-rest-azure'] = '^2.3.4';
  packagePaths.forEach((packagePath) => {
    const packageJson = require(packagePath);
    //console.log(package);
    let packageName = packageJson.name;
    let packageVersion = packageJson.version;
    rollupDependencies[packageName] = packageVersion;
  });
  rollupPackage.dependencies = Object.keys(rollupDependencies).sort().reduce((r: any, k: any) => (r[k] = rollupDependencies[k], r), {});
  console.log(`Total number of dependencies in the rollup package: ${Object.keys(rollupPackage.dependencies).length}`);
  fs.writeFileSync('./package.json', JSON.stringify(rollupPackage, null, 2), { 'encoding': 'utf8' });
});

gulp.task('publish', () => {
  const nodejsReadmeFilePaths = findReadmeNodejsMdFilePaths(azureRestAPISpecsRoot);

  let errorPackages = 0;
  let upToDatePackages = 0;
  let publishedPackages = 0;
  let publishedPackagesSkipped = 0;

  const currentDirectoryPath = __dirname;

  const npmrcFileName = ".npmrc";
  const npmrcRootFilePath = path.join(currentDirectoryPath, npmrcFileName);
  const npmrcRootFileExists = fs.existsSync(npmrcRootFilePath);
  if (npmrcRootFileExists) {
    console.log(`Found ".npmrc" auth file at "${npmrcRootFilePath}". Using it to authenticate with NPM for publish.`);
  }

  for (let i = 0; i < nodejsReadmeFilePaths.length; ++i) {
    const nodejsReadmeFilePath = nodejsReadmeFilePaths[i];
    const nodejsReadmeFileContents = fs.readFileSync(nodejsReadmeFilePath, 'utf8');
    const relativeOutputFolderPath = nodejsReadmeFileContents.match(/output\-folder: \$\(node\-sdks\-folder\)\/(lib\/services\/\S+)/)[1];
    const packageFolderPath = path.resolve(azureSDKForNodeRepoRoot, relativeOutputFolderPath);
    if (!fs.existsSync(packageFolderPath)) {
      console.log(`WARNING: Package folder ${packageFolderPath} has not been generated.`);
      errorPackages++;
    }
    else {
      const packageJsonFilePath = `${packageFolderPath}/package.json`;
      if (!fs.existsSync(packageJsonFilePath)) {
        console.log(`WARNING: Package folder ${packageFolderPath} is missing its package.json file.`);
        errorPackages++;
      }
      else {
        const packageJson = require(packageJsonFilePath);
        const packageName = packageJson.name;

        if (!packageName || packageName === packageName || packageName.endsWith(`-${packageName}`)) {
          const localPackageVersion = packageJson.version;
          if (!localPackageVersion) {
            console.log(`ERROR: "${packageJsonFilePath}" doesn't have a version specified.`);
            errorPackages++;
          }
          else {
            let npmPackageVersion;
            try {
              const npmViewResult = JSON.parse(execSync(`npm view ${packageName} --json`, { stdio: ['pipe', 'pipe', 'ignore'] }));
              npmPackageVersion = npmViewResult['dist-tags']['latest'];
            }
            catch (error) {
              // This happens if the package doesn't exist in NPM.
            }

            if (localPackageVersion === npmPackageVersion) {
              upToDatePackages++;
            }
            else {
              console.log(`Publishing package "${packageName}" with version "${localPackageVersion}"...${whatif ? " (SKIPPED)" : ""}`);
              if (!whatif) {
                try {
                  const npmrcPackageFilePath = path.join(packageFolderPath, npmrcFileName);
                  if (npmrcRootFileExists) {
                    fs.copyFileSync(npmrcRootFilePath, npmrcPackageFilePath);
                  }
                  execSync(`npm publish --access public`, { cwd: packageFolderPath });
                  publishedPackages++;
                }
                catch (error) {
                  console.log(`ERROR: ${JSON.stringify(error)}`);
                  errorPackages++;
                }
              } else {
                publishedPackagesSkipped++;
              }
            }
          }
        }
      }
    }
  }

  console.log();
  console.log(`Error packages:             ${errorPackages}`);
  console.log(`Up to date packages:        ${upToDatePackages}`);
  console.log(`Published packages:         ${publishedPackages}`);
  console.log(`Published packages skipped: ${publishedPackagesSkipped}`);
});

gulp.task("regenerate", async () => {
  return new Promise((resolve, reject) => {
    const argv = Argv.construct(Argv.Options.Repository)
      .options({
        "branch": {
          alias: "b",
          string: true,
          description: "Name of the AutoPR branch",
          implies: "package"
        },
        "package": {
          alias: "p",
          string: true,
          description: "Name of the regenerated package"
        },
        "pull-request": {
          alias: "pr",
          string: true,
          description: "URL to GitHub pull request"
        },
        "skip-version-bump": {
          boolean: true,
          description: "Determines if version bumping should be skipped"
        },
        "request-review": {
          boolean: true,
          description: "Determines if review should be automatically requested on matching pull request"
        }
      }).usage("gulp regenerate --branch 'restapi_auto_daschult/sql'").argv;

    getDataFromPullRequest(argv["pull-request"]).then(data => {
      const branchName = argv.branch || data.branchName;
      const packageName = argv.package || data.packageName;

      regenerate(branchName, packageName, argv["azure-sdk-for-js-root"], argv["azure-rest-api-specs-root"], data.prId, argv["skip-version-bump"], argv["request-review"])
        .then(_ => resolve(),
          error => reject(error));
    }).catch(error => {
      reject(error)
    });
  });
});