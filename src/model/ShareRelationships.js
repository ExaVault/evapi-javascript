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

var _ShareRelationshipsMessage = require('./ShareRelationshipsMessage');

var _ShareRelationshipsMessage2 = _interopRequireDefault(_ShareRelationshipsMessage);

var _ShareRelationshipsNotification = require('./ShareRelationshipsNotification');

var _ShareRelationshipsNotification2 = _interopRequireDefault(_ShareRelationshipsNotification);

var _ShareRelationshipsOwner = require('./ShareRelationshipsOwner');

var _ShareRelationshipsOwner2 = _interopRequireDefault(_ShareRelationshipsOwner);

var _ShareRelationshipsResource = require('./ShareRelationshipsResource');

var _ShareRelationshipsResource2 = _interopRequireDefault(_ShareRelationshipsResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ShareRelationships model module.
* @module model/ShareRelationships
* @version 2.2.4
*/
var ShareRelationships = function () {
    /**
    * Constructs a new <code>ShareRelationships</code>.
    * Message, owner, resource, and notification relationships of the share. 
    * @alias module:model/ShareRelationships
    * @class
    */

    function ShareRelationships() {
        _classCallCheck(this, ShareRelationships);

        this['messages'] = undefined;
        this['owner'] = undefined;
        this['resources'] = undefined;
        this['notifications'] = undefined;
    }

    /**
    * Constructs a <code>ShareRelationships</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShareRelationships} obj Optional instance to populate.
    * @return {module:model/ShareRelationships} The populated <code>ShareRelationships</code> instance.
    */


    _createClass(ShareRelationships, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ShareRelationships();

                if (data.hasOwnProperty('messages')) {
                    obj['messages'] = _ApiClient2.default.convertToType(data['messages'], [_ShareRelationshipsMessage2.default]);
                }
                if (data.hasOwnProperty('owner')) {
                    obj['owner'] = _ShareRelationshipsOwner2.default.constructFromObject(data['owner']);
                }
                if (data.hasOwnProperty('resources')) {
                    obj['resources'] = _ApiClient2.default.convertToType(data['resources'], [_ShareRelationshipsResource2.default]);
                }
                if (data.hasOwnProperty('notifications')) {
                    obj['notifications'] = _ApiClient2.default.convertToType(data['notifications'], [_ShareRelationshipsNotification2.default]);
                }
            }
            return obj;
        }

        /**
        * null
        * @member {Array.<module:model/ShareRelationshipsMessage>} messages
        */

        /**
        * @member {module:model/ShareRelationshipsOwner} owner
        */

        /**
        * @member {Array.<module:model/ShareRelationshipsResource>} resources
        */

        /**
        * null
        * @member {Array.<module:model/ShareRelationshipsNotification>} notifications
        */

    }]);

    return ShareRelationships;
}();

exports.default = ShareRelationships;