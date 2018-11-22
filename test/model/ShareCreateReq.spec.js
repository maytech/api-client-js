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
    instance = new QuatrixApi.ShareCreateReq();
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

  describe('ShareCreateReq', function() {
    it('should create an instance of ShareCreateReq', function() {
      // uncomment below and update the code to test ShareCreateReq
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be.a(QuatrixApi.ShareCreateReq);
    });

    it('should have the property folderId (base name: "folder_id")', function() {
      // uncomment below and update the code to test the property folderId
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property expires (base name: "expires")', function() {
      // uncomment below and update the code to test the property expires
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property activates (base name: "activates")', function() {
      // uncomment below and update the code to test the property activates
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property returnFiles (base name: "return_files")', function() {
      // uncomment below and update the code to test the property returnFiles
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property pgpEncrypted (base name: "pgp_encrypted")', function() {
      // uncomment below and update the code to test the property pgpEncrypted
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property returnPgpEncrypted (base name: "return_pgp_encrypted")', function() {
      // uncomment below and update the code to test the property returnPgpEncrypted
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property messageSignature (base name: "message_signature")', function() {
      // uncomment below and update the code to test the property messageSignature
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property notify (base name: "notify")', function() {
      // uncomment below and update the code to test the property notify
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property shareType (base name: "share_type")', function() {
      // uncomment below and update the code to test the property shareType
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property pin (base name: "pin")', function() {
      // uncomment below and update the code to test the property pin
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

    it('should have the property sendEmail (base name: "send_email")', function() {
      // uncomment below and update the code to test the property sendEmail
      //var instane = new QuatrixApi.ShareCreateReq();
      //expect(instance).to.be();
    });

  });

}));
