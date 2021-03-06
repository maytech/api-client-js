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
    define(['ApiClient', 'model/APIKeyCreateReq', 'model/APIKeyResp', 'model/APIKeyUpdateReq', 'model/ErrorModel', 'model/IdResp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APIKeyCreateReq'), require('../model/APIKeyResp'), require('../model/APIKeyUpdateReq'), require('../model/ErrorModel'), require('../model/IdResp'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.APIKeyApi = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.APIKeyCreateReq, root.QuatrixApi.APIKeyResp, root.QuatrixApi.APIKeyUpdateReq, root.QuatrixApi.ErrorModel, root.QuatrixApi.IdResp);
  }
}(this, function(ApiClient, APIKeyCreateReq, APIKeyResp, APIKeyUpdateReq, ErrorModel, IdResp) {
  'use strict';

  /**
   * APIKey service.
   * @module api/APIKeyApi
   * @version 1.0.0
   */

  /**
   * Constructs a new APIKeyApi. 
   * @alias module:api/APIKeyApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiKeyCreatePost operation.
     * @callback module:api/APIKeyApi~apiKeyCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create API Key
     * Create API key for a specified user. 
     * @param {module:model/APIKeyCreateReq} body 
     * @param {module:api/APIKeyApi~apiKeyCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIKeyResp}
     */
    this.apiKeyCreatePost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiKeyCreatePost");
      }


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
      var returnType = APIKeyResp;

      return this.apiClient.callApi(
        '/api-key/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiKeyDeleteIdGet operation.
     * @callback module:api/APIKeyApi~apiKeyDeleteIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IdResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete API key
     * Delete API key by the given ID 
     * @param {String} id ID of a key
     * @param {module:api/APIKeyApi~apiKeyDeleteIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IdResp}
     */
    this.apiKeyDeleteIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiKeyDeleteIdGet");
      }


      var pathParams = {
        'id': id
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
      var returnType = IdResp;

      return this.apiClient.callApi(
        '/api-key/delete/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiKeyGet operation.
     * @callback module:api/APIKeyApi~apiKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/APIKeyResp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all user&#39;s API keys
     * Get all manageable user&#39;s API keys 
     * @param {module:api/APIKeyApi~apiKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/APIKeyResp>}
     */
    this.apiKeyGet = function(callback) {
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
      var returnType = [APIKeyResp];

      return this.apiClient.callApi(
        '/api-key', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiKeyIdGet operation.
     * @callback module:api/APIKeyApi~apiKeyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/APIKeyResp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user&#39;s API keys
     * Retrieve all API keys for a specified user. 
     * @param {String} id ID of a user
     * @param {module:api/APIKeyApi~apiKeyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/APIKeyResp>}
     */
    this.apiKeyIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiKeyIdGet");
      }


      var pathParams = {
        'id': id
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
      var returnType = [APIKeyResp];

      return this.apiClient.callApi(
        '/api-key/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiKeyMetadataIdGet operation.
     * @callback module:api/APIKeyApi~apiKeyMetadataIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get API key details
     * Retrieve API key metadata by the ID of the key. 
     * @param {String} id ID of a key
     * @param {module:api/APIKeyApi~apiKeyMetadataIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIKeyResp}
     */
    this.apiKeyMetadataIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiKeyMetadataIdGet");
      }


      var pathParams = {
        'id': id
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
      var returnType = APIKeyResp;

      return this.apiClient.callApi(
        '/api-key/metadata/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiKeyUpdateIdPost operation.
     * @callback module:api/APIKeyApi~apiKeyUpdateIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update API key
     * Update API key metadata by ID of the key 
     * @param {String} id ID of the key
     * @param {module:model/APIKeyUpdateReq} body 
     * @param {module:api/APIKeyApi~apiKeyUpdateIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIKeyResp}
     */
    this.apiKeyUpdateIdPost = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiKeyUpdateIdPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiKeyUpdateIdPost");
      }


      var pathParams = {
        'id': id
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
      var returnType = APIKeyResp;

      return this.apiClient.callApi(
        '/api-key/update/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
