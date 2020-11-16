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

var _ResourceRelationshipsData = require('./ResourceRelationshipsData');

var _ResourceRelationshipsData2 = _interopRequireDefault(_ResourceRelationshipsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ResourceRelationshipsNotifications model module.
* @module model/ResourceRelationshipsNotifications
* @version 2.2.1
*/
var ResourceRelationshipsNotifications = function () {
    /**
    * Constructs a new <code>ResourceRelationshipsNotifications</code>.
    * @alias module:model/ResourceRelationshipsNotifications
    * @class
    */

    function ResourceRelationshipsNotifications() {
        _classCallCheck(this, ResourceRelationshipsNotifications);

        this['data'] = undefined;
    }

    /**
    * Constructs a <code>ResourceRelationshipsNotifications</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ResourceRelationshipsNotifications} obj Optional instance to populate.
    * @return {module:model/ResourceRelationshipsNotifications} The populated <code>ResourceRelationshipsNotifications</code> instance.
    */


    _createClass(ResourceRelationshipsNotifications, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ResourceRelationshipsNotifications();

                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ResourceRelationshipsData2.default.constructFromObject(data['data']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/ResourceRelationshipsData} data
        */

    }]);

    return ResourceRelationshipsNotifications;
}();

exports.default = ResourceRelationshipsNotifications;