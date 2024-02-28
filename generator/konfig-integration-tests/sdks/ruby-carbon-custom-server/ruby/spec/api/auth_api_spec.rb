=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'

# Unit tests for Carbon::AuthApi
describe 'AuthApi' do
  before do
    # run before each test
    @api_instance = Carbon::AuthApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AuthApi' do
    it 'should create an instance of AuthApi' do
      expect(@api_instance).to be_instance_of(Carbon::AuthApi)
    end
  end

  # unit tests for get_access_token
  # Get Access Token
  # @param [Hash] opts the optional parameters
  # @return [TokenResponse]
  describe 'get_access_token test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_white_labeling
  # Get White Labeling
  # Returns whether or not the organization is white labeled and which integrations are white labeled  :param current_user: the current user :param db: the database session :return: a WhiteLabelingResponse
  # @param [Hash] opts the optional parameters
  # @return [WhiteLabelingResponse]
  describe 'get_white_labeling test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
