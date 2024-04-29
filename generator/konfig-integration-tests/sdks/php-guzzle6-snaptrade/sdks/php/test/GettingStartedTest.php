<?php

namespace SnapTrade\Test\Api;


use PHPUnit\Framework\TestCase;


class GettingStartedTest extends TestCase
{

    /**
     * Setup before running any test cases
     */
    public static function setUpBeforeClass(): void
    {
    }

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
    }

    /**
     * Clean up after running all test cases
     */
    public static function tearDownAfterClass(): void
    {
    }

    /**
     * Test case for getting started flow
     *
     */
    public function testGettingStarted()
    {
        // 1) Initialize a client with your clientID and consumerKey.
        $snaptrade = new \SnapTrade\Client(
            clientId: "SNAPTRADE_CLIENT_ID",
            consumerKey: "SNAPTRADE_CONSUMER_KEY",
            host: "http://127.0.0.1:4070"
        );

        // 2) Check that the client is able to make a request to the API server.
        $response = $snaptrade->apiStatus->check();
        print_r($response);

        // 3) Create a new user on SnapTrade
        $userId = "testUser";
        $registerResponse = $snaptrade->authentication->registerSnapTradeUser($userId);
        $userSecret = $registerResponse->getUserSecret();

        // 4) Get a redirect URI. Users will need this to connect
        // their brokerage to the SnapTrade server.
        $redirectUri = $snaptrade->authentication->loginSnapTradeUser($userId, $userSecret);
        print_r($redirectUri);

        // 5) Delete the user
        $deletedResponse = $snaptrade->authentication->deleteSnapTradeUser($userId);
        print_r($deletedResponse);
    }

    public function testSslConfig()
    {
        $snaptrade = new \SnapTrade\Client(
            clientId: "SNAPTRADE_CLIENT_ID",
            consumerKey: "SNAPTRADE_CONSUMER_KEY",
            host: "http://127.0.0.1:4070",
            verifySsl: false,
        );
        $result = $snaptrade->apiStatus->check();
        print_r($result);
    }

    public function testGetUserAccountQuotes()
    {
        $snaptrade = new \SnapTrade\Client(
            clientId: "SNAPTRADE_CLIENT_ID",
            consumerKey: "SNAPTRADE_CONSUMER_KEY",
            host: "http://127.0.0.1:4070"
        );
        $user_id = "SNAPTRADE_TEST_USER_ID";
        $user_secret = "SNAPTRADE_TEST_USER_SECRET";
        $holdings = $snaptrade->accountInformation->getAllUserHoldings($user_id, $user_secret);
        $account_id = $holdings[0]->getAccount()->getId();
        $result = $snaptrade->trading->getUserAccountQuotes(
            user_id: $user_id,
            user_secret: $user_secret,
            account_id: $account_id,
            symbols: "AAPL",
            use_ticker: true
        );
        print_r($result);
        $this->assertTrue($result != null, "Response must not be null");
    }

    public function testGetUserAccountBalance()
    {
        $this->markTestSkipped("Mock server error: Cannot serialize complex objects as text.");
        $snaptrade = new \SnapTrade\Client(
            clientId: "SNAPTRADE_CLIENT_ID",
            consumerKey: "SNAPTRADE_CONSUMER_KEY",
            host: "http://127.0.0.1:4070"
        );
        $userId = "SNAPTRADE_TEST_USER_ID";
        $userSecret = "SNAPTRADE_TEST_USER_SECRET";
        $accounts = $snaptrade->accountInformation->listUserAccounts(
            $userId,
            $userSecret
        );
        $response = $snaptrade->accountInformation->getUserAccountBalance($userId, $userSecret, $accounts[0]->getId());
        print_r($response);
    }

    /**
     * Test case for setting portfolio targets
     *
     */
    public function testSetPortfolioTargets()
    {
        $this->markTestSkipped("Can't use listAssetClasses to get asset id");

        // 1) Initialize a client with your clientID and consumerKey.
        $snaptrade = new \SnapTrade\Client(
            clientId: "SNAPTRADE_CLIENT_ID",
            consumerKey: "SNAPTRADE_CONSUMER_KEY",
            host: "http://127.0.0.1:4070"
        );

        // 2) Check that the client is able to make a request to the API server.
        $response = $snaptrade->apiStatus->check();
        print_r($response);

        // 3) Create a new user on SnapTrade
        $userId = (string)time();
        $registerResponse = $snaptrade->authentication->registerSnapTradeUser($userId);
        $userSecret = $registerResponse->getUserSecret();

        // 4) Delete the user
        $deletedResponse = $snaptrade->authentication->deleteSnapTradeUser($userId);
        print_r($deletedResponse);
    }
}
