=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'

# Unit tests for Carbon::UsersApi
describe 'UsersApi' do
  before do
    # run before each test
    @api_instance = Carbon::UsersApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of UsersApi' do
    it 'should create an instance of UsersApi' do
      expect(@api_instance).to be_instance_of(Carbon::UsersApi)
    end
  end

  # unit tests for get
  # User Endpoint
  # @param user_request_content 
  # @param [Hash] opts the optional parameters
  # @return [UserResponse]
  describe 'get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for toggle_user_features
  # Toggle User Features
  # @param modify_user_configuration_input 
  # @param [Hash] opts the optional parameters
  # @return [GenericSuccessResponse]
  describe 'toggle_user_features test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
