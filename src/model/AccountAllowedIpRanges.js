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
* The AccountAllowedIpRanges model module.
* @module model/AccountAllowedIpRanges
* @version 2.0
*/
var AccountAllowedIpRanges = function () {
    /**
    * Constructs a new <code>AccountAllowedIpRanges</code>.
    * @alias module:model/AccountAllowedIpRanges
    * @class
    */

    function AccountAllowedIpRanges() {
        _classCallCheck(this, AccountAllowedIpRanges);

        this['ip_start'] = undefined;
        this['ip_end'] = undefined;
    }

    /**
    * Constructs a <code>AccountAllowedIpRanges</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountAllowedIpRanges} obj Optional instance to populate.
    * @return {module:model/AccountAllowedIpRanges} The populated <code>AccountAllowedIpRanges</code> instance.
    */


    _createClass(AccountAllowedIpRanges, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AccountAllowedIpRanges();

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

    return AccountAllowedIpRanges;
}();

exports.default = AccountAllowedIpRanges;