require 'spec_helper'
require 'json'
require 'securerandom'
require 'debug'

describe 'GettingStarted' do
  before do
  end

  after do
  end

  it 'getting started' do
    # 1) Get an access token for a customer
    configuration = Carbon::Configuration.new
    configuration.api_key = "YOUR_API_KEY"
    configuration.customer_id = "YOUR_CUSTOMER_ID"
    configuration.host = "http://127.0.0.1:4129"
    carbon = Carbon::Client.new(configuration)

    token = carbon.auth.get_access_token

    # 2) Use the access token to authenticate moving forward
    configuration = Carbon::Configuration.new
    configuration.access_token = token.access_token
    configuration.host = "http://127.0.0.1:4129"
    carbon = Carbon::Client.new(configuration)

    # use SDK as usual
    api_response = carbon.embeddings.get_embeddings_and_chunks_with_http_info(
      filters: {
              "user_file_id" => 1,
              "embedding_model" => "OPENAI",
          }
    )
    body = JSON.parse(api_response.response.body)
    authorization = body["headers"]["authorization"]
    expect(authorization).to eq("Token 123")
  end

  it 'x-konfig-prefix' do
    configuration = Carbon::Configuration.new
    configuration.api_key = "API_KEY"
    configuration.customer_id = "CUSTOMER_ID"
    configuration.host = "http://127.0.0.1:4129"
    carbon = Carbon::Client.new(configuration)
    api_response = carbon.embeddings.get_embeddings_and_chunks_with_http_info(
      filters: {
              "user_file_id" => 1,
              "embedding_model" => "OPENAI",
          }
    )
    body = JSON.parse(api_response.response.body)
    authorization = body["headers"]["authorization"]
    expect(authorization).to eq("Bearer API_KEY")
  end

  it 'access_token' do
    configuration = Carbon::Configuration.new
    configuration.access_token = "ACCESS_TOKEN"
    configuration.host = "http://127.0.0.1:4129"
    carbon = Carbon::Client.new(configuration)
    api_response = carbon.embeddings.get_embeddings_and_chunks_with_http_info(
      filters: {
              "user_file_id" => 1,
              "embedding_model" => "OPENAI",
          }
    )
    body = JSON.parse(api_response.response.body)
    authorization = body["headers"]["authorization"]
    expect(authorization).to eq("Token ACCESS_TOKEN")
  end

  it 'customer_id' do
    configuration = Carbon::Configuration.new
    configuration.customer_id = "CUSTOMER_ID"
    configuration.host = "http://127.0.0.1:4129"
    carbon = Carbon::Client.new(configuration)
    api_response = carbon.embeddings.get_embeddings_and_chunks_with_http_info(
      filters: {
              "user_file_id" => 1,
              "embedding_model" => "OPENAI",
          }
    )
    body = JSON.parse(api_response.response.body)
    customer_id = body["headers"]["customer-id"]
    expect(customer_id).to eq("CUSTOMER_ID")
  end

  it 'embeddings.get_documents default value' do
    configuration = Carbon::Configuration.new
    configuration.host = "http://127.0.0.1:4129"
    carbon = Carbon::Client.new(configuration)
    api_response = carbon.embeddings.get_documents_with_http_info(query: "query", k: "k")
    body = JSON.parse(api_response.response.body)["body"]
    expect(body["media_type"]).to eq("TEXT")
    expect(body["embedding_model"]).to eq("OPENAI")
  end

end
