package com.konfigthis.carbonai.client.api;

import com.konfigthis.carbonai.client.ApiClient;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HealthApi extends HealthApiGenerated {

    public HealthApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class CheckRequestBuilder extends CheckRequestBuilderGenerated {
        public CheckRequestBuilder() {
            super();
        }
    }
}
