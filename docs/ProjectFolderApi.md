# QuatrixApi.ProjectFolderApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectFolderAddUsersIdPost**](ProjectFolderApi.md#projectFolderAddUsersIdPost) | **POST** /project-folder/add-users/{id} | Add users to the project folder
[**projectFolderCreatePost**](ProjectFolderApi.md#projectFolderCreatePost) | **POST** /project-folder/create | Create a project folder
[**projectFolderDeleteIdGet**](ProjectFolderApi.md#projectFolderDeleteIdGet) | **GET** /project-folder/delete/{id} | Convert a project folder to a folder
[**projectFolderDeleteUsersPost**](ProjectFolderApi.md#projectFolderDeleteUsersPost) | **POST** /project-folder/delete-users/ | Remove project folder users
[**projectFolderEditUsersIdPost**](ProjectFolderApi.md#projectFolderEditUsersIdPost) | **POST** /project-folder/edit-users/{id} | Update users’ permissions of the project folder
[**projectFolderGet**](ProjectFolderApi.md#projectFolderGet) | **GET** /project-folder | List available project folders for a logged-in user
[**projectFolderMetadataIdGet**](ProjectFolderApi.md#projectFolderMetadataIdGet) | **GET** /project-folder/metadata/{id} | Get project folder metadata
[**projectFolderProjectUsersPost**](ProjectFolderApi.md#projectFolderProjectUsersPost) | **POST** /project-folder/project-users | List all project folders for given users
[**projectFolderSetUsersPost**](ProjectFolderApi.md#projectFolderSetUsersPost) | **POST** /project-folder/set-users | Add users to project folders.
[**projectFolderUsersIdGet**](ProjectFolderApi.md#projectFolderUsersIdGet) | **GET** /project-folder/users/{id} | List users of the project folder


<a name="projectFolderAddUsersIdPost"></a>
# **projectFolderAddUsersIdPost**
> [UserPermissionResp] projectFolderAddUsersIdPost(id, body)

Add users to the project folder

Add users to the specified project folder. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var id = "id_example"; // String | 

var body = new QuatrixApi.PfaddUsersReq(); // PfaddUsersReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderAddUsersIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **body** | [**PfaddUsersReq**](PfaddUsersReq.md)|  | 

### Return type

[**[UserPermissionResp]**](UserPermissionResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFolderCreatePost"></a>
# **projectFolderCreatePost**
> PfCreateResp projectFolderCreatePost(body)

Create a project folder

Create a new project folder for a user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var body = new QuatrixApi.PfcreateReq(); // PfcreateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderCreatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PfcreateReq**](PfcreateReq.md)|  | 

### Return type

[**PfCreateResp**](PfCreateResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFolderDeleteIdGet"></a>
# **projectFolderDeleteIdGet**
> IdResp projectFolderDeleteIdGet(id)

Convert a project folder to a folder

Convert the project folder to regular folder keeping the same name and location. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderDeleteIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFolderDeleteUsersPost"></a>
# **projectFolderDeleteUsersPost**
> [Object] projectFolderDeleteUsersPost(body)

Remove project folder users

Delete users of the given project folder. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var body = new QuatrixApi.PfdeleteUsersReq(); // PfdeleteUsersReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderDeleteUsersPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PfdeleteUsersReq**](PfdeleteUsersReq.md)|  | 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFolderEditUsersIdPost"></a>
# **projectFolderEditUsersIdPost**
> [UserPermissionResp] projectFolderEditUsersIdPost(id, body)

Update users’ permissions of the project folder

Edit users’ permissions of the given project folder. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var id = "id_example"; // String | 

var body = new QuatrixApi.PfeditUsersReq(); // PfeditUsersReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderEditUsersIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **body** | [**PfeditUsersReq**](PfeditUsersReq.md)|  | 

### Return type

[**[UserPermissionResp]**](UserPermissionResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFolderGet"></a>
# **projectFolderGet**
> [Object] projectFolderGet()

List available project folders for a logged-in user

Retrieve a list of all project folders of a current logged-in user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFolderMetadataIdGet"></a>
# **projectFolderMetadataIdGet**
> PfMetadataResp projectFolderMetadataIdGet(id)

Get project folder metadata

Retrieve the metadata of the project folder. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var id = "id_example"; // String | project folder ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| project folder ID | 

### Return type

[**PfMetadataResp**](PfMetadataResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFolderProjectUsersPost"></a>
# **projectFolderProjectUsersPost**
> [Object] projectFolderProjectUsersPost(body)

List all project folders for given users

Get a list of all project folders for given users. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var body = new QuatrixApi.PfUsersListReq(); // PfUsersListReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderProjectUsersPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PfUsersListReq**](PfUsersListReq.md)|  | 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFolderSetUsersPost"></a>
# **projectFolderSetUsersPost**
> [Object] projectFolderSetUsersPost(body)

Add users to project folders.

Add users to specified project folders. If the users exist in the given project folder, their permissions will be updated based on given parameters. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var body = new QuatrixApi.PfSetUsersReq(); // PfSetUsersReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderSetUsersPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PfSetUsersReq**](PfSetUsersReq.md)|  | 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFolderUsersIdGet"></a>
# **projectFolderUsersIdGet**
> [UserPermissionResp] projectFolderUsersIdGet(id)

List users of the project folder

Retrieve a list of users by given project folder ID. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ProjectFolderApi();

var id = "id_example"; // String | project folder ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFolderUsersIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| project folder ID | 

### Return type

[**[UserPermissionResp]**](UserPermissionResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

