# ExaVaultApi.FormsidElements

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the form element. If you&#x27;re adding a new element to the form, do not include this field. | [optional] 
**name** | **String** | Name of the form element. | [optional] 
**order** | **Number** | The order the fields will be displayed to the receipient. Starts at 0.  | [optional] 
**type** | **String** | Type of form field to use. | [optional] 
**settings** | [**FormsidSettings**](FormsidSettings.md) |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `name` (value: `"name"`)
* `email` (value: `"email"`)
* `text` (value: `"text"`)
* `textarea` (value: `"textarea"`)
* `upload_area` (value: `"upload_area"`)

