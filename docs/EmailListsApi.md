# ExaVaultApi.EmailListsApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEmailList**](EmailListsApi.md#addEmailList) | **POST** /email-lists | Create new email list
[**deleteEmailListById**](EmailListsApi.md#deleteEmailListById) | **DELETE** /email-lists/{id} | Delete an email group with given id
[**getEmailListById**](EmailListsApi.md#getEmailListById) | **GET** /email-lists/{id} | Get individual email group
[**getEmailLists**](EmailListsApi.md#getEmailLists) | **GET** /email-lists | Get all email groups
[**updateEmailListById**](EmailListsApi.md#updateEmailListById) | **PATCH** /email-lists/{id} | Update an email group

<a name="addEmailList"></a>
# **addEmailList**
> EmailListResponse addEmailList(evApiKeyevAccessToken, opts)

Create new email list

Create a new email list. Among other things, email lists can be used to send files or share folders with a group of email addresses at once.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.EmailListsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.Body() // Body | 
};
apiInstance.addEmailList(evApiKeyevAccessToken, opts, (error, data, response) => {
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
 **body** | [**Body**](Body.md)|  | [optional] 

### Return type

[**EmailListResponse**](EmailListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEmailListById"></a>
# **deleteEmailListById**
> EmptyResponse deleteEmailListById(evApiKey, evAccessToken, id)

Delete an email group with given id

Permanently delete an email group. This action is not reversable. We recommend making a user confirm this action before sending the API call. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.EmailListsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let id = 56; // Number | ID of the email list to delete

apiInstance.deleteEmailListById(evApiKey, evAccessToken, id, (error, data, response) => {
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
 **id** | **Number**| ID of the email list to delete | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEmailListById"></a>
# **getEmailListById**
> EmailListResponse getEmailListById(evApiKey, evAccessToken, id, opts)

Get individual email group

Retrieve all the details of a specifc email list including it&#x27;s name, when it was created and all the email addresses that belong to the group.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.EmailListsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let id = 56; // Number | ID of the email list to return.
let opts = { 
  'include': "include_example" // String | Related record types to include in the response. Valid option is `ownerUser`
};
apiInstance.getEmailListById(evApiKey, evAccessToken, id, opts, (error, data, response) => {
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
 **id** | **Number**| ID of the email list to return. | 
 **include** | **String**| Related record types to include in the response. Valid option is &#x60;ownerUser&#x60; | [optional] 

### Return type

[**EmailListResponse**](EmailListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEmailLists"></a>
# **getEmailLists**
> EmailListCollectionResponse getEmailLists(evApiKey, evAccessToken, opts)

Get all email groups

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.EmailListsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'include': "include_example" // String | Related record types to include in the response. Valid option is `ownerUser`
};
apiInstance.getEmailLists(evApiKey, evAccessToken, opts, (error, data, response) => {
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
 **include** | **String**| Related record types to include in the response. Valid option is &#x60;ownerUser&#x60; | [optional] 

### Return type

[**EmailListCollectionResponse**](EmailListCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateEmailListById"></a>
# **updateEmailListById**
> EmailListResponse updateEmailListById(evApiKeyevAccessTokenid, opts)

Update an email group

Add or remove emails from an email list that can be used to send and share files with groups.   **Notes**  *This call will **replace** your current email list in its entirety.* If you want to keep any existing emails on the list, be sure to submit the call with any current emails you want to keep on the list.  

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.EmailListsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let id = 56; // Number | ID of the email list to update.
let opts = { 
  'body': new ExaVaultApi.Body1() // Body1 | 
};
apiInstance.updateEmailListById(evApiKeyevAccessTokenid, opts, (error, data, response) => {
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
 **id** | **Number**| ID of the email list to update. | 
 **body** | [**Body1**](Body1.md)|  | [optional] 

### Return type

[**EmailListResponse**](EmailListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

