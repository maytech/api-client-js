# QuatrixApi.FileInfoResp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | File ID | [optional] 
**created** | **Number** | File creation timestamp | [optional] 
**modified** | **Number** | File modification timestamp | [optional] 
**contentModified** | **Number** | File content modification timestamp | [optional] 
**name** | **String** | File name | [optional] 
**size** | **Number** | File size in bytes | [optional] 
**type** | **String** | File type | [optional] 
**fileOwner** | **Object** | Owner of the file | [optional] 
**actionRole** | **Object** | User role who created or uploaded the file | [optional] 
**paths** | **Object** | Path and type of path to the file | [optional] 
**antivirusCheck** | **String** | Antivirus check result. Null if file is not infected | [optional] 
**widgetMetadata** | **Object** | The data is submitted with the file, if it was uploaded via widget | [optional] 


