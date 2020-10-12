# ExaVaultApi.Body3

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Type of action be notified about. Notifications will only be sent for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete) | [optional] 
**usernames** | **[String]** | Determines which users&#x27; actions should trigger the notification.   Rather than listing  individual users, you can also use 3 special options:  - **notice\\_user\\_all** for activity by any user or share recipient - **notice\\_user\\_all\\_users** for activity only by user accounts - **notice\\_user\\_all\\_recipient** for activity only by share recipients | [optional] 
**sendEmail** | **Boolean** | Whether an email should be sent to the recipients when matching activity happens. | [optional] 
**recipients** | **[String]** | Email addresses to send notification emails to. If empty, sends to the current user&#x27;s email address. | [optional] 
**message** | **String** | Custom message to insert into the notification emails, along with the matching activity. | [optional] 

<a name="ActionEnum"></a>
## Enum: ActionEnum

* `upload` (value: `"upload"`)
* `download` (value: `"download"`)
* `delete` (value: `"delete"`)
* `all` (value: `"all"`)

