package com.konfigthis.javanullablerefusingallofschema.client;

import com.konfigthis.javanullablerefusingallofschema.client.api.TestApi;

public class JavaNullableRefUsingAllOfSchemaClient {
    private ApiClient apiClient;
    public final TestApi test;

    public JavaNullableRefUsingAllOfSchemaClient() {
        this(null);
    }

    public JavaNullableRefUsingAllOfSchemaClient(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.test = new TestApi(this.apiClient);
    }

}
