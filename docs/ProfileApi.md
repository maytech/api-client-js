# QuatrixApi.ProfileApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profile2faGenerateGet**](ProfileApi.md#profile2faGenerateGet) | **GET** /profile/2fa/generate | Generate new 2fa code
[**profileGet**](ProfileApi.md#profileGet) | **GET** /profile | Profile metadata
[**profileInfoGet**](ProfileApi.md#profileInfoGet) | **GET** /profile/info | Additional profile info
[**profileRemoveMfaPost**](ProfileApi.md#profileRemoveMfaPost) | **POST** /profile/remove-mfa | Remove MFA for account
[**profileSetMfaPost**](ProfileApi.md#profileSetMfaPost) | **POST** /profile/set-mfa | Set MFA enabled for account
[**profileSetPasswordPost**](ProfileApi.md#profileSetPasswordPost) | **POST** /profile/set-password | Change profile password
[**profileSetPost**](ProfileApi.md#profileSetPost) | **POST** /profile/set | Update profile metadata


<a name="profile2faGenerateGet"></a>
# **profile2faGenerateGet**
> profile2faGenerateGet()

Generate new 2fa code

Generate new 2fa code QR code 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProfileApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.profile2faGenerateGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="profileGet"></a>
# **profileGet**
> ProfileResp profileGet()

Profile metadata

Get profile metadata 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProfileApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.profileGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProfileResp**](ProfileResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="profileInfoGet"></a>
# **profileInfoGet**
> ProfileInfoResp profileInfoGet()

Additional profile info

Get additional profile info 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProfileApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.profileInfoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProfileInfoResp**](ProfileInfoResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="profileRemoveMfaPost"></a>
# **profileRemoveMfaPost**
> ProfileRemoveMfaResp profileRemoveMfaPost(body)

Remove MFA for account

Remove MFA for account if it was not forced by admin 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProfileApi();

var body = new QuatrixApi.ProfileRemoveMfaReq(); // ProfileRemoveMfaReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.profileRemoveMfaPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProfileRemoveMfaReq**](ProfileRemoveMfaReq.md)|  | 

### Return type

[**ProfileRemoveMfaResp**](ProfileRemoveMfaResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="profileSetMfaPost"></a>
# **profileSetMfaPost**
> ProfileSetMfaResp profileSetMfaPost(body)

Set MFA enabled for account

Set multi factor autorization method (MFA) enabled for account 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProfileApi();

var body = new QuatrixApi.ProfileSetMfaReq(); // ProfileSetMfaReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.profileSetMfaPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProfileSetMfaReq**](ProfileSetMfaReq.md)|  | 

### Return type

[**ProfileSetMfaResp**](ProfileSetMfaResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="profileSetPasswordPost"></a>
# **profileSetPasswordPost**
> ProfileSetPasswordResp profileSetPasswordPost(body)

Change profile password

Change profile password 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProfileApi();

var body = new QuatrixApi.ProfileSetPasswordReq(); // ProfileSetPasswordReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.profileSetPasswordPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProfileSetPasswordReq**](ProfileSetPasswordReq.md)|  | 

### Return type

[**ProfileSetPasswordResp**](ProfileSetPasswordResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="profileSetPost"></a>
# **profileSetPost**
> ProfileSetResp profileSetPost(opts)

Update profile metadata

Update profile metadata 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProfileApi();

var opts = { 
  'body': new QuatrixApi.ProfileSetReq() // ProfileSetReq | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.profileSetPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProfileSetReq**](ProfileSetReq.md)|  | [optional] 

### Return type

[**ProfileSetResp**](ProfileSetResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

