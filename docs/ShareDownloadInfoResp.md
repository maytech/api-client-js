# QuatrixApi.ShareDownloadInfoResp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**message** | **String** |  | [optional] 
**subject** | **String** |  | [optional] 
**activates** | **Number** |  | [optional] 
**expires** | **Number** |  | [optional] 
**senderName** | **String** |  | [optional] 
**senderEmail** | **String** |  | [optional] 
**userName** | **String** | user name from current session | [optional] 
**userEmail** | **String** | user email from current session | [optional] 
**locale** | **String** |  | [optional] 
**userId** | **String** |  | [optional] 
**pgpEncrypted** | **Boolean** | PGP protected share | [optional] 
**privateKey** | **String** | for PGP | [optional] 
**pgpEnabled** | **Boolean** | It shows that the user from the current session has PGP key. If True - the user will get his private_key. | [optional] 
**status** | **String** |  | [optional] 
**shareType** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**expired** | **Boolean** |  | [optional] 
**isReply** | **Boolean** |  | [optional] 
**pinProtected** | **Boolean** |  | [optional] 


<a name="ShareTypeEnum"></a>
## Enum: ShareTypeEnum


* `P` (value: `"P"`)

* `C` (value: `"C"`)

* `T` (value: `"T"`)




