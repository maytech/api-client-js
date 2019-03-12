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
    root.QuatrixApi.BillingUpgradeResp = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BillingUpgradeResp model module.
   * @module model/BillingUpgradeResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BillingUpgradeResp</code>.
   * @alias module:model/BillingUpgradeResp
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>BillingUpgradeResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingUpgradeResp} obj Optional instance to populate.
   * @return {module:model/BillingUpgradeResp} The populated <code>BillingUpgradeResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('upgrade_invoice_id')) {
        obj['upgrade_invoice_id'] = ApiClient.convertToType(data['upgrade_invoice_id'], 'String');
      }
      if (data.hasOwnProperty('invoice_ids')) {
        obj['invoice_ids'] = ApiClient.convertToType(data['invoice_ids'], ['String']);
      }
      if (data.hasOwnProperty('error_text')) {
        obj['error_text'] = ApiClient.convertToType(data['error_text'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BillingUpgradeResp.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} upgrade_invoice_id
   */
  exports.prototype['upgrade_invoice_id'] = undefined;
  /**
   * @member {Array.<String>} invoice_ids
   */
  exports.prototype['invoice_ids'] = undefined;
  /**
   * @member {String} error_text
   */
  exports.prototype['error_text'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


