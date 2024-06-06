package com.konfigthis.newscatcherapi.client.api;

import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.model.CSearchResponse;
import com.konfigthis.newscatcherapi.client.model.CSearchResponse1;
import com.konfigthis.newscatcherapi.client.model.SearchRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchApi extends SearchApiGenerated {

    public SearchApi(ApiClient apiClient) throws IllegalArgumentException {
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
