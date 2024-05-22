import typing_extensions

from newscatcherapi_client.paths import PathValues
from newscatcherapi_client.apis.paths.api_search import ApiSearch
from newscatcherapi_client.apis.paths.api_latest_headlines import ApiLatestHeadlines
from newscatcherapi_client.apis.paths.api_authors import ApiAuthors
from newscatcherapi_client.apis.paths.api_search_by_link import ApiSearchByLink
from newscatcherapi_client.apis.paths.api_search_similar import ApiSearchSimilar
from newscatcherapi_client.apis.paths.api_sources import ApiSources
from newscatcherapi_client.apis.paths.api_subscription import ApiSubscription

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.API_SEARCH: ApiSearch,
        PathValues.API_LATEST_HEADLINES: ApiLatestHeadlines,
        PathValues.API_AUTHORS: ApiAuthors,
        PathValues.API_SEARCH_BY_LINK: ApiSearchByLink,
        PathValues.API_SEARCH_SIMILAR: ApiSearchSimilar,
        PathValues.API_SOURCES: ApiSources,
        PathValues.API_SUBSCRIPTION: ApiSubscription,
    }
)

path_to_api = PathToApi(
    {
        PathValues.API_SEARCH: ApiSearch,
        PathValues.API_LATEST_HEADLINES: ApiLatestHeadlines,
        PathValues.API_AUTHORS: ApiAuthors,
        PathValues.API_SEARCH_BY_LINK: ApiSearchByLink,
        PathValues.API_SEARCH_SIMILAR: ApiSearchSimilar,
        PathValues.API_SOURCES: ApiSources,
        PathValues.API_SUBSCRIPTION: ApiSubscription,
    }
)
