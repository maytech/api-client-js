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
    instance = new QuatrixApi.AutomationOptions();
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

  describe('AutomationOptions', function() {
    it('should create an instance of AutomationOptions', function() {
      // uncomment below and update the code to test AutomationOptions
      //var instane = new QuatrixApi.AutomationOptions();
      //expect(instance).to.be.a(QuatrixApi.AutomationOptions);
    });

    it('should have the property expire (base name: "expire")', function() {
      // uncomment below and update the code to test the property expire
      //var instane = new QuatrixApi.AutomationOptions();
      //expect(instance).to.be();
    });

    it('should have the property keepFolderStructure (base name: "keep_folder_structure")', function() {
      // uncomment below and update the code to test the property keepFolderStructure
      //var instane = new QuatrixApi.AutomationOptions();
      //expect(instance).to.be();
    });

    it('should have the property protectedFolderIds (base name: "protected_folder_ids")', function() {
      // uncomment below and update the code to test the property protectedFolderIds
      //var instane = new QuatrixApi.AutomationOptions();
      //expect(instance).to.be();
    });

    it('should have the property skipHomeFolders (base name: "skip_home_folders")', function() {
      // uncomment below and update the code to test the property skipHomeFolders
      //var instane = new QuatrixApi.AutomationOptions();
      //expect(instance).to.be();
    });

    it('should have the property skipSharedFolders (base name: "skip_shared_folders")', function() {
      // uncomment below and update the code to test the property skipSharedFolders
      //var instane = new QuatrixApi.AutomationOptions();
      //expect(instance).to.be();
    });

    it('should have the property superTrash (base name: "super_trash")', function() {
      // uncomment below and update the code to test the property superTrash
      //var instane = new QuatrixApi.AutomationOptions();
      //expect(instance).to.be();
    });

    it('should have the property oauthCode (base name: "oauth_code")', function() {
      // uncomment below and update the code to test the property oauthCode
      //var instane = new QuatrixApi.AutomationOptions();
      //expect(instance).to.be();
    });

  });

}));
