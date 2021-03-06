# QuatrixApi.PasswordResetApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resetPasswordMetadataIdGet**](PasswordResetApi.md#resetPasswordMetadataIdGet) | **GET** /reset-password/metadata/{id} | Get password reset request metadata
[**resetPasswordRequestPost**](PasswordResetApi.md#resetPasswordRequestPost) | **POST** /reset-password/request | Request password reset
[**resetPasswordResetIdPost**](PasswordResetApi.md#resetPasswordResetIdPost) | **POST** /reset-password/reset/{id} | Reset password


<a name="resetPasswordMetadataIdGet"></a>
# **resetPasswordMetadataIdGet**
> ResetPasswordMetadataResp resetPasswordMetadataIdGet(id)

Get password reset request metadata

Retrieve information about the password reset request. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.PasswordResetApi();

var id = "id_example"; // String | ID of the password reset request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resetPasswordMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of the password reset request | 

### Return type

[**ResetPasswordMetadataResp**](ResetPasswordMetadataResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetPasswordRequestPost"></a>
# **resetPasswordRequestPost**
> ResetPasswordRequestResp resetPasswordRequestPost(body)

Request password reset

Send an email with the request to reset password (including the link) to the user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.PasswordResetApi();

var body = new QuatrixApi.ResetPasswordRequestReq(); // ResetPasswordRequestReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resetPasswordRequestPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResetPasswordRequestReq**](ResetPasswordRequestReq.md)|  | 

### Return type

[**ResetPasswordRequestResp**](ResetPasswordRequestResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetPasswordResetIdPost"></a>
# **resetPasswordResetIdPost**
> IdResp resetPasswordResetIdPost(id, body)

Reset password

Change the password based on the existing password reset request. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');

var apiInstance = new QuatrixApi.PasswordResetApi();

var id = "id_example"; // String | ID of a password reset request

var body = new QuatrixApi.ResetPasswordResetReq(); // ResetPasswordResetReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resetPasswordResetIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a password reset request | 
 **body** | [**ResetPasswordResetReq**](ResetPasswordResetReq.md)|  | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

