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

var _FormFieldUploadAreaSettings = require('./FormFieldUploadAreaSettings');

var _FormFieldUploadAreaSettings2 = _interopRequireDefault(_FormFieldUploadAreaSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The FormFieldUploadArea model module.
* @module model/FormFieldUploadArea
* @version 2.2.1
*/
var FormFieldUploadArea = function () {
    /**
    * Constructs a new <code>FormFieldUploadArea</code>.
    * @alias module:model/FormFieldUploadArea
    * @class
    */

    function FormFieldUploadArea() {
        _classCallCheck(this, FormFieldUploadArea);

        this['id'] = undefined;
        this['name'] = undefined;
        this['order'] = undefined;
        this['type'] = undefined;
        this['settings'] = undefined;
    }

    /**
    * Constructs a <code>FormFieldUploadArea</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FormFieldUploadArea} obj Optional instance to populate.
    * @return {module:model/FormFieldUploadArea} The populated <code>FormFieldUploadArea</code> instance.
    */


    _createClass(FormFieldUploadArea, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FormFieldUploadArea();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('order')) {
                    obj['order'] = _ApiClient2.default.convertToType(data['order'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('settings')) {
                    obj['settings'] = _FormFieldUploadAreaSettings2.default.constructFromObject(data['settings']);
                }
            }
            return obj;
        }

        /**
        * ID of the form field. 
        * @member {Number} id
        */

        /**
        * Label of the field (not used).
        * @member {String} name
        */

        /**
        * Order that field appears on the form, starting from 0
        * @member {Number} order
        */

        /**
        * Type is upload_area.
        * @member {String} type
        */

        /**
        * @member {module:model/FormFieldUploadAreaSettings} settings
        */

    }]);

    return FormFieldUploadArea;
}();

exports.default = FormFieldUploadArea;