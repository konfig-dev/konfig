package com.konfigthis.javamergingschemaswithref.client;

import com.konfigthis.javamergingschemaswithref.client.api.TestApi;

public class JavaMergingSchemasWithRefClient {
    private ApiClient apiClient;
    public final TestApi test;

    public JavaMergingSchemasWithRefClient() {
        this(null);
    }

    public JavaMergingSchemasWithRefClient(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.test = new TestApi(this.apiClient);
    }

}
