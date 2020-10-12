# ExaVaultApi.NotificationAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | ID of the user that the notification belongs to. | [optional] 
**type** | **String** | Type of the resoucre the notification is attached to.  | [optional] 
**path** | **String** | Path to the item that the notification is set on. | [optional] 
**name** | **String** | Name of the item that the notification is set on. | [optional] 
**action** | **String** | Action that triggers notification. | [optional] 
**usernames** | **[String]** | Detail on which users can trigger the notification. | [optional] 
**recipients** | [**[NotificationRecipient]**](NotificationRecipient.md) | Notification recipients. | [optional] 
**sendEmail** | **Boolean** | Whether or not an email will send when the notification is triggered. | [optional] 
**readableDescription** | **String** | Human readable description of the notification. | [optional] 
**readableDescriptionWithoutPath** | **String** | Human readable description of the notification without item path. | [optional] 
**shareId** | **String** | ID of the share that the notification belogns to. | [optional] 
**message** | **String** | Custom message that will be sent to the notification recipients. | [optional] 
**created** | **Date** | Timestamp of notifiction creation. | [optional] 
**modified** | **Date** | Timestamp of notification modification. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `file` (value: `"file"`)
* `folder` (value: `"folder"`)
* `shared_folder` (value: `"shared_folder"`)
* `send_receipt` (value: `"send_receipt"`)
* `share_receipt` (value: `"share_receipt"`)
* `file_drop` (value: `"file_drop"`)


<a name="ActionEnum"></a>
## Enum: ActionEnum

* `upload` (value: `"upload"`)
* `download` (value: `"download"`)
* `delete` (value: `"delete"`)
* `all` (value: `"all"`)

