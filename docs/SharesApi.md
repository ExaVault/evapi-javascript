# ExaVaultApi.SharesApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addShare**](SharesApi.md#addShare) | **POST** /shares | Creates a share
[**completeDirectSend**](SharesApi.md#completeDirectSend) | **POST** /shares/complete-send/{id} | Complete send files
[**deleteShareById**](SharesApi.md#deleteShareById) | **DELETE** /shares/{id} | Deactivate a share
[**getShareById**](SharesApi.md#getShareById) | **GET** /shares/{id} | Get a share
[**listShares**](SharesApi.md#listShares) | **GET** /shares | Get a list of shares
[**updateShareById**](SharesApi.md#updateShareById) | **PATCH** /shares/{id} | Update a share

<a name="addShare"></a>
# **addShare**
> ShareResponse addShare(evApiKeyevAccessToken, opts)

Creates a share

Creates a new share object for the given path in your account. We support three types of shares:    - A **shared folder** allows you to let outside parties access a folder in your account (including any files and nested subfolders) using just a link. Shared folders can be restricted; e.g. with an expiration date, password, download-only, etc. Shared folders are &#x27;live&#x27;; if someone makes a change to a file in your shared folder, it will be immediately reflected in your account, and vice-versa.   - A file **send** lets you send one or more files via an easy download link. File sends are different than shared folders because file sends are &#x27;point in time&#x27; -- the recipient will get the files as you sent them. If you later make a change to the source file, it will not be updated for the recipient.   - A **receive** folder lets you receive files into your account. You can either send users a link, or optionally [embed a customized form](/docs/account/05-file-sharing/05-upload-widget) on your website.    **How to send files from your computer using the API**:  In order to use the API to send files which are not already stored in your account, you&#x27;ll need to follow a three-step process:  1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the &#x60;accessMode&#x60; and set the &#x60;sendingLocalFiles&#x60; paramter to **true**. The response that is returned will include a \&quot;meta\&quot; attribute, which contains an **accessToken** attribute. This new access token is valid only for the send. 2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you&#x27;ve created. The \&quot;/\&quot; path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the &#x60;ev-access-token&#x60; header** 3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the &#x60;ev-access-token&#x60; header, not the temporary access token**  **Notes:**  Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.SharesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.Body16() // Body16 | 
};
apiInstance.addShare(evApiKeyevAccessToken, opts, (error, data, response) => {
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
 **body** | [**Body16**](Body16.md)|  | [optional] 

### Return type

[**ShareResponse**](ShareResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="completeDirectSend"></a>
# **completeDirectSend**
> ShareResponse completeDirectSend(evApiKey, evAccessToken, id)

Complete send files

After uploading the file(s) to be sent, this method will trigger invitation emails and finish the send files setup. If you are not sending files from your own computer in a send, you will not need this step.    **How to send files from your computer using the API**:  In order to use the API to send files which are not already stored in your account, you&#x27;ll need to follow a three-step process:  1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the &#x60;accessMode&#x60; and set the &#x60;sendingLocalFiles&#x60; paramter to **true**. The response that is returned will include a \&quot;meta\&quot; attribute, which contains an **accessToken** attribute. This new access token is valid only for the send. 2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you&#x27;ve created. The \&quot;/\&quot; path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the &#x60;ev-access-token&#x60; header** 3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the &#x60;ev-access-token&#x60; header, not the temporary access token** 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.SharesApi();
let evApiKey = "evApiKey_example"; // String | API Key
let evAccessToken = "evAccessToken_example"; // String | Access Token
let id = 56; // Number | ID of the share to trigger invitations for.

apiInstance.completeDirectSend(evApiKey, evAccessToken, id, (error, data, response) => {
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
 **id** | **Number**| ID of the share to trigger invitations for. | 

### Return type

[**ShareResponse**](ShareResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteShareById"></a>
# **deleteShareById**
> EmptyResponse deleteShareById(id, evApiKey, evAccessToken)

Deactivate a share

Deactivate a share. Deactivating a share does not remove the underlying files for **shared_folder** and **receive** share types; it merely removes the access URL. Deleting a **send** share type does remove the associated files, as files that have been sent are only associated with the share, and aren&#x27;t stored anywhere else in the account.  **Notes:**  - You must have [sharing permissons](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this. - You must have [admin-level access](/docs/account/04-users/01-admin-users), or you must be the owner of the specified share you wish to delete.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.SharesApi();
let id = 56; // Number | ID of the share entry
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.

apiInstance.deleteShareById(id, evApiKey, evAccessToken, (error, data, response) => {
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
 **id** | **Number**| ID of the share entry | 
 **evApiKey** | **String**| API Key required to make the API call. | 
 **evAccessToken** | **String**| Access token required to make the API call. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShareById"></a>
# **getShareById**
> ShareResponse getShareById(id, evApiKey, evAccessToken, opts)

Get a share

Get the details for a specific share entry. You can use the &#x60;include&#x60; parameter to also get the details of related records, such as the owning user or the resources involved in the share.  **Notes:**  - Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - To get share objects with type send, authenticated user&#x27;s role must be admin or master.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.SharesApi();
let id = 56; // Number | ID of the share entry
let evApiKey = "evApiKey_example"; // String | API Key
let evAccessToken = "evAccessToken_example"; // String | Access Token
let opts = { 
  'include': "include_example" // String | Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.
};
apiInstance.getShareById(id, evApiKey, evAccessToken, opts, (error, data, response) => {
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
 **id** | **Number**| ID of the share entry | 
 **evApiKey** | **String**| API Key | 
 **evAccessToken** | **String**| Access Token | 
 **include** | **String**| Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**. | [optional] 

### Return type

[**ShareResponse**](ShareResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listShares"></a>
# **listShares**
> ShareCollectionResponse listShares(evApiKey, evAccessToken, opts)

Get a list of shares

Get a list of shares that you would have access to view through the web interface. You can limit which results are returned by specifying specific types of shares you wish to view, finding things shared with a specific email address, as well as finding shares for specific folder names.   **Notes:**  - Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). - To get share objects with type send, authenticated user&#x27;s role must be admin or master.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.SharesApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'offset': 56, // Number | Current offset of records (for pagination)
  'limit': 100, // Number | Limit of records to be returned (for pagination)
  'scope': "scope_example", // String | Set of shares to return. (**all**=all of them, **active**=shares that are currently active, **curentUser**=shares created by you)
  'sort': "sort_example", // String | What order the list of matches should be in.
  'type': "type_example", // String | Limit the list of matches to only certain types of shares.
  'include': "include_example", // String | Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.
  'name': "name_example", // String | When provided, only shares whose names include this value will be in the list. Supports wildcards, such as **send\\*** to return everything starting with \"send\".  Use this parameter if you are searching for shares or receives for a specific folder name. For example **_/Clients/ACME/To Be Processed**.
  'recipient': "recipient_example", // String | Filter the results to include only shares that invited a certain email address. Supports wildcard matching so that **\\*@example.com** will give back entries shared with addresses ending in \"@example.com\". 
  'message': "message_example", // String | When provided, only shares with a message that contains the text will be included in the list of matches. Both the subject and the body of all messages will be checked for matches. This will allways be a wildcard match, so that searching for **taxes** will return any shares with a message that contains the word \"taxes\".
  'username': "username_example", // String | When provided, only shares created by the user with that `username` will be included in the list. Does not support wildcard searching.
  'search': "search_example" // String | Searches the share name, username, recipients, share messages fields for the provided value. Supports wildcard searches.
};
apiInstance.listShares(evApiKey, evAccessToken, opts, (error, data, response) => {
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
 **offset** | **Number**| Current offset of records (for pagination) | [optional] 
 **limit** | **Number**| Limit of records to be returned (for pagination) | [optional] [default to 100]
 **scope** | **String**| Set of shares to return. (**all**&#x3D;all of them, **active**&#x3D;shares that are currently active, **curentUser**&#x3D;shares created by you) | [optional] 
 **sort** | **String**| What order the list of matches should be in. | [optional] 
 **type** | **String**| Limit the list of matches to only certain types of shares. | [optional] 
 **include** | **String**| Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**. | [optional] 
 **name** | **String**| When provided, only shares whose names include this value will be in the list. Supports wildcards, such as **send\\*** to return everything starting with \&quot;send\&quot;.  Use this parameter if you are searching for shares or receives for a specific folder name. For example **_/Clients/ACME/To Be Processed**. | [optional] 
 **recipient** | **String**| Filter the results to include only shares that invited a certain email address. Supports wildcard matching so that **\\*@example.com** will give back entries shared with addresses ending in \&quot;@example.com\&quot;.  | [optional] 
 **message** | **String**| When provided, only shares with a message that contains the text will be included in the list of matches. Both the subject and the body of all messages will be checked for matches. This will allways be a wildcard match, so that searching for **taxes** will return any shares with a message that contains the word \&quot;taxes\&quot;. | [optional] 
 **username** | **String**| When provided, only shares created by the user with that &#x60;username&#x60; will be included in the list. Does not support wildcard searching. | [optional] 
 **search** | **String**| Searches the share name, username, recipients, share messages fields for the provided value. Supports wildcard searches. | [optional] 

### Return type

[**ShareCollectionResponse**](ShareCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateShareById"></a>
# **updateShareById**
> ShareResponse updateShareById(bodyevApiKeyevAccessTokenid)

Update a share

Change the settings on an active share. Any changes made will affect all users that have access to the share.   When updating invitees, pass the &#x60;recipients&#x60; body paramater with the full list of people who should be included on the share. If you resend the list without an existing recipient, they will be removed from the share.  **Notes:**    - Authenticated user should be the owner of the specified share.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.SharesApi();
let body = new ExaVaultApi.Body17(); // Body17 | 
let evApiKey = "evApiKey_example"; // String | API Key
let evAccessToken = "evAccessToken_example"; // String | Access Token
let id = 56; // Number | ID of the share entry

apiInstance.updateShareById(bodyevApiKeyevAccessTokenid, (error, data, response) => {
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
 **body** | [**Body17**](Body17.md)|  | 
 **evApiKey** | **String**| API Key | 
 **evAccessToken** | **String**| Access Token | 
 **id** | **Number**| ID of the share entry | 

### Return type

[**ShareResponse**](ShareResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

