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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.UserCreateReq = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserCreateReq model module.
   * @module model/UserCreateReq
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserCreateReq</code>.
   * @alias module:model/UserCreateReq
   * @class
   * @param name {String} 
   * @param email {String} 
   */
  var exports = function(name, email) {
    var _this = this;

    _this['name'] = name;
    _this['email'] = email;











  };

  /**
   * Constructs a <code>UserCreateReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserCreateReq} obj Optional instance to populate.
   * @return {module:model/UserCreateReq} The populated <code>UserCreateReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
      }
      if (data.hasOwnProperty('quota')) {
        obj['quota'] = ApiClient.convertToType(data['quota'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('super_admin')) {
        obj['super_admin'] = ApiClient.convertToType(data['super_admin'], 'String');
      }
      if (data.hasOwnProperty('home_id')) {
        obj['home_id'] = ApiClient.convertToType(data['home_id'], 'String');
      }
      if (data.hasOwnProperty('user_operations')) {
        obj['user_operations'] = ApiClient.convertToType(data['user_operations'], 'Number');
      }
      if (data.hasOwnProperty('home_operations')) {
        obj['home_operations'] = ApiClient.convertToType(data['home_operations'], 'Number');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
      }
      if (data.hasOwnProperty('services')) {
        obj['services'] = ApiClient.convertToType(data['services'], ['String']);
      }
      if (data.hasOwnProperty('custom_sftp_home')) {
        obj['custom_sftp_home'] = ApiClient.convertToType(data['custom_sftp_home'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * @member {Number} quota
   */
  exports.prototype['quota'] = undefined;
  /**
   * @member {module:model/UserCreateReq.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/UserCreateReq.SuperAdminEnum} super_admin
   */
  exports.prototype['super_admin'] = undefined;
  /**
   * @member {String} home_id
   */
  exports.prototype['home_id'] = undefined;
  /**
   * @member {Number} user_operations
   */
  exports.prototype['user_operations'] = undefined;
  /**
   * @member {Number} home_operations
   */
  exports.prototype['home_operations'] = undefined;
  /**
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {Array.<String>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {Array.<String>} services
   */
  exports.prototype['services'] = undefined;
  /**
   * @member {Boolean} custom_sftp_home
   */
  exports.prototype['custom_sftp_home'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "D"
     * @const
     */
    "D": "D"  };

  /**
   * Allowed values for the <code>super_admin</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SuperAdminEnum = {
    /**
     * value: "Y"
     * @const
     */
    "Y": "Y",
    /**
     * value: "N"
     * @const
     */
    "N": "N"  };


  return exports;
}));


