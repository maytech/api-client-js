/**
 * Quatrix API
 * File Transfer And Sharing API
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
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", "../../src/index", "sinon"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require("../../src/index"), require("sinon"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QuatrixApi, root.sinon);
  }
})(this, function(expect, QuatrixApi, sinon) {
  "use strict";

  var instance;

  beforeEach(function() {
    instance = new QuatrixApi.SSHKeyApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === "function") return object[getter]();
    else return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === "function") object[setter](value);
    else object[property] = value;
  };

  describe("SSHKeyApi", function() {
    describe("sshKeyCreatePost", function() {
      it("should throw error if body is missed", function() {
        expect(instance.sshKeyCreatePost).to.throwException(function(e) {
          expect(e.message).to.be.equal(
            "Missing the required parameter 'body' when calling sshKeyCreatePost"
          );
        });
      });

      it("should call sshKeyCreatePost successfully", function() {
        instance.apiClient.callApi = sinon.stub().returns("result");
        var body = "body";
        var callback = "callback";
        var result = instance.sshKeyCreatePost(body, callback);
        expect(result).to.be.equal("result");
        expect(instance.apiClient.callApi.calledOnce).to.be(true);
        expect(instance.apiClient.callApi.args[0][0]).to.be.equal(
          "/ssh-key/create"
        );
        expect(instance.apiClient.callApi.args[0][1]).to.be.equal("POST");
        expect(instance.apiClient.callApi.args[0][2]).to.eql({});
        expect(instance.apiClient.callApi.args[0][3]).to.eql({});
        expect(instance.apiClient.callApi.args[0][4]).to.eql({});
        expect(instance.apiClient.callApi.args[0][5]).to.eql({});
        expect(instance.apiClient.callApi.args[0][6]).to.eql({});
        expect(instance.apiClient.callApi.args[0][7]).to.be.equal("body");
        expect(instance.apiClient.callApi.args[0][8]).to.eql(["api_key"]);
        expect(instance.apiClient.callApi.args[0][9]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][10]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][11]).to.be.a(Function);
        expect(instance.apiClient.callApi.args[0][12]).to.be.equal("callback");
      });
    });
    describe("sshKeyDeleteIdGet", function() {
      it("should throw error if id is missed", function() {
        expect(instance.sshKeyDeleteIdGet).to.throwException(function(e) {
          expect(e.message).to.be.equal(
            "Missing the required parameter 'id' when calling sshKeyDeleteIdGet"
          );
        });
      });

      it("should call sshKeyDeleteIdGet successfully", function() {
        instance.apiClient.callApi = sinon.stub().returns("result");
        var id = "id";
        var callback = "callback";
        var result = instance.sshKeyDeleteIdGet(id, callback);
        expect(result).to.be.equal("result");
        expect(instance.apiClient.callApi.calledOnce).to.be(true);
        expect(instance.apiClient.callApi.args[0][0]).to.be.equal(
          "/ssh-key/delete/{id}"
        );
        expect(instance.apiClient.callApi.args[0][1]).to.be.equal("GET");
        expect(instance.apiClient.callApi.args[0][2]).to.eql({
          id: "id"
        });
        expect(instance.apiClient.callApi.args[0][3]).to.eql({});
        expect(instance.apiClient.callApi.args[0][4]).to.eql({});
        expect(instance.apiClient.callApi.args[0][5]).to.eql({});
        expect(instance.apiClient.callApi.args[0][6]).to.eql({});
        expect(instance.apiClient.callApi.args[0][7]).to.be(null);
        expect(instance.apiClient.callApi.args[0][8]).to.eql(["api_key"]);
        expect(instance.apiClient.callApi.args[0][9]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][10]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][11]).to.be.a(Function);
        expect(instance.apiClient.callApi.args[0][12]).to.be.equal("callback");
      });
    });
    describe("sshKeyDeletePost", function() {
      it("should throw error if body is missed", function() {
        expect(instance.sshKeyDeletePost).to.throwException(function(e) {
          expect(e.message).to.be.equal(
            "Missing the required parameter 'body' when calling sshKeyDeletePost"
          );
        });
      });

      it("should call sshKeyDeletePost successfully", function() {
        instance.apiClient.callApi = sinon.stub().returns("result");
        var body = "body";
        var callback = "callback";
        var result = instance.sshKeyDeletePost(body, callback);
        expect(result).to.be.equal("result");
        expect(instance.apiClient.callApi.calledOnce).to.be(true);
        expect(instance.apiClient.callApi.args[0][0]).to.be.equal(
          "/ssh-key/delete"
        );
        expect(instance.apiClient.callApi.args[0][1]).to.be.equal("POST");
        expect(instance.apiClient.callApi.args[0][2]).to.eql({});
        expect(instance.apiClient.callApi.args[0][3]).to.eql({});
        expect(instance.apiClient.callApi.args[0][4]).to.eql({});
        expect(instance.apiClient.callApi.args[0][5]).to.eql({});
        expect(instance.apiClient.callApi.args[0][6]).to.eql({});
        expect(instance.apiClient.callApi.args[0][7]).to.be.equal("body");
        expect(instance.apiClient.callApi.args[0][8]).to.eql(["api_key"]);
        expect(instance.apiClient.callApi.args[0][9]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][10]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][11]).to.be.a(Function);
        expect(instance.apiClient.callApi.args[0][12]).to.be.equal("callback");
      });
    });
    describe("sshKeyEditPost", function() {
      it("should throw error if body is missed", function() {
        expect(instance.sshKeyEditPost).to.throwException(function(e) {
          expect(e.message).to.be.equal(
            "Missing the required parameter 'body' when calling sshKeyEditPost"
          );
        });
      });

      it("should call sshKeyEditPost successfully", function() {
        instance.apiClient.callApi = sinon.stub().returns("result");
        var body = "body";
        var callback = "callback";
        var result = instance.sshKeyEditPost(body, callback);
        expect(result).to.be.equal("result");
        expect(instance.apiClient.callApi.calledOnce).to.be(true);
        expect(instance.apiClient.callApi.args[0][0]).to.be.equal(
          "/ssh-key/edit"
        );
        expect(instance.apiClient.callApi.args[0][1]).to.be.equal("POST");
        expect(instance.apiClient.callApi.args[0][2]).to.eql({});
        expect(instance.apiClient.callApi.args[0][3]).to.eql({});
        expect(instance.apiClient.callApi.args[0][4]).to.eql({});
        expect(instance.apiClient.callApi.args[0][5]).to.eql({});
        expect(instance.apiClient.callApi.args[0][6]).to.eql({});
        expect(instance.apiClient.callApi.args[0][7]).to.be.equal("body");
        expect(instance.apiClient.callApi.args[0][8]).to.eql(["api_key"]);
        expect(instance.apiClient.callApi.args[0][9]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][10]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][11]).to.be.a(Function);
        expect(instance.apiClient.callApi.args[0][12]).to.be.equal("callback");
      });
    });
    describe("sshKeyGet", function() {
      it("should call sshKeyGet successfully", function() {
        instance.apiClient.callApi = sinon.stub().returns("result");
        var callback = "callback";
        var result = instance.sshKeyGet(callback);
        expect(result).to.be.equal("result");
        expect(instance.apiClient.callApi.calledOnce).to.be(true);
        expect(instance.apiClient.callApi.args[0][0]).to.be.equal("/ssh-key");
        expect(instance.apiClient.callApi.args[0][1]).to.be.equal("GET");
        expect(instance.apiClient.callApi.args[0][2]).to.eql({});
        expect(instance.apiClient.callApi.args[0][3]).to.eql({});
        expect(instance.apiClient.callApi.args[0][4]).to.eql({});
        expect(instance.apiClient.callApi.args[0][5]).to.eql({});
        expect(instance.apiClient.callApi.args[0][6]).to.eql({});
        expect(instance.apiClient.callApi.args[0][7]).to.be(null);
        expect(instance.apiClient.callApi.args[0][8]).to.eql(["api_key"]);
        expect(instance.apiClient.callApi.args[0][9]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][10]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][11]).to.be.a(Array);
        expect(instance.apiClient.callApi.args[0][12]).to.be.equal("callback");
      });
    });
    describe("sshKeyMetadataIdGet", function() {
      it("should throw error if id is missed", function() {
        expect(instance.sshKeyMetadataIdGet).to.throwException(function(e) {
          expect(e.message).to.be.equal(
            "Missing the required parameter 'id' when calling sshKeyMetadataIdGet"
          );
        });
      });

      it("should call sshKeyMetadataIdGet successfully", function() {
        instance.apiClient.callApi = sinon.stub().returns("result");
        var id = "id";
        var callback = "callback";
        var result = instance.sshKeyMetadataIdGet(id, callback);
        expect(result).to.be.equal("result");
        expect(instance.apiClient.callApi.calledOnce).to.be(true);
        expect(instance.apiClient.callApi.args[0][0]).to.be.equal(
          "/ssh-key/metadata/{id}"
        );
        expect(instance.apiClient.callApi.args[0][1]).to.be.equal("GET");
        expect(instance.apiClient.callApi.args[0][2]).to.eql({
          id: "id"
        });
        expect(instance.apiClient.callApi.args[0][3]).to.eql({});
        expect(instance.apiClient.callApi.args[0][4]).to.eql({});
        expect(instance.apiClient.callApi.args[0][5]).to.eql({});
        expect(instance.apiClient.callApi.args[0][6]).to.eql({});
        expect(instance.apiClient.callApi.args[0][7]).to.be(null);
        expect(instance.apiClient.callApi.args[0][8]).to.eql(["api_key"]);
        expect(instance.apiClient.callApi.args[0][9]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][10]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][11]).to.be.a(Function);
        expect(instance.apiClient.callApi.args[0][12]).to.be.equal("callback");
      });
    });
  });
});
