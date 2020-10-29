'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ExaVault API
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See our API reference documentation at https://www.exavault.com/developer/api-docs/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 2.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Contact: support@exavault.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Body = require('../model/Body');

var _Body2 = _interopRequireDefault(_Body);

var _Body3 = require('../model/Body1');

var _Body4 = _interopRequireDefault(_Body3);

var _EmailListCollectionResponse = require('../model/EmailListCollectionResponse');

var _EmailListCollectionResponse2 = _interopRequireDefault(_EmailListCollectionResponse);

var _EmailListResponse = require('../model/EmailListResponse');

var _EmailListResponse2 = _interopRequireDefault(_EmailListResponse);

var _EmptyResponse = require('../model/EmptyResponse');

var _EmptyResponse2 = _interopRequireDefault(_EmptyResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* EmailLists service.
* @module api/EmailListsApi
* @version 2.0.0
*/
var EmailListsApi = function () {

  /**
  * Constructs a new EmailListsApi. 
  * @alias module:api/EmailListsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmailListsApi(apiClient) {
    _classCallCheck(this, EmailListsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the addEmailList operation.
   * @callback module:api/EmailListsApi~addEmailListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EmailListResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create new email list
   * Create a new email list. Among other things, email lists can be used to send files or share folders with a group of email addresses at once.
   * @param {Object} opts Optional parameters
   * @param {module:api/EmailListsApi~addEmailListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/EmailListResponse}
   */


  _createClass(EmailListsApi, [{
    key: 'addEmailList',
    value: function addEmailList(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _EmailListResponse2.default;

      return this.apiClient.callApi('/email-lists', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteEmailListById operation.
     * @callback module:api/EmailListsApi~deleteEmailListByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an email group with given id
     * Permanently delete an email group. This action is not reversable. We recommend making a user confirm this action before sending the API call. 
     * @param {module:api/EmailListsApi~deleteEmailListByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: 'deleteEmailListById',
    value: function deleteEmailListById(evApiKey, evAccessToken, id, callback) {
      var postBody = null;

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmptyResponse2.default;

      return this.apiClient.callApi('/email-lists/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getEmailListById operation.
     * @callback module:api/EmailListsApi~getEmailListByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get individual email group
     * Retrieve all the details of a specifc email list including it&#x27;s name, when it was created and all the email addresses that belong to the group.
     * @param {Object} opts Optional parameters
     * @param {module:api/EmailListsApi~getEmailListByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailListResponse}
     */

  }, {
    key: 'getEmailListById',
    value: function getEmailListById(evApiKey, evAccessToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'id': id
      };
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
      var returnType = _EmailListResponse2.default;

      return this.apiClient.callApi('/email-lists/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getEmailLists operation.
     * @callback module:api/EmailListsApi~getEmailListsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailListCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all email groups
     * @param {Object} opts Optional parameters
     * @param {module:api/EmailListsApi~getEmailListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailListCollectionResponse}
     */

  }, {
    key: 'getEmailLists',
    value: function getEmailLists(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _EmailListCollectionResponse2.default;

      return this.apiClient.callApi('/email-lists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateEmailListById operation.
     * @callback module:api/EmailListsApi~updateEmailListByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an email group
     * Add or remove emails from an email list that can be used to send and share files with groups.   **Notes**  *This call will **replace** your current email list in its entirety.* If you want to keep any existing emails on the list, be sure to submit the call with any current emails you want to keep on the list.  
     * @param {Object} opts Optional parameters
     * @param {module:api/EmailListsApi~updateEmailListByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailListResponse}
     */

  }, {
    key: 'updateEmailListById',
    value: function updateEmailListById(evApiKey, evAccessToken, id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailListResponse2.default;

      return this.apiClient.callApi('/email-lists/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return EmailListsApi;
}();

exports.default = EmailListsApi;