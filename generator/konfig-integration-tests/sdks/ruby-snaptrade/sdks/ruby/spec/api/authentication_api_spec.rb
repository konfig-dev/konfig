=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'

# Unit tests for SnapTrade::AuthenticationApi
describe 'AuthenticationApi' do
  before do
    # run before each test
    @api_instance = SnapTrade::AuthenticationApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AuthenticationApi' do
    it 'should create an instance of AuthenticationApi' do
      expect(@api_instance).to be_instance_of(SnapTrade::AuthenticationApi)
    end
  end

  # unit tests for delete_snap_trade_user
  # Delete SnapTrade user
  # Deletes a user you&#39;ve registered over the SnapTrade API, and any data associated with them or their investment accounts.
  # @param user_id 
  # @param [Hash] opts the optional parameters
  # @return [DeleteUserResponse]
  describe 'delete_snap_trade_user test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user_jwt
  # Generate encrypted JWT token
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [EncryptedResponse]
  describe 'get_user_jwt test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_snap_trade_users
  # List SnapTrade users
  # Returns a list of users you&#39;ve registered over the SnapTrade API.
  # @param [Hash] opts the optional parameters
  # @return [Array<String>]
  describe 'list_snap_trade_users test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for login_snap_trade_user
  # Login user &amp; generate connection link
  # Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @option opts [SnapTradeLoginUserRequestBody] :snap_trade_login_user_request_body 
  # @return [AuthenticationLoginSnapTradeUser200Response]
  describe 'login_snap_trade_user test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for register_snap_trade_user
  # Create SnapTrade user
  # @param snap_trade_register_user_request_body 
  # @param [Hash] opts the optional parameters
  # @return [UserIDandSecret]
  describe 'register_snap_trade_user test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for reset_snap_trade_user_secret
  # Obtain a new user secret for a user
  # @param user_i_dand_secret 
  # @param [Hash] opts the optional parameters
  # @return [UserIDandSecret]
  describe 'reset_snap_trade_user_secret test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
