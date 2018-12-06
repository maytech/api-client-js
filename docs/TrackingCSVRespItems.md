# QuatrixApi.TrackingCSVRespItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **String** |  | [optional] 
**event** | **String** |  | [optional] 
**action** | **String** |  | [optional] 
**clientIPs** | **String** |  | [optional] 
**userName** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**userStatus** | **String** |  | [optional] 
**protocol** | **String** |  | [optional] 
**payload** | **Object** | other information(share id, files, etc) | [optional] 


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

* `rename` (value: `"rename"`)

* `delete` (value: `"delete"`)

* `makedir` (value: `"makedir"`)

* `copy` (value: `"copy"`)




<a name="UserStatusEnum"></a>
## Enum: UserStatusEnum


* `A` (value: `"A"`)

* `D` (value: `"D"`)

* `R` (value: `"R"`)




<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `web` (value: `"web"`)

* `SFTP` (value: `"SFTP"`)




