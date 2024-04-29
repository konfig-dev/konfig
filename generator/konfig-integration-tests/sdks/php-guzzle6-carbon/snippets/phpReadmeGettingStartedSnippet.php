<?php
require_once(__DIR__ . '/vendor/autoload.php');

// 1) Get an access token for a customer
$carbon = new \Carbon\Client(
    apiKey: "API_KEY",
    customerId: "CUSTOMER_ID",
);

$result = $carbon->auth->getAccessToken();

# 2) Use the access token to authenticate moving forward
$carbon = new \Carbon\Client(accessToken: $token->getAccessToken());

# use SDK as usual
$whiteLabeling = $carbon->auth->getWhiteLabeling();
# etc.