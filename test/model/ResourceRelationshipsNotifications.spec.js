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
    instance = new ExaVaultApi.ResourceRelationshipsNotifications();
  });

  var getProperty = function getProperty(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();else return object[property];
  };

  var setProperty = function setProperty(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);else object[property] = value;
  };

  describe('ResourceRelationshipsNotifications', function () {
    it('should create an instance of ResourceRelationshipsNotifications', function () {
      // uncomment below and update the code to test ResourceRelationshipsNotifications
      //var instane = new ExaVaultApi.ResourceRelationshipsNotifications();
      //expect(instance).to.be.a(ExaVaultApi.ResourceRelationshipsNotifications);
    });

    it('should have the property data (base name: "data")', function () {
      // uncomment below and update the code to test the property data
      //var instane = new ExaVaultApi.ResourceRelationshipsNotifications();
      //expect(instance).to.be();
    });
  });
});