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

var _Resource = require('./Resource');

var _Resource2 = _interopRequireDefault(_Resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ResourceCopyMove model module.
* @module model/ResourceCopyMove
* @version 2.2.5
*/
var ResourceCopyMove = function () {
    /**
    * Constructs a new <code>ResourceCopyMove</code>.
    * Resource which was successfully copied or moved.
    * @alias module:model/ResourceCopyMove
    * @class
    */

    function ResourceCopyMove() {
        _classCallCheck(this, ResourceCopyMove);

        this['data'] = undefined;
        this['meta'] = undefined;
    }

    /**
    * Constructs a <code>ResourceCopyMove</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ResourceCopyMove} obj Optional instance to populate.
    * @return {module:model/ResourceCopyMove} The populated <code>ResourceCopyMove</code> instance.
    */


    _createClass(ResourceCopyMove, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ResourceCopyMove();

                if (data.hasOwnProperty('data')) {
                    obj['data'] = _Resource2.default.constructFromObject(data['data']);
                }
                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _ApiClient2.default.convertToType(data['meta'], Object);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/Resource} data
        */

        /**
        * Meta object containing non-standard meta-information about the operation.
        * @member {Object} meta
        */

    }]);

    return ResourceCopyMove;
}();

exports.default = ResourceCopyMove;