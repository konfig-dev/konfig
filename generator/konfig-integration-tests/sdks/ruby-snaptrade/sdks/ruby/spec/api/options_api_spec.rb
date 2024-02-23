=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'

# Unit tests for SnapTrade::OptionsApi
describe 'OptionsApi' do
  before do
    # run before each test
    @api_instance = SnapTrade::OptionsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of OptionsApi' do
    it 'should create an instance of OptionsApi' do
      expect(@api_instance).to be_instance_of(SnapTrade::OptionsApi)
    end
  end

  # unit tests for get_option_strategy
  # Creates an option strategy object that will be used to place an option strategy order
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to create the option strategy object in.
  # @param options_get_option_strategy_request 
  # @param [Hash] opts the optional parameters
  # @return [StrategyQuotes]
  describe 'get_option_strategy test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_options_chain
  # Get the options chain
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to get the options chain from.
  # @param symbol Universal symbol ID if symbol
  # @param [Hash] opts the optional parameters
  # @return [Array<OptionChainInner>]
  describe 'get_options_chain test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_options_strategy_quote
  # Get latest market data of option strategy
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account the strategy will be placed in.
  # @param option_strategy_id Option strategy id obtained from response when creating option strategy object
  # @param [Hash] opts the optional parameters
  # @return [StrategyQuotes]
  describe 'get_options_strategy_quote test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_option_holdings
  # Get the options holdings in the account
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to fetch options holdings for.
  # @param [Hash] opts the optional parameters
  # @return [Array<OptionsPosition>]
  describe 'list_option_holdings test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for place_option_strategy
  # Place an option strategy order on the brokerage
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to execute the strategy in.
  # @param option_strategy_id Option strategy id obtained from response when creating option strategy object
  # @param options_place_option_strategy_request 
  # @param [Hash] opts the optional parameters
  # @return [StrategyOrderRecord]
  describe 'place_option_strategy test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
