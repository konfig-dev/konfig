# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from newscatcherapi_client.paths.api_search_by_link import Api

from newscatcherapi_client.paths import PathValues

path = PathValues.API_SEARCH_BY_LINK