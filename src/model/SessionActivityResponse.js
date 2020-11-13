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

var _SessionActivityEntry = require('./SessionActivityEntry');

var _SessionActivityEntry2 = _interopRequireDefault(_SessionActivityEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SessionActivityResponse model module.
* @module model/SessionActivityResponse
* @version 2.2.2
*/
var SessionActivityResponse = function () {
    /**
    * Constructs a new <code>SessionActivityResponse</code>.
    * Session activity list response
    * @alias module:model/SessionActivityResponse
    * @class
    */

    function SessionActivityResponse() {
        _classCallCheck(this, SessionActivityResponse);

        this['responseStatus'] = undefined;
        this['totalResults'] = undefined;
        this['returnedResults'] = undefined;
        this['data'] = undefined;
    }

    /**
    * Constructs a <code>SessionActivityResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SessionActivityResponse} obj Optional instance to populate.
    * @return {module:model/SessionActivityResponse} The populated <code>SessionActivityResponse</code> instance.
    */


    _createClass(SessionActivityResponse, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SessionActivityResponse();

                if (data.hasOwnProperty('responseStatus')) {
                    obj['responseStatus'] = _ApiClient2.default.convertToType(data['responseStatus'], 'Number');
                }
                if (data.hasOwnProperty('totalResults')) {
                    obj['totalResults'] = _ApiClient2.default.convertToType(data['totalResults'], 'Number');
                }
                if (data.hasOwnProperty('returnedResults')) {
                    obj['returnedResults'] = _ApiClient2.default.convertToType(data['returnedResults'], 'Number');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [_SessionActivityEntry2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {Number} responseStatus
        */

        /**
        * @member {Number} totalResults
        */

        /**
        * @member {Number} returnedResults
        */

        /**
        * @member {Array.<module:model/SessionActivityEntry>} data
        */

    }]);

    return SessionActivityResponse;
}();

exports.default = SessionActivityResponse;