package com.konfigthis.javanullablerefusingallofschema.client.api;

import com.konfigthis.javanullablerefusingallofschema.client.ApiClient;
import com.konfigthis.javanullablerefusingallofschema.client.model.TestFetchRequestWithAllOf;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TestApi extends TestApiGenerated {

    public TestApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class FetchRequestBuilder extends FetchRequestBuilderGenerated {
        public FetchRequestBuilder() {
            super();
        }
    }
}
