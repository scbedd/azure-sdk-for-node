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
 * @summary The endpoint configuration for a Pool.
  *
 */
class PoolEndpointConfiguration {
  /**
   * Create a PoolEndpointConfiguration.
   * @property {array} inboundNATPools A list of inbound NAT Pools that can be
   * used to address specific ports on an individual Compute Node externally.
   * The maximum number of inbound NAT Pools per Batch Pool is 5. If the
   * maximum number of inbound NAT Pools is exceeded the request fails with
   * HTTP status code 400.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PoolEndpointConfiguration
   *
   * @returns {object} metadata of PoolEndpointConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PoolEndpointConfiguration',
      type: {
        name: 'Composite',
        className: 'PoolEndpointConfiguration',
        modelProperties: {
          inboundNATPools: {
            required: true,
            serializedName: 'inboundNATPools',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InboundNATPoolElementType',
                  type: {
                    name: 'Composite',
                    className: 'InboundNATPool'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PoolEndpointConfiguration;
