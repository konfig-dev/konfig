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
            clientId: getenv("SNAPTRADE_CLIENT_ID"),
            consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
        );

        // 2) Check that the client is able to make a request to the API server.
        $response = $snaptrade->apiStatus->check();
        print_r($response);

        // 3) Create a new user on SnapTrade
        $userId = (string)time();
        $userId .= "-php-sdk";
        $registerResponse = $snaptrade->authentication->registerSnapTradeUser($userId);
        $userSecret = $registerResponse->getUserSecret();

        // 4) Get a redirect URI. Users will need this to connect
        // their brokerage to the SnapTrade server.
        // {'broker': 'ALPACA', 'immediateRedirect': True, 'connectionPortalVersion': 'v2'}
        $redirectUri = $snaptrade->authentication->loginSnapTradeUser($userId, $userSecret, 'ALPACA', true, SENTINEL_VALUE, SENTINEL_VALUE, SENTINEL_VALUE, 'v2');
        print_r($redirectUri);

        // 5) Delete the user
        $deletedResponse = $snaptrade->authentication->deleteSnapTradeUser($userId);
        print_r($deletedResponse);
    }

    public function testSslConfig()
    {
        $snaptrade = new \SnapTrade\Client(
            clientId: getenv("SNAPTRADE_CLIENT_ID"),
            consumerKey: getenv("SNAPTRADE_CONSUMER_KEY"),
            host: "https://expired.badssl.com/",
            verifySsl: false,
        );
        $result = $snaptrade->apiStatus->check();
        print_r($result);
    }

    public function testGetUserAccountQuotes()
    {
        $snaptrade = new \SnapTrade\Client(
            clientId: getenv("SNAPTRADE_CLIENT_ID"),
            consumerKey: getenv("SNAPTRADE_CONSUMER_KEY"),
        );
        $user_id = getenv("SNAPTRADE_TEST_USER_ID");
        $user_secret = getenv("SNAPTRADE_TEST_USER_SECRET");
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
        $snaptrade = new \SnapTrade\Client(
            clientId: getenv("SNAPTRADE_CLIENT_ID"),
            consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
        );
        $userId = getenv("SNAPTRADE_TEST_USER_ID");
        $userSecret = getenv("SNAPTRADE_TEST_USER_SECRET");
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
            clientId: getenv("SNAPTRADE_CLIENT_ID"),
            consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
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
