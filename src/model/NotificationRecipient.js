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
* The NotificationRecipient model module.
* @module model/NotificationRecipient
* @version 2.2.2
*/
var NotificationRecipient = function () {
    /**
    * Constructs a new <code>NotificationRecipient</code>.
    * @alias module:model/NotificationRecipient
    * @class
    */

    function NotificationRecipient() {
        _classCallCheck(this, NotificationRecipient);

        this['id'] = undefined;
        this['notificationId'] = undefined;
        this['email'] = undefined;
        this['created'] = undefined;
        this['modified'] = undefined;
    }

    /**
    * Constructs a <code>NotificationRecipient</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NotificationRecipient} obj Optional instance to populate.
    * @return {module:model/NotificationRecipient} The populated <code>NotificationRecipient</code> instance.
    */


    _createClass(NotificationRecipient, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NotificationRecipient();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('notificationId')) {
                    obj['notificationId'] = _ApiClient2.default.convertToType(data['notificationId'], 'Number');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
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
        * ID of the recipient.
        * @member {Number} id
        */

        /**
        * ID of the notification that the recipient belongs to.
        * @member {Number} notificationId
        */

        /**
        * Recipient email.
        * @member {String} email
        */

        /**
        * Timestamp of adding notification recipient.
        * @member {Date} created
        */

        /**
        * Timestamp of notification recipient modification.
        * @member {Date} modified
        */

    }]);

    return NotificationRecipient;
}();

exports.default = NotificationRecipient;