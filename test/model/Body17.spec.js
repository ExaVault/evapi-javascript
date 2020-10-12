'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * ExaVault API
 * See our API reference documentation at https://www.exavault.com/developer/api-docs/
 *
 * OpenAPI spec version: 2.0
 * Contact: support@exavault.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ExaVaultApi);
  }
})(undefined, function (expect, ExaVaultApi) {
  'use strict';

  var instance;

  beforeEach(function () {
    instance = new ExaVaultApi.Body17();
  });

  var getProperty = function getProperty(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();else return object[property];
  };

  var setProperty = function setProperty(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);else object[property] = value;
  };

  describe('Body17', function () {
    it('should create an instance of Body17', function () {
      // uncomment below and update the code to test Body17
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be.a(ExaVaultApi.Body17);
    });

    it('should have the property name (base name: "name")', function () {
      // uncomment below and update the code to test the property name
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function () {
      // uncomment below and update the code to test the property resources
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property accessMode (base name: "accessMode")', function () {
      // uncomment below and update the code to test the property accessMode
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property embed (base name: "embed")', function () {
      // uncomment below and update the code to test the property embed
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function () {
      // uncomment below and update the code to test the property recipients
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property expiration (base name: "expiration")', function () {
      // uncomment below and update the code to test the property expiration
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property hasNotification (base name: "hasNotification")', function () {
      // uncomment below and update the code to test the property hasNotification
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "isPublic")', function () {
      // uncomment below and update the code to test the property isPublic
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function () {
      // uncomment below and update the code to test the property message
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property notificationEmails (base name: "notificationEmails")', function () {
      // uncomment below and update the code to test the property notificationEmails
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function () {
      // uncomment below and update the code to test the property password
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property requireEmail (base name: "requireEmail")', function () {
      // uncomment below and update the code to test the property requireEmail
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function () {
      // uncomment below and update the code to test the property subject
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property fileDropCreateFolders (base name: "fileDropCreateFolders")', function () {
      // uncomment below and update the code to test the property fileDropCreateFolders
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function () {
      // uncomment below and update the code to test the property status
      //var instane = new ExaVaultApi.Body17();
      //expect(instance).to.be();
    });
  });
});