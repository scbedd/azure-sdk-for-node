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
 * This class can be used as the Type for any secret entity represented as
 * Password, CertThumbprint, Algorithm. This class is intended to be used when
 * the secret is encrypted with an asymmetric key pair. The encryptionAlgorithm
 * field is mainly for future usage to potentially allow different entities
 * encrypted using different algorithms.
 *
 */
class AsymmetricEncryptedSecret {
  /**
   * Create a AsymmetricEncryptedSecret.
   * @member {string} value The value of the secret itself. If the secret is in
   * plaintext then EncryptionAlgorithm will be none and
   * EncryptionCertThumbprint will be null.
   * @member {string} [encryptionCertificateThumbprint] Thumbprint certificate
   * that was used to encrypt "Value"
   * @member {string} encryptionAlgorithm Algorithm used to encrypt "Value".
   * Possible values include: 'None', 'AES256', 'RSAES_PKCS1_v_1_5'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AsymmetricEncryptedSecret
   *
   * @returns {object} metadata of AsymmetricEncryptedSecret
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AsymmetricEncryptedSecret',
      type: {
        name: 'Composite',
        className: 'AsymmetricEncryptedSecret',
        modelProperties: {
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          encryptionCertificateThumbprint: {
            required: false,
            serializedName: 'encryptionCertificateThumbprint',
            type: {
              name: 'String'
            }
          },
          encryptionAlgorithm: {
            required: true,
            serializedName: 'encryptionAlgorithm',
            type: {
              name: 'Enum',
              allowedValues: [ 'None', 'AES256', 'RSAES_PKCS1_v_1_5' ]
            }
          }
        }
      }
    };
  }
}

module.exports = AsymmetricEncryptedSecret;