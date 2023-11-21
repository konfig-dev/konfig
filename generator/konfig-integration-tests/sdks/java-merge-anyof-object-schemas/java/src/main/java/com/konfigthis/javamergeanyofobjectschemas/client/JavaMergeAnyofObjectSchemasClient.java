package com.konfigthis.javamergeanyofobjectschemas.client;

import com.konfigthis.javamergeanyofobjectschemas.client.api.TestApi;

public class JavaMergeAnyofObjectSchemasClient {
    private ApiClient apiClient;
    public final TestApi test;

    public JavaMergeAnyofObjectSchemasClient() {
        this(null);
    }

    public JavaMergeAnyofObjectSchemasClient(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.test = new TestApi(this.apiClient);
    }

}
