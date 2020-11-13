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

var _FormsidSettings = require('./FormsidSettings');

var _FormsidSettings2 = _interopRequireDefault(_FormsidSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The FormsidElements model module.
* @module model/FormsidElements
* @version 2.2.2
*/
var FormsidElements = function () {
    /**
    * Constructs a new <code>FormsidElements</code>.
    * @alias module:model/FormsidElements
    * @class
    */

    function FormsidElements() {
        _classCallCheck(this, FormsidElements);

        this['id'] = undefined;
        this['name'] = undefined;
        this['order'] = undefined;
        this['type'] = undefined;
        this['settings'] = undefined;
    }

    /**
    * Constructs a <code>FormsidElements</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FormsidElements} obj Optional instance to populate.
    * @return {module:model/FormsidElements} The populated <code>FormsidElements</code> instance.
    */


    _createClass(FormsidElements, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FormsidElements();

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
                    obj['settings'] = _FormsidSettings2.default.constructFromObject(data['settings']);
                }
            }
            return obj;
        }

        /**
        * ID of the form element. If you're adding a new element to the form, do not include this field.
        * @member {Number} id
        */

        /**
        * Name of the form element.
        * @member {String} name
        */

        /**
        * The order the fields will be displayed to the receipient. Starts at 0. 
        * @member {Number} order
        */

        /**
        * Type of form field to use.
        * @member {module:model/FormsidElements.TypeEnum} type
        */

        /**
        * @member {module:model/FormsidSettings} settings
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return FormsidElements;
}();

FormsidElements.TypeEnum = {
    /**
     * value: "name"
     * @const
     */
    "name": "name",
    /**
     * value: "email"
     * @const
     */
    "email": "email",
    /**
     * value: "text"
     * @const
     */
    "text": "text",
    /**
     * value: "textarea"
     * @const
     */
    "textarea": "textarea",
    /**
     * value: "upload_area"
     * @const
     */
    "upload_area": "upload_area" };
exports.default = FormsidElements;