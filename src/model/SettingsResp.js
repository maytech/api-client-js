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
    root.QuatrixApi.SettingsResp = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SettingsResp model module.
   * @module model/SettingsResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SettingsResp</code>.
   * @alias module:model/SettingsResp
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>SettingsResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SettingsResp} obj Optional instance to populate.
   * @return {module:model/SettingsResp} The populated <code>SettingsResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('bcc')) {
        obj['bcc'] = ApiClient.convertToType(data['bcc'], ['String']);
      }
      if (data.hasOwnProperty('billing_emails')) {
        obj['billing_emails'] = ApiClient.convertToType(data['billing_emails'], ['String']);
      }
      if (data.hasOwnProperty('email_footer')) {
        obj['email_footer'] = ApiClient.convertToType(data['email_footer'], 'String');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Number');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('pgp_enabled')) {
        obj['pgp_enabled'] = ApiClient.convertToType(data['pgp_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('share_types')) {
        obj['share_types'] = ApiClient.convertToType(data['share_types'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Array.<String>} bcc
   */
  exports.prototype['bcc'] = undefined;
  /**
   * @member {Array.<String>} billing_emails
   */
  exports.prototype['billing_emails'] = undefined;
  /**
   * @member {String} email_footer
   */
  exports.prototype['email_footer'] = undefined;
  /**
   * @member {Number} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {Boolean} pgp_enabled
   */
  exports.prototype['pgp_enabled'] = undefined;
  /**
   * @member {Object} share_types
   */
  exports.prototype['share_types'] = undefined;



  return exports;
}));


