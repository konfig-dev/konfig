import typing_extensions

from carbon.apis.tags import TagValues
from carbon.apis.tags.integrations_api import IntegrationsApi
from carbon.apis.tags.files_api import FilesApi
from carbon.apis.tags.utilities_api import UtilitiesApi
from carbon.apis.tags.embeddings_api import EmbeddingsApi
from carbon.apis.tags.webhooks_api import WebhooksApi
from carbon.apis.tags.auth_api import AuthApi
from carbon.apis.tags.users_api import UsersApi
from carbon.apis.tags.data_sources_api import DataSourcesApi
from carbon.apis.tags.health_api import HealthApi
from carbon.apis.tags.organizations_api import OrganizationsApi
from carbon.apis.tags.getting_started_api import GettingStartedApi
from carbon.apis.tags.carbon_connect_api import CarbonConnectApi
from carbon.apis.tags.contact_us_api import ContactUsApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.INTEGRATIONS: IntegrationsApi,
        TagValues.FILES: FilesApi,
        TagValues.UTILITIES: UtilitiesApi,
        TagValues.EMBEDDINGS: EmbeddingsApi,
        TagValues.WEBHOOKS: WebhooksApi,
        TagValues.AUTH: AuthApi,
        TagValues.USERS: UsersApi,
        TagValues.DATA_SOURCES: DataSourcesApi,
        TagValues.HEALTH: HealthApi,
        TagValues.ORGANIZATIONS: OrganizationsApi,
        TagValues.GETTING_STARTED: GettingStartedApi,
        TagValues.CARBON_CONNECT: CarbonConnectApi,
        TagValues.CONTACT_US: ContactUsApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.INTEGRATIONS: IntegrationsApi,
        TagValues.FILES: FilesApi,
        TagValues.UTILITIES: UtilitiesApi,
        TagValues.EMBEDDINGS: EmbeddingsApi,
        TagValues.WEBHOOKS: WebhooksApi,
        TagValues.AUTH: AuthApi,
        TagValues.USERS: UsersApi,
        TagValues.DATA_SOURCES: DataSourcesApi,
        TagValues.HEALTH: HealthApi,
        TagValues.ORGANIZATIONS: OrganizationsApi,
        TagValues.GETTING_STARTED: GettingStartedApi,
        TagValues.CARBON_CONNECT: CarbonConnectApi,
        TagValues.CONTACT_US: ContactUsApi,
    }
)
