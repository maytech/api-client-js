# QuatrixApi.ShareApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesReturnMakedirIdPost**](ShareApi.md#filesReturnMakedirIdPost) | **POST** /files-return/makedir/{id} | Create a directory for returned files
[**filesReturnMetadataIdGet**](ShareApi.md#filesReturnMetadataIdGet) | **GET** /files-return/metadata/{id} | Get return files metadata
[**filesReturnSendPost**](ShareApi.md#filesReturnSendPost) | **POST** /files-return/send | Return files in the created share
[**filesReturnUploadLinkIdPost**](ShareApi.md#filesReturnUploadLinkIdPost) | **POST** /files-return/upload-link/{id} | Get return files upload link
[**quicklinkCreatePost**](ShareApi.md#quicklinkCreatePost) | **POST** /quicklink/create | Create a quicklink
[**quicklinkLoginPinPost**](ShareApi.md#quicklinkLoginPinPost) | **POST** /quicklink/login-pin | Log in with PIN to access a quicklink
[**quicklinkRevokeIdGet**](ShareApi.md#quicklinkRevokeIdGet) | **GET** /quicklink/revoke/{id} | Revoke a quicklink
[**shareCreatePost**](ShareApi.md#shareCreatePost) | **POST** /share/create | Create a file share
[**shareDownloadIdGet**](ShareApi.md#shareDownloadIdGet) | **GET** /share/download/{id} | Download share files
[**shareDownloadInfoIdGet**](ShareApi.md#shareDownloadInfoIdGet) | **GET** /share/download-info/{id} | Get share download info
[**shareDownloadLinkIdGet**](ShareApi.md#shareDownloadLinkIdGet) | **GET** /share/download-link/{id} | Get download link for all files
[**shareDownloadLinkIdPost**](ShareApi.md#shareDownloadLinkIdPost) | **POST** /share/download-link/{id} | Get download link for specified files
[**shareFilesIdGet**](ShareApi.md#shareFilesIdGet) | **GET** /share/files/{id} | List shared files
[**shareLoginPinPost**](ShareApi.md#shareLoginPinPost) | **POST** /share/login-pin | Log in with PIN to access a share
[**sharePreviewIdGet**](ShareApi.md#sharePreviewIdGet) | **GET** /share/preview/{id} | Preview a shared file
[**shareRecipientsGet**](ShareApi.md#shareRecipientsGet) | **GET** /share/recipients | List all contacts for the share
[**shareRequestPost**](ShareApi.md#shareRequestPost) | **POST** /share/request | Send a request to share files
[**shareRevokeIdGet**](ShareApi.md#shareRevokeIdGet) | **GET** /share/revoke/{id} | Revoke a share
[**shareSendRequestIdPost**](ShareApi.md#shareSendRequestIdPost) | **POST** /share/send-request/{id} | Request files. Use /share/request API call instead.
[**trackingGet**](ShareApi.md#trackingGet) | **GET** /tracking/ | List share actions metadata for all users
[**trackingIdGet**](ShareApi.md#trackingIdGet) | **GET** /tracking/{id} | List share actions metadata for a user


<a name="filesReturnMakedirIdPost"></a>
# **filesReturnMakedirIdPost**
> FilesReturnMakedirResps filesReturnMakedirIdPost(id, body)

Create a directory for returned files

Add a directory for retuned files in the sender’s file tree. In order to return a file tree structure, you should duplicate it on the server side, that is send this API call to create each folder separately. This call returns the ID response that can be used as the parent ID for creating a new folder in the already created folder. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share action ID

var body = new QuatrixApi.FilesReturnMakedirReq(); // FilesReturnMakedirReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filesReturnMakedirIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Share action ID | 
 **body** | [**FilesReturnMakedirReq**](FilesReturnMakedirReq.md)|  | 

### Return type

[**FilesReturnMakedirResps**](FilesReturnMakedirResps.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filesReturnMetadataIdGet"></a>
# **filesReturnMetadataIdGet**
> FilesReturnMetadataResp filesReturnMetadataIdGet(id)

Get return files metadata

Get the metadata of returning files. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share action ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filesReturnMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share action ID | 

### Return type

[**FilesReturnMetadataResp**](FilesReturnMetadataResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filesReturnSendPost"></a>
# **filesReturnSendPost**
> FilesReturnSendResp filesReturnSendPost(body)

Return files in the created share

Return files to the share sender. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var body = new QuatrixApi.FilesReturnSendReq(); // FilesReturnSendReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filesReturnSendPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FilesReturnSendReq**](FilesReturnSendReq.md)|  | 

### Return type

[**FilesReturnSendResp**](FilesReturnSendResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filesReturnUploadLinkIdPost"></a>
# **filesReturnUploadLinkIdPost**
> FilesReturnUploadLinkResp filesReturnUploadLinkIdPost(id, body)

Get return files upload link

Get the upload link to return files to the share sender. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share action ID

var body = new QuatrixApi.FilesReturnUploadLinkReq(); // FilesReturnUploadLinkReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filesReturnUploadLinkIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Share action ID | 
 **body** | [**FilesReturnUploadLinkReq**](FilesReturnUploadLinkReq.md)|  | 

### Return type

[**FilesReturnUploadLinkResp**](FilesReturnUploadLinkResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="quicklinkCreatePost"></a>
# **quicklinkCreatePost**
> QuicklinkCreateResp quicklinkCreatePost(body)

Create a quicklink

Create a quicklink with the usage behaviour the same as a public share. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var body = new QuatrixApi.QuicklinkCreateReq(); // QuicklinkCreateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quicklinkCreatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuicklinkCreateReq**](QuicklinkCreateReq.md)|  | 

### Return type

[**QuicklinkCreateResp**](QuicklinkCreateResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="quicklinkLoginPinPost"></a>
# **quicklinkLoginPinPost**
> quicklinkLoginPinPost(body)

Log in with PIN to access a quicklink

Log in using a previously generated PIN that was sent while creating the quicklink to have access to it. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var body = new QuatrixApi.QuicklinkLoginPinReq(); // QuicklinkLoginPinReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.quicklinkLoginPinPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuicklinkLoginPinReq**](QuicklinkLoginPinReq.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="quicklinkRevokeIdGet"></a>
# **quicklinkRevokeIdGet**
> IdResp quicklinkRevokeIdGet(id)

Revoke a quicklink

Disable access to a quicklink. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share action ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quicklinkRevokeIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share action ID | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareCreatePost"></a>
# **shareCreatePost**
> ShareCreateResp shareCreatePost(body)

Create a file share

Create a share with files. File share types:           - P (public) - Anyone can download. Limited tracking - IP address only.           - T (tracked) - Any registered user/recipient can download. Full tracking.           - C (restricted) - Only the registered email recipient(s) can download. Full tracking. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var body = new QuatrixApi.ShareCreateReq(); // ShareCreateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shareCreatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShareCreateReq**](ShareCreateReq.md)|  | 

### Return type

[**ShareCreateResp**](ShareCreateResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareDownloadIdGet"></a>
# **shareDownloadIdGet**
> shareDownloadIdGet(id)

Download share files

Download files requested in the share/download-link call. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Download link ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.shareDownloadIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Download link ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="shareDownloadInfoIdGet"></a>
# **shareDownloadInfoIdGet**
> ShareDownloadInfoResp shareDownloadInfoIdGet(id)

Get share download info

Get the share metadata by the given share action iD. File share types:           - P (public) - Anyone can download. Limited tracking - IP address only.           - T (tracked) - Any registered user/recipient can download. Full tracking.           - C (restricted) - Only the registered email recipient(s) can download. Full tracking. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share action ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shareDownloadInfoIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share action ID | 

### Return type

[**ShareDownloadInfoResp**](ShareDownloadInfoResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareDownloadLinkIdGet"></a>
# **shareDownloadLinkIdGet**
> IdResp shareDownloadLinkIdGet(id)

Get download link for all files

Retrieve a link for downloading all files. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share action ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shareDownloadLinkIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share action ID | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareDownloadLinkIdPost"></a>
# **shareDownloadLinkIdPost**
> IdResp shareDownloadLinkIdPost(id, opts)

Get download link for specified files

Retrieve a link for downloading specified files. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share action ID

var opts = { 
  'body': new QuatrixApi.ShareDownloadLinkReq() // ShareDownloadLinkReq | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shareDownloadLinkIdPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share action ID | 
 **body** | [**ShareDownloadLinkReq**](ShareDownloadLinkReq.md)|  | [optional] 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareFilesIdGet"></a>
# **shareFilesIdGet**
> [Object] shareFilesIdGet(id)

List shared files

Retrieve a list of shared files. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share action ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shareFilesIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share action ID | 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareLoginPinPost"></a>
# **shareLoginPinPost**
> shareLoginPinPost(body)

Log in with PIN to access a share

Log in using a previously generated PIN that was sent while creating the share to have access to it. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var body = new QuatrixApi.ShareLoginPinReq(); // ShareLoginPinReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.shareLoginPinPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShareLoginPinReq**](ShareLoginPinReq.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sharePreviewIdGet"></a>
# **sharePreviewIdGet**
> sharePreviewIdGet(id, opts)

Preview a shared file

Preview a shared file by given share file ID. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share file ID

var opts = { 
  'size': "size_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sharePreviewIdGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share file ID | 
 **size** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png

<a name="shareRecipientsGet"></a>
# **shareRecipientsGet**
> ShareRecipientsResp shareRecipientsGet(opts)

List all contacts for the share

Retrieve a list of all recipients that can receive the share. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var opts = { 
  'email': "email_example" // String | Search emails by the specified beginning.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shareRecipientsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Search emails by the specified beginning. | [optional] 

### Return type

[**ShareRecipientsResp**](ShareRecipientsResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareRequestPost"></a>
# **shareRequestPost**
> ShareRequestResp shareRequestPost(body)

Send a request to share files

Send a file sharing request. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var body = new QuatrixApi.ShareRequestReq(); // ShareRequestReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shareRequestPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShareRequestReq**](ShareRequestReq.md)|  | 

### Return type

[**ShareRequestResp**](ShareRequestResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareRevokeIdGet"></a>
# **shareRevokeIdGet**
> IdResp shareRevokeIdGet(id)

Revoke a share

Revoke access to a share 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share action ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shareRevokeIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share action ID | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareSendRequestIdPost"></a>
# **shareSendRequestIdPost**
> JobResp shareSendRequestIdPost(id, opts)

Request files. Use /share/request API call instead.

Send a file sharing request. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Share Request ID

var opts = { 
  'body': new QuatrixApi.ShareSendRequestReq() // ShareSendRequestReq | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.shareSendRequestIdPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share Request ID | 
 **body** | [**ShareSendRequestReq**](ShareSendRequestReq.md)|  | [optional] 

### Return type

[**JobResp**](JobResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackingGet"></a>
# **trackingGet**
> [Object] trackingGet(opts)

List share actions metadata for all users

Retrieve the metadata of created shares and quicklinks of all users that can be managed by a logged-in user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var opts = { 
  '_date': 8.14 // Number | Share date timestamp
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackingGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **Number**| Share date timestamp | [optional] 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackingIdGet"></a>
# **trackingIdGet**
> [Object] trackingIdGet(id, opts)

List share actions metadata for a user

Retrieve the metadata of created shares and quicklinks of a user by given user ID. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | User ID

var opts = { 
  '_date': 8.14 // Number | Share date timestamp
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackingIdGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User ID | 
 **_date** | **Number**| Share date timestamp | [optional] 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

