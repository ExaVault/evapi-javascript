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

var _ResourceAttributes = require('./ResourceAttributes');

var _ResourceAttributes2 = _interopRequireDefault(_ResourceAttributes);

var _ResourceRelationships = require('./ResourceRelationships');

var _ResourceRelationships2 = _interopRequireDefault(_ResourceRelationships);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Resource model module.
* @module model/Resource
* @version 2.2.1
*/
var Resource = function () {
    /**
    * Constructs a new <code>Resource</code>.
    * All properties of the resource.
    * @alias module:model/Resource
    * @class
    */

    function Resource() {
        _classCallCheck(this, Resource);

        this['id'] = undefined;
        this['type'] = undefined;
        this['attributes'] = undefined;
        this['relationships'] = undefined;
    }

    /**
    * Constructs a <code>Resource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Resource} obj Optional instance to populate.
    * @return {module:model/Resource} The populated <code>Resource</code> instance.
    */


    _createClass(Resource, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Resource();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('attributes')) {
                    obj['attributes'] = _ResourceAttributes2.default.constructFromObject(data['attributes']);
                }
                if (data.hasOwnProperty('relationships')) {
                    obj['relationships'] = _ResourceRelationships2.default.constructFromObject(data['relationships']);
                }
            }
            return obj;
        }

        /**
        * @member {Number} id
        */

        /**
        * Type of item. \"resource\"
        * @member {module:model/Resource.TypeEnum} type
        */

        /**
        * @member {module:model/ResourceAttributes} attributes
        */

        /**
        * @member {module:model/ResourceRelationships} relationships
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return Resource;
}();

Resource.TypeEnum = {
    /**
     * value: "resource"
     * @const
     */
    "resource": "resource" };
exports.default = Resource;