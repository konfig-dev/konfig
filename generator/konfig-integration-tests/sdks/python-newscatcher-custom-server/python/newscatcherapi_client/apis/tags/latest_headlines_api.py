# coding: utf-8

from newscatcherapi_client.apis.tags.latest_headlines_api_generated import LatestHeadlinesApiGenerated
from newscatcherapi_client.search_all_helper import search_all

class LatestHeadlinesApi(LatestHeadlinesApiGenerated):
    
    def get_all(self, **kwargs):
        return search_all(self.get, **kwargs)

    def post_all(self, **kwargs):
        return search_all(self.post, **kwargs)
