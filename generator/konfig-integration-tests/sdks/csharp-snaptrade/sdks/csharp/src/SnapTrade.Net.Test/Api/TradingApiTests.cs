/*
 * SnapTrade
 *
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 * Generated by: https://konfigthis.com
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using Xunit;

using SnapTrade.Net.Client;
using SnapTrade.Net.Api;
using SnapTrade.Net.Model;

namespace SnapTrade.Net.Test.Api
{
    /// <summary>
    ///  Class for testing TradingApi
    /// </summary>
    public class TradingApiTests : IDisposable
    {
        private Snaptrade client;

        public TradingApiTests()
        {
            client = new Snaptrade();
            client.SetBasePath("http://127.0.0.1:4032");
            // Configure custom BasePath if desired
            // client.SetBasePath("https://api.snaptrade.com/api/v1");
            client.SetClientId("test");
            client.SetConsumerKey("test");

        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test CancelUserAccountOrder
        /// </summary>
        [Fact]
        public void CancelUserAccountOrderTest()
        {
            var userId = "userId_example";
            var userSecret = "userSecret_example";
            var accountId = "accountId_example"; // The ID of the account to cancel the order in.
            var brokerageOrderId = "2bcd7cc3-e922-4976-bce1-9858296801c3";
            
            // The Order ID to be canceled
            var tradingCancelUserAccountOrderRequest = new TradingCancelUserAccountOrderRequest(
                brokerageOrderId
            );
            
            try
            {
                // Cancel open order in account
                AccountOrderRecord result = client.Trading.CancelUserAccountOrder(userId, userSecret, accountId, tradingCancelUserAccountOrderRequest);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling TradingApi.CancelUserAccountOrder: " + e.Message);
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e.Response.StatusCode);
                Console.WriteLine(e.Response.RawContent);
                Console.WriteLine(e.InnerException);
            }
        }

        /// <summary>
        /// Test GetOrderImpact
        /// </summary>
        [Fact]
        public void GetOrderImpactTest()
        {
            var userId = "userId_example";
            var userSecret = "userSecret_example";
            var accountId = "2bcd7cc3-e922-4976-bce1-9858296801c3";
            var action = ModelAction.BUY;
            var orderType = OrderType.Limit;
            var price = 31.33; // Trade Price if limit or stop limit order
            var stop = 31.33; // Stop Price. If stop loss or stop limit order, the price to trigger the stop
            var timeInForce = TimeInForce.Day;
            var units = default(double); // Trade Units
            var universalSymbolId = "2bcd7cc3-e922-4976-bce1-9858296801c3";
            
            var manualTradeForm = new ManualTradeForm(
                accountId,
                action,
                orderType,
                price,
                stop,
                timeInForce,
                units,
                universalSymbolId
            );
            
            try
            {
                // Check impact of trades on account.
                ManualTradeAndImpact result = client.Trading.GetOrderImpact(userId, userSecret, manualTradeForm);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling TradingApi.GetOrderImpact: " + e.Message);
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e.Response.StatusCode);
                Console.WriteLine(e.Response.RawContent);
                Console.WriteLine(e.InnerException);
            }
        }

        /// <summary>
        /// Test GetUserAccountQuotes
        /// </summary>
        [Fact]
        public void GetUserAccountQuotesTest()
        {
            var userId = "userId_example";
            var userSecret = "userSecret_example";
            var symbols = "symbols_example"; // List of universal_symbol_id or tickers to get quotes for.
            var accountId = "accountId_example"; // The ID of the account to get quotes.
            var useTicker = true; // Should be set to True if providing tickers. (optional) 
            
            try
            {
                // Get symbol quotes
                List<SymbolsQuotesInner> result = client.Trading.GetUserAccountQuotes(userId, userSecret, symbols, accountId, useTicker);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling TradingApi.GetUserAccountQuotes: " + e.Message);
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e.Response.StatusCode);
                Console.WriteLine(e.Response.RawContent);
                Console.WriteLine(e.InnerException);
            }
        }

        /// <summary>
        /// Test PlaceForceOrder
        /// </summary>
        [Fact]
        public void PlaceForceOrderTest()
        {
            var userId = "userId_example";
            var userSecret = "userSecret_example";
            var accountId = "2bcd7cc3-e922-4976-bce1-9858296801c3";
            var action = ModelAction.BUY;
            var orderType = OrderType.Limit;
            var price = 31.33; // Trade Price if limit or stop limit order
            var stop = 31.33; // Stop Price. If stop loss or stop limit order, the price to trigger the stop
            var timeInForce = TimeInForce.Day;
            var units = default(double); // Trade Units
            var universalSymbolId = "2bcd7cc3-e922-4976-bce1-9858296801c3";
            
            var manualTradeForm = new ManualTradeForm(
                accountId,
                action,
                orderType,
                price,
                stop,
                timeInForce,
                units,
                universalSymbolId
            );
            
            try
            {
                // Place a trade with NO validation.
                AccountOrderRecord result = client.Trading.PlaceForceOrder(userId, userSecret, manualTradeForm);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling TradingApi.PlaceForceOrder: " + e.Message);
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e.Response.StatusCode);
                Console.WriteLine(e.Response.RawContent);
                Console.WriteLine(e.InnerException);
            }
        }

        /// <summary>
        /// Test PlaceOCOOrder
        /// </summary>
        [Fact]
        public void PlaceOCOOrderTest()
        {
            var userId = "userId_example";
            var userSecret = "userSecret_example";
            var firstTradeId = "firstTradeId_example"; // The ID of first trade object obtained from trade/impact endpoint
            var secondTradeId = "secondTradeId_example"; // The ID of second trade object obtained from trade/impact endpoint
            
            var tradingPlaceOCOOrderRequest = new TradingPlaceOCOOrderRequest(
                firstTradeId,
                secondTradeId
            );
            
            try
            {
                // Place a OCO (One Cancels Other) order
                AccountOrderRecord result = client.Trading.PlaceOCOOrder(userId, userSecret, tradingPlaceOCOOrderRequest);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling TradingApi.PlaceOCOOrder: " + e.Message);
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e.Response.StatusCode);
                Console.WriteLine(e.Response.RawContent);
                Console.WriteLine(e.InnerException);
            }
        }

        /// <summary>
        /// Test PlaceOrder
        /// </summary>
        [Fact]
        public void PlaceOrderTest()
        {
            var tradeId = "tradeId_example"; // The ID of trade object obtained from trade/impact endpoint
            var userId = "userId_example";
            var userSecret = "userSecret_example";
            
            try
            {
                // Place order
                AccountOrderRecord result = client.Trading.PlaceOrder(tradeId, userId, userSecret);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling TradingApi.PlaceOrder: " + e.Message);
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e.Response.StatusCode);
                Console.WriteLine(e.Response.RawContent);
                Console.WriteLine(e.InnerException);
            }
        }
    }
}