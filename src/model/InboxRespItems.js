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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.InboxRespItems = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InboxRespItems model module.
   * @module model/InboxRespItems
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InboxRespItems</code>.
   * @alias module:model/InboxRespItems
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>InboxRespItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InboxRespItems} obj Optional instance to populate.
   * @return {module:model/InboxRespItems} The populated <code>InboxRespItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('sender_name')) {
        obj['sender_name'] = ApiClient.convertToType(data['sender_name'], 'String');
      }
      if (data.hasOwnProperty('activates')) {
        obj['activates'] = ApiClient.convertToType(data['activates'], 'Number');
      }
      if (data.hasOwnProperty('is_reply')) {
        obj['is_reply'] = ApiClient.convertToType(data['is_reply'], 'Boolean');
      }
      if (data.hasOwnProperty('replied')) {
        obj['replied'] = ApiClient.convertToType(data['replied'], 'Boolean');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('file_request')) {
        obj['file_request'] = ApiClient.convertToType(data['file_request'], 'Boolean');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Number');
      }
      if (data.hasOwnProperty('protected')) {
        obj['protected'] = ApiClient.convertToType(data['protected'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Sender name
   * @member {String} sender_name
   */
  exports.prototype['sender_name'] = undefined;
  /**
   * @member {Number} activates
   */
  exports.prototype['activates'] = undefined;
  /**
   * @member {Boolean} is_reply
   */
  exports.prototype['is_reply'] = undefined;
  /**
   * @member {Boolean} replied
   */
  exports.prototype['replied'] = undefined;
  /**
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {module:model/InboxRespItems.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Boolean} file_request
   */
  exports.prototype['file_request'] = undefined;
  /**
   * @member {Number} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * @member {Boolean} protected
   */
  exports.prototype['protected'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
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


