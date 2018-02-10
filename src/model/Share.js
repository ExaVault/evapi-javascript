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
    define(['ApiClient', 'model/Message', 'model/ShareRecipient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Message'), require('./ShareRecipient'));
  } else {
    // Browser globals (root is window)
    if (!root.ExaVaultApi) {
      root.ExaVaultApi = {};
    }
    root.ExaVaultApi.Share = factory(root.ExaVaultApi.ApiClient, root.ExaVaultApi.Message, root.ExaVaultApi.ShareRecipient);
  }
}(this, function(ApiClient, Message, ShareRecipient) {
  'use strict';




  /**
   * The Share model module.
   * @module model/Share
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Share</code>.
   * Object contains share properties.
   * @alias module:model/Share
   * @class
   */
  var exports = function() {
    var _this = this;




























  };

  /**
   * Constructs a <code>Share</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Share} obj Optional instance to populate.
   * @return {module:model/Share} The populated <code>Share</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('hasPassword')) {
        obj['hasPassword'] = ApiClient.convertToType(data['hasPassword'], 'Boolean');
      }
      if (data.hasOwnProperty('public')) {
        obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
      }
      if (data.hasOwnProperty('accessMode')) {
        obj['accessMode'] = ApiClient.convertToType(data['accessMode'], 'String');
      }
      if (data.hasOwnProperty('accessDescription')) {
        obj['accessDescription'] = ApiClient.convertToType(data['accessDescription'], 'String');
      }
      if (data.hasOwnProperty('embed')) {
        obj['embed'] = ApiClient.convertToType(data['embed'], 'Boolean');
      }
      if (data.hasOwnProperty('hash')) {
        obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
      }
      if (data.hasOwnProperty('ownerHash')) {
        obj['ownerHash'] = ApiClient.convertToType(data['ownerHash'], 'String');
      }
      if (data.hasOwnProperty('expiration')) {
        obj['expiration'] = ApiClient.convertToType(data['expiration'], 'String');
      }
      if (data.hasOwnProperty('expired')) {
        obj['expired'] = ApiClient.convertToType(data['expired'], 'Boolean');
      }
      if (data.hasOwnProperty('resent')) {
        obj['resent'] = ApiClient.convertToType(data['resent'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'Number');
      }
      if (data.hasOwnProperty('ownerUsername')) {
        obj['ownerUsername'] = ApiClient.convertToType(data['ownerUsername'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('requireEmail')) {
        obj['requireEmail'] = ApiClient.convertToType(data['requireEmail'], 'Boolean');
      }
      if (data.hasOwnProperty('fileDropCreateFolders')) {
        obj['fileDropCreateFolders'] = ApiClient.convertToType(data['fileDropCreateFolders'], 'Boolean');
      }
      if (data.hasOwnProperty('paths')) {
        obj['paths'] = ApiClient.convertToType(data['paths'], ['String']);
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], [ShareRecipient]);
      }
      if (data.hasOwnProperty('recipientsWithOwner')) {
        obj['recipientsWithOwner'] = ApiClient.convertToType(data['recipientsWithOwner'], [ShareRecipient]);
      }
      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], [Message]);
      }
      if (data.hasOwnProperty('inherited')) {
        obj['inherited'] = ApiClient.convertToType(data['inherited'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('hasNotification')) {
        obj['hasNotification'] = ApiClient.convertToType(data['hasNotification'], 'Boolean');
      }
      if (data.hasOwnProperty('notification')) {
        obj['notification'] = ApiClient.convertToType(data['notification'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the share.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Share name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * True if the share has password.
   * @member {Boolean} hasPassword
   */
  exports.prototype['hasPassword'] = undefined;
  /**
   * True if the share has a public url.
   * @member {Boolean} public
   */
  exports.prototype['public'] = undefined;
  /**
   * Access rights for the share.
   * @member {module:model/Share.AccessModeEnum} accessMode
   */
  exports.prototype['accessMode'] = undefined;
  /**
   * Description of the share access rights.
   * @member {String} accessDescription
   */
  exports.prototype['accessDescription'] = undefined;
  /**
   * True if share can be embedded.
   * @member {Boolean} embed
   */
  exports.prototype['embed'] = undefined;
  /**
   * Share hash.
   * @member {String} hash
   */
  exports.prototype['hash'] = undefined;
  /**
   * Share owner's hash.
   * @member {String} ownerHash
   */
  exports.prototype['ownerHash'] = undefined;
  /**
   * Expiration date of the share.
   * @member {String} expiration
   */
  exports.prototype['expiration'] = undefined;
  /**
   * True if the share has expired.
   * @member {Boolean} expired
   */
  exports.prototype['expired'] = undefined;
  /**
   * Invitations resent date. Can be `null` if resent never happened.
   * @member {String} resent
   */
  exports.prototype['resent'] = undefined;
  /**
   * ID of the share owner.
   * @member {Number} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * Username of share owner.
   * @member {String} ownerUsername
   */
  exports.prototype['ownerUsername'] = undefined;
  /**
   * Type of share.
   * @member {module:model/Share.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * True if share requires email to access.
   * @member {Boolean} requireEmail
   */
  exports.prototype['requireEmail'] = undefined;
  /**
   * Flag to show if separate folders should be created for each file upload to receive folder.
   * @member {Boolean} fileDropCreateFolders
   */
  exports.prototype['fileDropCreateFolders'] = undefined;
  /**
   * Path to the shared resource in your account.
   * @member {Array.<String>} paths
   */
  exports.prototype['paths'] = undefined;
  /**
   * Array of recipients.
   * @member {Array.<module:model/ShareRecipient>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * Array of recipients with owner.
   * @member {Array.<module:model/ShareRecipient>} recipientsWithOwner
   */
  exports.prototype['recipientsWithOwner'] = undefined;
  /**
   * Array of invitation messages.
   * @member {Array.<module:model/Message>} messages
   */
  exports.prototype['messages'] = undefined;
  /**
   * True if share inherited from parent folder.
   * @member {Boolean} inherited
   */
  exports.prototype['inherited'] = undefined;
  /**
   * Share activity status. Can be active (1) or deactivated (0).
   * @member {module:model/Share.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * True if share has notification.
   * @member {Boolean} hasNotification
   */
  exports.prototype['hasNotification'] = undefined;
  /**
   * Notification object if share has one.
   * @member {String} notification
   */
  exports.prototype['notification'] = undefined;
  /**
   * Timestamp of share creation.
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * Timestamp of share modification. Can be `null` if it wasn't modified.
   * @member {String} modified
   */
  exports.prototype['modified'] = undefined;


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
   * Allowed values for the <code>status</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: 0
     * @const
     */
    "0": 0,
    /**
     * value: 1
     * @const
     */
    "1": 1  };


  return exports;
}));


