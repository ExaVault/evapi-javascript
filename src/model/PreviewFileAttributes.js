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
* The PreviewFileAttributes model module.
* @module model/PreviewFileAttributes
* @version 2.2.5
*/
var PreviewFileAttributes = function () {
    /**
    * Constructs a new <code>PreviewFileAttributes</code>.
    * @alias module:model/PreviewFileAttributes
    * @class
    */

    function PreviewFileAttributes() {
        _classCallCheck(this, PreviewFileAttributes);

        this['image'] = undefined;
        this['size'] = undefined;
        this['imageHash'] = undefined;
        this['pageCount'] = undefined;
    }

    /**
    * Constructs a <code>PreviewFileAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PreviewFileAttributes} obj Optional instance to populate.
    * @return {module:model/PreviewFileAttributes} The populated <code>PreviewFileAttributes</code> instance.
    */


    _createClass(PreviewFileAttributes, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PreviewFileAttributes();

                if (data.hasOwnProperty('image')) {
                    obj['image'] = _ApiClient2.default.convertToType(data['image'], 'String');
                }
                if (data.hasOwnProperty('size')) {
                    obj['size'] = _ApiClient2.default.convertToType(data['size'], 'Number');
                }
                if (data.hasOwnProperty('imageHash')) {
                    obj['imageHash'] = _ApiClient2.default.convertToType(data['imageHash'], 'String');
                }
                if (data.hasOwnProperty('pageCount')) {
                    obj['pageCount'] = _ApiClient2.default.convertToType(data['pageCount'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Binary image content, base64 encoded.
        * @member {String} image
        */

        /**
        * Size of the image in bytes.
        * @member {Number} size
        */

        /**
        * hash of the image.
        * @member {String} imageHash
        */

        /**
        * Amount of pages available in the file. Used only for multipage documents.
        * @member {Number} pageCount
        */

    }]);

    return PreviewFileAttributes;
}();

exports.default = PreviewFileAttributes;