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

var _SharesRecipients = require('./SharesRecipients');

var _SharesRecipients2 = _interopRequireDefault(_SharesRecipients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Body16 model module.
* @module model/Body16
* @version 2.2.1
*/
var Body16 = function () {
    /**
    * Constructs a new <code>Body16</code>.
    * @alias module:model/Body16
    * @class
    * @param type {module:model/Body16.TypeEnum} The type of share to create. See above for a description of each.
    * @param name {String} A name for the share. This will be visible on the page that recipients visit. 
    * @param accessMode {Array.<String>} Array of permissions that describes what people can do when they visit the share. Valid options are `upload` `download` `modify` and `delete`  Not all permissions work with all shares - **receive** shares must always have the permission to **upload** and never provide a method for visitors to **download**.  If you are creating a share of type **send** and plan to upload files from your own computer before completing the send with [POST /shares/complete-send/{id}](#operation/completeDirectSend), use the access mode **upload**
    */

    function Body16(type, name, accessMode) {
        _classCallCheck(this, Body16);

        this['type'] = undefined;
        this['name'] = undefined;
        this['resources'] = undefined;
        this['accessMode'] = undefined;
        this['embed'] = undefined;
        this['recipients'] = undefined;
        this['expiration'] = undefined;
        this['hasNotification'] = undefined;
        this['isPublic'] = undefined;
        this['message'] = undefined;
        this['notificationEmails'] = undefined;
        this['password'] = undefined;
        this['requireEmail'] = undefined;
        this['subject'] = undefined;
        this['fileDropCreateFolders'] = undefined;
        this['sendingLocalFiles'] = undefined;


        this['type'] = type;
        this['name'] = name;
        this['accessMode'] = accessMode;
    }

    /**
    * Constructs a <code>Body16</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body16} obj Optional instance to populate.
    * @return {module:model/Body16} The populated <code>Body16</code> instance.
    */


    _createClass(Body16, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Body16();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('resources')) {
                    obj['resources'] = _ApiClient2.default.convertToType(data['resources'], ['String']);
                }
                if (data.hasOwnProperty('accessMode')) {
                    obj['accessMode'] = _ApiClient2.default.convertToType(data['accessMode'], ['String']);
                }
                if (data.hasOwnProperty('embed')) {
                    obj['embed'] = _ApiClient2.default.convertToType(data['embed'], 'Boolean');
                }
                if (data.hasOwnProperty('recipients')) {
                    obj['recipients'] = _ApiClient2.default.convertToType(data['recipients'], [_SharesRecipients2.default]);
                }
                if (data.hasOwnProperty('expiration')) {
                    obj['expiration'] = _ApiClient2.default.convertToType(data['expiration'], 'Date');
                }
                if (data.hasOwnProperty('hasNotification')) {
                    obj['hasNotification'] = _ApiClient2.default.convertToType(data['hasNotification'], 'Boolean');
                }
                if (data.hasOwnProperty('isPublic')) {
                    obj['isPublic'] = _ApiClient2.default.convertToType(data['isPublic'], 'Boolean');
                }
                if (data.hasOwnProperty('message')) {
                    obj['message'] = _ApiClient2.default.convertToType(data['message'], 'String');
                }
                if (data.hasOwnProperty('notificationEmails')) {
                    obj['notificationEmails'] = _ApiClient2.default.convertToType(data['notificationEmails'], ['String']);
                }
                if (data.hasOwnProperty('password')) {
                    obj['password'] = _ApiClient2.default.convertToType(data['password'], 'String');
                }
                if (data.hasOwnProperty('requireEmail')) {
                    obj['requireEmail'] = _ApiClient2.default.convertToType(data['requireEmail'], 'Boolean');
                }
                if (data.hasOwnProperty('subject')) {
                    obj['subject'] = _ApiClient2.default.convertToType(data['subject'], 'String');
                }
                if (data.hasOwnProperty('fileDropCreateFolders')) {
                    obj['fileDropCreateFolders'] = _ApiClient2.default.convertToType(data['fileDropCreateFolders'], 'Boolean');
                }
                if (data.hasOwnProperty('sendingLocalFiles')) {
                    obj['sendingLocalFiles'] = _ApiClient2.default.convertToType(data['sendingLocalFiles'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * The type of share to create. See above for a description of each.
        * @member {module:model/Body16.TypeEnum} type
        */

        /**
        * A name for the share. This will be visible on the page that recipients visit. 
        * @member {String} name
        */

        /**
        * Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.  **shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.  **send** shares may have multiple `resource` parameters. You can also leave this parameter null if you are planning to upload files to the send. If you are planning to upload files to the send that are not yet in your account, you will also need to call the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to finish the send operation. 
        * @member {Array.<String>} resources
        */

        /**
        * Array of permissions that describes what people can do when they visit the share. Valid options are `upload` `download` `modify` and `delete`  Not all permissions work with all shares - **receive** shares must always have the permission to **upload** and never provide a method for visitors to **download**.  If you are creating a share of type **send** and plan to upload files from your own computer before completing the send with [POST /shares/complete-send/{id}](#operation/completeDirectSend), use the access mode **upload**
        * @member {Array.<String>} accessMode
        */

        /**
        * Whether this share can be embedded within a web page.
        * @member {Boolean} embed
        */

        /**
        * People you want to invite to the share. **Note**: unless you also set the `subject` and `message` for the new share, invitation emails will not be sent to these recipients.
        * @member {Array.<module:model/SharesRecipients>} recipients
        */

        /**
        * Expiration date for the share. If someone attempts to use the share after this date, they will receive an error that the share is not available.
        * @member {Date} expiration
        */

        /**
        * Whether delivery receipts should be sent.
        * @member {Boolean} hasNotification
        */

        /**
        * Whether someone can visit the share without following a personalized recipient link.
        * @member {Boolean} isPublic
        */

        /**
        * The message to be included in email invitations for your recipients. Ignored if you have not also provided `recipients` and `subject`
        * @member {String} message
        */

        /**
        * Emails that will receive delivery receipts for this share. `hasNotification` must be **true** for delivery receipts will be sent.
        * @member {Array.<String>} notificationEmails
        */

        /**
        * Set a password for recipients to access the share. All recipients will use the same password.
        * @member {String} password
        */

        /**
        * True if recipients must provide their email to view the share.
        * @member {Boolean} requireEmail
        */

        /**
        * Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `message`
        * @member {String} subject
        */

        /**
        * Only used for **receive** shares. If true, uploads will be automatically placed into sub-folders of the folder, named after the chosen field on your form. 
        * @member {Boolean} fileDropCreateFolders
        */

        /**
        * Use this only for **send** shares. Flag to indicate that you are going to upload additional files from your computer to the share. If this is **true**, you will also need to use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) call to finish setting up your share after the files are uploaded.
        * @member {Boolean} sendingLocalFiles
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return Body16;
}();

Body16.TypeEnum = {
    /**
     * value: "shared_folder"
     * @const
     */
    "shared_folder": "shared_folder",
    /**
     * value: "receive"
     * @const
     */
    "receive": "receive",
    /**
     * value: "send"
     * @const
     */
    "send": "send" };
exports.default = Body16;