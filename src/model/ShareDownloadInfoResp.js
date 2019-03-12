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
    root.QuatrixApi.ShareDownloadInfoResp = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ShareDownloadInfoResp model module.
   * @module model/ShareDownloadInfoResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ShareDownloadInfoResp</code>.
   * @alias module:model/ShareDownloadInfoResp
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>ShareDownloadInfoResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShareDownloadInfoResp} obj Optional instance to populate.
   * @return {module:model/ShareDownloadInfoResp} The populated <code>ShareDownloadInfoResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('activates')) {
        obj['activates'] = ApiClient.convertToType(data['activates'], 'Number');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Number');
      }
      if (data.hasOwnProperty('sender_name')) {
        obj['sender_name'] = ApiClient.convertToType(data['sender_name'], 'String');
      }
      if (data.hasOwnProperty('sender_email')) {
        obj['sender_email'] = ApiClient.convertToType(data['sender_email'], 'String');
      }
      if (data.hasOwnProperty('user_name')) {
        obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
      }
      if (data.hasOwnProperty('user_email')) {
        obj['user_email'] = ApiClient.convertToType(data['user_email'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('pgp_encrypted')) {
        obj['pgp_encrypted'] = ApiClient.convertToType(data['pgp_encrypted'], 'Boolean');
      }
      if (data.hasOwnProperty('private_key')) {
        obj['private_key'] = ApiClient.convertToType(data['private_key'], 'String');
      }
      if (data.hasOwnProperty('pgp_enabled')) {
        obj['pgp_enabled'] = ApiClient.convertToType(data['pgp_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('share_type')) {
        obj['share_type'] = ApiClient.convertToType(data['share_type'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('expired')) {
        obj['expired'] = ApiClient.convertToType(data['expired'], 'Boolean');
      }
      if (data.hasOwnProperty('is_reply')) {
        obj['is_reply'] = ApiClient.convertToType(data['is_reply'], 'Boolean');
      }
      if (data.hasOwnProperty('pin_protected')) {
        obj['pin_protected'] = ApiClient.convertToType(data['pin_protected'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {Number} activates
   */
  exports.prototype['activates'] = undefined;
  /**
   * @member {Number} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * @member {String} sender_name
   */
  exports.prototype['sender_name'] = undefined;
  /**
   * @member {String} sender_email
   */
  exports.prototype['sender_email'] = undefined;
  /**
   * user name from current session
   * @member {String} user_name
   */
  exports.prototype['user_name'] = undefined;
  /**
   * user email from current session
   * @member {String} user_email
   */
  exports.prototype['user_email'] = undefined;
  /**
   * @member {String} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * PGP protected share
   * @member {Boolean} pgp_encrypted
   */
  exports.prototype['pgp_encrypted'] = undefined;
  /**
   * for PGP
   * @member {String} private_key
   */
  exports.prototype['private_key'] = undefined;
  /**
   * It shows that the user from the current session has PGP key. If True - the user will get his private_key.
   * @member {Boolean} pgp_enabled
   */
  exports.prototype['pgp_enabled'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/ShareDownloadInfoResp.ShareTypeEnum} share_type
   */
  exports.prototype['share_type'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Boolean} expired
   */
  exports.prototype['expired'] = undefined;
  /**
   * @member {Boolean} is_reply
   */
  exports.prototype['is_reply'] = undefined;
  /**
   * @member {Boolean} pin_protected
   */
  exports.prototype['pin_protected'] = undefined;


  /**
   * Allowed values for the <code>share_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ShareTypeEnum = {
    /**
     * value: "P"
     * @const
     */
    "P": "P",
    /**
     * value: "C"
     * @const
     */
    "C": "C",
    /**
     * value: "T"
     * @const
     */
    "T": "T"  };


  return exports;
}));


