# quatrix_api

QuatrixApi - JavaScript client for quatrix_api
The Quatrix API enables you to automate your interaction with Quatrix using any scripting or programming language. You can test API calls on [Swagger](https://docs.maytech.net/swagger/), the interactive environment we use as the repository for the Quatrix API. In order to authorize to Quatrix API you will need to have a Quatrix account https://yourcompanyname.quatrix.it/ (e.g. https://test-api.quatrix.it/). You can set up a free trial account [here](https://www.maytech.net/freetrial.html#trial=qtrx). Below you'll find information on how to authenticate in a Quatrix session, how to construct JSON formatted API call and what JSON responses to expect.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install quatrix_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your quatrix_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('quatrix_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var QuatrixApi = require('quatrix_api');

var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['X-Auth-Token'] = "Token"

var api = new QuatrixApi.AccountApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountInfoGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.quatrix.it/api/1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*QuatrixApi.AccountApi* | [**accountInfoGet**](docs/AccountApi.md#accountInfoGet) | **GET** /account/info | Account info
*QuatrixApi.AccountApi* | [**accountListGet**](docs/AccountApi.md#accountListGet) | **GET** /account/list | List user accounts
*QuatrixApi.AccountApi* | [**accountLogoGet**](docs/AccountApi.md#accountLogoGet) | **GET** /account/logo | Account logo
*QuatrixApi.AccountApi* | [**accountMetadataGet**](docs/AccountApi.md#accountMetadataGet) | **GET** /account/metadata | Account metadata
*QuatrixApi.AccountApi* | [**accountRolesGet**](docs/AccountApi.md#accountRolesGet) | **GET** /account/roles | Account roles
*QuatrixApi.ActivityLogApi* | [**trackingActivityGet**](docs/ActivityLogApi.md#trackingActivityGet) | **GET** /tracking/activity | Activity log
*QuatrixApi.ActivityLogApi* | [**trackingCsvGet**](docs/ActivityLogApi.md#trackingCsvGet) | **GET** /tracking/csv | Download CSV file with Activity Log
*QuatrixApi.ActivityLogApi* | [**trackingDownloadsIdGet**](docs/ActivityLogApi.md#trackingDownloadsIdGet) | **GET** /tracking/downloads/{id} | Share action file downloads
*QuatrixApi.ActivityLogApi* | [**trackingFilesIdGet**](docs/ActivityLogApi.md#trackingFilesIdGet) | **GET** /tracking/files/{id} | Share action files
*QuatrixApi.AuthApi* | [**sessionKeepaliveGet**](docs/AuthApi.md#sessionKeepaliveGet) | **GET** /session/keepalive | Keepalive
*QuatrixApi.AuthApi* | [**sessionLoginGet**](docs/AuthApi.md#sessionLoginGet) | **GET** /session/login | Login and get session ID
*QuatrixApi.AuthApi* | [**sessionLoginPost**](docs/AuthApi.md#sessionLoginPost) | **POST** /session/login | MFA
*QuatrixApi.AuthApi* | [**sessionLogoutGet**](docs/AuthApi.md#sessionLogoutGet) | **GET** /session/logout | Logout
*QuatrixApi.AuthApi* | [**sessionUnblockCaptchaPost**](docs/AuthApi.md#sessionUnblockCaptchaPost) | **POST** /session/unblock-captcha | Unblock captcha
*QuatrixApi.AutomationApi* | [**automationCreatePost**](docs/AutomationApi.md#automationCreatePost) | **POST** /automation/create | Create automation
*QuatrixApi.AutomationApi* | [**automationDeletePost**](docs/AutomationApi.md#automationDeletePost) | **POST** /automation/delete | Delete automations
*QuatrixApi.AutomationApi* | [**automationEditPost**](docs/AutomationApi.md#automationEditPost) | **POST** /automation/edit/ | Edit automation
*QuatrixApi.AutomationApi* | [**automationGet**](docs/AutomationApi.md#automationGet) | **GET** /automation | List automations
*QuatrixApi.AutomationApi* | [**automationMetadataIdGet**](docs/AutomationApi.md#automationMetadataIdGet) | **GET** /automation/metadata/{id} | Automation metadata
*QuatrixApi.BillingApi* | [**billingUpgradePost**](docs/BillingApi.md#billingUpgradePost) | **POST** /billing/upgrade | Upgrade
*QuatrixApi.CheckApi* | [**checkPingGet**](docs/CheckApi.md#checkPingGet) | **GET** /check/ping | Ping(action)
*QuatrixApi.ContactApi* | [**contactCreatePost**](docs/ContactApi.md#contactCreatePost) | **POST** /contact/create | Create contact
*QuatrixApi.ContactApi* | [**contactDeletePost**](docs/ContactApi.md#contactDeletePost) | **POST** /contact/delete | Delete contact
*QuatrixApi.ContactApi* | [**contactEditIdPost**](docs/ContactApi.md#contactEditIdPost) | **POST** /contact/edit/{id} | Contact metadata
*QuatrixApi.ContactApi* | [**contactGet**](docs/ContactApi.md#contactGet) | **GET** /contact | List user contacts
*QuatrixApi.ContactApi* | [**contactGroupGet**](docs/ContactApi.md#contactGroupGet) | **GET** /contact/group | All contact groups
*QuatrixApi.ContactApi* | [**contactMetadataIdGet**](docs/ContactApi.md#contactMetadataIdGet) | **GET** /contact/metadata/{id} | Contact metadata
*QuatrixApi.ContactApi* | [**contactPgpKeyIdGet**](docs/ContactApi.md#contactPgpKeyIdGet) | **GET** /contact/pgp-key/{id} | Contact PGP key
*QuatrixApi.ContactApi* | [**contactUpgradeIdGet**](docs/ContactApi.md#contactUpgradeIdGet) | **GET** /contact/upgrade/{id} | Upgrade contact
*QuatrixApi.FileApi* | [**fileAddTagIdPost**](docs/FileApi.md#fileAddTagIdPost) | **POST** /file/add-tag/{id} | Add file tag
*QuatrixApi.FileApi* | [**fileCopyPost**](docs/FileApi.md#fileCopyPost) | **POST** /file/copy | Copy files
*QuatrixApi.FileApi* | [**fileCsvIdGet**](docs/FileApi.md#fileCsvIdGet) | **GET** /file/csv/{id} | Download CSV file with Folder Content
*QuatrixApi.FileApi* | [**fileDeletePost**](docs/FileApi.md#fileDeletePost) | **POST** /file/delete | Delete files
*QuatrixApi.FileApi* | [**fileDiffIdGet**](docs/FileApi.md#fileDiffIdGet) | **GET** /file/diff/{id} | File diff
*QuatrixApi.FileApi* | [**fileDownloadIdGet**](docs/FileApi.md#fileDownloadIdGet) | **GET** /file/download/{id} | Download file
*QuatrixApi.FileApi* | [**fileDownloadLinkPost**](docs/FileApi.md#fileDownloadLinkPost) | **POST** /file/download-link | Get download link
*QuatrixApi.FileApi* | [**fileInfoIdGet**](docs/FileApi.md#fileInfoIdGet) | **GET** /file/info/{id} | Get file info
*QuatrixApi.FileApi* | [**fileMakedirPost**](docs/FileApi.md#fileMakedirPost) | **POST** /file/makedir | Create new folder
*QuatrixApi.FileApi* | [**fileMetadataGet**](docs/FileApi.md#fileMetadataGet) | **GET** /file/metadata | Get all file metadata
*QuatrixApi.FileApi* | [**fileMetadataIdGet**](docs/FileApi.md#fileMetadataIdGet) | **GET** /file/metadata/{id} | Get file metadata
*QuatrixApi.FileApi* | [**fileMetadataPost**](docs/FileApi.md#fileMetadataPost) | **POST** /file/metadata | Set file metadata
*QuatrixApi.FileApi* | [**fileModifyPost**](docs/FileApi.md#fileModifyPost) | **POST** /file/modify | Get file modify link
*QuatrixApi.FileApi* | [**fileMovePost**](docs/FileApi.md#fileMovePost) | **POST** /file/move | Move files
*QuatrixApi.FileApi* | [**filePreviewIdGet**](docs/FileApi.md#filePreviewIdGet) | **GET** /file/preview/{id} | File preview
*QuatrixApi.FileApi* | [**fileRenameIdPost**](docs/FileApi.md#fileRenameIdPost) | **POST** /file/rename/{id} | Rename file or folder
*QuatrixApi.FileApi* | [**fileSearchPost**](docs/FileApi.md#fileSearchPost) | **POST** /file/search | Search files
*QuatrixApi.FileApi* | [**fileSizeIdGet**](docs/FileApi.md#fileSizeIdGet) | **GET** /file/size/{id} | Get file size
*QuatrixApi.FileApi* | [**fileTagsIdGet**](docs/FileApi.md#fileTagsIdGet) | **GET** /file/tags/{id} | File tags
*QuatrixApi.FileApi* | [**fileWopiTokenIdGet**](docs/FileApi.md#fileWopiTokenIdGet) | **GET** /file/wopi-token/{id} | Get wopi token for file
*QuatrixApi.GroupApi* | [**contactGroupGet**](docs/GroupApi.md#contactGroupGet) | **GET** /contact/group | All contact groups
*QuatrixApi.GroupApi* | [**groupGet**](docs/GroupApi.md#groupGet) | **GET** /group | List user groups
*QuatrixApi.GroupApi* | [**groupMetadataIdGet**](docs/GroupApi.md#groupMetadataIdGet) | **GET** /group/metadata/{id} | Group metadata
*QuatrixApi.GroupApi* | [**userGroupGet**](docs/GroupApi.md#userGroupGet) | **GET** /user/group | All user groups
*QuatrixApi.InboxApi* | [**inboxGet**](docs/InboxApi.md#inboxGet) | **GET** /inbox | User&#x60;s inbox
*QuatrixApi.LanguageApi* | [**languagesDefaultGet**](docs/LanguageApi.md#languagesDefaultGet) | **GET** /languages/default | Default language
*QuatrixApi.LanguageApi* | [**languagesGet**](docs/LanguageApi.md#languagesGet) | **GET** /languages | List languages
*QuatrixApi.MFAApi* | [**profileRemoveMfaPost**](docs/MFAApi.md#profileRemoveMfaPost) | **POST** /profile/remove-mfa | Remove MFA for account
*QuatrixApi.MFAApi* | [**profileSetMfaPost**](docs/MFAApi.md#profileSetMfaPost) | **POST** /profile/set-mfa | Set MFA enabled for account
*QuatrixApi.MFAApi* | [**sessionLoginPost**](docs/MFAApi.md#sessionLoginPost) | **POST** /session/login | MFA
*QuatrixApi.MFAApi* | [**userRemoveMfaPost**](docs/MFAApi.md#userRemoveMfaPost) | **POST** /user/remove-mfa | Remove MFA for user
*QuatrixApi.MFAApi* | [**userSetMfaPost**](docs/MFAApi.md#userSetMfaPost) | **POST** /user/set-mfa | Set MFA enabled for user
*QuatrixApi.PGPApi* | [**contactPgpKeyIdGet**](docs/PGPApi.md#contactPgpKeyIdGet) | **GET** /contact/pgp-key/{id} | Contact PGP key
*QuatrixApi.PGPApi* | [**keyRequestMetadataIdGet**](docs/PGPApi.md#keyRequestMetadataIdGet) | **GET** /key-request/metadata/{id} | PGP key request metadata
*QuatrixApi.PGPApi* | [**keyRequestRespondIdPost**](docs/PGPApi.md#keyRequestRespondIdPost) | **POST** /key-request/respond/{id} | Respond to PGP key request
*QuatrixApi.PGPApi* | [**pgpKeyCreatePost**](docs/PGPApi.md#pgpKeyCreatePost) | **POST** /pgp-key/create | Create PGP key
*QuatrixApi.PGPApi* | [**pgpKeyDeleteIdGet**](docs/PGPApi.md#pgpKeyDeleteIdGet) | **GET** /pgp-key/delete/{id} | Delete PGP key
*QuatrixApi.PGPApi* | [**pgpKeyEditIdPost**](docs/PGPApi.md#pgpKeyEditIdPost) | **POST** /pgp-key/edit/{id} | Edit PGP key
*QuatrixApi.PGPApi* | [**pgpKeyMetadataIdGet**](docs/PGPApi.md#pgpKeyMetadataIdGet) | **GET** /pgp-key/metadata/{id} | PGP key metadata
*QuatrixApi.PGPApi* | [**pgpKeyRecipientsPost**](docs/PGPApi.md#pgpKeyRecipientsPost) | **POST** /pgp-key/recipients | Recipients PGP keys
*QuatrixApi.PGPApi* | [**pgpKeyRequestIdsGet**](docs/PGPApi.md#pgpKeyRequestIdsGet) | **GET** /pgp-key/request/{ids[]} | Request PGP key
*QuatrixApi.PGPApi* | [**userPgpKeyIdGet**](docs/PGPApi.md#userPgpKeyIdGet) | **GET** /user/pgp-key/{id} | User PGP key
*QuatrixApi.PasswordResetApi* | [**resetPasswordMetadataIdGet**](docs/PasswordResetApi.md#resetPasswordMetadataIdGet) | **GET** /reset-password/metadata/{id} | Password reset request metadata
*QuatrixApi.PasswordResetApi* | [**resetPasswordRequestPost**](docs/PasswordResetApi.md#resetPasswordRequestPost) | **POST** /reset-password/request | Request password reset
*QuatrixApi.PasswordResetApi* | [**resetPasswordResetIdPost**](docs/PasswordResetApi.md#resetPasswordResetIdPost) | **POST** /reset-password/reset/{id} | Reset password
*QuatrixApi.PreviewApi* | [**previewDocumentPdfIdGet**](docs/PreviewApi.md#previewDocumentPdfIdGet) | **GET** /preview/document_pdf/{id} | File document page preview
*QuatrixApi.PreviewApi* | [**previewImageIdGet**](docs/PreviewApi.md#previewImageIdGet) | **GET** /preview/image/{id} | File image preview
*QuatrixApi.PreviewApi* | [**previewVideoIdGet**](docs/PreviewApi.md#previewVideoIdGet) | **GET** /preview/video/{id} | File video preview
*QuatrixApi.ProfileApi* | [**profile2faGenerateGet**](docs/ProfileApi.md#profile2faGenerateGet) | **GET** /profile/2fa/generate | Generate new 2fa code
*QuatrixApi.ProfileApi* | [**profileGet**](docs/ProfileApi.md#profileGet) | **GET** /profile | Profile metadata
*QuatrixApi.ProfileApi* | [**profileInfoGet**](docs/ProfileApi.md#profileInfoGet) | **GET** /profile/info | Additional profile info
*QuatrixApi.ProfileApi* | [**profileRemoveMfaPost**](docs/ProfileApi.md#profileRemoveMfaPost) | **POST** /profile/remove-mfa | Remove MFA for account
*QuatrixApi.ProfileApi* | [**profileSetMfaPost**](docs/ProfileApi.md#profileSetMfaPost) | **POST** /profile/set-mfa | Set MFA enabled for account
*QuatrixApi.ProfileApi* | [**profileSetPasswordPost**](docs/ProfileApi.md#profileSetPasswordPost) | **POST** /profile/set-password | Change profile password
*QuatrixApi.ProfileApi* | [**profileSetPost**](docs/ProfileApi.md#profileSetPost) | **POST** /profile/set | Update profile metadata
*QuatrixApi.ProjectFolderApi* | [**projectFolderAddUsersIdPost**](docs/ProjectFolderApi.md#projectFolderAddUsersIdPost) | **POST** /project-folder/add-users/{id} | Add project folder users
*QuatrixApi.ProjectFolderApi* | [**projectFolderCreatePost**](docs/ProjectFolderApi.md#projectFolderCreatePost) | **POST** /project-folder/create | Create project folder
*QuatrixApi.ProjectFolderApi* | [**projectFolderDeleteIdGet**](docs/ProjectFolderApi.md#projectFolderDeleteIdGet) | **GET** /project-folder/delete/{id} | Remove project folder
*QuatrixApi.ProjectFolderApi* | [**projectFolderDeleteUsersPost**](docs/ProjectFolderApi.md#projectFolderDeleteUsersPost) | **POST** /project-folder/delete-users/ | Remove project folder users
*QuatrixApi.ProjectFolderApi* | [**projectFolderEditUsersIdPost**](docs/ProjectFolderApi.md#projectFolderEditUsersIdPost) | **POST** /project-folder/edit-users/{id} | Update project folder users
*QuatrixApi.ProjectFolderApi* | [**projectFolderGet**](docs/ProjectFolderApi.md#projectFolderGet) | **GET** /project-folder | List of valid project folder for current user
*QuatrixApi.ProjectFolderApi* | [**projectFolderMetadataIdGet**](docs/ProjectFolderApi.md#projectFolderMetadataIdGet) | **GET** /project-folder/metadata/{id} | Project folder metadata
*QuatrixApi.ProjectFolderApi* | [**projectFolderProjectUsersPost**](docs/ProjectFolderApi.md#projectFolderProjectUsersPost) | **POST** /project-folder/project-users | List of project folders for users
*QuatrixApi.ProjectFolderApi* | [**projectFolderSetUsersPost**](docs/ProjectFolderApi.md#projectFolderSetUsersPost) | **POST** /project-folder/set-users | Add users to project folders. Replace exists permissions if users exists
*QuatrixApi.ProjectFolderApi* | [**projectFolderUsersIdGet**](docs/ProjectFolderApi.md#projectFolderUsersIdGet) | **GET** /project-folder/users/{id} | List project folder users
*QuatrixApi.SSHKeyApi* | [**sshKeyCreatePost**](docs/SSHKeyApi.md#sshKeyCreatePost) | **POST** /ssh-key/create | Create SSH key
*QuatrixApi.SSHKeyApi* | [**sshKeyDeleteIdGet**](docs/SSHKeyApi.md#sshKeyDeleteIdGet) | **GET** /ssh-key/delete/{id} | Delete SSH key
*QuatrixApi.SSHKeyApi* | [**sshKeyDeletePost**](docs/SSHKeyApi.md#sshKeyDeletePost) | **POST** /ssh-key/delete | Delete SSH key
*QuatrixApi.SSHKeyApi* | [**sshKeyEditPost**](docs/SSHKeyApi.md#sshKeyEditPost) | **POST** /ssh-key/edit | Edit SSH key
*QuatrixApi.SSHKeyApi* | [**sshKeyGet**](docs/SSHKeyApi.md#sshKeyGet) | **GET** /ssh-key | List ssh keys
*QuatrixApi.SSHKeyApi* | [**sshKeyMetadataIdGet**](docs/SSHKeyApi.md#sshKeyMetadataIdGet) | **GET** /ssh-key/metadata/{id} | SSH key metadata
*QuatrixApi.ServiceApi* | [**serviceGet**](docs/ServiceApi.md#serviceGet) | **GET** /service | List services
*QuatrixApi.ServiceApi* | [**serviceMetadataIdGet**](docs/ServiceApi.md#serviceMetadataIdGet) | **GET** /service/metadata/{id} | Service metadata
*QuatrixApi.ShareApi* | [**filesReturnMakedirIdPost**](docs/ShareApi.md#filesReturnMakedirIdPost) | **POST** /files-return/makedir/{id} | Return files makedir
*QuatrixApi.ShareApi* | [**filesReturnMetadataIdGet**](docs/ShareApi.md#filesReturnMetadataIdGet) | **GET** /files-return/metadata/{id} | Get return files metadata
*QuatrixApi.ShareApi* | [**filesReturnSendPost**](docs/ShareApi.md#filesReturnSendPost) | **POST** /files-return/send | Send return files share
*QuatrixApi.ShareApi* | [**filesReturnUploadLinkIdPost**](docs/ShareApi.md#filesReturnUploadLinkIdPost) | **POST** /files-return/upload-link/{id} | Get return files upload link
*QuatrixApi.ShareApi* | [**quicklinkCreatePost**](docs/ShareApi.md#quicklinkCreatePost) | **POST** /quicklink/create | Create quicklink
*QuatrixApi.ShareApi* | [**quicklinkLoginPinPost**](docs/ShareApi.md#quicklinkLoginPinPost) | **POST** /quicklink/login-pin | Login with PIN on quicklink
*QuatrixApi.ShareApi* | [**quicklinkRevokeIdGet**](docs/ShareApi.md#quicklinkRevokeIdGet) | **GET** /quicklink/revoke/{id} | Revoke quicklink
*QuatrixApi.ShareApi* | [**shareCreatePost**](docs/ShareApi.md#shareCreatePost) | **POST** /share/create | Create share
*QuatrixApi.ShareApi* | [**shareDownloadIdGet**](docs/ShareApi.md#shareDownloadIdGet) | **GET** /share/download/{id} | Download share files
*QuatrixApi.ShareApi* | [**shareDownloadInfoIdGet**](docs/ShareApi.md#shareDownloadInfoIdGet) | **GET** /share/download-info/{id} | Share download info
*QuatrixApi.ShareApi* | [**shareDownloadLinkIdGet**](docs/ShareApi.md#shareDownloadLinkIdGet) | **GET** /share/download-link/{id} | Download link
*QuatrixApi.ShareApi* | [**shareDownloadLinkIdPost**](docs/ShareApi.md#shareDownloadLinkIdPost) | **POST** /share/download-link/{id} | Download link
*QuatrixApi.ShareApi* | [**shareFilesIdGet**](docs/ShareApi.md#shareFilesIdGet) | **GET** /share/files/{id} | Share files
*QuatrixApi.ShareApi* | [**shareLoginPinPost**](docs/ShareApi.md#shareLoginPinPost) | **POST** /share/login-pin | Login with pin on share
*QuatrixApi.ShareApi* | [**sharePreviewIdGet**](docs/ShareApi.md#sharePreviewIdGet) | **GET** /share/preview/{id} | Preview share file
*QuatrixApi.ShareApi* | [**shareRecipientsGet**](docs/ShareApi.md#shareRecipientsGet) | **GET** /share/recipients | Share recipinets
*QuatrixApi.ShareApi* | [**shareRequestPost**](docs/ShareApi.md#shareRequestPost) | **POST** /share/request | Request share
*QuatrixApi.ShareApi* | [**shareRevokeIdGet**](docs/ShareApi.md#shareRevokeIdGet) | **GET** /share/revoke/{id} | Revoke share
*QuatrixApi.ShareApi* | [**shareSendRequestIdPost**](docs/ShareApi.md#shareSendRequestIdPost) | **POST** /share/send-request/{id} | DEPRECATED! Use /share/request instead.
*QuatrixApi.ShareApi* | [**trackingGet**](docs/ShareApi.md#trackingGet) | **GET** /tracking/ | List share actions
*QuatrixApi.ShareApi* | [**trackingIdGet**](docs/ShareApi.md#trackingIdGet) | **GET** /tracking/{id} | List share actions
*QuatrixApi.SiteSettingsApi* | [**settingsAuthMethodsGet**](docs/SiteSettingsApi.md#settingsAuthMethodsGet) | **GET** /settings/auth-methods | Get account auth-methods settings
*QuatrixApi.SiteSettingsApi* | [**settingsGet**](docs/SiteSettingsApi.md#settingsGet) | **GET** /settings | Get site settings
*QuatrixApi.SiteSettingsApi* | [**settingsSetPost**](docs/SiteSettingsApi.md#settingsSetPost) | **POST** /settings/set | Set site settings
*QuatrixApi.SiteSettingsApi* | [**settingsUploadLogoLinkGet**](docs/SiteSettingsApi.md#settingsUploadLogoLinkGet) | **GET** /settings/upload-logo-link | Get logo upload link
*QuatrixApi.UploadApi* | [**fileModifyPost**](docs/UploadApi.md#fileModifyPost) | **POST** /file/modify | Get file modify link
*QuatrixApi.UploadApi* | [**settingsUploadLogoLinkGet**](docs/UploadApi.md#settingsUploadLogoLinkGet) | **GET** /settings/upload-logo-link | Get logo upload link
*QuatrixApi.UploadApi* | [**uploadFinalizeIdGet**](docs/UploadApi.md#uploadFinalizeIdGet) | **GET** /upload/finalize/{id} | Finalize chunked file upload
*QuatrixApi.UploadApi* | [**uploadLinkPost**](docs/UploadApi.md#uploadLinkPost) | **POST** /upload/link | Get file upload link
*QuatrixApi.UserApi* | [**userCreatePost**](docs/UserApi.md#userCreatePost) | **POST** /user/create | Create user
*QuatrixApi.UserApi* | [**userDeletePost**](docs/UserApi.md#userDeletePost) | **POST** /user/delete | Delete users
*QuatrixApi.UserApi* | [**userEditPost**](docs/UserApi.md#userEditPost) | **POST** /user/edit | User metadata
*QuatrixApi.UserApi* | [**userGet**](docs/UserApi.md#userGet) | **GET** /user | List users
*QuatrixApi.UserApi* | [**userGroupGet**](docs/UserApi.md#userGroupGet) | **GET** /user/group | All user groups
*QuatrixApi.UserApi* | [**userMetadataIdGet**](docs/UserApi.md#userMetadataIdGet) | **GET** /user/metadata/{id} | User metadata
*QuatrixApi.UserApi* | [**userPgpKeyIdGet**](docs/UserApi.md#userPgpKeyIdGet) | **GET** /user/pgp-key/{id} | User PGP key
*QuatrixApi.UserApi* | [**userRemoveMfaPost**](docs/UserApi.md#userRemoveMfaPost) | **POST** /user/remove-mfa | Remove MFA for user
*QuatrixApi.UserApi* | [**userSetMfaPost**](docs/UserApi.md#userSetMfaPost) | **POST** /user/set-mfa | Set MFA enabled for user
*QuatrixApi.UserApi* | [**userSignupPost**](docs/UserApi.md#userSignupPost) | **POST** /user/signup | Signup existing user
*QuatrixApi.WOPIApi* | [**fileWopiTokenIdGet**](docs/WOPIApi.md#fileWopiTokenIdGet) | **GET** /file/wopi-token/{id} | Get wopi token for file
*QuatrixApi.WidgetApi* | [**widgetFinalizeUploadIdGet**](docs/WidgetApi.md#widgetFinalizeUploadIdGet) | **GET** /widget/finalize-upload/{id} | Finalize widget chunked file upload
*QuatrixApi.WidgetApi* | [**widgetMetadataIdGet**](docs/WidgetApi.md#widgetMetadataIdGet) | **GET** /widget/metadata/{id} | Widget metadata
*QuatrixApi.WidgetApi* | [**widgetUploadLinkIdPost**](docs/WidgetApi.md#widgetUploadLinkIdPost) | **POST** /widget/upload-link/{id} | Widget upload link


## Documentation for Models

 - [QuatrixApi.AccountInfoResp](docs/AccountInfoResp.md)
 - [QuatrixApi.AccountListRespItems](docs/AccountListRespItems.md)
 - [QuatrixApi.AccountMetadataResp](docs/AccountMetadataResp.md)
 - [QuatrixApi.AccountRolesRespItems](docs/AccountRolesRespItems.md)
 - [QuatrixApi.AutomationCreateReq](docs/AutomationCreateReq.md)
 - [QuatrixApi.AutomationDeleteResp](docs/AutomationDeleteResp.md)
 - [QuatrixApi.AutomationEditReq](docs/AutomationEditReq.md)
 - [QuatrixApi.AutomationOptions](docs/AutomationOptions.md)
 - [QuatrixApi.AutomationResp](docs/AutomationResp.md)
 - [QuatrixApi.BillingUpgradeReq](docs/BillingUpgradeReq.md)
 - [QuatrixApi.BillingUpgradeResp](docs/BillingUpgradeResp.md)
 - [QuatrixApi.CheckPingResp](docs/CheckPingResp.md)
 - [QuatrixApi.ContactCreateReq](docs/ContactCreateReq.md)
 - [QuatrixApi.ContactDeleteRespItems](docs/ContactDeleteRespItems.md)
 - [QuatrixApi.ContactEditResp](docs/ContactEditResp.md)
 - [QuatrixApi.ContactGroupRespItems](docs/ContactGroupRespItems.md)
 - [QuatrixApi.ContactResp](docs/ContactResp.md)
 - [QuatrixApi.CopyMoveFilesReq](docs/CopyMoveFilesReq.md)
 - [QuatrixApi.ErrorModel](docs/ErrorModel.md)
 - [QuatrixApi.FileAddTagReq](docs/FileAddTagReq.md)
 - [QuatrixApi.FileCsvResp](docs/FileCsvResp.md)
 - [QuatrixApi.FileDiffResp](docs/FileDiffResp.md)
 - [QuatrixApi.FileDiffRespData](docs/FileDiffRespData.md)
 - [QuatrixApi.FileInfoResp](docs/FileInfoResp.md)
 - [QuatrixApi.FileMetadataGetResp](docs/FileMetadataGetResp.md)
 - [QuatrixApi.FileMetadataPostReq](docs/FileMetadataPostReq.md)
 - [QuatrixApi.FileMetadataPostResp](docs/FileMetadataPostResp.md)
 - [QuatrixApi.FileModifyReq](docs/FileModifyReq.md)
 - [QuatrixApi.FileModifyResp](docs/FileModifyResp.md)
 - [QuatrixApi.FilePreviewResp](docs/FilePreviewResp.md)
 - [QuatrixApi.FileRenameReq](docs/FileRenameReq.md)
 - [QuatrixApi.FileRenameResp](docs/FileRenameResp.md)
 - [QuatrixApi.FileResp](docs/FileResp.md)
 - [QuatrixApi.FileSizeResp](docs/FileSizeResp.md)
 - [QuatrixApi.FileTagResp](docs/FileTagResp.md)
 - [QuatrixApi.FilesReturnMakedirReq](docs/FilesReturnMakedirReq.md)
 - [QuatrixApi.FilesReturnMakedirResps](docs/FilesReturnMakedirResps.md)
 - [QuatrixApi.FilesReturnMetadataResp](docs/FilesReturnMetadataResp.md)
 - [QuatrixApi.FilesReturnSendReq](docs/FilesReturnSendReq.md)
 - [QuatrixApi.FilesReturnSendResp](docs/FilesReturnSendResp.md)
 - [QuatrixApi.FilesReturnUploadLinkReq](docs/FilesReturnUploadLinkReq.md)
 - [QuatrixApi.FilesReturnUploadLinkResp](docs/FilesReturnUploadLinkResp.md)
 - [QuatrixApi.Group](docs/Group.md)
 - [QuatrixApi.GroupMetadata](docs/GroupMetadata.md)
 - [QuatrixApi.GroupResp](docs/GroupResp.md)
 - [QuatrixApi.IdName](docs/IdName.md)
 - [QuatrixApi.IdResp](docs/IdResp.md)
 - [QuatrixApi.IdsReq](docs/IdsReq.md)
 - [QuatrixApi.IdsResp](docs/IdsResp.md)
 - [QuatrixApi.InboxRespItems](docs/InboxRespItems.md)
 - [QuatrixApi.JobResp](docs/JobResp.md)
 - [QuatrixApi.KeyRequestMetadataResp](docs/KeyRequestMetadataResp.md)
 - [QuatrixApi.KeyRequestRespondReq](docs/KeyRequestRespondReq.md)
 - [QuatrixApi.LanguagesDefaultResp](docs/LanguagesDefaultResp.md)
 - [QuatrixApi.LanguagesRespItems](docs/LanguagesRespItems.md)
 - [QuatrixApi.MakeDirReq](docs/MakeDirReq.md)
 - [QuatrixApi.PfCreateResp](docs/PfCreateResp.md)
 - [QuatrixApi.PfDeleteUsersRespItems](docs/PfDeleteUsersRespItems.md)
 - [QuatrixApi.PfMetadataResp](docs/PfMetadataResp.md)
 - [QuatrixApi.PfSetUsersReq](docs/PfSetUsersReq.md)
 - [QuatrixApi.PfSetUsersRespItems](docs/PfSetUsersRespItems.md)
 - [QuatrixApi.PfUsersListReq](docs/PfUsersListReq.md)
 - [QuatrixApi.PfUsersListRespItems](docs/PfUsersListRespItems.md)
 - [QuatrixApi.PfaddUsersReq](docs/PfaddUsersReq.md)
 - [QuatrixApi.PfcreateReq](docs/PfcreateReq.md)
 - [QuatrixApi.PfdeleteUsersReq](docs/PfdeleteUsersReq.md)
 - [QuatrixApi.PfeditUsersReq](docs/PfeditUsersReq.md)
 - [QuatrixApi.PgpCreateReq](docs/PgpCreateReq.md)
 - [QuatrixApi.PgpEditReq](docs/PgpEditReq.md)
 - [QuatrixApi.PgpKeyRecipientsRespItems](docs/PgpKeyRecipientsRespItems.md)
 - [QuatrixApi.PgpKeyResp](docs/PgpKeyResp.md)
 - [QuatrixApi.ProfileInfoResp](docs/ProfileInfoResp.md)
 - [QuatrixApi.ProfileRemoveMfaReq](docs/ProfileRemoveMfaReq.md)
 - [QuatrixApi.ProfileRemoveMfaResp](docs/ProfileRemoveMfaResp.md)
 - [QuatrixApi.ProfileResp](docs/ProfileResp.md)
 - [QuatrixApi.ProfileRespShareTypes](docs/ProfileRespShareTypes.md)
 - [QuatrixApi.ProfileSetMfaReq](docs/ProfileSetMfaReq.md)
 - [QuatrixApi.ProfileSetMfaResp](docs/ProfileSetMfaResp.md)
 - [QuatrixApi.ProfileSetPasswordReq](docs/ProfileSetPasswordReq.md)
 - [QuatrixApi.ProfileSetPasswordResp](docs/ProfileSetPasswordResp.md)
 - [QuatrixApi.ProfileSetReq](docs/ProfileSetReq.md)
 - [QuatrixApi.ProfileSetResp](docs/ProfileSetResp.md)
 - [QuatrixApi.ProjectFoldersListRespItem](docs/ProjectFoldersListRespItem.md)
 - [QuatrixApi.ProjectOwner](docs/ProjectOwner.md)
 - [QuatrixApi.ProjectfolderdeleteusersUsers](docs/ProjectfolderdeleteusersUsers.md)
 - [QuatrixApi.ProjectfoldersetusersParams](docs/ProjectfoldersetusersParams.md)
 - [QuatrixApi.ProjectfoldersetusersUsers](docs/ProjectfoldersetusersUsers.md)
 - [QuatrixApi.QuicklinkCreateReq](docs/QuicklinkCreateReq.md)
 - [QuatrixApi.QuicklinkCreateResp](docs/QuicklinkCreateResp.md)
 - [QuatrixApi.QuicklinkLoginPinReq](docs/QuicklinkLoginPinReq.md)
 - [QuatrixApi.ResetPasswordMetadataResp](docs/ResetPasswordMetadataResp.md)
 - [QuatrixApi.ResetPasswordRequestReq](docs/ResetPasswordRequestReq.md)
 - [QuatrixApi.ResetPasswordRequestResp](docs/ResetPasswordRequestResp.md)
 - [QuatrixApi.ResetPasswordResetReq](docs/ResetPasswordResetReq.md)
 - [QuatrixApi.SearchQuery](docs/SearchQuery.md)
 - [QuatrixApi.SearchReq](docs/SearchReq.md)
 - [QuatrixApi.SearchTag](docs/SearchTag.md)
 - [QuatrixApi.ServiceResp](docs/ServiceResp.md)
 - [QuatrixApi.ServiceRespUsers](docs/ServiceRespUsers.md)
 - [QuatrixApi.SessionLoginPostResp](docs/SessionLoginPostResp.md)
 - [QuatrixApi.SessionLoginResp](docs/SessionLoginResp.md)
 - [QuatrixApi.SessionUnblockCaptchaResp](docs/SessionUnblockCaptchaResp.md)
 - [QuatrixApi.SettingsAuthMethodsRespItems](docs/SettingsAuthMethodsRespItems.md)
 - [QuatrixApi.SettingsResp](docs/SettingsResp.md)
 - [QuatrixApi.SettingsSetReq](docs/SettingsSetReq.md)
 - [QuatrixApi.SettingsUploadLogoLinkResp](docs/SettingsUploadLogoLinkResp.md)
 - [QuatrixApi.SettingssetShareTypes](docs/SettingssetShareTypes.md)
 - [QuatrixApi.ShareCreateReq](docs/ShareCreateReq.md)
 - [QuatrixApi.ShareCreateResp](docs/ShareCreateResp.md)
 - [QuatrixApi.ShareDownloadInfoResp](docs/ShareDownloadInfoResp.md)
 - [QuatrixApi.ShareDownloadLinkReq](docs/ShareDownloadLinkReq.md)
 - [QuatrixApi.ShareFilesRespItems](docs/ShareFilesRespItems.md)
 - [QuatrixApi.ShareLoginPinReq](docs/ShareLoginPinReq.md)
 - [QuatrixApi.ShareRecipientsResp](docs/ShareRecipientsResp.md)
 - [QuatrixApi.ShareRequestReq](docs/ShareRequestReq.md)
 - [QuatrixApi.ShareRequestResp](docs/ShareRequestResp.md)
 - [QuatrixApi.ShareSendRequestReq](docs/ShareSendRequestReq.md)
 - [QuatrixApi.ShortUserService](docs/ShortUserService.md)
 - [QuatrixApi.SshKeyCreateReq](docs/SshKeyCreateReq.md)
 - [QuatrixApi.SshKeyDeleteReq](docs/SshKeyDeleteReq.md)
 - [QuatrixApi.SshKeyEditReq](docs/SshKeyEditReq.md)
 - [QuatrixApi.SshKeyResp](docs/SshKeyResp.md)
 - [QuatrixApi.StringSearchQueryElement](docs/StringSearchQueryElement.md)
 - [QuatrixApi.TagSearchQueryElement](docs/TagSearchQueryElement.md)
 - [QuatrixApi.TimestampSearchQueryElement](docs/TimestampSearchQueryElement.md)
 - [QuatrixApi.TrackingActivityRespItems](docs/TrackingActivityRespItems.md)
 - [QuatrixApi.TrackingCSVRespItems](docs/TrackingCSVRespItems.md)
 - [QuatrixApi.TrackingDownloadsRespItems](docs/TrackingDownloadsRespItems.md)
 - [QuatrixApi.TrackingFilesRespItems](docs/TrackingFilesRespItems.md)
 - [QuatrixApi.TrackingIdRespItems](docs/TrackingIdRespItems.md)
 - [QuatrixApi.TrackingRespItems](docs/TrackingRespItems.md)
 - [QuatrixApi.UnblockCaptchaReq](docs/UnblockCaptchaReq.md)
 - [QuatrixApi.UploadFinalizeResp](docs/UploadFinalizeResp.md)
 - [QuatrixApi.UploadLinkReq](docs/UploadLinkReq.md)
 - [QuatrixApi.UserCreateReq](docs/UserCreateReq.md)
 - [QuatrixApi.UserDeleteReq](docs/UserDeleteReq.md)
 - [QuatrixApi.UserEditReq](docs/UserEditReq.md)
 - [QuatrixApi.UserPermissionReq](docs/UserPermissionReq.md)
 - [QuatrixApi.UserPermissionResp](docs/UserPermissionResp.md)
 - [QuatrixApi.UserRemoveMfaReq](docs/UserRemoveMfaReq.md)
 - [QuatrixApi.UserResp](docs/UserResp.md)
 - [QuatrixApi.UserSetMfaReq](docs/UserSetMfaReq.md)
 - [QuatrixApi.UserSignupReq](docs/UserSignupReq.md)
 - [QuatrixApi.WidgetFinalizeUploadResp](docs/WidgetFinalizeUploadResp.md)
 - [QuatrixApi.WidgetUploadLinkReq](docs/WidgetUploadLinkReq.md)
 - [QuatrixApi.WidgetUploadLinkResp](docs/WidgetUploadLinkResp.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header

### basicAuth

- **Type**: HTTP basic authentication

