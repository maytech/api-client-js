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
    instance = new QuatrixApi.TrackingActivityRespItems();
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

  describe('TrackingActivityRespItems', function() {
    it('should create an instance of TrackingActivityRespItems', function() {
      expect(instance).to.be.a(QuatrixApi.TrackingActivityRespItems);
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance).to.have.property("id");
    });

    it('should have the property email (base name: "email")', function() {
      expect(instance).to.have.property("email");
    });

    it('should have the property userName (base name: "user_name")', function() {
      expect(instance).to.have.property("user_name");
    });

    it('should have the property userStatus (base name: "user_status")', function() {
      expect(instance).to.have.property("user_status");
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      expect(instance).to.have.property("timestamp");
    });

    it('should have the property protocol (base name: "protocol")', function() {
      expect(instance).to.have.property("protocol");
    });

    it('should have the property event (base name: "event")', function() {
      expect(instance).to.have.property("event");
    });

    it('should have the property action (base name: "action")', function() {
      expect(instance).to.have.property("action");
    });

    it('should have the property shareStatus (base name: "share_status")', function() {
      expect(instance).to.have.property("share_status");
    });

    it('should have the property payload (base name: "payload")', function() {
      expect(instance).to.have.property("payload");
    });

    it('should have the property duration (base name: "duration")', function() {
      expect(instance).to.have.property("duration");
    });

  });

}));
