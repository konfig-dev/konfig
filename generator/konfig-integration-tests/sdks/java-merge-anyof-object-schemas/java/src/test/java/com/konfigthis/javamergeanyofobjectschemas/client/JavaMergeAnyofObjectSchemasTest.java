package com.konfigthis.javamergeanyofobjectschemas.client;

import com.konfigthis.javamergeanyofobjectschemas.client.model.A1;
import com.konfigthis.javamergeanyofobjectschemas.client.model.ABC;
import com.konfigthis.javamergeanyofobjectschemas.client.model.B1;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.*;

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
        ABC response = client.test.fetch().execute();
        assertNotNull(response);
        response.getA();
        response.getB();
        response.getC();
    }

    @Test
    public void testMergeSame() throws ApiException {
        B1 response = client.test.mergeSame().execute();
        assertNotNull(response);
        assertNull(response.getB());
    }

    @Test
    public void testMergeDifferent() throws ApiException {
        A1 response = client.test.mergeDifferent().execute();
        assertNotNull(response);
        assertNotNull(response.getA());
    }

}
