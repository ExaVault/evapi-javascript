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

var _EmailList = require('./EmailList');

var _EmailList2 = _interopRequireDefault(_EmailList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The EmailListResponse model module.
* @module model/EmailListResponse
* @version 2.0
*/
var EmailListResponse = function () {
    /**
    * Constructs a new <code>EmailListResponse</code>.
    * Response object for a single email list.
    * @alias module:model/EmailListResponse
    * @class
    */

    function EmailListResponse() {
        _classCallCheck(this, EmailListResponse);

        this['responseStatus'] = undefined;
        this['data'] = undefined;
        this['included'] = undefined;
    }

    /**
    * Constructs a <code>EmailListResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EmailListResponse} obj Optional instance to populate.
    * @return {module:model/EmailListResponse} The populated <code>EmailListResponse</code> instance.
    */


    _createClass(EmailListResponse, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new EmailListResponse();

                if (data.hasOwnProperty('responseStatus')) {
                    obj['responseStatus'] = _ApiClient2.default.convertToType(data['responseStatus'], 'Number');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _EmailList2.default.constructFromObject(data['data']);
                }
                if (data.hasOwnProperty('included')) {
                    obj['included'] = _ApiClient2.default.convertToType(data['included'], [Object]);
                }
            }
            return obj;
        }

        /**
        * Http Status code
        * @member {Number} responseStatus
        */

        /**
        * @member {module:model/EmailList} data
        */

        /**
        * @member {Array.<Object>} included
        */

    }]);

    return EmailListResponse;
}();

exports.default = EmailListResponse;