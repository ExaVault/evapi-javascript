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

var _SessionActivityResponse = require('../model/SessionActivityResponse');

var _SessionActivityResponse2 = _interopRequireDefault(_SessionActivityResponse);

var _WebhookActivityResponse = require('../model/WebhookActivityResponse');

var _WebhookActivityResponse2 = _interopRequireDefault(_WebhookActivityResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Activity service.
* @module api/ActivityApi
* @version 2.2.5
*/
var ActivityApi = function () {

  /**
  * Constructs a new ActivityApi. 
  * @alias module:api/ActivityApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActivityApi(apiClient) {
    _classCallCheck(this, ActivityApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the getSessionLogs operation.
   * @callback module:api/ActivityApi~getSessionLogsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SessionActivityResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get activity logs
   * Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges.   **NOTE:** Total Results will always return as 0 to avoid quering data you&#x27;re not using and stay as performant as possible.     **Operation Types** Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:  | File Manager Value | API Value | Notes | |-----|----|---| | Connect | PASS | | | Disconnect | EXIT | | | Upload | STOR | | | Download | RETR | | | Delete | DELE | | | Create Folder | MKD | | | Rename | RNTO | | | Move | MOVE | | | Copy | COPY | | | Compress | COMPR | | | Extract | EXTRACT | | | Shared Folders | SHARE | | | Send Files | SEND | | | Receive Files | RECV | | | _N/A_ | EDIT\\_SEND | Update send. Not shown in file manager | | Update Share | EDIT\\_SHARE| |  | Update Receive | EDIT\\_RECV | | | Delete Send | DELE\\_SEND | | | Delete Receive | DELE\\_RECV | | | Delete Share | DELE\\_SHARE | | | Create Notification | NOTIFY | | | Update Notification | EDIT\\_NTFY| | | Delete Notification | DELE\\_NTFY | | | Create User | USER | | | Update User | EDIT\\_USER | | | Delete User | DELE\\_USER | | | _N/A_ | DFA | Create direct link. Not shown in file manager | | _N/A_ | EDIT\\_DFA | Update direct link options. Not shown in file manager | | _N/A_ | DELE\\_DFA | Deactivate direct link. Not shown in file manager| 
   * @param {Object} opts Optional parameters
   * @param {module:api/ActivityApi~getSessionLogsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SessionActivityResponse}
   */


  _createClass(ActivityApi, [{
    key: 'getSessionLogs',
    value: function getSessionLogs(evApiKey, evAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'ipAddress': opts['ipAddress'],
        'username': opts['username'],
        'path': opts['path'],
        'type': opts['type'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort']
      };
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SessionActivityResponse2.default;

      return this.apiClient.callApi('/activity/session', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getWebhookLogs operation.
     * @callback module:api/ActivityApi~getWebhookLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookActivityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get webhook logs
     * Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.  **NOTE:** Total Results will always return as 0 to avoid querying data you&#x27;re not using and stay as performant as possible.   **Event Types**  Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:  - resources.upload - resources.download - resources.delete - resources.createFolder - resources.rename - resources.move - resources.copy - resources.compress - resources.extract - shares.formSubmit 
     * @param {Object} opts Optional parameters
     * @param {module:api/ActivityApi~getWebhookLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookActivityResponse}
     */

  }, {
    key: 'getWebhookLogs',
    value: function getWebhookLogs(evApiKey, evAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'endpointUrl': opts['endpointUrl'],
        'event': opts['event'],
        'statusCode': opts['statusCode'],
        'resourcePath': opts['resourcePath'],
        'username': opts['username'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort']
      };
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookActivityResponse2.default;

      return this.apiClient.callApi('/activity/webhooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ActivityApi;
}();

exports.default = ActivityApi;