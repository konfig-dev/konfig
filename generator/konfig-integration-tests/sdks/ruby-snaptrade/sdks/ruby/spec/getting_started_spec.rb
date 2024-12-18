=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'securerandom'
require 'debug'

# Unit tests for SnapTrade::APIStatusApi
describe 'GettingStarted' do
  before do
  end

  after do
    # run after each test
  end

  describe 'optional non body parameters should be passed' do
    it 'should pass' do
      configuration = SnapTrade::Configuration.new
      configuration.client_id = ENV["SNAPTRADE_CLIENT_ID"]
      configuration.consumer_key = ENV["SNAPTRADE_CONSUMER_KEY"]
      configuration.host = "http://127.0.0.1:4010"
      snaptrade = SnapTrade::Client.new(configuration)

      data, status_code, headers, response = snaptrade.account_information.get_user_account_orders_with_http_info(
        user_id: "a",
        user_secret: "b",
        account_id: SecureRandom.uuid,
        state: "all"
      )
      puts data
      expect(response.env.url.query).to include("state=all")
      expect(data).not_to be_nil
    end
  end

  # integration test for getting started flow
  describe 'getting started flow static pattern' do
    it 'should work' do
      # 1) Setup
      SnapTrade.client_id = ENV["SNAPTRADE_CLIENT_ID"]
      SnapTrade.consumer_key = ENV["SNAPTRADE_CONSUMER_KEY"]

      # 2) Check API Status
      response = SnapTrade::APIStatus.check()
      expect(response).not_to be_nil
      puts response

      # 3) Create a new user
      user_id = SecureRandom.uuid
      response = SnapTrade::Authentication.register_snap_trade_user(user_id: user_id)
      puts response

      # 4) Get a redirect URI
      redirect_uri = SnapTrade::Authentication.login_snap_trade_user(user_id: user_id, user_secret: response.user_secret)
      puts redirect_uri

      # 5) Obtaining account holdings data
      holdings = SnapTrade::AccountInformation.get_all_user_holdings(user_id: user_id, user_secret: response.user_secret)
      puts holdings

      # 6) Deleting a user
      deleted_response = SnapTrade::Authentication.delete_snap_trade_user(user_id: user_id)
      puts deleted_response
    end
  end

  describe 'getting started flow instance patern' do
    it 'should work' do
      # 1) Setup
      configuration = SnapTrade::Configuration.new
      configuration.client_id = ENV["SNAPTRADE_CLIENT_ID"]
      configuration.consumer_key = ENV["SNAPTRADE_CONSUMER_KEY"]
      snaptrade = SnapTrade::Client.new(configuration)

      # 2) Check that the client is able to make a request to the API server.
      response = snaptrade.api_status.check()
      expect(response).not_to be_nil
      puts response

      # 3) Create a new user
      user_id = SecureRandom.uuid
      response = snaptrade.authentication.register_snap_trade_user(user_id: user_id)
      puts response

      # 4) Get a redirect URI
      redirect_uri = snaptrade.authentication.login_snap_trade_user(user_id: user_id, user_secret: response.user_secret)
      puts redirect_uri

      # 5) Obtaining account holdings data
      holdings = snaptrade.account_information.get_all_user_holdings(user_id: user_id, user_secret: response.user_secret)
      puts holdings

      # 6) Deleting a user
      deleted_response = snaptrade.authentication.delete_snap_trade_user(user_id: user_id)
      puts deleted_response
    end
  end

  describe 'setting consumer key to nil' do
    it 'should fail with ArgumentError' do
      expect { SnapTrade.consumer_key = nil }.to raise_error(ArgumentError)
      SnapTrade.consumer_key = ENV["SNAPTRADE_CONSUMER_KEY"]
    end
  end
end
