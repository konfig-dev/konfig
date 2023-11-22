package com.konfigthis.javamergingschemaswithref.client;

import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;

public class SimpleTest {
    final String MOCK_SERVER_URL = "http://localhost:4010";

    @Test
    public void initClientTest() {
        Configuration configuration = new Configuration();
        configuration.host = "https://java-merging-schemas-with-ref.konfigthis.com";
        
        configuration.apiKey  = "YOUR API KEY";
        JavaMergingSchemasWithRefClient client = new JavaMergingSchemasWithRefClient(configuration);
        assertNotNull(client);
    }
}
