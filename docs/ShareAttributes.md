# ExaVaultApi.ShareAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Share name. | [optional] 
**hasPassword** | **Boolean** | True if the share has password. | [optional] 
**_public** | **Boolean** | True if the share has a public url. | [optional] 
**accessMode** | **String** | Access rights for the share. | [optional] 
**accessDescription** | **String** | Description of the share access rights. | [optional] 
**embed** | **Boolean** | True if share can be embedded. | [optional] 
**hash** | **String** | Share hash. | [optional] 
**ownerHash** | **String** | Share owner&#x27;s hash. | [optional] 
**expiration** | **String** | Expiration date of the share. | [optional] 
**expired** | **Boolean** | True if the share has expired. | [optional] 
**resent** | **Date** | Invitations resent date. Can be &#x60;null&#x60; if resent never happened. | [optional] 
**type** | **String** | Type of share. | [optional] 
**requireEmail** | **Boolean** | True if share requires email to access. | [optional] 
**fileDropCreateFolders** | **Boolean** | Flag to show if separate folders should be created for each file upload to receive folder. | [optional] 
**paths** | **[String]** | Path to the shared resource in your account. | [optional] 
**recipients** | [**[ShareRecipient1]**](ShareRecipient1.md) | Array of recipients. | [optional] 
**messages** | [**[ShareMessage]**](ShareMessage.md) | Array of invitation messages. | [optional] 
**inherited** | **Boolean** | True if share inherited from parent folder. | [optional] 
**status** | **Number** | Share activity status. Can be active (1) or deactivated (0). | [optional] 
**hasNotification** | **Boolean** | True if share has notification. | [optional] 
**created** | **Date** | Timestamp of share creation. | [optional] 
**modified** | **Date** | Timestamp of share modification. Can be &#x60;null&#x60; if it wasn&#x27;t modified. | [optional] 
**trackingStatus** | **String** | Checks recipient received status and returns whether it&#x27;s been recevied (&#x60;complete&#x60;,) partial recevied (&#x60;incomplete&#x60;,) or not recevied yet (&#x60;pending&#x60;.) | [optional] 
**formId** | **Number** | ID of the form. | [optional] 

<a name="AccessModeEnum"></a>
## Enum: AccessModeEnum

* `upload` (value: `"upload"`)
* `download` (value: `"download"`)
* `download_upload` (value: `"download_upload"`)
* `download_upload_modify_delete` (value: `"download_upload_modify_delete"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `shared_folder` (value: `"shared_folder"`)
* `send` (value: `"send"`)
* `receive` (value: `"receive"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `0` (value: `0`)
* `1` (value: `1`)


<a name="TrackingStatusEnum"></a>
## Enum: TrackingStatusEnum

* `complete` (value: `"complete"`)
* `incomplete` (value: `"incomplete"`)
* `pending` (value: `"pending"`)

