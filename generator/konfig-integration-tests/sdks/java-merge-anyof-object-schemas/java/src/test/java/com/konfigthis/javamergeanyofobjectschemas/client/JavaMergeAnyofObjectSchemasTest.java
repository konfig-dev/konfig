package com.konfigthis.javamergeanyofobjectschemas.client;

import com.konfigthis.javamergeanyofobjectschemas.client.model.AOrBOrC;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.assertNotNull;

public class JavaMergeAnyofObjectSchemasTest {
    static final String MOCK_SERVER_URL = "http://localhost:4034";
    static JavaMergeAnyofObjectSchemasClient client;

    @BeforeAll
    public static void setUp() throws Exception {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "YOUR API KEY";
        client = new JavaMergeAnyofObjectSchemasClient(configuration);
    }

    @Test
    public void testFetch() throws ApiException {
        AOrBOrC response = client.test.fetch().execute();
        assertNotNull(response);
        response.getA();
        response.getB();
        response.getC();
    }

}
