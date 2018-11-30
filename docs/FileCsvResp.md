# QuatrixApi.FileCsvResp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **String** | File Path | [optional] 
**name** | **String** | File name | [optional] 
**size** | **Number** | File Size | [optional] 
**type** | **String** | File Type (F-file, D-directory, T-trash) | [optional] 
**created** | **String** | File creation time | [optional] 
**modified** | **String** | File modification time | [optional] 
**contentModified** | **String** | File content modification time | [optional] 
**createdBy** | **Object** | Who created a file | [optional] 
**owner** | **Object** | Who owns a file | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `D` (value: `"D"`)

* `F` (value: `"F"`)

* `T` (value: `"T"`)




