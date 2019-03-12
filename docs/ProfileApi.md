# QuatrixApi.ProfileApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profile2faGenerateGet**](ProfileApi.md#profile2faGenerateGet) | **GET** /profile/2fa/generate | Generate a new 2FA code
[**profileGet**](ProfileApi.md#profileGet) | **GET** /profile | Get profile metadata
[**profileInfoGet**](ProfileApi.md#profileInfoGet) | **GET** /profile/info | Retrieve additional profile info
[**profileRemoveMfaPost**](ProfileApi.md#profileRemoveMfaPost) | **POST** /profile/remove-mfa | Disable MFA for the logged-in user
[**profileSetMfaPost**](ProfileApi.md#profileSetMfaPost) | **POST** /profile/set-mfa | Enable MFA for the logged-in user
[**profileSetPasswordPost**](ProfileApi.md#profileSetPasswordPost) | **POST** /profile/set-password | Change profile password
[**profileSetPost**](ProfileApi.md#profileSetPost) | **POST** /profile/set | Update profile metadata


<a name="profile2faGenerateGet"></a>
# **profile2faGenerateGet**
> profile2faGenerateGet()

Generate a new 2FA code

Generate a new verification code for 2FA with QR code. 

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

Get profile metadata

Retrieve profile information of the current user. 

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

Retrieve additional profile info

Get additional details about the account e.g. number of used and available user licenses. 

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

Change the account password for the logged-in user. 

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

Edit profile information of the current user including name, email, language and message signature. 

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

