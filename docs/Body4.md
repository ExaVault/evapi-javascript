# ExaVaultApi.Body4

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | What kind of notification you&#x27;re making. Valid choices are:  - **file** to monitor activity for a file resource - **folder** to monitor activity for a folder resource | 
**resource** | **String** | Resources for this notification. See details on [how to specify resources](#section/Identifying-Resources) above. | 
**action** | **String** | Type of action be notified about. Notifications will only be fired for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete) | 
**usernames** | **[String]** | Determines which users&#x27; actions should trigger the notification.   Rather than listing  individual users, you can also use 3 special options:  - **notice\\_user\\_all** for activity by any user or share recipient - **notice\\_user\\_all\\_users** for activity only by user accounts - **notice\\_user\\_all\\_recipient** for activity only by share recipients | 
**sendEmail** | **Boolean** | Set to true if the user should be notified by email when the notification is triggered. | 
**recipients** | **[String]** | Email addresses to send notification emails to. If not specified, sends to the current user&#x27;s email address. | [optional] 
**message** | **String** | Custom message to include in notification emails. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `file` (value: `"file"`)
* `folder` (value: `"folder"`)


<a name="ActionEnum"></a>
## Enum: ActionEnum

* `upload` (value: `"upload"`)
* `download` (value: `"download"`)
* `delete` (value: `"delete"`)
* `all` (value: `"all"`)

