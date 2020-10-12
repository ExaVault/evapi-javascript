# ExaVaultApi.ResourceAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **String** | Unique hash of the resource. | [optional] 
**name** | **String** | Resource name, e.g. the name of the file or folder. | [optional] 
**extension** | **String** | Resource extension. Property exists only if resource &#x60;type&#x60; is file. | [optional] 
**type** | **String** | Type of the resource. | [optional] 
**createdBy** | **String** | Username of the creator. | [optional] 
**uploadDate** | **Date** | Timestamp of resource upload. | [optional] 
**createdAt** | **Date** | Date-time of resource creation. | [optional] 
**updatedAt** | **Date** | Date-time of resource modification. | [optional] 
**accessedAt** | **Date** | Date-time of the time when resource was accessed. | [optional] 
**createdTime** | **Number** | UNIX timestamp of resource creation | [optional] 
**updatedTime** | **Number** | UNIX timestamp of resource modification | [optional] 
**accessedTime** | **Number** | UNIX timestamp of last access | [optional] 
**path** | **String** | Full path to the resource. | [optional] 
**size** | **Number** | Resource size in bytes | [optional] 
**fileCount** | **Number** | Number of files within folder. null if resource type is a file. | [optional] 
**previewable** | **Boolean** | Can resource be previewed. Property equals &#x60;null&#x60; if resource &#x60;type&#x60; is dir. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `file` (value: `"file"`)
* `dir` (value: `"dir"`)

