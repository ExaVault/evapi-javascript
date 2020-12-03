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

var _AddFolderRequestBody = require('../model/AddFolderRequestBody');

var _AddFolderRequestBody2 = _interopRequireDefault(_AddFolderRequestBody);

var _CompressFilesRequestBody = require('../model/CompressFilesRequestBody');

var _CompressFilesRequestBody2 = _interopRequireDefault(_CompressFilesRequestBody);

var _CopyResourcesRequestBody = require('../model/CopyResourcesRequestBody');

var _CopyResourcesRequestBody2 = _interopRequireDefault(_CopyResourcesRequestBody);

var _DeleteResourcesRequestBody = require('../model/DeleteResourcesRequestBody');

var _DeleteResourcesRequestBody2 = _interopRequireDefault(_DeleteResourcesRequestBody);

var _EmptyResponse = require('../model/EmptyResponse');

var _EmptyResponse2 = _interopRequireDefault(_EmptyResponse);

var _ExtractFilesRequestBody = require('../model/ExtractFilesRequestBody');

var _ExtractFilesRequestBody2 = _interopRequireDefault(_ExtractFilesRequestBody);

var _MoveResourcesRequestBody = require('../model/MoveResourcesRequestBody');

var _MoveResourcesRequestBody2 = _interopRequireDefault(_MoveResourcesRequestBody);

var _PreviewFileResponse = require('../model/PreviewFileResponse');

var _PreviewFileResponse2 = _interopRequireDefault(_PreviewFileResponse);

var _ResourceCollectionResponse = require('../model/ResourceCollectionResponse');

var _ResourceCollectionResponse2 = _interopRequireDefault(_ResourceCollectionResponse);

var _ResourceCopyMove = require('../model/ResourceCopyMove');

var _ResourceCopyMove2 = _interopRequireDefault(_ResourceCopyMove);

var _ResourceMultiResponse = require('../model/ResourceMultiResponse');

var _ResourceMultiResponse2 = _interopRequireDefault(_ResourceMultiResponse);

var _ResourceResponse = require('../model/ResourceResponse');

var _ResourceResponse2 = _interopRequireDefault(_ResourceResponse);

var _UpdateResourceByIdRequestBody = require('../model/UpdateResourceByIdRequestBody');

