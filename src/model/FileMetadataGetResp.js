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
    define(['ApiClient', 'model/FileResp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileResp'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.FileMetadataGetResp = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.FileResp);
  }
}(this, function(ApiClient, FileResp) {
  'use strict';




  /**
   * The FileMetadataGetResp model module.
   * @module model/FileMetadataGetResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FileMetadataGetResp</code>.
   * @alias module:model/FileMetadataGetResp
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>FileMetadataGetResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileMetadataGetResp} obj Optional instance to populate.
   * @return {module:model/FileMetadataGetResp} The populated <code>FileMetadataGetResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('gid')) {
        obj['gid'] = ApiClient.convertToType(data['gid'], 'Number');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('operations')) {
        obj['operations'] = ApiClient.convertToType(data['operations'], 'Number');
      }
      if (data.hasOwnProperty('sub_type')) {
        obj['sub_type'] = ApiClient.convertToType(data['sub_type'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [FileResp]);
      }
    }
    return obj;
  }

  /**
   * File ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Unix group id
   * @member {Number} gid
   */
  exports.prototype['gid'] = undefined;
  /**
   * Unix user id
   * @member {Number} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * File creation timestamp
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * File modification timestamp
   * @member {Number} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * File name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * File parent ID
   * @member {String} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * File size in bytes
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * File type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * File metadata json
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * File operations bitmask
   * @member {Number} operations
   */
  exports.prototype['operations'] = undefined;
  /**
   * File origin info
   * @member {String} sub_type
   */
  exports.prototype['sub_type'] = undefined;
  /**
   * @member {Array.<module:model/FileResp>} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


