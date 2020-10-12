# ExaVaultApi.EmailApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendReferralEmail**](EmailApi.md#sendReferralEmail) | **POST** /email/referral | Send referral email to a given address
[**sendWelcomeEmail**](EmailApi.md#sendWelcomeEmail) | **POST** /email/welcome/{username} | Resend welcome email to specific user

<a name="sendReferralEmail"></a>
# **sendReferralEmail**
> EmptyResponse sendReferralEmail(evApiKeyevAccessToken, opts)

Send referral email to a given address

Invite a friend to sign up for a free trial of ExaVault. Send a [referral](/lp/referafriend/) email to an email address. If the recipient signs up for ExaVault, we&#x27;ll apply a credit to your account for the referral. 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.EmailApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.Body15() // Body15 | 
};
apiInstance.sendReferralEmail(evApiKeyevAccessToken, opts, (error, data, response) => {
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
 **body** | [**Body15**](Body15.md)|  | [optional] 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendWelcomeEmail"></a>
# **sendWelcomeEmail**
> EmptyResponse sendWelcomeEmail(evApiKey, evAccessToken, username)

Resend welcome email to specific user

Send a welcome email to a user. The contents of the welcome email can be set by [PATCH /accounts](#operation/updateAccount).

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.EmailApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let username = "username_example"; // String | A username to send the welcome email to.

apiInstance.sendWelcomeEmail(evApiKey, evAccessToken, username, (error, data, response) => {
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
 **username** | **String**| A username to send the welcome email to. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

