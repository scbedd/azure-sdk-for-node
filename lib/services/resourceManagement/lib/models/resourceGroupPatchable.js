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
 * Resource group information.
 *
 */
class ResourceGroupPatchable {
  /**
   * Create a ResourceGroupPatchable.
   * @property {string} [name] The name of the resource group.
   * @property {object} [properties]
   * @property {string} [properties.provisioningState] The provisioning state.
   * @property {string} [managedBy] The ID of the resource that manages this
   * resource group.
   * @property {object} [tags] The tags attached to the resource group.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResourceGroupPatchable
   *
   * @returns {object} metadata of ResourceGroupPatchable
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceGroupPatchable',
      type: {
        name: 'Composite',
        className: 'ResourceGroupPatchable',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'ResourceGroupProperties'
            }
          },
          managedBy: {
            required: false,
            serializedName: 'managedBy',
            type: {
              name: 'String'
            }
          },
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
          }
        }
      }
    };
  }
}

module.exports = ResourceGroupPatchable;