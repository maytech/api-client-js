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
    define(['ApiClient', 'model/Group', 'model/ShortUserService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'), require('./ShortUserService'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.UserResp = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.Group, root.QuatrixApi.ShortUserService);
  }
}(this, function(ApiClient, Group, ShortUserService) {
  'use strict';




  /**
   * The UserResp model module.
   * @module model/UserResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserResp</code>.
   * @alias module:model/UserResp
   * @class
   */
  var exports = function() {
    var _this = this;



























  };

  /**
   * Constructs a <code>UserResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserResp} obj Optional instance to populate.
   * @return {module:model/UserResp} The populated <code>UserResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
      }
      if (data.hasOwnProperty('home_id')) {
        obj['home_id'] = ApiClient.convertToType(data['home_id'], 'String');
      }
      if (data.hasOwnProperty('home_name')) {
        obj['home_name'] = ApiClient.convertToType(data['home_name'], 'String');
      }
      if (data.hasOwnProperty('super_admin')) {
        obj['super_admin'] = ApiClient.convertToType(data['super_admin'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('quota')) {
        obj['quota'] = ApiClient.convertToType(data['quota'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Number');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [Group]);
      }
      if (data.hasOwnProperty('user_operations')) {
        obj['user_operations'] = ApiClient.convertToType(data['user_operations'], 'Number');
      }
      if (data.hasOwnProperty('effective_operations')) {
        obj['effective_operations'] = ApiClient.convertToType(data['effective_operations'], 'Number');
      }
      if (data.hasOwnProperty('home_operations')) {
        obj['home_operations'] = ApiClient.convertToType(data['home_operations'], 'Number');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('has_key')) {
        obj['has_key'] = ApiClient.convertToType(data['has_key'], 'Boolean');
      }
      if (data.hasOwnProperty('services')) {
        obj['services'] = ApiClient.convertToType(data['services'], [ShortUserService]);
      }
      if (data.hasOwnProperty('unique_login')) {
        obj['unique_login'] = ApiClient.convertToType(data['unique_login'], 'String');
      }
      if (data.hasOwnProperty('custom_sftp_home')) {
        obj['custom_sftp_home'] = ApiClient.convertToType(data['custom_sftp_home'], 'Boolean');
      }
      if (data.hasOwnProperty('sftp_home')) {
        obj['sftp_home'] = ApiClient.convertToType(data['sftp_home'], 'String');
      }
      if (data.hasOwnProperty('readonly')) {
        obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
      }
      if (data.hasOwnProperty('auth_methods')) {
        obj['auth_methods'] = ApiClient.convertToType(data['auth_methods'], ['String']);
      }
      if (data.hasOwnProperty('last_login')) {
        obj['last_login'] = ApiClient.convertToType(data['last_login'], 'Number');
      }
      if (data.hasOwnProperty('storage_used')) {
        obj['storage_used'] = ApiClient.convertToType(data['storage_used'], 'Number');
      }
      if (data.hasOwnProperty('forced_auth')) {
        obj['forced_auth'] = ApiClient.convertToType(data['forced_auth'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * @member {String} home_id
   */
  exports.prototype['home_id'] = undefined;
  /**
   * @member {String} home_name
   */
  exports.prototype['home_name'] = undefined;
  /**
   * @member {module:model/UserResp.SuperAdminEnum} super_admin
   */
  exports.prototype['super_admin'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} quota
   */
  exports.prototype['quota'] = undefined;
  /**
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Number} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * @member {Array.<module:model/Group>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {Number} user_operations
   */
  exports.prototype['user_operations'] = undefined;
  /**
   * @member {Number} effective_operations
   */
  exports.prototype['effective_operations'] = undefined;
  /**
   * @member {Number} home_operations
   */
  exports.prototype['home_operations'] = undefined;
  /**
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {Boolean} has_key
   */
  exports.prototype['has_key'] = undefined;
  /**
   * @member {Array.<module:model/ShortUserService>} services
   */
  exports.prototype['services'] = undefined;
  /**
   * @member {String} unique_login
   */
  exports.prototype['unique_login'] = undefined;
  /**
   * @member {Boolean} custom_sftp_home
   */
  exports.prototype['custom_sftp_home'] = undefined;
  /**
   * @member {String} sftp_home
   */
  exports.prototype['sftp_home'] = undefined;
  /**
   * @member {Boolean} readonly
   */
  exports.prototype['readonly'] = undefined;
  /**
   * @member {Array.<String>} auth_methods
   */
  exports.prototype['auth_methods'] = undefined;
  /**
   * @member {Number} last_login
   */
  exports.prototype['last_login'] = undefined;
  /**
   * @member {Number} storage_used
   */
  exports.prototype['storage_used'] = undefined;
  /**
   * @member {Array.<String>} forced_auth
   */
  exports.prototype['forced_auth'] = undefined;


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


