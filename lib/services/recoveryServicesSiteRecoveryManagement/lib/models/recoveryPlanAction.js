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
 * Recovery plan action details.
 *
 */
class RecoveryPlanAction {
  /**
   * Create a RecoveryPlanAction.
   * @member {string} actionName The action name.
   * @member {array} failoverTypes The list of failover types.
   * @member {array} failoverDirections The list of failover directions.
   * @member {object} customDetails The custom details.
   * @member {string} [customDetails.instanceType] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of RecoveryPlanAction
   *
   * @returns {object} metadata of RecoveryPlanAction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecoveryPlanAction',
      type: {
        name: 'Composite',
        className: 'RecoveryPlanAction',
        modelProperties: {
          actionName: {
            required: true,
            serializedName: 'actionName',
            type: {
              name: 'String'
            }
          },
          failoverTypes: {
            required: true,
            serializedName: 'failoverTypes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReplicationProtectedItemOperationElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          failoverDirections: {
            required: true,
            serializedName: 'failoverDirections',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PossibleOperationsDirectionsElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          customDetails: {
            required: true,
            serializedName: 'customDetails',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'instanceType',
                clientName: 'instanceType'
              },
              uberParent: 'RecoveryPlanActionDetails',
              className: 'RecoveryPlanActionDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = RecoveryPlanAction;
