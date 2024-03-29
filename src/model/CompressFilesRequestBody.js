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
* The CompressFilesRequestBody model module.
* @module model/CompressFilesRequestBody
* @version 2.2.5
*/
var CompressFilesRequestBody = function () {
    /**
    * Constructs a new <code>CompressFilesRequestBody</code>.
    * @alias module:model/CompressFilesRequestBody
    * @class
    * @param resources {Array.<String>} Resource identifiers for file(s)/folder(s) to include in new zip file
    */

    function CompressFilesRequestBody(resources) {
        _classCallCheck(this, CompressFilesRequestBody);

        this['resources'] = undefined;
        this['parentResource'] = undefined;
        this['archiveName'] = undefined;


        this['resources'] = resources;
    }

    /**
    * Constructs a <code>CompressFilesRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CompressFilesRequestBody} obj Optional instance to populate.
    * @return {module:model/CompressFilesRequestBody} The populated <code>CompressFilesRequestBody</code> instance.
    */


    _createClass(CompressFilesRequestBody, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CompressFilesRequestBody();

                if (data.hasOwnProperty('resources')) {
                    obj['resources'] = _ApiClient2.default.convertToType(data['resources'], ['String']);
                }
                if (data.hasOwnProperty('parentResource')) {
                    obj['parentResource'] = _ApiClient2.default.convertToType(data['parentResource'], 'String');
                }
                if (data.hasOwnProperty('archiveName')) {
                    obj['archiveName'] = _ApiClient2.default.convertToType(data['archiveName'], 'String');
                }
            }
            return obj;
        }

        /**
        * Resource identifiers for file(s)/folder(s) to include in new zip file
        * @member {Array.<String>} resources
        */

        /**
        * Resource identifier of the folder where zip archive should be created.
        * @member {String} parentResource
        */

        /**
        * Name of the zip archive to create. If left blank, current date will be used.
        * @member {String} archiveName
        */

    }]);

    return CompressFilesRequestBody;
}();

exports.default = CompressFilesRequestBody;