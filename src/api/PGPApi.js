/**
 * Quatrix API
 * Download and upload files or folders, share them with predefined security options, manage your account and profile settings and a lot more functionalities can be easily integrated into your application using our Quatrix APIs. Learn more how to authenticate the Quatrix session, how to construct JSON formatted API calls and what responses to expect in our [API Guide](https://docs.maytech.net/display/MD/API+Guide).
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorModel', 'model/IdResp', 'model/IdsReq', 'model/JobResp', 'model/KeyRequestMetadataResp', 'model/KeyRequestRespondReq', 'model/PgpCreateReq', 'model/PgpEditReq', 'model/PgpKeyResp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/IdResp'), require('../model/IdsReq'), require('../model/JobResp'), require('../model/KeyRequestMetadataResp'), require('../model/KeyRequestRespondReq'), require('../model/PgpCreateReq'), require('../model/PgpEditReq'), require('../model/PgpKeyResp'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.PGPApi = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.ErrorModel, root.QuatrixApi.IdResp, root.QuatrixApi.IdsReq, root.QuatrixApi.JobResp, root.QuatrixApi.KeyRequestMetadataResp, root.QuatrixApi.KeyRequestRespondReq, root.QuatrixApi.PgpCreateReq, root.QuatrixApi.PgpEditReq, root.QuatrixApi.PgpKeyResp);
  }
}(this, function(ApiClient, ErrorModel, IdResp, IdsReq, JobResp, KeyRequestMetadataResp, KeyRequestRespondReq, PgpCreateReq, PgpEditReq, PgpKeyResp) {
  'use strict';

  /**
   * PGP service.
   * @module api/PGPApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PGPApi. 
   * @alias module:api/PGPApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contactPgpKeyIdGet operation.
     * @callback module:api/PGPApi~contactPgpKeyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PgpKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contact&#39;s PGP key
     * Use to retrieve PGP key generated by the contact. 
     * @param {String} id ID of a contact
     * @param {module:api/PGPApi~contactPgpKeyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PgpKeyResp}
     */
    this.contactPgpKeyIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactPgpKeyIdGet");
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
      var returnType = PgpKeyResp;

      return this.apiClient.callApi(
        '/contact/pgp-key/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the keyRequestMetadataIdGet operation.
     * @callback module:api/PGPApi~keyRequestMetadataIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KeyRequestMetadataResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get PGP key request metadata
     * Retrieve details about PGP key generation request. 
     * @param {String} id ID of the PGP key request
     * @param {module:api/PGPApi~keyRequestMetadataIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KeyRequestMetadataResp}
     */
    this.keyRequestMetadataIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling keyRequestMetadataIdGet");
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
      var returnType = KeyRequestMetadataResp;

      return this.apiClient.callApi(
        '/key-request/metadata/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the keyRequestRespondIdPost operation.
     * @callback module:api/PGPApi~keyRequestRespondIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Respond to PGP key request
     * Respond to PGP key request with PGP key 
     * @param {String} id ID of a PGP key request
     * @param {module:model/KeyRequestRespondReq} body 
     * @param {module:api/PGPApi~keyRequestRespondIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobResp}
     */
    this.keyRequestRespondIdPost = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling keyRequestRespondIdPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling keyRequestRespondIdPost");
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
      var returnType = JobResp;

      return this.apiClient.callApi(
        '/key-request/respond/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pgpKeyCreatePost operation.
     * @callback module:api/PGPApi~pgpKeyCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PgpKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create PGP key
     * Generate a new PGP key 
     * @param {module:model/PgpCreateReq} body 
     * @param {module:api/PGPApi~pgpKeyCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PgpKeyResp}
     */
    this.pgpKeyCreatePost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pgpKeyCreatePost");
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
      var returnType = PgpKeyResp;

      return this.apiClient.callApi(
        '/pgp-key/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pgpKeyDeleteIdGet operation.
     * @callback module:api/PGPApi~pgpKeyDeleteIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IdResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete PGP key
     * Delete an existing PGP key. 
     * @param {String} id ID of a PGP key
     * @param {module:api/PGPApi~pgpKeyDeleteIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IdResp}
     */
    this.pgpKeyDeleteIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling pgpKeyDeleteIdGet");
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
        '/pgp-key/delete/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pgpKeyEditIdPost operation.
     * @callback module:api/PGPApi~pgpKeyEditIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PgpKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit PGP key
     * Edit an existing PGP key. 
     * @param {String} id ID of a PGP key
     * @param {Object} opts Optional parameters
     * @param {module:model/PgpEditReq} opts.body 
     * @param {module:api/PGPApi~pgpKeyEditIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PgpKeyResp}
     */
    this.pgpKeyEditIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling pgpKeyEditIdPost");
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
      var returnType = PgpKeyResp;

      return this.apiClient.callApi(
        '/pgp-key/edit/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pgpKeyMetadataIdGet operation.
     * @callback module:api/PGPApi~pgpKeyMetadataIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PgpKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get PGP key metadata
     * Retrieve information about PGP key containing the ID, name and email of the creator, date it was created and modified, public and private keys. 
     * @param {String} id ID of a PGP key
     * @param {module:api/PGPApi~pgpKeyMetadataIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PgpKeyResp}
     */
    this.pgpKeyMetadataIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling pgpKeyMetadataIdGet");
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
      var returnType = PgpKeyResp;

      return this.apiClient.callApi(
        '/pgp-key/metadata/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pgpKeyRecipientsPost operation.
     * @callback module:api/PGPApi~pgpKeyRecipientsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get recipients&#39; PGP keys
     * Get public PGP keys for given recipients 
     * @param {module:model/IdsReq} body 
     * @param {module:api/PGPApi~pgpKeyRecipientsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.pgpKeyRecipientsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pgpKeyRecipientsPost");
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
      var returnType = [Object];

      return this.apiClient.callApi(
        '/pgp-key/recipients', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pgpKeyRequestIdsGet operation.
     * @callback module:api/PGPApi~pgpKeyRequestIdsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request PGP key
     * Send PGP key generation request to a user or a contact. 
     * @param {String} ids ID of contact
     * @param {module:api/PGPApi~pgpKeyRequestIdsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobResp}
     */
    this.pgpKeyRequestIdsGet = function(ids, callback) {
      var postBody = null;

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling pgpKeyRequestIdsGet");
      }


      var pathParams = {
        'ids[]': ids
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
      var returnType = JobResp;

      return this.apiClient.callApi(
        '/pgp-key/request/{ids[]}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userPgpKeyIdGet operation.
     * @callback module:api/PGPApi~userPgpKeyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PgpKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user&#39;s PGP key
     * Use to retrieve PGP key generated by the user. 
     * @param {String} id ID of a user
     * @param {module:api/PGPApi~userPgpKeyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PgpKeyResp}
     */
    this.userPgpKeyIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling userPgpKeyIdGet");
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
      var returnType = PgpKeyResp;

      return this.apiClient.callApi(
        '/user/pgp-key/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
