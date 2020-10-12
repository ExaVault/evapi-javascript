# ExaVaultApi.UserAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Number** | Indicates user activity status. &#x60;0&#x60; means the user is locked and cannot log in. &#x60;1&#x60; means the user is active and can log in. | 
**expiration** | **String** | Timestamp of user expiration. | [optional] 
**created** | **Date** | Timestamp of user creation. | 
**modified** | **Date** | Timestamp of user modification. | 
**accessTimestamp** | **String** | Timestamp of most recent successful user login. | [optional] 
**accountName** | **String** | Name of the account this user belongs to. | 
**username** | **String** | Username of the user. | 
**nickname** | **String** | Nickname of the user. | 
**email** | **String** | Email address of the user. | [optional] 
**homeDir** | **String** | Path to the user&#x27;s home folder. | 
**permissions** | [**UserPermissions**](UserPermissions.md) |  | 
**role** | **String** | User&#x27;s access level | 
**timeZone** | **String** | User&#x27;s timezone. See &lt;a href&#x3D;&#x27;https://php.net/manual/en/timezones.php&#x27; target&#x3D;&#x27;blank&#x27;&gt;this page&lt;/a&gt; for allowed values. | 
**onboarding** | **Boolean** | Whether the onboarding help system is enabled for this user. &#x60;true&#x60; means that additional help popups are displayed in the web application for this user. | 
**firstLogin** | **Boolean** | &#x60;true&#x60; if the user has logged into the system. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `0` (value: `0`)
* `1` (value: `1`)


<a name="RoleEnum"></a>
## Enum: RoleEnum

* `user` (value: `"user"`)
* `admin` (value: `"admin"`)
* `master` (value: `"master"`)

