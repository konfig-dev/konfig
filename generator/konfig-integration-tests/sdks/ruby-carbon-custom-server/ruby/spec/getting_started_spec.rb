require 'spec_helper'
require 'json'
require 'securerandom'
require 'debug'

describe 'GettingStarted' do
  before do
  end

  after do
  end

  it 'x-konfig-prefix' do
    configuration = Carbon::Configuration.new
    configuration.api_key = "API_KEY"
    configuration.customer_id = "CUSTOMER_ID"
    configuration.host = "http://127.0.0.1:4129"
    carbon = Carbon::Client.new(configuration)
    api_response = carbon.auth.get_access_token_with_http_info
    body = JSON.parse(api_response.response.body)
    authorization = body["headers"]["authorization"]
    expect(authorization).to eq("Bearer API_KEY")
  end

  it 'access_token' do
    configuration = Carbon::Configuration.new
    configuration.access_token = "ACCESS_TOKEN"
    configuration.host = "http://127.0.0.1:4129"
    carbon = Carbon::Client.new(configuration)
    api_response = carbon.auth.get_access_token_with_http_info
    body = JSON.parse(api_response.response.body)
    authorization = body["headers"]["authorization"]
    expect(authorization).to eq("Token ACCESS_TOKEN")
  end

  it 'customer_id' do
    configuration = Carbon::Configuration.new
    configuration.customer_id = "CUSTOMER_ID"
    configuration.host = "http://127.0.0.1:4129"
    carbon = Carbon::Client.new(configuration)
    api_response = carbon.auth.get_access_token_with_http_info
    body = JSON.parse(api_response.response.body)
    customer_id = body["headers"]["customer-id"]
    expect(customer_id).to eq("CUSTOMER_ID")
  end

end
