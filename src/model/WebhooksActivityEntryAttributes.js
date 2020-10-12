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
* The WebhooksActivityEntryAttributes model module.
* @module model/WebhooksActivityEntryAttributes
* @version 2.0
*/
var WebhooksActivityEntryAttributes = function () {
    /**
    * Constructs a new <code>WebhooksActivityEntryAttributes</code>.
    * @alias module:model/WebhooksActivityEntryAttributes
    * @class
    */

    function WebhooksActivityEntryAttributes() {
        _classCallCheck(this, WebhooksActivityEntryAttributes);

        this['attempt'] = undefined;
        this['created'] = undefined;
        this['endpointUrl'] = undefined;
        this['event'] = undefined;
        this['response'] = undefined;
        this['responseSize'] = undefined;
        this['status'] = undefined;
    }

    /**
    * Constructs a <code>WebhooksActivityEntryAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WebhooksActivityEntryAttributes} obj Optional instance to populate.
    * @return {module:model/WebhooksActivityEntryAttributes} The populated <code>WebhooksActivityEntryAttributes</code> instance.
    */


    _createClass(WebhooksActivityEntryAttributes, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WebhooksActivityEntryAttributes();

                if (data.hasOwnProperty('attempt')) {
                    obj['attempt'] = _ApiClient2.default.convertToType(data['attempt'], 'Number');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'String');
                }
                if (data.hasOwnProperty('endpointUrl')) {
                    obj['endpointUrl'] = _ApiClient2.default.convertToType(data['endpointUrl'], 'String');
                }
                if (data.hasOwnProperty('event')) {
                    obj['event'] = _ApiClient2.default.convertToType(data['event'], 'String');
                }
                if (data.hasOwnProperty('response')) {
                    obj['response'] = _ApiClient2.default.convertToType(data['response'], 'String');
                }
                if (data.hasOwnProperty('responseSize')) {
                    obj['responseSize'] = _ApiClient2.default.convertToType(data['responseSize'], 'Number');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Number} attempt
        */

        /**
        * @member {String} created
        */

        /**
        * @member {String} endpointUrl
        */

        /**
        * @member {String} event
        */

        /**
        * @member {String} response
        */

        /**
        * @member {Number} responseSize
        */

        /**
        * @member {Number} status
        */

    }]);

    return WebhooksActivityEntryAttributes;
}();

exports.default = WebhooksActivityEntryAttributes;