'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersApi = exports.SharesApi = exports.ResourcesApi = exports.RecipientsApi = exports.NotificationsApi = exports.FormApi = exports.EmailListsApi = exports.EmailApi = exports.ActivityApi = exports.AccountApi = exports.WebhooksActivityResponse = exports.WebhooksActivityEntryAttributes = exports.WebhooksActivityEntry = exports.UserResponse = exports.UserRelationshipsOwnerAccountData = exports.UserRelationshipsOwnerAccount = exports.UserRelationshipsHomeResourceData = exports.UserRelationshipsHomeResource = exports.UserRelationships = exports.UserPermissions = exports.UserCollectionResponse = exports.UserAttributes = exports.User = exports.UpdateAccountBody = exports.SharesRecipients = exports.ShareResponse = exports.ShareRelationshipsResources = exports.ShareRelationshipsOwnerData = exports.ShareRelationshipsOwner = exports.ShareRelationshipsNotifications = exports.ShareRelationshipsMessages = exports.ShareRelationshipsData2 = exports.ShareRelationshipsData1 = exports.ShareRelationshipsData = exports.ShareRelationships = exports.ShareRelationship = exports.ShareRecipientsResponse = exports.ShareRecipient1 = exports.ShareRecipient = exports.ShareMessageAttributes = exports.ShareMessage = exports.ShareCollectionResponse = exports.ShareAttributes = exports.Share = undefined;
exports.SessionActivityResponse = exports.SessionActivityEntryAttributes = exports.SessionActivityEntry = exports.ResourceResponse = exports.ResourceRelationshipsShareData = exports.ResourceRelationshipsShare = exports.ResourceRelationshipsParentResourceData = exports.ResourceRelationshipsParentResource = exports.ResourceRelationshipsNotifications = exports.ResourceRelationshipsDirectFileData = exports.ResourceRelationshipsDirectFile = exports.ResourceRelationshipsData = exports.ResourceRelationships = exports.ResourceMultiResponse = exports.ResourceDelete = exports.ResourceCopyMove = exports.ResourceCollectionResponse = exports.ResourceAttributes = exports.Resource = exports.RelationshipData = exports.Quota = exports.PreviewFileResponse = exports.PreviewFileAttributes = exports.PreviewFile = exports.NotificationResponse = exports.NotificationRelationshipsShareData = exports.NotificationRelationshipsShare = exports.NotificationRelationshipsResourceData = exports.NotificationRelationshipsResource = exports.NotificationRelationshipsOwnerUserData = exports.NotificationRelationshipsOwnerUser = exports.NotificationRelationships = exports.NotificationRecipient = exports.NotificationCollectionResponse = exports.NotificationAttributes = exports.Notification = exports.MasterUserMasterUserData = exports.MasterUserMasterUser = exports.MasterUser = exports.FormsidSettings = exports.FormsidElements = exports.FormResponse = exports.FormRelationshipsShareData = exports.FormRelationshipsShare = exports.FormRelationships = exports.FormFieldUploadAreaSettings = exports.FormFieldUploadArea = exports.FormFieldSettings = exports.FormField = exports.FormEntryResponse = exports.FormEntryField = exports.FormEntryAttributes = exports.FormEntry = exports.FormAttributes = exports.Form = exports.Error403Errors = exports.Error403 = exports.Error401Errors = exports.Error401 = exports.Error = exports.EmptyResponse = exports.EmailListResponse = exports.EmailListRelationships = exports.EmailListOwnerUser = exports.EmailListCollectionResponse = exports.EmailListAttributes = exports.EmailList = exports.DownloadPollingResponse = exports.DownloadPolling = exports.CallbackSettingsTriggers = exports.CallbackSettings1Triggers = exports.CallbackSettings1 = exports.CallbackSettings = exports.BrandingSettings1 = exports.BrandingSettings = exports.Body9 = exports.Body8 = exports.Body7 = exports.Body6 = exports.Body5 = exports.Body4 = exports.Body3 = exports.Body2 = exports.Body18 = exports.Body17 = exports.Body16 = exports.Body15 = exports.Body14 = exports.Body13 = exports.Body12 = exports.Body11 = exports.Body10 = exports.Body1 = exports.Body = exports.AccountResponse = exports.AccountAttributesAllowedIp = exports.AccountAttributes = exports.AccountAllowedIpRanges = exports.Account = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Account = require('./model/Account');

var _Account2 = _interopRequireDefault(_Account);

