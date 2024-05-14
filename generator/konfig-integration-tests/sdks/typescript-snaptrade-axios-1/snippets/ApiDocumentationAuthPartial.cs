// Configure custom BasePath if desired
// client.SetBasePath("https://api.snaptrade.com/api/v1");
client.SetClientId(System.Environment.GetEnvironmentVariable("SNAPTRADE_CLIENT_ID"));
client.SetConsumerKey(System.Environment.GetEnvironmentVariable("SNAPTRADE_CONSUMER_KEY"));