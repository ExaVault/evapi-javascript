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

var _EmailListAttributes = require('./EmailListAttributes');

var _EmailListAttributes2 = _interopRequireDefault(_EmailListAttributes);

var _EmailListRelationships = require('./EmailListRelationships');

var _EmailListRelationships2 = _interopRequireDefault(_EmailListRelationships);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The EmailList model module.
* @module model/EmailList
* @version 2.2.3
*/
var EmailList = function () {
    /**
    * Constructs a new <code>EmailList</code>.
    * A single email group list
    * @alias module:model/EmailList
    * @class
    */

    function EmailList() {
        _classCallCheck(this, EmailList);

        this['id'] = undefined;
        this['type'] = undefined;
        this['attributes'] = undefined;
        this['relationships'] = undefined;
    }

    /**
    * Constructs a <code>EmailList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EmailList} obj Optional instance to populate.
    * @return {module:model/EmailList} The populated <code>EmailList</code> instance.
    */


    _createClass(EmailList, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new EmailList();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('attributes')) {
                    obj['attributes'] = _EmailListAttributes2.default.constructFromObject(data['attributes']);
                }
                if (data.hasOwnProperty('relationships')) {
                    obj['relationships'] = _EmailListRelationships2.default.constructFromObject(data['relationships']);
                }
            }
            return obj;
        }

        /**
        * ID of the email list
        * @member {Number} id
        */

        /**
        * Type of record. \"EmailList\"
        * @member {String} type
        */

        /**
        * @member {module:model/EmailListAttributes} attributes
        */

        /**
        * @member {module:model/EmailListRelationships} relationships
        */

    }]);

    return EmailList;
}();

exports.default = EmailList;