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
    root.ExaVaultApi.LogEntry = factory(root.ExaVaultApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LogEntry model module.
   * @module model/LogEntry
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>LogEntry</code>.
   * @alias module:model/LogEntry
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>LogEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogEntry} obj Optional instance to populate.
   * @return {module:model/LogEntry} The populated <code>LogEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fileName')) {
        obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
      }
      if (data.hasOwnProperty('fileSource')) {
        obj['fileSource'] = ApiClient.convertToType(data['fileSource'], 'String');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
      }
      if (data.hasOwnProperty('bytesTransferred')) {
        obj['bytesTransferred'] = ApiClient.convertToType(data['bytesTransferred'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'String');
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Current resource path.
   * @member {String} fileName
   */
  exports.prototype['fileName'] = undefined;
  /**
   * Original path to the resource. Can be null if operation type not move or copy.
   * @member {String} fileSource
   */
  exports.prototype['fileSource'] = undefined;
  /**
   * Type of operation that happened in the account.
   * @member {module:model/LogEntry.OperationEnum} operation
   */
  exports.prototype['operation'] = undefined;
  /**
   * Duration of the operation.
   * @member {String} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * Amount of bytes transfered during the operation.
   * @member {String} bytesTransferred
   */
  exports.prototype['bytesTransferred'] = undefined;
  /**
   * ID of the log entry.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Timestamp of the operation.
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * Name of the user who triggered the operation.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * ID of user's session.
   * @member {String} sessionId
   */
  exports.prototype['sessionId'] = undefined;
  /**
   * IP address of the connected client.
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * Protocol used for the operation. Protocol can vary on type of application you or your users used to work with your account. Some of possible values are `SWFT`, `APP`, `SFTP`, `FTP`, `FTPS`.
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * Operation status.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>operation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperationEnum = {
    /**
     * value: "PASS"
     * @const
     */
    "PASS": "PASS",
    /**
     * value: "EXIT"
     * @const
     */
    "EXIT": "EXIT",
    /**
     * value: "STOR"
     * @const
     */
    "STOR": "STOR",
    /**
     * value: "RETR"
     * @const
     */
    "RETR": "RETR",
    /**
     * value: "DELE"
     * @const
     */
    "DELE": "DELE",
    /**
     * value: "MKD"
     * @const
     */
    "MKD": "MKD",
    /**
     * value: "RMD"
     * @const
     */
    "RMD": "RMD",
    /**
     * value: "RNTO"
     * @const
     */
    "RNTO": "RNTO",
    /**
     * value: "COPY"
     * @const
     */
    "COPY": "COPY",
    /**
     * value: "MOVE"
     * @const
     */
    "MOVE": "MOVE",
    /**
     * value: "SEND"
     * @const
     */
    "SEND": "SEND",
    /**
     * value: "SHARE"
     * @const
     */
    "SHARE": "SHARE",
    /**
     * value: "RECV"
     * @const
     */
    "RECV": "RECV",
    /**
     * value: "NOTIFY"
     * @const
     */
    "NOTIFY": "NOTIFY",
    /**
     * value: "EDIT_SEND"
     * @const
     */
    "EDIT_SEND": "EDIT_SEND",
    /**
     * value: "EDIT_SHARE"
     * @const
     */
    "EDIT_SHARE": "EDIT_SHARE",
    /**
     * value: "EDIT_RECV"
     * @const
     */
    "EDIT_RECV": "EDIT_RECV",
    /**
     * value: "EDIT_NTFY"
     * @const
     */
    "EDIT_NTFY": "EDIT_NTFY",
    /**
     * value: "EDIT_USER"
     * @const
     */
    "EDIT_USER": "EDIT_USER",
    /**
     * value: "DELE_SEND"
     * @const
     */
    "DELE_SEND": "DELE_SEND",
    /**
     * value: "DELE_SHARE"
     * @const
     */
    "DELE_SHARE": "DELE_SHARE",
    /**
     * value: "DELE_NTFY"
     * @const
     */
    "DELE_NTFY": "DELE_NTFY",
    /**
     * value: "DELE_USER"
     * @const
     */
    "DELE_USER": "DELE_USER",
    /**
     * value: "DELE_RECV"
     * @const
     */
    "DELE_RECV": "DELE_RECV",
    /**
     * value: "COMPR"
     * @const
     */
    "COMPR": "COMPR",
    /**
     * value: "EXTRACT"
     * @const
     */
    "EXTRACT": "EXTRACT",
    /**
     * value: "DFA"
     * @const
     */
    "DFA": "DFA",
    /**
     * value: "EDIT_DFA"
     * @const
     */
    "EDIT_DFA": "EDIT_DFA",
    /**
     * value: "DELE_DFA"
     * @const
     */
    "DELE_DFA": "DELE_DFA"  };


  return exports;
}));


