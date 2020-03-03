# QuatrixApi.UserApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userCreatePost**](UserApi.md#userCreatePost) | **POST** /user/create | Create a user
[**userDeletePost**](UserApi.md#userDeletePost) | **POST** /user/delete | Delete users
[**userEditPost**](UserApi.md#userEditPost) | **POST** /user/edit | Update metadata of users
[**userGet**](UserApi.md#userGet) | **GET** /user | List users
[**userGroupGet**](UserApi.md#userGroupGet) | **GET** /user/group | List all user groups
[**userMetadataIdGet**](UserApi.md#userMetadataIdGet) | **GET** /user/metadata/{id} | Get user metadata
[**userPgpKeyIdGet**](UserApi.md#userPgpKeyIdGet) | **GET** /user/pgp-key/{id} | Get user&#39;s PGP key
[**userRemoveMfaPost**](UserApi.md#userRemoveMfaPost) | **POST** /user/remove-mfa | Disable MFA for users
[**userResetMfaPost**](UserApi.md#userResetMfaPost) | **POST** /user/reset-mfa | Update existing MFA settings for users
[**userSetMfaPost**](UserApi.md#userSetMfaPost) | **POST** /user/set-mfa | Enable MFA for users
[**userSignupPost**](UserApi.md#userSignupPost) | **POST** /user/signup | Register a new user


<a name="userCreatePost"></a>
# **userCreatePost**
> UserResp userCreatePost(body)

Create a user

Add a new user to the account. The user receives an email where the password can be set. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UserApi();

var body = new QuatrixApi.UserCreateReq(); // UserCreateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userCreatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserCreateReq**](UserCreateReq.md)|  | 

### Return type

[**UserResp**](UserResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userDeletePost"></a>
# **userDeletePost**
> JobResp userDeletePost(body)

Delete users

Remove users from the account by specified user IDs. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UserApi();

var body = new QuatrixApi.UserDeleteReq(); // UserDeleteReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userDeletePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserDeleteReq**](UserDeleteReq.md)|  | 

### Return type

[**JobResp**](JobResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userEditPost"></a>
# **userEditPost**
> [UserResp] userEditPost(body)

Update metadata of users

Edit the existing users’ metadata. An email can be edited only for one user using one API call. In this case both old and new emails will be notified about the change. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UserApi();

var body = new QuatrixApi.UserEditReq(); // UserEditReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userEditPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserEditReq**](UserEditReq.md)|  | 

### Return type

[**[UserResp]**](UserResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userGet"></a>
# **userGet**
> [UserResp] userGet()

List users

Retrieve a list of users 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[UserResp]**](UserResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userGroupGet"></a>
# **userGroupGet**
> [Group] userGroupGet()

List all user groups

Retrieve a list of all user groups that can be set for users. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGroupGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Group]**](Group.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userMetadataIdGet"></a>
# **userMetadataIdGet**
> UserResp userMetadataIdGet(id)

Get user metadata

Retrieve user’s metadata by given user ID. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UserApi();

var id = "id_example"; // String | ID of a user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a user | 

### Return type

[**UserResp**](UserResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userPgpKeyIdGet"></a>
# **userPgpKeyIdGet**
> PgpKeyResp userPgpKeyIdGet(id)

Get user&#39;s PGP key

Use to retrieve PGP key generated by the user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.UserApi();

var id = "id_example"; // String | ID of a user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPgpKeyIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a user | 

### Return type

[**PgpKeyResp**](PgpKeyResp.md)

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

var apiInstance = new QuatrixApi.UserApi();

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

var apiInstance = new QuatrixApi.UserApi();

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

var apiInstance = new QuatrixApi.UserApi();

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

<a name="userSignupPost"></a>
# **userSignupPost**
> userSignupPost(body)

Register a new user

Set password for a new user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.UserApi();

var body = new QuatrixApi.UserSignupReq(); // UserSignupReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userSignupPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserSignupReq**](UserSignupReq.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

