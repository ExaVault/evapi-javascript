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

var _AccessMode = require('./AccessMode');

var _AccessMode2 = _interopRequireDefault(_AccessMode);

var _SharesRecipients = require('./SharesRecipients');

var _SharesRecipients2 = _interopRequireDefault(_SharesRecipients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The UpdateShareRequestBody model module.
* @module model/UpdateShareRequestBody
* @version 2.2.5
*/
var UpdateShareRequestBody = function () {
    /**
    * Constructs a new <code>UpdateShareRequestBody</code>.
    * @alias module:model/UpdateShareRequestBody
    * @class
    */

    function UpdateShareRequestBody() {
        _classCallCheck(this, UpdateShareRequestBody);

        this['name'] = undefined;
        this['resources'] = undefined;
        this['accessMode'] = undefined;
        this['embed'] = undefined;
        this['recipients'] = undefined;
        this['expiration'] = undefined;
        this['hasNotification'] = undefined;
        this['isPublic'] = undefined;
        this['messageBody'] = undefined;
        this['notificationEmails'] = undefined;
        this['password'] = undefined;
        this['requireEmail'] = undefined;
        this['messageSubject'] = undefined;
        this['fileDropCreateFolders'] = undefined;
        this['status'] = undefined;
    }

    /**
    * Constructs a <code>UpdateShareRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UpdateShareRequestBody} obj Optional instance to populate.
    * @return {module:model/UpdateShareRequestBody} The populated <code>UpdateShareRequestBody</code> instance.
    */


    _createClass(UpdateShareRequestBody, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new UpdateShareRequestBody();

                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('resources')) {
                    obj['resources'] = _ApiClient2.default.convertToType(data['resources'], ['String']);
                }
                if (data.hasOwnProperty('accessMode')) {
                    obj['accessMode'] = _AccessMode2.default.constructFromObject(data['accessMode']);
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
                if (data.hasOwnProperty('messageBody')) {
                    obj['messageBody'] = _ApiClient2.default.convertToType(data['messageBody'], 'String');
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
                if (data.hasOwnProperty('messageSubject')) {
                    obj['messageSubject'] = _ApiClient2.default.convertToType(data['messageSubject'], 'String');
                }
                if (data.hasOwnProperty('fileDropCreateFolders')) {
                    obj['fileDropCreateFolders'] = _ApiClient2.default.convertToType(data['fileDropCreateFolders'], 'Boolean');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Name of the share.
        * @member {String} name
        */

        /**
        * Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.  **shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.  **send** shares may have multiple `resource` parameters.   **NOTE**: Sending this parameter will **REPLACE** the existing resources with the resources included in this request.
        * @member {Array.<String>} resources
        */

        /**
        * @member {module:model/AccessMode} accessMode
        */

        /**
        * Whether the share can be embedded in another web page.
        * @member {Boolean} embed
        */

        /**
        * People you want to invite to the share.   **Note**: unless you also set the `subject` and `message` for the new share, invitation emails will not be sent to these recipients.  **Note**: Recipients in this list will **REPLACE** the recipients already assigned to this share. 
        * @member {Array.<module:model/SharesRecipients>} recipients
        */

        /**
        * New expiration date and time for the share
        * @member {Date} expiration
        */

        /**
        * Whether delivery receipts should be sent for this share.
        * @member {Boolean} hasNotification
        */

        /**
        * Whether people can visit the share without following a link from an invitation email
        * @member {Boolean} isPublic
        */

        /**
        * Message content to use for emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `subject`
        * @member {String} messageBody
        */

        /**
        * List of email addresses to send delivery receipts to. Ignored if `hasNotification` is false. 
        * @member {Array.<String>} notificationEmails
        */

        /**
        * New password for the share. To leave the password unchanged, do not send this parameter.
        * @member {String} password
        */

        /**
        * Whether visitors to the share will be required to enter their email in order to access the share.
        * @member {Boolean} requireEmail
        */

        /**
        * Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `message`
        * @member {String} messageSubject
        */

        /**
        * Whether uploads to a receive folder should be automatically placed into subfolders. See our [receive folder documentation](/docs/account/05-file-sharing/05-form-builder#advanced-form-settings)
        * @member {Boolean} fileDropCreateFolders
        */

        /**
        * New status for the share. You can set an active share to inactive by setting the status to **0**
        * @member {Number} status
        */

    }]);

    return UpdateShareRequestBody;
}();

exports.default = UpdateShareRequestBody;