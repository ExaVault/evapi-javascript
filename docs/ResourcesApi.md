# ExaVaultApi.ResourcesApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFolder**](ResourcesApi.md#addFolder) | **POST** /resources | Create a folder
[**compressFiles**](ResourcesApi.md#compressFiles) | **POST** /resources/compress | Compress resources
[**copyResources**](ResourcesApi.md#copyResources) | **POST** /resources/copy | Copy resources
[**deleteResourceById**](ResourcesApi.md#deleteResourceById) | **DELETE** /resources/{id} | Delete a Resource
[**deleteResources**](ResourcesApi.md#deleteResources) | **DELETE** /resources | Delete Resources
[**download**](ResourcesApi.md#download) | **GET** /resources/download | Download a file
[**extractFiles**](ResourcesApi.md#extractFiles) | **POST** /resources/extract | Extract resources
[**getPreviewImage**](ResourcesApi.md#getPreviewImage) | **GET** /resources/preview | Preview a file
[**getResourceInfo**](ResourcesApi.md#getResourceInfo) | **GET** /resources | Get Resource Properties
[**getResourceInfoById**](ResourcesApi.md#getResourceInfoById) | **GET** /resources/{id} | Get resource metadata
[**listResourceContents**](ResourcesApi.md#listResourceContents) | **GET** /resources/list/{id} | List contents of folder
[**listResources**](ResourcesApi.md#listResources) | **GET** /resources/list | Get a list of all resources
[**moveResources**](ResourcesApi.md#moveResources) | **POST** /resources/move | Move resources
[**updateResourceById**](ResourcesApi.md#updateResourceById) | **PATCH** /resources/{id} | Rename a resource.
[**uploadFile**](ResourcesApi.md#uploadFile) | **POST** /resources/upload | Upload a file

<a name="addFolder"></a>
# **addFolder**
> ResourceResponse addFolder(evApiKeyevAccessToken, opts)

Create a folder

Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.  **Notes:** - Authenticated user should have modify permission. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.Body8() // Body8 | 
};
apiInstance.addFolder(evApiKeyevAccessToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **body** | [**Body8**](Body8.md)|  | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="compressFiles"></a>
# **compressFiles**
> ResourceResponse compressFiles(evApiKeyevAccessToken, opts)

Compress resources

Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.  **Notes:** - Authenticated user should have modify permission. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.Body10() // Body10 | 
};
apiInstance.compressFiles(evApiKeyevAccessToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **body** | [**Body10**](Body10.md)|  | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyResources"></a>
# **copyResources**
> ResourceCopyMove copyResources(evApiKeyevAccessToken, opts)

Copy resources

Copies a set of exisiting files/folders (provided by an array &#x60;resources&#x60;) to the requested &#x60;parentResource&#x60; in your account. In the &#x60;resources&#x60; array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the  root of the &#x60;parentResource&#x60;.  **Notes:** - Authenticated user should have modify permission. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.Body12() // Body12 | 
};
apiInstance.copyResources(evApiKeyevAccessToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **body** | [**Body12**](Body12.md)|  | [optional] 

### Return type

[**ResourceCopyMove**](ResourceCopyMove.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteResourceById"></a>
# **deleteResourceById**
> EmptyResponse deleteResourceById(id, evApiKey, evAccessToken)

Delete a Resource

Delete a single file or folder resource. Deleting a folder will also delete all of the contents.  **Notes:** - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - There is no way to un-delete a deleted resource. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let id = 56; // Number | ID number of the resource
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.

apiInstance.deleteResourceById(id, evApiKey, evAccessToken, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID number of the resource | 
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteResources"></a>
# **deleteResources**
> EmptyResponse deleteResources(evApiKeyevAccessToken, opts)

Delete Resources

Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.  **Notes:** - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - It is not possible to un-delete a deleted resource. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key
let evAccessToken = "evAccessToken_example"; // String | Access Token
let opts = { 
  'body': new ExaVaultApi.Body9() // Body9 | 
};
apiInstance.deleteResources(evApiKeyevAccessToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key | 
 **evAccessToken** | **String**| Access Token | 
 **body** | [**Body9**](Body9.md)|  | [optional] 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="download"></a>
# **download**
> File download(evApiKey, evAccessToken, resources, opts)

Download a file

Downloads a file. If more than one path is supplied, the files will be zipped before downloading with the downloadName parameter if supplied. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let resources = ["resources_example"]; // [String] | Path of file or folder to be downloaded, starting from the root. Can also be an array of paths.
let opts = { 
  'downloadName': "downloadName_example", // String | If zipping multiple files, the name of the zip file to create and download.
  'polling': true, // Boolean | Used when downloading multiple files so url will be pulled till zip file is created.
  'pollingZipName': "pollingZipName_example" // String | Reference to the previously created zip for polling operation.
};
apiInstance.download(evApiKey, evAccessToken, resources, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **resources** | [**[String]**](String.md)| Path of file or folder to be downloaded, starting from the root. Can also be an array of paths. | 
 **downloadName** | **String**| If zipping multiple files, the name of the zip file to create and download. | [optional] 
 **polling** | **Boolean**| Used when downloading multiple files so url will be pulled till zip file is created. | [optional] 
 **pollingZipName** | **String**| Reference to the previously created zip for polling operation. | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/zip, application/json

<a name="extractFiles"></a>
# **extractFiles**
> ResourceCollectionResponse extractFiles(evApiKeyevAccessToken, opts)

Extract resources

Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.  **Notes:** - You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.Body11() // Body11 | 
};
apiInstance.extractFiles(evApiKeyevAccessToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **body** | [**Body11**](Body11.md)|  | [optional] 

### Return type

[**ResourceCollectionResponse**](ResourceCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPreviewImage"></a>
# **getPreviewImage**
> PreviewFileResponse getPreviewImage(evApiKey, evAccessToken, resource, size, opts)

Preview a file

Returns a resized image of the specified document for supported file types.  Image data returned is encoded in base64 format and can be viewed using the &#x60;&lt;img&gt;&#x60; element.   &#x60;&#x60;&#x60;&lt;img src&#x3D;&#x27;data:image/jpeg;base64&#x27; + results.image/&gt;&#x60;&#x60;&#x60;  **Notes:** - Supported files types are &#x60;&#x27;jpg&#x27;&#x60;, &#x60;&#x27;jpeg&#x27;&#x60;, &#x60;&#x27;gif&#x27;&#x60;, &#x60;&#x27;png&#x27;&#x60;, &#x60;&#x27;bmp&#x27;&#x60;, &#x60;&#x27;pdf&#x27;&#x60;, &#x60;&#x27;psd&#x27;&#x60;, &#x60;&#x27;doc&#x27;&#x60; 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key
let evAccessToken = "evAccessToken_example"; // String | Access Token
let resource = "resource_example"; // String | Resource identifier for the image file.
let size = "size_example"; // String | The size of the image.
let opts = { 
  'width': 56, // Number | Overrides sizes. Sets to a specific width.
  'height': 56, // Number | Overrides sizes. Sets to a specific height.
  'page': 0 // Number | Page number to extract from a multi-page document (0 is the first page). Vaild for **.pdf** or **.doc** files.
};
apiInstance.getPreviewImage(evApiKey, evAccessToken, resource, size, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key | 
 **evAccessToken** | **String**| Access Token | 
 **resource** | **String**| Resource identifier for the image file. | 
 **size** | **String**| The size of the image. | 
 **width** | **Number**| Overrides sizes. Sets to a specific width. | [optional] 
 **height** | **Number**| Overrides sizes. Sets to a specific height. | [optional] 
 **page** | **Number**| Page number to extract from a multi-page document (0 is the first page). Vaild for **.pdf** or **.doc** files. | [optional] [default to 0]

### Return type

[**PreviewFileResponse**](PreviewFileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getResourceInfo"></a>
# **getResourceInfo**
> ResourceResponse getResourceInfo(evApiKey, evAccessToken, resource, opts)

Get Resource Properties

Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.  **Notes:** - Authenticated user should have list permission. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let resource = "resource_example"; // String | Resource identifier of the file or folder to get metadata for.
let opts = { 
  'include': "include_example" // String | Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.
};
apiInstance.getResourceInfo(evApiKey, evAccessToken, resource, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **resource** | **String**| Resource identifier of the file or folder to get metadata for. | 
 **include** | **String**| Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**. | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getResourceInfoById"></a>
# **getResourceInfoById**
> ResourceResponse getResourceInfoById(id, evApiKey, evAccessToken, opts)

Get resource metadata

Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.  **Notes:** - Authenticated user should have list permission. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let id = 56; // Number | ID number of the resource
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'include': "include_example" // String | Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.
};
apiInstance.getResourceInfoById(id, evApiKey, evAccessToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID number of the resource | 
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **include** | **String**| Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**. | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listResourceContents"></a>
# **listResourceContents**
> ResourceCollectionResponse listResourceContents(evApiKey, evAccessToken, id, opts)

List contents of folder

Returns a list of files/folders for the parent resource ID.   You can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional &#x60;include&#x60; parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user&#x27;s home directory (e.g. **_/myfiles/some_folder**).  **Notes:** - Authenticated user should have list permission. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call. 
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let id = 56; // Number | ID of the parent resource to get a list of resources for.
let opts = { 
  'sort': "sort_example", // String | Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.
  'offset': 0, // Number | Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.
  'limit': 56, // Number | The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the `offset parameter, above.
  'type': "type_example", // String | Limit types of resources returned to \"file\" or \"dir\" only.
  'include': "include_example" // String | Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.
};
apiInstance.listResourceContents(evApiKey, evAccessToken, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call.  | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **id** | **Number**| ID of the parent resource to get a list of resources for. | 
 **sort** | **String**| Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending. | [optional] 
 **offset** | **Number**| Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. | [optional] [default to 0]
 **limit** | **Number**| The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the &#x60;offset parameter, above. | [optional] 
 **type** | **String**| Limit types of resources returned to \&quot;file\&quot; or \&quot;dir\&quot; only. | [optional] 
 **include** | **String**| Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**. | [optional] 

### Return type

[**ResourceCollectionResponse**](ResourceCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listResources"></a>
# **listResources**
> ResourceCollectionResponse listResources(evApiKey, evAccessToken, resource, opts)

Get a list of all resources

Returns a list of files and folders in the account. Use the &#x60;resource&#x60; query parameter to indicate the folder you wish to search in (which can be /).   **Searching for Files and Folders**  Using the &#x60;name&#x60; parameter triggers search mode, which will search the entire directory structure under the provided &#x60;resource&#x60; for files or folders with names matching the provided &#x60;name&#x60;. This supports wildcard matching such as:  - \\*Report\\* would find any files or folders with \&quot;Report\&quot; in the name. - Data\\_202?-09-30.xlsx would match items such as \&quot;Data\\_2020-09-30.xlsx\&quot;, \&quot;DATA\\_2021-09-30.xlsx\&quot;, \&quot;data\\_2022-09-30.xlsx\&quot; etc. - sales\\* would find any files or folders starting with the word \&quot;Sales\&quot; - \\*.csv would locate any files ending in \&quot;.csv\&quot; - \\* matches everything within the directory tree starting at your given &#x60;resource&#x60;  The search is not case-sensitive. Searching for Clients\\* or clients\\* or CLIENTS\\*, etc. will provide identical results  You cannot use the &#x60;type&#x60; parameter if you are using the &#x60;name&#x60; parameter to run a search.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let resource = "resource_example"; // String | Resource identifier to get resources for. Can be path/id/name.
let opts = { 
  'sort': "sort_example", // String | Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.
  'offset': 0, // Number | Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.
  'limit': 56, // Number | The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the `offset` parameter, above.
  'type': "type_example", // String | Limit types of resources returned to \"file\" or \"dir\" only. This is ignored if you are using the name parameter to trigger a search.
  'name': "name_example", // String | Text to match resource names. This allows you to filter the results returned. For example, to locate only zip archive files, you can enter `*zip` and only resources ending in \"zip\" will be included in the list of results.
  'include': "include_example" // String | Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.
};
apiInstance.listResources(evApiKey, evAccessToken, resource, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **resource** | **String**| Resource identifier to get resources for. Can be path/id/name. | 
 **sort** | **String**| Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending. | [optional] 
 **offset** | **Number**| Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. | [optional] [default to 0]
 **limit** | **Number**| The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the &#x60;offset&#x60; parameter, above. | [optional] 
 **type** | **String**| Limit types of resources returned to \&quot;file\&quot; or \&quot;dir\&quot; only. This is ignored if you are using the name parameter to trigger a search. | [optional] 
 **name** | **String**| Text to match resource names. This allows you to filter the results returned. For example, to locate only zip archive files, you can enter &#x60;*zip&#x60; and only resources ending in \&quot;zip\&quot; will be included in the list of results. | [optional] 
 **include** | **String**| Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**. | [optional] 

### Return type

[**ResourceCollectionResponse**](ResourceCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="moveResources"></a>
# **moveResources**
> ResourceCopyMove moveResources(evApiKeyevAccessToken, opts)

Move resources

Moves a set of exisiting files/folders (provided by an array &#x60;resources&#x60;) to the requested &#x60;parentResource&#x60; in your account. In the &#x60;resources&#x60; array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the &#x60;parentResource&#x60;.  **Notes:** - Authenticated user should have modify permission. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.Body13() // Body13 | 
};
apiInstance.moveResources(evApiKeyevAccessToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **body** | [**Body13**](Body13.md)|  | [optional] 

### Return type

[**ResourceCopyMove**](ResourceCopyMove.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateResourceById"></a>
# **updateResourceById**
> ResourceResponse updateResourceById(evAccessTokenevApiKeyid, opts)

Rename a resource.

Update the specified file or folder resource record&#x27;s \&quot;name\&quot; parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let evApiKey = "evApiKey_example"; // String | API key required to make the API call.
let id = 56; // Number | ID number of the resource
let opts = { 
  'body': new ExaVaultApi.Body7() // Body7 | 
};
apiInstance.updateResourceById(evAccessTokenevApiKeyid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **evApiKey** | **String**| API key required to make the API call. | 
 **id** | **Number**| ID number of the resource | 
 **body** | [**Body7**](Body7.md)|  | [optional] 

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadFile"></a>
# **uploadFile**
> ResourceResponse uploadFile(evApiKeyevAccessTokenpathfileSize, opts)

Upload a file

Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ResourcesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let path = "path_example"; // String | Destination path for the file being uploaded, including the file name.
let fileSize = 56; // Number | File size, in bits, of the file being uploaded.
let opts = { 
  'file': "file_example" // File | 
  'offsetBytes': 56 // Number | Allows a file upload to resume at a certain number of bytes.
  'resume': true // Boolean | True if upload resume is supported, false if it isn't. 
  'allowOverwrite': false // Boolean | True if a file with the same name is found in the designated path, should be overwritten. False if different file names should be generated. 
};
apiInstance.uploadFile(evApiKeyevAccessTokenpathfileSize, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **path** | **String**| Destination path for the file being uploaded, including the file name. | 
 **fileSize** | **Number**| File size, in bits, of the file being uploaded. | 
 **file** | **File**|  | [optional] 
 **offsetBytes** | **Number**| Allows a file upload to resume at a certain number of bytes. | [optional] 
 **resume** | **Boolean**| True if upload resume is supported, false if it isn&#x27;t.  | [optional] [default to true]
 **allowOverwrite** | **Boolean**| True if a file with the same name is found in the designated path, should be overwritten. False if different file names should be generated.  | [optional] [default to false]

### Return type

[**ResourceResponse**](ResourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

