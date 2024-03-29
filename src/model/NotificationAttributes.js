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

var _NotificationRecipient = require('./NotificationRecipient');

var _NotificationRecipient2 = _interopRequireDefault(_NotificationRecipient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NotificationAttributes model module.
* @module model/NotificationAttributes
* @version 2.2.5
*/
var NotificationAttributes = function () {
    /**
    * Constructs a new <code>NotificationAttributes</code>.
    * Attributes for the notification including the path, recipients, and share data. 
    * @alias module:model/NotificationAttributes
    * @class
    */

    function NotificationAttributes() {
        _classCallCheck(this, NotificationAttributes);

        this['userId'] = undefined;
        this['type'] = undefined;
        this['path'] = undefined;
        this['name'] = undefined;
        this['action'] = undefined;
        this['usernames'] = undefined;
        this['recipients'] = undefined;
        this['sendEmail'] = undefined;
        this['readableDescription'] = undefined;
        this['readableDescriptionWithoutPath'] = undefined;
        this['shareId'] = undefined;
        this['message'] = undefined;
        this['created'] = undefined;
        this['modified'] = undefined;
    }

    /**
    * Constructs a <code>NotificationAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NotificationAttributes} obj Optional instance to populate.
    * @return {module:model/NotificationAttributes} The populated <code>NotificationAttributes</code> instance.
    */


    _createClass(NotificationAttributes, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NotificationAttributes();

                if (data.hasOwnProperty('userId')) {
                    obj['userId'] = _ApiClient2.default.convertToType(data['userId'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('path')) {
                    obj['path'] = _ApiClient2.default.convertToType(data['path'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('action')) {
                    obj['action'] = _ApiClient2.default.convertToType(data['action'], 'String');
                }
                if (data.hasOwnProperty('usernames')) {
                    obj['usernames'] = _ApiClient2.default.convertToType(data['usernames'], ['String']);
                }
                if (data.hasOwnProperty('recipients')) {
                    obj['recipients'] = _ApiClient2.default.convertToType(data['recipients'], [_NotificationRecipient2.default]);
                }
                if (data.hasOwnProperty('sendEmail')) {
                    obj['sendEmail'] = _ApiClient2.default.convertToType(data['sendEmail'], 'Boolean');
                }
                if (data.hasOwnProperty('readableDescription')) {
                    obj['readableDescription'] = _ApiClient2.default.convertToType(data['readableDescription'], 'String');
                }
                if (data.hasOwnProperty('readableDescriptionWithoutPath')) {
                    obj['readableDescriptionWithoutPath'] = _ApiClient2.default.convertToType(data['readableDescriptionWithoutPath'], 'String');
                }
                if (data.hasOwnProperty('shareId')) {
                    obj['shareId'] = _ApiClient2.default.convertToType(data['shareId'], 'String');
                }
                if (data.hasOwnProperty('message')) {
                    obj['message'] = _ApiClient2.default.convertToType(data['message'], 'String');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'Date');
                }
                if (data.hasOwnProperty('modified')) {
                    obj['modified'] = _ApiClient2.default.convertToType(data['modified'], 'Date');
                }
            }
            return obj;
        }

        /**
        * ID of the user that the notification belongs to.
        * @member {String} userId
        */

        /**
        * Type of the resource the notification is attached to. 
        * @member {module:model/NotificationAttributes.TypeEnum} type
        */

        /**
        * Path to the item that the notification is set on.
        * @member {String} path
        */

        /**
        * Name of the item that the notification is set on.
        * @member {String} name
        */

        /**
        * Action that triggers notification.
        * @member {module:model/NotificationAttributes.ActionEnum} action
        */

        /**
        * Detail on which users can trigger the notification.
        * @member {Array.<String>} usernames
        */

        /**
        * Notification recipients.
        * @member {Array.<module:model/NotificationRecipient>} recipients
        */

        /**
        * Whether or not an email will send when the notification is triggered.
        * @member {Boolean} sendEmail
        */

        /**
        * Human readable description of the notification.
        * @member {String} readableDescription
        */

        /**
        * Human readable description of the notification without item path.
        * @member {String} readableDescriptionWithoutPath
        */

        /**
        * ID of the share that the notification belogns to.
        * @member {String} shareId
        */

        /**
        * Custom message that will be sent to the notification recipients.
        * @member {String} message
        */

        /**
        * Timestamp of notifiction creation.
        * @member {Date} created
        */

        /**
        * Timestamp of notification modification.
        * @member {Date} modified
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

        /**
        * Allowed values for the <code>action</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return NotificationAttributes;
}();

NotificationAttributes.TypeEnum = {
    /**
     * value: "file"
     * @const
     */
    "file": "file",
    /**
     * value: "folder"
     * @const
     */
    "folder": "folder",
    /**
     * value: "shared_folder"
     * @const
     */
    "shared_folder": "shared_folder",
    /**
     * value: "send_receipt"
     * @const
     */
    "send_receipt": "send_receipt",
    /**
     * value: "share_receipt"
     * @const
     */
    "share_receipt": "share_receipt",
    /**
     * value: "file_drop"
     * @const
     */
    "file_drop": "file_drop" };
NotificationAttributes.ActionEnum = {
    /**
     * value: "upload"
     * @const
     */
    "upload": "upload",
    /**
     * value: "download"
     * @const
     */
    "download": "download",
    /**
     * value: "delete"
     * @const
     */
    "delete": "delete",
    /**
     * value: "all"
     * @const
     */
    "all": "all" };
exports.default = NotificationAttributes;