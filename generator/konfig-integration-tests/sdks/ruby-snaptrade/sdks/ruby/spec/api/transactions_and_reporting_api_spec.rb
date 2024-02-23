=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'

# Unit tests for SnapTrade::TransactionsAndReportingApi
describe 'TransactionsAndReportingApi' do
  before do
    # run before each test
    @api_instance = SnapTrade::TransactionsAndReportingApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of TransactionsAndReportingApi' do
    it 'should create an instance of TransactionsAndReportingApi' do
      expect(@api_instance).to be_instance_of(SnapTrade::TransactionsAndReportingApi)
    end
  end

  # unit tests for get_activities
  # Get transaction history for a user
  # Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @option opts [Date] :start_date 
  # @option opts [Date] :end_date 
  # @option opts [String] :accounts Optional comma seperated list of account IDs used to filter the request on specific accounts
  # @option opts [String] :brokerage_authorizations Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations
  # @option opts [String] :type Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT
  # @return [Array<UniversalActivity>]
  describe 'get_activities test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_reporting_custom_range
  # Get performance information for a specific timeframe
  # Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.
  # @param start_date 
  # @param end_date 
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :accounts Optional comma seperated list of account IDs used to filter the request on specific accounts
  # @option opts [Boolean] :detailed Optional, increases frequency of data points for the total value and contribution charts if set to true
  # @option opts [String] :frequency Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.
  # @return [PerformanceCustom]
  describe 'get_reporting_custom_range test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
