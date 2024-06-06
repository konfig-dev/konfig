package com.konfigthis.newscatcherapi.client.api;

import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.model.AuthorSearchRequest;
import com.konfigthis.newscatcherapi.client.model.FSearchResponse;
import com.konfigthis.newscatcherapi.client.model.FSearchResponse1;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AuthorsApi extends AuthorsApiGenerated {

    public AuthorsApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class GetRequestBuilder extends GetRequestBuilderGenerated {
        public GetRequestBuilder(String authorName) {
            super(authorName);
        }
    }
    public class PostRequestBuilder extends PostRequestBuilderGenerated {
        public PostRequestBuilder(String authorName) {
            super(authorName);
        }
    }
}
