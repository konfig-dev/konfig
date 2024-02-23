=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'

# Unit tests for SnapTrade::ErrorLogsApi
describe 'ErrorLogsApi' do
  before do
    # run before each test
    @api_instance = SnapTrade::ErrorLogsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ErrorLogsApi' do
    it 'should create an instance of ErrorLogsApi' do
      expect(@api_instance).to be_instance_of(SnapTrade::ErrorLogsApi)
    end
  end

  # unit tests for list_user_errors
  # Retrieve error logs on behalf of your SnapTrade users
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [Array<UserErrorLog>]
  describe 'list_user_errors test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
