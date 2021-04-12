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
* The AddSSHKeyRequestBody model module.
* @module model/AddSSHKeyRequestBody
* @version 2.2.4
*/
var AddSSHKeyRequestBody = function () {
    /**
    * Constructs a new <code>AddSSHKeyRequestBody</code>.
    * @alias module:model/AddSSHKeyRequestBody
    * @class
    * @param userId {Number} ID of the user to assign the new key to. 
    * @param publicKey {String} Public Key to provide ExaVault. You can provide the Public Key as formatted from the ssh-keygen command or a standard rfc-4716 format. 
    */

    function AddSSHKeyRequestBody(userId, publicKey) {
        _classCallCheck(this, AddSSHKeyRequestBody);

        this['userId'] = undefined;
        this['publicKey'] = undefined;


        this['userId'] = userId;
        this['publicKey'] = publicKey;
    }

    /**
    * Constructs a <code>AddSSHKeyRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AddSSHKeyRequestBody} obj Optional instance to populate.
    * @return {module:model/AddSSHKeyRequestBody} The populated <code>AddSSHKeyRequestBody</code> instance.
    */


    _createClass(AddSSHKeyRequestBody, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AddSSHKeyRequestBody();

                if (data.hasOwnProperty('userId')) {
                    obj['userId'] = _ApiClient2.default.convertToType(data['userId'], 'Number');
                }
                if (data.hasOwnProperty('publicKey')) {
                    obj['publicKey'] = _ApiClient2.default.convertToType(data['publicKey'], 'String');
                }
            }
            return obj;
        }

        /**
        * ID of the user to assign the new key to. 
        * @member {Number} userId
        */

        /**
        * Public Key to provide ExaVault. You can provide the Public Key as formatted from the ssh-keygen command or a standard rfc-4716 format. 
        * @member {String} publicKey
        */

    }]);

    return AddSSHKeyRequestBody;
}();

exports.default = AddSSHKeyRequestBody;