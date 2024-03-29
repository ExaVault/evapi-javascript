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
* The UpdateNotificationByIdRequestBody model module.
* @module model/UpdateNotificationByIdRequestBody
* @version 2.2.5
*/
var UpdateNotificationByIdRequestBody = function () {
    /**
    * Constructs a new <code>UpdateNotificationByIdRequestBody</code>.
    * @alias module:model/UpdateNotificationByIdRequestBody
    * @class
    */

    function UpdateNotificationByIdRequestBody() {
        _classCallCheck(this, UpdateNotificationByIdRequestBody);

        this['action'] = undefined;
        this['usernames'] = undefined;
        this['sendEmail'] = undefined;
        this['recipients'] = undefined;
        this['message'] = undefined;
    }

    /**
    * Constructs a <code>UpdateNotificationByIdRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UpdateNotificationByIdRequestBody} obj Optional instance to populate.
    * @return {module:model/UpdateNotificationByIdRequestBody} The populated <code>UpdateNotificationByIdRequestBody</code> instance.
    */


    _createClass(UpdateNotificationByIdRequestBody, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new UpdateNotificationByIdRequestBody();

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
        * Type of action be notified about. Notifications will only be sent for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)
        * @member {module:model/UpdateNotificationByIdRequestBody.ActionEnum} action
        */

        /**
        * Determines which users' actions should trigger the notification.   Rather than listing  individual users, you can also use 3 special options:  - **notice\\_user\\_all** for activity by any user or share recipient - **notice\\_user\\_all\\_users** for activity only by user accounts - **notice\\_user\\_all\\_recipients** for activity only by share recipients
        * @member {Array.<String>} usernames
        */

        /**
        * Whether an email should be sent to the recipients when matching activity happens.
        * @member {Boolean} sendEmail
        */

        /**
        * Email addresses to send notification emails to. If empty, sends to the current user's email address.
        * @member {Array.<String>} recipients
        */

        /**
        * Custom message to insert into the notification emails, along with the matching activity.
        * @member {String} message
        */


        /**
        * Allowed values for the <code>action</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return UpdateNotificationByIdRequestBody;
}();

UpdateNotificationByIdRequestBody.ActionEnum = {
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
exports.default = UpdateNotificationByIdRequestBody;