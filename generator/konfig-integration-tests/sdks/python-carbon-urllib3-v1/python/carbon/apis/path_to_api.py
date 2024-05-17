import typing_extensions

from carbon.paths import PathValues
from carbon.apis.paths.integrations_oauth_url import IntegrationsOauthUrl
from carbon.apis.paths.integrations_items_sync import IntegrationsItemsSync
from carbon.apis.paths.integrations_items_list import IntegrationsItemsList
from carbon.apis.paths.integrations_files_sync import IntegrationsFilesSync
from carbon.apis.paths.integrations_confluence_list import IntegrationsConfluenceList
from carbon.apis.paths.integrations_confluence_sync import IntegrationsConfluenceSync
from carbon.apis.paths.integrations_s3 import IntegrationsS3
from carbon.apis.paths.integrations_s3_files import IntegrationsS3Files
from carbon.apis.paths.integrations_gmail_sync import IntegrationsGmailSync
from carbon.apis.paths.integrations_rss_feed import IntegrationsRssFeed
from carbon.apis.paths.integrations_outlook_sync import IntegrationsOutlookSync
from carbon.apis.paths.integrations_freshdesk import IntegrationsFreshdesk
from carbon.apis.paths.integrations_outlook_user_folders import IntegrationsOutlookUserFolders
from carbon.apis.paths.integrations_gmail_user_labels import IntegrationsGmailUserLabels
from carbon.apis.paths.auth_v1_access_token import AuthV1AccessToken
from carbon.apis.paths.auth_v1_white_labeling import AuthV1WhiteLabeling
from carbon.apis.paths.embeddings import Embeddings
from carbon.apis.paths.text_chunks import TextChunks
from carbon.apis.paths.upload_chunks_and_embeddings import UploadChunksAndEmbeddings
from carbon.apis.paths.organization import Organization
from carbon.apis.paths.user import User
from carbon.apis.paths.modify_user_configuration import ModifyUserConfiguration
from carbon.apis.paths.uploadfile import Uploadfile
from carbon.apis.paths.upload_file_from_url import UploadFileFromUrl
from carbon.apis.paths.upload_text import UploadText
from carbon.apis.paths.deletefile_file_id import DeletefileFileId
from carbon.apis.paths.delete_files import DeleteFiles
from carbon.apis.paths.user_files_v2 import UserFilesV2
from carbon.apis.paths.create_user_file_tags import CreateUserFileTags
from carbon.apis.paths.delete_user_file_tags import DeleteUserFileTags
from carbon.apis.paths.resync_file import ResyncFile
from carbon.apis.paths.raw_file_file_id import RawFileFileId
from carbon.apis.paths.parsed_file_file_id import ParsedFileFileId
from carbon.apis.paths.user_files import UserFiles
from carbon.apis.paths.webhooks import Webhooks
from carbon.apis.paths.add_webhook import AddWebhook
from carbon.apis.paths.delete_webhook_webhook_id import DeleteWebhookWebhookId
from carbon.apis.paths.user_data_sources import UserDataSources
from carbon.apis.paths.revoke_access_token import RevokeAccessToken
from carbon.apis.paths.web_scrape import WebScrape
from carbon.apis.paths.process_sitemap import ProcessSitemap
from carbon.apis.paths.scrape_sitemap import ScrapeSitemap
from carbon.apis.paths.fetch_urls import FetchUrls
from carbon.apis.paths.search_urls import SearchUrls
from carbon.apis.paths.fetch_youtube_transcript import FetchYoutubeTranscript
from carbon.apis.paths.health import Health

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.INTEGRATIONS_OAUTH_URL: IntegrationsOauthUrl,
        PathValues.INTEGRATIONS_ITEMS_SYNC: IntegrationsItemsSync,
        PathValues.INTEGRATIONS_ITEMS_LIST: IntegrationsItemsList,
        PathValues.INTEGRATIONS_FILES_SYNC: IntegrationsFilesSync,
        PathValues.INTEGRATIONS_CONFLUENCE_LIST: IntegrationsConfluenceList,
        PathValues.INTEGRATIONS_CONFLUENCE_SYNC: IntegrationsConfluenceSync,
        PathValues.INTEGRATIONS_S3: IntegrationsS3,
        PathValues.INTEGRATIONS_S3_FILES: IntegrationsS3Files,
        PathValues.INTEGRATIONS_GMAIL_SYNC: IntegrationsGmailSync,
        PathValues.INTEGRATIONS_RSS_FEED: IntegrationsRssFeed,
        PathValues.INTEGRATIONS_OUTLOOK_SYNC: IntegrationsOutlookSync,
        PathValues.INTEGRATIONS_FRESHDESK: IntegrationsFreshdesk,
        PathValues.INTEGRATIONS_OUTLOOK_USER_FOLDERS: IntegrationsOutlookUserFolders,
        PathValues.INTEGRATIONS_GMAIL_USER_LABELS: IntegrationsGmailUserLabels,
        PathValues.AUTH_V1_ACCESS_TOKEN: AuthV1AccessToken,
        PathValues.AUTH_V1_WHITE_LABELING: AuthV1WhiteLabeling,
        PathValues.EMBEDDINGS: Embeddings,
        PathValues.TEXT_CHUNKS: TextChunks,
        PathValues.UPLOAD_CHUNKS_AND_EMBEDDINGS: UploadChunksAndEmbeddings,
        PathValues.ORGANIZATION: Organization,
        PathValues.USER: User,
        PathValues.MODIFY_USER_CONFIGURATION: ModifyUserConfiguration,
        PathValues.UPLOADFILE: Uploadfile,
        PathValues.UPLOAD_FILE_FROM_URL: UploadFileFromUrl,
        PathValues.UPLOAD_TEXT: UploadText,
        PathValues.DELETEFILE_FILE_ID: DeletefileFileId,
        PathValues.DELETE_FILES: DeleteFiles,
        PathValues.USER_FILES_V2: UserFilesV2,
        PathValues.CREATE_USER_FILE_TAGS: CreateUserFileTags,
        PathValues.DELETE_USER_FILE_TAGS: DeleteUserFileTags,
        PathValues.RESYNC_FILE: ResyncFile,
        PathValues.RAW_FILE_FILE_ID: RawFileFileId,
        PathValues.PARSED_FILE_FILE_ID: ParsedFileFileId,
        PathValues.USER_FILES: UserFiles,
        PathValues.WEBHOOKS: Webhooks,
        PathValues.ADD_WEBHOOK: AddWebhook,
        PathValues.DELETE_WEBHOOK_WEBHOOK_ID: DeleteWebhookWebhookId,
        PathValues.USER_DATA_SOURCES: UserDataSources,
        PathValues.REVOKE_ACCESS_TOKEN: RevokeAccessToken,
        PathValues.WEB_SCRAPE: WebScrape,
        PathValues.PROCESS_SITEMAP: ProcessSitemap,
        PathValues.SCRAPE_SITEMAP: ScrapeSitemap,
        PathValues.FETCH_URLS: FetchUrls,
        PathValues.SEARCH_URLS: SearchUrls,
        PathValues.FETCH_YOUTUBE_TRANSCRIPT: FetchYoutubeTranscript,
        PathValues.HEALTH: Health,
    }
)

