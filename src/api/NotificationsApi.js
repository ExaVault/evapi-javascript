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

var _AddNotificationRequestBody = require('../model/AddNotificationRequestBody');

var _AddNotificationRequestBody2 = _interopRequireDefault(_AddNotificationRequestBody);

var _EmptyResponse = require('../model/EmptyResponse');

var _EmptyResponse2 = _interopRequireDefault(_EmptyResponse);

var _NotificationCollectionResponse = require('../model/NotificationCollectionResponse');

var _NotificationCollectionResponse2 = _interopRequireDefault(_NotificationCollectionResponse);

var _NotificationResponse = require('../model/NotificationResponse');

var _NotificationResponse2 = _interopRequireDefault(_NotificationResponse);

var _UpdateNotificationByIdRequestBody = require('../model/UpdateNotificationByIdRequestBody');

var _UpdateNotificationByIdRequestBody2 = _interopRequireDefault(_UpdateNotificationByIdRequestBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Notifications service.
* @module api/NotificationsApi
* @version 2.2.5
*/
var NotificationsApi = function () {

  /**
  * Constructs a new NotificationsApi. 
  * @alias module:api/NotificationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NotificationsApi(apiClient) {
    _classCallCheck(this, NotificationsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the addNotification operation.
   * @callback module:api/NotificationsApi~addNotificationCallback
   * @param {String} error Error message, if any.
   * @param {module:model/NotificationResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a new notification
   * Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;  - To enable email, pass an array of email addresses to the &#x60;recipients&#x60; parameter of this call.  - To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount).   **Notes:**   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) 
   * @param {Object} opts Optional parameters
   * @param {module:api/NotificationsApi~addNotificationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/NotificationResponse}
   */


  _createClass(NotificationsApi, [{
    key: 'addNotification',
    value: function addNotification(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _NotificationResponse2.default;

      return this.apiClient.callApi('/notifications', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteNotificationById operation.
     * @callback module:api/NotificationsApi~deleteNotificationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a notification
     * Deletes a notification. Note that deleting a notification _only_ deletes the notification &amp;ndash; it does not delete any underlying files or folders.  **Notes:**  - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification. - You can only delete notifications owned by your user account.
     * @param {module:api/NotificationsApi~deleteNotificationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: 'deleteNotificationById',
    value: function deleteNotificationById(evApiKey, evAccessToken, id, callback) {
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

      return this.apiClient.callApi('/notifications/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getNotificationById operation.
     * @callback module:api/NotificationsApi~getNotificationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get notification details
     * Get the details for a notification with a specific ID number. You&#x27;ll be able to review its path, triggers and who&#x27;s getting the notification.   **Notes**  - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification. - You can only retrieve notifications owned by your user account.
     * @param {Object} opts Optional parameters
     * @param {module:api/NotificationsApi~getNotificationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationResponse}
     */

  }, {
    key: 'getNotificationById',
    value: function getNotificationById(evApiKey, evAccessToken, id, opts, callback) {
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
      var returnType = _NotificationResponse2.default;

      return this.apiClient.callApi('/notifications/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the listNotifications operation.
     * @callback module:api/NotificationsApi~listNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of notifications
     * Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.  **Notes:**   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)
     * @param {Object} opts Optional parameters
     * @param {module:api/NotificationsApi~listNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationCollectionResponse}
     */

  }, {
    key: 'listNotifications',
    value: function listNotifications(evApiKey, evAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'type': opts['type'],
        'offset': opts['offset'],
        'sort': opts['sort'],
        'limit': opts['limit'],
        'include': opts['include'],
        'action': opts['action']
      };
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NotificationCollectionResponse2.default;

      return this.apiClient.callApi('/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateNotificationById operation.
     * @callback module:api/NotificationsApi~updateNotificationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a notification
     * Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger.   When updating recipient emails, make sure your &#x60;recipients&#x60; parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails.   **Notes:**  - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification. - You can only change notifications owned by your user account.
     * @param {Object} opts Optional parameters
     * @param {module:api/NotificationsApi~updateNotificationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationResponse}
     */

  }, {
    key: 'updateNotificationById',
    value: function updateNotificationById(evApiKey, evAccessToken, id, opts, callback) {
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
      var returnType = _NotificationResponse2.default;

      return this.apiClient.callApi('/notifications/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return NotificationsApi;
}();

exports.default = NotificationsApi;