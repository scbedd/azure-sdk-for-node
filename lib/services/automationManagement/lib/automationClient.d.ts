/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientCredentials } from 'ms-rest';
import { AzureServiceClient, AzureServiceClientOptions } from 'ms-rest-azure';
import * as models from "./models";
import * as operations from "./operations";

export default class AutomationClient extends AzureServiceClient {
  /**
   * Initializes a new instance of the AutomationClient class.
   * @constructor
   *
   * @class
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: AzureServiceClientOptions);

  credentials: ServiceClientCredentials;

  subscriptionId: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;

  // Operation groups
  automationAccountOperations: operations.AutomationAccountOperations;
  operations: operations.Operations;
  statisticsOperations: operations.StatisticsOperations;
  usages: operations.Usages;
  keys: operations.Keys;
  certificateOperations: operations.CertificateOperations;
  connectionOperations: operations.ConnectionOperations;
  connectionTypeOperations: operations.ConnectionTypeOperations;
  credentialOperations: operations.CredentialOperations;
  dscConfigurationOperations: operations.DscConfigurationOperations;
  hybridRunbookWorkerGroupOperations: operations.HybridRunbookWorkerGroupOperations;
  jobScheduleOperations: operations.JobScheduleOperations;
  linkedWorkspaceOperations: operations.LinkedWorkspaceOperations;
  activityOperations: operations.ActivityOperations;
  moduleOperations: operations.ModuleOperations;
  objectDataTypes: operations.ObjectDataTypes;
  fields: operations.Fields;
  runbookDraftOperations: operations.RunbookDraftOperations;
  runbookOperations: operations.RunbookOperations;
  testJobStreams: operations.TestJobStreams;
  testJobOperations: operations.TestJobOperations;
  scheduleOperations: operations.ScheduleOperations;
  variableOperations: operations.VariableOperations;
  webhookOperations: operations.WebhookOperations;
  softwareUpdateConfigurations: operations.SoftwareUpdateConfigurations;
  softwareUpdateConfigurationRuns: operations.SoftwareUpdateConfigurationRuns;
  softwareUpdateConfigurationMachineRuns: operations.SoftwareUpdateConfigurationMachineRuns;
  sourceControlOperations: operations.SourceControlOperations;
  sourceControlSyncJobOperations: operations.SourceControlSyncJobOperations;
  sourceControlSyncJobStreams: operations.SourceControlSyncJobStreams;
  jobOperations: operations.JobOperations;
  jobStreamOperations: operations.JobStreamOperations;
  agentRegistrationInformation: operations.AgentRegistrationInformation;
  dscNodeOperations: operations.DscNodeOperations;
  nodeReports: operations.NodeReports;
  dscCompilationJobOperations: operations.DscCompilationJobOperations;
  dscCompilationJobStream: operations.DscCompilationJobStream;
  dscNodeConfigurationOperations: operations.DscNodeConfigurationOperations;
}

export { AutomationClient, models as AutomationModels };
