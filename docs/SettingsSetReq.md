# QuatrixApi.SettingsSetReq

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** |  | [optional] 
**bcc** | **[String]** |  | [optional] 
**billingEmails** | **[String]** |  | [optional] 
**emailFooter** | **String** |  | [optional] 
**language** | **String** |  | [optional] 
**pgpEnabled** | **Boolean** |  | [optional] 
**shareTypes** | [**SettingssetShareTypes**](SettingssetShareTypes.md) |  | [optional] 
**authMethods** | **[String]** |  | [optional] 
**ipWhitelist** | **[String]** | Available formats 1.1.1.1, 1.1.1.1\\32, 1.1.1.1-255 | [optional] 


<a name="[AuthMethodsEnum]"></a>
## Enum: [AuthMethodsEnum]


* `IP` (value: `"IP"`)

* `2FA` (value: `"2FA"`)




