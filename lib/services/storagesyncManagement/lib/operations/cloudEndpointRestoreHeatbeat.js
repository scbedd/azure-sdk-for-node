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

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Restore Heartbeat a given CloudEndpoint.
 *
 * @param {string} resourceGroupName The name of the resource group within the
 * user's subscription. The name is case insensitive.
 *
 * @param {string} storageSyncServiceName Name of Storage Sync Service
 * resource.
 *
 * @param {string} syncGroupName Name of Sync Group resource.
 *
 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _post(resourceGroupName, storageSyncServiceName, syncGroupName, cloudEndpointName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName !== null && resourceGroupName !== undefined) {
      if (resourceGroupName.length > 90)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 90');
      }
      if (resourceGroupName.length < 1)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 1');
      }
      if (resourceGroupName.match(/^[-\w\._\(\)]+$/) === null)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._\(\)]+$/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (storageSyncServiceName === null || storageSyncServiceName === undefined || typeof storageSyncServiceName.valueOf() !== 'string') {
      throw new Error('storageSyncServiceName cannot be null or undefined and it must be of type string.');
    }
    if (syncGroupName === null || syncGroupName === undefined || typeof syncGroupName.valueOf() !== 'string') {
      throw new Error('syncGroupName cannot be null or undefined and it must be of type string.');
    }
    if (cloudEndpointName === null || cloudEndpointName === undefined || typeof cloudEndpointName.valueOf() !== 'string') {
      throw new Error('cloudEndpointName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/restoreheartbeat';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{storageSyncServiceName}', encodeURIComponent(storageSyncServiceName));
  requestUrl = requestUrl.replace('{syncGroupName}', encodeURIComponent(syncGroupName));
  requestUrl = requestUrl.replace('{cloudEndpointName}', encodeURIComponent(cloudEndpointName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a CloudEndpointRestoreHeatbeat. */
class CloudEndpointRestoreHeatbeat {
  /**
   * Create a CloudEndpointRestoreHeatbeat.
   * @param {MicrosoftStorageSync} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._post = _post;
  }

  /**
   * Restore Heartbeat a given CloudEndpoint.
   *
   * @param {string} resourceGroupName The name of the resource group within the
   * user's subscription. The name is case insensitive.
   *
   * @param {string} storageSyncServiceName Name of Storage Sync Service
   * resource.
   *
   * @param {string} syncGroupName Name of Sync Group resource.
   *
   * @param {string} cloudEndpointName Name of Cloud Endpoint object.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  postWithHttpOperationResponse(resourceGroupName, storageSyncServiceName, syncGroupName, cloudEndpointName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._post(resourceGroupName, storageSyncServiceName, syncGroupName, cloudEndpointName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Restore Heartbeat a given CloudEndpoint.
   *
   * @param {string} resourceGroupName The name of the resource group within the
   * user's subscription. The name is case insensitive.
   *
   * @param {string} storageSyncServiceName Name of Storage Sync Service
   * resource.
   *
   * @param {string} syncGroupName Name of Sync Group resource.
   *
   * @param {string} cloudEndpointName Name of Cloud Endpoint object.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  post(resourceGroupName, storageSyncServiceName, syncGroupName, cloudEndpointName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._post(resourceGroupName, storageSyncServiceName, syncGroupName, cloudEndpointName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._post(resourceGroupName, storageSyncServiceName, syncGroupName, cloudEndpointName, options, optionalCallback);
    }
  }

}

module.exports = CloudEndpointRestoreHeatbeat;