package com.konfigthis.carbonai.client;

import static org.junit.Assert.assertNotNull;
import com.konfigthis.carbonai.client.model.TokenResponse;
import com.konfigthis.carbonai.client.model.WhiteLabelingResponse;
import com.konfigthis.carbonai.client.model.OrganizationUserDataSourceResponse;
import com.konfigthis.carbonai.client.model.Pagination;
import com.konfigthis.carbonai.client.model.OrganizationUserDataSourceFilters;
import com.konfigthis.carbonai.client.model.DataSourceTypeNullable;
import com.konfigthis.carbonai.client.model.OrganizationUserDataSourceOrderByColumns;
import com.konfigthis.carbonai.client.model.OrderDir;
import com.konfigthis.carbonai.client.model.GenericSuccessResponse;
import com.konfigthis.carbonai.client.model.S3GetFileInput;
import com.konfigthis.carbonai.client.model.UserFile;

import java.util.ArrayList;
import java.util.List;
import java.io.File;
import org.junit.jupiter.api.Test;

public class SimpleTest {
    final String MOCK_SERVER_URL = "http://localhost:4052";

    @Test
    public void initClientTest() {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey  = "YOUR API KEY";
        configuration.customerId  = "YOUR API KEY";
        Carbon client = new Carbon(configuration);
        assertNotNull(client);
    }

    @Test
    public void authTest() {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "API KEY";
        configuration.customerId = "CUSTOMER ID";
        Carbon client = new Carbon(configuration);

        TokenResponse tr = null;
        try {
            tr = client.auth.getAccessToken().execute();
        } catch (ApiException e) {}
        assertNotNull(tr);
        String token = tr.getAccessToken();
        assertNotNull(token);

        Configuration configuration2 = new Configuration();
        configuration2.host = MOCK_SERVER_URL;
        configuration2.accessToken = token;
        Carbon client2 = new Carbon(configuration2);
        WhiteLabelingResponse wlr = null;
        try {
            wlr = client2.auth.getWhiteLabeling().execute();
        } catch (ApiException e) {}
        assertNotNull(wlr);
    }

    @Test
    public void endpointTest() {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "API KEY";
        configuration.customerId = "CUSTOMER ID";
        Carbon client = new Carbon(configuration);

        OrganizationUserDataSourceResponse oudsr = null;
        try {
            oudsr = client.dataSources.queryUserDataSources()
                                       .pagination(new Pagination().limit(10).offset(0))
                                       .orderBy(OrganizationUserDataSourceOrderByColumns.CREATED_AT)
                                       .orderDir(OrderDir.DESC)
                                       .filters(new OrganizationUserDataSourceFilters().source(DataSourceTypeNullable.GOOGLE_DRIVE))
                                       .execute();
        } catch (ApiException e) {}
        assertNotNull(oudsr);

        GenericSuccessResponse gsr = null;
        List<S3GetFileInput> s3GetFileInput = new ArrayList<S3GetFileInput>();
        s3GetFileInput.add(new S3GetFileInput().id("ID").bucket("BUCKET"));
        try {
            gsr = client.integrations.syncS3Files(s3GetFileInput).execute();
        } catch (ApiException e) {}
        assertNotNull(gsr);

        UserFile uf = null;
        File file = new File("README.md");
        try {
            uf = client.files.upload(file).execute();
        } catch (ApiException e) {}
        assertNotNull(uf);
    }
}
