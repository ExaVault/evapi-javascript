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

var _CallbackSettings1Triggers = require('./CallbackSettings1Triggers');

var _CallbackSettings1Triggers2 = _interopRequireDefault(_CallbackSettings1Triggers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The CallbackSettings1 model module.
* @module model/CallbackSettings1
* @version 2.2.1
*/
var CallbackSettings1 = function () {
    /**
    * Constructs a new <code>CallbackSettings1</code>.
    * @alias module:model/CallbackSettings1
    * @class
    */

    function CallbackSettings1() {
        _classCallCheck(this, CallbackSettings1);

        this['endpointUrl'] = undefined;
        this['triggers'] = undefined;
    }

    /**
    * Constructs a <code>CallbackSettings1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CallbackSettings1} obj Optional instance to populate.
    * @return {module:model/CallbackSettings1} The populated <code>CallbackSettings1</code> instance.
    */


    _createClass(CallbackSettings1, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CallbackSettings1();

                if (data.hasOwnProperty('endpointUrl')) {
                    obj['endpointUrl'] = _ApiClient2.default.convertToType(data['endpointUrl'], 'String');
                }
                if (data.hasOwnProperty('triggers')) {
                    obj['triggers'] = _CallbackSettings1Triggers2.default.constructFromObject(data['triggers']);
                }
            }
            return obj;
        }

        /**
        * @member {String} endpointUrl
        */

        /**
        * @member {module:model/CallbackSettings1Triggers} triggers
        */

    }]);

    return CallbackSettings1;
}();

exports.default = CallbackSettings1;