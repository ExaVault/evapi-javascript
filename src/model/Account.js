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

var _AccountAttributes = require('./AccountAttributes');

var _AccountAttributes2 = _interopRequireDefault(_AccountAttributes);

var _MasterUser = require('./MasterUser');

var _MasterUser2 = _interopRequireDefault(_MasterUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Account model module.
* @module model/Account
* @version 2.2.5
*/
var Account = function () {
    /**
    * Constructs a new <code>Account</code>.
    * Object contains all account properties.
    * @alias module:model/Account
    * @class
    */

    function Account() {
        _classCallCheck(this, Account);

        this['id'] = undefined;
        this['type'] = undefined;
        this['attributes'] = undefined;
        this['relationships'] = undefined;
    }

    /**
    * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Account} obj Optional instance to populate.
    * @return {module:model/Account} The populated <code>Account</code> instance.
    */


    _createClass(Account, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Account();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('attributes')) {
                    obj['attributes'] = _AccountAttributes2.default.constructFromObject(data['attributes']);
                }
                if (data.hasOwnProperty('relationships')) {
                    obj['relationships'] = _MasterUser2.default.constructFromObject(data['relationships']);
                }
            }
            return obj;
        }

        /**
        * Account ID
        * @member {Number} id
        */

        /**
        * Type of item. \"account\"
        * @member {module:model/Account.TypeEnum} type
        */

        /**
        * @member {module:model/AccountAttributes} attributes
        */

        /**
        * @member {module:model/MasterUser} relationships
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return Account;
}();

Account.TypeEnum = {
    /**
     * value: "account"
     * @const
     */
    "account": "account" };
exports.default = Account;