

# OAuthURLRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**tags** | **Object** |  |  [optional] |
|**scope** | **String** |  |  [optional] |
|**service** | **DataSourceType** |  |  |
|**chunkSize** | **Integer** |  |  [optional] |
|**chunkOverlap** | **Integer** |  |  [optional] |
|**skipEmbeddingGeneration** | **Boolean** |  |  [optional] |
|**embeddingModel** | **EmbeddingGeneratorsNullable** |  |  [optional] |
|**zendeskSubdomain** | **String** |  |  [optional] |
|**microsoftTenant** | **String** |  |  [optional] |
|**sharepointSiteName** | **String** |  |  [optional] |
|**confluenceSubdomain** | **String** |  |  [optional] |
|**generateSparseVectors** | **Boolean** |  |  [optional] |
|**prependFilenameToChunks** | **Boolean** |  |  [optional] |
|**maxItemsPerChunk** | **Integer** | Number of objects per chunk. For csv, tsv, xlsx, and json files only. |  [optional] |
|**salesforceDomain** | **String** |  |  [optional] |
|**syncFilesOnConnection** | **Boolean** | Used to specify whether Carbon should attempt to sync all your files automatically when authorization         is complete. This is only supported for a subset of connectors and will be ignored for the rest. Supported         connectors: Intercom, Zendesk, Gitbook, Confluence, Salesforce, Freshdesk |  [optional] |
|**setPageAsBoundary** | **Boolean** |  |  [optional] |
|**dataSourceId** | **Integer** | Used to specify a data source to sync from if you have multiple connected. It can be skipped if          you only have one data source of that type connected or are connecting a new account. |  [optional] |
|**connectingNewAccount** | **Boolean** | Used to connect a new data source. If not specified, we will attempt to create a sync URL         for an existing data source based on type and ID. |  [optional] |
|**requestId** | **String** | This request id will be added to all files that get synced using the generated OAuth URL |  [optional] |
|**useOcr** | **Boolean** | Enable OCR for files that support it. Supported formats: pdf |  [optional] |
|**parsePdfTablesWithOcr** | **Boolean** |  |  [optional] |
|**enableFilePicker** | **Boolean** | Enable integration&#39;s file picker for sources that support it. Supported sources: DROPBOX, SHAREPOINT, ONEDRIVE, BOX, GOOGLE_DRIVE |  [optional] |
|**syncSourceItems** | **Boolean** | Enabling this flag will fetch all available content from the source to be listed via list items endpoint |  [optional] |
|**incrementalSync** | **Boolean** | Only sync files if they have not already been synced or if the embedding properties have changed.         This flag is currently supported by ONEDRIVE, GOOGLE_DRIVE, BOX, DROPBOX. It will be ignored for other data sources. |  [optional] |
|**fileSyncConfig** | [**FileSyncConfigNullable**](FileSyncConfigNullable.md) |  |  [optional] |



