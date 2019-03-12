# QuatrixApi.SiteSettingsApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**settingsAuthMethodsGet**](SiteSettingsApi.md#settingsAuthMethodsGet) | **GET** /settings/auth-methods | Get available authentication methods
[**settingsGet**](SiteSettingsApi.md#settingsGet) | **GET** /settings | Get site settings
[**settingsSetPost**](SiteSettingsApi.md#settingsSetPost) | **POST** /settings/set | Set site settings
[**settingsUploadLogoLinkGet**](SiteSettingsApi.md#settingsUploadLogoLinkGet) | **GET** /settings/upload-logo-link | Get a new logo upload link


<a name="settingsAuthMethodsGet"></a>
# **settingsAuthMethodsGet**
> [Object] settingsAuthMethodsGet()

Get available authentication methods

Get available authentication methods that can be set for the account. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SiteSettingsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsAuthMethodsGet(callback);
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

<a name="settingsGet"></a>
# **settingsGet**
> SettingsResp settingsGet()

Get site settings

Retrieve information about the service settings adjusted for the account e.g. language, banner text, email footer, billing emails, PGP, permitted share types. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SiteSettingsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SettingsResp**](SettingsResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="settingsSetPost"></a>
# **settingsSetPost**
> SettingsResp settingsSetPost(body)

Set site settings

Update service settings for the account e.g. enable or disable PGP, force 2FA for all users of the account. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SiteSettingsApi();

var body = new QuatrixApi.SettingsSetReq(); // SettingsSetReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsSetPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsSetReq**](SettingsSetReq.md)|  | 

### Return type

[**SettingsResp**](SettingsResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="settingsUploadLogoLinkGet"></a>
# **settingsUploadLogoLinkGet**
> SettingsUploadLogoLinkResp settingsUploadLogoLinkGet()

Get a new logo upload link

Get a unique key for uploading a new logo 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.SiteSettingsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsUploadLogoLinkGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SettingsUploadLogoLinkResp**](SettingsUploadLogoLinkResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

