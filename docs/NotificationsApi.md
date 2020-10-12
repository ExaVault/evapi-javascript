# ExaVaultApi.NotificationsApi

All URIs are relative to *https://accountname.exavault.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNotification**](NotificationsApi.md#addNotification) | **POST** /notifications | Create a new notification
[**deleteNotificationById**](NotificationsApi.md#deleteNotificationById) | **DELETE** /notifications/{id} | Delete a notification
[**getNotificationById**](NotificationsApi.md#getNotificationById) | **GET** /notifications/{id} | Get notification details
[**listNotifications**](NotificationsApi.md#listNotifications) | **GET** /notifications | Get a list of notifications
[**updateNotificationById**](NotificationsApi.md#updateNotificationById) | **PATCH** /notifications/{id} | Update a notification

<a name="addNotification"></a>
# **addNotification**
> NotificationResponse addNotification(evApiKeyevAccessToken, opts)

Create a new notification

Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;  - To enable email, pass an array of email addresses to the &#x60;recipients&#x60; parameter of this call.  - To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount).   **Notes:**   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) 

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.NotificationsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make API call. 
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'body': new ExaVaultApi.Body4() // Body4 | 
};
apiInstance.addNotification(evApiKeyevAccessToken, opts, (error, data, response) => {
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
 **evApiKey** | **String**| API Key required to make API call.  | 
 **evAccessToken** | **String**| Access token required to make the API call. | 
 **body** | [**Body4**](Body4.md)|  | [optional] 

### Return type

[**NotificationResponse**](NotificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNotificationById"></a>
# **deleteNotificationById**
> EmptyResponse deleteNotificationById(evApiKey, evAccessToken, id)

Delete a notification

Deletes a notification. Note that deleting a notification _only_ deletes the notification &amp;ndash; it does not delete any underlying files or folders.  **Notes:**  - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification. - You can only delete notifications owned by your user account.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.NotificationsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let id = 56; // Number | ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.

apiInstance.deleteNotificationById(evApiKey, evAccessToken, id, (error, data, response) => {
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
 **id** | **Number**| ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID. | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNotificationById"></a>
# **getNotificationById**
> NotificationResponse getNotificationById(evApiKey, evAccessToken, id, opts)

Get notification details

Get the details for a notification with a specific ID number. You&#x27;ll be able to review its path, triggers and who&#x27;s getting the notification.   **Notes**  - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification. - You can only retrieve notifications owned by your user account.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.NotificationsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let id = 56; // Number | ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.
let opts = { 
  'include': "include_example" // String | Related record types to include in the response. You can include multiple types by separating them with commas. Valid options are **ownerUser**, **resource**, and **share**.
};
apiInstance.getNotificationById(evApiKey, evAccessToken, id, opts, (error, data, response) => {
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
 **id** | **Number**| ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID. | 
 **include** | **String**| Related record types to include in the response. You can include multiple types by separating them with commas. Valid options are **ownerUser**, **resource**, and **share**. | [optional] 

### Return type

[**NotificationResponse**](NotificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listNotifications"></a>
# **listNotifications**
> NotificationCollectionResponse listNotifications(evApiKey, evAccessToken, opts)

Get a list of notifications

Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.  **Notes:**   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.NotificationsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call. 
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let opts = { 
  'type': "type_example", // String | Type of notification include in the list. Valid options are **file**, **folder**, **send_receipt**, **share_receipt**, **file_drop**  If this parameter is not used, only **file** and **folder** type notifications are included in the list.
  'offset': 0, // Number | Starting notification record in the result set. Can be used for pagination.
  'sort': "sort_example", // String | What order the list of matches should be in. Valid sort fields are **resourcename**, **date**, **action** and **type**. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.  You can chose multiple options for the sort by separating them with commmas, such as \"type,-date\" to sort by type, then most recent.
  'limit': 25, // Number | Number of notification records to return. Can be used for pagination.
  'include': "include_example", // String | Related records to include in the response. Valid options are **ownerUser**, **resource**, **share**
  'action': "action_example" // String | The kind of action which triggers the notification. Valid choices are **connect** (only for delivery receipts), **download**, **upload**, **delete**, or **all**   **Note** The **all** action matches notifications set to \"all\", not all notifications. For example, notifications set to trigger only on delete are not included if you filter for action=all
};
apiInstance.listNotifications(evApiKey, evAccessToken, opts, (error, data, response) => {
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
 **type** | **String**| Type of notification include in the list. Valid options are **file**, **folder**, **send_receipt**, **share_receipt**, **file_drop**  If this parameter is not used, only **file** and **folder** type notifications are included in the list. | [optional] 
 **offset** | **Number**| Starting notification record in the result set. Can be used for pagination. | [optional] [default to 0]
 **sort** | **String**| What order the list of matches should be in. Valid sort fields are **resourcename**, **date**, **action** and **type**. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.  You can chose multiple options for the sort by separating them with commmas, such as \&quot;type,-date\&quot; to sort by type, then most recent. | [optional] 
 **limit** | **Number**| Number of notification records to return. Can be used for pagination. | [optional] [default to 25]
 **include** | **String**| Related records to include in the response. Valid options are **ownerUser**, **resource**, **share** | [optional] 
 **action** | **String**| The kind of action which triggers the notification. Valid choices are **connect** (only for delivery receipts), **download**, **upload**, **delete**, or **all**   **Note** The **all** action matches notifications set to \&quot;all\&quot;, not all notifications. For example, notifications set to trigger only on delete are not included if you filter for action&#x3D;all | [optional] 

### Return type

[**NotificationCollectionResponse**](NotificationCollectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNotificationById"></a>
# **updateNotificationById**
> NotificationResponse updateNotificationById(evApiKeyevAccessTokenid, opts)

Update a notification

Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger.   When updating recipient emails, make sure your &#x60;recipients&#x60; parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails.   **Notes:**  - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification. - You can only change notifications owned by your user account.

### Example
```javascript
import ExaVaultApi from 'exa_vault_api';

let apiInstance = new ExaVaultApi.NotificationsApi();
let evApiKey = "evApiKey_example"; // String | API Key required to make the API call.
let evAccessToken = "evAccessToken_example"; // String | Access token required to make the API call.
let id = 56; // Number | ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.
let opts = { 
  'body': new ExaVaultApi.Body3() // Body3 | 
};
apiInstance.updateNotificationById(evApiKeyevAccessTokenid, opts, (error, data, response) => {
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
 **id** | **Number**| ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID. | 
 **body** | [**Body3**](Body3.md)|  | [optional] 

### Return type

[**NotificationResponse**](NotificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

