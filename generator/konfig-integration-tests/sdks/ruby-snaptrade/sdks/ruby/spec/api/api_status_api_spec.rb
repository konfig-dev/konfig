=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'

# Unit tests for SnapTrade::APIStatusApi
describe 'APIStatusApi' do
  before do
    # run before each test
    @api_instance = SnapTrade::APIStatusApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of APIStatusApi' do
    it 'should create an instance of APIStatusApi' do
      expect(@api_instance).to be_instance_of(SnapTrade::APIStatusApi)
    end
  end

  # unit tests for check
  # Get API Status
  # Check whether the API is operational and verify timestamps.
  # @param [Hash] opts the optional parameters
  # @return [Status]
  describe 'check test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
