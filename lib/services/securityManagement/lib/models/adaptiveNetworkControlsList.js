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
 * Response for ListAdaptiveNetworkControls API service call
 */
class AdaptiveNetworkControlsList extends Array {
  /**
   * Create a AdaptiveNetworkControlsList.
   * @property {string} [nextLink] The URL to get the next set of results
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AdaptiveNetworkControlsList
   *
   * @returns {object} metadata of AdaptiveNetworkControlsList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AdaptiveNetworkControlsList',
      type: {
        name: 'Composite',
        className: 'AdaptiveNetworkControlsList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AdaptiveNetworkControlsElementType',
                  type: {
                    name: 'Composite',
                    className: 'AdaptiveNetworkControls'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AdaptiveNetworkControlsList;