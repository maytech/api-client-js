# QuatrixApi.AccountApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountInfoGet**](AccountApi.md#accountInfoGet) | **GET** /account/info | Get account usage info
[**accountListGet**](AccountApi.md#accountListGet) | **GET** /account/list | List user accounts
[**accountLogoGet**](AccountApi.md#accountLogoGet) | **GET** /account/logo | Get account logo
[**accountMetadataGet**](AccountApi.md#accountMetadataGet) | **GET** /account/metadata | Get account metadata
[**accountRolesGet**](AccountApi.md#accountRolesGet) | **GET** /account/roles | Call users of the account


<a name="accountInfoGet"></a>
# **accountInfoGet**
> AccountInfoResp accountInfoGet()

Get account usage info

Retrieve details of the account e.g. service settings, virus scan details, available and used storage, set automations, etc. 

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
> [Object] accountListGet()

List user accounts

Get the list with user accounts displaying the ID, host name, plan and status. 

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

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountLogoGet"></a>
# **accountLogoGet**
> accountLogoGet()

Get account logo

Retrieve the logo set for the current account. 

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

Get account metadata

Retrieve general settings for the account e.g. status of the user, identity providers, language, set logo and banner text. 

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
> [Object] accountRolesGet()

Call users of the account

Get the list of the current account users with their IDs, names and emails 

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

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

