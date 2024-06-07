package com.konfigthis.newscatcherapi.client.api;

import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.model.*;

import java.util.List;

public class SearchApi extends SearchApiGenerated {

    public SearchApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class GetRequestBuilder extends GetRequestBuilderGenerated {
        public GetRequestBuilder(String q) {
            super(q);
        }

        public List<Object> executeSearchAll() {
            int pageSize = this.pageSize != null ? this.pageSize : 100;
            try {
                CSearchResponse response = this.execute();
                if (response.getTotalHits() > pageSize) {
                    for (int page = 2; page <= response.getTotalPages(); page++) {
                        this.page(page);
                        CSearchResponse res = this.execute();
                        response.getArticles().addAll(res.getArticles());
                    }
                }
                return response.getArticles();
            } catch (ApiException e) {
                System.out.printf("Exception when calling Search all: %s\n", e);
                return null;
            }
        }
    }
    public class PostRequestBuilder extends PostRequestBuilderGenerated {
        public PostRequestBuilder(String q) {
            super(q);
        }

        public List<Object> executeSearchAll() {
            int pageSize = this.pageSize != null ? this.pageSize : 100;
            try {
                CSearchResponse1 response = this.execute();
                if (response.getTotalHits() > pageSize) {
                    for (int page = 2; page <= response.getTotalPages(); page++) {
                        this.page(page);
                        CSearchResponse1 res = this.execute();
                        response.getArticles().addAll(res.getArticles());
                    }
                }
                return response.getArticles();
            } catch (ApiException e) {
                System.out.printf("Exception when calling Search all: %s\n", e);
                return null;
            }
        }
    }
}
