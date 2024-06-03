package com.konfigthis.javaapiexceptioncontainsresponseheaders.client;

import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;

public class SimpleTest {
    final String MOCK_SERVER_URL = "http://localhost:4010";

    @Test
    public void initClientTest() {
        Configuration configuration = new Configuration();
        configuration.host = "https://java-api-exception-contains-response-headers.konfigthis.com";
        
        configuration.apiKey  = "YOUR API KEY";
        JavaApiExceptionContainsResponseHeadersClient client = new JavaApiExceptionContainsResponseHeadersClient(configuration);
        assertNotNull(client);
    }
}
