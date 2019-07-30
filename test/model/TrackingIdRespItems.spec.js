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
    instance = new QuatrixApi.TrackingIdRespItems();
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

  describe('TrackingIdRespItems', function() {
    it('should create an instance of TrackingIdRespItems', function() {
      expect(instance).to.be.a(QuatrixApi.TrackingIdRespItems);
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance).to.have.property("id");
    });

    it('should have the property subject (base name: "subject")', function() {
      expect(instance).to.have.property("subject");
    });

    it('should have the property type (base name: "type")', function() {
      expect(instance).to.have.property("type");
    });

    it('should have the property isReply (base name: "is_reply")', function() {
      expect(instance).to.have.property("is_reply");
    });

    it('should have the property releaseDate (base name: "release_date")', function() {
      expect(instance).to.have.property("release_date");
    });

    it('should have the property expireDate (base name: "expire_date")', function() {
      expect(instance).to.have.property("expire_date");
    });

    it('should have the property created (base name: "created")', function() {
      expect(instance).to.have.property("created");
    });

    it('should have the property status (base name: "status")', function() {
      expect(instance).to.have.property("status");
    });

    it('should have the property email (base name: "email")', function() {
      expect(instance).to.have.property("email");
    });

    it('should have the property emails (base name: "emails")', function() {
      expect(instance).to.have.property("emails");
    });

    it('should have the property ownerId (base name: "owner_id")', function() {
      expect(instance).to.have.property("owner_id");
    });

  });

}));
