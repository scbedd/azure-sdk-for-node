/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

export interface ErrorDetailsItem {
  /**
   * Error code.
  */
  readonly code?: string;
  /**
   * If available, a human readable description of the error.
  */
  readonly message?: string;
  /**
   * If available, the component generating the error.
  */
  readonly target?: string;
}

/**
 * This object is returned when an error occurs in the Maps API
*/
export interface ErrorModel {
  /**
   * Error code.
  */
  readonly code?: string;
  /**
   * If available, a human readable description of the error.
  */
  readonly message?: string;
  /**
   * If available, the component generating the error.
  */
  readonly target?: string;
  /**
   * If available, a list of additional details about the error.
  */
  readonly details?: ErrorDetailsItem[];
}

/**
 * An Azure resource
*/
export interface Resource extends BaseResource {
  /**
   * The fully qualified Maps Account resource identifier.
  */
  readonly id?: string;
  /**
   * The name of the Maps Account, which is unique within a Resource Group.
  */
  readonly name?: string;
  /**
   * Azure resource type.
  */
  readonly type?: string;
}

/**
 * The SKU of the Maps Account.
*/
export interface Sku {
  /**
   * The name of the SKU, in standard format (such as S0).
  */
  name: string;
  /**
   * Gets the sku tier. This is based on the SKU name.
  */
  readonly tier?: string;
}

/**
 * Additional Map account properties
*/
export interface MapsAccountProperties {
  /**
   * A unique identifier for the maps account
  */
  xMsClientId?: string;
}

/**
 * An Azure resource which represents access to a suite of Maps REST APIs.
*/
export interface MapsAccount extends Resource {
  /**
   * The location of the resource.
  */
  readonly location?: string;
  /**
   * Gets a list of key value pairs that describe the resource. These tags can be used in viewing
   * and grouping this resource (across resource groups). A maximum of 15 tags can be provided for
   * a resource. Each tag must have a key no greater than 128 characters and value no greater than
   * 256 characters.
  */
  readonly tags?: { [propertyName: string]: string };
  /**
   * The SKU of this account.
  */
  readonly sku?: Sku;
  /**
   * The map account properties.
  */
  readonly properties?: MapsAccountProperties;
}

/**
 * Parameters used to create a new Maps Account.
*/
export interface MapsAccountCreateParameters {
  /**
   * The location of the resource.
  */
  location: string;
  /**
   * Gets or sets a list of key value pairs that describe the resource. These tags can be used in
   * viewing and grouping this resource (across resource groups). A maximum of 15 tags can be
   * provided for a resource. Each tag must have a key no greater than 128 characters and value no
   * greater than 256 characters.
  */
  tags?: { [propertyName: string]: string };
  /**
   * The SKU of this account.
  */
  sku: Sku;
}

/**
 * Parameters used to update an existing Maps Account.
*/
export interface MapsAccountUpdateParameters {
  /**
   * Gets or sets a list of key value pairs that describe the resource. These tags can be used in
   * viewing and grouping this resource (across resource groups). A maximum of 15 tags can be
   * provided for a resource. Each tag must have a key no greater than 128 characters and value no
   * greater than 256 characters.
  */
  tags?: { [propertyName: string]: string };
  /**
   * The SKU of this account.
  */
  sku?: Sku;
}

/**
 * The description of what resources to move between resource groups.
*/
export interface MapsAccountsMoveRequest {
  /**
   * The name of the destination resource group.
  */
  targetResourceGroup: string;
  /**
   * A list of resource names to move from the source resource group.
  */
  resourceIds: string[];
}

/**
 * Whether the operation refers to the primary or secondary key.
*/
export interface MapsKeySpecification {
  /**
   * Whether the operation refers to the primary or secondary key. Possible values include:
   * 'primary', 'secondary'
  */
  keyType: string;
}

/**
 * The set of keys which can be used to access the Maps REST APIs. Two keys are provided for key
 * rotation without interruption.
*/
export interface MapsAccountKeys {
  /**
   * The full Azure resource identifier of the Maps Account.
  */
  readonly id?: string;
  /**
   * The primary key for accessing the Maps REST APIs.
  */
  readonly primaryKey?: string;
  /**
   * The secondary key for accessing the Maps REST APIs.
  */
  readonly secondaryKey?: string;
}

/**
 * The human-readable description of the operation.
*/
export interface MapsOperationsValueItemDisplay {
  /**
   * Service provider: Microsoft Maps.
  */
  readonly provider?: string;
  /**
   * Resource on which the operation is performed.
  */
  readonly resource?: string;
  /**
   * The action that users can perform, based on their permission level.
  */
  readonly operation?: string;
  /**
   * The description of the operation.
  */
  readonly description?: string;
}

export interface MapsOperationsValueItem {
  /**
   * Operation name: {provider}/{resource}/{operation}.
  */
  readonly name?: string;
  /**
   * The human-readable description of the operation.
  */
  display?: MapsOperationsValueItemDisplay;
  /**
   * The origin of the operation.
  */
  readonly origin?: string;
}

/**
 * A list of Maps Accounts.
*/
export interface MapsAccounts extends Array<MapsAccount> {
}

/**
 * The set of operations available for Maps.
*/
export interface MapsOperations extends Array<MapsOperationsValueItem> {
}
