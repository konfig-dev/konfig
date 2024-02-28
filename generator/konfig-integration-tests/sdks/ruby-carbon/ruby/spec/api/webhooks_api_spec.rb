=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'

# Unit tests for Carbon::WebhooksApi
describe 'WebhooksApi' do
  before do
    # run before each test
    @api_instance = Carbon::WebhooksApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of WebhooksApi' do
    it 'should create an instance of WebhooksApi' do
      expect(@api_instance).to be_instance_of(Carbon::WebhooksApi)
    end
  end

  # unit tests for add_url
  # Add Webhook Url
  # @param add_webhook_props 
  # @param [Hash] opts the optional parameters
  # @return [Webhook]
  describe 'add_url test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_url
  # Delete Webhook Url
  # @param webhook_id 
  # @param [Hash] opts the optional parameters
  # @return [GenericSuccessResponse]
  describe 'delete_url test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for urls
  # Webhook Urls
  # @param webhook_query_input 
  # @param [Hash] opts the optional parameters
  # @return [WebhookQueryResponse]
  describe 'urls test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
