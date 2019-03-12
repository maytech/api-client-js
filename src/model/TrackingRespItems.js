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
    root.QuatrixApi.TrackingRespItems = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TrackingRespItems model module.
   * @module model/TrackingRespItems
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TrackingRespItems</code>.
   * @alias module:model/TrackingRespItems
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>TrackingRespItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackingRespItems} obj Optional instance to populate.
   * @return {module:model/TrackingRespItems} The populated <code>TrackingRespItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('is_reply')) {
        obj['is_reply'] = ApiClient.convertToType(data['is_reply'], 'Boolean');
      }
      if (data.hasOwnProperty('release_date')) {
        obj['release_date'] = ApiClient.convertToType(data['release_date'], 'Number');
      }
      if (data.hasOwnProperty('expire_date')) {
        obj['expire_date'] = ApiClient.convertToType(data['expire_date'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
      }
      if (data.hasOwnProperty('owner_id')) {
        obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'String');
      }
      if (data.hasOwnProperty('is_request')) {
        obj['is_request'] = ApiClient.convertToType(data['is_request'], 'Boolean');
      }
      if (data.hasOwnProperty('can_reply')) {
        obj['can_reply'] = ApiClient.convertToType(data['can_reply'], 'Boolean');
      }
      if (data.hasOwnProperty('folder')) {
        obj['folder'] = ApiClient.convertToType(data['folder'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Boolean} is_reply
   */
  exports.prototype['is_reply'] = undefined;
  /**
   * @member {Number} release_date
   */
  exports.prototype['release_date'] = undefined;
  /**
   * @member {Number} expire_date
   */
  exports.prototype['expire_date'] = undefined;
  /**
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Array.<String>} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * @member {String} owner_id
   */
  exports.prototype['owner_id'] = undefined;
  /**
   * @member {Boolean} is_request
   */
  exports.prototype['is_request'] = undefined;
  /**
   * @member {Boolean} can_reply
   */
  exports.prototype['can_reply'] = undefined;
  /**
   * @member {String} folder
   */
  exports.prototype['folder'] = undefined;



  return exports;
}));


