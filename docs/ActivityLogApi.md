# QuatrixApi.ActivityLogApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackingActivityGet**](ActivityLogApi.md#trackingActivityGet) | **GET** /tracking/activity | Get activity log
[**trackingCsvGet**](ActivityLogApi.md#trackingCsvGet) | **GET** /tracking/csv | Download CSV file with activity log
[**trackingDownloadsIdGet**](ActivityLogApi.md#trackingDownloadsIdGet) | **GET** /tracking/downloads/{id} | Get shared file downloads
[**trackingFilesIdGet**](ActivityLogApi.md#trackingFilesIdGet) | **GET** /tracking/files/{id} | Get share action files


<a name="trackingActivityGet"></a>
# **trackingActivityGet**
> [Object] trackingActivityGet(opts)

Get activity log

Retrieve the history of actions by the specified user (all visible users) for a given period. 

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
  'id': "id_example", // String | Log ID
  'userId': "userId_example", // String | User ID
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
 **id** | [**String**](.md)| Log ID | [optional] 
 **userId** | [**String**](.md)| User ID | [optional] 
 **limit** | **Number**| Rows per page | [optional] [default to 100]
 **from** | **Number**| UTC timestamp | [optional] [default to 0]
 **to** | **Number**| UTC timestamp | [optional] 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackingCsvGet"></a>
# **trackingCsvGet**
> [Object] trackingCsvGet(opts)

Download CSV file with activity log

Download a file with full activity log in the CSV format by given user ID. If the user ID is not specified, the activity of all manageable users should be displayed. The content of the file will display all actions performed in the account for a specified period. 

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
  'userId': "userId_example", // String | User ID
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
 **userId** | [**String**](.md)| User ID | [optional] 
 **from** | **Number**| UTC timestamp | [optional] 
 **to** | **Number**| UTC timestamp | [optional] 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/csv

<a name="trackingDownloadsIdGet"></a>
# **trackingDownloadsIdGet**
> [Object] trackingDownloadsIdGet(id)

Get shared file downloads

Retrieve information about download actions of the file. 

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

var id = "id_example"; // String | Shared file ID - File ID from /tacking/files/id


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
 **id** | [**String**](.md)| Shared file ID - File ID from /tacking/files/id | 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackingFilesIdGet"></a>
# **trackingFilesIdGet**
> [Object] trackingFilesIdGet(id)

Get share action files

Retrieve a list of shared files by specified share action ID with the number of downloads. 

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

var id = "id_example"; // String | Share ID


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
 **id** | [**String**](.md)| Share ID | 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

