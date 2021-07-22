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
* The UserPermissions model module.
* @module model/UserPermissions
* @version 2.2.5
*/
var UserPermissions = function () {
    /**
    * Constructs a new <code>UserPermissions</code>.
    * @alias module:model/UserPermissions
    * @class
    * @param download {Boolean} Download permission flag
    * @param upload {Boolean} Upload permission flag
    * @param modify {Boolean} Modify permission flag
    * @param _delete {Boolean} Delete permission flag
    * @param list {Boolean} View folder contents permission flag
    * @param changePassword {Boolean} Change (own) password permission flag
    * @param share {Boolean} Sharing permission flag
    * @param notification {Boolean} Notifications permission flag
    * @param viewFormData {Boolean} Access Form Data permission flag. If true, user can view submissions that have been stored for a receive folder. This includes any data submitted in the receive folder form.
    * @param deleteFormData {Boolean} Delete form data permission flag. If true, user can remove data that was submitted for a receive folder. This applies only to data submitted in the receive folder form, not the actual files uploaded.
    */

    function UserPermissions(download, upload, modify, _delete, list, changePassword, share, notification, viewFormData, deleteFormData) {
        _classCallCheck(this, UserPermissions);

        this['download'] = undefined;
        this['upload'] = undefined;
        this['modify'] = undefined;
        this['delete'] = undefined;
        this['list'] = undefined;
        this['changePassword'] = undefined;
        this['share'] = undefined;
        this['notification'] = undefined;
        this['viewFormData'] = undefined;
        this['deleteFormData'] = undefined;


        this['download'] = download;
        this['upload'] = upload;
        this['modify'] = modify;
        this['delete'] = _delete;
        this['list'] = list;
        this['changePassword'] = changePassword;
        this['share'] = share;
        this['notification'] = notification;
        this['viewFormData'] = viewFormData;
        this['deleteFormData'] = deleteFormData;
    }

    /**
    * Constructs a <code>UserPermissions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserPermissions} obj Optional instance to populate.
    * @return {module:model/UserPermissions} The populated <code>UserPermissions</code> instance.
    */


    _createClass(UserPermissions, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new UserPermissions();

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
                if (data.hasOwnProperty('list')) {
                    obj['list'] = _ApiClient2.default.convertToType(data['list'], 'Boolean');
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
        * Download permission flag
        * @member {Boolean} download
        */

        /**
        * Upload permission flag
        * @member {Boolean} upload
        */

        /**
        * Modify permission flag
        * @member {Boolean} modify
        */

        /**
        * Delete permission flag
        * @member {Boolean} delete
        */

        /**
        * View folder contents permission flag
        * @member {Boolean} list
        */

        /**
        * Change (own) password permission flag
        * @member {Boolean} changePassword
        */

        /**
        * Sharing permission flag
        * @member {Boolean} share
        */

        /**
        * Notifications permission flag
        * @member {Boolean} notification
        */

        /**
        * Access Form Data permission flag. If true, user can view submissions that have been stored for a receive folder. This includes any data submitted in the receive folder form.
        * @member {Boolean} viewFormData
        */

        /**
        * Delete form data permission flag. If true, user can remove data that was submitted for a receive folder. This applies only to data submitted in the receive folder form, not the actual files uploaded.
        * @member {Boolean} deleteFormData
        */

    }]);

    return UserPermissions;
}();

exports.default = UserPermissions;