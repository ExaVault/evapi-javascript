'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersApi = exports.SharesApi = exports.ResourcesApi = exports.RecipientsApi = exports.NotificationsApi = exports.FormApi = exports.EmailListsApi = exports.EmailApi = exports.ActivityApi = exports.AccountApi = exports.WebhooksActivityResponse = exports.WebhooksActivityEntryAttributes = exports.WebhooksActivityEntry = exports.UsersPermissions = exports.UserResponse = exports.UserRelationshipsOwnerAccountData = exports.UserRelationshipsOwnerAccount = exports.UserRelationshipsHomeResourceData = exports.UserRelationshipsHomeResource = exports.UserRelationships = exports.UserPermissions = exports.UserCollectionResponse = exports.UserAttributes = exports.User = exports.UpdateUserRequestBody = exports.UpdateShareRequestBody = exports.UpdateResourceByIdRequestBody = exports.UpdateNotificationByIdRequestBody = exports.UpdateFormByIdRequestBody = exports.UpdateEmailListRequestBody = exports.UpdateAccountRequestBody = exports.SharesRecipients = exports.ShareResponse = exports.ShareResourceData = exports.ShareRelationshipsResource = exports.ShareRelationshipsOwnerData = exports.ShareRelationshipsOwner = undefined;
exports.ShareRelationshipsNotification = exports.ShareRelationshipsMessage = exports.ShareRelationshipsData = exports.ShareRelationships = exports.ShareRecipientsResponse = exports.ShareRecipient = exports.ShareMessageData = exports.ShareMessageAttributes = exports.ShareMessage = exports.ShareCollectionResponse = exports.ShareAttributes = exports.Share = exports.SessionActivityResponse = exports.SessionActivityEntryAttributes = exports.SessionActivityEntry = exports.SendReferralEmailRequestBody = exports.ResourceResponse = exports.ResourceRelationshipsShareData = exports.ResourceRelationshipsShare = exports.ResourceRelationshipsParentResourceData = exports.ResourceRelationshipsParentResource = exports.ResourceRelationshipsNotifications = exports.ResourceRelationshipsDirectFileData = exports.ResourceRelationshipsDirectFile = exports.ResourceRelationshipsData = exports.ResourceRelationships = exports.ResourceMultiResponse = exports.ResourceDelete = exports.ResourceCopyMove = exports.ResourceCollectionResponse = exports.ResourceAttributes = exports.Resource = exports.ResendInvitationsRequestBody = exports.RelationshipData = exports.Quota = exports.PreviewFileResponse = exports.PreviewFileAttributes = exports.PreviewFile = exports.NotificationResponse = exports.NotificationRelationshipsShareData = exports.NotificationRelationshipsShare = exports.NotificationRelationshipsResourceData = exports.NotificationRelationshipsResource = exports.NotificationRelationshipsOwnerUserData = exports.NotificationRelationshipsOwnerUser = exports.NotificationRelationships = exports.NotificationRecipient = exports.NotificationCollectionResponse = exports.NotificationAttributes = exports.Notification = exports.MoveResourcesRequestBody = exports.MasterUserMasterUserData = exports.MasterUserMasterUser = exports.MasterUser = exports.FormsidSettings = exports.FormsidElements = exports.FormResponse = exports.FormRelationshipsShareData = exports.FormRelationshipsShare = exports.FormRelationships = exports.FormFieldUploadAreaSettings = exports.FormFieldUploadArea = exports.FormFieldSettings = exports.FormField = exports.FormEntryResponse = exports.FormEntryField = exports.FormEntryAttributes = exports.FormEntry = exports.FormAttributes = exports.Form = exports.ExtractFilesRequestBody = exports.Error = exports.EmptyResponse = exports.EmailListResponse = exports.EmailListRelationships = exports.EmailListOwnerUser = exports.EmailListCollectionResponse = exports.EmailListAttributes = exports.EmailList = exports.DeleteResourcesRequestBody = exports.CopyResourcesRequestBody = exports.CompressFilesRequestBody = exports.CallbackSettingsValuesTriggers = exports.CallbackSettingsValues = exports.CallbackSettingsTriggers = exports.CallbackSettings = exports.BrandingSettingsValues = exports.BrandingSettings = exports.AddUserRequestBody = exports.AddShareRequestBody = exports.AddNotificationRequestBody = exports.AddFolderRequestBody = exports.AddEmailListRequestBody = exports.AccountResponse = exports.AccountAttributesAllowedIp = exports.AccountAttributes = exports.AccountAllowedIpRanges = exports.Account = exports.AccessMode = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AccessMode = require('./model/AccessMode');