var _AccountAllowedIpRanges = require('./model/AccountAllowedIpRanges');

var _AccountAllowedIpRanges2 = _interopRequireDefault(_AccountAllowedIpRanges);

var _AccountAttributes = require('./model/AccountAttributes');

var _AccountAttributes2 = _interopRequireDefault(_AccountAttributes);

var _AccountAttributesAllowedIp = require('./model/AccountAttributesAllowedIp');

var _AccountAttributesAllowedIp2 = _interopRequireDefault(_AccountAttributesAllowedIp);

var _AccountResponse = require('./model/AccountResponse');

var _AccountResponse2 = _interopRequireDefault(_AccountResponse);

var _Body = require('./model/Body');

var _Body2 = _interopRequireDefault(_Body);

var _Body3 = require('./model/Body1');

var _Body4 = _interopRequireDefault(_Body3);

var _Body5 = require('./model/Body10');

var _Body6 = _interopRequireDefault(_Body5);

var _Body7 = require('./model/Body11');

var _Body8 = _interopRequireDefault(_Body7);

var _Body9 = require('./model/Body12');

var _Body10 = _interopRequireDefault(_Body9);

var _Body11 = require('./model/Body13');

var _Body12 = _interopRequireDefault(_Body11);

var _Body13 = require('./model/Body14');

var _Body14 = _interopRequireDefault(_Body13);

var _Body15 = require('./model/Body15');

var _Body16 = _interopRequireDefault(_Body15);

var _Body17 = require('./model/Body16');

var _Body18 = _interopRequireDefault(_Body17);

var _Body19 = require('./model/Body17');

var _Body20 = _interopRequireDefault(_Body19);

var _Body21 = require('./model/Body18');

var _Body22 = _interopRequireDefault(_Body21);

var _Body23 = require('./model/Body2');

var _Body24 = _interopRequireDefault(_Body23);

var _Body25 = require('./model/Body3');

var _Body26 = _interopRequireDefault(_Body25);

var _Body27 = require('./model/Body4');

var _Body28 = _interopRequireDefault(_Body27);

var _Body29 = require('./model/Body5');

var _Body30 = _interopRequireDefault(_Body29);

var _Body31 = require('./model/Body6');

var _Body32 = _interopRequireDefault(_Body31);

var _Body33 = require('./model/Body7');

var _Body34 = _interopRequireDefault(_Body33);

var _Body35 = require('./model/Body8');

var _Body36 = _interopRequireDefault(_Body35);

var _Body37 = require('./model/Body9');

var _Body38 = _interopRequireDefault(_Body37);

var _BrandingSettings = require('./model/BrandingSettings');

var _BrandingSettings2 = _interopRequireDefault(_BrandingSettings);

var _BrandingSettings3 = require('./model/BrandingSettings1');

var _BrandingSettings4 = _interopRequireDefault(_BrandingSettings3);

var _CallbackSettings = require('./model/CallbackSettings');

var _CallbackSettings2 = _interopRequireDefault(_CallbackSettings);

var _CallbackSettings3 = require('./model/CallbackSettings1');

var _CallbackSettings4 = _interopRequireDefault(_CallbackSettings3);

var _CallbackSettings1Triggers = require('./model/CallbackSettings1Triggers');

var _CallbackSettings1Triggers2 = _interopRequireDefault(_CallbackSettings1Triggers);

var _CallbackSettingsTriggers = require('./model/CallbackSettingsTriggers');

var _CallbackSettingsTriggers2 = _interopRequireDefault(_CallbackSettingsTriggers);

var _DownloadPolling = require('./model/DownloadPolling');

var _DownloadPolling2 = _interopRequireDefault(_DownloadPolling);

var _DownloadPollingResponse = require('./model/DownloadPollingResponse');

var _DownloadPollingResponse2 = _interopRequireDefault(_DownloadPollingResponse);

var _EmailList = require('./model/EmailList');

var _EmailList2 = _interopRequireDefault(_EmailList);

var _EmailListAttributes = require('./model/EmailListAttributes');

var _EmailListAttributes2 = _interopRequireDefault(_EmailListAttributes);

var _EmailListCollectionResponse = require('./model/EmailListCollectionResponse');

var _EmailListCollectionResponse2 = _interopRequireDefault(_EmailListCollectionResponse);

var _EmailListOwnerUser = require('./model/EmailListOwnerUser');

