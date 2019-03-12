# QuatrixApi.WidgetApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**widgetFinalizeUploadIdGet**](WidgetApi.md#widgetFinalizeUploadIdGet) | **GET** /widget/finalize-upload/{id} | Finalize chunked upload of the widget
[**widgetMetadataIdGet**](WidgetApi.md#widgetMetadataIdGet) | **GET** /widget/metadata/{id} | Get all widget metadata
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

var id = "id_example"; // String | ID of a widget


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
 **id** | [**String**](.md)| ID of a widget | 

### Return type

[**WidgetFinalizeUploadResp**](WidgetFinalizeUploadResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="widgetMetadataIdGet"></a>
# **widgetMetadataIdGet**
> IdResp widgetMetadataIdGet(id)

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
apiInstance.widgetMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a widget | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="widgetUploadLinkIdPost"></a>
# **widgetUploadLinkIdPost**
> WidgetUploadLinkResp widgetUploadLinkIdPost(id, opts)

Get widget upload link

Retrieve a link for uploading the widget. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.WidgetApi();

var id = "id_example"; // String | ID of a widget

var opts = { 
  'body': new QuatrixApi.WidgetUploadLinkReq() // WidgetUploadLinkReq | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.widgetUploadLinkIdPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a widget | 
 **body** | [**WidgetUploadLinkReq**](WidgetUploadLinkReq.md)|  | [optional] 

### Return type

[**WidgetUploadLinkResp**](WidgetUploadLinkResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

