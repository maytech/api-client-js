# QuatrixApi.ShareApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesReturnMakedirIdPost**](ShareApi.md#filesReturnMakedirIdPost) | **POST** /files-return/makedir/{id} | Return files makedir
[**filesReturnMetadataIdGet**](ShareApi.md#filesReturnMetadataIdGet) | **GET** /files-return/metadata/{id} | Get return files metadata
[**filesReturnSendPost**](ShareApi.md#filesReturnSendPost) | **POST** /files-return/send | Send return files share
[**filesReturnUploadLinkIdPost**](ShareApi.md#filesReturnUploadLinkIdPost) | **POST** /files-return/upload-link/{id} | Get return files upload link
[**quicklinkCreatePost**](ShareApi.md#quicklinkCreatePost) | **POST** /quicklink/create | Create quicklink
[**quicklinkLoginPinPost**](ShareApi.md#quicklinkLoginPinPost) | **POST** /quicklink/login-pin | Login with PIN on quicklink
[**quicklinkRevokeIdGet**](ShareApi.md#quicklinkRevokeIdGet) | **GET** /quicklink/revoke/{id} | Revoke quicklink
[**shareCreatePost**](ShareApi.md#shareCreatePost) | **POST** /share/create | Create share
[**shareDownloadIdGet**](ShareApi.md#shareDownloadIdGet) | **GET** /share/download/{id} | Download share files
[**shareDownloadInfoIdGet**](ShareApi.md#shareDownloadInfoIdGet) | **GET** /share/download-info/{id} | Share download info
[**shareDownloadLinkIdGet**](ShareApi.md#shareDownloadLinkIdGet) | **GET** /share/download-link/{id} | Download link
[**shareDownloadLinkIdPost**](ShareApi.md#shareDownloadLinkIdPost) | **POST** /share/download-link/{id} | Download link
[**shareFilesIdGet**](ShareApi.md#shareFilesIdGet) | **GET** /share/files/{id} | Share files
[**shareLoginPinPost**](ShareApi.md#shareLoginPinPost) | **POST** /share/login-pin | Login with pin on share
[**sharePreviewIdGet**](ShareApi.md#sharePreviewIdGet) | **GET** /share/preview/{id} | Preview share file
[**shareRecipientsGet**](ShareApi.md#shareRecipientsGet) | **GET** /share/recipients | Share recipinets
[**shareRequestPost**](ShareApi.md#shareRequestPost) | **POST** /share/request | Request share
[**shareRevokeIdGet**](ShareApi.md#shareRevokeIdGet) | **GET** /share/revoke/{id} | Revoke share
[**shareSendRequestIdPost**](ShareApi.md#shareSendRequestIdPost) | **POST** /share/send-request/{id} | DEPRECATED! Use /share/request instead.
[**trackingGet**](ShareApi.md#trackingGet) | **GET** /tracking/ | List share actions
[**trackingIdGet**](ShareApi.md#trackingIdGet) | **GET** /tracking/{id} | List share actions


<a name="filesReturnMakedirIdPost"></a>
# **filesReturnMakedirIdPost**
> FilesReturnMakedirResps filesReturnMakedirIdPost(id, body)

Return files makedir

Create folder via return files 

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

Get return files metadata 

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

Send return files share

Create and send return files share 

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

Get return files upload link 

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

Create quicklink

Creating public share with no recipients 

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

Login with PIN on quicklink

Login on quicklink protected with PIN 

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

Revoke quicklink

Revoke quicklink 

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

Create share

Create share 

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
> shareDownloadIdGet(id, opts)

Download share files

Download share files content 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.ShareApi();

var id = "id_example"; // String | Download link ID

var opts = { 
  'files': ["files_example"] // [String] | File ids
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.shareDownloadIdGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Download link ID | 
 **files** | [**[String]**](String.md)| File ids | [optional] 

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

Share download info

Get share download info 

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

Download link

Download link for all files 

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

Download link

Download link for selected files 

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
> [ShareFilesRespItems] shareFilesIdGet(id)

Share files

List share files 

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

[**[ShareFilesRespItems]**](ShareFilesRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shareLoginPinPost"></a>
# **shareLoginPinPost**
> shareLoginPinPost(body)

Login with pin on share

Login with pin on share protected with pin 

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

Preview share file

Preview share file 

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

Share recipinets

List share available recipients 

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
  'email': "email_example" // String | Start of recipient email
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
 **email** | **String**| Start of recipient email | [optional] 

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

Request share

Request share 

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

Revoke share

Revoke share 

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

DEPRECATED! Use /share/request instead.

Send share request email 

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
> [TrackingRespItems] trackingGet(opts)

List share actions

List share actions 

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

[**[TrackingRespItems]**](TrackingRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackingIdGet"></a>
# **trackingIdGet**
> [TrackingIdRespItems] trackingIdGet(id, opts)

List share actions

List share actions 

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

var id = "id_example"; // String | User id

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
 **id** | **String**| User id | 
 **_date** | **Number**| Share date timestamp | [optional] 

### Return type

[**[TrackingIdRespItems]**](TrackingIdRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

