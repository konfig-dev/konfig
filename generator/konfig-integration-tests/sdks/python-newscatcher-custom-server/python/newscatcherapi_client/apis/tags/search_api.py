# coding: utf-8

from newscatcherapi_client.apis.tags.search_api_generated import SearchApiGenerated
from newscatcherapi_client.search_all_helper import search_all

class SearchApi(SearchApiGenerated):
    
    def get_all(self, **kwargs):
        return search_all(self.get, **kwargs)

    def post_all(self, **kwargs):
        return search_all(self.post, **kwargs)