var _UpdateResourceByIdRequestBody2 = _interopRequireDefault(_UpdateResourceByIdRequestBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Resources service.
* @module api/ResourcesApi
* @version 2.2.3
*/
var ResourcesApi = function () {

  /**
  * Constructs a new ResourcesApi. 
  * @alias module:api/ResourcesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ResourcesApi(apiClient) {
    _classCallCheck(this, ResourcesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the addFolder operation.
   * @callback module:api/ResourcesApi~addFolderCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResourceResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a folder
   * Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.  **Notes:** - Authenticated user should have modify permission. 
   * @param {Object} opts Optional parameters
   * @param {module:api/ResourcesApi~addFolderCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ResourceResponse}
   */


  _createClass(ResourcesApi, [{
    key: 'addFolder',
    value: function addFolder(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _ResourceResponse2.default;

      return this.apiClient.callApi('/resources', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the compressFiles operation.
     * @callback module:api/ResourcesApi~compressFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compress resources
     * Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.  **Notes:** - Authenticated user should have modify permission. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~compressFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceResponse}
     */

  }, {
    key: 'compressFiles',
    value: function compressFiles(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _ResourceResponse2.default;

      return this.apiClient.callApi('/resources/compress', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the copyResources operation.
     * @callback module:api/ResourcesApi~copyResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceCopyMove} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy resources
     * Copies a set of exisiting files/folders (provided by an array &#x60;resources&#x60;) to the requested &#x60;parentResource&#x60; in your account. In the &#x60;resources&#x60; array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the  root of the &#x60;parentResource&#x60;.  **Notes:** - Authenticated user should have modify permission. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~copyResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceCopyMove}
     */

  }, {
    key: 'copyResources',
    value: function copyResources(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _ResourceCopyMove2.default;

      return this.apiClient.callApi('/resources/copy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteResourceById operation.
     * @callback module:api/ResourcesApi~deleteResourceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Resource
     * Delete a single file or folder resource. Deleting a folder will also delete all of the contents.  **Notes:** - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - There is no way to un-delete a deleted resource. 
     * @param {module:api/ResourcesApi~deleteResourceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: 'deleteResourceById',
    value: function deleteResourceById(id, evApiKey, evAccessToken, callback) {
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

      return this.apiClient.callApi('/resources/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the deleteResources operation.
     * @callback module:api/ResourcesApi~deleteResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Resources
     * Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.  **Notes:** - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - It is not possible to un-delete a deleted resource. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~deleteResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: 'deleteResources',
    value: function deleteResources(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _EmptyResponse2.default;

      return this.apiClient.callApi('/resources', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the download operation.
     * @callback module:api/ResourcesApi~downloadCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a file
     * Downloads a file from the server. Whenever more than one file is being downloaded, the file are first zipped into  a single file before the download starts, and the resulting zip file is named to match the &#x60;downloadArchiveName&#x60; parameter.  **NOTE**: Downloading many files at once  may result in a long delay before the API will return a response. You may need to override default timeout values in your API client, or download files individually.
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~downloadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: 'download',
    value: function download(evApiKey, evAccessToken, resources, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'resources[]': this.apiClient.buildCollectionParam(resources, 'multi'),
        'downloadArchiveName': opts['downloadArchiveName']
      };
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      /* EV-CUSTOM - The returnType must be 'String' for downloads to work properly */
      var returnType = 'String';
      var accepts = ['application/octet-stream', 'application/zip'];

      return this.apiClient.callApi('/resources/download', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the extractFiles operation.
     * @callback module:api/ResourcesApi~extractFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extract resources
     * Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.  **Notes:** - You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~extractFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceCollectionResponse}
     */

  }, {
    key: 'extractFiles',
    value: function extractFiles(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _ResourceCollectionResponse2.default;

      return this.apiClient.callApi('/resources/extract', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getPreviewImage operation.
     * @callback module:api/ResourcesApi~getPreviewImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PreviewFileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Preview a file
     * Returns a resized image of the specified document for supported file types.  Image data returned is encoded in base64 format and can be viewed using the &#x60;&lt;img&gt;&#x60; element.   &#x60;&#x60;&#x60;&lt;img src&#x3D;&#x27;data:image/jpeg;base64&#x27; + meta.image/&gt;&#x60;&#x60;&#x60;  **Notes:** - Supported files types are &#x60;&#x27;jpg&#x27;&#x60;, &#x60;&#x27;jpeg&#x27;&#x60;, &#x60;&#x27;gif&#x27;&#x60;, &#x60;&#x27;png&#x27;&#x60;, &#x60;&#x27;bmp&#x27;&#x60;, &#x60;&#x27;pdf&#x27;&#x60;, &#x60;&#x27;psd&#x27;&#x60;, &#x60;&#x27;doc&#x27;&#x60; 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~getPreviewImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PreviewFileResponse}
     */

  }, {
    key: 'getPreviewImage',
    value: function getPreviewImage(evApiKey, evAccessToken, resource, size, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'resource': resource,
        'size': size,
        'width': opts['width'],
        'height': opts['height'],
        'page': opts['page']
      };
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PreviewFileResponse2.default;

      return this.apiClient.callApi('/resources/preview', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getResourceInfo operation.
     * @callback module:api/ResourcesApi~getResourceInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Resource Properties
     * Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.  **Notes:** - Authenticated user should have list permission. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~getResourceInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceResponse}
     */

  }, {
    key: 'getResourceInfo',
    value: function getResourceInfo(evApiKey, evAccessToken, resource, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'resource': resource,
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
      var returnType = _ResourceResponse2.default;

      return this.apiClient.callApi('/resources', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getResourceInfoById operation.
     * @callback module:api/ResourcesApi~getResourceInfoByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get resource metadata
     * Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.  **Notes:** - Authenticated user should have list permission. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~getResourceInfoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceResponse}
     */

  }, {
    key: 'getResourceInfoById',
    value: function getResourceInfoById(id, evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _ResourceResponse2.default;

      return this.apiClient.callApi('/resources/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the listResourceContents operation.
     * @callback module:api/ResourcesApi~listResourceContentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List contents of folder
     * Returns a list of files/folders for the parent resource ID.   You can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional &#x60;include&#x60; parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user&#x27;s home directory (e.g. **_/myfiles/some_folder**).  **Notes:** - Authenticated user should have list permission. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~listResourceContentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceCollectionResponse}
     */

  }, {
    key: 'listResourceContents',
    value: function listResourceContents(evApiKey, evAccessToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': opts['sort'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'type': opts['type'],
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
      var returnType = _ResourceCollectionResponse2.default;

      return this.apiClient.callApi('/resources/list/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the listResources operation.
     * @callback module:api/ResourcesApi~listResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceCollectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all resources
     * Returns a list of files and folders in the account. Use the &#x60;resource&#x60; query parameter to indicate the folder you wish to search in (which can be /).   **Searching for Files and Folders**  Using the &#x60;name&#x60; parameter triggers search mode, which will search the entire directory structure under the provided &#x60;resource&#x60; for files or folders with names matching the provided &#x60;name&#x60;. This supports wildcard matching such as:  - \\*Report\\* would find any files or folders with \&quot;Report\&quot; in the name. - Data\\_202?-09-30.xlsx would match items such as \&quot;Data\\_2020-09-30.xlsx\&quot;, \&quot;DATA\\_2021-09-30.xlsx\&quot;, \&quot;data\\_2022-09-30.xlsx\&quot; etc. - sales\\* would find any files or folders starting with the word \&quot;Sales\&quot; - \\*.csv would locate any files ending in \&quot;.csv\&quot; - \\* matches everything within the directory tree starting at your given &#x60;resource&#x60;  The search is not case-sensitive. Searching for Clients\\* or clients\\* or CLIENTS\\*, etc. will provide identical results  If you are using the &#x60;name&#x60; parameter to run a search, the &#x60;type&#x60; parameter will be ignored by the server.
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~listResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceCollectionResponse}
     */

  }, {
    key: 'listResources',
    value: function listResources(evApiKey, evAccessToken, resource, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'resource': resource,
        'sort': opts['sort'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'type': opts['type'],
        'name': opts['name'],
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
      var returnType = _ResourceCollectionResponse2.default;

      return this.apiClient.callApi('/resources/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the moveResources operation.
     * @callback module:api/ResourcesApi~moveResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceCopyMove} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move resources
     * Moves a set of exisiting files/folders (provided by an array &#x60;resources&#x60;) to the requested &#x60;parentResource&#x60; in your account. In the &#x60;resources&#x60; array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the &#x60;parentResource&#x60;.  **Notes:** - Authenticated user should have modify permission. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~moveResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceCopyMove}
     */

  }, {
    key: 'moveResources',
    value: function moveResources(evApiKey, evAccessToken, opts, callback) {
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
      var returnType = _ResourceCopyMove2.default;

      return this.apiClient.callApi('/resources/move', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updateResourceById operation.
     * @callback module:api/ResourcesApi~updateResourceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rename a resource.
     * Update the specified file or folder resource record&#x27;s \&quot;name\&quot; parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~updateResourceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceResponse}
     */

  }, {
    key: 'updateResourceById',
    value: function updateResourceById(id, evAccessToken, evApiKey, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'ev-access-token': evAccessToken,
        'ev-api-key': evApiKey
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResourceResponse2.default;

      return this.apiClient.callApi('/resources/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the uploadFile operation.
     * @callback module:api/ResourcesApi~uploadFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a file
     * Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file. 
     * @param {Object} opts Optional parameters
     * @param {module:api/ResourcesApi~uploadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceResponse}
     */

  }, {
    key: 'uploadFile',
    value: function uploadFile(evApiKey, evAccessToken, path, fileSize, opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'path': path,
        'fileSize': fileSize,
        'resume': opts['resume'],
        'allowOverwrite': opts['allowOverwrite']
      };
      var headerParams = {
        'ev-api-key': evApiKey,
        'ev-access-token': evAccessToken,
        'offsetBytes': opts['offsetBytes']
      };
      var formParams = {
        'file': opts['file']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _ResourceResponse2.default;

      return this.apiClient.callApi('/resources/upload', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ResourcesApi;
}();

exports.default = ResourcesApi;