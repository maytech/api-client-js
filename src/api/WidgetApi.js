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
    define(['ApiClient', 'model/IdResp', 'model/WidgetFinalizeUploadResp', 'model/WidgetUploadLinkReq', 'model/WidgetUploadLinkResp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/IdResp'), require('../model/WidgetFinalizeUploadResp'), require('../model/WidgetUploadLinkReq'), require('../model/WidgetUploadLinkResp'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.WidgetApi = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.IdResp, root.QuatrixApi.WidgetFinalizeUploadResp, root.QuatrixApi.WidgetUploadLinkReq, root.QuatrixApi.WidgetUploadLinkResp);
  }
}(this, function(ApiClient, IdResp, WidgetFinalizeUploadResp, WidgetUploadLinkReq, WidgetUploadLinkResp) {
  'use strict';

  /**
   * Widget service.
   * @module api/WidgetApi
   * @version 1.0.0
   */

  /**
   * Constructs a new WidgetApi. 
   * @alias module:api/WidgetApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the widgetFinalizeUploadIdGet operation.
     * @callback module:api/WidgetApi~widgetFinalizeUploadIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WidgetFinalizeUploadResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finalize chunked upload of the widget
     * Complete the chunked upload of the widget. 
     * @param {String} id ID of a widget
     * @param {module:api/WidgetApi~widgetFinalizeUploadIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WidgetFinalizeUploadResp}
     */
    this.widgetFinalizeUploadIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling widgetFinalizeUploadIdGet");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WidgetFinalizeUploadResp;

      return this.apiClient.callApi(
        '/widget/finalize-upload/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the widgetMetadataIdGet operation.
     * @callback module:api/WidgetApi~widgetMetadataIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IdResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all widget metadata
     * Retrieve available metadata of the widget. 
     * @param {String} id ID of a widget
     * @param {module:api/WidgetApi~widgetMetadataIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IdResp}
     */
    this.widgetMetadataIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling widgetMetadataIdGet");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IdResp;

      return this.apiClient.callApi(
        '/widget/metadata/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the widgetUploadLinkIdPost operation.
     * @callback module:api/WidgetApi~widgetUploadLinkIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WidgetUploadLinkResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get widget upload link
     * Retrieve a link for uploading the widget. 
     * @param {String} id ID of a widget
     * @param {Object} opts Optional parameters
     * @param {module:model/WidgetUploadLinkReq} opts.body 
     * @param {module:api/WidgetApi~widgetUploadLinkIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WidgetUploadLinkResp}
     */
    this.widgetUploadLinkIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling widgetUploadLinkIdPost");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WidgetUploadLinkResp;

      return this.apiClient.callApi(
        '/widget/upload-link/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
