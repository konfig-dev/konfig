package com.konfigthis.client.api;

import com.konfigthis.client.ApiClient;
import com.konfigthis.client.model.OptionChainInner;
import com.konfigthis.client.model.OptionLeg;
import com.konfigthis.client.model.OptionsGetOptionStrategyRequest;
import com.konfigthis.client.model.OptionsPlaceOptionStrategyRequest;
import com.konfigthis.client.model.OptionsPosition;
import com.konfigthis.client.model.OrderTypeStrict;
import com.konfigthis.client.model.StrategyOrderRecord;
import com.konfigthis.client.model.StrategyQuotes;
import com.konfigthis.client.model.TimeInForceStrict;
import java.util.UUID;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OptionsApi extends OptionsApiGenerated {

    public OptionsApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class GetOptionStrategyRequestBuilder extends GetOptionStrategyRequestBuilderGenerated {
        public GetOptionStrategyRequestBuilder(UUID underlyingSymbolId, List<OptionLeg> legs, String strategyType, String userId, String userSecret, UUID accountId) {
            super(underlyingSymbolId, legs, strategyType, userId, userSecret, accountId);
        }
    }
    public class GetOptionsChainRequestBuilder extends GetOptionsChainRequestBuilderGenerated {
        public GetOptionsChainRequestBuilder(String userId, String userSecret, UUID accountId, UUID symbol) {
            super(userId, userSecret, accountId, symbol);
        }
    }
    public class GetOptionsStrategyQuoteRequestBuilder extends GetOptionsStrategyQuoteRequestBuilderGenerated {
        public GetOptionsStrategyQuoteRequestBuilder(String userId, String userSecret, UUID accountId, UUID optionStrategyId) {
            super(userId, userSecret, accountId, optionStrategyId);
        }
    }
    public class ListOptionHoldingsRequestBuilder extends ListOptionHoldingsRequestBuilderGenerated {
        public ListOptionHoldingsRequestBuilder(String userId, String userSecret, UUID accountId) {
            super(userId, userSecret, accountId);
        }
    }
    public class PlaceOptionStrategyRequestBuilder extends PlaceOptionStrategyRequestBuilderGenerated {
        public PlaceOptionStrategyRequestBuilder(OrderTypeStrict orderType, TimeInForceStrict timeInForce, String userId, String userSecret, UUID accountId, UUID optionStrategyId) {
            super(orderType, timeInForce, userId, userSecret, accountId, optionStrategyId);
        }
    }
}