var _EmailListOwnerUser2 = _interopRequireDefault(_EmailListOwnerUser);

var _EmailListRelationships = require('./model/EmailListRelationships');

var _EmailListRelationships2 = _interopRequireDefault(_EmailListRelationships);

var _EmailListResponse = require('./model/EmailListResponse');

var _EmailListResponse2 = _interopRequireDefault(_EmailListResponse);

var _EmptyResponse = require('./model/EmptyResponse');

var _EmptyResponse2 = _interopRequireDefault(_EmptyResponse);

var _Error = require('./model/Error');

var _Error2 = _interopRequireDefault(_Error);

var _Error3 = require('./model/Error401');

var _Error4 = _interopRequireDefault(_Error3);

var _Error401Errors = require('./model/Error401Errors');

var _Error401Errors2 = _interopRequireDefault(_Error401Errors);

var _Error5 = require('./model/Error403');

var _Error6 = _interopRequireDefault(_Error5);

var _Error403Errors = require('./model/Error403Errors');

var _Error403Errors2 = _interopRequireDefault(_Error403Errors);

var _Form = require('./model/Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormAttributes = require('./model/FormAttributes');

var _FormAttributes2 = _interopRequireDefault(_FormAttributes);

var _FormEntry = require('./model/FormEntry');

var _FormEntry2 = _interopRequireDefault(_FormEntry);

var _FormEntryAttributes = require('./model/FormEntryAttributes');

var _FormEntryAttributes2 = _interopRequireDefault(_FormEntryAttributes);

var _FormEntryField = require('./model/FormEntryField');

var _FormEntryField2 = _interopRequireDefault(_FormEntryField);

var _FormEntryResponse = require('./model/FormEntryResponse');

var _FormEntryResponse2 = _interopRequireDefault(_FormEntryResponse);

var _FormField = require('./model/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _FormFieldSettings = require('./model/FormFieldSettings');

var _FormFieldSettings2 = _interopRequireDefault(_FormFieldSettings);

var _FormFieldUploadArea = require('./model/FormFieldUploadArea');

var _FormFieldUploadArea2 = _interopRequireDefault(_FormFieldUploadArea);

var _FormFieldUploadAreaSettings = require('./model/FormFieldUploadAreaSettings');

var _FormFieldUploadAreaSettings2 = _interopRequireDefault(_FormFieldUploadAreaSettings);

var _FormRelationships = require('./model/FormRelationships');

var _FormRelationships2 = _interopRequireDefault(_FormRelationships);

var _FormRelationshipsShare = require('./model/FormRelationshipsShare');

var _FormRelationshipsShare2 = _interopRequireDefault(_FormRelationshipsShare);

var _FormRelationshipsShareData = require('./model/FormRelationshipsShareData');

var _FormRelationshipsShareData2 = _interopRequireDefault(_FormRelationshipsShareData);

var _FormResponse = require('./model/FormResponse');

var _FormResponse2 = _interopRequireDefault(_FormResponse);

var _FormsidElements = require('./model/FormsidElements');

var _FormsidElements2 = _interopRequireDefault(_FormsidElements);

var _FormsidSettings = require('./model/FormsidSettings');

var _FormsidSettings2 = _interopRequireDefault(_FormsidSettings);

var _MasterUser = require('./model/MasterUser');

var _MasterUser2 = _interopRequireDefault(_MasterUser);

var _MasterUserMasterUser = require('./model/MasterUserMasterUser');

var _MasterUserMasterUser2 = _interopRequireDefault(_MasterUserMasterUser);

var _MasterUserMasterUserData = require('./model/MasterUserMasterUserData');

var _MasterUserMasterUserData2 = _interopRequireDefault(_MasterUserMasterUserData);

var _Notification = require('./model/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _NotificationAttributes = require('./model/NotificationAttributes');

var _NotificationAttributes2 = _interopRequireDefault(_NotificationAttributes);

var _NotificationCollectionResponse = require('./model/NotificationCollectionResponse');

var _NotificationCollectionResponse2 = _interopRequireDefault(_NotificationCollectionResponse);

var _NotificationRecipient = require('./model/NotificationRecipient');

var _NotificationRecipient2 = _interopRequireDefault(_NotificationRecipient);

var _NotificationRelationships = require('./model/NotificationRelationships');

var _NotificationRelationships2 = _interopRequireDefault(_NotificationRelationships);

var _NotificationRelationshipsOwnerUser = require('./model/NotificationRelationshipsOwnerUser');

var _NotificationRelationshipsOwnerUser2 = _interopRequireDefault(_NotificationRelationshipsOwnerUser);

var _NotificationRelationshipsOwnerUserData = require('./model/NotificationRelationshipsOwnerUserData');

var _NotificationRelationshipsOwnerUserData2 = _interopRequireDefault(_NotificationRelationshipsOwnerUserData);

var _NotificationRelationshipsResource = require('./model/NotificationRelationshipsResource');

var _NotificationRelationshipsResource2 = _interopRequireDefault(_NotificationRelationshipsResource);

var _NotificationRelationshipsResourceData = require('./model/NotificationRelationshipsResourceData');

var _NotificationRelationshipsResourceData2 = _interopRequireDefault(_NotificationRelationshipsResourceData);

var _NotificationRelationshipsShare = require('./model/NotificationRelationshipsShare');

var _NotificationRelationshipsShare2 = _interopRequireDefault(_NotificationRelationshipsShare);

var _NotificationRelationshipsShareData = require('./model/NotificationRelationshipsShareData');

var _NotificationRelationshipsShareData2 = _interopRequireDefault(_NotificationRelationshipsShareData);

var _NotificationResponse = require('./model/NotificationResponse');

var _NotificationResponse2 = _interopRequireDefault(_NotificationResponse);

var _PreviewFile = require('./model/PreviewFile');

var _PreviewFile2 = _interopRequireDefault(_PreviewFile);

var _PreviewFileAttributes = require('./model/PreviewFileAttributes');

var _PreviewFileAttributes2 = _interopRequireDefault(_PreviewFileAttributes);

var _PreviewFileResponse = require('./model/PreviewFileResponse');

var _PreviewFileResponse2 = _interopRequireDefault(_PreviewFileResponse);

var _Quota = require('./model/Quota');

var _Quota2 = _interopRequireDefault(_Quota);

var _RelationshipData = require('./model/RelationshipData');

var _RelationshipData2 = _interopRequireDefault(_RelationshipData);

var _Resource = require('./model/Resource');

var _Resource2 = _interopRequireDefault(_Resource);

var _ResourceAttributes = require('./model/ResourceAttributes');

var _ResourceAttributes2 = _interopRequireDefault(_ResourceAttributes);

var _ResourceCollectionResponse = require('./model/ResourceCollectionResponse');

var _ResourceCollectionResponse2 = _interopRequireDefault(_ResourceCollectionResponse);

var _ResourceCopyMove = require('./model/ResourceCopyMove');

var _ResourceCopyMove2 = _interopRequireDefault(_ResourceCopyMove);

var _ResourceDelete = require('./model/ResourceDelete');

var _ResourceDelete2 = _interopRequireDefault(_ResourceDelete);

var _ResourceMultiResponse = require('./model/ResourceMultiResponse');

var _ResourceMultiResponse2 = _interopRequireDefault(_ResourceMultiResponse);

var _ResourceRelationships = require('./model/ResourceRelationships');

var _ResourceRelationships2 = _interopRequireDefault(_ResourceRelationships);

var _ResourceRelationshipsData = require('./model/ResourceRelationshipsData');

var _ResourceRelationshipsData2 = _interopRequireDefault(_ResourceRelationshipsData);

var _ResourceRelationshipsDirectFile = require('./model/ResourceRelationshipsDirectFile');

var _ResourceRelationshipsDirectFile2 = _interopRequireDefault(_ResourceRelationshipsDirectFile);

var _ResourceRelationshipsDirectFileData = require('./model/ResourceRelationshipsDirectFileData');

var _ResourceRelationshipsDirectFileData2 = _interopRequireDefault(_ResourceRelationshipsDirectFileData);

var _ResourceRelationshipsNotifications = require('./model/ResourceRelationshipsNotifications');

var _ResourceRelationshipsNotifications2 = _interopRequireDefault(_ResourceRelationshipsNotifications);

var _ResourceRelationshipsParentResource = require('./model/ResourceRelationshipsParentResource');

var _ResourceRelationshipsParentResource2 = _interopRequireDefault(_ResourceRelationshipsParentResource);

var _ResourceRelationshipsParentResourceData = require('./model/ResourceRelationshipsParentResourceData');

var _ResourceRelationshipsParentResourceData2 = _interopRequireDefault(_ResourceRelationshipsParentResourceData);

var _ResourceRelationshipsShare = require('./model/ResourceRelationshipsShare');

var _ResourceRelationshipsShare2 = _interopRequireDefault(_ResourceRelationshipsShare);

var _ResourceRelationshipsShareData = require('./model/ResourceRelationshipsShareData');

var _ResourceRelationshipsShareData2 = _interopRequireDefault(_ResourceRelationshipsShareData);

var _ResourceResponse = require('./model/ResourceResponse');

var _ResourceResponse2 = _interopRequireDefault(_ResourceResponse);

var _SessionActivityEntry = require('./model/SessionActivityEntry');

var _SessionActivityEntry2 = _interopRequireDefault(_SessionActivityEntry);

var _SessionActivityEntryAttributes = require('./model/SessionActivityEntryAttributes');

var _SessionActivityEntryAttributes2 = _interopRequireDefault(_SessionActivityEntryAttributes);

var _SessionActivityResponse = require('./model/SessionActivityResponse');

var _SessionActivityResponse2 = _interopRequireDefault(_SessionActivityResponse);

var _Share = require('./model/Share');

var _Share2 = _interopRequireDefault(_Share);

var _ShareAttributes = require('./model/ShareAttributes');

var _ShareAttributes2 = _interopRequireDefault(_ShareAttributes);

var _ShareCollectionResponse = require('./model/ShareCollectionResponse');

var _ShareCollectionResponse2 = _interopRequireDefault(_ShareCollectionResponse);

var _ShareMessage = require('./model/ShareMessage');

var _ShareMessage2 = _interopRequireDefault(_ShareMessage);

var _ShareMessageAttributes = require('./model/ShareMessageAttributes');

var _ShareMessageAttributes2 = _interopRequireDefault(_ShareMessageAttributes);

var _ShareRecipient = require('./model/ShareRecipient');

var _ShareRecipient2 = _interopRequireDefault(_ShareRecipient);

var _ShareRecipient3 = require('./model/ShareRecipient1');

var _ShareRecipient4 = _interopRequireDefault(_ShareRecipient3);

var _ShareRecipientsResponse = require('./model/ShareRecipientsResponse');

var _ShareRecipientsResponse2 = _interopRequireDefault(_ShareRecipientsResponse);

var _ShareRelationship = require('./model/ShareRelationship');

var _ShareRelationship2 = _interopRequireDefault(_ShareRelationship);

var _ShareRelationships = require('./model/ShareRelationships');

var _ShareRelationships2 = _interopRequireDefault(_ShareRelationships);

var _ShareRelationshipsData = require('./model/ShareRelationshipsData');

var _ShareRelationshipsData2 = _interopRequireDefault(_ShareRelationshipsData);

var _ShareRelationshipsData3 = require('./model/ShareRelationshipsData1');

var _ShareRelationshipsData4 = _interopRequireDefault(_ShareRelationshipsData3);

var _ShareRelationshipsData5 = require('./model/ShareRelationshipsData2');

var _ShareRelationshipsData6 = _interopRequireDefault(_ShareRelationshipsData5);

var _ShareRelationshipsMessages = require('./model/ShareRelationshipsMessages');

var _ShareRelationshipsMessages2 = _interopRequireDefault(_ShareRelationshipsMessages);

var _ShareRelationshipsNotifications = require('./model/ShareRelationshipsNotifications');

var _ShareRelationshipsNotifications2 = _interopRequireDefault(_ShareRelationshipsNotifications);

var _ShareRelationshipsOwner = require('./model/ShareRelationshipsOwner');

var _ShareRelationshipsOwner2 = _interopRequireDefault(_ShareRelationshipsOwner);

var _ShareRelationshipsOwnerData = require('./model/ShareRelationshipsOwnerData');

var _ShareRelationshipsOwnerData2 = _interopRequireDefault(_ShareRelationshipsOwnerData);

var _ShareRelationshipsResources = require('./model/ShareRelationshipsResources');

var _ShareRelationshipsResources2 = _interopRequireDefault(_ShareRelationshipsResources);

var _ShareResponse = require('./model/ShareResponse');

var _ShareResponse2 = _interopRequireDefault(_ShareResponse);

var _SharesRecipients = require('./model/SharesRecipients');

var _SharesRecipients2 = _interopRequireDefault(_SharesRecipients);

var _UpdateAccountBody = require('./model/UpdateAccountBody');

var _UpdateAccountBody2 = _interopRequireDefault(_UpdateAccountBody);

var _User = require('./model/User');

var _User2 = _interopRequireDefault(_User);

var _UserAttributes = require('./model/UserAttributes');

var _UserAttributes2 = _interopRequireDefault(_UserAttributes);

var _UserCollectionResponse = require('./model/UserCollectionResponse');

var _UserCollectionResponse2 = _interopRequireDefault(_UserCollectionResponse);

var _UserPermissions = require('./model/UserPermissions');

var _UserPermissions2 = _interopRequireDefault(_UserPermissions);

var _UserRelationships = require('./model/UserRelationships');

var _UserRelationships2 = _interopRequireDefault(_UserRelationships);

var _UserRelationshipsHomeResource = require('./model/UserRelationshipsHomeResource');

var _UserRelationshipsHomeResource2 = _interopRequireDefault(_UserRelationshipsHomeResource);

var _UserRelationshipsHomeResourceData = require('./model/UserRelationshipsHomeResourceData');

var _UserRelationshipsHomeResourceData2 = _interopRequireDefault(_UserRelationshipsHomeResourceData);

var _UserRelationshipsOwnerAccount = require('./model/UserRelationshipsOwnerAccount');

var _UserRelationshipsOwnerAccount2 = _interopRequireDefault(_UserRelationshipsOwnerAccount);

var _UserRelationshipsOwnerAccountData = require('./model/UserRelationshipsOwnerAccountData');

var _UserRelationshipsOwnerAccountData2 = _interopRequireDefault(_UserRelationshipsOwnerAccountData);

var _UserResponse = require('./model/UserResponse');

var _UserResponse2 = _interopRequireDefault(_UserResponse);

var _WebhooksActivityEntry = require('./model/WebhooksActivityEntry');

var _WebhooksActivityEntry2 = _interopRequireDefault(_WebhooksActivityEntry);

var _WebhooksActivityEntryAttributes = require('./model/WebhooksActivityEntryAttributes');

var _WebhooksActivityEntryAttributes2 = _interopRequireDefault(_WebhooksActivityEntryAttributes);

var _WebhooksActivityResponse = require('./model/WebhooksActivityResponse');

var _WebhooksActivityResponse2 = _interopRequireDefault(_WebhooksActivityResponse);

var _AccountApi = require('./api/AccountApi');

var _AccountApi2 = _interopRequireDefault(_AccountApi);

var _ActivityApi = require('./api/ActivityApi');

var _ActivityApi2 = _interopRequireDefault(_ActivityApi);

var _EmailApi = require('./api/EmailApi');

var _EmailApi2 = _interopRequireDefault(_EmailApi);

var _EmailListsApi = require('./api/EmailListsApi');

var _EmailListsApi2 = _interopRequireDefault(_EmailListsApi);

var _FormApi = require('./api/FormApi');

var _FormApi2 = _interopRequireDefault(_FormApi);

var _NotificationsApi = require('./api/NotificationsApi');

var _NotificationsApi2 = _interopRequireDefault(_NotificationsApi);

var _RecipientsApi = require('./api/RecipientsApi');

var _RecipientsApi2 = _interopRequireDefault(_RecipientsApi);

var _ResourcesApi = require('./api/ResourcesApi');

var _ResourcesApi2 = _interopRequireDefault(_ResourcesApi);

var _SharesApi = require('./api/SharesApi');

var _SharesApi2 = _interopRequireDefault(_SharesApi);

var _UsersApi = require('./api/UsersApi');

var _UsersApi2 = _interopRequireDefault(_UsersApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* See_our_API_reference_documentation_at_httpswww_exavault_comdeveloperapi_docs.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ExaVaultApi = require('index'); // See note below*.
* var xxxSvc = new ExaVaultApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ExaVaultApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ExaVaultApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ExaVaultApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0
*/
/**
 * ExaVault API
 * See our API reference documentation at https://www.exavault.com/developer/api-docs/
 *
 * OpenAPI spec version: 2.0
 * Contact: support@exavault.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

exports.ApiClient = _ApiClient2.default;
exports.Account = _Account2.default;
exports.AccountAllowedIpRanges = _AccountAllowedIpRanges2.default;
exports.AccountAttributes = _AccountAttributes2.default;
exports.AccountAttributesAllowedIp = _AccountAttributesAllowedIp2.default;
exports.AccountResponse = _AccountResponse2.default;
exports.Body = _Body2.default;
exports.Body1 = _Body4.default;
exports.Body10 = _Body6.default;
exports.Body11 = _Body8.default;
exports.Body12 = _Body10.default;
exports.Body13 = _Body12.default;
exports.Body14 = _Body14.default;
exports.Body15 = _Body16.default;
exports.Body16 = _Body18.default;
exports.Body17 = _Body20.default;
exports.Body18 = _Body22.default;
exports.Body2 = _Body24.default;
exports.Body3 = _Body26.default;
exports.Body4 = _Body28.default;
exports.Body5 = _Body30.default;
exports.Body6 = _Body32.default;
exports.Body7 = _Body34.default;
exports.Body8 = _Body36.default;
exports.Body9 = _Body38.default;
exports.BrandingSettings = _BrandingSettings2.default;
exports.BrandingSettings1 = _BrandingSettings4.default;
exports.CallbackSettings = _CallbackSettings2.default;
exports.CallbackSettings1 = _CallbackSettings4.default;
exports.CallbackSettings1Triggers = _CallbackSettings1Triggers2.default;
exports.CallbackSettingsTriggers = _CallbackSettingsTriggers2.default;
exports.DownloadPolling = _DownloadPolling2.default;
exports.DownloadPollingResponse = _DownloadPollingResponse2.default;
exports.EmailList = _EmailList2.default;
exports.EmailListAttributes = _EmailListAttributes2.default;
exports.EmailListCollectionResponse = _EmailListCollectionResponse2.default;
exports.EmailListOwnerUser = _EmailListOwnerUser2.default;
exports.EmailListRelationships = _EmailListRelationships2.default;
exports.EmailListResponse = _EmailListResponse2.default;
exports.EmptyResponse = _EmptyResponse2.default;
exports.Error = _Error2.default;
exports.Error401 = _Error4.default;
exports.Error401Errors = _Error401Errors2.default;
exports.Error403 = _Error6.default;
exports.Error403Errors = _Error403Errors2.default;
exports.Form = _Form2.default;
exports.FormAttributes = _FormAttributes2.default;
exports.FormEntry = _FormEntry2.default;
exports.FormEntryAttributes = _FormEntryAttributes2.default;
exports.FormEntryField = _FormEntryField2.default;
exports.FormEntryResponse = _FormEntryResponse2.default;
exports.FormField = _FormField2.default;
exports.FormFieldSettings = _FormFieldSettings2.default;
exports.FormFieldUploadArea = _FormFieldUploadArea2.default;
exports.FormFieldUploadAreaSettings = _FormFieldUploadAreaSettings2.default;
exports.FormRelationships = _FormRelationships2.default;
exports.FormRelationshipsShare = _FormRelationshipsShare2.default;
exports.FormRelationshipsShareData = _FormRelationshipsShareData2.default;
exports.FormResponse = _FormResponse2.default;
exports.FormsidElements = _FormsidElements2.default;
exports.FormsidSettings = _FormsidSettings2.default;
exports.MasterUser = _MasterUser2.default;
exports.MasterUserMasterUser = _MasterUserMasterUser2.default;
exports.MasterUserMasterUserData = _MasterUserMasterUserData2.default;
exports.Notification = _Notification2.default;
exports.NotificationAttributes = _NotificationAttributes2.default;
exports.NotificationCollectionResponse = _NotificationCollectionResponse2.default;
exports.NotificationRecipient = _NotificationRecipient2.default;
exports.NotificationRelationships = _NotificationRelationships2.default;
exports.NotificationRelationshipsOwnerUser = _NotificationRelationshipsOwnerUser2.default;
exports.NotificationRelationshipsOwnerUserData = _NotificationRelationshipsOwnerUserData2.default;
exports.NotificationRelationshipsResource = _NotificationRelationshipsResource2.default;
exports.NotificationRelationshipsResourceData = _NotificationRelationshipsResourceData2.default;
exports.NotificationRelationshipsShare = _NotificationRelationshipsShare2.default;
exports.NotificationRelationshipsShareData = _NotificationRelationshipsShareData2.default;
exports.NotificationResponse = _NotificationResponse2.default;
exports.PreviewFile = _PreviewFile2.default;
exports.PreviewFileAttributes = _PreviewFileAttributes2.default;
exports.PreviewFileResponse = _PreviewFileResponse2.default;
exports.Quota = _Quota2.default;
exports.RelationshipData = _RelationshipData2.default;
exports.Resource = _Resource2.default;
exports.ResourceAttributes = _ResourceAttributes2.default;
exports.ResourceCollectionResponse = _ResourceCollectionResponse2.default;
exports.ResourceCopyMove = _ResourceCopyMove2.default;
exports.ResourceDelete = _ResourceDelete2.default;
exports.ResourceMultiResponse = _ResourceMultiResponse2.default;
exports.ResourceRelationships = _ResourceRelationships2.default;
exports.ResourceRelationshipsData = _ResourceRelationshipsData2.default;
exports.ResourceRelationshipsDirectFile = _ResourceRelationshipsDirectFile2.default;
exports.ResourceRelationshipsDirectFileData = _ResourceRelationshipsDirectFileData2.default;
exports.ResourceRelationshipsNotifications = _ResourceRelationshipsNotifications2.default;
exports.ResourceRelationshipsParentResource = _ResourceRelationshipsParentResource2.default;
exports.ResourceRelationshipsParentResourceData = _ResourceRelationshipsParentResourceData2.default;
exports.ResourceRelationshipsShare = _ResourceRelationshipsShare2.default;
exports.ResourceRelationshipsShareData = _ResourceRelationshipsShareData2.default;
exports.ResourceResponse = _ResourceResponse2.default;
exports.SessionActivityEntry = _SessionActivityEntry2.default;
exports.SessionActivityEntryAttributes = _SessionActivityEntryAttributes2.default;
exports.SessionActivityResponse = _SessionActivityResponse2.default;
exports.Share = _Share2.default;
exports.ShareAttributes = _ShareAttributes2.default;
exports.ShareCollectionResponse = _ShareCollectionResponse2.default;
exports.ShareMessage = _ShareMessage2.default;
exports.ShareMessageAttributes = _ShareMessageAttributes2.default;
exports.ShareRecipient = _ShareRecipient2.default;
exports.ShareRecipient1 = _ShareRecipient4.default;
exports.ShareRecipientsResponse = _ShareRecipientsResponse2.default;
exports.ShareRelationship = _ShareRelationship2.default;
exports.ShareRelationships = _ShareRelationships2.default;
exports.ShareRelationshipsData = _ShareRelationshipsData2.default;
exports.ShareRelationshipsData1 = _ShareRelationshipsData4.default;
exports.ShareRelationshipsData2 = _ShareRelationshipsData6.default;
exports.ShareRelationshipsMessages = _ShareRelationshipsMessages2.default;
exports.ShareRelationshipsNotifications = _ShareRelationshipsNotifications2.default;
exports.ShareRelationshipsOwner = _ShareRelationshipsOwner2.default;
exports.ShareRelationshipsOwnerData = _ShareRelationshipsOwnerData2.default;
exports.ShareRelationshipsResources = _ShareRelationshipsResources2.default;
exports.ShareResponse = _ShareResponse2.default;
exports.SharesRecipients = _SharesRecipients2.default;
exports.UpdateAccountBody = _UpdateAccountBody2.default;
exports.User = _User2.default;
exports.UserAttributes = _UserAttributes2.default;
exports.UserCollectionResponse = _UserCollectionResponse2.default;
exports.UserPermissions = _UserPermissions2.default;
exports.UserRelationships = _UserRelationships2.default;
exports.UserRelationshipsHomeResource = _UserRelationshipsHomeResource2.default;
exports.UserRelationshipsHomeResourceData = _UserRelationshipsHomeResourceData2.default;
exports.UserRelationshipsOwnerAccount = _UserRelationshipsOwnerAccount2.default;
exports.UserRelationshipsOwnerAccountData = _UserRelationshipsOwnerAccountData2.default;
exports.UserResponse = _UserResponse2.default;
exports.WebhooksActivityEntry = _WebhooksActivityEntry2.default;
exports.WebhooksActivityEntryAttributes = _WebhooksActivityEntryAttributes2.default;
exports.WebhooksActivityResponse = _WebhooksActivityResponse2.default;
exports.AccountApi = _AccountApi2.default;
exports.ActivityApi = _ActivityApi2.default;
exports.EmailApi = _EmailApi2.default;
exports.EmailListsApi = _EmailListsApi2.default;
exports.FormApi = _FormApi2.default;
exports.NotificationsApi = _NotificationsApi2.default;
exports.RecipientsApi = _RecipientsApi2.default;
exports.ResourcesApi = _ResourcesApi2.default;
exports.SharesApi = _SharesApi2.default;
exports.UsersApi = _UsersApi2.default;