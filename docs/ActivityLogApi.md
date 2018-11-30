# QuatrixApi.ActivityLogApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackingActivityGet**](ActivityLogApi.md#trackingActivityGet) | **GET** /tracking/activity | Activity log
[**trackingCsvGet**](ActivityLogApi.md#trackingCsvGet) | **GET** /tracking/csv | Download CSV file with Activity Log
[**trackingDownloadsIdGet**](ActivityLogApi.md#trackingDownloadsIdGet) | **GET** /tracking/downloads/{id} | Share action file downloads
[**trackingFilesIdGet**](ActivityLogApi.md#trackingFilesIdGet) | **GET** /tracking/files/{id} | Share action files


<a name="trackingActivityGet"></a>
# **trackingActivityGet**
> [TrackingActivityRespItems] trackingActivityGet(opts)

Activity log

List activity (action) log. For details - https://dev.maytech.net/wiki/display/ISV3/Activity+Log 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ActivityLogApi();

var opts = { 
  'id': "id_example", // String | Log id
  'userId': "userId_example", // String | User id
  'limit': 100, // Number | Rows per page
  'from': 0, // Number | UTC timestamp
  'to': 8.14 // Number | UTC timestamp
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackingActivityGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Log id | [optional] 
 **userId** | [**String**](.md)| User id | [optional] 
 **limit** | **Number**| Rows per page | [optional] [default to 100]
 **from** | **Number**| UTC timestamp | [optional] [default to 0]
 **to** | **Number**| UTC timestamp | [optional] 

### Return type

[**[TrackingActivityRespItems]**](TrackingActivityRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackingCsvGet"></a>
# **trackingCsvGet**
> [TrackingCSVRespItems] trackingCsvGet(opts)

Download CSV file with Activity Log

Download CSV file content with Activity Log. For details - https://dev.maytech.net/wiki/display/ISV3/Activity+Log 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ActivityLogApi();

var opts = { 
  'userId': "userId_example", // String | User id
  'from': 8.14, // Number | UTC timestamp
  'to': 8.14 // Number | UTC timestamp
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackingCsvGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**String**](.md)| User id | [optional] 
 **from** | **Number**| UTC timestamp | [optional] 
 **to** | **Number**| UTC timestamp | [optional] 

### Return type

[**[TrackingCSVRespItems]**](TrackingCSVRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/csv

<a name="trackingDownloadsIdGet"></a>
# **trackingDownloadsIdGet**
> [TrackingDownloadsRespItems] trackingDownloadsIdGet(id)

Share action file downloads

List share action file downloads 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ActivityLogApi();

var id = "id_example"; // String | Shared file ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackingDownloadsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Shared file ID | 

### Return type

[**[TrackingDownloadsRespItems]**](TrackingDownloadsRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackingFilesIdGet"></a>
# **trackingFilesIdGet**
> [TrackingFilesRespItems] trackingFilesIdGet(id)

Share action files

List share action files 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ActivityLogApi();

var id = "id_example"; // String | Share action ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trackingFilesIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Share action ID | 

### Return type

[**[TrackingFilesRespItems]**](TrackingFilesRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

