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
 * Set the connectivity, storage and workload settings.
 *
 */
class ServerConfigurationsManagementSettings {
  /**
   * Create a ServerConfigurationsManagementSettings.
   * @property {object} [sqlConnectivityUpdateSettings] SQL connectivity type
   * settings.
   * @property {string} [sqlConnectivityUpdateSettings.connectivityType] SQL
   * Server connectivity option. Possible values include: 'LOCAL', 'PRIVATE',
   * 'PUBLIC'
   * @property {number} [sqlConnectivityUpdateSettings.port] SQL Server port.
   * @property {string} [sqlConnectivityUpdateSettings.sqlAuthUpdateUserName]
   * SQL Server sysadmin login to create.
   * @property {string} [sqlConnectivityUpdateSettings.sqlAuthUpdatePassword]
   * SQL Server sysadmin login password.
   * @property {object} [sqlWorkloadTypeUpdateSettings] SQL workload type
   * settings.
   * @property {string} [sqlWorkloadTypeUpdateSettings.sqlWorkloadType] SQL
   * Server workload type. Possible values include: 'GENERAL', 'OLTP', 'DW'
   * @property {object} [sqlStorageUpdateSettings] SQL storage update settings.
   * @property {number} [sqlStorageUpdateSettings.diskCount] Virtual machine
   * disk count.
   * @property {string} [sqlStorageUpdateSettings.diskConfigurationType] Disk
   * configuration to apply to SQL Server. Possible values include: 'NEW',
   * 'EXTEND', 'ADD'
   * @property {number} [sqlStorageUpdateSettings.startingDeviceId] Device id
   * of the first disk to be updated.
   * @property {object} [additionalFeaturesServerConfigurations] Additional SQL
   * feature settings.
   * @property {boolean}
   * [additionalFeaturesServerConfigurations.isRServicesEnabled] Enable or
   * disable R services (SQL 2016 onwards).
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServerConfigurationsManagementSettings
   *
   * @returns {object} metadata of ServerConfigurationsManagementSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServerConfigurationsManagementSettings',
      type: {
        name: 'Composite',
        className: 'ServerConfigurationsManagementSettings',
        modelProperties: {
          sqlConnectivityUpdateSettings: {
            required: false,
            serializedName: 'sqlConnectivityUpdateSettings',
            type: {
              name: 'Composite',
              className: 'SqlConnectivityUpdateSettings'
            }
          },
          sqlWorkloadTypeUpdateSettings: {
            required: false,
            serializedName: 'sqlWorkloadTypeUpdateSettings',
            type: {
              name: 'Composite',
              className: 'SqlWorkloadTypeUpdateSettings'
            }
          },
          sqlStorageUpdateSettings: {
            required: false,
            serializedName: 'sqlStorageUpdateSettings',
            type: {
              name: 'Composite',
              className: 'SqlStorageUpdateSettings'
            }
          },
          additionalFeaturesServerConfigurations: {
            required: false,
            serializedName: 'additionalFeaturesServerConfigurations',
            type: {
              name: 'Composite',
              className: 'AdditionalFeaturesServerConfigurations'
            }
          }
        }
      }
    };
  }
}

module.exports = ServerConfigurationsManagementSettings;
