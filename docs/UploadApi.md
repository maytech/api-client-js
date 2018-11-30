# QuatrixApi.UploadApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileModifyPost**](UploadApi.md#fileModifyPost) | **POST** /file/modify | Get file modify link
[**settingsUploadLogoLinkGet**](UploadApi.md#settingsUploadLogoLinkGet) | **GET** /settings/upload-logo-link | Get logo upload link
[**uploadFinalizeIdGet**](UploadApi.md#uploadFinalizeIdGet) | **GET** /upload/finalize/{id} | Finalize chunked file upload
[**uploadLinkPost**](UploadApi.md#uploadLinkPost) | **POST** /upload/link | Get file upload link


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

var apiInstance = new QuatrixApi.UploadApi();

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

<a name="settingsUploadLogoLinkGet"></a>
# **settingsUploadLogoLinkGet**
> SettingsUploadLogoLinkResp settingsUploadLogoLinkGet()

Get logo upload link

Get account logo upload link 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UploadApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsUploadLogoLinkGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SettingsUploadLogoLinkResp**](SettingsUploadLogoLinkResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadFinalizeIdGet"></a>
# **uploadFinalizeIdGet**
> UploadFinalizeResp uploadFinalizeIdGet(id, opts)

Finalize chunked file upload

Finalize chunked file upload 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UploadApi();

var id = "id_example"; // String | Upload key

var opts = { 
  'mtime': 8.14 // Number | File modification timestamp
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadFinalizeIdGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Upload key | 
 **mtime** | **Number**| File modification timestamp | [optional] 

### Return type

[**UploadFinalizeResp**](UploadFinalizeResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadLinkPost"></a>
# **uploadLinkPost**
> FileModifyResp uploadLinkPost(body)

Get file upload link

Get file upload link 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UploadApi();

var body = new QuatrixApi.UploadLinkReq(); // UploadLinkReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadLinkPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UploadLinkReq**](UploadLinkReq.md)|  | 

### Return type

[**FileModifyResp**](FileModifyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

