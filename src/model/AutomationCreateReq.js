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
    define(['ApiClient', 'model/AutomationOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutomationOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.AutomationCreateReq = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.AutomationOptions);
  }
}(this, function(ApiClient, AutomationOptions) {
  'use strict';




  /**
   * The AutomationCreateReq model module.
   * @module model/AutomationCreateReq
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AutomationCreateReq</code>.
   * @alias module:model/AutomationCreateReq
   * @class
   * @param fileId {String} 
   * @param action {module:model/AutomationCreateReq.ActionEnum} 
   */
  var exports = function(fileId, action) {
    var _this = this;

    _this['file_id'] = fileId;
    _this['action'] = action;





  };

  /**
   * Constructs a <code>AutomationCreateReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutomationCreateReq} obj Optional instance to populate.
   * @return {module:model/AutomationCreateReq} The populated <code>AutomationCreateReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('file_id')) {
        obj['file_id'] = ApiClient.convertToType(data['file_id'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = AutomationOptions.constructFromObject(data['options']);
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} file_id
   */
  exports.prototype['file_id'] = undefined;
  /**
   * @member {module:model/AutomationCreateReq.ActionEnum} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {module:model/AutomationCreateReq.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/AutomationOptions} options
   */
  exports.prototype['options'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {Number} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * @member {Array.<String>} email
   */
  exports.prototype['email'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "autodelete"
     * @const
     */
    "autodelete": "autodelete",
    /**
     * value: "video_upload"
     * @const
     */
    "video_upload": "video_upload"  };

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


  return exports;
}));


