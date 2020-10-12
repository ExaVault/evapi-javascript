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
* The AccountAttributesAllowedIp model module.
* @module model/AccountAttributesAllowedIp
* @version 2.0
*/
var AccountAttributesAllowedIp = function () {
    /**
    * Constructs a new <code>AccountAttributesAllowedIp</code>.
    * @alias module:model/AccountAttributesAllowedIp
    * @class
    */

    function AccountAttributesAllowedIp() {
        _classCallCheck(this, AccountAttributesAllowedIp);

        this['ip_start'] = undefined;
        this['ip_end'] = undefined;
    }

    /**
    * Constructs a <code>AccountAttributesAllowedIp</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountAttributesAllowedIp} obj Optional instance to populate.
    * @return {module:model/AccountAttributesAllowedIp} The populated <code>AccountAttributesAllowedIp</code> instance.
    */


    _createClass(AccountAttributesAllowedIp, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AccountAttributesAllowedIp();

                if (data.hasOwnProperty('ip_start')) {
                    obj['ip_start'] = _ApiClient2.default.convertToType(data['ip_start'], 'String');
                }
                if (data.hasOwnProperty('ip_end')) {
                    obj['ip_end'] = _ApiClient2.default.convertToType(data['ip_end'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} ip_start
        */

        /**
        * @member {String} ip_end
        */

    }]);

    return AccountAttributesAllowedIp;
}();

exports.default = AccountAttributesAllowedIp;