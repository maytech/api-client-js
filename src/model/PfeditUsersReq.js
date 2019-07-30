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
    define(['ApiClient', 'model/UserPermissionReq'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserPermissionReq'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.PfeditUsersReq = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.UserPermissionReq);
  }
}(this, function(ApiClient, UserPermissionReq) {
  'use strict';




  /**
   * The PfeditUsersReq model module.
   * @module model/PfeditUsersReq
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PfeditUsersReq</code>.
   * @alias module:model/PfeditUsersReq
   * @class
   * @param usersPermissions {Array.<module:model/UserPermissionReq>} 
   */
  var exports = function(usersPermissions) {
    var _this = this;

    _this['users_permissions'] = usersPermissions;

  };

  /**
   * Constructs a <code>PfeditUsersReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PfeditUsersReq} obj Optional instance to populate.
   * @return {module:model/PfeditUsersReq} The populated <code>PfeditUsersReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('users_permissions')) {
        obj['users_permissions'] = ApiClient.convertToType(data['users_permissions'], [UserPermissionReq]);
      }
      if (data.hasOwnProperty('notify')) {
        obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/UserPermissionReq>} users_permissions
   */
  exports.prototype['users_permissions'] = undefined;
  /**
   * @member {Boolean} notify
   * @default false
   */
  exports.prototype['notify'] = false;



  return exports;
}));


