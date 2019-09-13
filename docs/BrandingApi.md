# QuatrixApi.BrandingApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**brandingGet**](BrandingApi.md#brandingGet) | **GET** /branding | Get branding for account
[**brandingPost**](BrandingApi.md#brandingPost) | **POST** /branding | Create or update branding for account
[**brandingPreviewPost**](BrandingApi.md#brandingPreviewPost) | **POST** /branding/preview | Render html from markdown


<a name="brandingGet"></a>
# **brandingGet**
> AccountBranding brandingGet()

Get branding for account

Returns branding for account(based on logged role) 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.BrandingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.brandingGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AccountBranding**](AccountBranding.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="brandingPost"></a>
# **brandingPost**
> AccountBranding brandingPost(body)

Create or update branding for account

Create or update branding for account. Returns account branding 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.BrandingApi();

var body = new QuatrixApi.AccountBrandingReq(); // AccountBrandingReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.brandingPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccountBrandingReq**](AccountBrandingReq.md)|  | 

### Return type

[**AccountBranding**](AccountBranding.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="brandingPreviewPost"></a>
# **brandingPreviewPost**
> AccountBrandingPreview brandingPreviewPost(body)

Render html from markdown

Render markdown and sanitize output html 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.BrandingApi();

var body = new QuatrixApi.AccountBrandingPreview(); // AccountBrandingPreview | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.brandingPreviewPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccountBrandingPreview**](AccountBrandingPreview.md)|  | 

### Return type

[**AccountBrandingPreview**](AccountBrandingPreview.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

