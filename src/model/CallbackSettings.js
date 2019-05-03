/**
 * ExaVault API
 * # Introduction  Welcome to the ExaVault API documentation. Our API lets you control nearly all aspects of your ExaVault account programatically, from uploading and downloading files to creating and managing shares and notifications. Our API supports both GET and POST operations.  Capabilities of the API include:  - Uploading and downloading files. - Managing files and folders; including standard operations like move, copy and delete. - Getting information about activity occuring in your account. - Creating, updating and deleting users. - Creating and managing shares, including download-only shares and recieve folders.  - Setting up and managing notifications.  ## The API Endpoint  The ExaVault API is located at: https://api.exavault.com/v1.2/  # Testing w/ Postman  We've made it easy for you to test our API before you start full-scale development. Download [Postman](https://www.getpostman.com/) or the [Postman Chrome Extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en), and then download our Postman collection, below. [Obtain your API key](#section/Code-Libraries-and-Sample-PHP-Code/Obtain-your-API-key) and you'll be able to interact with your ExaVault account immediately, so you can better understand what the capabilities of the API are.  <div class=\"postman-run-button\" data-postman-action=\"collection/import\" data-postman-var-1=\"e13395afc6278ce1555f\"></div>  ![ExaVault API Postman Colletion Usage](/images/postman.png)  If you'd prefer to skip Postman and start working with code directly, take a look at the sample code below.    # Code Libraries & Sample PHP Code  Once you're ready for full-scale development, we recommend looking at our code libraries available on [GitHub](https://github.com/ExaVault). We offer code libraries for [Python](https://github.com/ExaVault/evapi-python), [PHP](https://github.com/ExaVault/evapi-php) and [JavaScript](https://github.com/ExaVault/evapi-javascript).  While we recommend using our libraries, you're welcome to interact directly with our API via HTTP GET and POST requests -- a great option particularly if you're developing in a language for which we don't yet have sample code.     - [Download Python Library &amp; Sample Code &raquo;](https://github.com/ExaVault/evapi-python) - [Download PHP Library &amp; Sample Code &raquo;](https://github.com/ExaVault/evapi-php) - [Download JavaScript Library &amp; Sample Code &raquo;](https://github.com/ExaVault/evapi-javascript)  *Note: You can generate client libraries for any language using [Swagger Editor](http://editor2.swagger.io/). Just download our documentation file, past it into editor and use 'Generate Client' dropdown.*  ## Obtain Your API Key  You will need to obtain an API key for your application from the [Client Area](https://clients.exavault.com/clientarea.php?action=products) of your account.  To obtain an API key, please follow the instructions below.   + Login to the [Accounts](https://clients.exavault.com/clientarea.php?action=products) section of the Client Area.  + Use the drop down next to your desired account, and select *Manage API Keys*.  + You will be brought to the API Key management screen. Fill out the form and save to generate a new key for your app.  *NOTE: As of Oct 2017, we are in the progress of migrating customers to our next generation platform. If your account is already on our new platform, you should log into your File Manager and create your API key under Account->Developer->Manage API Keys*.  # Status Codes  The ExaVault API returns only two HTTP status codes for its responses: 200 and 500.  When the request could be successfully processed by the endpoint, the response status code will be 200, regardless of whether the requested action could be taken.  For example, the response to a getUser request for a username that does not exist in your account would have the status of 200,  indicating that the response was received and processed, but the error member of the returned response object would contain object with `message` and `code` properties.  **Result Format:**  |Success   | Error     | Results   | | ---      | :---:       |  :---:      | | 0        |  `Object` |   Empty   | | 1        |   Empty       |    `Object` or `Array`        |     When a malformed request is received, a 500 HTTP status code will be returned, indicating that the request could not be processed.  ExaVault's API does not currently support traditional REST response codes such as '201 Created' or '405 Method Not Allowed', although we intend to support such codes a future version of the API.   # File Paths  Many API calls require you to provide one or more file paths. For example, the <a href=\"#operation/moveResources\">moveResources</a> call requires both an array of source paths, **filePaths**, and a destination path, **destinationPath**. Here's a few tips for working with paths:   - File paths should always be specified as a string, using the standard Unix format: e.g. `/path/to/a/file.txt`  - File paths are always absolute _from the home directory of the logged in user_. For example, if the user **bob** had a home directory restriction of `/bob_home`, then an API call made using his login would specify a file as `/myfile.txt`, whereas an API call made using the master user ( no home directory restriction ) would specify the same file as `/bob_home/myfile.txt`.  # API Rate Limits  We rate limit the number of API calls you can make to help prevent abuse and protect system stablity. Each API key will support 500 requests per rolling five minutes. If you make more than 500 requests in a five minute period, you will receive a response with an error object for fifteen minutes.  # Webhooks  A webhook is an HTTP callback: a simple event-notification via HTTP POST. If you define webhooks for Exavault, ExaVault will POST a  message to a URL when certain things happen.     Webhooks can be used to receive a JSON object to your endpoint URL. You choose what events will trigger webhook messages to your endpoint URL.     Webhooks will attempt to send a message up to 8 times with increasing timeouts between each attempt. All webhook requests are tracked in the webhooks log.  ## Getting Started  1. Go to the Account tab inside SWFT.  2. Choose the Developer tab.  3. Configure your endpoint URL and select the events you want to trigger webhook messages.  4. Save settings.    You are all set to receive webhook callbacks on the events you selected.  ## Verification Signature  ExaVault includes a custom HTTP header, X-Exavault-Signature, with webhooks POST requests which will contain the signature for the request.  You can use the signature to verify the request for an additional level of security.  ## Generating the Signature  1. Go to Account tab inside SWFT.  2. Choose the Developer tab.  3. Obtain the verification token. This field will only be shown if you've configured your endpoint URL.  4. In your code that receives or processes the webhooks, you should concatenate the verification token with the JSON object that we sent in our      POST request and hash it with md5.     ```     md5($verificationToken.$webhooksObject);     ```  5. Compare signature that you generated to the signature provided in the X-Exavault-Signature HTTP header  ## Example JSON Response Object  ```json   {     \"accountname\": \"mycompanyname\",     \"username\": \"john\"     \"operation\": \"Upload\",     \"protocol\": \"https\",     \"path\": \"/testfolder/filename.jpg\"     \"attempt\": 1   } ```  ## Webhooks Logs  Keep track of all your webhooks requests in the Activity section of your account. You can find the following info for each request:    1. date and time - timestamp of the request.    2. endpoint url - where the webhook was sent.    3. event - what triggered the webhook.    4. status - HTTP status or curl error code.    5. attempt - how many times we tried to send this request.    6. response size - size of the response from your server.    7. details - you can check the response body if it was sent. 
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
    root.ExaVaultApi.CallbackSettings = factory(root.ExaVaultApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CallbackSettings model module.
   * @module model/CallbackSettings
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CallbackSettings</code>.
   * @alias module:model/CallbackSettings
   * @class
   */
  var exports = function() {
    var _this = this;





























  };

  /**
   * Constructs a <code>CallbackSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallbackSettings} obj Optional instance to populate.
   * @return {module:model/CallbackSettings} The populated <code>CallbackSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('endpointUrl')) {
        obj['endpointUrl'] = ApiClient.convertToType(data['endpointUrl'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('upload')) {
        obj['upload'] = ApiClient.convertToType(data['upload'], 'String');
      }
      if (data.hasOwnProperty('download')) {
        obj['download'] = ApiClient.convertToType(data['download'], 'String');
      }
      if (data.hasOwnProperty('delete')) {
        obj['delete'] = ApiClient.convertToType(data['delete'], 'String');
      }
      if (data.hasOwnProperty('createFolder')) {
        obj['createFolder'] = ApiClient.convertToType(data['createFolder'], 'String');
      }
      if (data.hasOwnProperty('rename')) {
        obj['rename'] = ApiClient.convertToType(data['rename'], 'String');
      }
      if (data.hasOwnProperty('move')) {
        obj['move'] = ApiClient.convertToType(data['move'], 'String');
      }
      if (data.hasOwnProperty('copy')) {
        obj['copy'] = ApiClient.convertToType(data['copy'], 'String');
      }
      if (data.hasOwnProperty('compress')) {
        obj['compress'] = ApiClient.convertToType(data['compress'], 'String');
      }
      if (data.hasOwnProperty('extract')) {
        obj['extract'] = ApiClient.convertToType(data['extract'], 'String');
      }
      if (data.hasOwnProperty('shareFolder')) {
        obj['shareFolder'] = ApiClient.convertToType(data['shareFolder'], 'String');
      }
      if (data.hasOwnProperty('sendFiles')) {
        obj['sendFiles'] = ApiClient.convertToType(data['sendFiles'], 'String');
      }
      if (data.hasOwnProperty('receiveFiles')) {
        obj['receiveFiles'] = ApiClient.convertToType(data['receiveFiles'], 'String');
      }
      if (data.hasOwnProperty('updateShare')) {
        obj['updateShare'] = ApiClient.convertToType(data['updateShare'], 'String');
      }
      if (data.hasOwnProperty('updateReceive')) {
        obj['updateReceive'] = ApiClient.convertToType(data['updateReceive'], 'String');
      }
      if (data.hasOwnProperty('deleteSend')) {
        obj['deleteSend'] = ApiClient.convertToType(data['deleteSend'], 'String');
      }
      if (data.hasOwnProperty('deleteReceive')) {
        obj['deleteReceive'] = ApiClient.convertToType(data['deleteReceive'], 'String');
      }
      if (data.hasOwnProperty('deleteShare')) {
        obj['deleteShare'] = ApiClient.convertToType(data['deleteShare'], 'String');
      }
      if (data.hasOwnProperty('createNotification')) {
        obj['createNotification'] = ApiClient.convertToType(data['createNotification'], 'String');
      }
      if (data.hasOwnProperty('updateNotification')) {
        obj['updateNotification'] = ApiClient.convertToType(data['updateNotification'], 'String');
      }
      if (data.hasOwnProperty('deleteNotification')) {
        obj['deleteNotification'] = ApiClient.convertToType(data['deleteNotification'], 'String');
      }
      if (data.hasOwnProperty('createUser')) {
        obj['createUser'] = ApiClient.convertToType(data['createUser'], 'String');
      }
      if (data.hasOwnProperty('updateUser')) {
        obj['updateUser'] = ApiClient.convertToType(data['updateUser'], 'String');
      }
      if (data.hasOwnProperty('deleteUser')) {
        obj['deleteUser'] = ApiClient.convertToType(data['deleteUser'], 'String');
      }
      if (data.hasOwnProperty('userConnect')) {
        obj['userConnect'] = ApiClient.convertToType(data['userConnect'], 'String');
      }
      if (data.hasOwnProperty('userDisconnect')) {
        obj['userDisconnect'] = ApiClient.convertToType(data['userDisconnect'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the account these settings belongs to.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * Where callback settings object sent to.
   * @member {String} endpointUrl
   */
  exports.prototype['endpointUrl'] = undefined;
  /**
   * Verification token for the request authentication.
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * Trigger callback on upload.
   * @member {String} upload
   */
  exports.prototype['upload'] = undefined;
  /**
   * Trigger callback on download.
   * @member {String} download
   */
  exports.prototype['download'] = undefined;
  /**
   * Trigger callback on delete.
   * @member {String} delete
   */
  exports.prototype['delete'] = undefined;
  /**
   * Trigger callback on fodler create.
   * @member {String} createFolder
   */
  exports.prototype['createFolder'] = undefined;
  /**
   * Trigger callback on rename.
   * @member {String} rename
   */
  exports.prototype['rename'] = undefined;
  /**
   * Trigger callback on move.
   * @member {String} move
   */
  exports.prototype['move'] = undefined;
  /**
   * Trigger callback on copy.
   * @member {String} copy
   */
  exports.prototype['copy'] = undefined;
  /**
   * Trigger callback on compress.
   * @member {String} compress
   */
  exports.prototype['compress'] = undefined;
  /**
   * Trigger callback on extract.
   * @member {String} extract
   */
  exports.prototype['extract'] = undefined;
  /**
   * Trigger callback on share folder create.
   * @member {String} shareFolder
   */
  exports.prototype['shareFolder'] = undefined;
  /**
   * Trigger callback on send files.
   * @member {String} sendFiles
   */
  exports.prototype['sendFiles'] = undefined;
  /**
   * Trigger callback on receive folder create.
   * @member {String} receiveFiles
   */
  exports.prototype['receiveFiles'] = undefined;
  /**
   * Trigger callback on share folder update.
   * @member {String} updateShare
   */
  exports.prototype['updateShare'] = undefined;
  /**
   * Trigger callback on receive folder update.
   * @member {String} updateReceive
   */
  exports.prototype['updateReceive'] = undefined;
  /**
   * Trigger callback on send files delete.
   * @member {String} deleteSend
   */
  exports.prototype['deleteSend'] = undefined;
  /**
   * Trigger callback on receive folder delete.
   * @member {String} deleteReceive
   */
  exports.prototype['deleteReceive'] = undefined;
  /**
   * Trigger callback on share folder delete.
   * @member {String} deleteShare
   */
  exports.prototype['deleteShare'] = undefined;
  /**
   * Trigger callback on notification create.
   * @member {String} createNotification
   */
  exports.prototype['createNotification'] = undefined;
  /**
   * Trigger callback on notification update.
   * @member {String} updateNotification
   */
  exports.prototype['updateNotification'] = undefined;
  /**
   * Trigger callback on notification delete.
   * @member {String} deleteNotification
   */
  exports.prototype['deleteNotification'] = undefined;
  /**
   * Trigger callback on user create.
   * @member {String} createUser
   */
  exports.prototype['createUser'] = undefined;
  /**
   * Trigger callback on user update.
   * @member {String} updateUser
   */
  exports.prototype['updateUser'] = undefined;
  /**
   * Trigger callback on user delete.
   * @member {String} deleteUser
   */
  exports.prototype['deleteUser'] = undefined;
  /**
   * Trigger callback on user connect.
   * @member {String} userConnect
   */
  exports.prototype['userConnect'] = undefined;
  /**
   * Trigger callback on user disconnect.
   * @member {String} userDisconnect
   */
  exports.prototype['userDisconnect'] = undefined;



  return exports;
}));


