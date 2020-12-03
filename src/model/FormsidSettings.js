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
* The FormsidSettings model module.
* @module model/FormsidSettings
* @version 2.2.3
*/
var FormsidSettings = function () {
    /**
    * Constructs a new <code>FormsidSettings</code>.
    * @alias module:model/FormsidSettings
    * @class
    */

    function FormsidSettings() {
        _classCallCheck(this, FormsidSettings);

        this['isRequired'] = undefined;
        this['senderEmail'] = undefined;
        this['useAsFolderName'] = undefined;
    }

    /**
    * Constructs a <code>FormsidSettings</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FormsidSettings} obj Optional instance to populate.
    * @return {module:model/FormsidSettings} The populated <code>FormsidSettings</code> instance.
    */


    _createClass(FormsidSettings, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FormsidSettings();

                if (data.hasOwnProperty('isRequired')) {
                    obj['isRequired'] = _ApiClient2.default.convertToType(data['isRequired'], 'Boolean');
                }
                if (data.hasOwnProperty('senderEmail')) {
                    obj['senderEmail'] = _ApiClient2.default.convertToType(data['senderEmail'], 'Boolean');
                }
                if (data.hasOwnProperty('useAsFolderName')) {
                    obj['useAsFolderName'] = _ApiClient2.default.convertToType(data['useAsFolderName'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * True is the form element is required for submission. 
        * @member {Boolean} isRequired
        */

        /**
        * @member {Boolean} senderEmail
        */

        /**
        * True if the submitted response should be used as the name for the new folder. 
        * @member {Boolean} useAsFolderName
        */

    }]);

    return FormsidSettings;
}();

exports.default = FormsidSettings;