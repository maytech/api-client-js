# QuatrixApi.SSHKeyApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sshKeyCreatePost**](SSHKeyApi.md#sshKeyCreatePost) | **POST** /ssh-key/create | Create a new SSH key
[**sshKeyDeletePost**](SSHKeyApi.md#sshKeyDeletePost) | **POST** /ssh-key/delete | Delete SSH key
[**sshKeyEditPost**](SSHKeyApi.md#sshKeyEditPost) | **POST** /ssh-key/edit | Edit SSH key metadata
[**sshKeyGet**](SSHKeyApi.md#sshKeyGet) | **GET** /ssh-key/ | List all available SSH keys
[**sshKeyIdGet**](SSHKeyApi.md#sshKeyIdGet) | **GET** /ssh-key/{id} | List available SSH keys by the given user ID.
[**sshKeyMetadataIdGet**](SSHKeyApi.md#sshKeyMetadataIdGet) | **GET** /ssh-key/metadata/{id} | Get SSH key metadata


<a name="sshKeyCreatePost"></a>
# **sshKeyCreatePost**
> SshKeyResp sshKeyCreatePost(body)

Create a new SSH key

Generate a new SSH key. 

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

<a name="sshKeyDeletePost"></a>
# **sshKeyDeletePost**
> IdResp sshKeyDeletePost(body)

Delete SSH key

Remove the key specified by SSH key ID. 

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

Edit SSH key metadata

Update the metadata of SSH key. 

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

List all available SSH keys

Get SSH keys of all available users that the current logged-in user can manage. 

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

<a name="sshKeyIdGet"></a>
# **sshKeyIdGet**
> [SshKeyResp] sshKeyIdGet(id)

List available SSH keys by the given user ID.

Get user&#39;s SSH keys by given user ID. 

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

var id = "id_example"; // String | SSH key ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sshKeyIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| SSH key ID | 

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

Get SSH key metadata

Retrieve the metadata of SSH key by the given ID. 

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

var id = "id_example"; // String | SSH key ID


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
 **id** | [**String**](.md)| SSH key ID | 

### Return type

[**SshKeyResp**](SshKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

