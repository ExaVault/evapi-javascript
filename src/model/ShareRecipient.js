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
* The ShareRecipient model module.
* @module model/ShareRecipient
* @version 2.2.5
*/
var ShareRecipient = function () {
    /**
    * Constructs a new <code>ShareRecipient</code>.
    * @alias module:model/ShareRecipient
    * @class
    */

    function ShareRecipient() {
        _classCallCheck(this, ShareRecipient);

        this['id'] = undefined;
        this['shareId'] = undefined;
        this['type'] = undefined;
        this['hash'] = undefined;
        this['email'] = undefined;
        this['sent'] = undefined;
        this['received'] = undefined;
        this['created'] = undefined;
    }

    /**
    * Constructs a <code>ShareRecipient</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShareRecipient} obj Optional instance to populate.
    * @return {module:model/ShareRecipient} The populated <code>ShareRecipient</code> instance.
    */


    _createClass(ShareRecipient, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ShareRecipient();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('shareId')) {
                    obj['shareId'] = _ApiClient2.default.convertToType(data['shareId'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('hash')) {
                    obj['hash'] = _ApiClient2.default.convertToType(data['hash'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('sent')) {
                    obj['sent'] = _ApiClient2.default.convertToType(data['sent'], 'Boolean');
                }
                if (data.hasOwnProperty('received')) {
                    obj['received'] = _ApiClient2.default.convertToType(data['received'], 'Boolean');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'Date');
                }
            }
            return obj;
        }

        /**
        * ID of the recipient.
        * @member {Number} id
        */

        /**
        * ID of the share that the recipoient belongs to.
        * @member {String} shareId
        */

        /**
        * Type of the recipient.
        * @member {module:model/ShareRecipient.TypeEnum} type
        */

        /**
        * Share hash.
        * @member {String} hash
        */

        /**
        * Recipient email address.
        * @member {String} email
        */

        /**
        * Set to true if invite email was sent; false otherwise.
        * @member {Boolean} sent
        */

        /**
        * Set to true if recipient has accessed the share. Note this is set to true when the recipient clicks the link to access the share; not when they download a file.
        * @member {Boolean} received
        */

        /**
        * Timestamp of adding recipient to the share.
        * @member {Date} created
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ShareRecipient;
}();

ShareRecipient.TypeEnum = {
    /**
     * value: "owner"
     * @const
     */
    "owner": "owner",
    /**
     * value: "direct"
     * @const
     */
    "direct": "direct" };
exports.default = ShareRecipient;