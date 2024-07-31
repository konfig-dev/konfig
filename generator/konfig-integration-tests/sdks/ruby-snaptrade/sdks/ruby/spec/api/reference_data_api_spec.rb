=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'

# Unit tests for SnapTrade::ReferenceDataApi
describe 'ReferenceDataApi' do
  before do
    # run before each test
    @api_instance = SnapTrade::ReferenceDataApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ReferenceDataApi' do
    it 'should create an instance of ReferenceDataApi' do
      expect(@api_instance).to be_instance_of(SnapTrade::ReferenceDataApi)
    end
  end

  # unit tests for get_currency_exchange_rate_pair
  # Get exchange rate of a currency pair
  # Returns an Exchange Rate Pair object for the specified Currency Pair.
  # @param currency_pair A currency pair based on currency code for example, {CAD-USD}
  # @param [Hash] opts the optional parameters
  # @return [ExchangeRatePairs]
  describe 'get_currency_exchange_rate_pair test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_partner_info
  # Get metadata related to Snaptrade partner
  # Returns useful data related to the specified ClientID, including allowed brokerages and data access.
  # @param [Hash] opts the optional parameters
  # @return [PartnerData]
  describe 'get_partner_info test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_security_types
  # List of all security types
  # List security types available on SnapTrade.
  # @param [Hash] opts the optional parameters
  # @return [Array<SecurityType>]
  describe 'get_security_types test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_stock_exchanges
  # Get exchanges
  # Returns a list of all supported Exchanges.
  # @param [Hash] opts the optional parameters
  # @return [Array<Exchange>]
  describe 'get_stock_exchanges test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_symbols
  # Search for symbols
  # Returns a list of Universal Symbol objects that match a defined string.  Matches on ticker or name. 
  # @param [Hash] opts the optional parameters
  # @option opts [SymbolQuery] :symbol_query 
  # @return [Array<UniversalSymbol>]
  describe 'get_symbols test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_symbols_by_ticker
  # Get details of a symbol
  # Returns the Universal Symbol object specified by the ticker or the universal_symbol_id.
  # @param query The ticker or universal_symbol_id of the UniversalSymbol to get.
  # @param [Hash] opts the optional parameters
  # @return [UniversalSymbol]
  describe 'get_symbols_by_ticker test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_all_brokerage_authorization_type
  # Get all brokerage authorization types
  # Returns a list of all defined Brokerage authorization Type objects.
  # @param [Hash] opts the optional parameters
  # @option opts [String] :brokerage Comma separated value of brokerage slugs
  # @return [Array<BrokerageAuthorizationTypeReadOnly>]
  describe 'list_all_brokerage_authorization_type test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_all_brokerages
  # Get brokerages
  # Returns a list of all defined Brokerage objects.
  # @param [Hash] opts the optional parameters
  # @return [Array<Brokerage>]
  describe 'list_all_brokerages test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_all_currencies
  # Get currencies
  # Returns a list of all defined Currency objects.
  # @param [Hash] opts the optional parameters
  # @return [Array<Currency>]
  describe 'list_all_currencies test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_all_currencies_rates
  # Get currency exchange rates
  # Returns a list of all Exchange Rate Pairs for all supported Currencies.
  # @param [Hash] opts the optional parameters
  # @return [Array<ExchangeRatePairs>]
  describe 'list_all_currencies_rates test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for symbol_search_user_account
  # Search for symbols available in an account
  # Returns a list of universal symbols that are supported by the specificied account. Returned symbols are based on the provided search string, matching on ticker and name. 
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to search for symbols within.
  # @param [Hash] opts the optional parameters
  # @option opts [SymbolQuery] :symbol_query 
  # @return [Array<UniversalSymbol>]
  describe 'symbol_search_user_account test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
