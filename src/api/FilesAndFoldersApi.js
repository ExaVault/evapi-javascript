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
    define(['ApiClient', 'model/CopyResources', 'model/CreateFolder', 'model/DeletedResourcesResponse', 'model/ExistingResourcesResponse', 'model/ModifiedResourcesResponse', 'model/MoveResources', 'model/PreviewFileResponse', 'model/RenameResources', 'model/ResourcePropertiesResponse', 'model/ResourceResponse', 'model/Response', 'model/UrlResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CopyResources'), require('../model/CreateFolder'), require('../model/DeletedResourcesResponse'), require('../model/ExistingResourcesResponse'), require('../model/ModifiedResourcesResponse'), require('../model/MoveResources'), require('../model/PreviewFileResponse'), require('../model/RenameResources'), require('../model/ResourcePropertiesResponse'), require('../model/ResourceResponse'), require('../model/Response'), require('../model/UrlResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ExaVaultApi) {
      root.ExaVaultApi = {};
    }
    root.ExaVaultApi.FilesAndFoldersApi = factory(root.ExaVaultApi.ApiClient, root.ExaVaultApi.CopyResources, root.ExaVaultApi.CreateFolder, root.ExaVaultApi.DeletedResourcesResponse, root.ExaVaultApi.ExistingResourcesResponse, root.ExaVaultApi.ModifiedResourcesResponse, root.ExaVaultApi.MoveResources, root.ExaVaultApi.PreviewFileResponse, root.ExaVaultApi.RenameResources, root.ExaVaultApi.ResourcePropertiesResponse, root.ExaVaultApi.ResourceResponse, root.ExaVaultApi.Response, root.ExaVaultApi.UrlResponse);
  }
}(this, function(ApiClient, CopyResources, CreateFolder, DeletedResourcesResponse, ExistingResourcesResponse, ModifiedResourcesResponse, MoveResources, PreviewFileResponse, RenameResources, ResourcePropertiesResponse, ResourceResponse, Response, UrlResponse) {
  'use strict';

  /**
   * FilesAndFolders service.
   * @module api/FilesAndFoldersApi
   * @version 1.0.1
   */

  /**
   * Constructs a new FilesAndFoldersApi. 
   * @alias module:api/FilesAndFoldersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkFilesExist operation.
     * @callback module:api/FilesAndFoldersApi~checkFilesExistCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExistingResourcesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * checkFilesExist
     * Check if any of the file/folder paths in the input array exist in your account. This is particularly useful if you are uploading files and want to present the user with a dialog asking them if they want to overwrite existing files, as the &lt;a href&#x3D;\&quot;#operation/getUploadFileUrl\&quot;&gt;getUploadFileUrl&lt;/a&gt; call overwrites files by default.
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {Array.<String>} filePaths Array containing file/folder paths to check.
     * @param {module:api/FilesAndFoldersApi~checkFilesExistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExistingResourcesResponse}
     */
    this.checkFilesExist = function(apiKey, accessToken, filePaths, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling checkFilesExist");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling checkFilesExist");
      }

      // verify the required parameter 'filePaths' is set
      if (filePaths === undefined || filePaths === null) {
        throw new Error("Missing the required parameter 'filePaths' when calling checkFilesExist");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'filePaths[]': this.apiClient.buildCollectionParam(filePaths, 'multi')
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ExistingResourcesResponse;

      return this.apiClient.callApi(
        '/checkFilesExist', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the copyResources operation.
     * @callback module:api/FilesAndFoldersApi~copyResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModifiedResourcesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * copyResources
     * Copies a set of exisiting files/folders (provided by an array **filePaths**) to the requested **destinationPath** in your account. In the **filePaths** array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the  root of the **destinationPath**.  **Notes:** - Authenticated user should have modify permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {Object} opts Optional parameters
     * @param {module:model/CopyResources} opts.copyResources 
     * @param {module:api/FilesAndFoldersApi~copyResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModifiedResourcesResponse}
     */
    this.copyResources = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = {};

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling copyResources");
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
      var returnType = ModifiedResourcesResponse;

      return this.apiClient.callApi(
        '/copyResources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createFolder operation.
     * @callback module:api/FilesAndFoldersApi~createFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createFolder
     * Create a new folder at the specified path. &gt; **Notes:** - Authenticated user should have modify permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateFolder} opts.createFolder 
     * @param {module:api/FilesAndFoldersApi~createFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    this.createFolder = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = {};

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createFolder");
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
        '/createFolder', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteResources operation.
     * @callback module:api/FilesAndFoldersApi~deleteResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeletedResourcesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteResources
     * Delete the files/folders located at a given set of paths. Note that this call performs the delete **immediately**, and it is irreversible. We strongly recommend that you confirm your user&#39;s intention to delete file(s) before issuing this API call.  **Notes:** - Authenticated user should have delete permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {Array.<String>} filePaths Array containing paths of the files or folder to delete.
     * @param {module:api/FilesAndFoldersApi~deleteResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeletedResourcesResponse}
     */
    this.deleteResources = function(apiKey, accessToken, filePaths, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling deleteResources");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling deleteResources");
      }

      // verify the required parameter 'filePaths' is set
      if (filePaths === undefined || filePaths === null) {
        throw new Error("Missing the required parameter 'filePaths' when calling deleteResources");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'filePaths[]': this.apiClient.buildCollectionParam(filePaths, 'multi')
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeletedResourcesResponse;

      return this.apiClient.callApi(
        '/deleteResources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDownloadFileUrl operation.
     * @callback module:api/FilesAndFoldersApi~getDownloadFileUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getDownloadFileUrl
     * Returns an unique URL for a file download.  To download a file from ExaVault, you first request a download URL from our API using this API call. You then make an HTTP GET request to get the actual file contents using the download URL. The download URL will contain a link to an ExaVault storage server where the file is located, and a unique access token &amp;ndash; valid for only one use and thirty (30) seconds &amp;ndash; which allows you to download the file.  **Notes:** - Authenticated user should have download permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {String} filePaths Path of file to be downloaded.
     * @param {Object} opts Optional parameters
     * @param {String} opts.downloadName The name of the file to be downloaded.
     * @param {module:api/FilesAndFoldersApi~getDownloadFileUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UrlResponse}
     */
    this.getDownloadFileUrl = function(apiKey, accessToken, filePaths, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getDownloadFileUrl");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getDownloadFileUrl");
      }

      // verify the required parameter 'filePaths' is set
      if (filePaths === undefined || filePaths === null) {
        throw new Error("Missing the required parameter 'filePaths' when calling getDownloadFileUrl");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'filePaths': filePaths,
        'downloadName': opts['downloadName']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UrlResponse;

      return this.apiClient.callApi(
        '/getDownloadFileUrl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolders operation.
     * @callback module:api/FilesAndFoldersApi~getFoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourcePropertiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getFolders
     * Gets the list of folder objects for a specified path. This is similar to &lt;a href&#x3D;\&quot;#operation/getResourceList\&quot;&gt;getResourceList&lt;/a&gt;, but returns only folders and is simpler and more perfomrant if you only need to get a list of folders at a given path. &gt; **Notes:** - Authenticated user should have list permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {String} path Path to get folders for.
     * @param {module:api/FilesAndFoldersApi~getFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourcePropertiesResponse}
     */
    this.getFolders = function(apiKey, accessToken, path, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getFolders");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFolders");
      }

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getFolders");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'path': path
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ResourcePropertiesResponse;

      return this.apiClient.callApi(
        '/getFolders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getResourceList operation.
     * @callback module:api/FilesAndFoldersApi~getResourceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getResourceList
     * Get a listing of files/folders for the specified path.   You can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional &#39;detailed&#39; parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user&#39;s home directory (e.g. &#x60;/myfiles/some_folder&#x60;).  **Notes:** - Authenticated user should have list permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {String} path Path to get listing of resources for.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sortBy Sort method. Use in conjunction with **sort_order**, below. (default to sort_files_name)
     * @param {module:model/String} opts.sortOrder Sort order. (default to asc)
     * @param {Number} opts.offset Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. (default to 0)
     * @param {Number} opts.limit The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls to **getResourceList**, incrementing the **offset** parameter, above. (default to 50)
     * @param {Boolean} opts.detailed If true, returns sharedFolder, notifications or other objects associated with specified path. You should only set this paramter to true if you need the additional details, as the API call is less perfomant when it is enabled. (default to false)
     * @param {String} opts.pattern Regex string. If not null, perform a search with specified pattern.
     * @param {module:api/FilesAndFoldersApi~getResourceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceResponse}
     */
    this.getResourceList = function(apiKey, accessToken, path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getResourceList");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getResourceList");
      }

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getResourceList");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'path': path,
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'detailed': opts['detailed'],
        'pattern': opts['pattern']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ResourceResponse;

      return this.apiClient.callApi(
        '/getResourceList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getResourceProperties operation.
     * @callback module:api/FilesAndFoldersApi~getResourcePropertiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourcePropertiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getResourceProperties
     * Gets metadata for each of the specified file/folder paths, including things like upload date, size and type. For the full list of returned properties, see the response syntax, below. &gt; **Notes:** - Authenticated user should have list permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {Array.<String>} filePaths Array containing paths of the files or folder to get metadata for.
     * @param {module:api/FilesAndFoldersApi~getResourcePropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourcePropertiesResponse}
     */
    this.getResourceProperties = function(apiKey, accessToken, filePaths, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getResourceProperties");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getResourceProperties");
      }

      // verify the required parameter 'filePaths' is set
      if (filePaths === undefined || filePaths === null) {
        throw new Error("Missing the required parameter 'filePaths' when calling getResourceProperties");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'filePaths[]': this.apiClient.buildCollectionParam(filePaths, 'multi')
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ResourcePropertiesResponse;

      return this.apiClient.callApi(
        '/getResourceProperties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUploadFileUrl operation.
     * @callback module:api/FilesAndFoldersApi~getUploadFileUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getUploadFileUrl
     * Returns an unique URL for handling file uploads.  To upload a file to ExaVault, you first request an upload URL from our API using this API call. You then make an HTTP POST request to that url to put the file on the server. The upload URL will contain a link to an ExaVault storage server where the file can be stored, and a unique access token &amp;ndash; valid for only one use and thirty (30) seconds &amp;ndash; which allows you to upload the file.  **Notes:** - Authenticated user should have upload premission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {Number} fileSize Size of the file to upload, in bytes.
     * @param {String} destinationPath Path relative to account&#39;s home directory, including file name.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allowOverwrite True if the file should be overwritten, false if different file names should be generated. Call &lt;a href&#x3D;\&quot;#operation/checkFilesExist\&quot;&gt;checkFilesExist&lt;/a&gt; first if you need to determine whether or not a file with the same name already exists.  (default to true)
     * @param {Boolean} opts.resume True if upload resume is supported, false if it isn&#39;t. (default to false)
     * @param {module:api/FilesAndFoldersApi~getUploadFileUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UrlResponse}
     */
    this.getUploadFileUrl = function(apiKey, accessToken, fileSize, destinationPath, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getUploadFileUrl");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getUploadFileUrl");
      }

      // verify the required parameter 'fileSize' is set
      if (fileSize === undefined || fileSize === null) {
        throw new Error("Missing the required parameter 'fileSize' when calling getUploadFileUrl");
      }

      // verify the required parameter 'destinationPath' is set
      if (destinationPath === undefined || destinationPath === null) {
        throw new Error("Missing the required parameter 'destinationPath' when calling getUploadFileUrl");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'fileSize': fileSize,
        'destinationPath': destinationPath,
        'allowOverwrite': opts['allowOverwrite'],
        'resume': opts['resume']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UrlResponse;

      return this.apiClient.callApi(
        '/getUploadFileUrl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the moveResources operation.
     * @callback module:api/FilesAndFoldersApi~moveResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModifiedResourcesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * moveResources
     * Moves a set of exisiting files/folders (provided by an array **filePaths**) to the requested **destinationPath** in your account. In the **filePaths** array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the  root of the **destinationPath**.  **Notes:** - Authenticated user should have modify permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {Object} opts Optional parameters
     * @param {module:model/MoveResources} opts.moveResources 
     * @param {module:api/FilesAndFoldersApi~moveResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModifiedResourcesResponse}
     */
    this.moveResources = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = {};

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling moveResources");
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
      var returnType = ModifiedResourcesResponse;

      return this.apiClient.callApi(
        '/moveResources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the previewFile operation.
     * @callback module:api/FilesAndFoldersApi~previewFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PreviewFileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * previewFile
     * Returns a resized image of the specified document for supported file types.  Image data returned is encoded in base64 format and can be viewed using the &#x60;&lt;img&gt;&#x60; element.   &#x60;&#x60;&#x60;&lt;img src&#x3D;&#39;data:image/jpeg;base64&#39; + results.image/&gt;&#x60;&#x60;&#x60;  **Notes:** - Supported files types are &#x60;&#39;jpg&#39;&#x60;, &#x60;&#39;jpeg&#39;&#x60;, &#x60;&#39;gif&#39;&#x60;, &#x60;&#39;png&#39;&#x60;, &#x60;&#39;bmp&#39;&#x60;, &#x60;&#39;pdf&#39;&#x60;, &#x60;&#39;psd&#39;&#x60;, &#x60;&#39;doc&#39;&#x60; 
     * @param {String} apiKey API key required to make the API call.
     * @param {String} accessToken Access token required to make the API call.
     * @param {String} path Path of the image relative to the user&#39;s home directory.
     * @param {module:model/String} size The size of the image.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.width Overrides sizes. Sets to a specific width.
     * @param {Number} opts.height Overrides sizes. Sets to a specific height.
     * @param {Number} opts.page Page number for the &#x60;.pdf&#x60; or &#x60;.doc&#x60; files. (default to 0)
     * @param {module:api/FilesAndFoldersApi~previewFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PreviewFileResponse}
     */
    this.previewFile = function(apiKey, accessToken, path, size, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling previewFile");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling previewFile");
      }

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling previewFile");
      }

      // verify the required parameter 'size' is set
      if (size === undefined || size === null) {
        throw new Error("Missing the required parameter 'size' when calling previewFile");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'path': path,
        'size': size,
        'width': opts['width'],
        'height': opts['height'],
        'page': opts['page']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PreviewFileResponse;

      return this.apiClient.callApi(
        '/previewFile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the renameResource operation.
     * @callback module:api/FilesAndFoldersApi~renameResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * renameResource
     * Rename a file or folder at the specified path. &gt; **Notes:** - Authenticated user should have modify permission. 
     * @param {String} apiKey API key required to make the API call.
     * @param {Object} opts Optional parameters
     * @param {module:model/RenameResources} opts.renameResources 
     * @param {module:api/FilesAndFoldersApi~renameResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    this.renameResource = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = {};

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling renameResource");
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
        '/renameResource', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
