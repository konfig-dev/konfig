

# SyncFilesRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**tags** | **Object** |  |  [optional] |
|**dataSourceId** | **Integer** |  |  |
|**ids** | **List&lt;Object&gt;** |  |  |
|**chunkSize** | **Integer** |  |  [optional] |
|**chunkOverlap** | **Integer** |  |  [optional] |
|**skipEmbeddingGeneration** | **Boolean** |  |  [optional] |
|**embeddingModel** | **EmbeddingGeneratorsNullable** |  |  [optional] |
|**generateSparseVectors** | **Boolean** |  |  [optional] |
|**prependFilenameToChunks** | **Boolean** |  |  [optional] |
|**maxItemsPerChunk** | **Integer** | Number of objects per chunk. For csv, tsv, xlsx, and json files only. |  [optional] |
|**setPageAsBoundary** | **Boolean** |  |  [optional] |
|**requestId** | **String** |  |  [optional] |
|**useOcr** | **Boolean** |  |  [optional] |
|**parsePdfTablesWithOcr** | **Boolean** |  |  [optional] |
|**incrementalSync** | **Boolean** | Only sync files if they have not already been synced or if the embedding properties have changed.         This flag is currently supported by ONEDRIVE, GOOGLE_DRIVE, BOX, DROPBOX. It will be ignored for other data sources. |  [optional] |
|**fileSyncConfig** | [**FileSyncConfigNullable**](FileSyncConfigNullable.md) |  |  [optional] |



