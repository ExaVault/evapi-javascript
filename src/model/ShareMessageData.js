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
* The ShareMessageData model module.
* @module model/ShareMessageData
* @version 2.2.5
*/
var ShareMessageData = function () {
    /**
    * Constructs a new <code>ShareMessageData</code>.
    * @alias module:model/ShareMessageData
    * @class
    */

    function ShareMessageData() {
        _classCallCheck(this, ShareMessageData);

        this['type'] = undefined;
        this['id'] = undefined;
    }

    /**
    * Constructs a <code>ShareMessageData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShareMessageData} obj Optional instance to populate.
    * @return {module:model/ShareMessageData} The populated <code>ShareMessageData</code> instance.
    */


    _createClass(ShareMessageData, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ShareMessageData();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Type is message. 
        * @member {module:model/ShareMessageData.TypeEnum} type
        */

        /**
        * ID of the message.
        * @member {Number} id
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ShareMessageData;
}();

ShareMessageData.TypeEnum = {
    /**
     * value: "message"
     * @const
     */
    "message": "message" };
exports.default = ShareMessageData;