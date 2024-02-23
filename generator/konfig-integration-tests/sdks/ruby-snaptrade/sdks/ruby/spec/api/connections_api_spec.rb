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

  # unit tests for list_brokerage_authorizations
  # List all brokerage authorizations for the user
  # @param user_id 
  # @param user_secret 
  # @param [Hash] opts the optional parameters
  # @return [Array<BrokerageAuthorization>]
  describe 'list_brokerage_authorizations test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for remove_brokerage_authorization
  # Delete brokerage authorization
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
  # List all session events for the partner
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
