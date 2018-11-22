# QuatrixApi.UserApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userCreatePost**](UserApi.md#userCreatePost) | **POST** /user/create | Create user
[**userDeletePost**](UserApi.md#userDeletePost) | **POST** /user/delete | Delete users
[**userEditPost**](UserApi.md#userEditPost) | **POST** /user/edit | User metadata
[**userGet**](UserApi.md#userGet) | **GET** /user | List users
[**userGroupGet**](UserApi.md#userGroupGet) | **GET** /user/group | All user groups
[**userMetadataIdGet**](UserApi.md#userMetadataIdGet) | **GET** /user/metadata/{id} | User metadata
[**userPgpKeyIdGet**](UserApi.md#userPgpKeyIdGet) | **GET** /user/pgp-key/{id} | User PGP key
[**userRemoveMfaPost**](UserApi.md#userRemoveMfaPost) | **POST** /user/remove-mfa | Remove MFA for user
[**userSetMfaPost**](UserApi.md#userSetMfaPost) | **POST** /user/set-mfa | Set MFA enabled for user
[**userSignupPost**](UserApi.md#userSignupPost) | **POST** /user/signup | Signup existing user


<a name="userCreatePost"></a>
# **userCreatePost**
> UserResp userCreatePost(body)

Create user

Create new user 

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

Delete users 

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

User metadata

Edit user 

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

List users 

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

All user groups

List all user groups 

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

User metadata

Get user metadata 

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

User PGP key

Get user PGP key 

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

Remove MFA for user

Remove MFA for user 

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

<a name="userSetMfaPost"></a>
# **userSetMfaPost**
> ProfileRemoveMfaResp userSetMfaPost(body)

Set MFA enabled for user

Set multi factor autorization method (MFA) enabled for user 

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

Signup existing user

Signup existing user 

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
 - **Accept**: raw

