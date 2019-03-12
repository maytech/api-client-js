# QuatrixApi.ServiceApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceGet**](ServiceApi.md#serviceGet) | **GET** /service | List available services
[**serviceMetadataIdGet**](ServiceApi.md#serviceMetadataIdGet) | **GET** /service/metadata/{id} | Get service metadata


<a name="serviceGet"></a>
# **serviceGet**
> [ServiceResp] serviceGet()

List available services

Retrieve a list of all available services. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ServiceResp]**](ServiceResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="serviceMetadataIdGet"></a>
# **serviceMetadataIdGet**
> ServiceResp serviceMetadataIdGet(id)

Get service metadata

Retrieve information about the service by given ID. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ServiceApi();

var id = "id_example"; // String | Service ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Service ID | 

### Return type

[**ServiceResp**](ServiceResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

