package com.konfigthis.newscatcherapi.client.api;

import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.model.FSearchResponse2;
import com.konfigthis.newscatcherapi.client.model.FSearchResponse3;
import com.konfigthis.newscatcherapi.client.model.MoreLikeThisRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchSimilarApi extends SearchSimilarApiGenerated {

    public SearchSimilarApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class GetRequestBuilder extends GetRequestBuilderGenerated {
        public GetRequestBuilder(String q) {
            super(q);
        }
    }
    public class PostRequestBuilder extends PostRequestBuilderGenerated {
        public PostRequestBuilder(String q) {
            super(q);
        }
    }
}
