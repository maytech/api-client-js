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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QuatrixApi);
  }
}(this, function(expect, QuatrixApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QuatrixApi.KeyRequestMetadataResp();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('KeyRequestMetadataResp', function() {
    it('should create an instance of KeyRequestMetadataResp', function() {
      expect(instance).to.be.a(QuatrixApi.KeyRequestMetadataResp);
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance).to.have.property("id");
    });

    it('should have the property senderName (base name: "sender_name")', function() {
      expect(instance).to.have.property("sender_name");
    });

    it('should have the property senderEmail (base name: "sender_email")', function() {
      expect(instance).to.have.property("sender_email");
    });

    it('should have the property userName (base name: "user_name")', function() {
      expect(instance).to.have.property("user_name");
    });

    it('should have the property userEmail (base name: "user_email")', function() {
      expect(instance).to.have.property("user_email");
    });

    it('should have the property locale (base name: "locale")', function() {
      expect(instance).to.have.property("locale");
    });

    it('should have the property isContact (base name: "is_contact")', function() {
      expect(instance).to.have.property("is_contact");
    });

  });

}));
