'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ExaVault API
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See our API reference documentation at https://www.exavault.com/developer/api-docs/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 2.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Contact: support@exavault.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Share = require('./Share');

var _Share2 = _interopRequireDefault(_Share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ShareCollectionResponse model module.
* @module model/ShareCollectionResponse
* @version 2.0.0
*/
var ShareCollectionResponse = function () {
    /**
    * Constructs a new <code>ShareCollectionResponse</code>.
    * @alias module:model/ShareCollectionResponse
    * @class
    */

    function ShareCollectionResponse() {
        _classCallCheck(this, ShareCollectionResponse);

        this['responseStatus'] = undefined;
        this['totalResults'] = undefined;
        this['returnedResults'] = undefined;
        this['data'] = undefined;
        this['included'] = undefined;
    }

    /**
    * Constructs a <code>ShareCollectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShareCollectionResponse} obj Optional instance to populate.
    * @return {module:model/ShareCollectionResponse} The populated <code>ShareCollectionResponse</code> instance.
    */


    _createClass(ShareCollectionResponse, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ShareCollectionResponse();

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
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [_Share2.default]);
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
        * Total results found. 
        * @member {Number} totalResults
        */

        /**
        * Number of returned results.
        * @member {Number} returnedResults
        */

        /**
        * @member {Array.<module:model/Share>} data
        */

        /**
        * @member {Array.<Object>} included
        */

    }]);

    return ShareCollectionResponse;
}();

exports.default = ShareCollectionResponse;