# QuatrixApi.SSHKeyApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sshKeyCreatePost**](SSHKeyApi.md#sshKeyCreatePost) | **POST** /ssh-key/create | Create SSH key
[**sshKeyDeleteIdGet**](SSHKeyApi.md#sshKeyDeleteIdGet) | **GET** /ssh-key/delete/{id} | Delete SSH key
[**sshKeyDeletePost**](SSHKeyApi.md#sshKeyDeletePost) | **POST** /ssh-key/delete | Delete SSH key
[**sshKeyEditPost**](SSHKeyApi.md#sshKeyEditPost) | **POST** /ssh-key/edit | Edit SSH key
[**sshKeyGet**](SSHKeyApi.md#sshKeyGet) | **GET** /ssh-key | List ssh keys
[**sshKeyMetadataIdGet**](SSHKeyApi.md#sshKeyMetadataIdGet) | **GET** /ssh-key/metadata/{id} | SSH key metadata


<a name="sshKeyCreatePost"></a>
# **sshKeyCreatePost**
> SshKeyResp sshKeyCreatePost(body)

Create SSH key

Create new SSH key 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SSHKeyApi();

var body = new QuatrixApi.SshKeyCreateReq(); // SshKeyCreateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sshKeyCreatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SshKeyCreateReq**](SshKeyCreateReq.md)|  | 

### Return type

[**SshKeyResp**](SshKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sshKeyDeleteIdGet"></a>
# **sshKeyDeleteIdGet**
> IdResp sshKeyDeleteIdGet(id)

Delete SSH key

Delete SSH key 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SSHKeyApi();

var id = "id_example"; // String | ID of a SSH key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sshKeyDeleteIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a SSH key | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sshKeyDeletePost"></a>
# **sshKeyDeletePost**
> IdResp sshKeyDeletePost(body)

Delete SSH key

Delete SSH key 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SSHKeyApi();

var body = new QuatrixApi.SshKeyDeleteReq(); // SshKeyDeleteReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sshKeyDeletePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SshKeyDeleteReq**](SshKeyDeleteReq.md)|  | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sshKeyEditPost"></a>
# **sshKeyEditPost**
> SshKeyResp sshKeyEditPost(body)

Edit SSH key

Edit SSH key 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SSHKeyApi();

var body = new QuatrixApi.SshKeyEditReq(); // SshKeyEditReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sshKeyEditPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SshKeyEditReq**](SshKeyEditReq.md)|  | 

### Return type

[**SshKeyResp**](SshKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sshKeyGet"></a>
# **sshKeyGet**
> [SshKeyResp] sshKeyGet()

List ssh keys

List ssh keys 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SSHKeyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sshKeyGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[SshKeyResp]**](SshKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sshKeyMetadataIdGet"></a>
# **sshKeyMetadataIdGet**
> SshKeyResp sshKeyMetadataIdGet(id)

SSH key metadata

Get SSH key metadata 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SSHKeyApi();

var id = "id_example"; // String | ID of a SSH key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sshKeyMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a SSH key | 

### Return type

[**SshKeyResp**](SshKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

