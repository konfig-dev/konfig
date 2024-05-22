# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from newscatcherapi_client.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    API_SEARCH = "/api/search"
    API_LATEST_HEADLINES = "/api/latest_headlines"
    API_AUTHORS = "/api/authors"
    API_SEARCH_BY_LINK = "/api/search_by_link"
    API_SEARCH_SIMILAR = "/api/search_similar"
    API_SOURCES = "/api/sources"
    API_SUBSCRIPTION = "/api/subscription"
