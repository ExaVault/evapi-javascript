'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Body12 model module.
* @module model/Body12
* @version 2.0
*/
var Body12 = function () {
    /**
    * Constructs a new <code>Body12</code>.
    * @alias module:model/Body12
    * @class
    * @param resources {Array.<String>} Resource identifier(s) of items to be copied to a new location
    * @param parentResource {String} Resource identifier for folder where items will be copied to.
    */

    function Body12(resources, parentResource) {
        _classCallCheck(this, Body12);

        this['resources'] = undefined;
        this['parentResource'] = undefined;


        this['resources'] = resources;
        this['parentResource'] = parentResource;
    }

    /**
    * Constructs a <code>Body12</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body12} obj Optional instance to populate.
    * @return {module:model/Body12} The populated <code>Body12</code> instance.
    */


    _createClass(Body12, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Body12();

                if (data.hasOwnProperty('resources')) {
                    obj['resources'] = _ApiClient2.default.convertToType(data['resources'], ['String']);
                }
                if (data.hasOwnProperty('parentResource')) {
                    obj['parentResource'] = _ApiClient2.default.convertToType(data['parentResource'], 'String');
                }
            }
            return obj;
        }

        /**
        * Resource identifier(s) of items to be copied to a new location
        * @member {Array.<String>} resources
        */

        /**
        * Resource identifier for folder where items will be copied to.
        * @member {String} parentResource
        */

    }]);

    return Body12;
}();

exports.default = Body12;