var _AccessMode2 = _interopRequireDefault(_AccessMode);

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

var _AddEmailListRequestBody = require('./model/AddEmailListRequestBody');

var _AddEmailListRequestBody2 = _interopRequireDefault(_AddEmailListRequestBody);

var _AddFolderRequestBody = require('./model/AddFolderRequestBody');

var _AddFolderRequestBody2 = _interopRequireDefault(_AddFolderRequestBody);

var _AddNotificationRequestBody = require('./model/AddNotificationRequestBody');

var _AddNotificationRequestBody2 = _interopRequireDefault(_AddNotificationRequestBody);

var _AddShareRequestBody = require('./model/AddShareRequestBody');

var _AddShareRequestBody2 = _interopRequireDefault(_AddShareRequestBody);

var _AddUserRequestBody = require('./model/AddUserRequestBody');

var _AddUserRequestBody2 = _interopRequireDefault(_AddUserRequestBody);

var _BrandingSettings = require('./model/BrandingSettings');

var _BrandingSettings2 = _interopRequireDefault(_BrandingSettings);

var _BrandingSettingsValues = require('./model/BrandingSettingsValues');

var _BrandingSettingsValues2 = _interopRequireDefault(_BrandingSettingsValues);

var _CallbackSettings = require('./model/CallbackSettings');

var _CallbackSettings2 = _interopRequireDefault(_CallbackSettings);

var _CallbackSettingsTriggers = require('./model/CallbackSettingsTriggers');

var _CallbackSettingsTriggers2 = _interopRequireDefault(_CallbackSettingsTriggers);

var _CallbackSettingsValues = require('./model/CallbackSettingsValues');

var _CallbackSettingsValues2 = _interopRequireDefault(_CallbackSettingsValues);

var _CallbackSettingsValuesTriggers = require('./model/CallbackSettingsValuesTriggers');

var _CallbackSettingsValuesTriggers2 = _interopRequireDefault(_CallbackSettingsValuesTriggers);

var _CompressFilesRequestBody = require('./model/CompressFilesRequestBody');

var _CompressFilesRequestBody2 = _interopRequireDefault(_CompressFilesRequestBody);

var _CopyResourcesRequestBody = require('./model/CopyResourcesRequestBody');

var _CopyResourcesRequestBody2 = _interopRequireDefault(_CopyResourcesRequestBody);

var _DeleteResourcesRequestBody = require('./model/DeleteResourcesRequestBody');

var _DeleteResourcesRequestBody2 = _interopRequireDefault(_DeleteResourcesRequestBody);

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

var _ExtractFilesRequestBody = require('./model/ExtractFilesRequestBody');

var _ExtractFilesRequestBody2 = _interopRequireDefault(_ExtractFilesRequestBody);

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

var _MoveResourcesRequestBody = require('./model/MoveResourcesRequestBody');

var _MoveResourcesRequestBody2 = _interopRequireDefault(_MoveResourcesRequestBody);

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

var _ResendInvitationsRequestBody = require('./model/ResendInvitationsRequestBody');

var _ResendInvitationsRequestBody2 = _interopRequireDefault(_ResendInvitationsRequestBody);

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

var _SendReferralEmailRequestBody = require('./model/SendReferralEmailRequestBody');

var _SendReferralEmailRequestBody2 = _interopRequireDefault(_SendReferralEmailRequestBody);

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

var _ShareMessageData = require('./model/ShareMessageData');

var _ShareMessageData2 = _interopRequireDefault(_ShareMessageData);

var _ShareRecipient = require('./model/ShareRecipient');

var _ShareRecipient2 = _interopRequireDefault(_ShareRecipient);

var _ShareRecipientsResponse = require('./model/ShareRecipientsResponse');

