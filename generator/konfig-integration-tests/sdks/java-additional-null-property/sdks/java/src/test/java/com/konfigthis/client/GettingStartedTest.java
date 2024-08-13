package com.konfigthis.client;

import com.konfigthis.client.model.Account;
import com.konfigthis.client.model.AccountHoldings;
import com.konfigthis.client.model.Brokerage;
import com.konfigthis.client.model.DeleteUserResponse;
import com.konfigthis.client.model.PortfolioGroup;
import com.konfigthis.client.model.SnapTradeRegisterUserRequestBody;
import com.konfigthis.client.model.Status;
import com.konfigthis.client.model.TargetAsset;
import com.konfigthis.client.model.UniversalSymbol;
import com.konfigthis.client.model.UserIDandSecret;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static org.junit.Assert.assertNotNull;

public class GettingStartedTest {
        final String MOCK_SERVER_URL = "http://localhost:4107";

        @Disabled
        @Test
        public void setPortfolioTargets() throws ApiException {
                Configuration configuration = new Configuration();
                configuration.clientId = "SNAPTRADE_CLIENT_ID";
                configuration.consumerKey = "SNAPTRADE_CONSUMER_KEY";
                configuration.host = MOCK_SERVER_URL;
                Snaptrade snaptrade = new Snaptrade(configuration);
                UUID userId = UUID.randomUUID();
                UserIDandSecret userIDandSecret = snaptrade.authentication.registerSnapTradeUser()
                        .userId(userId.toString()).execute();
                List<TargetAsset> targetAsset = new ArrayList<>();
                targetAsset.add(new TargetAsset().symbol(new UniversalSymbol().symbol("AAPL")).percent(90));
                snaptrade.authentication.deleteSnapTradeUser(userIDandSecret.getUserId()).execute();
        }

}
