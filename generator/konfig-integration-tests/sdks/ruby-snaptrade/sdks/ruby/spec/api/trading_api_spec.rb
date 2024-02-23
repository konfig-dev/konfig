=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'

# Unit tests for SnapTrade::TradingApi
describe 'TradingApi' do
  before do
    # run before each test
    @api_instance = SnapTrade::TradingApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of TradingApi' do
    it 'should create an instance of TradingApi' do
      expect(@api_instance).to be_instance_of(SnapTrade::TradingApi)
    end
  end

  # unit tests for cancel_user_account_order
  # Cancel open order in account
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to cancel the order in.
  # @param trading_cancel_user_account_order_request The Order ID to be canceled
  # @param [Hash] opts the optional parameters
  # @return [AccountOrderRecord]
  describe 'cancel_user_account_order test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_order_impact
  # Check impact of trades on account.
  # @param user_id 
  # @param user_secret 
  # @param manual_trade_form 
  # @param [Hash] opts the optional parameters
  # @return [ManualTradeAndImpact]
  describe 'get_order_impact test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user_account_quotes
  # Get symbol quotes
  # @param user_id 
  # @param user_secret 
  # @param symbols List of universal_symbol_id or tickers to get quotes for.
  # @param account_id The ID of the account to get quotes.
  # @param [Hash] opts the optional parameters
  # @option opts [Boolean] :use_ticker Should be set to True if providing tickers.
  # @return [Array<SymbolsQuotesInner>]
  describe 'get_user_account_quotes test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for place_force_order
  # Place a trade with NO validation.
  # @param user_id 
  # @param user_secret 
  # @param manual_trade_form 
  # @param [Hash] opts the optional parameters
  # @return [AccountOrderRecord]
  describe 'place_force_order test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for place_oco_order
  # Place a OCO (One Cancels Other) order
  # @param user_id 
  # @param user_secret 
  # @param trading_place_oco_order_request 
  # @param [Hash] opts the optional parameters
  # @return [AccountOrderRecord]
  describe 'place_oco_order test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for place_order
  # Place order
  # @param trade_id The ID of trade object obtained from trade/impact endpoint
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [AccountOrderRecord]
  describe 'place_order test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
