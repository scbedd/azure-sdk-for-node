/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// all the requires
var should = require('should');
var MSIVmTokenCredentials = require('../lib/credentials/msiVmTokenCredentials');

const nodeSdkTestSubscription = "92f95d8f-3c67-4124-91c7-8cf07cdbf241";

function setup(done) {
  var msRestAzure = require('ms-rest-azure');
  var computeManagementClient = require('azure-arm-compute');

  msRestAzure.interactiveLogin(function (err, credentials) {
    const client = new computeManagementClient(credentials, nodeSdkTestSubscription);
    client.virtualMachines.list("azure-sdk-for-node", (err, result) => {
      console.log(result);
      done();
    });
  });
};


describe('MSI Vm Authentication', function () {
  before(function(done) {
    setup(done);
  });

  it('should get token from the virtual machine with MSI service running at default endpoint', function (done) {
    let response = {
      access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1d',
      refresh_token: '',
      expires_in: '3599',
      expires_on: '1502930996',
      not_before: '1502927096',
      resource: 'https://management.azure.com/',
      token_type: 'Bearer'
    };

    let requestBodyToMatch = {
      "resource": "https://management.azure.com/"
    };

    let msiCredsObj = new MSIVmTokenCredentials();
    msiCredsObj.getToken((err, response) => {
      should.not.exist(err);
      should.exist(response);
      should.exist(response.accessToken);
      should.exist(response.tokenType);
      done();
    });
  });

  it('should get token from the virtual machine with MSI service running at custom endpoint', function (done) {
    let response = {
      access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1d',
      refresh_token: '',
      expires_in: '3599',
      expires_on: '1502930996',
      not_before: '1502927096',
      resource: 'https://management.azure.com/',
      token_type: 'Bearer'
    };

    let requestBodyToMatch = {
      "resource": "https://management.azure.com/"
    };

    let customMsiEndpoint = "http://localhost:50342";

    let msiCredsObj = new MSIVmTokenCredentials({
      msiEndpoint: `${customMsiEndpoint}/oauth2/token`
    });
    msiCredsObj.getToken((err, response) => {
      should.not.exist(err);
      should.exist(response);
      should.exist(response.accessToken);
      should.exist(response.tokenType);
      done();
    });
  });

  it('should throw on requests with bad resource', function (done) {
    let errorResponse = {
      "error": "unkwnown",
      "error_description": "Failed to retrieve token from the Active directory. For details see logs in C:\\User1\\Logs\\Plugins\\Microsoft.Identity.MSI\\1.0\\service_identity_0.log"
    };

    let requestBodyToMatch = {
      "resource": "badvalue"
    };


    let msiCredsObj = new MSIVmTokenCredentials({
      "resource": "badvalue"
    });
    msiCredsObj.getToken((err, response) => {
      should.exist(err);
      should.not.exist(response);
      done();
    });
  });

  it('should throw on request with empty resource', function (done) {
    let errorResponse = {
      "error": "bad_resource_200",
      "error_description": "Invalid Resource"
    };

    let requestBodyToMatch = {
      "resource": "  "
    };


    let msiCredsObj = new MSIVmTokenCredentials({
      "resource": "  "
    });
    msiCredsObj.getToken((err, response) => {
      should.exist(err);
      should.equal(err.error, "bad_resource_200");
      should.not.exist(response);
      done();
    });
  });
});
