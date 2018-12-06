# QuatrixApi.ShareCreateReq

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folderId** | **String** |  | 
**files** | **[String]** |  | 
**contacts** | **[String]** |  | 
**subject** | **String** |  | [optional] 
**message** | **String** |  | [optional] 
**expires** | **Number** |  | [optional] 
**activates** | **Number** |  | [optional] 
**returnFiles** | **Boolean** |  | [optional] 
**pgpEncrypted** | **Boolean** |  | [optional] 
**returnPgpEncrypted** | **Boolean** |  | [optional] 
**messageSignature** | **String** |  | [optional] 
**notify** | **Boolean** |  | [optional] 
**shareType** | **String** |  | [optional] [default to &#39;T&#39;]
**pin** | **String** |  | [optional] 
**sendEmail** | **Boolean** | create share with sending email or just create share | [optional] [default to false]


<a name="ShareTypeEnum"></a>
## Enum: ShareTypeEnum


* `P` (value: `"P"`)

* `T` (value: `"T"`)

* `C` (value: `"C"`)




