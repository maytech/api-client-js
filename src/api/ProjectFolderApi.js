/**
 * Quatrix API
 * The Quatrix API enables you to automate your interaction with Quatrix using any scripting or programming language. You can test API calls on [Swagger](https://docs.maytech.net/swagger/), the interactive environment we use as the repository for the Quatrix API. In order to authorize to Quatrix API you will need to have a Quatrix account https://yourcompanyname.quatrix.it/ (e.g. https://test-api.quatrix.it/). You can set up a free trial account [here](https://www.maytech.net/freetrial.html#trial=qtrx). Below you'll find information on how to authenticate in a Quatrix session, how to construct JSON formatted API call and what JSON responses to expect.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorModel', 'model/IdResp', 'model/PfCreateResp', 'model/PfDeleteUsersRespItems', 'model/PfMetadataResp', 'model/PfSetUsersReq', 'model/PfSetUsersRespItems', 'model/PfUsersListReq', 'model/PfUsersListRespItems', 'model/PfaddUsersReq', 'model/PfcreateReq', 'model/PfdeleteUsersReq', 'model/PfeditUsersReq', 'model/ProjectFoldersListRespItem', 'model/UserPermissionResp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/IdResp'), require('../model/PfCreateResp'), require('../model/PfDeleteUsersRespItems'), require('../model/PfMetadataResp'), require('../model/PfSetUsersReq'), require('../model/PfSetUsersRespItems'), require('../model/PfUsersListReq'), require('../model/PfUsersListRespItems'), require('../model/PfaddUsersReq'), require('../model/PfcreateReq'), require('../model/PfdeleteUsersReq'), require('../model/PfeditUsersReq'), require('../model/ProjectFoldersListRespItem'), require('../model/UserPermissionResp'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.ProjectFolderApi = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.ErrorModel, root.QuatrixApi.IdResp, root.QuatrixApi.PfCreateResp, root.QuatrixApi.PfDeleteUsersRespItems, root.QuatrixApi.PfMetadataResp, root.QuatrixApi.PfSetUsersReq, root.QuatrixApi.PfSetUsersRespItems, root.QuatrixApi.PfUsersListReq, root.QuatrixApi.PfUsersListRespItems, root.QuatrixApi.PfaddUsersReq, root.QuatrixApi.PfcreateReq, root.QuatrixApi.PfdeleteUsersReq, root.QuatrixApi.PfeditUsersReq, root.QuatrixApi.ProjectFoldersListRespItem, root.QuatrixApi.UserPermissionResp);
  }
}(this, function(ApiClient, ErrorModel, IdResp, PfCreateResp, PfDeleteUsersRespItems, PfMetadataResp, PfSetUsersReq, PfSetUsersRespItems, PfUsersListReq, PfUsersListRespItems, PfaddUsersReq, PfcreateReq, PfdeleteUsersReq, PfeditUsersReq, ProjectFoldersListRespItem, UserPermissionResp) {
  'use strict';

  /**
   * ProjectFolder service.
   * @module api/ProjectFolderApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ProjectFolderApi. 
   * @alias module:api/ProjectFolderApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the projectFolderAddUsersIdPost operation.
     * @callback module:api/ProjectFolderApi~projectFolderAddUsersIdPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserPermissionResp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add project folder users
     * Add project folder users 
     * @param {String} id 
     * @param {module:model/PfaddUsersReq} body 
     * @param {module:api/ProjectFolderApi~projectFolderAddUsersIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserPermissionResp>}
     */
    this.projectFolderAddUsersIdPost = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectFolderAddUsersIdPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectFolderAddUsersIdPost");
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
      var returnType = [UserPermissionResp];

      return this.apiClient.callApi(
        '/project-folder/add-users/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFolderCreatePost operation.
     * @callback module:api/ProjectFolderApi~projectFolderCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PfCreateResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create project folder
     * Create new project folder 
     * @param {module:model/PfcreateReq} body 
     * @param {module:api/ProjectFolderApi~projectFolderCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PfCreateResp}
     */
    this.projectFolderCreatePost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectFolderCreatePost");
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
      var returnType = PfCreateResp;

      return this.apiClient.callApi(
        '/project-folder/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFolderDeleteIdGet operation.
     * @callback module:api/ProjectFolderApi~projectFolderDeleteIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IdResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove project folder
     * Remove project folder 
     * @param {String} id 
     * @param {module:api/ProjectFolderApi~projectFolderDeleteIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IdResp}
     */
    this.projectFolderDeleteIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectFolderDeleteIdGet");
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
        '/project-folder/delete/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFolderDeleteUsersPost operation.
     * @callback module:api/ProjectFolderApi~projectFolderDeleteUsersPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PfDeleteUsersRespItems>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove project folder users
     * Remove project folder users 
     * @param {module:model/PfdeleteUsersReq} body 
     * @param {module:api/ProjectFolderApi~projectFolderDeleteUsersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PfDeleteUsersRespItems>}
     */
    this.projectFolderDeleteUsersPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectFolderDeleteUsersPost");
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
      var returnType = [PfDeleteUsersRespItems];

      return this.apiClient.callApi(
        '/project-folder/delete-users/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFolderEditUsersIdPost operation.
     * @callback module:api/ProjectFolderApi~projectFolderEditUsersIdPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserPermissionResp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update project folder users
     * Update project folder users 
     * @param {String} id 
     * @param {module:model/PfeditUsersReq} body 
     * @param {module:api/ProjectFolderApi~projectFolderEditUsersIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserPermissionResp>}
     */
    this.projectFolderEditUsersIdPost = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectFolderEditUsersIdPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectFolderEditUsersIdPost");
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
      var returnType = [UserPermissionResp];

      return this.apiClient.callApi(
        '/project-folder/edit-users/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFolderGet operation.
     * @callback module:api/ProjectFolderApi~projectFolderGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectFoldersListRespItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of valid project folder for current user
     * Get list of project folders 
     * @param {module:api/ProjectFolderApi~projectFolderGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProjectFoldersListRespItem>}
     */
    this.projectFolderGet = function(callback) {
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
      var returnType = [ProjectFoldersListRespItem];

      return this.apiClient.callApi(
        '/project-folder', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFolderMetadataIdGet operation.
     * @callback module:api/ProjectFolderApi~projectFolderMetadataIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PfMetadataResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Project folder metadata
     * Project folder metadata 
     * @param {String} id project folder ID
     * @param {module:api/ProjectFolderApi~projectFolderMetadataIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PfMetadataResp}
     */
    this.projectFolderMetadataIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectFolderMetadataIdGet");
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
      var returnType = PfMetadataResp;

      return this.apiClient.callApi(
        '/project-folder/metadata/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFolderProjectUsersPost operation.
     * @callback module:api/ProjectFolderApi~projectFolderProjectUsersPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PfUsersListRespItems>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of project folders for users
     * List of project folders for users 
     * @param {module:model/PfUsersListReq} body 
     * @param {module:api/ProjectFolderApi~projectFolderProjectUsersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PfUsersListRespItems>}
     */
    this.projectFolderProjectUsersPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectFolderProjectUsersPost");
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
      var returnType = [PfUsersListRespItems];

      return this.apiClient.callApi(
        '/project-folder/project-users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFolderSetUsersPost operation.
     * @callback module:api/ProjectFolderApi~projectFolderSetUsersPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PfSetUsersRespItems>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add users to project folders. Replace exists permissions if users exists
     * Set users to project folders 
     * @param {module:model/PfSetUsersReq} body 
     * @param {module:api/ProjectFolderApi~projectFolderSetUsersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PfSetUsersRespItems>}
     */
    this.projectFolderSetUsersPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectFolderSetUsersPost");
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
      var returnType = [PfSetUsersRespItems];

      return this.apiClient.callApi(
        '/project-folder/set-users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectFolderUsersIdGet operation.
     * @callback module:api/ProjectFolderApi~projectFolderUsersIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserPermissionResp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project folder users
     * List project folder users 
     * @param {String} id project folder ID
     * @param {module:api/ProjectFolderApi~projectFolderUsersIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserPermissionResp>}
     */
    this.projectFolderUsersIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectFolderUsersIdGet");
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
      var returnType = [UserPermissionResp];

      return this.apiClient.callApi(
        '/project-folder/users/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
