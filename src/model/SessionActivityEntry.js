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

var _SessionActivityEntryAttributes = require('./SessionActivityEntryAttributes');

var _SessionActivityEntryAttributes2 = _interopRequireDefault(_SessionActivityEntryAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SessionActivityEntry model module.
* @module model/SessionActivityEntry
* @version 2.2.4
*/
var SessionActivityEntry = function () {
    /**
    * Constructs a new <code>SessionActivityEntry</code>.
    * Single entry of session activity
    * @alias module:model/SessionActivityEntry
    * @class
    */

    function SessionActivityEntry() {
        _classCallCheck(this, SessionActivityEntry);

        this['id'] = undefined;
        this['type'] = undefined;
        this['attributes'] = undefined;
    }

    /**
    * Constructs a <code>SessionActivityEntry</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SessionActivityEntry} obj Optional instance to populate.
    * @return {module:model/SessionActivityEntry} The populated <code>SessionActivityEntry</code> instance.
    */


    _createClass(SessionActivityEntry, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SessionActivityEntry();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('attributes')) {
                    obj['attributes'] = _SessionActivityEntryAttributes2.default.constructFromObject(data['attributes']);
                }
            }
            return obj;
        }

        /**
        * @member {Number} id
        */

        /**
        * @member {module:model/SessionActivityEntry.TypeEnum} type
        */

        /**
        * @member {module:model/SessionActivityEntryAttributes} attributes
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return SessionActivityEntry;
}();

SessionActivityEntry.TypeEnum = {
    /**
     * value: "sessionActivity"
     * @const
     */
    "sessionActivity": "sessionActivity" };
exports.default = SessionActivityEntry;