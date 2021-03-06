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

/**
 * Data Lake Store account information to update.
 *
 */
class UpdateDataLakeStoreAccountParameters {
  /**
   * Create a UpdateDataLakeStoreAccountParameters.
   * @property {object} [tags] Resource tags
   * @property {string} [defaultGroup] The default owner group for all new
   * folders and files created in the Data Lake Store account.
   * @property {object} [encryptionConfig] Used for rotation of user managed
   * Key Vault keys. Can only be used to rotate a user managed encryption Key
   * Vault key.
   * @property {object} [encryptionConfig.keyVaultMetaInfo] The updated Key
   * Vault key to use in user managed key rotation.
   * @property {string}
   * [encryptionConfig.keyVaultMetaInfo.encryptionKeyVersion] The version of
   * the user managed encryption key to update through a key rotation.
   * @property {array} [firewallRules] The list of firewall rules associated
   * with this Data Lake Store account.
   * @property {array} [virtualNetworkRules] The list of virtual network rules
   * associated with this Data Lake Store account.
   * @property {string} [firewallState] The current state of the IP address
   * firewall for this Data Lake Store account. Disabling the firewall does not
   * remove existing rules, they will just be ignored until the firewall is
   * re-enabled. Possible values include: 'Enabled', 'Disabled'
   * @property {string} [firewallAllowAzureIps] The current state of allowing
   * or disallowing IPs originating within Azure through the firewall. If the
   * firewall is disabled, this is not enforced. Possible values include:
   * 'Enabled', 'Disabled'
   * @property {array} [trustedIdProviders] The list of trusted identity
   * providers associated with this Data Lake Store account.
   * @property {string} [trustedIdProviderState] The current state of the
   * trusted identity provider feature for this Data Lake Store account.
   * Disabling trusted identity provider functionality does not remove the
   * providers, they will just be ignored until this feature is re-enabled.
   * Possible values include: 'Enabled', 'Disabled'
   * @property {string} [newTier] The commitment tier to use for next month.
   * Possible values include: 'Consumption', 'Commitment_1TB',
   * 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB',
   * 'Commitment_1PB', 'Commitment_5PB'
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateDataLakeStoreAccountParameters
   *
   * @returns {object} metadata of UpdateDataLakeStoreAccountParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateDataLakeStoreAccountParameters',
      type: {
        name: 'Composite',
        className: 'UpdateDataLakeStoreAccountParameters',
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
          defaultGroup: {
            required: false,
            serializedName: 'properties.defaultGroup',
            type: {
              name: 'String'
            }
          },
          encryptionConfig: {
            required: false,
            serializedName: 'properties.encryptionConfig',
            type: {
              name: 'Composite',
              className: 'UpdateEncryptionConfig'
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
          virtualNetworkRules: {
            required: false,
            serializedName: 'properties.virtualNetworkRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UpdateVirtualNetworkRuleWithAccountParametersElementType',
                  type: {
                    name: 'Composite',
                    className: 'UpdateVirtualNetworkRuleWithAccountParameters'
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
          trustedIdProviders: {
            required: false,
            serializedName: 'properties.trustedIdProviders',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UpdateTrustedIdProviderWithAccountParametersElementType',
                  type: {
                    name: 'Composite',
                    className: 'UpdateTrustedIdProviderWithAccountParameters'
                  }
              }
            }
          },
          trustedIdProviderState: {
            required: false,
            serializedName: 'properties.trustedIdProviderState',
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
              allowedValues: [ 'Consumption', 'Commitment_1TB', 'Commitment_10TB', 'Commitment_100TB', 'Commitment_500TB', 'Commitment_1PB', 'Commitment_5PB' ]
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateDataLakeStoreAccountParameters;
