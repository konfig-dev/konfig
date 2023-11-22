package com.konfigthis.javamergeanyofstrings.client;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.assertNotNull;

public class JavaMergeAnyofStringsTest {
    static final String MOCK_SERVER_URL = "http://localhost:4075";
    static JavaMergeAnyofStringsClient client;

    @BeforeAll
    public static void setUp() throws Exception {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "YOUR API KEY";
        client = new JavaMergeAnyofStringsClient(configuration);
    }

    @Test
    public void testFetch() throws ApiException {
        Object response = client.test.fetch().execute();
        assertNotNull(response);
    }

}
