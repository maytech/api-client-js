# QuatrixApi.LanguageApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**languagesDefaultGet**](LanguageApi.md#languagesDefaultGet) | **GET** /languages/default | Default language
[**languagesGet**](LanguageApi.md#languagesGet) | **GET** /languages | List languages


<a name="languagesDefaultGet"></a>
# **languagesDefaultGet**
> LanguagesDefaultResp languagesDefaultGet()

Default language

Get default language 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.LanguageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languagesDefaultGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LanguagesDefaultResp**](LanguagesDefaultResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="languagesGet"></a>
# **languagesGet**
> [LanguagesRespItems] languagesGet()

List languages

List languages 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.LanguageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languagesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[LanguagesRespItems]**](LanguagesRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

