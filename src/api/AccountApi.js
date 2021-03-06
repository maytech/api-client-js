/**
 * Quatrix API
 * Download and upload files or folders, share them with predefined security options, manage your account and profile settings and a lot more functionalities can be easily integrated into your application using our Quatrix APIs. Learn more how to authenticate the Quatrix session, how to construct JSON formatted API calls and what responses to expect in our [API Guide](https://docs.maytech.net/display/MD/Quatrix+API).
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountInfoResp', 'model/AccountMetadataResp', 'model/ErrorModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccountInfoResp'), require('../model/AccountMetadataResp'), require('../model/ErrorModel'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.AccountApi = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.AccountInfoResp, root.QuatrixApi.AccountMetadataResp, root.QuatrixApi.ErrorModel);
  }
}(this, function(ApiClient, AccountInfoResp, AccountMetadataResp, ErrorModel) {
  'use strict';

  /**
   * Account service.
   * @module api/AccountApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountApi. 
   * @alias module:api/AccountApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountInfoGet operation.
     * @callback module:api/AccountApi~accountInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountInfoResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account usage info
     * Retrieve details of the account e.g. service settings, virus scan details, available and used storage, set automations, etc. 
     * @param {module:api/AccountApi~accountInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountInfoResp}
     */
    this.accountInfoGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AccountInfoResp;

      return this.apiClient.callApi(
        '/account/info', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountListGet operation.
     * @callback module:api/AccountApi~accountListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List user accounts
     * Get the list with user accounts displaying the ID, host name, plan and status. 
     * @param {module:api/AccountApi~accountListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.accountListGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi(
        '/account/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountLogoGet operation.
     * @callback module:api/AccountApi~accountLogoGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account logo
     * Retrieve the logo set for the current account. 
     * @param {module:api/AccountApi~accountLogoGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.accountLogoGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/account/logo', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountMetadataGet operation.
     * @callback module:api/AccountApi~accountMetadataGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountMetadataResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account metadata
     * Retrieve general settings for the account e.g. status of the user, identity providers, language, set logo and banner text. 
     * @param {module:api/AccountApi~accountMetadataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountMetadataResp}
     */
    this.accountMetadataGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AccountMetadataResp;

      return this.apiClient.callApi(
        '/account/metadata', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountRolesGet operation.
     * @callback module:api/AccountApi~accountRolesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Call users of the account
     * Get the list of the current account users with their IDs, names and emails 
     * @param {module:api/AccountApi~accountRolesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.accountRolesGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi(
        '/account/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
