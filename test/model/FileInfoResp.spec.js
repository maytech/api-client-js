/**
 * Quatrix API
 * The Quatrix API enables you to automate your interaction with Quatrix using any scripting or programming language. You can test API calls on [Swagger](https://docs.maytech.net/swagger/), the interactive environment we use as the repository for the Quatrix API. In order to authorize to Quatrix API you will need to have a Quatrix account https://yourcompanyname.quatrix.it/ (e.g. https://test-api.quatrix.it/). You can set up a free trial account [here](https://www.maytech.net/freetrial.html#trial=qtrx). Below you'll find information on how to authenticate in a Quatrix session, how to construct JSON formatted API call and what JSON responses to expect.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    instance = new QuatrixApi.FileInfoResp();
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

  describe('FileInfoResp', function() {
    it('should create an instance of FileInfoResp', function() {
      // uncomment below and update the code to test FileInfoResp
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be.a(QuatrixApi.FileInfoResp);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

    it('should have the property contentModified (base name: "content_modified")', function() {
      // uncomment below and update the code to test the property contentModified
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

    it('should have the property fileOwner (base name: "file_owner")', function() {
      // uncomment below and update the code to test the property fileOwner
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

    it('should have the property actionRole (base name: "action_role")', function() {
      // uncomment below and update the code to test the property actionRole
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

    it('should have the property paths (base name: "paths")', function() {
      // uncomment below and update the code to test the property paths
      //var instane = new QuatrixApi.FileInfoResp();
      //expect(instance).to.be();
    });

  });

}));
