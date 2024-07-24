=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'

# Unit tests for SnapTrade::ConnectionsApi
describe 'ConnectionsApi' do
  before do
    # run before each test
    @api_instance = SnapTrade::ConnectionsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ConnectionsApi' do
    it 'should create an instance of ConnectionsApi' do
      expect(@api_instance).to be_instance_of(SnapTrade::ConnectionsApi)
    end
  end

  # unit tests for detail_brokerage_authorization
  # Get brokerage authorization details
  # Returns a single brokerage authorization object for the specified ID.
  # @param authorization_id The ID of a brokerage authorization object.
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [BrokerageAuthorization]
  describe 'detail_brokerage_authorization test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for disable_brokerage_authorization
  # Manually disable a connection for testing
  # Manually disable a connection. This should only be used for testing a reconnect flow, and never used on production connections. Will trigger a disconnect as if it happened naturally, and send a CONNECTION_BROKEN webhook for the connection. Please contact us in order to use this endpoint as it is disabled by default.
  # @param authorization_id The ID of a brokerage authorization object.
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [BrokerageAuthorizationDisabledConfirmation]
  describe 'disable_brokerage_authorization test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_brokerage_authorizations
  # List all brokerage authorizations for the User
  # Returns a list of Brokerage Authorization objects for the user
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [Array<BrokerageAuthorization>]
  describe 'list_brokerage_authorizations test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for refresh_brokerage_authorization
  # Refresh holdings for a connection
  # Trigger a holdings update for all accounts under this authorization. Updates will be queued asynchronously. ACCOUNT_HOLDINGS_UPDATED webhook will be sent once the sync completes
  # @param authorization_id The ID of a brokerage authorization object.
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [BrokerageAuthorizationRefreshConfirmation]
  describe 'refresh_brokerage_authorization test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for remove_brokerage_authorization
  # Delete brokerage authorization
  # Deletes a specified brokerage authorization given by the ID.
  # @param authorization_id The ID of the Authorization to delete.
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'remove_brokerage_authorization test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for session_events
  # Get all session events for a user
  # Returns a list of session events associated with a user.
  # @param partner_client_id 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :user_id Optional comma seperated list of user IDs used to filter the request on specific users
  # @option opts [String] :session_id Optional comma seperated list of session IDs used to filter the request on specific users
  # @return [Array<ConnectionsSessionEvents200ResponseInner>]
  describe 'session_events test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
