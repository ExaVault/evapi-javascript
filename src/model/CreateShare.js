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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ExaVaultApi) {
      root.ExaVaultApi = {};
    }
    root.ExaVaultApi.CreateShare = factory(root.ExaVaultApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateShare model module.
   * @module model/CreateShare
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CreateShare</code>.
   * @alias module:model/CreateShare
   * @class
   * @param accessToken {String} Access token required to make the API call.
   * @param type {module:model/CreateShare.TypeEnum} The type of share to create. See above for a description of each.
   * @param name {String} Name of the share.
   * @param filePaths {Array.<String>} Array of strings containing the file paths to share.
   * @param accessMode {module:model/CreateShare.AccessModeEnum} Type of permissions share recipients have.
   */
  var exports = function(accessToken, type, name, filePaths, accessMode) {
    var _this = this;

    _this['access_token'] = accessToken;
    _this['type'] = type;
    _this['name'] = name;
    _this['filePaths'] = filePaths;
    _this['accessMode'] = accessMode;












  };

  /**
   * Constructs a <code>CreateShare</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateShare} obj Optional instance to populate.
   * @return {module:model/CreateShare} The populated <code>CreateShare</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('filePaths')) {
        obj['filePaths'] = ApiClient.convertToType(data['filePaths'], ['String']);
      }
      if (data.hasOwnProperty('accessMode')) {
        obj['accessMode'] = ApiClient.convertToType(data['accessMode'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
      }
      if (data.hasOwnProperty('ccEmail')) {
        obj['ccEmail'] = ApiClient.convertToType(data['ccEmail'], ['String']);
      }
      if (data.hasOwnProperty('requireEmail')) {
        obj['requireEmail'] = ApiClient.convertToType(data['requireEmail'], 'Boolean');
      }
      if (data.hasOwnProperty('embed')) {
        obj['embed'] = ApiClient.convertToType(data['embed'], 'Boolean');
      }
      if (data.hasOwnProperty('isPublic')) {
        obj['isPublic'] = ApiClient.convertToType(data['isPublic'], 'Boolean');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('expiration')) {
        obj['expiration'] = ApiClient.convertToType(data['expiration'], 'String');
      }
      if (data.hasOwnProperty('hasNotification')) {
        obj['hasNotification'] = ApiClient.convertToType(data['hasNotification'], 'Boolean');
      }
      if (data.hasOwnProperty('notificationEmails')) {
        obj['notificationEmails'] = ApiClient.convertToType(data['notificationEmails'], ['String']);
      }
      if (data.hasOwnProperty('fileDropCreateFolders')) {
        obj['fileDropCreateFolders'] = ApiClient.convertToType(data['fileDropCreateFolders'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Access token required to make the API call.
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * The type of share to create. See above for a description of each.
   * @member {module:model/CreateShare.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Name of the share.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Array of strings containing the file paths to share.
   * @member {Array.<String>} filePaths
   */
  exports.prototype['filePaths'] = undefined;
  /**
   * Type of permissions share recipients have.
   * @member {module:model/CreateShare.AccessModeEnum} accessMode
   */
  exports.prototype['accessMode'] = undefined;
  /**
   * Share message subject (for email invitations).
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Share message contents (for email invitations).
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Array of strings for email recipients (for email invitations).
   * @member {Array.<String>} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * Array of strings for CC email recipients (for email invitations).
   * @member {Array.<String>} ccEmail
   */
  exports.prototype['ccEmail'] = undefined;
  /**
   * Requires a user to enter their email address to access. If set true, isPublic must also be set true. Please note that emails are not validated; we simply log the email in the share activity. If you want a share to be invite only (e.g. restricted access to only invited email addresses) you should set this to false, and pass the set of email addresses via the `emails` paramater.
   * @member {Boolean} requireEmail
   * @default false
   */
  exports.prototype['requireEmail'] = false;
  /**
   * Allows user to embed a widget with the share.
   * @member {Boolean} embed
   * @default false
   */
  exports.prototype['embed'] = false;
  /**
   * True if share has a public URL. If false, the only way to access the share will be via the personalized URL sent via the email invite process.
   * @member {Boolean} isPublic
   * @default false
   */
  exports.prototype['isPublic'] = false;
  /**
   * If not null, value of password is required to access this share.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The timestamp the current share should expire, formatted `YYYY-mm-dd hh:mm:ss`.
   * @member {String} expiration
   */
  exports.prototype['expiration'] = undefined;
  /**
   * True if the user should be notified about activity on this share.
   * @member {Boolean} hasNotification
   * @default false
   */
  exports.prototype['hasNotification'] = false;
  /**
   * An array of recipients who should receive notification emails.
   * @member {Array.<String>} notificationEmails
   */
  exports.prototype['notificationEmails'] = undefined;
  /**
   * If true, all receive folder submissions will be uploaded separate folders (only applicable for the `receive` share type).
   * @member {Boolean} fileDropCreateFolders
   * @default false
   */
  exports.prototype['fileDropCreateFolders'] = false;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "shared_folder"
     * @const
     */
    "shared_folder": "shared_folder",
    /**
     * value: "send"
     * @const
     */
    "send": "send",
    /**
     * value: "receive"
     * @const
     */
    "receive": "receive"  };

  /**
   * Allowed values for the <code>accessMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessModeEnum = {
    /**
     * value: "upload"
     * @const
     */
    "upload": "upload",
    /**
     * value: "download"
     * @const
     */
    "download": "download",
    /**
     * value: "download_upload"
     * @const
     */
    "download_upload": "download_upload",
    /**
     * value: "download_upload_modify_delete"
     * @const
     */
    "download_upload_modify_delete": "download_upload_modify_delete"  };


  return exports;
}));


