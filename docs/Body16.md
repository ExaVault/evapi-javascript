# ExaVaultApi.Body16

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of share to create. See above for a description of each. | 
**name** | **String** | A name for the share. This will be visible on the page that recipients visit.  | 
**resources** | **[String]** | Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.  **shared_folder** and **receive** shares must have only one &#x60;resource&#x60;, which is a directory that does not have a current share attached.  **send** shares may have multiple &#x60;resource&#x60; parameters. You can also leave this parameter null if you are planning to upload files to the send. If you are planning to upload files to the send that are not yet in your account, you will also need to call the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to finish the send operation.  | [optional] 
**accessMode** | **[String]** | Array of permissions that describes what people can do when they visit the share. Valid options are &#x60;upload&#x60; &#x60;download&#x60; &#x60;modify&#x60; and &#x60;delete&#x60;  Not all permissions work with all shares - **receive** shares must always have the permission to **upload** and never provide a method for visitors to **download**.  If you are creating a share of type **send** and plan to upload files from your own computer before completing the send with [POST /shares/complete-send/{id}](#operation/completeDirectSend), use the access mode **upload** | 
**embed** | **Boolean** | Whether this share can be embedded within a web page. | [optional] 
**recipients** | [**[SharesRecipients]**](SharesRecipients.md) | People you want to invite to the share. **Note**: unless you also set the &#x60;subject&#x60; and &#x60;message&#x60; for the new share, invitation emails will not be sent to these recipients. | [optional] 
**expiration** | **Date** | Expiration date for the share. If someone attempts to use the share after this date, they will receive an error that the share is not available. | [optional] 
**hasNotification** | **Boolean** | Whether delivery receipts should be sent. | [optional] 
**isPublic** | **Boolean** | Whether someone can visit the share without following a personalized recipient link. | [optional] 
**message** | **String** | The message to be included in email invitations for your recipients. Ignored if you have not also provided &#x60;recipients&#x60; and &#x60;subject&#x60; | [optional] 
**notificationEmails** | **[String]** | Emails that will receive delivery receipts for this share. &#x60;hasNotification&#x60; must be **true** for delivery receipts will be sent. | [optional] 
**password** | **String** | Set a password for recipients to access the share. All recipients will use the same password. | [optional] 
**requireEmail** | **Boolean** | True if recipients must provide their email to view the share. | [optional] 
**subject** | **String** | Subject to use on emails inviting recipients to the share. Ignored if you have not also provided &#x60;recipients&#x60; and a &#x60;message&#x60; | [optional] 
**fileDropCreateFolders** | **Boolean** | Only used for **receive** shares. If true, uploads will be automatically placed into sub-folders of the folder, named after the chosen field on your form.  | [optional] 
**sendingLocalFiles** | **Boolean** | Use this only for **send** shares. Flag to indicate that you are going to upload additional files from your computer to the share. If this is **true**, you will also need to use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) call to finish setting up your share after the files are uploaded. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `shared_folder` (value: `"shared_folder"`)
* `receive` (value: `"receive"`)
* `send` (value: `"send"`)

