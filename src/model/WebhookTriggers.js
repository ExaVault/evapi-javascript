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

var _WebhookTriggersResources = require('./WebhookTriggersResources');

var _WebhookTriggersResources2 = _interopRequireDefault(_WebhookTriggersResources);

var _WebhookTriggersShares = require('./WebhookTriggersShares');

var _WebhookTriggersShares2 = _interopRequireDefault(_WebhookTriggersShares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The WebhookTriggers model module.
* @module model/WebhookTriggers
* @version 2.2.5
*/
var WebhookTriggers = function () {
    /**
    * Constructs a new <code>WebhookTriggers</code>.
    * @alias module:model/WebhookTriggers
    * @class
    */

    function WebhookTriggers() {
        _classCallCheck(this, WebhookTriggers);

        this['resources'] = undefined;
        this['shares'] = undefined;
    }

    /**
    * Constructs a <code>WebhookTriggers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WebhookTriggers} obj Optional instance to populate.
    * @return {module:model/WebhookTriggers} The populated <code>WebhookTriggers</code> instance.
    */


    _createClass(WebhookTriggers, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WebhookTriggers();

                if (data.hasOwnProperty('resources')) {
                    obj['resources'] = _WebhookTriggersResources2.default.constructFromObject(data['resources']);
                }
                if (data.hasOwnProperty('shares')) {
                    obj['shares'] = _WebhookTriggersShares2.default.constructFromObject(data['shares']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/WebhookTriggersResources} resources
        */

        /**
        * @member {module:model/WebhookTriggersShares} shares
        */

    }]);

    return WebhookTriggers;
}();

exports.default = WebhookTriggers;