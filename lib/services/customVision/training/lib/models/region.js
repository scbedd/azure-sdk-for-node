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
 * Class representing a Region.
 */
class Region {
  /**
   * Create a Region.
   * @member {uuid} [tagId]
   * @member {number} [left]
   * @member {number} [top]
   * @member {number} [width]
   * @member {number} [height]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Region
   *
   * @returns {object} metadata of Region
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Region',
      type: {
        name: 'Composite',
        className: 'Region',
        modelProperties: {
          tagId: {
            required: false,
            serializedName: 'tagId',
            type: {
              name: 'String'
            }
          },
          left: {
            required: false,
            serializedName: 'left',
            type: {
              name: 'Number'
            }
          },
          top: {
            required: false,
            serializedName: 'top',
            type: {
              name: 'Number'
            }
          },
          width: {
            required: false,
            serializedName: 'width',
            type: {
              name: 'Number'
            }
          },
          height: {
            required: false,
            serializedName: 'height',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Region;