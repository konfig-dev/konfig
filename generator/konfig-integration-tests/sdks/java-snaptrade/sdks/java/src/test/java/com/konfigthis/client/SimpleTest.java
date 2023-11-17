package com.konfigthis.client;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

public class SimpleTest {
    final String MOCK_SERVER_URL = "http://localhost:4010";

    @Test
    public void initClientTest() {
        Configuration configuration = new Configuration();
        configuration.host = "https://api.snaptrade.com/api/v1";
            configuration.clientId = System.getenv("SNAPTRADE_CLIENT_ID");
            configuration.consumerKey = System.getenv("SNAPTRADE_CONSUMER_KEY");
        
        Snaptrade client = new Snaptrade(configuration);
        assertNotNull(client);
    }
}
