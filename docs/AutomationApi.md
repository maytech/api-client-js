# QuatrixApi.AutomationApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**automationCreatePost**](AutomationApi.md#automationCreatePost) | **POST** /automation/create | Create a new automation
[**automationDeletePost**](AutomationApi.md#automationDeletePost) | **POST** /automation/delete | Delete automations
[**automationEditPost**](AutomationApi.md#automationEditPost) | **POST** /automation/edit/ | Edit an existing automation
[**automationGet**](AutomationApi.md#automationGet) | **GET** /automation | List all automations
[**automationMetadataIdGet**](AutomationApi.md#automationMetadataIdGet) | **GET** /automation/metadata/{id} | Get automation metadata


<a name="automationCreatePost"></a>
# **automationCreatePost**
> AutomationResp automationCreatePost(body)

Create a new automation

Add a new automatic operation. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AutomationApi();

var body = new QuatrixApi.AutomationCreateReq(); // AutomationCreateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.automationCreatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AutomationCreateReq**](AutomationCreateReq.md)|  | 

### Return type

[**AutomationResp**](AutomationResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="automationDeletePost"></a>
# **automationDeletePost**
> AutomationDeleteResp automationDeletePost(body)

Delete automations

Delete a rule set for automatic operations. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AutomationApi();

var body = new QuatrixApi.IdsReq(); // IdsReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.automationDeletePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IdsReq**](IdsReq.md)|  | 

### Return type

[**AutomationDeleteResp**](AutomationDeleteResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="automationEditPost"></a>
# **automationEditPost**
> [AutomationResp] automationEditPost(body)

Edit an existing automation

Update an existing rule for a specified automatic operation. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AutomationApi();

var body = new QuatrixApi.AutomationEditReq(); // AutomationEditReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.automationEditPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AutomationEditReq**](AutomationEditReq.md)|  | 

### Return type

[**[AutomationResp]**](AutomationResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="automationGet"></a>
# **automationGet**
> [AutomationResp] automationGet()

List all automations

Retrieve a list of all automations of the user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AutomationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.automationGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[AutomationResp]**](AutomationResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="automationMetadataIdGet"></a>
# **automationMetadataIdGet**
> AutomationResp automationMetadataIdGet(id)

Get automation metadata

Get the automation metadata by the specified automation ID. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AutomationApi();

var id = "id_example"; // String | automation ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.automationMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| automation ID | 

### Return type

[**AutomationResp**](AutomationResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

