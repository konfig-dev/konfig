package com.konfigthis.javaapiexceptioncontainsresponseheaders.client;

import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.api.TestApi;

public class JavaApiExceptionContainsResponseHeadersClient {
    private ApiClient apiClient;
    public final TestApi test;

    public JavaApiExceptionContainsResponseHeadersClient() {
        this(null);
    }

    public JavaApiExceptionContainsResponseHeadersClient(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.test = new TestApi(this.apiClient);
    }

}
