/**
 * ExaVault API
 * # Introduction  Welcome to the ExaVault API documentation. Our API lets you control nearly all aspects of your ExaVault account programatically, from uploading and downloading files to creating and managing shares and notifications. Our API supports both GET and POST operations.  Capabilities of the API include:  - Uploading and downloading files. - Managing files and folders; including standard operations like move, copy and delete. - Getting information about activity occuring in your account. - Creating, updating and deleting users. - Creating and managing shares, including download-only shares and recieve folders.  - Setting up and managing notifications.  ## The API Endpoint  The ExaVault API is located at: https://api.exavault.com/v1/  # Testing w/ Postman  We've made it easy for you to test our API before you start full-scale development. Download [Postman](https://www.getpostman.com/) or the [Postman Chrome Extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en), and then download our Postman collection, below. [Obtain your API key](#section/Code-Libraries-and-Sample-PHP-Code/Obtain-your-API-key) and you'll be able to interact with your ExaVault account immediately, so you can better understand what the capabilities of the API are.  <div class=\"postman-run-button\" data-postman-action=\"collection/import\" data-postman-var-1=\"e13395afc6278ce1555f\"></div>  ![ExaVault API Postman Colletion Usage](/images/postman.png)  If you'd prefer to skip Postman and start working with code directly, take a look at the sample code below.    # Code Libraries & Sample PHP Code  Once you're ready for full-scale development, we recommend looking at our code libraries available on [GitHub](https://github.com/ExaVault). We offer code libraries for [Python](https://github.com/ExaVault/evapi-python), [PHP](https://github.com/ExaVault/evapi-php) and [JavaScript](https://github.com/ExaVault/evapi-javascript).  While we recommend using our libraries, you're welcome to interact directly with our API via HTTP GET and POST requests -- a great option particularly if you're developing in a language for which we don't yet have sample code.     - [Download Python Library &amp; Sample Code &raquo;](https://github.com/ExaVault/evapi-python) - [Download PHP Library &amp; Sample Code &raquo;](https://github.com/ExaVault/evapi-php) - [Download JavaScript Library &amp; Sample Code &raquo;](https://github.com/ExaVault/evapi-javascript)  *Note: You can generate client libraries for any language using [Swagger Editor](http://editor2.swagger.io/). Just download our documentation file, past it into editor and use 'Generate Client' dropdown.*  ## Obtain Your API Key  You will need to obtain an API key for your application from the [Client Area](https://clients.exavault.com/clientarea.php?action=products) of your account.  To obtain an API key, please follow the instructions below.   + Login to the [Accounts](https://clients.exavault.com/clientarea.php?action=products) section of the Client Area.  + Use the drop down next to your desired account, and select *Manage API Keys*.  + You will be brought to the API Key management screen. Fill out the form and save to generate a new key for your app.  *NOTE: As of Oct 2017, we are in the progress of migrating customers to our next generation platform. If your account is already on our new platform, you should log into your File Manager and create your API key under Account->Developer->Manage API Keys*.  # Status Codes  The ExaVault API returns only two HTTP status codes for its responses: 200 and 500.  When the request could be successfully processed by the endpoint, the response status code will be 200, regardless of whether the requested action could be taken.  For example, the response to a getUser request for a username that does not exist in your account would have the status of 200,  indicating that the response was received and processed, but the error member of the returned response object would contain object with `message` and `code` properties.  **Result Format:**  |Success   | Error     | Results   | | ---      | :---:       |  :---:      | | 0        |  `Object` |   Empty   | | 1        |   Empty       |    `Object` or `Array`        |     When a malformed request is received, a 500 HTTP status code will be returned, indicating that the request could not be processed.  ExaVault's API does not currently support traditional REST response codes such as '201 Created' or '405 Method Not Allowed', although we intend to support such codes a future version of the API.   # File Paths  Many API calls require you to provide one or more file paths. For example, the <a href=\"#operation/moveResources\">moveResources</a> call requires both an array of source paths, **filePaths**, and a destination path, **destinationPath**. Here's a few tips for working with paths:   - File paths should always be specified as a string, using the standard Unix format: e.g. `/path/to/a/file.txt`  - File paths are always absolute _from the home directory of the logged in user_. For example, if the user **bob** had a home directory restriction of `/bob_home`, then an API call made using his login would specify a file as `/myfile.txt`, whereas an API call made using the master user ( no home directory restriction ) would specify the same file as `/bob_home/myfile.txt`.  # API Rate Limits  We rate limit the number of API calls you can make to help prevent abuse and protect system stablity. Each API key will support 500 requests per rolling five minutes. If you make more than 500 requests in a five minute period, you will receive a response with an error object for fifteen minutes.  # Webhooks  A webhook is an HTTP callback: a simple event-notification via HTTP POST. If you define webhooks for Exavault, ExaVault will POST a  message to a URL when certain things happen.     Webhooks can be used to receive a JSON object to your endpoint URL. You choose what events will trigger webhook messages to your endpoint URL.     Webhooks will attempt to send a message up to 8 times with increasing timeouts between each attempt. All webhook requests are tracked in the webhooks log.  ## Getting Started  1. Go to the Account tab inside SWFT.  2. Choose the Developer tab.  3. Configure your endpoint URL and select the events you want to trigger webhook messages.  4. Save settings.    You are all set to receive webhook callbacks on the events you selected.  ## Verification Signature  ExaVault includes a custom HTTP header, X-Exavault-Signature, with webhooks POST requests which will contain the signature for the request.  You can use the signature to verify the request for an additional level of security.  ## Generating the Signature  1. Go to Account tab inside SWFT.  2. Choose the Developer tab.  3. Obtain the verification token. This field will only be shown if you've configured your endpoint URL.  4. In your code that receives or processes the webhooks, you should concatenate the verification token with the JSON object that we sent in our      POST request and hash it with md5.     ```     md5($verificationToken.$webhooksObject);     ```  5. Compare signature that you generated to the signature provided in the X-Exavault-Signature HTTP header  ## Example JSON Response Object  ```json   {     \"accountname\": \"mycompanyname\",     \"username\": \"john\"     \"operation\": \"Upload\",     \"protocol\": \"https\",     \"path\": \"/testfolder/filename.jpg\"     \"attempt\": 1   } ```  ## Webhooks Logs  Keep track of all your webhooks requests in the Activity section of your account. You can find the following info for each request:    1. date and time - timestamp of the request.    2. endpoint url - where the webhook was sent.    3. event - what triggered the webhook.    4. status - HTTP status or curl error code.    5. attempt - how many times we tried to send this request.    6. response size - size of the response from your server.    7. details - you can check the response body if it was sent. 
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LogResponse', 'model/NotificationActivityResponse', 'model/ShareActivityResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LogResponse'), require('../model/NotificationActivityResponse'), require('../model/ShareActivityResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ExaVaultApi) {
      root.ExaVaultApi = {};
    }
    root.ExaVaultApi.ActivityApi = factory(root.ExaVaultApi.ApiClient, root.ExaVaultApi.LogResponse, root.ExaVaultApi.NotificationActivityResponse, root.ExaVaultApi.ShareActivityResponse);
  }
}(this, function(ApiClient, LogResponse, NotificationActivityResponse, ShareActivityResponse) {
  'use strict';

  /**
   * Activity service.
   * @module api/ActivityApi
   * @version 1.0.1
   */

  /**
   * Constructs a new ActivityApi. 
   * @alias module:api/ActivityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getFileActivityLogs operation.
     * @callback module:api/ActivityApi~getFileActivityLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getFileActivityLogs
     * Get the activity log from your account. Activity logs contain information on all operations in your account &amp;ndash; connecting, uploading and downloading files, sharing, setting up notifications, and more. You can use different filter and sorting options to get the exact data you need.  **Notes:**  - The authenticated user&#39;s role must be admin or master in order to pull activity logs. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Starting record in the result set. Can be used for pagination.
     * @param {module:model/String} opts.sortBy Sort method. (default to sort_logs_date)
     * @param {module:model/String} opts.sortOrder Sort order. (default to desc)
     * @param {module:model/String} opts.filterBy Field to search on
     * @param {String} opts.filter Search criteria. For date ranges, use format &#39;start_date::end_date&#39;.
     * @param {Number} opts.itemLimit Number of logs to return. Can be used for pagination. (default to 25)
     * @param {module:api/ActivityApi~getFileActivityLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogResponse}
     */
    this.getFileActivityLogs = function(apiKey, accessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getFileActivityLogs");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFileActivityLogs");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'offset': opts['offset'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterBy': opts['filterBy'],
        'filter': opts['filter'],
        'itemLimit': opts['itemLimit']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LogResponse;

      return this.apiClient.callApi(
        '/getFileActivityLogs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNotificationActivity operation.
     * @callback module:api/ActivityApi~getNotificationActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationActivityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getNotificationActivity
     * Get all notification messages for the authenticated user. Notification messages are only recorded if a notification has been setup for a folder, and an action is taken (e.g. a file upload) in the given folder.
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {module:api/ActivityApi~getNotificationActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationActivityResponse}
     */
    this.getNotificationActivity = function(apiKey, accessToken, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getNotificationActivity");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getNotificationActivity");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotificationActivityResponse;

      return this.apiClient.callApi(
        '/getNotificationActivity', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShareActivity operation.
     * @callback module:api/ActivityApi~getShareActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareActivityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getShareActivity
     * Get all share activity for the specified share ID. Share activity includes anything which happened on the share in question &amp;ndash; for example, a user being invited or a user connecting and downloading files.  **Notes:**  - Authenticated user must be the owner of the specified share. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {Number} id ID of the share. Use &lt;a href&#x3D;\&quot;#operation/getShares\&quot;&gt;getShares&lt;/a&gt; if you need to lookup an ID.
     * @param {module:api/ActivityApi~getShareActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareActivityResponse}
     */
    this.getShareActivity = function(apiKey, accessToken, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getShareActivity");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getShareActivity");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getShareActivity");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'id': id
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ShareActivityResponse;

      return this.apiClient.callApi(
        '/getShareActivity', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
