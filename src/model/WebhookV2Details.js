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

var _WebhookV2EventData = require('./WebhookV2EventData');

var _WebhookV2EventData2 = _interopRequireDefault(_WebhookV2EventData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The WebhookV2Details model module.
* @module model/WebhookV2Details
* @version 2.2.5
*/
var WebhookV2Details = function () {
    /**
    * Constructs a new <code>WebhookV2Details</code>.
    * @alias module:model/WebhookV2Details
    * @class
    */

    function WebhookV2Details() {
        _classCallCheck(this, WebhookV2Details);

        this['attemptId'] = undefined;
        this['accountName'] = undefined;
        this['eventTimestamp'] = undefined;
        this['ipAddress'] = undefined;
        this['protocol'] = undefined;
        this['username'] = undefined;
        this['event'] = undefined;
        this['eventData'] = undefined;
    }

    /**
    * Constructs a <code>WebhookV2Details</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WebhookV2Details} obj Optional instance to populate.
    * @return {module:model/WebhookV2Details} The populated <code>WebhookV2Details</code> instance.
    */


    _createClass(WebhookV2Details, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WebhookV2Details();

                if (data.hasOwnProperty('attemptId')) {
                    obj['attemptId'] = _ApiClient2.default.convertToType(data['attemptId'], 'String');
                }
                if (data.hasOwnProperty('accountName')) {
                    obj['accountName'] = _ApiClient2.default.convertToType(data['accountName'], 'String');
                }
                if (data.hasOwnProperty('eventTimestamp')) {
                    obj['eventTimestamp'] = _ApiClient2.default.convertToType(data['eventTimestamp'], 'Date');
                }
                if (data.hasOwnProperty('ipAddress')) {
                    obj['ipAddress'] = _ApiClient2.default.convertToType(data['ipAddress'], 'String');
                }
                if (data.hasOwnProperty('protocol')) {
                    obj['protocol'] = _ApiClient2.default.convertToType(data['protocol'], 'String');
                }
                if (data.hasOwnProperty('username')) {
                    obj['username'] = _ApiClient2.default.convertToType(data['username'], 'String');
                }
                if (data.hasOwnProperty('event')) {
                    obj['event'] = _ApiClient2.default.convertToType(data['event'], 'String');
                }
                if (data.hasOwnProperty('eventData')) {
                    obj['eventData'] = _WebhookV2EventData2.default.constructFromObject(data['eventData']);
                }
            }
            return obj;
        }

        /**
        * Entry - retry identifier
        * @member {String} attemptId
        */

        /**
        * Account master username
        * @member {String} accountName
        */

        /**
        * Date and time event originally took place
        * @member {Date} eventTimestamp
        */

        /**
        * IP address of related activity
        * @member {String} ipAddress
        */

        /**
        * Type of connection used for related activity
        * @member {String} protocol
        */

        /**
        * Username logged for related activity. May refer to someone who is not a user of the account, such as a share recipient or \"publ
        * @member {String} username
        */

        /**
        * Type of related activity
        * @member {String} event
        */

        /**
        * @member {module:model/WebhookV2EventData} eventData
        */

    }]);

    return WebhookV2Details;
}();

exports.default = WebhookV2Details;