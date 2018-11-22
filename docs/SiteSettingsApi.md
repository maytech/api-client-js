# QuatrixApi.SiteSettingsApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**settingsAuthMethodsGet**](SiteSettingsApi.md#settingsAuthMethodsGet) | **GET** /settings/auth-methods | Get account auth-methods settings
[**settingsGet**](SiteSettingsApi.md#settingsGet) | **GET** /settings | Get site settings
[**settingsSetPost**](SiteSettingsApi.md#settingsSetPost) | **POST** /settings/set | Set site settings
[**settingsUploadLogoLinkGet**](SiteSettingsApi.md#settingsUploadLogoLinkGet) | **GET** /settings/upload-logo-link | Get logo upload link


<a name="settingsAuthMethodsGet"></a>
# **settingsAuthMethodsGet**
> [SettingsAuthMethodsRespItems] settingsAuthMethodsGet()

Get account auth-methods settings

Get account auth-methods settings 

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

[**[SettingsAuthMethodsRespItems]**](SettingsAuthMethodsRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="settingsGet"></a>
# **settingsGet**
> SettingsResp settingsGet()

Get site settings

Get site settings 

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

Set site settings 

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

Get logo upload link

Get account logo upload link 

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

