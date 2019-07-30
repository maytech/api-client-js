# QuatrixApi.APIKeyApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiKeyCreatePost**](APIKeyApi.md#apiKeyCreatePost) | **POST** /api-key/create | Create API Key
[**apiKeyDeleteIdGet**](APIKeyApi.md#apiKeyDeleteIdGet) | **GET** /api-key/delete/{id} | Delete API key
[**apiKeyGet**](APIKeyApi.md#apiKeyGet) | **GET** /api-key | Get all user&#39;s API keys
[**apiKeyIdGet**](APIKeyApi.md#apiKeyIdGet) | **GET** /api-key/{id} | Get user&#39;s API keys
[**apiKeyMetadataIdGet**](APIKeyApi.md#apiKeyMetadataIdGet) | **GET** /api-key/metadata/{id} | Get API key details
[**apiKeyUpdateIdPost**](APIKeyApi.md#apiKeyUpdateIdPost) | **POST** /api-key/update/{id} | Update API key


<a name="apiKeyCreatePost"></a>
# **apiKeyCreatePost**
> APIKeyResp apiKeyCreatePost(body)

Create API Key

Create API key for a specified user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.APIKeyApi();

var body = new QuatrixApi.APIKeyCreateReq(); // APIKeyCreateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiKeyCreatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**APIKeyCreateReq**](APIKeyCreateReq.md)|  | 

### Return type

[**APIKeyResp**](APIKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiKeyDeleteIdGet"></a>
# **apiKeyDeleteIdGet**
> IdResp apiKeyDeleteIdGet(id)

Delete API key

Delete API key by the given ID 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.APIKeyApi();

var id = "id_example"; // String | ID of a key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiKeyDeleteIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a key | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiKeyGet"></a>
# **apiKeyGet**
> [APIKeyResp] apiKeyGet()

Get all user&#39;s API keys

Get all manageable user&#39;s API keys 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.APIKeyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiKeyGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[APIKeyResp]**](APIKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiKeyIdGet"></a>
# **apiKeyIdGet**
> [APIKeyResp] apiKeyIdGet(id)

Get user&#39;s API keys

Retrieve all API keys for a specified user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.APIKeyApi();

var id = "id_example"; // String | ID of a user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiKeyIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a user | 

### Return type

[**[APIKeyResp]**](APIKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiKeyMetadataIdGet"></a>
# **apiKeyMetadataIdGet**
> APIKeyResp apiKeyMetadataIdGet(id)

Get API key details

Retrieve API key metadata by the ID of the key. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.APIKeyApi();

var id = "id_example"; // String | ID of a key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiKeyMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a key | 

### Return type

[**APIKeyResp**](APIKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiKeyUpdateIdPost"></a>
# **apiKeyUpdateIdPost**
> APIKeyResp apiKeyUpdateIdPost(id, body)

Update API key

Update API key metadata by ID of the key 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.APIKeyApi();

var id = "id_example"; // String | ID of the key

var body = new QuatrixApi.APIKeyUpdateReq(); // APIKeyUpdateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiKeyUpdateIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of the key | 
 **body** | [**APIKeyUpdateReq**](APIKeyUpdateReq.md)|  | 

### Return type

[**APIKeyResp**](APIKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

