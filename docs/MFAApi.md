# QuatrixApi.MFAApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profileRemoveMfaPost**](MFAApi.md#profileRemoveMfaPost) | **POST** /profile/remove-mfa | Disable MFA for the logged-in user
[**profileSetMfaPost**](MFAApi.md#profileSetMfaPost) | **POST** /profile/set-mfa | Enable MFA for the logged-in user
[**sessionLoginPost**](MFAApi.md#sessionLoginPost) | **POST** /session/login | Log in to the account using MFA
[**userRemoveMfaPost**](MFAApi.md#userRemoveMfaPost) | **POST** /user/remove-mfa | Disable MFA for users
[**userResetMfaPost**](MFAApi.md#userResetMfaPost) | **POST** /user/reset-mfa | Update existing MFA settings for users
[**userSetMfaPost**](MFAApi.md#userSetMfaPost) | **POST** /user/set-mfa | Enable MFA for users


<a name="profileRemoveMfaPost"></a>
# **profileRemoveMfaPost**
> ProfileRemoveMfaResp profileRemoveMfaPost(body)

Disable MFA for the logged-in user

Trun off MFA (multifactor authentication) for the user who requested 2FA deactivation while editing their profile. This operation is possible if it was not forced by the administrator. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.MFAApi();

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

Enable MFA for the logged-in user

Turn on MFA (multifactor authentication) for the user who requested 2FA activation while editing their profile. MFA adds an additional secure step on the way to log in to the account by using one more authentication method beyond the email and password. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.MFAApi();

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

var apiInstance = new QuatrixApi.MFAApi();

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

<a name="userRemoveMfaPost"></a>
# **userRemoveMfaPost**
> ProfileRemoveMfaResp userRemoveMfaPost(body)

Disable MFA for users

Deactivate MFA for a user by specified user ID. If 2FA is forced for the account, the user won’t be able to deactivate it using this API call. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.MFAApi();

var body = new QuatrixApi.UserRemoveMfaReq(); // UserRemoveMfaReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userRemoveMfaPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserRemoveMfaReq**](UserRemoveMfaReq.md)|  | 

### Return type

[**ProfileRemoveMfaResp**](ProfileRemoveMfaResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userResetMfaPost"></a>
# **userResetMfaPost**
> ProfileRemoveMfaResp userResetMfaPost(body)

Update existing MFA settings for users

Remove already set MFA code values, the MFA will be left activated. All logged-in sessions of users will be stopped. On the next login the user should set MFA again. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.MFAApi();

var body = new QuatrixApi.UserResetMfaReq(); // UserResetMfaReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userResetMfaPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserResetMfaReq**](UserResetMfaReq.md)|  | 

### Return type

[**ProfileRemoveMfaResp**](ProfileRemoveMfaResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userSetMfaPost"></a>
# **userSetMfaPost**
> ProfileRemoveMfaResp userSetMfaPost(body)

Enable MFA for users

Activate MFA for a user by specified user ID. If auth type is 2FA, the user will be forced to use MFA. All logged-in sessions of users will be stopped. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.MFAApi();

var body = new QuatrixApi.UserSetMfaReq(); // UserSetMfaReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userSetMfaPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserSetMfaReq**](UserSetMfaReq.md)|  | 

### Return type

[**ProfileRemoveMfaResp**](ProfileRemoveMfaResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

