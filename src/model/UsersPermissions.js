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
* The UsersPermissions model module.
* @module model/UsersPermissions
* @version 2.2.5
*/
var UsersPermissions = function () {
    /**
    * Constructs a new <code>UsersPermissions</code>.
    * An object containing name/value pairs for each permission. Any permission that is not passed will be set to &#x60;false&#x60; by default. Note that users will be unable to see any files in the account unless you include &#x60;list&#x60; permission. When creating a user with the &#x60;role&#x60; **admin**, you should set all of the permissions to &#x60;true&#x60;
    * @alias module:model/UsersPermissions
    * @class
    */

    function UsersPermissions() {
        _classCallCheck(this, UsersPermissions);

        this['list'] = undefined;
        this['download'] = undefined;
        this['upload'] = undefined;
        this['modify'] = undefined;
        this['delete'] = undefined;
        this['changePassword'] = undefined;
        this['share'] = undefined;
        this['notification'] = undefined;
        this['viewFormData'] = undefined;
        this['deleteFormData'] = undefined;
    }

    /**
    * Constructs a <code>UsersPermissions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UsersPermissions} obj Optional instance to populate.
    * @return {module:model/UsersPermissions} The populated <code>UsersPermissions</code> instance.
    */


    _createClass(UsersPermissions, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new UsersPermissions();

                if (data.hasOwnProperty('list')) {
                    obj['list'] = _ApiClient2.default.convertToType(data['list'], 'Boolean');
                }
                if (data.hasOwnProperty('download')) {
                    obj['download'] = _ApiClient2.default.convertToType(data['download'], 'Boolean');
                }
                if (data.hasOwnProperty('upload')) {
                    obj['upload'] = _ApiClient2.default.convertToType(data['upload'], 'Boolean');
                }
                if (data.hasOwnProperty('modify')) {
                    obj['modify'] = _ApiClient2.default.convertToType(data['modify'], 'Boolean');
                }
                if (data.hasOwnProperty('delete')) {
                    obj['delete'] = _ApiClient2.default.convertToType(data['delete'], 'Boolean');
                }
                if (data.hasOwnProperty('changePassword')) {
                    obj['changePassword'] = _ApiClient2.default.convertToType(data['changePassword'], 'Boolean');
                }
                if (data.hasOwnProperty('share')) {
                    obj['share'] = _ApiClient2.default.convertToType(data['share'], 'Boolean');
                }
                if (data.hasOwnProperty('notification')) {
                    obj['notification'] = _ApiClient2.default.convertToType(data['notification'], 'Boolean');
                }
                if (data.hasOwnProperty('viewFormData')) {
                    obj['viewFormData'] = _ApiClient2.default.convertToType(data['viewFormData'], 'Boolean');
                }
                if (data.hasOwnProperty('deleteFormData')) {
                    obj['deleteFormData'] = _ApiClient2.default.convertToType(data['deleteFormData'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * @member {Boolean} list
        */

        /**
        * @member {Boolean} download
        */

        /**
        * @member {Boolean} upload
        */

        /**
        * @member {Boolean} modify
        */

        /**
        * @member {Boolean} delete
        */

        /**
        * @member {Boolean} changePassword
        */

        /**
        * @member {Boolean} share
        */

        /**
        * @member {Boolean} notification
        */

        /**
        * @member {Boolean} viewFormData
        */

        /**
        * @member {Boolean} deleteFormData
        */

    }]);

    return UsersPermissions;
}();

exports.default = UsersPermissions;