var _ShareRecipientsResponse2 = _interopRequireDefault(_ShareRecipientsResponse);

var _ShareRelationships = require('./model/ShareRelationships');

var _ShareRelationships2 = _interopRequireDefault(_ShareRelationships);

var _ShareRelationshipsData = require('./model/ShareRelationshipsData');

var _ShareRelationshipsData2 = _interopRequireDefault(_ShareRelationshipsData);

var _ShareRelationshipsMessage = require('./model/ShareRelationshipsMessage');

var _ShareRelationshipsMessage2 = _interopRequireDefault(_ShareRelationshipsMessage);

var _ShareRelationshipsNotification = require('./model/ShareRelationshipsNotification');

var _ShareRelationshipsNotification2 = _interopRequireDefault(_ShareRelationshipsNotification);

var _ShareRelationshipsOwner = require('./model/ShareRelationshipsOwner');

var _ShareRelationshipsOwner2 = _interopRequireDefault(_ShareRelationshipsOwner);

var _ShareRelationshipsOwnerData = require('./model/ShareRelationshipsOwnerData');

var _ShareRelationshipsOwnerData2 = _interopRequireDefault(_ShareRelationshipsOwnerData);

var _ShareRelationshipsResource = require('./model/ShareRelationshipsResource');

var _ShareRelationshipsResource2 = _interopRequireDefault(_ShareRelationshipsResource);

var _ShareResourceData = require('./model/ShareResourceData');

var _ShareResourceData2 = _interopRequireDefault(_ShareResourceData);

var _ShareResponse = require('./model/ShareResponse');

var _ShareResponse2 = _interopRequireDefault(_ShareResponse);

var _SharesRecipients = require('./model/SharesRecipients');

var _SharesRecipients2 = _interopRequireDefault(_SharesRecipients);

var _UpdateAccountRequestBody = require('./model/UpdateAccountRequestBody');

var _UpdateAccountRequestBody2 = _interopRequireDefault(_UpdateAccountRequestBody);

var _UpdateEmailListRequestBody = require('./model/UpdateEmailListRequestBody');

var _UpdateEmailListRequestBody2 = _interopRequireDefault(_UpdateEmailListRequestBody);

var _UpdateFormByIdRequestBody = require('./model/UpdateFormByIdRequestBody');

var _UpdateFormByIdRequestBody2 = _interopRequireDefault(_UpdateFormByIdRequestBody);

var _UpdateNotificationByIdRequestBody = require('./model/UpdateNotificationByIdRequestBody');

var _UpdateNotificationByIdRequestBody2 = _interopRequireDefault(_UpdateNotificationByIdRequestBody);

var _UpdateResourceByIdRequestBody = require('./model/UpdateResourceByIdRequestBody');

var _UpdateResourceByIdRequestBody2 = _interopRequireDefault(_UpdateResourceByIdRequestBody);

var _UpdateShareRequestBody = require('./model/UpdateShareRequestBody');

var _UpdateShareRequestBody2 = _interopRequireDefault(_UpdateShareRequestBody);

var _UpdateUserRequestBody = require('./model/UpdateUserRequestBody');

var _UpdateUserRequestBody2 = _interopRequireDefault(_UpdateUserRequestBody);

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

var _UsersPermissions = require('./model/UsersPermissions');

