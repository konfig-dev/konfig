# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from newscatcherapi_client.apis.tag_to_api import tag_to_api

import enum


class TagValues(str, enum.Enum):
    SEARCH = "Search"
    LATEST_HEADLINES = "LatestHeadlines"
    AUTHORS = "Authors"
    SEARCH_LINK = "SearchLink"
    SEARCH_SIMILAR = "SearchSimilar"
    SOURCES = "Sources"
    SUBSCRIPTION = "Subscription"
