package com.konfigthis.javamergingschemaswithref.client;

import com.konfigthis.javamergingschemaswithref.client.model.AOrAA;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.assertNotNull;

public class JavaMergingSchemasWithRefTest {
    static final String MOCK_SERVER_URL = "http://localhost:4036";
    static JavaMergingSchemasWithRefClient client;

    @BeforeAll
    public static void setUp() throws Exception {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "YOUR API KEY";
        client = new JavaMergingSchemasWithRefClient(configuration);
    }

    @Test
    public void testFetch() throws ApiException {
        AOrAA response = client.test.fetch().execute();
        assertNotNull(response);
        assertNotNull(response.getA());
    }

}