var _UsersPermissions2 = _interopRequireDefault(_UsersPermissions);

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
* ExaVault API Javascript library.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var @ExavaultExavaultApi = require('index'); // See note below*.
* var xxxSvc = new @ExavaultExavaultApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new @ExavaultExavaultApi.Yyy(); // Construct a model instance.
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
* var xxxSvc = new @ExavaultExavaultApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new @ExavaultExavaultApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.2.3
*/
exports.ApiClient = _ApiClient2.default;
exports.AccessMode = _AccessMode2.default;
exports.Account = _Account2.default;
exports.AccountAllowedIpRanges = _AccountAllowedIpRanges2.default;
exports.AccountAttributes = _AccountAttributes2.default;
exports.AccountAttributesAllowedIp = _AccountAttributesAllowedIp2.default;
exports.AccountResponse = _AccountResponse2.default;
exports.AddEmailListRequestBody = _AddEmailListRequestBody2.default;
exports.AddFolderRequestBody = _AddFolderRequestBody2.default;
exports.AddNotificationRequestBody = _AddNotificationRequestBody2.default;
exports.AddShareRequestBody = _AddShareRequestBody2.default;
exports.AddUserRequestBody = _AddUserRequestBody2.default;
exports.BrandingSettings = _BrandingSettings2.default;
exports.BrandingSettingsValues = _BrandingSettingsValues2.default;
exports.CallbackSettings = _CallbackSettings2.default;
exports.CallbackSettingsTriggers = _CallbackSettingsTriggers2.default;
exports.CallbackSettingsValues = _CallbackSettingsValues2.default;
exports.CallbackSettingsValuesTriggers = _CallbackSettingsValuesTriggers2.default;
exports.CompressFilesRequestBody = _CompressFilesRequestBody2.default;
exports.CopyResourcesRequestBody = _CopyResourcesRequestBody2.default;
exports.DeleteResourcesRequestBody = _DeleteResourcesRequestBody2.default;
exports.EmailList = _EmailList2.default;
exports.EmailListAttributes = _EmailListAttributes2.default;
exports.EmailListCollectionResponse = _EmailListCollectionResponse2.default;
exports.EmailListOwnerUser = _EmailListOwnerUser2.default;
exports.EmailListRelationships = _EmailListRelationships2.default;
exports.EmailListResponse = _EmailListResponse2.default;
exports.EmptyResponse = _EmptyResponse2.default;
exports.Error = _Error2.default;
exports.ExtractFilesRequestBody = _ExtractFilesRequestBody2.default;
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
exports.MoveResourcesRequestBody = _MoveResourcesRequestBody2.default;
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
exports.ResendInvitationsRequestBody = _ResendInvitationsRequestBody2.default;
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
exports.SendReferralEmailRequestBody = _SendReferralEmailRequestBody2.default;
exports.SessionActivityEntry = _SessionActivityEntry2.default;
exports.SessionActivityEntryAttributes = _SessionActivityEntryAttributes2.default;
exports.SessionActivityResponse = _SessionActivityResponse2.default;
exports.Share = _Share2.default;
exports.ShareAttributes = _ShareAttributes2.default;
exports.ShareCollectionResponse = _ShareCollectionResponse2.default;
exports.ShareMessage = _ShareMessage2.default;
exports.ShareMessageAttributes = _ShareMessageAttributes2.default;
exports.ShareMessageData = _ShareMessageData2.default;
exports.ShareRecipient = _ShareRecipient2.default;
exports.ShareRecipientsResponse = _ShareRecipientsResponse2.default;
exports.ShareRelationships = _ShareRelationships2.default;
exports.ShareRelationshipsData = _ShareRelationshipsData2.default;
exports.ShareRelationshipsMessage = _ShareRelationshipsMessage2.default;
exports.ShareRelationshipsNotification = _ShareRelationshipsNotification2.default;
exports.ShareRelationshipsOwner = _ShareRelationshipsOwner2.default;
exports.ShareRelationshipsOwnerData = _ShareRelationshipsOwnerData2.default;
exports.ShareRelationshipsResource = _ShareRelationshipsResource2.default;
exports.ShareResourceData = _ShareResourceData2.default;
exports.ShareResponse = _ShareResponse2.default;
exports.SharesRecipients = _SharesRecipients2.default;
exports.UpdateAccountRequestBody = _UpdateAccountRequestBody2.default;
exports.UpdateEmailListRequestBody = _UpdateEmailListRequestBody2.default;
exports.UpdateFormByIdRequestBody = _UpdateFormByIdRequestBody2.default;
exports.UpdateNotificationByIdRequestBody = _UpdateNotificationByIdRequestBody2.default;
exports.UpdateResourceByIdRequestBody = _UpdateResourceByIdRequestBody2.default;
exports.UpdateShareRequestBody = _UpdateShareRequestBody2.default;
exports.UpdateUserRequestBody = _UpdateUserRequestBody2.default;
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
exports.UsersPermissions = _UsersPermissions2.default;
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
exports.UsersApi = _UsersApi2.default; /**
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