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
 * The parameters used to create a new compute policy while creating a new Data
 * Lake Analytics account.
 *
 */
class CreateComputePolicyWithAccountParameters {
  /**
   * Create a CreateComputePolicyWithAccountParameters.
   * @member {string} name The unique name of the compute policy to create.
   * @member {uuid} objectId The AAD object identifier for the entity to create
   * a policy for.
   * @member {string} objectType The type of AAD object the object identifier
   * refers to. Possible values include: 'User', 'Group', 'ServicePrincipal'
   * @member {number} [maxDegreeOfParallelismPerJob] The maximum degree of
   * parallelism per job this user can use to submit jobs. This property, the
   * min priority per job property, or both must be passed.
   * @member {number} [minPriorityPerJob] The minimum priority per job this
   * user can use to submit jobs. This property, the max degree of parallelism
   * per job property, or both must be passed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateComputePolicyWithAccountParameters
   *
   * @returns {object} metadata of CreateComputePolicyWithAccountParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateComputePolicyWithAccountParameters',
      type: {
        name: 'Composite',
        className: 'CreateComputePolicyWithAccountParameters',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          objectId: {
            required: true,
            serializedName: 'properties.objectId',
            type: {
              name: 'String'
            }
          },
          objectType: {
            required: true,
            serializedName: 'properties.objectType',
            type: {
              name: 'String'
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
          }
        }
      }
    };
  }
}

module.exports = CreateComputePolicyWithAccountParameters;