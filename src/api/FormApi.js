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

var _EmptyResponse = require('../model/EmptyResponse');

var _EmptyResponse2 = _interopRequireDefault(_EmptyResponse);

var _FormEntryResponse = require('../model/FormEntryResponse');

var _FormEntryResponse2 = _interopRequireDefault(_FormEntryResponse);

var _FormResponse = require('../model/FormResponse');

var _FormResponse2 = _interopRequireDefault(_FormResponse);

var _UpdateFormByIdRequestBody = require('../model/UpdateFormByIdRequestBody');

var _UpdateFormByIdRequestBody2 = _interopRequireDefault(_UpdateFormByIdRequestBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Form service.
* @module api/FormApi
* @version 2.2.3
*/
var FormApi = function () {

  /**
  * Constructs a new FormApi. 
  * @alias module:api/FormApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FormApi(apiClient) {
    _classCallCheck(this, FormApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the deleteFormMessageById operation.
   * @callback module:api/FormApi~deleteFormMessageByIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EmptyResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a receive form submission
   * Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this.   **Notes**:  - Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete - You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation - It is not possible to un-delete data that is removed in this way 
   * @param {module:api/FormApi~deleteFormMessageByIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/EmptyResponse}
   */


  _createClass(FormApi, [{
    key: 'deleteFormMessageById',
    value: function deleteFormMessageById(evApiKey, evAccessToken, id, callback) {
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

      return this.apiClient.callApi('/forms/entries/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFormById operation.
     * @callback module:api/FormApi~getFormByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get receive folder form by Id
     * Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings.   Use the &#x60;include&#x60; parameter (with the value **share**) to also retrieve the details of the associated receive folder.   **Note**  If you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead.  
     * @param {Object} opts Optional parameters
     * @param {module:api/FormApi~getFormByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FormResponse}
     */

  }, {
    key: 'getFormById',
    value: function getFormById(id, evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _FormResponse2.default;

      return this.apiClient.callApi('/forms/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFormByShareHash operation.
     * @callback module:api/FormApi~getFormByShareHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get receive folder form settings
     * Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.  Use the &#x60;include&#x60; parameter (with the value **share**) to also get the details of the associated receive folder.  **Note**  - If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead.  
     * @param {Object} opts Optional parameters
     * @param {module:api/FormApi~getFormByShareHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FormResponse}
     */

  }, {
    key: 'getFormByShareHash',
    value: function getFormByShareHash(evApiKey, evAccessToken, shareHash, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'shareHash': shareHash,
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
      var returnType = _FormResponse2.default;

      return this.apiClient.callApi('/forms', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getFormEntries operation.
     * @callback module:api/FormApi~getFormEntriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormEntryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get form data entries for a receive
     * Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets. 
     * @param {Object} opts Optional parameters
     * @param {module:api/FormApi~getFormEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FormEntryResponse}
     */

  }, {
    key: 'getFormEntries',
    value: function getFormEntries(evApiKey, evAccessToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FormEntryResponse2.default;

      return this.apiClient.callApi('/forms/entries/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateFormById operation.
     * @callback module:api/FormApi~updateFormByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a form with given parameters
     * Add, update, or delete a form&#x27;s parameters. This will alter how your users/customers will see and interact with the form when sending you files.   **Notes**  *This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element&#x27;s current settings to preserve them.                          
     * @param {Object} opts Optional parameters
     * @param {module:api/FormApi~updateFormByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FormResponse}
     */

  }, {
    key: 'updateFormById',
    value: function updateFormById(id, evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _FormResponse2.default;

      return this.apiClient.callApi('/forms/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return FormApi;
}();

exports.default = FormApi;