# QuatrixApi.WidgetApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**widgetFinalizeUploadIdGet**](WidgetApi.md#widgetFinalizeUploadIdGet) | **GET** /widget/finalize-upload/{id} | Finalize chunked upload of the widget
[**widgetMakedirIdPost**](WidgetApi.md#widgetMakedirIdPost) | **POST** /widget/makedir/{id} | Create a subfolder in the widget folder
[**widgetMetadataIdGet**](WidgetApi.md#widgetMetadataIdGet) | **GET** /widget/metadata/{id} | Get all widget metadata
[**widgetUnblockCaptchaIdPost**](WidgetApi.md#widgetUnblockCaptchaIdPost) | **POST** /widget/unblock-captcha/{id} | Unblock the widget CAPTCHA
[**widgetUploadLinkIdPost**](WidgetApi.md#widgetUploadLinkIdPost) | **POST** /widget/upload-link/{id} | Get widget upload link


<a name="widgetFinalizeUploadIdGet"></a>
# **widgetFinalizeUploadIdGet**
> WidgetFinalizeUploadResp widgetFinalizeUploadIdGet(id)

Finalize chunked upload of the widget

Complete the chunked upload of the widget. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.WidgetApi();

var id = "id_example"; // String | Upload key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.widgetFinalizeUploadIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Upload key | 

### Return type

[**WidgetFinalizeUploadResp**](WidgetFinalizeUploadResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="widgetMakedirIdPost"></a>
# **widgetMakedirIdPost**
> WidgetMakedirResp widgetMakedirIdPost(id, body)

Create a subfolder in the widget folder

Creates a new folder in the widget directory and returns the ID that can be used to upload a file or create a subfolder. If the folder exists already under the selected parent, it will return the existing ID. Required passed captcha 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.WidgetApi();

var id = "id_example"; // String | ID of a widget

var body = new QuatrixApi.WidgetMakedirReq(); // WidgetMakedirReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.widgetMakedirIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a widget | 
 **body** | [**WidgetMakedirReq**](WidgetMakedirReq.md)|  | 

### Return type

[**WidgetMakedirResp**](WidgetMakedirResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="widgetMetadataIdGet"></a>
# **widgetMetadataIdGet**
> WidgetMetadataResp widgetMetadataIdGet(id, )

Get all widget metadata

Retrieve available metadata of the widget. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.WidgetApi();

var id = "id_example"; // String | ID of a widget


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.widgetMetadataIdGet(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a widget | 

### Return type

[**WidgetMetadataResp**](WidgetMetadataResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="widgetUnblockCaptchaIdPost"></a>
# **widgetUnblockCaptchaIdPost**
> WidgetMakedirResp1 widgetUnblockCaptchaIdPost(id, body)

Unblock the widget CAPTCHA

Unblock the widget CAPTCHA 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.WidgetApi();

var id = "id_example"; // String | ID of a widget

var body = new QuatrixApi.WindgetUnblockCaptchaReq(); // WindgetUnblockCaptchaReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.widgetUnblockCaptchaIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a widget | 
 **body** | [**WindgetUnblockCaptchaReq**](WindgetUnblockCaptchaReq.md)|  | 

### Return type

[**WidgetMakedirResp1**](WidgetMakedirResp1.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="widgetUploadLinkIdPost"></a>
# **widgetUploadLinkIdPost**
> SettingsUploadLogoLinkResp widgetUploadLinkIdPost(id, body)

Get widget upload link

Retrieve a link for uploading the file via widget. Required passed captcha 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.WidgetApi();

var id = "id_example"; // String | ID of a widget

var body = new QuatrixApi.WidgetUploadLinkReq(); // WidgetUploadLinkReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.widgetUploadLinkIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a widget | 
 **body** | [**WidgetUploadLinkReq**](WidgetUploadLinkReq.md)|  | 

### Return type

[**SettingsUploadLogoLinkResp**](SettingsUploadLogoLinkResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

