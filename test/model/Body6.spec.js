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
    instance = new ExaVaultApi.Body6();
  });

  var getProperty = function getProperty(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();else return object[property];
  };

  var setProperty = function setProperty(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);else object[property] = value;
  };

  describe('Body6', function () {
    it('should create an instance of Body6', function () {
      // uncomment below and update the code to test Body6
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be.a(ExaVaultApi.Body6);
    });

    it('should have the property username (base name: "username")', function () {
      // uncomment below and update the code to test the property username
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property nickname (base name: "nickname")', function () {
      // uncomment below and update the code to test the property nickname
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property homeResource (base name: "homeResource")', function () {
      // uncomment below and update the code to test the property homeResource
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function () {
      // uncomment below and update the code to test the property email
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function () {
      // uncomment below and update the code to test the property password
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function () {
      // uncomment below and update the code to test the property role
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function () {
      // uncomment below and update the code to test the property permissions
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "timeZone")', function () {
      // uncomment below and update the code to test the property timeZone
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property expiration (base name: "expiration")', function () {
      // uncomment below and update the code to test the property expiration
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function () {
      // uncomment below and update the code to test the property locked
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });

    it('should have the property onboarding (base name: "onboarding")', function () {
      // uncomment below and update the code to test the property onboarding
      //var instane = new ExaVaultApi.Body6();
      //expect(instance).to.be();
    });
  });
});