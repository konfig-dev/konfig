package com.konfigthis.javamergedschemashaveencapsulatingname.client;

import com.konfigthis.javamergedschemashaveencapsulatingname.client.model.CSFLHResponse;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.assertNotNull;

public class JavaMergedSchemasHaveEncapsulatingNameTest {
    static final String MOCK_SERVER_URL = "http://localhost:4058";
    static JavaMergedSchemasHaveEncapsulatingNameClient client;

    @BeforeAll
    public static void setUp() throws Exception {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "YOUR API KEY";
        client = new JavaMergedSchemasHaveEncapsulatingNameClient(configuration);
    }

    @Test
    public void testFetch() throws ApiException {
        CSFLHResponse response = client.test.fetch().execute();
        assertNotNull(response);
    }

}
