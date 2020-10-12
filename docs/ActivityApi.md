# ExaVaultApi.ActivityApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSessionLogs**](ActivityApi.md#getSessionLogs) | **GET** /activity/session | Get activity logs
[**getWebhookLogs**](ActivityApi.md#getWebhookLogs) | **GET** /activity/webhooks | Get webhook logs

<a name="getSessionLogs"></a>
# **getSessionLogs**
> SessionActivityResponse getSessionLogs(evApiKey, evAccessToken, opts)

Get activity logs

Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges.     **Operation Types** Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:  | File Manager Value | API Value | Notes | |-----|----|---| | Connect | PASS | | | Disconnect | EXIT | | | Upload | STOR | | | Download | RETR | | | Delete | DELE | | | Create Folder | MKD | | | Rename | RNTO | | | Move | MOVE | | | Copy | COPY | | | Compress | COMPR | | | Extract | EXTRACT | | | Shared Folders | SHARE | | | Send Files | SEND | | | Receive Files | RECV | | | _N/A_ | EDIT\\_SEND | Update send. Not shown in file manager | | Update Share | EDIT\\_SHARE| |  | Update Receive | EDIT\\_RECV | | | Delete Send | DELE\\_SEND | | | Delete Receive | DELE\\_RECV | | | Delete Share | DELE\\_SHARE | | | Create Notification | NOTIFY | | | Update Notification | EDIT\\_NTFY| | | Delete Notification | DELE\\_NTFY | | | Create User | USER | | | Update User | EDIT\\_USER | | | Delete User | DELE\\_USER | | | _N/A_ | DFA | Create direct link. Not shown in file manager | | _N/A_ | EDIT\\_DFA | Update direct link options. Not shown in file manager | | _N/A_ | DELE\\_DFA | Deactivate direct link. Not shown in file manager| 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ActivityApi();
let evApiKey = "evApiKey_example"; // String | API Key
let evAccessToken = "evAccessToken_example"; // String | Access Token
let opts = { 
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date of the filter data range
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | End date of the filter data range
  'ipAddress': "ipAddress_example", // String | Used to filter session logs by ip address.
  'userName': "userName_example", // String | Username used for filtering a list
  'path': "path_example", // String | Path used to filter records
  'type': "type_example", // String | Filter session logs for operation type (see table above for acceptable values)
  'offset': 56, // Number | Offset of the records list
  'limit': 56, // Number | Limit of the records list
  'sort': "sort_example" // String | Comma separated list sort params
};
apiInstance.getSessionLogs(evApiKey, evAccessToken, opts, (error, data, response) => {
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
 **startDate** | **Date**| Start date of the filter data range | [optional] 
 **endDate** | **Date**| End date of the filter data range | [optional] 
 **ipAddress** | **String**| Used to filter session logs by ip address. | [optional] 
 **userName** | **String**| Username used for filtering a list | [optional] 
 **path** | **String**| Path used to filter records | [optional] 
 **type** | **String**| Filter session logs for operation type (see table above for acceptable values) | [optional] 
 **offset** | **Number**| Offset of the records list | [optional] 
 **limit** | **Number**| Limit of the records list | [optional] 
 **sort** | **String**| Comma separated list sort params | [optional] 

### Return type

[**SessionActivityResponse**](SessionActivityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWebhookLogs"></a>
# **getWebhookLogs**
> WebhooksActivityResponse getWebhookLogs(evApiKey, evAccessToken, opts)

Get webhook logs

Returns the webhook logs for your account. Optional query paramaters will filter the returned results based on a number of options including path, tpye of event, or status code.   **Event Types**  Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). These are the valid options for event types:  - Upload - Download - Delete File - Delete Folder - Create Folder - Rename - Move - Copy - Compress - Extract - Share Folder - Send Files - Receive Files - Update Share - Update Receive - Delete Send - Delete Receive - Delete Share - Create Notification - Update Notification - Delete Notification - Create User - Update User  - Delete User - Connect - Disconnect

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.ActivityApi();
let evApiKey = "evApiKey_example"; // String | API Key
let evAccessToken = "evAccessToken_example"; // String | Access Token
let opts = { 
  'event': "event_example", // String | Filter by triggered event
  'statusCode': 56, // Number | Filter by webhook response status code
  'path': "path_example", // String | Path used to filter records
  'username': "username_example", // String | Filter by triggering username.
  'offset': 56, // Number | Records to skip before returning results
  'limit': 56, // Number | Limit of the records list
  'sort': "sort_example" // String | Comma separated list sort params
};
apiInstance.getWebhookLogs(evApiKey, evAccessToken, opts, (error, data, response) => {
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
 **event** | **String**| Filter by triggered event | [optional] 
 **statusCode** | **Number**| Filter by webhook response status code | [optional] 
 **path** | **String**| Path used to filter records | [optional] 
 **username** | **String**| Filter by triggering username. | [optional] 
 **offset** | **Number**| Records to skip before returning results | [optional] 
 **limit** | **Number**| Limit of the records list | [optional] 
 **sort** | **String**| Comma separated list sort params | [optional] 

### Return type

[**WebhooksActivityResponse**](WebhooksActivityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

