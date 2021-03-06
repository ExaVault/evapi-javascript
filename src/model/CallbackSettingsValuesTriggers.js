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
* The CallbackSettingsValuesTriggers model module.
* @module model/CallbackSettingsValuesTriggers
* @version 2.2.3
*/
var CallbackSettingsValuesTriggers = function () {
    /**
    * Constructs a new <code>CallbackSettingsValuesTriggers</code>.
    * Whether a webhook should be sent for various operations.
    * @alias module:model/CallbackSettingsValuesTriggers
    * @class
    */

    function CallbackSettingsValuesTriggers() {
        _classCallCheck(this, CallbackSettingsValuesTriggers);

        this['download'] = undefined;
        this['upload'] = undefined;
        this['delete'] = undefined;
        this['createFolder'] = undefined;
        this['rename'] = undefined;
        this['move'] = undefined;
        this['copy'] = undefined;
        this['compress'] = undefined;
        this['extract'] = undefined;
        this['shareFolder'] = undefined;
        this['sendFiles'] = undefined;
        this['receiveFiles'] = undefined;
        this['updateShare'] = undefined;
        this['updateReceive'] = undefined;
        this['deleteSend'] = undefined;
        this['deleteReceive'] = undefined;
        this['deleteShare'] = undefined;
        this['createNotification'] = undefined;
        this['updateNotification'] = undefined;
        this['deleteNotification'] = undefined;
        this['createUser'] = undefined;
        this['updateUser'] = undefined;
        this['deleteUser'] = undefined;
        this['userConnect'] = undefined;
        this['userDisconnect'] = undefined;
    }

    /**
    * Constructs a <code>CallbackSettingsValuesTriggers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CallbackSettingsValuesTriggers} obj Optional instance to populate.
    * @return {module:model/CallbackSettingsValuesTriggers} The populated <code>CallbackSettingsValuesTriggers</code> instance.
    */


    _createClass(CallbackSettingsValuesTriggers, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CallbackSettingsValuesTriggers();

                if (data.hasOwnProperty('download')) {
                    obj['download'] = _ApiClient2.default.convertToType(data['download'], 'Boolean');
                }
                if (data.hasOwnProperty('upload')) {
                    obj['upload'] = _ApiClient2.default.convertToType(data['upload'], 'Boolean');
                }
                if (data.hasOwnProperty('delete')) {
                    obj['delete'] = _ApiClient2.default.convertToType(data['delete'], 'Boolean');
                }
                if (data.hasOwnProperty('createFolder')) {
                    obj['createFolder'] = _ApiClient2.default.convertToType(data['createFolder'], 'Boolean');
                }
                if (data.hasOwnProperty('rename')) {
                    obj['rename'] = _ApiClient2.default.convertToType(data['rename'], 'Boolean');
                }
                if (data.hasOwnProperty('move')) {
                    obj['move'] = _ApiClient2.default.convertToType(data['move'], 'Boolean');
                }
                if (data.hasOwnProperty('copy')) {
                    obj['copy'] = _ApiClient2.default.convertToType(data['copy'], 'Boolean');
                }
                if (data.hasOwnProperty('compress')) {
                    obj['compress'] = _ApiClient2.default.convertToType(data['compress'], 'Boolean');
                }
                if (data.hasOwnProperty('extract')) {
                    obj['extract'] = _ApiClient2.default.convertToType(data['extract'], 'Boolean');
                }
                if (data.hasOwnProperty('shareFolder')) {
                    obj['shareFolder'] = _ApiClient2.default.convertToType(data['shareFolder'], 'Boolean');
                }
                if (data.hasOwnProperty('sendFiles')) {
                    obj['sendFiles'] = _ApiClient2.default.convertToType(data['sendFiles'], 'Boolean');
                }
                if (data.hasOwnProperty('receiveFiles')) {
                    obj['receiveFiles'] = _ApiClient2.default.convertToType(data['receiveFiles'], 'Boolean');
                }
                if (data.hasOwnProperty('updateShare')) {
                    obj['updateShare'] = _ApiClient2.default.convertToType(data['updateShare'], 'Boolean');
                }
                if (data.hasOwnProperty('updateReceive')) {
                    obj['updateReceive'] = _ApiClient2.default.convertToType(data['updateReceive'], 'Boolean');
                }
                if (data.hasOwnProperty('deleteSend')) {
                    obj['deleteSend'] = _ApiClient2.default.convertToType(data['deleteSend'], 'Boolean');
                }
                if (data.hasOwnProperty('deleteReceive')) {
                    obj['deleteReceive'] = _ApiClient2.default.convertToType(data['deleteReceive'], 'Boolean');
                }
                if (data.hasOwnProperty('deleteShare')) {
                    obj['deleteShare'] = _ApiClient2.default.convertToType(data['deleteShare'], 'Boolean');
                }
                if (data.hasOwnProperty('createNotification')) {
                    obj['createNotification'] = _ApiClient2.default.convertToType(data['createNotification'], 'Boolean');
                }
                if (data.hasOwnProperty('updateNotification')) {
                    obj['updateNotification'] = _ApiClient2.default.convertToType(data['updateNotification'], 'Boolean');
                }
                if (data.hasOwnProperty('deleteNotification')) {
                    obj['deleteNotification'] = _ApiClient2.default.convertToType(data['deleteNotification'], 'Boolean');
                }
                if (data.hasOwnProperty('createUser')) {
                    obj['createUser'] = _ApiClient2.default.convertToType(data['createUser'], 'Boolean');
                }
                if (data.hasOwnProperty('updateUser')) {
                    obj['updateUser'] = _ApiClient2.default.convertToType(data['updateUser'], 'Boolean');
                }
                if (data.hasOwnProperty('deleteUser')) {
                    obj['deleteUser'] = _ApiClient2.default.convertToType(data['deleteUser'], 'Boolean');
                }
                if (data.hasOwnProperty('userConnect')) {
                    obj['userConnect'] = _ApiClient2.default.convertToType(data['userConnect'], 'Boolean');
                }
                if (data.hasOwnProperty('userDisconnect')) {
                    obj['userDisconnect'] = _ApiClient2.default.convertToType(data['userDisconnect'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * @member {Boolean} download
        */

        /**
        * @member {Boolean} upload
        */

        /**
        * @member {Boolean} delete
        */

        /**
        * @member {Boolean} createFolder
        */

        /**
        * @member {Boolean} rename
        */

        /**
        * @member {Boolean} move
        */

        /**
        * @member {Boolean} copy
        */

        /**
        * @member {Boolean} compress
        */

        /**
        * @member {Boolean} extract
        */

        /**
        * @member {Boolean} shareFolder
        */

        /**
        * @member {Boolean} sendFiles
        */

        /**
        * @member {Boolean} receiveFiles
        */

        /**
        * @member {Boolean} updateShare
        */

        /**
        * @member {Boolean} updateReceive
        */

        /**
        * @member {Boolean} deleteSend
        */

        /**
        * @member {Boolean} deleteReceive
        */

        /**
        * @member {Boolean} deleteShare
        */

        /**
        * @member {Boolean} createNotification
        */

        /**
        * @member {Boolean} updateNotification
        */

        /**
        * @member {Boolean} deleteNotification
        */

        /**
        * @member {Boolean} createUser
        */

        /**
        * @member {Boolean} updateUser
        */

        /**
        * @member {Boolean} deleteUser
        */

        /**
        * @member {Boolean} userConnect
        */

        /**
        * @member {Boolean} userDisconnect
        */

    }]);

    return CallbackSettingsValuesTriggers;
}();

exports.default = CallbackSettingsValuesTriggers;