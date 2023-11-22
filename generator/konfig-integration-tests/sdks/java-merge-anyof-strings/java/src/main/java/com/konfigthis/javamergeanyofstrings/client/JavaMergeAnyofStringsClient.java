package com.konfigthis.javamergeanyofstrings.client;

import com.konfigthis.javamergeanyofstrings.client.api.TestApi;

public class JavaMergeAnyofStringsClient {
    private ApiClient apiClient;
    public final TestApi test;

    public JavaMergeAnyofStringsClient() {
        this(null);
    }

    public JavaMergeAnyofStringsClient(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.test = new TestApi(this.apiClient);
    }

}
