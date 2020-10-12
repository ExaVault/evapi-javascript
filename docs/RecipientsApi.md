# ExaVaultApi.RecipientsApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resendInvitationsForShare**](RecipientsApi.md#resendInvitationsForShare) | **POST** /recipients/shares/invites/{shareId} | Resend invitations to share recipients

<a name="resendInvitationsForShare"></a>
# **resendInvitationsForShare**
> ShareRecipientsResponse resendInvitationsForShare(evApiKeyevAccessTokenshareId, opts)

Resend invitations to share recipients

Resend invitations to one or all recipients attached to specified share. The most recent message that was sent for the share will be re-used for this email.  You can use [GET /shares/{id}](#operation/getShareById) to view the recipient list and message history for a share. Use [PATCH /shares/{id}](#operation/updateShareById) to add or remove recipients.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.RecipientsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let shareId = 56; // Number | ID of the share to resend invites for.
let opts = { 
  'body': new ExaVaultApi.Body18() // Body18 | 
};
apiInstance.resendInvitationsForShare(evApiKeyevAccessTokenshareId, opts, (error, data, response) => {
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
 **shareId** | **Number**| ID of the share to resend invites for. | 
 **body** | [**Body18**](Body18.md)|  | [optional] 

### Return type

[**ShareRecipientsResponse**](ShareRecipientsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

