# QuatrixApi.AuthApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sessionKeepaliveGet**](AuthApi.md#sessionKeepaliveGet) | **GET** /session/keepalive | Keepalive
[**sessionLoginGet**](AuthApi.md#sessionLoginGet) | **GET** /session/login | Login and get session ID
[**sessionLoginPost**](AuthApi.md#sessionLoginPost) | **POST** /session/login | MFA
[**sessionLogoutGet**](AuthApi.md#sessionLogoutGet) | **GET** /session/logout | Logout
[**sessionUnblockCaptchaPost**](AuthApi.md#sessionUnblockCaptchaPost) | **POST** /session/unblock-captcha | Unblock captcha


<a name="sessionKeepaliveGet"></a>
# **sessionKeepaliveGet**
> sessionKeepaliveGet()

Keepalive

Keep alive current session 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sessionKeepaliveGet(callback);
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

<a name="sessionLoginGet"></a>
# **sessionLoginGet**
> SessionLoginResp sessionLoginGet()

Login and get session ID

Basic Authentication with the Authorization header The Authorization header is constructed as follows   1. The user email and password are combined with a single colon. (:)   2. The resulting string is encoded using a variant of Base64.   3. The authorization method and a space is then prepended to the encoded string, separated with a space (e.g. \&quot;Basic \&quot;).   For example, &#39;test@example.com&#39; as the user email and &#39;qwerty&#39; as the password, then the field&#39;s value is the   base64-encoding of test@example.com:qwerty, or dGVzdEBleGFtcGxlLmNvbTpxd2VydHk&#x3D;.   Then the Authorization header will appear as   &#39;Authorization: Basic dGVzdEBleGFtcGxlLmNvbTpxd2VydHk&#x3D;&#39; 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new QuatrixApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sessionLoginGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SessionLoginResp**](SessionLoginResp.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sessionLoginPost"></a>
# **sessionLoginPost**
> SessionLoginResp sessionLoginPost(body)

MFA

Login with MFA 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AuthApi();

var body = new QuatrixApi.SessionLoginPostResp(); // SessionLoginPostResp | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sessionLoginPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SessionLoginPostResp**](SessionLoginPostResp.md)|  | 

### Return type

[**SessionLoginResp**](SessionLoginResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sessionLogoutGet"></a>
# **sessionLogoutGet**
> sessionLogoutGet()

Logout

Logout of current session 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sessionLogoutGet(callback);
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

<a name="sessionUnblockCaptchaPost"></a>
# **sessionUnblockCaptchaPost**
> SessionUnblockCaptchaResp sessionUnblockCaptchaPost(body)

Unblock captcha

Unblock captcha 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.AuthApi();

var body = new QuatrixApi.UnblockCaptchaReq(); // UnblockCaptchaReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sessionUnblockCaptchaPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UnblockCaptchaReq**](UnblockCaptchaReq.md)|  | 

### Return type

[**SessionUnblockCaptchaResp**](SessionUnblockCaptchaResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

