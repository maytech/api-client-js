# QuatrixApi.FileApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileAddTagIdPost**](FileApi.md#fileAddTagIdPost) | **POST** /file/add-tag/{id} | Add file tag
[**fileCopyPost**](FileApi.md#fileCopyPost) | **POST** /file/copy | Copy files
[**fileCsvIdGet**](FileApi.md#fileCsvIdGet) | **GET** /file/csv/{id} | Download CSV file with Folder Content
[**fileDeletePost**](FileApi.md#fileDeletePost) | **POST** /file/delete | Delete files
[**fileDiffIdGet**](FileApi.md#fileDiffIdGet) | **GET** /file/diff/{id} | File diff
[**fileDownloadIdGet**](FileApi.md#fileDownloadIdGet) | **GET** /file/download/{id} | Download file
[**fileDownloadLinkPost**](FileApi.md#fileDownloadLinkPost) | **POST** /file/download-link | Get download link
[**fileInfoIdGet**](FileApi.md#fileInfoIdGet) | **GET** /file/info/{id} | Get file info
[**fileMakedirPost**](FileApi.md#fileMakedirPost) | **POST** /file/makedir | Create new folder
[**fileMetadataGet**](FileApi.md#fileMetadataGet) | **GET** /file/metadata | Get all file metadata
[**fileMetadataIdGet**](FileApi.md#fileMetadataIdGet) | **GET** /file/metadata/{id} | Get file metadata
[**fileMetadataPost**](FileApi.md#fileMetadataPost) | **POST** /file/metadata | Set file metadata
[**fileModifyPost**](FileApi.md#fileModifyPost) | **POST** /file/modify | Get file modify link
[**fileMovePost**](FileApi.md#fileMovePost) | **POST** /file/move | Move files
[**filePreviewIdGet**](FileApi.md#filePreviewIdGet) | **GET** /file/preview/{id} | File preview
[**fileRenameIdPost**](FileApi.md#fileRenameIdPost) | **POST** /file/rename/{id} | Rename file or folder
[**fileSearchPost**](FileApi.md#fileSearchPost) | **POST** /file/search | Search files
[**fileSizeIdGet**](FileApi.md#fileSizeIdGet) | **GET** /file/size/{id} | Get file size
[**fileTagsIdGet**](FileApi.md#fileTagsIdGet) | **GET** /file/tags/{id} | File tags
[**fileWopiTokenIdGet**](FileApi.md#fileWopiTokenIdGet) | **GET** /file/wopi-token/{id} | Get wopi token for file


<a name="fileAddTagIdPost"></a>
# **fileAddTagIdPost**
> FileTagResp fileAddTagIdPost(id, body)

Add file tag

Add tag to file 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file

var body = new QuatrixApi.FileAddTagReq(); // FileAddTagReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileAddTagIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 
 **body** | [**FileAddTagReq**](FileAddTagReq.md)|  | 

### Return type

[**FileTagResp**](FileTagResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileCopyPost"></a>
# **fileCopyPost**
> JobResp fileCopyPost(body)

Copy files

Copy files 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var body = new QuatrixApi.CopyMoveFilesReq(); // CopyMoveFilesReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileCopyPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CopyMoveFilesReq**](CopyMoveFilesReq.md)|  | 

### Return type

[**JobResp**](JobResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileCsvIdGet"></a>
# **fileCsvIdGet**
> FileCsvResp fileCsvIdGet(id)

Download CSV file with Folder Content

Download CSV file content with Folder Content. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | File action ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileCsvIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| File action ID | 

### Return type

[**FileCsvResp**](FileCsvResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/csv

<a name="fileDeletePost"></a>
# **fileDeletePost**
> IdsResp fileDeletePost(body)

Delete files

Delete number of files 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var body = new QuatrixApi.IdsReq(); // IdsReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileDeletePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IdsReq**](IdsReq.md)|  | 

### Return type

[**IdsResp**](IdsResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileDiffIdGet"></a>
# **fileDiffIdGet**
> FileDiffResp fileDiffIdGet(id, from, opts)

File diff

Get file changes diff 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file

var from = 8.14; // Number | 

var opts = { 
  'to': 8.14 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileDiffIdGet(id, from, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 
 **from** | **Number**|  | 
 **to** | **Number**|  | [optional] 

### Return type

[**FileDiffResp**](FileDiffResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileDownloadIdGet"></a>
# **fileDownloadIdGet**
> fileDownloadIdGet(id, )

Download file

Download file content 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fileDownloadIdGet(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="fileDownloadLinkPost"></a>
# **fileDownloadLinkPost**
> IdResp fileDownloadLinkPost(body)

Get download link

Get files download link 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var body = new QuatrixApi.IdsReq(); // IdsReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileDownloadLinkPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IdsReq**](IdsReq.md)|  | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileInfoIdGet"></a>
# **fileInfoIdGet**
> FileInfoResp fileInfoIdGet(id, )

Get file info

Get file info 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileInfoIdGet(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 

### Return type

[**FileInfoResp**](FileInfoResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileMakedirPost"></a>
# **fileMakedirPost**
> FileResp fileMakedirPost(body)

Create new folder

Create new folder 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var body = new QuatrixApi.MakeDirReq(); // MakeDirReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileMakedirPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MakeDirReq**](MakeDirReq.md)|  | 

### Return type

[**FileResp**](FileResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileMetadataGet"></a>
# **fileMetadataGet**
> FileMetadataGetResp fileMetadataGet(opts)

Get all file metadata

Get all file metadata in current user home folder 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var opts = { 
  'content': 1 // Number | Return content flag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileMetadataGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **Number**| Return content flag | [optional] [default to 1]

### Return type

[**FileMetadataGetResp**](FileMetadataGetResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileMetadataIdGet"></a>
# **fileMetadataIdGet**
> FileMetadataGetResp fileMetadataIdGet(id, , opts)

Get file metadata

Get file metadata 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file

var opts = { 
  'content': 1 // Number | Return content flag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileMetadataIdGet(id, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 
 **content** | **Number**| Return content flag | [optional] [default to 1]

### Return type

[**FileMetadataGetResp**](FileMetadataGetResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileMetadataPost"></a>
# **fileMetadataPost**
> FileMetadataPostResp fileMetadataPost(body)

Set file metadata

Set file metadata 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var body = new QuatrixApi.FileMetadataPostReq(); // FileMetadataPostReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileMetadataPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FileMetadataPostReq**](FileMetadataPostReq.md)|  | 

### Return type

[**FileMetadataPostResp**](FileMetadataPostResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileModifyPost"></a>
# **fileModifyPost**
> FileModifyResp fileModifyPost(body)

Get file modify link

Get file modify link 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var body = new QuatrixApi.FileModifyReq(); // FileModifyReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileModifyPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FileModifyReq**](FileModifyReq.md)|  | 

### Return type

[**FileModifyResp**](FileModifyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileMovePost"></a>
# **fileMovePost**
> IdsResp fileMovePost(body)

Move files

Move files 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var body = new QuatrixApi.CopyMoveFilesReq(); // CopyMoveFilesReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileMovePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CopyMoveFilesReq**](CopyMoveFilesReq.md)|  | 

### Return type

[**IdsResp**](IdsResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filePreviewIdGet"></a>
# **filePreviewIdGet**
> FilePreviewResp filePreviewIdGet(id, )

File preview

Get file preview metadata 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filePreviewIdGet(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 

### Return type

[**FilePreviewResp**](FilePreviewResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileRenameIdPost"></a>
# **fileRenameIdPost**
> FileRenameResp fileRenameIdPost(id, body)

Rename file or folder

Rename file or folder 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file

var body = new QuatrixApi.FileRenameReq(); // FileRenameReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileRenameIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 
 **body** | [**FileRenameReq**](FileRenameReq.md)|  | 

### Return type

[**FileRenameResp**](FileRenameResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileSearchPost"></a>
# **fileSearchPost**
> [FileResp] fileSearchPost(body)

Search files

Search files 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var body = new QuatrixApi.SearchReq(); // SearchReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileSearchPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchReq**](SearchReq.md)|  | 

### Return type

[**[FileResp]**](FileResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileSizeIdGet"></a>
# **fileSizeIdGet**
> FileSizeResp fileSizeIdGet(id, )

Get file size

Get file size 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileSizeIdGet(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 

### Return type

[**FileSizeResp**](FileSizeResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileTagsIdGet"></a>
# **fileTagsIdGet**
> [FileTagResp] fileTagsIdGet(id, )

File tags

List file tags 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileTagsIdGet(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 

### Return type

[**[FileTagResp]**](FileTagResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileWopiTokenIdGet"></a>
# **fileWopiTokenIdGet**
> IdResp fileWopiTokenIdGet(id, )

Get wopi token for file

Get wopi token for file 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.FileApi();

var id = "id_example"; // String | ID of a file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fileWopiTokenIdGet(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

