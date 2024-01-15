package com.konfigthis.javanullablerefusingallofschema.client;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.assertNotNull;

public class JavaNullableRefUsingAllOfSchemaTest {
    static final String MOCK_SERVER_URL = "http://localhost:4080";
    static JavaNullableRefUsingAllOfSchemaClient client;

    @BeforeAll
    public static void setUp() throws Exception {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "YOUR API KEY";
        client = new JavaNullableRefUsingAllOfSchemaClient(configuration);
    }

    @Test
    public void testFetch() throws ApiException {
        Object response = client.test.fetch().execute();
        assertNotNull(response);
    }

}
