package com.konfigthis.carbonai.client.api;

import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.model.EmbeddingGenerators;
import com.konfigthis.carbonai.client.model.FetchURLsResponse;
import com.konfigthis.carbonai.client.model.SitemapScrapeRequest;
import com.konfigthis.carbonai.client.model.WebscrapeRequest;
import com.konfigthis.carbonai.client.model.YoutubeTranscriptResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UtilitiesApi extends UtilitiesApiGenerated {

    public UtilitiesApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class FetchUrlsRequestBuilder extends FetchUrlsRequestBuilderGenerated {
        public FetchUrlsRequestBuilder(String url) {
            super(url);
        }
    }
    public class FetchYoutubeTranscriptsRequestBuilder extends FetchYoutubeTranscriptsRequestBuilderGenerated {
        public FetchYoutubeTranscriptsRequestBuilder(String id) {
            super(id);
        }
    }
    public class ProcessSitemapRequestBuilder extends ProcessSitemapRequestBuilderGenerated {
        public ProcessSitemapRequestBuilder(String url) {
            super(url);
        }
    }
    public class ScrapeSitemapRequestBuilder extends ScrapeSitemapRequestBuilderGenerated {
        public ScrapeSitemapRequestBuilder(String url) {
            super(url);
        }
    }
    public class ScrapeWebRequestBuilder extends ScrapeWebRequestBuilderGenerated {
        public ScrapeWebRequestBuilder() {
            super();
        }
    }
    public class SearchUrlsRequestBuilder extends SearchUrlsRequestBuilderGenerated {
        public SearchUrlsRequestBuilder(String query) {
            super(query);
        }
    }
}
