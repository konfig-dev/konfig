

# FileSyncConfigNullable

Used to configure file syncing for certain connectors when sync_files_on_connection is set to true

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**autoSyncedSourceTypes** | **List&lt;HelpdeskFileTypes&gt;** | File types to automatically sync when the data source connects. Only a subset of file types can be          controlled. If not supported, then they will always be synced |  [optional] |
|**syncAttachments** | **Boolean** | Automatically sync attachments from files where supported. Currently applies to Helpdesk Tickets |  [optional] |
|**detectAudioLanguage** | **Boolean** | Detect audio language before transcription for audio files |  [optional] |



