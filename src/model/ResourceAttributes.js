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
* The ResourceAttributes model module.
* @module model/ResourceAttributes
* @version 2.2.5
*/
var ResourceAttributes = function () {
    /**
    * Constructs a new <code>ResourceAttributes</code>.
    * Attributes of resource
    * @alias module:model/ResourceAttributes
    * @class
    */

    function ResourceAttributes() {
        _classCallCheck(this, ResourceAttributes);

        this['hash'] = undefined;
        this['name'] = undefined;
        this['extension'] = undefined;
        this['type'] = undefined;
        this['createdBy'] = undefined;
        this['uploadDate'] = undefined;
        this['createdAt'] = undefined;
        this['updatedAt'] = undefined;
        this['accessedAt'] = undefined;
        this['createdTime'] = undefined;
        this['updatedTime'] = undefined;
        this['accessedTime'] = undefined;
        this['path'] = undefined;
        this['size'] = undefined;
        this['fileCount'] = undefined;
        this['previewable'] = undefined;
    }

    /**
    * Constructs a <code>ResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ResourceAttributes} obj Optional instance to populate.
    * @return {module:model/ResourceAttributes} The populated <code>ResourceAttributes</code> instance.
    */


    _createClass(ResourceAttributes, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ResourceAttributes();

                if (data.hasOwnProperty('hash')) {
                    obj['hash'] = _ApiClient2.default.convertToType(data['hash'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('extension')) {
                    obj['extension'] = _ApiClient2.default.convertToType(data['extension'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('createdBy')) {
                    obj['createdBy'] = _ApiClient2.default.convertToType(data['createdBy'], 'String');
                }
                if (data.hasOwnProperty('uploadDate')) {
                    obj['uploadDate'] = _ApiClient2.default.convertToType(data['uploadDate'], 'Date');
                }
                if (data.hasOwnProperty('createdAt')) {
                    obj['createdAt'] = _ApiClient2.default.convertToType(data['createdAt'], 'Date');
                }
                if (data.hasOwnProperty('updatedAt')) {
                    obj['updatedAt'] = _ApiClient2.default.convertToType(data['updatedAt'], 'Date');
                }
                if (data.hasOwnProperty('accessedAt')) {
                    obj['accessedAt'] = _ApiClient2.default.convertToType(data['accessedAt'], 'Date');
                }
                if (data.hasOwnProperty('createdTime')) {
                    obj['createdTime'] = _ApiClient2.default.convertToType(data['createdTime'], 'Number');
                }
                if (data.hasOwnProperty('updatedTime')) {
                    obj['updatedTime'] = _ApiClient2.default.convertToType(data['updatedTime'], 'Number');
                }
                if (data.hasOwnProperty('accessedTime')) {
                    obj['accessedTime'] = _ApiClient2.default.convertToType(data['accessedTime'], 'Number');
                }
                if (data.hasOwnProperty('path')) {
                    obj['path'] = _ApiClient2.default.convertToType(data['path'], 'String');
                }
                if (data.hasOwnProperty('size')) {
                    obj['size'] = _ApiClient2.default.convertToType(data['size'], 'Number');
                }
                if (data.hasOwnProperty('fileCount')) {
                    obj['fileCount'] = _ApiClient2.default.convertToType(data['fileCount'], 'Number');
                }
                if (data.hasOwnProperty('previewable')) {
                    obj['previewable'] = _ApiClient2.default.convertToType(data['previewable'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * Unique hash of the resource.
        * @member {String} hash
        */

        /**
        * Resource name, e.g. the name of the file or folder.
        * @member {String} name
        */

        /**
        * Resource extension. Property exists only if resource `type` is file.
        * @member {String} extension
        */

        /**
        * Type of the resource.
        * @member {module:model/ResourceAttributes.TypeEnum} type
        */

        /**
        * Username of the creator.
        * @member {String} createdBy
        */

        /**
        * Timestamp of resource upload.
        * @member {Date} uploadDate
        */

        /**
        * Date-time of resource creation.
        * @member {Date} createdAt
        */

        /**
        * Date-time of resource modification.
        * @member {Date} updatedAt
        */

        /**
        * Date-time of the time when resource was accessed.
        * @member {Date} accessedAt
        */

        /**
        * UNIX timestamp of resource creation
        * @member {Number} createdTime
        */

        /**
        * UNIX timestamp of resource modification
        * @member {Number} updatedTime
        */

        /**
        * UNIX timestamp of last access
        * @member {Number} accessedTime
        */

        /**
        * Full path to the resource.
        * @member {String} path
        */

        /**
        * Resource size in bytes
        * @member {Number} size
        */

        /**
        * Number of files within folder. null if resource type is a file.
        * @member {Number} fileCount
        */

        /**
        * Can resource be previewed. Property equals `null` if resource `type` is dir.
        * @member {Boolean} previewable
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ResourceAttributes;
}();

ResourceAttributes.TypeEnum = {
    /**
     * value: "file"
     * @const
     */
    "file": "file",
    /**
     * value: "dir"
     * @const
     */
    "dir": "dir" };
exports.default = ResourceAttributes;