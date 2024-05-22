import typing_extensions

from newscatcherapi_client.apis.tags import TagValues
from newscatcherapi_client.apis.tags.search_api import SearchApi
from newscatcherapi_client.apis.tags.latest_headlines_api import LatestHeadlinesApi
from newscatcherapi_client.apis.tags.authors_api import AuthorsApi
from newscatcherapi_client.apis.tags.search_link_api import SearchLinkApi
from newscatcherapi_client.apis.tags.search_similar_api import SearchSimilarApi
from newscatcherapi_client.apis.tags.sources_api import SourcesApi
from newscatcherapi_client.apis.tags.subscription_api import SubscriptionApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.SEARCH: SearchApi,
        TagValues.LATEST_HEADLINES: LatestHeadlinesApi,
        TagValues.AUTHORS: AuthorsApi,
        TagValues.SEARCH_LINK: SearchLinkApi,
        TagValues.SEARCH_SIMILAR: SearchSimilarApi,
        TagValues.SOURCES: SourcesApi,
        TagValues.SUBSCRIPTION: SubscriptionApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.SEARCH: SearchApi,
        TagValues.LATEST_HEADLINES: LatestHeadlinesApi,
        TagValues.AUTHORS: AuthorsApi,
        TagValues.SEARCH_LINK: SearchLinkApi,
        TagValues.SEARCH_SIMILAR: SearchSimilarApi,
        TagValues.SOURCES: SourcesApi,
        TagValues.SUBSCRIPTION: SubscriptionApi,
    }
)