path_to_api = PathToApi(
    {
        PathValues.INTEGRATIONS_OAUTH_URL: IntegrationsOauthUrl,
        PathValues.INTEGRATIONS_ITEMS_SYNC: IntegrationsItemsSync,
        PathValues.INTEGRATIONS_ITEMS_LIST: IntegrationsItemsList,
        PathValues.INTEGRATIONS_FILES_SYNC: IntegrationsFilesSync,
        PathValues.INTEGRATIONS_CONFLUENCE_LIST: IntegrationsConfluenceList,
        PathValues.INTEGRATIONS_CONFLUENCE_SYNC: IntegrationsConfluenceSync,
        PathValues.INTEGRATIONS_S3: IntegrationsS3,
        PathValues.INTEGRATIONS_S3_FILES: IntegrationsS3Files,
        PathValues.INTEGRATIONS_GMAIL_SYNC: IntegrationsGmailSync,
        PathValues.INTEGRATIONS_RSS_FEED: IntegrationsRssFeed,
        PathValues.INTEGRATIONS_OUTLOOK_SYNC: IntegrationsOutlookSync,
        PathValues.INTEGRATIONS_FRESHDESK: IntegrationsFreshdesk,
        PathValues.INTEGRATIONS_OUTLOOK_USER_FOLDERS: IntegrationsOutlookUserFolders,
        PathValues.INTEGRATIONS_GMAIL_USER_LABELS: IntegrationsGmailUserLabels,
        PathValues.AUTH_V1_ACCESS_TOKEN: AuthV1AccessToken,
        PathValues.AUTH_V1_WHITE_LABELING: AuthV1WhiteLabeling,
        PathValues.EMBEDDINGS: Embeddings,
        PathValues.TEXT_CHUNKS: TextChunks,
        PathValues.UPLOAD_CHUNKS_AND_EMBEDDINGS: UploadChunksAndEmbeddings,
        PathValues.ORGANIZATION: Organization,
        PathValues.USER: User,
        PathValues.MODIFY_USER_CONFIGURATION: ModifyUserConfiguration,
        PathValues.UPLOADFILE: Uploadfile,
        PathValues.UPLOAD_FILE_FROM_URL: UploadFileFromUrl,
        PathValues.UPLOAD_TEXT: UploadText,
        PathValues.DELETEFILE_FILE_ID: DeletefileFileId,
        PathValues.DELETE_FILES: DeleteFiles,
        PathValues.USER_FILES_V2: UserFilesV2,
        PathValues.CREATE_USER_FILE_TAGS: CreateUserFileTags,
        PathValues.DELETE_USER_FILE_TAGS: DeleteUserFileTags,
        PathValues.RESYNC_FILE: ResyncFile,
        PathValues.RAW_FILE_FILE_ID: RawFileFileId,
        PathValues.PARSED_FILE_FILE_ID: ParsedFileFileId,
        PathValues.USER_FILES: UserFiles,
        PathValues.WEBHOOKS: Webhooks,
        PathValues.ADD_WEBHOOK: AddWebhook,
        PathValues.DELETE_WEBHOOK_WEBHOOK_ID: DeleteWebhookWebhookId,
        PathValues.USER_DATA_SOURCES: UserDataSources,
        PathValues.REVOKE_ACCESS_TOKEN: RevokeAccessToken,
        PathValues.WEB_SCRAPE: WebScrape,
        PathValues.PROCESS_SITEMAP: ProcessSitemap,
        PathValues.SCRAPE_SITEMAP: ScrapeSitemap,
        PathValues.FETCH_URLS: FetchUrls,
        PathValues.SEARCH_URLS: SearchUrls,
        PathValues.FETCH_YOUTUBE_TRANSCRIPT: FetchYoutubeTranscript,
        PathValues.HEALTH: Health,
    }
)
