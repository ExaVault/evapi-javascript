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

var _NotificationRelationshipsOwnerUserData = require('./NotificationRelationshipsOwnerUserData');

var _NotificationRelationshipsOwnerUserData2 = _interopRequireDefault(_NotificationRelationshipsOwnerUserData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NotificationRelationshipsOwnerUser model module.
* @module model/NotificationRelationshipsOwnerUser
* @version 2.2.4
*/
var NotificationRelationshipsOwnerUser = function () {
    /**
    * Constructs a new <code>NotificationRelationshipsOwnerUser</code>.
    * @alias module:model/NotificationRelationshipsOwnerUser
    * @class
    */

    function NotificationRelationshipsOwnerUser() {
        _classCallCheck(this, NotificationRelationshipsOwnerUser);

        this['data'] = undefined;
    }

    /**
    * Constructs a <code>NotificationRelationshipsOwnerUser</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NotificationRelationshipsOwnerUser} obj Optional instance to populate.
    * @return {module:model/NotificationRelationshipsOwnerUser} The populated <code>NotificationRelationshipsOwnerUser</code> instance.
    */


    _createClass(NotificationRelationshipsOwnerUser, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NotificationRelationshipsOwnerUser();

                if (data.hasOwnProperty('data')) {
                    obj['data'] = _NotificationRelationshipsOwnerUserData2.default.constructFromObject(data['data']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/NotificationRelationshipsOwnerUserData} data
        */

    }]);

    return NotificationRelationshipsOwnerUser;
}();

exports.default = NotificationRelationshipsOwnerUser;