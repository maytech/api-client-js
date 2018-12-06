# QuatrixApi.AccountApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountInfoGet**](AccountApi.md#accountInfoGet) | **GET** /account/info | Account info
[**accountListGet**](AccountApi.md#accountListGet) | **GET** /account/list | List user accounts
[**accountLogoGet**](AccountApi.md#accountLogoGet) | **GET** /account/logo | Account logo
[**accountMetadataGet**](AccountApi.md#accountMetadataGet) | **GET** /account/metadata | Account metadata
[**accountRolesGet**](AccountApi.md#accountRolesGet) | **GET** /account/roles | Account roles


<a name="accountInfoGet"></a>
# **accountInfoGet**
> AccountInfoResp accountInfoGet()

Account info

Account usage info 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountInfoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AccountInfoResp**](AccountInfoResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountListGet"></a>
# **accountListGet**
> [AccountListRespItems] accountListGet()

List user accounts

List user accounts 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountListGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[AccountListRespItems]**](AccountListRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountLogoGet"></a>
# **accountLogoGet**
> accountLogoGet()

Account logo

Returns account logo body 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountLogoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountMetadataGet"></a>
# **accountMetadataGet**
> AccountMetadataResp accountMetadataGet()

Account metadata

Get Account Public Metadata 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountMetadataGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AccountMetadataResp**](AccountMetadataResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountRolesGet"></a>
# **accountRolesGet**
> [AccountRolesRespItems] accountRolesGet()

Account roles

List account roles 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountRolesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[AccountRolesRespItems]**](AccountRolesRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

