/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The parameters that can be used to update an existing Data Lake Analytics
 * account.
 *
 */
class UpdateDataLakeAnalyticsAccountParameters {
  /**
   * Create a UpdateDataLakeAnalyticsAccountParameters.
   * @member {object} [tags] The resource tags.
   * @member {array} [dataLakeStoreAccounts] The list of Data Lake Store
   * accounts associated with this account.
   * @member {array} [storageAccounts] The list of Azure Blob storage accounts
   * associated with this account.
   * @member {array} [computePolicies] The list of compute policies associated
   * with this account.
   * @member {array} [firewallRules] The list of firewall rules associated with
   * this account.
   * @member {string} [firewallState] The current state of the IP address
   * firewall for this account. Disabling the firewall does not remove existing
   * rules, they will just be ignored until the firewall is re-enabled.
   * Possible values include: 'Enabled', 'Disabled'
   * @member {string} [firewallAllowAzureIps] The current state of allowing or
   * disallowing IPs originating within Azure through the firewall. If the
   * firewall is disabled, this is not enforced. Possible values include:
   * 'Enabled', 'Disabled'
   * @member {string} [newTier] The commitment tier to use for next month.
   * Possible values include: 'Consumption', 'Commitment_100AUHours',
   * 'Commitment_500AUHours', 'Commitment_1000AUHours',
   * 'Commitment_5000AUHours', 'Commitment_10000AUHours',
   * 'Commitment_50000AUHours', 'Commitment_100000AUHours',
   * 'Commitment_500000AUHours'
   * @member {number} [maxJobCount] The maximum supported jobs running under
   * the account at the same time.
   * @member {number} [maxDegreeOfParallelism] The maximum supported degree of
   * parallelism for this account.
   * @member {number} [maxDegreeOfParallelismPerJob] The maximum supported
   * degree of parallelism per job for this account.
   * @member {number} [minPriorityPerJob] The minimum supported priority per
   * job for this account.
   * @member {number} [queryStoreRetention] The number of days that job
   * metadata is retained.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateDataLakeAnalyticsAccountParameters
   *
   * @returns {object} metadata of UpdateDataLakeAnalyticsAccountParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateDataLakeAnalyticsAccountParameters',
      type: {
        name: 'Composite',
        className: 'UpdateDataLakeAnalyticsAccountParameters',
        modelProperties: {
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          dataLakeStoreAccounts: {
            required: false,
            serializedName: 'properties.dataLakeStoreAccounts',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UpdateDataLakeStoreWithAccountParametersElementType',
                  type: {
                    name: 'Composite',
                    className: 'UpdateDataLakeStoreWithAccountParameters'
                  }
              }
            }
          },
          storageAccounts: {
            required: false,
            serializedName: 'properties.storageAccounts',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UpdateStorageAccountWithAccountParametersElementType',
                  type: {
                    name: 'Composite',
                    className: 'UpdateStorageAccountWithAccountParameters'
                  }
              }
            }
          },
          computePolicies: {
            required: false,
            serializedName: 'properties.computePolicies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UpdateComputePolicyWithAccountParametersElementType',
                  type: {
                    name: 'Composite',
                    className: 'UpdateComputePolicyWithAccountParameters'
                  }
              }
            }
          },
          firewallRules: {
            required: false,
            serializedName: 'properties.firewallRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UpdateFirewallRuleWithAccountParametersElementType',
                  type: {
                    name: 'Composite',
                    className: 'UpdateFirewallRuleWithAccountParameters'
                  }
              }
            }
          },
          firewallState: {
            required: false,
            serializedName: 'properties.firewallState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          },
          firewallAllowAzureIps: {
            required: false,
            serializedName: 'properties.firewallAllowAzureIps',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          },
          newTier: {
            required: false,
            serializedName: 'properties.newTier',
            type: {
              name: 'Enum',
              allowedValues: [ 'Consumption', 'Commitment_100AUHours', 'Commitment_500AUHours', 'Commitment_1000AUHours', 'Commitment_5000AUHours', 'Commitment_10000AUHours', 'Commitment_50000AUHours', 'Commitment_100000AUHours', 'Commitment_500000AUHours' ]
            }
          },
          maxJobCount: {
            required: false,
            serializedName: 'properties.maxJobCount',
            constraints: {
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          maxDegreeOfParallelism: {
            required: false,
            serializedName: 'properties.maxDegreeOfParallelism',
            constraints: {
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          maxDegreeOfParallelismPerJob: {
            required: false,
            serializedName: 'properties.maxDegreeOfParallelismPerJob',
            constraints: {
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          minPriorityPerJob: {
            required: false,
            serializedName: 'properties.minPriorityPerJob',
            constraints: {
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          queryStoreRetention: {
            required: false,
            serializedName: 'properties.queryStoreRetention',
            constraints: {
              InclusiveMaximum: 180,
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateDataLakeAnalyticsAccountParameters;