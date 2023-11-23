package com.konfigthis.javauseschematitleifpossible.client;

import com.konfigthis.javauseschematitleifpossible.client.api.TestApi;

public class JavaUseSchemaTitleIfPossibleClient {
    private ApiClient apiClient;
    public final TestApi test;

    public JavaUseSchemaTitleIfPossibleClient() {
        this(null);
    }

    public JavaUseSchemaTitleIfPossibleClient(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.test = new TestApi(this.apiClient);
    }

}
