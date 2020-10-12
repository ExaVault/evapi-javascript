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
    instance = new ExaVaultApi.FormAttributes();
  });

  var getProperty = function getProperty(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();else return object[property];
  };

  var setProperty = function setProperty(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);else object[property] = value;
  };

  describe('FormAttributes', function () {
    it('should create an instance of FormAttributes', function () {
      // uncomment below and update the code to test FormAttributes
      //var instane = new ExaVaultApi.FormAttributes();
      //expect(instance).to.be.a(ExaVaultApi.FormAttributes);
    });

    it('should have the property formDescription (base name: "formDescription")', function () {
      // uncomment below and update the code to test the property formDescription
      //var instane = new ExaVaultApi.FormAttributes();
      //expect(instance).to.be();
    });

    it('should have the property submitButtonText (base name: "submitButtonText")', function () {
      // uncomment below and update the code to test the property submitButtonText
      //var instane = new ExaVaultApi.FormAttributes();
      //expect(instance).to.be();
    });

    it('should have the property successMessage (base name: "successMessage")', function () {
      // uncomment below and update the code to test the property successMessage
      //var instane = new ExaVaultApi.FormAttributes();
      //expect(instance).to.be();
    });

    it('should have the property cssStyles (base name: "cssStyles")', function () {
      // uncomment below and update the code to test the property cssStyles
      //var instane = new ExaVaultApi.FormAttributes();
      //expect(instance).to.be();
    });

    it('should have the property elements (base name: "elements")', function () {
      // uncomment below and update the code to test the property elements
      //var instane = new ExaVaultApi.FormAttributes();
      //expect(instance).to.be();
    });
  });
});