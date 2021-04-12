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
* The ShareMessage model module.
* @module model/ShareMessage
* @version 2.2.4
*/
var ShareMessage = function () {
    /**
    * Constructs a new <code>ShareMessage</code>.
    * @alias module:model/ShareMessage
    * @class
    */

    function ShareMessage() {
        _classCallCheck(this, ShareMessage);

        this['id'] = undefined;
        this['userId'] = undefined;
        this['shareId'] = undefined;
        this['subject'] = undefined;
        this['body'] = undefined;
        this['created'] = undefined;
        this['modified'] = undefined;
    }

    /**
    * Constructs a <code>ShareMessage</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShareMessage} obj Optional instance to populate.
    * @return {module:model/ShareMessage} The populated <code>ShareMessage</code> instance.
    */


    _createClass(ShareMessage, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ShareMessage();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('userId')) {
                    obj['userId'] = _ApiClient2.default.convertToType(data['userId'], 'Number');
                }
                if (data.hasOwnProperty('shareId')) {
                    obj['shareId'] = _ApiClient2.default.convertToType(data['shareId'], 'Number');
                }
                if (data.hasOwnProperty('subject')) {
                    obj['subject'] = _ApiClient2.default.convertToType(data['subject'], 'String');
                }
                if (data.hasOwnProperty('body')) {
                    obj['body'] = _ApiClient2.default.convertToType(data['body'], 'String');
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
        * Message id.
        * @member {Number} id
        */

        /**
        * User ID who generated share invite
        * @member {Number} userId
        */

        /**
        * ID of associated share
        * @member {Number} shareId
        */

        /**
        * Share invitation message subject.
        * @member {String} subject
        */

        /**
        * Share invitation message text.
        * @member {String} body
        */

        /**
        * Timestamp of message creation.
        * @member {Date} created
        */

        /**
        * Timestamp of message modification.
        * @member {Date} modified
        */

    }]);

    return ShareMessage;
}();

exports.default = ShareMessage;