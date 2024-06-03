package com.konfigthis.javaapiexceptioncontainsresponseheaders.client;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.assertTrue;

public class JavaApiExceptionContainsResponseHeadersTest {
    static final String MOCK_SERVER_URL = "http://localhost:4057";
    static JavaApiExceptionContainsResponseHeadersClient client;

    @BeforeAll
    public static void setUp() throws Exception {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "YOUR API KEY";
        client = new JavaApiExceptionContainsResponseHeadersClient(configuration);
    }

    @Test
    public void testFetch() throws ApiException {
        try {
            client.test.fetch().execute();
            assertTrue(false);
        } catch (ApiException e) {
            assertTrue(e.toString().contains("HTTP response headers:"));
        }
    }
}
