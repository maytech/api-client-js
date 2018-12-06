# QuatrixApi.BillingApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billingUpgradePost**](BillingApi.md#billingUpgradePost) | **POST** /billing/upgrade | Upgrade


<a name="billingUpgradePost"></a>
# **billingUpgradePost**
> BillingUpgradeResp billingUpgradePost(body)

Upgrade

Upgrade 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.BillingApi();

var body = new QuatrixApi.BillingUpgradeReq(); // BillingUpgradeReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.billingUpgradePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingUpgradeReq**](BillingUpgradeReq.md)|  | 

### Return type

[**BillingUpgradeResp**](BillingUpgradeResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

