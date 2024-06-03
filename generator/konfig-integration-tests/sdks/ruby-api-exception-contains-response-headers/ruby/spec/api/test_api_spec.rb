=begin
#ruby-api-exception-contains-response-headers API

#A simple API based for testing ruby-api-exception-contains-response-headers.

The version of the OpenAPI document: 1.0.0
Contact: support@example.com
=end

require 'spec_helper'
require 'json'

# Unit tests for RubyApiExceptionContainsResponseHeaders::TestApi
describe 'TestApi' do
  before do
    # run before each test
    @api_instance = RubyApiExceptionContainsResponseHeaders::TestApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of TestApi' do
    it 'should create an instance of TestApi' do
      expect(@api_instance).to be_instance_of(RubyApiExceptionContainsResponseHeaders::TestApi)
    end
  end

  # unit tests for fetch
  # Fetches a JSON value based on input parameter
  # Provide an input parameter to receive a JSON value with properties.
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'fetch test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
