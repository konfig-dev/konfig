package com.konfigthis.client;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

public class SimpleTest {
    final String MOCK_SERVER_URL = "http://localhost:4010";

    @Test
    public void initClientTest() {
        Configuration configuration = new Configuration();
        Snaptrade client = new Snaptrade(configuration);
        assertNotNull(client);
    }
}
