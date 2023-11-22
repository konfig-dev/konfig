package com.konfigthis.javamergedschemashaveencapsulatingname.client;

import com.konfigthis.javamergedschemashaveencapsulatingname.client.api.TestApi;

public class JavaMergedSchemasHaveEncapsulatingNameClient {
    private ApiClient apiClient;
    public final TestApi test;

    public JavaMergedSchemasHaveEncapsulatingNameClient() {
        this(null);
    }

    public JavaMergedSchemasHaveEncapsulatingNameClient(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.test = new TestApi(this.apiClient);
    }

}
