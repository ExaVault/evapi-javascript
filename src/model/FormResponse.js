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

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Share = require('./Share');

var _Share2 = _interopRequireDefault(_Share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The FormResponse model module.
* @module model/FormResponse
* @version 2.2.3
*/
var FormResponse = function () {
    /**
    * Constructs a new <code>FormResponse</code>.
    * Response object for forms.
    * @alias module:model/FormResponse
    * @class
    */

    function FormResponse() {
        _classCallCheck(this, FormResponse);

        this['responseStatus'] = undefined;
        this['data'] = undefined;
        this['included'] = undefined;
    }

    /**
    * Constructs a <code>FormResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FormResponse} obj Optional instance to populate.
    * @return {module:model/FormResponse} The populated <code>FormResponse</code> instance.
    */


    _createClass(FormResponse, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FormResponse();

                if (data.hasOwnProperty('responseStatus')) {
                    obj['responseStatus'] = _ApiClient2.default.convertToType(data['responseStatus'], 'Number');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _Form2.default.constructFromObject(data['data']);
                }
                if (data.hasOwnProperty('included')) {
                    obj['included'] = _ApiClient2.default.convertToType(data['included'], [_Share2.default]);
                }
            }
            return obj;
        }

        /**
        * Http status code of the response. 
        * @member {Number} responseStatus
        */

        /**
        * @member {module:model/Form} data
        */

        /**
        * @member {Array.<module:model/Share>} included
        */

    }]);

    return FormResponse;
}();

exports.default = FormResponse;