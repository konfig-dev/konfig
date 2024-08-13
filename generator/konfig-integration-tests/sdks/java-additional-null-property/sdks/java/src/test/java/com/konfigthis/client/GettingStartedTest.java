package com.konfigthis.client;

import com.konfigthis.client.model.ManualTradeAndImpact;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertNotNull;

import java.util.UUID;

public class GettingStartedTest {
        final String MOCK_SERVER_URL = "http://localhost:4107";

        @Test
        public void getOrderImpact() throws ApiException {
                Configuration configuration = new Configuration();
                configuration.clientId = "SNAPTRADE_CLIENT_ID";
                configuration.consumerKey = "SNAPTRADE_CONSUMER_KEY";
                configuration.host = MOCK_SERVER_URL;
                Snaptrade snaptrade = new Snaptrade(configuration);
                String userId = UUID.randomUUID().toString();
                String userSecret = UUID.randomUUID().toString();
                ManualTradeAndImpact result = snaptrade.trading.getOrderImpact(userId, userSecret).execute();
                assertNotNull(result);
        }

}
