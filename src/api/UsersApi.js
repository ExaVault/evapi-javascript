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

var _Body = require('../model/Body5');

var _Body2 = _interopRequireDefault(_Body);

var _Body3 = require('../model/Body6');

var _Body4 = _interopRequireDefault(_Body3);

var _EmptyResponse = require('../model/EmptyResponse');

var _EmptyResponse2 = _interopRequireDefault(_EmptyResponse);

var _UserCollectionResponse = require('../model/UserCollectionResponse');

var _UserCollectionResponse2 = _interopRequireDefault(_UserCollectionResponse);

var _UserResponse = require('../model/UserResponse');

var _UserResponse2 = _interopRequireDefault(_UserResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Users service.
* @module api/UsersApi
* @version 2.0
*/
var UsersApi = function () {

  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the addUser operation.
   * @callback module:api/UsersApi~addUserCallback
   * @param {String} error Error message, if any.
   * @param {module:model/UserResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a user
   * Adds a new user to the account. The user may be configured as an admin or standard user, and (if a standard user) may be assigned a restricted [home directory](/docs/account/04-users/00-introduction#setting-the-user-s-home-directory) and restricted [permissions](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).   **Notes:**  - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
   * @param {Object} opts Optional parameters
   * @param {module:api/UsersApi~addUserCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/UserResponse}
   */


  _createClass(UsersApi, [{
    key: 'addUser',
    value: function addUser(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _UserResponse2.default;

      return this.apiClient.callApi('/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UsersApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user
     * Delete a user from the account. Deleting a user does **NOT** delete any files from the account; it merely removes a user&#x27;s access. Aternatively, locking a user via the [PATCH /users/{id}](#operation/updateUser) will keep the user in your account, but make it unable to log in.   Resources and shares owned by the deleted user will be owned by the master user after the deletion.  **Notes:**   - You must have [admin-level access](/docs/account/04-users/01-admin-users) to delete a user. - The primary owner of the account cannot be deleted. 
     * @param {module:api/UsersApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: 'deleteUser',
    value: function deleteUser(id, evApiKey, evAccessToken, callback) {
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

      return this.apiClient.callApi('/users/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getUserById operation.
     * @callback module:api/UsersApi~getUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get info for a user
     * Get the details for a specific user. You can use the &#x60;include&#x60; parameter to also get the details of related records, such as the account or the home directory.  **Notes:**  - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to use this.
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~getUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */

  }, {
    key: 'getUserById',
    value: function getUserById(id, evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _UserResponse2.default;

      return this.apiClient.callApi('/users/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the listUsers operation.
     * @callback module:api/UsersApi~listUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of users
     * Get a list of the users in your account. There are three main types of searches you can do with this method:  1. Search for a user by username. If you provide the &#x60;username&#x60; parameter in your call, then only the user who exactly matches that username will be in the list of matches. Any other parameters are ignored. 1. Search for a user by individual filter fields (&#x60;nickname&#x60;,&#x60;email&#x60;,&#x60;role&#x60;,&#x60;status&#x60;,&#x60;homeDir&#x60;). Users in the list will be ones who match all of the filters you choose to search by. For example, you could look for users with the \&quot;admin\&quot; &#x60;role&#x60; AND &#x60;email&#x60; addresses ending in \&quot;*@acme.com\&quot;.  1. Search for a user by search string. If you provide the &#x60;search&#x60; parameter, users whose nickname OR email OR role OR homeDir match value your provide.  **Notes:**  - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this. - The homeDir is the full path to the user&#x27;s home directory, not a resource ID or hash.
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~listUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserCollectionResponse}
     */

  }, {
    key: 'listUsers',
    value: function listUsers(evApiKey, evAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'username': opts['username'],
        'nickname': opts['nickname'],
        'email': opts['email'],
        'role': opts['role'],
        'status': opts['status'],
        'homeDir': opts['homeDir'],
        'search': opts['search'],
        'offset': opts['offset'],
        'sort': opts['sort'],
        'limit': opts['limit'],
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
      var returnType = _UserCollectionResponse2.default;

      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UsersApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user
     * Updates the settings for the user. Note that the unique key for this API call is our internal ID, and _not_ the username, as the username can be changed.  In the request body, you should only send the parameters for values that you wish to change for the user.  **Notes:**  - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to edit other users. If you have user-level access, you can only update your own user settings. - You cannot edit a master user with this method.
     * @param {Object} opts Optional parameters
     * @param {module:api/UsersApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */

  }, {
    key: 'updateUser',
    value: function updateUser(id, evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _UserResponse2.default;

      return this.apiClient.callApi('/users/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return UsersApi;
}();

exports.default = UsersApi;