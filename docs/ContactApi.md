# QuatrixApi.ContactApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactCreatePost**](ContactApi.md#contactCreatePost) | **POST** /contact/create | Create a new contact
[**contactDeletePost**](ContactApi.md#contactDeletePost) | **POST** /contact/delete | Delete a contact
[**contactEditIdPost**](ContactApi.md#contactEditIdPost) | **POST** /contact/edit/{id} | Edit contact metadata
[**contactGet**](ContactApi.md#contactGet) | **GET** /contact | List user contacts
[**contactGroupGet**](ContactApi.md#contactGroupGet) | **GET** /contact/group | List available contact groups.
[**contactMetadataIdGet**](ContactApi.md#contactMetadataIdGet) | **GET** /contact/metadata/{id} | Get contact metadata
[**contactPgpKeyIdGet**](ContactApi.md#contactPgpKeyIdGet) | **GET** /contact/pgp-key/{id} | Get contact&#39;s PGP key
[**contactUpgradeIdGet**](ContactApi.md#contactUpgradeIdGet) | **GET** /contact/upgrade/{id} | Upgrade a contact


<a name="contactCreatePost"></a>
# **contactCreatePost**
> ContactResp contactCreatePost(body)

Create a new contact

Add a new contact to the account. The contact will be assigned a unique ID that can be used to look up the contact inside of Quatrix later. 

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
> [Object] contactDeletePost(body)

Delete a contact

Delete an existing contact from the account. 

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

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactEditIdPost"></a>
# **contactEditIdPost**
> ContactResp contactEditIdPost(id, opts)

Edit contact metadata

Use to edit the existing contact details. 

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

Retrieve the list of contacts (personal and site) available in the current account. 

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
> [Object] contactGroupGet()

List available contact groups.

Get a list of available contact groups. 

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

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactMetadataIdGet"></a>
# **contactMetadataIdGet**
> ContactResp contactMetadataIdGet(id)

Get contact metadata

Retrieve contact details containing the ID, name, email, status, time it was created, PGP key details, assigned group and permissions. 

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

Get contact&#39;s PGP key

Use to retrieve PGP key generated by the contact. 

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

Upgrade a contact

Convert an existing contact to the user. 

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

