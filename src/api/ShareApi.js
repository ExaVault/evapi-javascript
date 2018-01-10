/**
 * ExaVault API
 * # Introduction  Welcome to the ExaVault API documentation. Our API lets you control nearly all aspects of your ExaVault account programatically, from uploading and downloading files to creating and managing shares and notifications. Our API supports both GET and POST operations.  Capabilities of the API include:  - Uploading and downloading files. - Managing files and folders; including standard operations like move, copy and delete. - Getting information about activity occuring in your account. - Creating, updating and deleting users. - Creating and managing shares, including download-only shares and recieve folders.  - Setting up and managing notifications.  ## The API Endpoint  The ExaVault API is located at: https://api.exavault.com/v1/  # Testing w/ Postman  We've made it easy for you to test our API before you start full-scale development. Download [Postman](https://www.getpostman.com/) or the [Postman Chrome Extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en), and then download our Postman collection, below. [Obtain your API key](#section/Code-Libraries-and-Sample-PHP-Code/Obtain-your-API-key) and you'll be able to interact with your ExaVault account immediately, so you can better understand what the capabilities of the API are.  <div class=\"postman-run-button\" data-postman-action=\"collection/import\" data-postman-var-1=\"e13395afc6278ce1555f\"></div>  ![ExaVault API Postman Colletion Usage](/images/postman.png)  If you'd prefer to skip Postman and start working with code directly, take a look at the sample code below.    # Code Libraries & Sample PHP Code  Once you're ready for full-scale development, we recommend looking at our code libraries available on [GitHub](https://github.com/ExaVault). We offer code libraries for [Python](https://github.com/ExaVault/evapi-python) and [PHP](https://github.com/ExaVault/evapi-php).  While we recommend using our libraries, you're welcome to interact directly with our API via HTTP GET and POST requests -- a great option particularly if you're developing in a language for which we don't yet have sample code.     - [Download Python Libraries &raquo;](https://github.com/ExaVault/evapi-python) - [Download PHP Libraries &raquo;](https://github.com/ExaVault/evapi-php)  *Note: You can generate client libraries for any language using [Swagger Editor](http://editor2.swagger.io/). Just download our documentation file, past it into editor and use 'Generate Client' dropdown.*  ## Obtain your API key  You will need to obtain an API key for your application from the [Client Area](https://clients.exavault.com/clientarea.php?action=products) of your account.  To obtain an API key, please follow the instructions below.   + Login to the [Accounts](https://clients.exavault.com/clientarea.php?action=products) section of the Client Area.  + Use the drop down next to your desired account, and select *Manage API Keys*.  + You will be brought to the API Key management screen. Fill out the form and save to generate a new key for your app.  *NOTE: As of Oct 2017, we are in the progress of migrating customers to our next generation platform. If your account is already on our new platform, you should log into your File Manager and create your API key under Account->Developer->Manage API Keys*.  ## Example snippet  Once you obtain your API you can use the following snippet. It will allow you to authenticate into API, create folder, get activity logs and log out user from the API.  ```php <?php require_once('/path/to/evapi-php/autoload.php');  #authenticateUser  $authentication_api_instance = new Swagger\\Client\\Api\\AuthenticationApi(); $api_key = 'your_api_key_goe_here';  $username = 'existing_username_goes_here'; $password = 'user_password_goes_here';   try {    $response = $authentication_api_instance->authenticateUser($api_key, array('username' => $username, 'password' => $password));   $loginSuccess = $response['success'];    if ($loginSuccess) {     $accessToken = $response['results']['access_token'];   } else {     // something went wrong check $response['error'] for more details   }  } catch (Exception $e) {     // server error occured     echo 'Exception when calling AuthenticationApi->authenticateUser: ', $e->getMessage(), PHP_EOL; }  #createFolder  $files_folders_api_instance = new Swagger\\Client\\Api\\FilesAndFoldersApi(); $folderName = 'desire_folder_name_goes_here'; $path = '/';  try{    $response = $files_folders_api_instance->createFolder($api_key, array('access_token' => $accessToken, 'folderName' =>  $folderName, 'path' => $path'));   $createSuccess = $response['success'];    if ($createSuccess) {     // Folder created successfully   }   else{     // something went wrong check $response['error'] for more details   }  } catch (Exception $e) {     // server error occured     echo 'Exception when calling FilesAndFoldersApi->createFolder: ', $e->getMessage(), PHP_EOL; }  #getAcitivityLogs  $activity_api_instance = new Swagger\\Client\\Api\\ActivityApi(); $offset = 0; $sort_by = \"sort_logs_date\";  $sort_order = \"desc\";   try {    $response = $api_instance->getFileActivityLogs($api_key, $access_token, $offset, $sort_by, $sort_order, $filter_by, $filter, $item_limit);   $getActivitySuccess = $response['success'];     if ($getActivitySuccess) {     // Geat array with log entries     $activityLogs = $response['results'];   }   else{     // something went wrong check $response['error'] for more details   }  } catch (Exception $e) {     echo 'Exception when calling ActivityApi->getFileActivityLogs: ', $e->getMessage(), PHP_EOL; }  # To logout the current user, simply check the $loginSuccess flag that was stored earlier and then call the `logoutUser` method if ($loginSuccess) {   $authentication_api_instance->logoutUser($api_key, array('access_token' => accessToken)); }  ?> ```  # Status Codes  The ExaVault API returns only two HTTP status codes for its responses: 200 and 500.  When the request could be successfully processed by the endpoint, the response status code will be 200, regardless of whether the requested action could be taken.  For example, the response to a getUser request for a username that does not exist in your account would have the status of 200,  indicating that the response was received and processed, but the error member of the returned response object would contain object with `message` and `code` properties.  **Result Format:**  |Success   | Error     | Results   | | ---      | :---:       |  :---:      | | 0        |  `Object` |   Empty   | | 1        |   Empty       |    `Object` or `Array`        |     When a malformed request is received, a 500 HTTP status code will be returned, indicating that the request could not be processed.  ExaVault's API does not currently support traditional REST response codes such as '201 Created' or '405 Method Not Allowed', although we intend to support such codes a future version of the API.   # File Paths  Many API calls require you to provide one or more file paths. For example, the <a href=\"#operation/moveResources\">moveResources</a> call requires both an array of source paths, **filePaths**, and a destination path, **destinationPath**. Here's a few tips for working with paths:   - File paths should always be specified as a string, using the standard Unix format: e.g. `/path/to/a/file.txt`  - File paths are always absolute _from the home directory of the logged in user_. For example, if the user **bob** had a home directory restriction of `/bob_home`, then an API call made using his login would specify a file as `/myfile.txt`, whereas an API call made using the master user ( no home directory restriction ) would specify the same file as `/bob_home/myfile.txt`.  # API Rate Limits  We rate limit the number of API calls you can make to help prevent abuse and protect system stablity. Each API key will support 500 requests per rolling five minutes. If you make more than 500 requests in a five minute period, you will receive a response with an error object for fifteen minutes.  # Webhooks  A webhook is an HTTP callback: a simple event-notification via HTTP POST. If you define webhooks for Exavault, ExaVault will POST a  message to a URL when certain things happen.     Webhooks can be used to receive a JSON object to your endpoint URL. You choose what events will trigger webhook messages to your endpoint URL.     Webhooks will attempt to send a message up to 8 times with increasing timeouts between each attempt. All webhook requests are tracked in the webhooks log.  ## Getting started  1. Go to the Account tab inside SWFT.  2. Choose the Developer tab.  3. Configure your endpoint URL and select the events you want to trigger webhook messages.  4. Save settings.    You are all set to receive webhook callbacks on the events you selected.  ## Verification Signature  ExaVault includes a custom HTTP header, X-Exavault-Signature, with webhooks POST requests which will contain the signature for the request.  You can use the signature to verify the request for an additional level of security.  ## Generating the Signature  1. Go to Account tab inside SWFT.  2. Choose the Developer tab.  3. Obtain the verification token. This field will only be shown if you've configured your endpoint URL.  4. In your code that receives or processes the webhooks, you should concatenate the verification token with the JSON object that we sent in our      POST request and hash it with md5.     ```     md5($verificationToken.$webhooksObject);     ```  5. Compare signature that you generated to the signature provided in the X-Exavault-Signature HTTP header  ## Example JSON Response Object  ```json   {     \"accountname\": \"mycompanyname\",     \"username\": \"john\"     \"operation\": \"Upload\",     \"protocol\": \"https\",     \"path\": \"/testfolder/filename.jpg\"     \"attempt\": 1   } ```  ## Webhooks Logs  Keep track of all your webhooks requests in the Activity section of your account. You can find the following info for each request:    1. date and time - timestamp of the request.    2. endpoint url - where the webhook was sent.    3. event - what triggered the webhook.    4. status - HTTP status or curl error code.    5. attempt - how many times we tried to send this request.    6. response size - size of the response from your server.    7. details - you can check the response body if it was sent. 
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
    define(['ApiClient', 'model/CreateShare', 'model/Response', 'model/ShareResponse', 'model/SharesResponse', 'model/UpdateShare'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateShare'), require('../model/Response'), require('../model/ShareResponse'), require('../model/SharesResponse'), require('../model/UpdateShare'));
  } else {
    // Browser globals (root is window)
    if (!root.ExaVaultApi) {
      root.ExaVaultApi = {};
    }
    root.ExaVaultApi.ShareApi = factory(root.ExaVaultApi.ApiClient, root.ExaVaultApi.CreateShare, root.ExaVaultApi.Response, root.ExaVaultApi.ShareResponse, root.ExaVaultApi.SharesResponse, root.ExaVaultApi.UpdateShare);
  }
}(this, function(ApiClient, CreateShare, Response, ShareResponse, SharesResponse, UpdateShare) {
  'use strict';

  /**
   * Share service.
   * @module api/ShareApi
   * @version 1.0.1
   */

  /**
   * Constructs a new ShareApi. 
   * @alias module:api/ShareApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createShare operation.
     * @callback module:api/ShareApi~createShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createShare
     * Creates a new share object for the given path in your account. We support three types of shares:   - A **shared folder** allows you to let outside parties access a folder in your account (including any files and nested subfolders) using just a link. Shared folders can be restricted; e.g. with an expiration date, password, download-only, etc. Shared folders are &#39;live&#39;; if someone makes a change to a file in your shared folder, it will be immediately reflected in your account, and vice-versa.   - A **file send** lets you send one or more files via an easy download link. File sends are different than shared folders because file sends are &#39;point in time&#39; -- the recipient will get the files as you sent them. If you later make a change to the source file, it will not be updated for the recipient.   - A **recieve folder** lets you recieve files into your account. You can either send users a link, or optionally drop an upload widget on your website.   **Notes:** - Authenticated user requires share permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateShare} opts.createShare 
     * @param {module:api/ShareApi~createShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareResponse}
     */
    this.createShare = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = {};

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createShare");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = opts;

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = ShareResponse;

      return this.apiClient.callApi(
        '/createShare', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteShare operation.
     * @callback module:api/ShareApi~deleteShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteShare
     * Delete a share. Deleting a share does not remove the underlying files for &#x60;shared_folder&#x60; and &#x60;recieve&#x60; share types; it merely removes the access URL. Delating a &#x60;send&#x60; share type does remove the associated files, as files that have been sent are _only_ associated with the share, and aren&#39;t stored anywhere else in the account. &gt; **Notes:**  - Authenticated user&#39;s role must be admin or master, or user must be the owner of the specified share.  
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {Number} id ID of the share to delete. Use &lt;a href&#x3D;\&quot;#operation/getShares\&quot;&gt;getShares&lt;/a&gt; if you need to lookup an ID.
     * @param {module:api/ShareApi~deleteShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    this.deleteShare = function(apiKey, accessToken, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling deleteShare");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling deleteShare");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteShare");
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
      var returnType = Response;

      return this.apiClient.callApi(
        '/deleteShare', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShare operation.
     * @callback module:api/ShareApi~getShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getShare
     * Returns a share object specified by a given share ID.   **Notes:** - Authenticated user should be the owner of the specified share. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {Number} id ID of the requested share. Note this is our internal ID, not the share hash. Use &lt;a href&#x3D;\&quot;#operation/getShares\&quot;&gt;getShares&lt;/a&gt; if you need to lookup an ID.
     * @param {module:api/ShareApi~getShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareResponse}
     */
    this.getShare = function(apiKey, accessToken, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getShare");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getShare");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getShare");
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
      var returnType = ShareResponse;

      return this.apiClient.callApi(
        '/getShare', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShares operation.
     * @callback module:api/ShareApi~getSharesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SharesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getShares
     * Returns array of all share objects that the authenticated user has access to. Sorting and filtering options allow you to limit the returned list.  **Notes:**  - Authenticated user requires share permission.  - To get share objects with type &#x60;send&#x60;, authenticated user&#39;s role must be admin or master. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {module:model/String} sortBy Sort method.
     * @param {module:model/String} sortOrder Sort order.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The type of share to return. If no argument specified, will return all shares of all types.
     * @param {String} opts.filter Filter by the provided search terms.
     * @param {module:model/String} opts.include Filter returned shares. You can get all shares in the account, only active ones or shares you own. (default to all)
     * @param {Number} opts.offset Start position of results to return, for pagination. Defaults to zero (0).
     * @param {Number} opts.limit Maximum number of shares to return.
     * @param {module:api/ShareApi~getSharesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SharesResponse}
     */
    this.getShares = function(apiKey, accessToken, sortBy, sortOrder, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getShares");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getShares");
      }

      // verify the required parameter 'sortBy' is set
      if (sortBy === undefined || sortBy === null) {
        throw new Error("Missing the required parameter 'sortBy' when calling getShares");
      }

      // verify the required parameter 'sortOrder' is set
      if (sortOrder === undefined || sortOrder === null) {
        throw new Error("Missing the required parameter 'sortOrder' when calling getShares");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'type': opts['type'],
        'sortBy': sortBy,
        'sortOrder': sortOrder,
        'filter': opts['filter'],
        'include': opts['include'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SharesResponse;

      return this.apiClient.callApi(
        '/getShares', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateShare operation.
     * @callback module:api/ShareApi~updateShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateShare
     * Update an existing share object by specified ID. Note that it is not possible to change the type of share once it has been created; if you need to (for example) convert a shared folder to a recieve folder, you must first delete the shared folder and then create a new recieve folder.  **Notes:** - Authenticated user&#39;s role must be admin or master, or the authenticated user must be the owner of the specified share. 
     * @param {String} apiKey API key required to make the API call.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateShare} opts.updateShare 
     * @param {module:api/ShareApi~updateShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    this.updateShare = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = {};

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling updateShare");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = opts;

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Response;

      return this.apiClient.callApi(
        '/updateShare', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
