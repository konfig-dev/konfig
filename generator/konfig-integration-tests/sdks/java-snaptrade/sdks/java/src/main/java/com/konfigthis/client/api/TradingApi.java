package com.konfigthis.client.api;

import com.konfigthis.client.ApiClient;
import com.konfigthis.client.model.AccountOrderRecord;
import com.konfigthis.client.model.Action;
import com.konfigthis.client.model.ManualTradeAndImpact;
import com.konfigthis.client.model.ManualTradeForm;
import com.konfigthis.client.model.OrderType;
import com.konfigthis.client.model.SymbolsQuotesInner;
import com.konfigthis.client.model.TimeInForceStrict;
import com.konfigthis.client.model.TradingCancelUserAccountOrderRequest;
import com.konfigthis.client.model.TradingPlaceOCOOrderRequest;
import java.util.UUID;
import com.konfigthis.client.model.ValidatedTradeBody;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TradingApi extends TradingApiGenerated {

    public TradingApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class CancelUserAccountOrderRequestBuilder extends CancelUserAccountOrderRequestBuilderGenerated {
        public CancelUserAccountOrderRequestBuilder(String userId, String userSecret, UUID accountId) {
            super(userId, userSecret, accountId);
        }
    }
    public class GetOrderImpactRequestBuilder extends GetOrderImpactRequestBuilderGenerated {
        public GetOrderImpactRequestBuilder(String userId, String userSecret) {
            super(userId, userSecret);
        }
    }
    public class GetUserAccountQuotesRequestBuilder extends GetUserAccountQuotesRequestBuilderGenerated {
        public GetUserAccountQuotesRequestBuilder(String userId, String userSecret, String symbols, UUID accountId) {
            super(userId, userSecret, symbols, accountId);
        }
    }
    public class PlaceForceOrderRequestBuilder extends PlaceForceOrderRequestBuilderGenerated {
        public PlaceForceOrderRequestBuilder(String userId, String userSecret) {
            super(userId, userSecret);
        }
    }
    public class PlaceOCOOrderRequestBuilder extends PlaceOCOOrderRequestBuilderGenerated {
        public PlaceOCOOrderRequestBuilder(String userId, String userSecret) {
            super(userId, userSecret);
        }
    }
    public class PlaceOrderRequestBuilder extends PlaceOrderRequestBuilderGenerated {
        public PlaceOrderRequestBuilder(UUID tradeId, String userId, String userSecret) {
            super(tradeId, userId, userSecret);
        }
    }
}
