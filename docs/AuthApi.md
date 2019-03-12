# QuatrixApi.AuthApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sessionKeepaliveGet**](AuthApi.md#sessionKeepaliveGet) | **GET** /session/keepalive | Refresh session expiration time
[**sessionLoginGet**](AuthApi.md#sessionLoginGet) | **GET** /session/login | Log in and get session ID details
[**sessionLoginPost**](AuthApi.md#sessionLoginPost) | **POST** /session/login | Log in to the account using MFA
[**sessionLogoutGet**](AuthApi.md#sessionLogoutGet) | **GET** /session/logout | Close the user&#39;s session
[**sessionUnblockCaptchaPost**](AuthApi.md#sessionUnblockCaptchaPost) | **POST** /session/unblock-captcha | Unblock the session using CAPTCHA


<a name="sessionKeepaliveGet"></a>
# **sessionKeepaliveGet**
> sessionKeepaliveGet()

Refresh session expiration time

Refresh the existing session using the ID for the session. The session will expire if there were no API actions for 15 minutes. 

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

Log in and get session ID details

Get session information for the given session ID and log in to the account.  The easiest way to authenticate is using [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).  To proceed with the authorization, you need to have Quatrix account. If you don’t have the one, you can set up a free trial account [here](https://www.maytech.net/freetrial.html#trial&#x3D;qtrx).  As the basic authentication requires the authentication of the user with the user ID and password, the Authorization header should be constructed as follows:    1. The user email and password are combined with a single colon. (:)    2. The resulting string is encoded using a variant of Base64.    3. The authorization method and a space is then prepended to the encoded string, separated with a space (e.g. \&quot;Basic \&quot;).    For example, &#39;test@example.com&#39; as the user email and &#39;qwerty&#39; as the password, then the field&#39;s value is the following:    base64-encoding of test@example.com:qwerty, or dGVzdEBleGFtcGxlLmNvbTpxd2VydHk&#x3D;.    The authorization header will appear as    &#39;Authorization: Basic dGVzdEBleGFtcGxlLmNvbTpxd2VydHk&#x3D;&#39; 

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

Log in to the account using MFA

Use to generate a session login token in scenarios in which 2FA or PIN are required. 

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

Close the user&#39;s session

Close the session for the currently logged in user. 

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

Unblock the session using CAPTCHA

Enter CAPTCHA to log in the user to the current session. 

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

