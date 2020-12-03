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

var _AccountResponse = require('../model/AccountResponse');

var _AccountResponse2 = _interopRequireDefault(_AccountResponse);

var _UpdateAccountRequestBody = require('../model/UpdateAccountRequestBody');

var _UpdateAccountRequestBody2 = _interopRequireDefault(_UpdateAccountRequestBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Account service.
* @module api/AccountApi
* @version 2.2.3
*/
var AccountApi = function () {

  /**
  * Constructs a new AccountApi. 
  * @alias module:api/AccountApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountApi(apiClient) {
    _classCallCheck(this, AccountApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the getAccount operation.
   * @callback module:api/AccountApi~getAccountCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AccountResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get account settings
   * Get settings for your account, such as current space usage, webhooks settings, welcome email content and IP address restrictions.
   * @param {Object} opts Optional parameters
   * @param {module:api/AccountApi~getAccountCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AccountResponse}
   */


  _createClass(AccountApi, [{
    key: 'getAccount',
    value: function getAccount(evApiKey, evAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountResponse2.default;

      return this.apiClient.callApi('/account', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateAccount operation.
     * @callback module:api/AccountApi~updateAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update account settings
     * Update account settings, such as welcome email content, IP address restrictions, webhooks settings and secure password requirements.  **Notes**  - You must have [admin-level access](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to change account settings.
     * @param {Object} opts Optional parameters
     * @param {module:api/AccountApi~updateAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountResponse}
     */

  }, {
    key: 'updateAccount',
    value: function updateAccount(evApiKey, evAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AccountResponse2.default;

      return this.apiClient.callApi('/account', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return AccountApi;
}();

exports.default = AccountApi;