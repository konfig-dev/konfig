package com.konfigthis.client.api;

import com.konfigthis.client.ApiClient;
import com.konfigthis.client.model.Brokerage;
import com.konfigthis.client.model.BrokerageAuthorizationTypeReadOnly;
import com.konfigthis.client.model.Currency;
import com.konfigthis.client.model.Exchange;
import com.konfigthis.client.model.ExchangeRatePairs;
import com.konfigthis.client.model.PartnerData;
import com.konfigthis.client.model.SecurityType;
import com.konfigthis.client.model.SymbolQuery;
import java.util.UUID;
import com.konfigthis.client.model.UniversalSymbol;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ReferenceDataApi extends ReferenceDataApiGenerated {

    public ReferenceDataApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class GetCurrencyExchangeRatePairRequestBuilder extends GetCurrencyExchangeRatePairRequestBuilderGenerated {
        public GetCurrencyExchangeRatePairRequestBuilder(String currencyPair) {
            super(currencyPair);
        }
    }
    public class GetPartnerInfoRequestBuilder extends GetPartnerInfoRequestBuilderGenerated {
        public GetPartnerInfoRequestBuilder() {
            super();
        }
    }
    public class GetSecurityTypesRequestBuilder extends GetSecurityTypesRequestBuilderGenerated {
        public GetSecurityTypesRequestBuilder() {
            super();
        }
    }
    public class GetStockExchangesRequestBuilder extends GetStockExchangesRequestBuilderGenerated {
        public GetStockExchangesRequestBuilder() {
            super();
        }
    }
    public class GetSymbolsRequestBuilder extends GetSymbolsRequestBuilderGenerated {
        public GetSymbolsRequestBuilder() {
            super();
        }
    }
    public class GetSymbolsByTickerRequestBuilder extends GetSymbolsByTickerRequestBuilderGenerated {
        public GetSymbolsByTickerRequestBuilder(String query) {
            super(query);
        }
    }
    public class ListAllBrokerageAuthorizationTypeRequestBuilder extends ListAllBrokerageAuthorizationTypeRequestBuilderGenerated {
        public ListAllBrokerageAuthorizationTypeRequestBuilder() {
            super();
        }
    }
    public class ListAllBrokeragesRequestBuilder extends ListAllBrokeragesRequestBuilderGenerated {
        public ListAllBrokeragesRequestBuilder() {
            super();
        }
    }
    public class ListAllCurrenciesRequestBuilder extends ListAllCurrenciesRequestBuilderGenerated {
        public ListAllCurrenciesRequestBuilder() {
            super();
        }
    }
    public class ListAllCurrenciesRatesRequestBuilder extends ListAllCurrenciesRatesRequestBuilderGenerated {
        public ListAllCurrenciesRatesRequestBuilder() {
            super();
        }
    }
    public class SymbolSearchUserAccountRequestBuilder extends SymbolSearchUserAccountRequestBuilderGenerated {
        public SymbolSearchUserAccountRequestBuilder(String userId, String userSecret, UUID accountId) {
            super(userId, userSecret, accountId);
        }
    }
}
