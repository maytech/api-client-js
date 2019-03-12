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
    define(['ApiClient', 'model/ProjectfoldersetusersParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProjectfoldersetusersParams'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.ProjectfoldersetusersUsers = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.ProjectfoldersetusersParams);
  }
}(this, function(ApiClient, ProjectfoldersetusersParams) {
  'use strict';




  /**
   * The ProjectfoldersetusersUsers model module.
   * @module model/ProjectfoldersetusersUsers
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProjectfoldersetusersUsers</code>.
   * @alias module:model/ProjectfoldersetusersUsers
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ProjectfoldersetusersUsers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectfoldersetusersUsers} obj Optional instance to populate.
   * @return {module:model/ProjectfoldersetusersUsers} The populated <code>ProjectfoldersetusersUsers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], [ProjectfoldersetusersParams]);
      }
    }
    return obj;
  }

  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {Array.<module:model/ProjectfoldersetusersParams>} params
   */
  exports.prototype['params'] = undefined;



  return exports;
}));


