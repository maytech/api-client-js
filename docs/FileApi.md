# QuatrixApi.FileApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileAddTagIdPost**](FileApi.md#fileAddTagIdPost) | **POST** /file/add-tag/{id} | Add a file tag
[**fileCopyPost**](FileApi.md#fileCopyPost) | **POST** /file/copy | Copy files
[**fileCsvIdGet**](FileApi.md#fileCsvIdGet) | **GET** /file/csv/{id} | Download CSV file with Folder Content
[**fileDeletePost**](FileApi.md#fileDeletePost) | **POST** /file/delete | Delete files
[**fileDiffIdGet**](FileApi.md#fileDiffIdGet) | **GET** /file/diff/{id} | Display changes of the file
[**fileDownloadIdGet**](FileApi.md#fileDownloadIdGet) | **GET** /file/download/{id} | Download file
[**fileDownloadLinkPost**](FileApi.md#fileDownloadLinkPost) | **POST** /file/download-link | Get download link
[**fileEmptyTrashIdPost**](FileApi.md#fileEmptyTrashIdPost) | **POST** /file/empty-trash/{id} | Empty trash
[**fileInfoIdGet**](FileApi.md#fileInfoIdGet) | **GET** /file/info/{id} | Get file info
[**fileMakedirPost**](FileApi.md#fileMakedirPost) | **POST** /file/makedir | Create a new folder
[**fileMetadataGet**](FileApi.md#fileMetadataGet) | **GET** /file/metadata | Get metadata of files
[**fileMetadataIdGet**](FileApi.md#fileMetadataIdGet) | **GET** /file/metadata/{id} | Get all file metadata
[**fileMetadataPost**](FileApi.md#fileMetadataPost) | **POST** /file/metadata | Modify file metadata
[**fileModifyPost**](FileApi.md#fileModifyPost) | **POST** /file/modify | Get file modification link
[**fileMovePost**](FileApi.md#fileMovePost) | **POST** /file/move | Move files
[**filePreviewIdGet**](FileApi.md#filePreviewIdGet) | **GET** /file/preview/{id} | Get a file preview
[**fileRenameIdPost**](FileApi.md#fileRenameIdPost) | **POST** /file/rename/{id} | Rename a file
[**fileSearchPost**](FileApi.md#fileSearchPost) | **POST** /file/search | Search files
[**fileSizeIdGet**](FileApi.md#fileSizeIdGet) | **GET** /file/size/{id} | Get file size
[**fileTagsIdGet**](FileApi.md#fileTagsIdGet) | **GET** /file/tags/{id} | Get a list of file tags


<a name="fileAddTagIdPost"></a>
# **fileAddTagIdPost**
> FileTagResp fileAddTagIdPost(id, body)

Add a file tag

Add a tag to filter the file list. 

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

Creates a copy of a file or a folder. The original version of the file will not be changed. On success 202 response it returns “job_id”. To check the result, see the API call “job/status\&quot;. 

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

Return CSV file with information containing file metadata. It contains the path for each file displaying the hierarchy of files. 

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

Move a file or folder to Trash. If you delete less than 10 files, it returns 200 and the IDs of the deleted files. In case you delete more than 10 files, the API returns 202 response. 

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

Display changes of the file

Get file changes for specified preiod. 

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
> fileDownloadIdGet(id)

Download file

Download a file or files by given ID. Multiple file download returns files in Zip format. 

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

var id = "id_example"; // String | ID of a file download link


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fileDownloadIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file download link | 

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

Get a unique key for downloading files. 

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

<a name="fileEmptyTrashIdPost"></a>
# **fileEmptyTrashIdPost**
> [Object] fileEmptyTrashIdPost(id, )

Empty trash

Permanently delete all files from Trash by the given Trash ID. If the ID is not provided, empty the Trash of the logged-in user. 

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
apiInstance.fileEmptyTrashIdPost(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a file | 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileInfoIdGet"></a>
# **fileInfoIdGet**
> FileInfoResp fileInfoIdGet(id, )

Get file info

Retrieve the file information by the specified ID. 

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

Create a new folder

Create a new folder 

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

Get metadata of files

Get information about files in the current User Home folder. 

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

Get all file metadata

Retrieve all metadata associated with a given file. If ID endpoint is not provided, get the metadata of a current Use Home folder. 

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

Modify file metadata

Update file metadata with the given payload. 

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

Get file modification link

Get file modification link 

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

Move a file or folder from one location to another. 

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

Get a file preview

Retrieve a file preview by the given ID of the file. 

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

Rename a file

Change a file name. 

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

Search any file by the given directory. 

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

Get details about the file size by the given ID. 

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

Get a list of file tags

Retrieve a list of available file tags. 

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

