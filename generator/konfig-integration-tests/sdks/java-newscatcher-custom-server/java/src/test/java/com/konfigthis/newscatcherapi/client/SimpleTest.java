package com.konfigthis.newscatcherapi.client;

import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;

public class SimpleTest {
    final String MOCK_SERVER_URL = "http://localhost:4010";

    @Test
    public void initClientTest() {
        Configuration configuration = new Configuration();
        configuration.host = "https://v3-api.newscatcherapi.com";
        
        configuration.apiKey  = "YOUR API KEY";
        Newscatcher client = new Newscatcher(configuration);
        assertNotNull(client);
    }
}
