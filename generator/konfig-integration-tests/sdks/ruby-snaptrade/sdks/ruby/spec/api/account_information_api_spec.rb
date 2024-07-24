=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'

# Unit tests for SnapTrade::AccountInformationApi
describe 'AccountInformationApi' do
  before do
    # run before each test
    @api_instance = SnapTrade::AccountInformationApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AccountInformationApi' do
    it 'should create an instance of AccountInformationApi' do
      expect(@api_instance).to be_instance_of(SnapTrade::AccountInformationApi)
    end
  end

  # unit tests for get_all_user_holdings
  # List all accounts for the user, plus balances, positions, and orders for each account.
  # Lists balances, positions and orders for the specified account. The data returned is similar to the data returned over the more fine-grained **positions**, **orders** and **balances** endpoints. 
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :brokerage_authorizations Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations).
  # @return [Array<AccountHoldings>]
  describe 'get_all_user_holdings test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user_account_balance
  # List account balances
  # A list of account balances for the specified account (one per currency that the account holds).
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to get balances.
  # @param [Hash] opts the optional parameters
  # @return [Array<Balance>]
  describe 'get_user_account_balance test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user_account_details
  # Return details of a specific investment account
  # Returns an account object with details for the specified account, including the total account market value. 
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to get detail of.
  # @param [Hash] opts the optional parameters
  # @return [Account]
  describe 'get_user_account_details test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user_account_orders
  # List account orders
  # Fetch all recent orders from a user&#39;s account.
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to get orders.
  # @param [Hash] opts the optional parameters
  # @option opts [String] :state defaults value is set to \&quot;all\&quot;
  # @option opts [Integer] :days Number of days in the past to fetch the most recent orders. Defaults to the last 30 days if no value is passed in.
  # @return [Array<AccountOrderRecord>]
  describe 'get_user_account_orders test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user_account_positions
  # List account positions
  # Returns a list of positions in the specified account.
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to get positions.
  # @param [Hash] opts the optional parameters
  # @return [Array<Position>]
  describe 'get_user_account_positions test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user_holdings
  # List balances, positions and orders for the specified account
  # Lists balances, positions and orders for the specified account as well as option_positions and account metadata. The data returned is similar to the data returned over the more fine-grained **positions**, **orders** and **balances** endpoints. 
  # @param account_id The ID of the account to fetch holdings for.
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [AccountHoldingsAccount]
  describe 'get_user_holdings test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_user_accounts
  # List accounts
  # Get a list of all Account objects for the authenticated SnapTrade user.
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [Array<Account>]
  describe 'list_user_accounts test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_user_account
  # Update details of an investment account
  # Updates various properties of a specified account.
  # @param user_id 
  # @param user_secret 
  # @param account_id The ID of the account to update.
  # @param [Hash] opts the optional parameters
  # @return [Array<Account>]
  describe 'update_user_account test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
