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
 * Properties of the event source.
 *
 * @extends models['ResourceProperties']
 */
class EventSourceCommonProperties extends models['ResourceProperties'] {
  /**
   * Create a EventSourceCommonProperties.
   * @member {string} [timestampPropertyName] The event property that will be
   * used as the event source's timestamp. If a value isn't specified for
   * timestampPropertyName, or if null or empty-string is specified, the event
   * creation time will be used.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EventSourceCommonProperties
   *
   * @returns {object} metadata of EventSourceCommonProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventSourceCommonProperties',
      type: {
        name: 'Composite',
        className: 'EventSourceCommonProperties',
        modelProperties: {
          provisioningState: {
            required: false,
            serializedName: 'provisioningState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Accepted', 'Creating', 'Updating', 'Succeeded', 'Failed', 'Deleting' ]
            }
          },
          creationTime: {
            required: false,
            readOnly: true,
            serializedName: 'creationTime',
            type: {
              name: 'DateTime'
            }
          },
          timestampPropertyName: {
            required: false,
            serializedName: 'timestampPropertyName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EventSourceCommonProperties;