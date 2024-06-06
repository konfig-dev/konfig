package com.konfigthis.newscatcherapi.client;

import com.konfigthis.newscatcherapi.client.api.AuthorsApi;
import com.konfigthis.newscatcherapi.client.api.LatestHeadlinesApi;
import com.konfigthis.newscatcherapi.client.api.SearchApi;
import com.konfigthis.newscatcherapi.client.api.SearchLinkApi;
import com.konfigthis.newscatcherapi.client.api.SearchSimilarApi;
import com.konfigthis.newscatcherapi.client.api.SourcesApi;
import com.konfigthis.newscatcherapi.client.api.SubscriptionApi;

public class Newscatcher {
    private ApiClient apiClient;
    public final AuthorsApi authors;
    public final LatestHeadlinesApi latestHeadlines;
    public final SearchApi search;
    public final SearchLinkApi searchLink;
    public final SearchSimilarApi searchSimilar;
    public final SourcesApi sources;
    public final SubscriptionApi subscription;

    public Newscatcher() {
        this(null);
    }

    public Newscatcher(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.authors = new AuthorsApi(this.apiClient);
        this.latestHeadlines = new LatestHeadlinesApi(this.apiClient);
        this.search = new SearchApi(this.apiClient);
        this.searchLink = new SearchLinkApi(this.apiClient);
        this.searchSimilar = new SearchSimilarApi(this.apiClient);
        this.sources = new SourcesApi(this.apiClient);
        this.subscription = new SubscriptionApi(this.apiClient);
    }

}
