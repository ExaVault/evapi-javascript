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

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NotificationResponse model module.
* @module model/NotificationResponse
* @version 2.2.4
*/
var NotificationResponse = function () {
    /**
    * Constructs a new <code>NotificationResponse</code>.
    * Response object for notifications.
    * @alias module:model/NotificationResponse
    * @class
    */

    function NotificationResponse() {
        _classCallCheck(this, NotificationResponse);

        this['responseStatus'] = undefined;
        this['data'] = undefined;
        this['included'] = undefined;
    }

    /**
    * Constructs a <code>NotificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NotificationResponse} obj Optional instance to populate.
    * @return {module:model/NotificationResponse} The populated <code>NotificationResponse</code> instance.
    */


    _createClass(NotificationResponse, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NotificationResponse();

                if (data.hasOwnProperty('responseStatus')) {
                    obj['responseStatus'] = _ApiClient2.default.convertToType(data['responseStatus'], 'Number');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _Notification2.default.constructFromObject(data['data']);
                }
                if (data.hasOwnProperty('included')) {
                    obj['included'] = _ApiClient2.default.convertToType(data['included'], [Object]);
                }
            }
            return obj;
        }

        /**
        * Http status code of the response.
        * @member {Number} responseStatus
        */

        /**
        * @member {module:model/Notification} data
        */

        /**
        * @member {Array.<Object>} included
        */

    }]);

    return NotificationResponse;
}();

exports.default = NotificationResponse;