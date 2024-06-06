package com.konfigthis.carbonai.client.api;

import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.model.AddWebhookProps;
import com.konfigthis.carbonai.client.model.GenericSuccessResponse;
import com.konfigthis.carbonai.client.model.OrderDir;
import com.konfigthis.carbonai.client.model.Pagination;
import com.konfigthis.carbonai.client.model.Webhook;
import com.konfigthis.carbonai.client.model.WebhookFilters;
import com.konfigthis.carbonai.client.model.WebhookOrderByColumns;
import com.konfigthis.carbonai.client.model.WebhookQueryInput;
import com.konfigthis.carbonai.client.model.WebhookQueryResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WebhooksApi extends WebhooksApiGenerated {

    public WebhooksApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class AddUrlRequestBuilder extends AddUrlRequestBuilderGenerated {
        public AddUrlRequestBuilder(String url) {
            super(url);
        }
    }
    public class DeleteUrlRequestBuilder extends DeleteUrlRequestBuilderGenerated {
        public DeleteUrlRequestBuilder(Integer webhookId) {
            super(webhookId);
        }
    }
    public class UrlsRequestBuilder extends UrlsRequestBuilderGenerated {
        public UrlsRequestBuilder() {
            super();
        }
    }
}
