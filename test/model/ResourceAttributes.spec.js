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
    instance = new ExaVaultApi.ResourceAttributes();
  });

  var getProperty = function getProperty(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();else return object[property];
  };

  var setProperty = function setProperty(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);else object[property] = value;
  };

  describe('ResourceAttributes', function () {
    it('should create an instance of ResourceAttributes', function () {
      // uncomment below and update the code to test ResourceAttributes
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be.a(ExaVaultApi.ResourceAttributes);
    });

    it('should have the property hash (base name: "hash")', function () {
      // uncomment below and update the code to test the property hash
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function () {
      // uncomment below and update the code to test the property name
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property extension (base name: "extension")', function () {
      // uncomment below and update the code to test the property extension
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function () {
      // uncomment below and update the code to test the property type
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function () {
      // uncomment below and update the code to test the property createdBy
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property uploadDate (base name: "uploadDate")', function () {
      // uncomment below and update the code to test the property uploadDate
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function () {
      // uncomment below and update the code to test the property createdAt
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function () {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property accessedAt (base name: "accessedAt")', function () {
      // uncomment below and update the code to test the property accessedAt
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "createdTime")', function () {
      // uncomment below and update the code to test the property createdTime
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property updatedTime (base name: "updatedTime")', function () {
      // uncomment below and update the code to test the property updatedTime
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property accessedTime (base name: "accessedTime")', function () {
      // uncomment below and update the code to test the property accessedTime
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function () {
      // uncomment below and update the code to test the property path
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function () {
      // uncomment below and update the code to test the property size
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property fileCount (base name: "fileCount")', function () {
      // uncomment below and update the code to test the property fileCount
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property previewable (base name: "previewable")', function () {
      // uncomment below and update the code to test the property previewable
      //var instane = new ExaVaultApi.ResourceAttributes();
      //expect(instance).to.be();
    });
  });
});