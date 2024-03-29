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

var _FormAttributes = require('./FormAttributes');

var _FormAttributes2 = _interopRequireDefault(_FormAttributes);

var _FormRelationships = require('./FormRelationships');

var _FormRelationships2 = _interopRequireDefault(_FormRelationships);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Form model module.
* @module model/Form
* @version 2.2.5
*/
var Form = function () {
    /**
    * Constructs a new <code>Form</code>.
    * Regular form object.
    * @alias module:model/Form
    * @class
    */

    function Form() {
        _classCallCheck(this, Form);

        this['type'] = undefined;
        this['id'] = undefined;
        this['attributes'] = undefined;
        this['relationships'] = undefined;
    }

    /**
    * Constructs a <code>Form</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Form} obj Optional instance to populate.
    * @return {module:model/Form} The populated <code>Form</code> instance.
    */


    _createClass(Form, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Form();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('attributes')) {
                    obj['attributes'] = _FormAttributes2.default.constructFromObject(data['attributes']);
                }
                if (data.hasOwnProperty('relationships')) {
                    obj['relationships'] = _FormRelationships2.default.constructFromObject(data['relationships']);
                }
            }
            return obj;
        }

        /**
        * Type is \"form\".
        * @member {String} type
        */

        /**
        * ID of the form.
        * @member {Number} id
        */

        /**
        * @member {module:model/FormAttributes} attributes
        */

        /**
        * @member {module:model/FormRelationships} relationships
        */

    }]);

    return Form;
}();

exports.default = Form;