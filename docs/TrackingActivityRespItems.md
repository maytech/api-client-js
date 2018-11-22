# QuatrixApi.TrackingActivityRespItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**userName** | **String** | User name | [optional] 
**userStatus** | **String** |  | [optional] 
**timestamp** | **Number** |  | [optional] 
**protocol** | **String** |  | [optional] 
**event** | **String** |  | [optional] 
**action** | **String** |  | [optional] 
**shareStatus** | **String** |  | [optional] 
**payload** | **Object** | other information(share id, files, etc) | [optional] 
**duration** | **Number** | duration in seconds | [optional] 


<a name="UserStatusEnum"></a>
## Enum: UserStatusEnum


* `A` (value: `"A"`)

* `D` (value: `"D"`)

* `R` (value: `"R"`)




<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `web` (value: `"web"`)

* `SFTP` (value: `"SFTP"`)




<a name="EventEnum"></a>
## Enum: EventEnum


* `share` (value: `"share"`)

* `file` (value: `"file"`)

* `files-return` (value: `"files-return"`)




<a name="ActionEnum"></a>
## Enum: ActionEnum


* `create` (value: `"create"`)

* `revoke` (value: `"revoke"`)

* `created-link` (value: `"created-link"`)

* `sent-email` (value: `"sent-email"`)

* `replied` (value: `"replied"`)

* `upload` (value: `"upload"`)

* `download` (value: `"download"`)

* `move-rename` (value: `"move-rename"`)

* `delete` (value: `"delete"`)

* `makedir` (value: `"makedir"`)




<a name="ShareStatusEnum"></a>
## Enum: ShareStatusEnum


* `A` (value: `"A"`)

* `D` (value: `"D"`)

* `null` (value: `"null"`)




