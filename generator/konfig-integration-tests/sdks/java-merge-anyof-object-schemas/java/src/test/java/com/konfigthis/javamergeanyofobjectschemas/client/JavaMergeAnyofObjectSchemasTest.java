package com.konfigthis.javamergeanyofobjectschemas.client;

import com.konfigthis.javamergeanyofobjectschemas.client.model.AOrAA;
import com.konfigthis.javamergeanyofobjectschemas.client.model.AOrBOrC;
import com.konfigthis.javamergeanyofobjectschemas.client.model.BOrBB;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

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

    @Test
    public void testMergeSame() throws ApiException {
        BOrBB response = client.test.mergeSame().execute();
        assertNotNull(response);
        assertNotNull(response.getB());
        // assert getB() returns instanceof String
        assertTrue(response.getB() instanceof String);
    }

    @Test
    public void testMergeDifferent() throws ApiException {
        AOrAA response = client.test.mergeDifferent().execute();
        assertNotNull(response);
        assertNotNull(response.getA());
    }

}
