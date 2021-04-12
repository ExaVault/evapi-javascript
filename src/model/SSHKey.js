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

var _SSHKeyAttributes = require('./SSHKeyAttributes');

var _SSHKeyAttributes2 = _interopRequireDefault(_SSHKeyAttributes);

var _SSHKeyRelationships = require('./SSHKeyRelationships');

var _SSHKeyRelationships2 = _interopRequireDefault(_SSHKeyRelationships);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SSHKey model module.
* @module model/SSHKey
* @version 2.2.4
*/
var SSHKey = function () {
    /**
    * Constructs a new <code>SSHKey</code>.
    * Object representing an SSH Key associated with a user.
    * @alias module:model/SSHKey
    * @class
    */

    function SSHKey() {
        _classCallCheck(this, SSHKey);

        this['id'] = undefined;
        this['type'] = undefined;
        this['attributes'] = undefined;
        this['relationships'] = undefined;
    }

    /**
    * Constructs a <code>SSHKey</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SSHKey} obj Optional instance to populate.
    * @return {module:model/SSHKey} The populated <code>SSHKey</code> instance.
    */


    _createClass(SSHKey, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SSHKey();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('attributes')) {
                    obj['attributes'] = _SSHKeyAttributes2.default.constructFromObject(data['attributes']);
                }
                if (data.hasOwnProperty('relationships')) {
                    obj['relationships'] = _SSHKeyRelationships2.default.constructFromObject(data['relationships']);
                }
            }
            return obj;
        }

        /**
        * ID of the key.
        * @member {Number} id
        */

        /**
        * Type of the object. 
        * @member {module:model/SSHKey.TypeEnum} type
        */

        /**
        * @member {module:model/SSHKeyAttributes} attributes
        */

        /**
        * @member {module:model/SSHKeyRelationships} relationships
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return SSHKey;
}();

SSHKey.TypeEnum = {
    /**
     * value: "sshKey"
     * @const
     */
    "sshKey": "sshKey" };
exports.default = SSHKey;