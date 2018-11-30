# QuatrixApi.ContactApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactCreatePost**](ContactApi.md#contactCreatePost) | **POST** /contact/create | Create contact
[**contactDeletePost**](ContactApi.md#contactDeletePost) | **POST** /contact/delete | Delete contact
[**contactEditIdPost**](ContactApi.md#contactEditIdPost) | **POST** /contact/edit/{id} | Contact metadata
[**contactGet**](ContactApi.md#contactGet) | **GET** /contact | List user contacts
[**contactGroupGet**](ContactApi.md#contactGroupGet) | **GET** /contact/group | All contact groups
[**contactMetadataIdGet**](ContactApi.md#contactMetadataIdGet) | **GET** /contact/metadata/{id} | Contact metadata
[**contactPgpKeyIdGet**](ContactApi.md#contactPgpKeyIdGet) | **GET** /contact/pgp-key/{id} | Contact PGP key
[**contactUpgradeIdGet**](ContactApi.md#contactUpgradeIdGet) | **GET** /contact/upgrade/{id} | Upgrade contact


<a name="contactCreatePost"></a>
# **contactCreatePost**
> ContactResp contactCreatePost(body)

Create contact

Create new contact 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ContactApi();

var body = new QuatrixApi.ContactCreateReq(); // ContactCreateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactCreatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContactCreateReq**](ContactCreateReq.md)|  | 

### Return type

[**ContactResp**](ContactResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactDeletePost"></a>
# **contactDeletePost**
> [ContactDeleteRespItems] contactDeletePost(body)

Delete contact

Delete contact 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ContactApi();

var body = new QuatrixApi.IdsReq(); // IdsReq | IDs of a contacts


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactDeletePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IdsReq**](IdsReq.md)| IDs of a contacts | 

### Return type

[**[ContactDeleteRespItems]**](ContactDeleteRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactEditIdPost"></a>
# **contactEditIdPost**
> ContactResp contactEditIdPost(id, opts)

Contact metadata

Get contact metadata 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ContactApi();

var id = "id_example"; // String | ID of a contact

var opts = { 
  'body': new QuatrixApi.ContactEditResp() // ContactEditResp | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactEditIdPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a contact | 
 **body** | [**ContactEditResp**](ContactEditResp.md)|  | [optional] 

### Return type

[**ContactResp**](ContactResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactGet"></a>
# **contactGet**
> [ContactResp] contactGet()

List user contacts

List user contacts 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ContactApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ContactResp]**](ContactResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactGroupGet"></a>
# **contactGroupGet**
> [ContactGroupRespItems] contactGroupGet()

All contact groups

List all contact groups 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ContactApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactGroupGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ContactGroupRespItems]**](ContactGroupRespItems.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactMetadataIdGet"></a>
# **contactMetadataIdGet**
> ContactResp contactMetadataIdGet(id)

Contact metadata

Get contact metadata 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ContactApi();

var id = "id_example"; // String | ID of a contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a contact | 

### Return type

[**ContactResp**](ContactResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactPgpKeyIdGet"></a>
# **contactPgpKeyIdGet**
> PgpKeyResp contactPgpKeyIdGet(id)

Contact PGP key

Get contact PGP key. Not used. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ContactApi();

var id = "id_example"; // String | ID of a contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactPgpKeyIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a contact | 

### Return type

[**PgpKeyResp**](PgpKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactUpgradeIdGet"></a>
# **contactUpgradeIdGet**
> UserResp contactUpgradeIdGet(id)

Upgrade contact

Upgrade contact to user 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.ContactApi();

var id = "id_example"; // String | ID of a contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactUpgradeIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a contact | 

### Return type

[**UserResp**](UserResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

