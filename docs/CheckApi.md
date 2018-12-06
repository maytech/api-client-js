# QuatrixApi.CheckApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkPingGet**](CheckApi.md#checkPingGet) | **GET** /check/ping | Ping(action)


<a name="checkPingGet"></a>
# **checkPingGet**
> CheckPingResp checkPingGet(opts)

Ping(action)

Ping(action) 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.CheckApi();

var opts = { 
  'apiKey': "apiKey_example" // String | API key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkPingGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| API key | [optional] 

### Return type

[**CheckPingResp**](CheckPingResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

