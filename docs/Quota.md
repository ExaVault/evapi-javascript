# ExaVaultApi.Quota

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diskLimit** | **Number** | Amount of disk space that the account has available to it. This may be increased by upgrading to a larger plan. | [optional] 
**diskUsed** | **Number** | Amount of disk space currently in use. | [optional] 
**noticeEnabled** | **Boolean** | Should a quota warning be sent to the account owner when a threshold level of space utilization is reached? | [optional] 
**noticeThreshold** | **Number** | Treshold that triggers a quota notification. This represents the \&quot;percent full\&quot; your account must be before the quota notification is generated. | [optional] 
