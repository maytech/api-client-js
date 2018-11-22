# QuatrixApi.WidgetApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**widgetFinalizeUploadIdGet**](WidgetApi.md#widgetFinalizeUploadIdGet) | **GET** /widget/finalize-upload/{id} | Finalize widget chunked file upload
[**widgetMetadataIdGet**](WidgetApi.md#widgetMetadataIdGet) | **GET** /widget/metadata/{id} | Widget metadata
[**widgetUploadLinkIdPost**](WidgetApi.md#widgetUploadLinkIdPost) | **POST** /widget/upload-link/{id} | Widget upload link


<a name="widgetFinalizeUploadIdGet"></a>
# **widgetFinalizeUploadIdGet**
> WidgetFinalizeUploadResp widgetFinalizeUploadIdGet(id)

Finalize widget chunked file upload

Finalize widget chunked file upload 

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

Widget metadata

Get widget metadata 

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

Widget upload link

Get widget upload link 

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

