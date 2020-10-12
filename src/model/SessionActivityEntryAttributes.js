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
* The SessionActivityEntryAttributes model module.
* @module model/SessionActivityEntryAttributes
* @version 2.0
*/
var SessionActivityEntryAttributes = function () {
    /**
    * Constructs a new <code>SessionActivityEntryAttributes</code>.
    * @alias module:model/SessionActivityEntryAttributes
    * @class
    */

    function SessionActivityEntryAttributes() {
        _classCallCheck(this, SessionActivityEntryAttributes);

        this['bytesTransferred'] = undefined;
        this['created'] = undefined;
        this['duration'] = undefined;
        this['fileName'] = undefined;
        this['fileSource'] = undefined;
        this['ipAddress'] = undefined;
        this['operation'] = undefined;
        this['protocol'] = undefined;
        this['sessionId'] = undefined;
        this['status'] = undefined;
        this['username'] = undefined;
    }

    /**
    * Constructs a <code>SessionActivityEntryAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SessionActivityEntryAttributes} obj Optional instance to populate.
    * @return {module:model/SessionActivityEntryAttributes} The populated <code>SessionActivityEntryAttributes</code> instance.
    */


    _createClass(SessionActivityEntryAttributes, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SessionActivityEntryAttributes();

                if (data.hasOwnProperty('bytesTransferred')) {
                    obj['bytesTransferred'] = _ApiClient2.default.convertToType(data['bytesTransferred'], 'Number');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'String');
                }
                if (data.hasOwnProperty('duration')) {
                    obj['duration'] = _ApiClient2.default.convertToType(data['duration'], 'Number');
                }
                if (data.hasOwnProperty('fileName')) {
                    obj['fileName'] = _ApiClient2.default.convertToType(data['fileName'], 'String');
                }
                if (data.hasOwnProperty('fileSource')) {
                    obj['fileSource'] = _ApiClient2.default.convertToType(data['fileSource'], 'String');
                }
                if (data.hasOwnProperty('ipAddress')) {
                    obj['ipAddress'] = _ApiClient2.default.convertToType(data['ipAddress'], 'String');
                }
                if (data.hasOwnProperty('operation')) {
                    obj['operation'] = _ApiClient2.default.convertToType(data['operation'], 'String');
                }
                if (data.hasOwnProperty('protocol')) {
                    obj['protocol'] = _ApiClient2.default.convertToType(data['protocol'], 'String');
                }
                if (data.hasOwnProperty('sessionId')) {
                    obj['sessionId'] = _ApiClient2.default.convertToType(data['sessionId'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('username')) {
                    obj['username'] = _ApiClient2.default.convertToType(data['username'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {Number} bytesTransferred
        */

        /**
        * @member {String} created
        */

        /**
        * @member {Number} duration
        */

        /**
        * @member {String} fileName
        */

        /**
        * @member {String} fileSource
        */

        /**
        * @member {String} ipAddress
        */

        /**
        * @member {String} operation
        */

        /**
        * @member {String} protocol
        */

        /**
        * @member {String} sessionId
        */

        /**
        * @member {String} status
        */

        /**
        * @member {String} username
        */

    }]);

    return SessionActivityEntryAttributes;
}();

exports.default = SessionActivityEntryAttributes;