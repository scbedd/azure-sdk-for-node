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
 * Process Module Information.
 *
 * @extends models['ProxyOnlyResource']
 */
class ProcessModuleInfo extends models['ProxyOnlyResource'] {
  /**
   * Create a ProcessModuleInfo.
   * @member {string} [baseAddress] Base address. Used as module identifier in
   * ARM resource URI.
   * @member {string} [fileName] File name.
   * @member {string} [href] HRef URI.
   * @member {string} [filePath] File path.
   * @member {number} [moduleMemorySize] Module memory size.
   * @member {string} [fileVersion] File version.
   * @member {string} [fileDescription] File description.
   * @member {string} [product] Product name.
   * @member {string} [productVersion] Product version.
   * @member {boolean} [isDebug] Is debug?
   * @member {string} [language] Module language (locale).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProcessModuleInfo
   *
   * @returns {object} metadata of ProcessModuleInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProcessModuleInfo',
      type: {
        name: 'Composite',
        className: 'ProcessModuleInfo',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          baseAddress: {
            required: false,
            serializedName: 'properties.base_address',
            type: {
              name: 'String'
            }
          },
          fileName: {
            required: false,
            serializedName: 'properties.file_name',
            type: {
              name: 'String'
            }
          },
          href: {
            required: false,
            serializedName: 'properties.href',
            type: {
              name: 'String'
            }
          },
          filePath: {
            required: false,
            serializedName: 'properties.file_path',
            type: {
              name: 'String'
            }
          },
          moduleMemorySize: {
            required: false,
            serializedName: 'properties.module_memory_size',
            type: {
              name: 'Number'
            }
          },
          fileVersion: {
            required: false,
            serializedName: 'properties.file_version',
            type: {
              name: 'String'
            }
          },
          fileDescription: {
            required: false,
            serializedName: 'properties.file_description',
            type: {
              name: 'String'
            }
          },
          product: {
            required: false,
            serializedName: 'properties.product',
            type: {
              name: 'String'
            }
          },
          productVersion: {
            required: false,
            serializedName: 'properties.product_version',
            type: {
              name: 'String'
            }
          },
          isDebug: {
            required: false,
            serializedName: 'properties.is_debug',
            type: {
              name: 'Boolean'
            }
          },
          language: {
            required: false,
            serializedName: 'properties.language',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProcessModuleInfo;