package com.konfigthis.carbonai.client.api;

import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.model.TokenResponse;
import com.konfigthis.carbonai.client.model.WhiteLabelingResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AuthApi extends AuthApiGenerated {

    public AuthApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class GetAccessTokenRequestBuilder extends GetAccessTokenRequestBuilderGenerated {
        public GetAccessTokenRequestBuilder() {
            super();
        }
    }
    public class GetWhiteLabelingRequestBuilder extends GetWhiteLabelingRequestBuilderGenerated {
        public GetWhiteLabelingRequestBuilder() {
            super();
        }
    }
}
