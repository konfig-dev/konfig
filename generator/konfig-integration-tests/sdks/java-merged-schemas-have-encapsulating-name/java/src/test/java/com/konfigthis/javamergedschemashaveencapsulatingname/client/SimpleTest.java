package com.konfigthis.javamergedschemashaveencapsulatingname.client;

import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;

public class SimpleTest {
    final String MOCK_SERVER_URL = "http://localhost:4010";

    @Test
    public void initClientTest() {
        Configuration configuration = new Configuration();
        configuration.host = "https://java-merged-schemas-have-encapsulating-name.konfigthis.com";
        
        configuration.apiKey  = "YOUR API KEY";
        JavaMergedSchemasHaveEncapsulatingNameClient client = new JavaMergedSchemasHaveEncapsulatingNameClient(configuration);
        assertNotNull(client);
    }
}
