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
 * Abstract base class for data change detection policies.
 *
 */
class DataChangeDetectionPolicy {
  /**
   * Create a DataChangeDetectionPolicy.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataChangeDetectionPolicy
   *
   * @returns {object} metadata of DataChangeDetectionPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataChangeDetectionPolicy',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'DataChangeDetectionPolicy',
        className: 'DataChangeDetectionPolicy',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataChangeDetectionPolicy;