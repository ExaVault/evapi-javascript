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

var _UserRelationshipsHomeResource = require('./UserRelationshipsHomeResource');

var _UserRelationshipsHomeResource2 = _interopRequireDefault(_UserRelationshipsHomeResource);

var _UserRelationshipsOwnerAccount = require('./UserRelationshipsOwnerAccount');

var _UserRelationshipsOwnerAccount2 = _interopRequireDefault(_UserRelationshipsOwnerAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The UserRelationships model module.
* @module model/UserRelationships
* @version 2.2.5
*/
var UserRelationships = function () {
    /**
    * Constructs a new <code>UserRelationships</code>.
    * Home resource and owner account relationship data for the user. 
    * @alias module:model/UserRelationships
    * @class
    * @param ownerAccount {module:model/UserRelationshipsOwnerAccount} 
    */

    function UserRelationships(ownerAccount) {
        _classCallCheck(this, UserRelationships);

        this['homeResource'] = undefined;
        this['ownerAccount'] = undefined;


        this['ownerAccount'] = ownerAccount;
    }

    /**
    * Constructs a <code>UserRelationships</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserRelationships} obj Optional instance to populate.
    * @return {module:model/UserRelationships} The populated <code>UserRelationships</code> instance.
    */


    _createClass(UserRelationships, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new UserRelationships();

                if (data.hasOwnProperty('homeResource')) {
                    obj['homeResource'] = _UserRelationshipsHomeResource2.default.constructFromObject(data['homeResource']);
                }
                if (data.hasOwnProperty('ownerAccount')) {
                    obj['ownerAccount'] = _UserRelationshipsOwnerAccount2.default.constructFromObject(data['ownerAccount']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/UserRelationshipsHomeResource} homeResource
        */

        /**
        * @member {module:model/UserRelationshipsOwnerAccount} ownerAccount
        */

    }]);

    return UserRelationships;
}();

exports.default = UserRelationships;