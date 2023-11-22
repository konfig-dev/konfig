package com.konfigthis.javamergeanyofstrings.client;

import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;

public class SimpleTest {
    final String MOCK_SERVER_URL = "http://localhost:4010";

    @Test
    public void initClientTest() {
        Configuration configuration = new Configuration();
        configuration.host = "https://java-merge-anyof-strings.konfigthis.com";
        
        configuration.apiKey  = "YOUR API KEY";
        JavaMergeAnyofStringsClient client = new JavaMergeAnyofStringsClient(configuration);
        assertNotNull(client);
    }
}
