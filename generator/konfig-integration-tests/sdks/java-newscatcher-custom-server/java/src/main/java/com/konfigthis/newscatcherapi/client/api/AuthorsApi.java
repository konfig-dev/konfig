package com.konfigthis.newscatcherapi.client.api;

import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.model.ArticlesPropertyInner;
import com.konfigthis.newscatcherapi.client.model.FSearchResponse;
import com.konfigthis.newscatcherapi.client.model.FSearchResponse1;

import java.util.List;

public class AuthorsApi extends AuthorsApiGenerated {

    public AuthorsApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class GetRequestBuilder extends GetRequestBuilderGenerated {
        public GetRequestBuilder(String authorName) {
            super(authorName);
        }

        public List<ArticlesPropertyInner> executeSearchAll() {
            int pageSize = this.pageSize != null ? this.pageSize : 100;
            try {
                FSearchResponse response = this.execute();
                if (response.getTotalHits() > pageSize) {
                    for (int page = 2; page <= response.getTotalPages(); page++) {
                        this.page(page);
                        FSearchResponse res = this.execute();
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
        public PostRequestBuilder(String authorName) {
            super(authorName);
        }

        public List<ArticlesPropertyInner> executeSearchAll() {
            int pageSize = this.pageSize != null ? this.pageSize : 100;
            try {
                FSearchResponse1 response = this.execute();
                if (response.getTotalHits() > pageSize) {
                    for (int page = 2; page <= response.getTotalPages(); page++) {
                        this.page(page);
                        FSearchResponse1 res = this.execute();
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
