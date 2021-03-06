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
 * The response of a list operation.
 */
class ResponseWithContinuationEnvironmentSetting extends Array {
  /**
   * Create a ResponseWithContinuationEnvironmentSetting.
   * @property {string} [nextLink] Link for next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ResponseWithContinuationEnvironmentSetting
   *
   * @returns {object} metadata of ResponseWithContinuationEnvironmentSetting
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResponseWithContinuation_EnvironmentSetting_',
      type: {
        name: 'Composite',
        className: 'ResponseWithContinuationEnvironmentSetting',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EnvironmentSettingElementType',
                  type: {
                    name: 'Composite',
                    className: 'EnvironmentSetting'
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

module.exports = ResponseWithContinuationEnvironmentSetting;
