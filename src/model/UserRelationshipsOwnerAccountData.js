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
* The UserRelationshipsOwnerAccountData model module.
* @module model/UserRelationshipsOwnerAccountData
* @version 2.2.2
*/
var UserRelationshipsOwnerAccountData = function () {
    /**
    * Constructs a new <code>UserRelationshipsOwnerAccountData</code>.
    * @alias module:model/UserRelationshipsOwnerAccountData
    * @class
    */

    function UserRelationshipsOwnerAccountData() {
        _classCallCheck(this, UserRelationshipsOwnerAccountData);

        this['type'] = undefined;
        this['id'] = undefined;
    }

    /**
    * Constructs a <code>UserRelationshipsOwnerAccountData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserRelationshipsOwnerAccountData} obj Optional instance to populate.
    * @return {module:model/UserRelationshipsOwnerAccountData} The populated <code>UserRelationshipsOwnerAccountData</code> instance.
    */


    _createClass(UserRelationshipsOwnerAccountData, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new UserRelationshipsOwnerAccountData();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Type is account.
        * @member {module:model/UserRelationshipsOwnerAccountData.TypeEnum} type
        */

        /**
        * ID of the account.
        * @member {Number} id
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return UserRelationshipsOwnerAccountData;
}();

UserRelationshipsOwnerAccountData.TypeEnum = {
    /**
     * value: "account"
     * @const
     */
    "account": "account" };
exports.default = UserRelationshipsOwnerAccountData;