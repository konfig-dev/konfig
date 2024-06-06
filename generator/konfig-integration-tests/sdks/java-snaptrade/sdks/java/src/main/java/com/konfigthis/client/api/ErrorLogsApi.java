package com.konfigthis.client.api;

import com.konfigthis.client.ApiClient;
import com.konfigthis.client.model.UserErrorLog;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ErrorLogsApi extends ErrorLogsApiGenerated {

    public ErrorLogsApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class ListUserErrorsRequestBuilder extends ListUserErrorsRequestBuilderGenerated {
        public ListUserErrorsRequestBuilder(String userId, String userSecret) {
            super(userId, userSecret);
        }
    }
}
