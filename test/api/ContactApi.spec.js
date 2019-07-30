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
    instance = new QuatrixApi.ContactApi();
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

  describe('ContactApi', function() {
    describe('contactCreatePost', function() {
      it('should call contactCreatePost successfully', function(done) {
        //uncomment below and update the code to test contactCreatePost
        //instance.contactCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactDeletePost', function() {
      it('should call contactDeletePost successfully', function(done) {
        //uncomment below and update the code to test contactDeletePost
        //instance.contactDeletePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactEditIdPost', function() {
      it('should call contactEditIdPost successfully', function(done) {
        //uncomment below and update the code to test contactEditIdPost
        //instance.contactEditIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactGet', function() {
      it('should call contactGet successfully', function(done) {
        //uncomment below and update the code to test contactGet
        //instance.contactGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactGroupGet', function() {
      it('should call contactGroupGet successfully', function(done) {
        //uncomment below and update the code to test contactGroupGet
        //instance.contactGroupGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactMetadataIdGet', function() {
      it('should call contactMetadataIdGet successfully', function(done) {
        //uncomment below and update the code to test contactMetadataIdGet
        //instance.contactMetadataIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactPgpKeyIdGet', function() {
      it('should call contactPgpKeyIdGet successfully', function(done) {
        //uncomment below and update the code to test contactPgpKeyIdGet
        //instance.contactPgpKeyIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactUpgradeIdGet', function() {
      it('should call contactUpgradeIdGet successfully', function(done) {
        //uncomment below and update the code to test contactUpgradeIdGet
        //instance.contactUpgradeIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
