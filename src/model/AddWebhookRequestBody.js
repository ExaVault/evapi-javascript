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

var _WebhookTriggers = require('./WebhookTriggers');

var _WebhookTriggers2 = _interopRequireDefault(_WebhookTriggers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The AddWebhookRequestBody model module.
* @module model/AddWebhookRequestBody
* @version 2.2.4
*/
var AddWebhookRequestBody = function () {
    /**
    * Constructs a new <code>AddWebhookRequestBody</code>.
    * @alias module:model/AddWebhookRequestBody
    * @class
    * @param endpointUrl {String} The endpoint is where the webhook request will be sent.
    */

    function AddWebhookRequestBody(endpointUrl) {
        _classCallCheck(this, AddWebhookRequestBody);

        this['endpointUrl'] = undefined;
        this['triggers'] = undefined;
        this['resource'] = undefined;
        this['responseVersion'] = undefined;


        this['endpointUrl'] = endpointUrl;
    }

    /**
    * Constructs a <code>AddWebhookRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AddWebhookRequestBody} obj Optional instance to populate.
    * @return {module:model/AddWebhookRequestBody} The populated <code>AddWebhookRequestBody</code> instance.
    */


    _createClass(AddWebhookRequestBody, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AddWebhookRequestBody();

                if (data.hasOwnProperty('endpointUrl')) {
                    obj['endpointUrl'] = _ApiClient2.default.convertToType(data['endpointUrl'], 'String');
                }
                if (data.hasOwnProperty('triggers')) {
                    obj['triggers'] = _WebhookTriggers2.default.constructFromObject(data['triggers']);
                }
                if (data.hasOwnProperty('resource')) {
                    obj['resource'] = _ApiClient2.default.convertToType(data['resource'], 'String');
                }
                if (data.hasOwnProperty('responseVersion')) {
                    obj['responseVersion'] = _ApiClient2.default.convertToType(data['responseVersion'], 'String');
                }
            }
            return obj;
        }

        /**
        * The endpoint is where the webhook request will be sent.
        * @member {String} endpointUrl
        */

        /**
        * @member {module:model/WebhookTriggers} triggers
        */

        /**
        * Resource identifier for the top folder this webhook is associated with
        * @member {String} resource
        */

        /**
        * What version of webhook request should be sent to the endpoint URL when messages are sent
        * @member {module:model/AddWebhookRequestBody.ResponseVersionEnum} responseVersion
        */


        /**
        * Allowed values for the <code>responseVersion</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return AddWebhookRequestBody;
}();

AddWebhookRequestBody.ResponseVersionEnum = {
    /**
     * value: "v1"
     * @const
     */
    "v1": "v1",
    /**
     * value: "v2"
     * @const
     */
    "v2": "v2" };
exports.default = AddWebhookRequestBody;