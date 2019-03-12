# QuatrixApi.PreviewApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filePreviewIdGet**](PreviewApi.md#filePreviewIdGet) | **GET** /file/preview/{id} | Get a file preview
[**previewIdGet**](PreviewApi.md#previewIdGet) | **GET** /preview/{id} | Get binary preview data


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

var apiInstance = new QuatrixApi.PreviewApi();

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

<a name="previewIdGet"></a>
# **previewIdGet**
> previewIdGet(id)

Get binary preview data

Get a preview with the response content type based on the file type e.g. image/jpeg for images. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PreviewApi();

var id = "id_example"; // String | File ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.previewIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| File ID | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/jpeg, video/mp4, application/pdf

