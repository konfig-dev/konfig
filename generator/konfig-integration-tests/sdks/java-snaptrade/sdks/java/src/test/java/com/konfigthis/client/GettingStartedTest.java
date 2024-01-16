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

        @Disabled
        @Test
        public void setPortfolioTargets() throws ApiException {
                Configuration configuration = new Configuration();
                configuration.host = "http://127.0.0.1:4026";
                configuration.clientId = "SNAPTRADE_CLIENT_ID";
                configuration.consumerKey = "SNAPTRADE_CONSUMER_KEY";
                Snaptrade snaptrade = new Snaptrade(configuration);
                UUID userId = UUID.randomUUID();
                UserIDandSecret userIDandSecret = snaptrade.authentication.registerSnapTradeUser()
                        .userId(userId.toString()).execute();
                List<TargetAsset> targetAsset = new ArrayList<>();
                targetAsset.add(new TargetAsset().symbol(new UniversalSymbol().symbol("AAPL")).percent(90));
                snaptrade.authentication.deleteSnapTradeUser(userIDandSecret.getUserId()).execute();

                snaptrade.trading.getOrderImpact("test", "test").units()
        }

        @Test
        public void gettingStartedTest() throws ApiException {
                // 1) Initialize default client with clientID and consumerKey
                Configuration configuration = new Configuration();
                configuration.host = "http://127.0.0.1:4026";
                configuration.clientId = "SNAPTRADE_CLIENT_ID";
                configuration.consumerKey = "SNAPTRADE_CONSUMER_KEY";
                Snaptrade snaptrade = new Snaptrade(configuration);

                // 2) Check that the client is able to make a request to the API server
                Status status = snaptrade.apiStatus.check().execute();
                System.out.printf("SnapTrade is online: %s\n", status.getOnline());

                // 3) Create a new user on SnapTrade
                // The userId should be provided by you and refer to permanent value such as a
                // database row ID
                UUID userId = UUID.randomUUID();
                UserIDandSecret userIDandSecret = snaptrade.authentication.registerSnapTradeUser()
                                .userId(userId.toString()).execute();

                new SnapTradeRegisterUserRequestBody().userId(userId.toString());
                // Note: A user secret is only generated once. It's required to access resources
                // for certain endpoints
                System.out.printf("userID: %s, userSecret: %s\n", userIDandSecret.getUserId(),
                                userIDandSecret.getUserSecret());

                // 4) Get a redirect URI. Users will need this to connect their brokerage to the
                // SnapTrade server
                Map response = (Map) snaptrade.authentication
                                .loginSnapTradeUser(userIDandSecret.getUserId(),
                                                userIDandSecret.getUserSecret())
                                .execute();
                System.out.println(response.get("redirectURI"));

                // 5) Query holdings and available brokerages
                List<AccountHoldings> holdings = snaptrade.accountInformation
                                .getAllUserHoldings(userIDandSecret.getUserId(),
                                                userIDandSecret.getUserSecret())
                                .execute();
                System.out.println(holdings);
                List<Account> accounts = snaptrade.accountInformation.listUserAccounts(userIDandSecret.getUserId(),
                                userIDandSecret.getUserSecret()).execute();
                System.out.println(accounts);
                List<Brokerage> brokerages = snaptrade.referenceData.listAllBrokerages().execute();
                System.out.println(brokerages);

                // 6) Deleting a user
                DeleteUserResponse deleteUserResponse = snaptrade.authentication
                                .deleteSnapTradeUser(userIDandSecret.getUserId()).execute();
                System.out.println(deleteUserResponse);
        }

}
