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
 * Detailed runtime information of the rollout.
 *
 */
class RolloutOperationInfo {
  /**
   * Create a RolloutOperationInfo.
   * @member {number} [retryAttempt] The ordinal count of the number of retry
   * attempts on a rollout. 0 if no retries of the rollout have been performed.
   * If the rollout is updated with a PUT, this count is reset to 0.
   * @member {boolean} [skipSucceededOnRetry] True, if all steps that succeeded
   * on the previous run/attempt were chosen to be skipped in this retry
   * attempt. False, otherwise.
   * @member {date} [startTime] The start time of the rollout in UTC.
   * @member {date} [endTime] The start time of the rollout in UTC. This
   * property will not be set if the rollout has not completed yet.
   * @member {object} [error] The detailed error information for any failure.
   * @member {string} [error.code] Error code string.
   * @member {string} [error.message] Descriptive error information.
   * @member {string} [error.target] Error target
   * @member {array} [error.details] More detailed error information.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RolloutOperationInfo
   *
   * @returns {object} metadata of RolloutOperationInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RolloutOperationInfo',
      type: {
        name: 'Composite',
        className: 'RolloutOperationInfo',
        modelProperties: {
          retryAttempt: {
            required: false,
            readOnly: true,
            serializedName: 'retryAttempt',
            type: {
              name: 'Number'
            }
          },
          skipSucceededOnRetry: {
            required: false,
            readOnly: true,
            serializedName: 'skipSucceededOnRetry',
            type: {
              name: 'Boolean'
            }
          },
          startTime: {
            required: false,
            readOnly: true,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            readOnly: true,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          error: {
            required: false,
            readOnly: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'CloudErrorBody'
            }
          }
        }
      }
    };
  }
}

module.exports = RolloutOperationInfo;