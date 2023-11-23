package com.konfigthis.javauseschematitleifpossible.client;

import com.konfigthis.javauseschematitleifpossible.client.model.AB;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.assertNotNull;

public class JavaUseSchemaTitleIfPossibleTest {
    static final String MOCK_SERVER_URL = "http://localhost:4044";
    static JavaUseSchemaTitleIfPossibleClient client;

    @BeforeAll
    public static void setUp() throws Exception {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "YOUR API KEY";
        client = new JavaUseSchemaTitleIfPossibleClient(configuration);
    }

    @Test
    public void testFetch() throws ApiException {
        AB response = client.test.fetch().execute();
        assertNotNull(response);
    }

}
