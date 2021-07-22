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
* The AddNotificationRequestBody model module.
* @module model/AddNotificationRequestBody
* @version 2.2.5
*/
var AddNotificationRequestBody = function () {
    /**
    * Constructs a new <code>AddNotificationRequestBody</code>.
    * @alias module:model/AddNotificationRequestBody
    * @class
    * @param type {module:model/AddNotificationRequestBody.TypeEnum} What kind of notification you're making. Valid choices are:  - **file** to monitor activity for a file resource - **folder** to monitor activity for a folder resource
    * @param resource {String} Resources for this notification. See details on [how to specify resources](#section/Identifying-Resources) above.
    * @param action {module:model/AddNotificationRequestBody.ActionEnum} Type of action be notified about. Notifications will only be fired for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)
    * @param usernames {Array.<String>} Determines which users' actions should trigger the notification.   Rather than listing  individual users, you can also use 3 special options:  - **notice\\_user\\_all** for activity by any user or share recipient - **notice\\_user\\_all\\_users** for activity only by user accounts - **notice\\_user\\_all\\_recipient** for activity only by share recipients
    * @param sendEmail {Boolean} Set to true if the user should be notified by email when the notification is triggered.
    */

    function AddNotificationRequestBody(type, resource, action, usernames, sendEmail) {
        _classCallCheck(this, AddNotificationRequestBody);

        this['type'] = undefined;
        this['resource'] = undefined;
        this['action'] = undefined;
        this['usernames'] = undefined;
        this['sendEmail'] = undefined;
        this['recipients'] = undefined;
        this['message'] = undefined;


        this['type'] = type;
        this['resource'] = resource;
        this['action'] = action;
        this['usernames'] = usernames;
        this['sendEmail'] = sendEmail;
    }

    /**
    * Constructs a <code>AddNotificationRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AddNotificationRequestBody} obj Optional instance to populate.
    * @return {module:model/AddNotificationRequestBody} The populated <code>AddNotificationRequestBody</code> instance.
    */


    _createClass(AddNotificationRequestBody, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AddNotificationRequestBody();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('resource')) {
                    obj['resource'] = _ApiClient2.default.convertToType(data['resource'], 'String');
                }
                if (data.hasOwnProperty('action')) {
                    obj['action'] = _ApiClient2.default.convertToType(data['action'], 'String');
                }
                if (data.hasOwnProperty('usernames')) {
                    obj['usernames'] = _ApiClient2.default.convertToType(data['usernames'], ['String']);
                }
                if (data.hasOwnProperty('sendEmail')) {
                    obj['sendEmail'] = _ApiClient2.default.convertToType(data['sendEmail'], 'Boolean');
                }
                if (data.hasOwnProperty('recipients')) {
                    obj['recipients'] = _ApiClient2.default.convertToType(data['recipients'], ['String']);
                }
                if (data.hasOwnProperty('message')) {
                    obj['message'] = _ApiClient2.default.convertToType(data['message'], 'String');
                }
            }
            return obj;
        }

        /**
        * What kind of notification you're making. Valid choices are:  - **file** to monitor activity for a file resource - **folder** to monitor activity for a folder resource
        * @member {module:model/AddNotificationRequestBody.TypeEnum} type
        */

        /**
        * Resources for this notification. See details on [how to specify resources](#section/Identifying-Resources) above.
        * @member {String} resource
        */

        /**
        * Type of action be notified about. Notifications will only be fired for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)
        * @member {module:model/AddNotificationRequestBody.ActionEnum} action
        */

        /**
        * Determines which users' actions should trigger the notification.   Rather than listing  individual users, you can also use 3 special options:  - **notice\\_user\\_all** for activity by any user or share recipient - **notice\\_user\\_all\\_users** for activity only by user accounts - **notice\\_user\\_all\\_recipient** for activity only by share recipients
        * @member {Array.<String>} usernames
        */

        /**
        * Set to true if the user should be notified by email when the notification is triggered.
        * @member {Boolean} sendEmail
        */

        /**
        * Email addresses to send notification emails to. If not specified, sends to the current user's email address.
        * @member {Array.<String>} recipients
        */

        /**
        * Custom message to include in notification emails.
        * @member {String} message
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

    return AddNotificationRequestBody;
}();

AddNotificationRequestBody.TypeEnum = {
    /**
     * value: "file"
     * @const
     */
    "file": "file",
    /**
     * value: "folder"
     * @const
     */
    "folder": "folder" };
AddNotificationRequestBody.ActionEnum = {
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
exports.default = AddNotificationRequestBody;