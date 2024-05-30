

# OrganizationUserFilesToSyncFilters


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**tags** | **Map&lt;String, Object&gt;** |  |  [optional] |
|**source** | **Object** |  |  [optional] |
|**name** | **String** | The name of the file. The query will return files with names that contain this string. |  [optional] |
|**tagsV2** | **Object** |          Tags to filter by. Supports logical AND and OR operations. Input should be like below:         {             \&quot;OR\&quot;: [                 {                 \&quot;key\&quot;: \&quot;subject\&quot;,                 \&quot;value\&quot;: \&quot;holy-bible\&quot;,                 \&quot;negate\&quot;: false                 },                 {                     \&quot;key\&quot;: \&quot;person-of-interest\&quot;,                     \&quot;value\&quot;: \&quot;jesus christ\&quot;,                     \&quot;negate\&quot;: false                 },                 {                     \&quot;key\&quot;: \&quot;genre\&quot;,                     \&quot;value\&quot;: \&quot;fiction\&quot;,                     \&quot;negate\&quot;: true                 }                 {                     \&quot;AND\&quot;: [                         {                             \&quot;key\&quot;: \&quot;subject\&quot;,                             \&quot;value\&quot;: \&quot;tao-te-ching\&quot;,                             \&quot;negate\&quot;: true                         },                         {                             \&quot;key\&quot;: \&quot;author\&quot;,                             \&quot;value\&quot;: \&quot;lao-tzu\&quot;,                             \&quot;negate\&quot;: false                         }                     ]                 }             ]         }         For a single filter, the filter block can be placed within either an \&quot;AND\&quot; or \&quot;OR\&quot; block.          |  [optional] |
|**ids** | **List&lt;Integer&gt;** | The IDs of the files. The query will return files with these IDs. |  [optional] |
|**externalFileIds** | **List&lt;String&gt;** | The external file IDs of the files. The query will return files with these external file IDs. |  [optional] |
|**syncStatuses** | **List&lt;ExternalFileSyncStatuses&gt;** | The sync statuses of the files. The query will return files with these sync statuses. |  [optional] |
|**parentFileIds** | **List&lt;Integer&gt;** |  |  [optional] |
|**organizationUserDataSourceId** | **List&lt;Integer&gt;** | The organization user data source IDs of the files. The query will return files with these organization user data source IDs. |  [optional] |
|**embeddingGenerators** | **List&lt;EmbeddingGenerators&gt;** | The embedding generators of the files. The query will return files with these embedding generators. |  [optional] |
|**rootFilesOnly** | **Boolean** | If true, the query will return only root files. Cannot be true if parent_file_ids or include_all_children is specified. |  [optional] |
|**includeAllChildren** | **Boolean** | If true, the query will return all descendents of the specified parent_file_ids. |  [optional] |
|**nonSyncedOnly** | **Boolean** | If true, the query will return only files that have not been synced yet. |  [optional] |
|**requestIds** | **List&lt;String&gt;** | Filter by request ID(s) which were used to sync the files |  [optional] |
|**syncErrorMessage** | **String** | The error message of the file. The query will return files with error messages that contain this string. To search for files with no error message, use an empty string. |  [optional] |
|**includeContainers** | **Boolean** | If true, the query will return containers in the response. Containers are files that group other files together and have no content themselves. Default behavior is to include containers. |  [optional] |



