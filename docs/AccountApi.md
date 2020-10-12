# ExaVaultApi.AccountApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](AccountApi.md#getAccount) | **GET** /account | Get account settings
[**updateAccount**](AccountApi.md#updateAccount) | **PATCH** /account | Update account settings

<a name="getAccount"></a>
# **getAccount**
> AccountResponse getAccount(evApiKey, evAccessToken, opts)

Get account settings

Get setttings for your account, such as current space usage, webhooks settings, welcome email content and IP address restrictions.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.AccountApi();
let evApiKey = "evApiKey_example"; // String | API Key required for the request
let evAccessToken = "evAccessToken_example"; // String | Access Token for the request
let opts = { 
  'include': "include_example" // String | Related records to include in the response. Valid option is **masterUser**
};
apiInstance.getAccount(evApiKey, evAccessToken, opts, (error, data, response) => {
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
 **evApiKey** | **String**| API Key required for the request | 
 **evAccessToken** | **String**| Access Token for the request | 
 **include** | **String**| Related records to include in the response. Valid option is **masterUser** | [optional] 

### Return type

[**AccountResponse**](AccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAccount"></a>
# **updateAccount**
> AccountResponse updateAccount(evApiKeyevAccessToken, opts)

Update account settings

Update account settings, such as welcome email content, IP address restrictions, webhooks settings and secure password requirements.  **Notes**  - You must have [admin-level access](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to change account settings.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.AccountApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.UpdateAccountBody() // UpdateAccountBody | Update Account Settings
};
apiInstance.updateAccount(evApiKeyevAccessToken, opts, (error, data, response) => {
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
 **body** | [**UpdateAccountBody**](UpdateAccountBody.md)| Update Account Settings | [optional] 

### Return type

[**AccountResponse**](AccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

