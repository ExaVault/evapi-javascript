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

var _Body = require('../model/Body16');

var _Body2 = _interopRequireDefault(_Body);

var _Body3 = require('../model/Body17');

var _Body4 = _interopRequireDefault(_Body3);

var _EmptyResponse = require('../model/EmptyResponse');

var _EmptyResponse2 = _interopRequireDefault(_EmptyResponse);

var _ShareCollectionResponse = require('../model/ShareCollectionResponse');

var _ShareCollectionResponse2 = _interopRequireDefault(_ShareCollectionResponse);

var _ShareResponse = require('../model/ShareResponse');

var _ShareResponse2 = _interopRequireDefault(_ShareResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Shares service.
* @module api/SharesApi
* @version 2.0
*/
var SharesApi = function () {

  /**
  * Constructs a new SharesApi. 
  * @alias module:api/SharesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SharesApi(apiClient) {
    _classCallCheck(this, SharesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the addShare operation.
   * @callback module:api/SharesApi~addShareCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ShareResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a share
   * Creates a new share object for the given path in your account. We support three types of shares:    - A **shared folder** allows you to let outside parties access a folder in your account (including any files and nested subfolders) using just a link. Shared folders can be restricted; e.g. with an expiration date, password, download-only, etc. Shared folders are &#x27;live&#x27;; if someone makes a change to a file in your shared folder, it will be immediately reflected in your account, and vice-versa.   - A file **send** lets you send one or more files via an easy download link. File sends are different than shared folders because file sends are &#x27;point in time&#x27; -- the recipient will get the files as you sent them. If you later make a change to the source file, it will not be updated for the recipient.   - A **receive** folder lets you receive files into your account. You can either send users a link, or optionally [embed a customized form](/docs/account/05-file-sharing/05-upload-widget) on your website.    **How to send files from your computer using the API**:  In order to use the API to send files which are not already stored in your account, you&#x27;ll need to follow a three-step process:  1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the &#x60;accessMode&#x60; and set the &#x60;sendingLocalFiles&#x60; paramter to **true**. The response that is returned will include a \&quot;meta\&quot; attribute, which contains an **accessToken** attribute. This new access token is valid only for the send. 2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you&#x27;ve created. The \&quot;/\&quot; path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the &#x60;ev-access-token&#x60; header** 3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the &#x60;ev-access-token&#x60; header, not the temporary access token**  **Notes:**  Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
   * @param {Object} opts Optional parameters
   * @param {module:api/SharesApi~addShareCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ShareResponse}
   */


  _createClass(SharesApi, [{
    key: 'addShare',
    value: function addShare(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _ShareResponse2.default;

      return this.apiClient.callApi('/shares', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the completeDirectSend operation.
     * @callback module:api/SharesApi~completeDirectSendCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete send files
     * After uploading the file(s) to be sent, this method will trigger invitation emails and finish the send files setup. If you are not sending files from your own computer in a send, you will not need this step.    **How to send files from your computer using the API**:  In order to use the API to send files which are not already stored in your account, you&#x27;ll need to follow a three-step process:  1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the &#x60;accessMode&#x60; and set the &#x60;sendingLocalFiles&#x60; paramter to **true**. The response that is returned will include a \&quot;meta\&quot; attribute, which contains an **accessToken** attribute. This new access token is valid only for the send. 2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you&#x27;ve created. The \&quot;/\&quot; path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the &#x60;ev-access-token&#x60; header** 3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the &#x60;ev-access-token&#x60; header, not the temporary access token** 
     * @param {module:api/SharesApi~completeDirectSendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareResponse}
     */

  }, {
    key: 'completeDirectSend',
    value: function completeDirectSend(evApiKey, evAccessToken, id, callback) {
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
      var returnType = _ShareResponse2.default;

      return this.apiClient.callApi('/shares/complete-send/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteShareById operation.
     * @callback module:api/SharesApi~deleteShareByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deactivate a share
     * Deactivate a share. Deactivating a share does not remove the underlying files for **shared_folder** and **receive** share types; it merely removes the access URL. Deleting a **send** share type does remove the associated files, as files that have been sent are only associated with the share, and aren&#x27;t stored anywhere else in the account.  **Notes:**  - You must have [sharing permissons](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this. - You must have [admin-level access](/docs/account/04-users/01-admin-users), or you must be the owner of the specified share you wish to delete.
     * @param {module:api/SharesApi~deleteShareByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: 'deleteShareById',
    value: function deleteShareById(id, evApiKey, evAccessToken, callback) {
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

      return this.apiClient.callApi('/shares/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getShareById operation.
     * @callback module:api/SharesApi~getShareByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a share
     * Get the details for a specific share entry. You can use the &#x60;include&#x60; parameter to also get the details of related records, such as the owning user or the resources involved in the share.  **Notes:**  - Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - To get share objects with type send, authenticated user&#x27;s role must be admin or master.
     * @param {Object} opts Optional parameters
     * @param {module:api/SharesApi~getShareByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareResponse}
     */

  }, {
    key: 'getShareById',
    value: function getShareById(id, evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _ShareResponse2.default;

      return this.apiClient.callApi('/shares/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the listShares operation.
     * @callback module:api/SharesApi~listSharesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of shares
     * Get a list of shares that you would have access to view through the web interface. You can limit which results are returned by specifying specific types of shares you wish to view, finding things shared with a specific email address, as well as finding shares for specific folder names.   **Notes:**  - Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - To get share objects with type send, authenticated user&#x27;s role must be admin or master.
     * @param {Object} opts Optional parameters
     * @param {module:api/SharesApi~listSharesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareCollectionResponse}
     */

  }, {
    key: 'listShares',
    value: function listShares(evApiKey, evAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'scope': opts['scope'],
        'sort': opts['sort'],
        'type': opts['type'],
        'include': opts['include'],
        'name': opts['name'],
        'recipient': opts['recipient'],
        'message': opts['message'],
        'username': opts['username'],
        'search': opts['search']
      };
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ShareCollectionResponse2.default;

      return this.apiClient.callApi('/shares', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateShareById operation.
     * @callback module:api/SharesApi~updateShareByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a share
     * Change the settings on an active share. Any changes made will affect all users that have access to the share.   When updating invitees, pass the &#x60;recipients&#x60; body paramater with the full list of people who should be included on the share. If you resend the list without an existing recipient, they will be removed from the share.  **Notes:**    - Authenticated user should be the owner of the specified share.
     * @param {module:api/SharesApi~updateShareByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareResponse}
     */

  }, {
    key: 'updateShareById',
    value: function updateShareById(body, id, evApiKey, evAccessToken, callback) {
      var postBody = body;

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
      var returnType = _ShareResponse2.default;

      return this.apiClient.callApi('/shares/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return SharesApi;
}();

exports.default = SharesApi;