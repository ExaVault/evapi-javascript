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

var _AccountAttributesAllowedIp = require('./AccountAttributesAllowedIp');

var _AccountAttributesAllowedIp2 = _interopRequireDefault(_AccountAttributesAllowedIp);

var _BrandingSettings = require('./BrandingSettings');

var _BrandingSettings2 = _interopRequireDefault(_BrandingSettings);

var _CallbackSettings = require('./CallbackSettings');

var _CallbackSettings2 = _interopRequireDefault(_CallbackSettings);

var _Quota = require('./Quota');

var _Quota2 = _interopRequireDefault(_Quota);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The AccountAttributes model module.
* @module model/AccountAttributes
* @version 2.0
*/
var AccountAttributes = function () {
    /**
    * Constructs a new <code>AccountAttributes</code>.
    * @alias module:model/AccountAttributes
    * @class
    */

    function AccountAttributes() {
        _classCallCheck(this, AccountAttributes);

        this['accountName'] = undefined;
        this['username'] = undefined;
        this['maxUsers'] = undefined;
        this['userCount'] = undefined;
        this['status'] = undefined;
        this['branding'] = undefined;
        this['customDomain'] = undefined;
        this['quota'] = undefined;
        this['secureOnly'] = undefined;
        this['complexPasswords'] = undefined;
        this['showReferralLinks'] = undefined;
        this['externalDomains'] = undefined;
        this['allowedIp'] = undefined;
        this['callbackSettings'] = undefined;
        this['brandingSettings'] = undefined;
        this['clientId'] = undefined;
        this['welcomeEmailContent'] = undefined;
        this['welcomeEmailSubject'] = undefined;
        this['customSignature'] = undefined;
        this['accountOnboarding'] = undefined;
        this['created'] = undefined;
        this['modified'] = undefined;
    }

    /**
    * Constructs a <code>AccountAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountAttributes} obj Optional instance to populate.
    * @return {module:model/AccountAttributes} The populated <code>AccountAttributes</code> instance.
    */


    _createClass(AccountAttributes, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AccountAttributes();

                if (data.hasOwnProperty('accountName')) {
                    obj['accountName'] = _ApiClient2.default.convertToType(data['accountName'], 'String');
                }
                if (data.hasOwnProperty('username')) {
                    obj['username'] = _ApiClient2.default.convertToType(data['username'], 'String');
                }
                if (data.hasOwnProperty('maxUsers')) {
                    obj['maxUsers'] = _ApiClient2.default.convertToType(data['maxUsers'], 'Number');
                }
                if (data.hasOwnProperty('userCount')) {
                    obj['userCount'] = _ApiClient2.default.convertToType(data['userCount'], 'Number');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'Number');
                }
                if (data.hasOwnProperty('branding')) {
                    obj['branding'] = _ApiClient2.default.convertToType(data['branding'], 'Boolean');
                }
                if (data.hasOwnProperty('customDomain')) {
                    obj['customDomain'] = _ApiClient2.default.convertToType(data['customDomain'], 'Boolean');
                }
                if (data.hasOwnProperty('quota')) {
                    obj['quota'] = _Quota2.default.constructFromObject(data['quota']);
                }
                if (data.hasOwnProperty('secureOnly')) {
                    obj['secureOnly'] = _ApiClient2.default.convertToType(data['secureOnly'], 'Boolean');
                }
                if (data.hasOwnProperty('complexPasswords')) {
                    obj['complexPasswords'] = _ApiClient2.default.convertToType(data['complexPasswords'], 'Boolean');
                }
                if (data.hasOwnProperty('showReferralLinks')) {
                    obj['showReferralLinks'] = _ApiClient2.default.convertToType(data['showReferralLinks'], 'Boolean');
                }
                if (data.hasOwnProperty('externalDomains')) {
                    obj['externalDomains'] = _ApiClient2.default.convertToType(data['externalDomains'], ['String']);
                }
                if (data.hasOwnProperty('allowedIp')) {
                    obj['allowedIp'] = _ApiClient2.default.convertToType(data['allowedIp'], [_AccountAttributesAllowedIp2.default]);
                }
                if (data.hasOwnProperty('callbackSettings')) {
                    obj['callbackSettings'] = _CallbackSettings2.default.constructFromObject(data['callbackSettings']);
                }
                if (data.hasOwnProperty('brandingSettings')) {
                    obj['brandingSettings'] = _BrandingSettings2.default.constructFromObject(data['brandingSettings']);
                }
                if (data.hasOwnProperty('clientId')) {
                    obj['clientId'] = _ApiClient2.default.convertToType(data['clientId'], 'Number');
                }
                if (data.hasOwnProperty('welcomeEmailContent')) {
                    obj['welcomeEmailContent'] = _ApiClient2.default.convertToType(data['welcomeEmailContent'], 'String');
                }
                if (data.hasOwnProperty('welcomeEmailSubject')) {
                    obj['welcomeEmailSubject'] = _ApiClient2.default.convertToType(data['welcomeEmailSubject'], 'String');
                }
                if (data.hasOwnProperty('customSignature')) {
                    obj['customSignature'] = _ApiClient2.default.convertToType(data['customSignature'], 'String');
                }
                if (data.hasOwnProperty('accountOnboarding')) {
                    obj['accountOnboarding'] = _ApiClient2.default.convertToType(data['accountOnboarding'], 'Boolean');
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
        * Name of the account
        * @member {String} accountName
        */

        /**
        * Name of account's master user
        * @member {String} username
        */

        /**
        * Maximum number of users the account can have. This can be increased by contacting ExaVault Support.
        * @member {Number} maxUsers
        */

        /**
        * Current number of users on the account.
        * @member {Number} userCount
        */

        /**
        * Account status flag. A one (1) means the account is active; zero (0) means it is suspended.
        * @member {module:model/AccountAttributes.StatusEnum} status
        */

        /**
        * Branding flag. Set to `true` if the account has branding functionality enabled.
        * @member {Boolean} branding
        */

        /**
        * Custom domain flag. Set to `true` if account type allows custom domain functionality.
        * @member {Boolean} customDomain
        */

        /**
        * @member {module:model/Quota} quota
        */

        /**
        * Flag to indicate whether the account disables connections via insecure protocols (e.g. FTP). Set to `true` to disable all traffic over port 21.
        * @member {Boolean} secureOnly
        */

        /**
        * Flag to indicate whether the account requires complex passwords. Set to `true` to require complex passwords on all users and shares.
        * @member {Boolean} complexPasswords
        */

        /**
        * Flag to indicate showing of referrals links in the account. Set to `true` to include marketing messages in share invitations.
        * @member {Boolean} showReferralLinks
        */

        /**
        * Custom domain used to brand this account.
        * @member {Array.<String>} externalDomains
        */

        /**
        * Range of IP addresses allowed to access this account.
        * @member {Array.<module:model/AccountAttributesAllowedIp>} allowedIp
        */

        /**
        * @member {module:model/CallbackSettings} callbackSettings
        */

        /**
        * @member {module:model/BrandingSettings} brandingSettings
        */

        /**
        * (ExaVault Use Only) Internal ID of the account in CMS.
        * @member {Number} clientId
        */

        /**
        * Content of welcome email each new user will receive.
        * @member {String} welcomeEmailContent
        */

        /**
        * Subject of welcome email each new user will receive.
        * @member {String} welcomeEmailSubject
        */

        /**
        * Custom signature for all account emails users or recipients will receive.
        * @member {String} customSignature
        */

        /**
        * Whether the web application onboarding help is enabled for new users in the account.
        * @member {Boolean} accountOnboarding
        */

        /**
        * Timestamp of account creation.
        * @member {Date} created
        */

        /**
        * Timestamp of account modification.
        * @member {Date} modified
        */


        /**
        * Allowed values for the <code>status</code> property.
        * @enum {Number}
        * @readonly
        */

    }]);

    return AccountAttributes;
}();

AccountAttributes.StatusEnum = {
    /**
     * value: 1
     * @const
     */
    "1": 1,
    /**
     * value: 0
     * @const
     */
    "0": 0 };
exports.default = AccountAttributes;