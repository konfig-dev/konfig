package com.konfigthis.javanullablerefusingallofschema.client;

import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;

public class SimpleTest {
    final String MOCK_SERVER_URL = "http://localhost:4010";

    @Test
    public void initClientTest() {
        Configuration configuration = new Configuration();
        configuration.host = "https://java-nullable-ref-using-all-of-schema.konfigthis.com";
        
        configuration.apiKey  = "YOUR API KEY";
        JavaNullableRefUsingAllOfSchemaClient client = new JavaNullableRefUsingAllOfSchemaClient(configuration);
        assertNotNull(client);
    }
}
