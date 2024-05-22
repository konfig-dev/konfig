# coding: utf-8

from newscatcherapi_client.apis.tags.search_similar_api_generated import SearchSimilarApiGenerated
from newscatcherapi_client.search_all_helper import search_all

class SearchSimilarApi(SearchSimilarApiGenerated):

    def get_all(self, **kwargs):
        return search_all(self.get, **kwargs)

    def post_all(self, **kwargs):
        return search_all(self.post, **kwargs)
