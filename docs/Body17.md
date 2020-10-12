# ExaVaultApi.Body17

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the share. | [optional] 
**resources** | **[String]** | Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.  **shared_folder** and **receive** shares must have only one &#x60;resource&#x60;, which is a directory that does not have a current share attached.  **send** shares may have multiple &#x60;resource&#x60; parameters.   **NOTE**: Sending this parameter will **REPLACE** the existing resources with the resources included in this request. | [optional] 
**accessMode** | **[String]** | What visitors who view this share can do. Valid options include **download**, **upload**, **delete**, **modify** | [optional] 
**embed** | **Boolean** | Whether the share can be embedded in another web page. | [optional] 
**recipients** | [**[SharesRecipients]**](SharesRecipients.md) | People you want to invite to the share.   **Note**: unless you also set the &#x60;subject&#x60; and &#x60;message&#x60; for the new share, invitation emails will not be sent to these recipients.  **Note**: Recipients in this list will **REPLACE** the recipients already assigned to this share.  | [optional] 
**expiration** | **Date** | New expiration date and time for the share | [optional] 
**hasNotification** | **Boolean** | Whether delivery receipts should be sent for this share. | [optional] 
**isPublic** | **Boolean** | Whether people can visit the share without following a link from an invitation email | [optional] 
**message** | **String** | Message content to use for emails inviting recipients to the share. Ignored if you have not also provided &#x60;recipients&#x60; and a &#x60;subject&#x60; | [optional] 
**notificationEmails** | **[String]** | List of email addresses to send delivery receipts to. Ignored if &#x60;hasNotification&#x60; is false.  | [optional] 
**password** | **String** | New password for the share. To leave the password unchanged, do not send this parameter. | [optional] 
**requireEmail** | **Boolean** | Whether visitors to the share will be required to enter their email in order to access the share. | [optional] 
**subject** | **String** | Subject to use on emails inviting recipients to the share. Ignored if you have not also provided &#x60;recipients&#x60; and a &#x60;message&#x60; | [optional] 
**fileDropCreateFolders** | **Boolean** | Whether uploads to a receive folder should be automatically placed into subfolders. See our [receive folder documentation](/docs/account/05-file-sharing/05-form-builder#advanced-form-settings) | [optional] 
**status** | **Number** | New status for the share. You can set an active share to inactive by setting the status to **0** | [optional] 
