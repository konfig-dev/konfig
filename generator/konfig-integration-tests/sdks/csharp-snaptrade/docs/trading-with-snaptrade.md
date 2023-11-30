# Trading with SnapTrade

## To trade with SnapTrade:

> 🚧 Soft Rate Limit
>
> We recommend that you limit trade requests to 1 trade per second per account to maximize the chances that they are all executed without error.



1. Find the universal_symbol_id of the security you want to trade using :api[ReferenceData_symbolSearchUserAccount] with the users account  
   This will lookup tradeable securities based on the account you want to place the trade in. You will need to use this id in step 2.
2. Either:  
   Use order impact to present the user with the information needed to confirm the trade, as well as check to make sure the trade is valid: :api[Trading_getOrderImpact] 
   After getting impact, you use this endpoint to place the trade with the trade id: :api[Trading_placeOrder]  
   OR
   If you don't want to have any validation or impact check you can use this endpoint instead of impact/place: :api[Trading_placeForceOrder] 

## Create a trading connection

By default connections are created with read-only permissions. To create a trading-enabled connection set the `connectionType` body parameter to `trade` when calling the :api[Authentication_loginSnapTradeUser] endpoint. 

## Enable trading for existing connections

To enable trading for an existing connection you will have to ask the user to re-authorize access. To generate the re-authorize redirect URL set the `reconnect` body parameter to the ID of the existing connection when calling the :api[Authentication_loginSnapTradeUser] along with `connectionType=trade`.
