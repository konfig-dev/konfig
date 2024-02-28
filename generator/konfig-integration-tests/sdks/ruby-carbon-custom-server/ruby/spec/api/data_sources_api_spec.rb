=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'

# Unit tests for Carbon::DataSourcesApi
describe 'DataSourcesApi' do
  before do
    # run before each test
    @api_instance = Carbon::DataSourcesApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of DataSourcesApi' do
    it 'should create an instance of DataSourcesApi' do
      expect(@api_instance).to be_instance_of(Carbon::DataSourcesApi)
    end
  end

  # unit tests for query_user_data_sources
  # User Data Sources
  # @param organization_user_data_source_query_input 
  # @param [Hash] opts the optional parameters
  # @return [OrganizationUserDataSourceResponse]
  describe 'query_user_data_sources test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for revoke_access_token
  # Revoke Access Token
  # @param revoke_access_token_input 
  # @param [Hash] opts the optional parameters
  # @return [GenericSuccessResponse]
  describe 'revoke_access_token test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
