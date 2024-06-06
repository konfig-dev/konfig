package com.konfigthis.newscatcherapi.client;

import java.util.List;
import java.util.Map;

public class ApiClientCustom {

    protected void requestBeforeHook(String baseUrl, String path, String method, List<Pair> queryParams,
                                     List<Pair> collectionQueryParams, Object body, Map<String, String> headerParams,
                                     Map<String, String> cookieParams, Map<String, Object> formParams,
                                     String[] authNames, ApiClient client) {
    }

    protected void requestAfterHook(String url, String path, String method, List<Pair> queryParams,
                                     List<Pair> collectionQueryParams, Object body, Map<String, String> headerParams,
                                     Map<String, String> cookieParams, Map<String, Object> formParams,
                                     String[] authNames, String payload, ApiClient client) {
    }

}
