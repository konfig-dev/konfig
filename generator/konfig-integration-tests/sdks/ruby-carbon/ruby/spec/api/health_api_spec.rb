=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'

# Unit tests for Carbon::HealthApi
describe 'HealthApi' do
  before do
    # run before each test
    @api_instance = Carbon::HealthApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of HealthApi' do
    it 'should create an instance of HealthApi' do
      expect(@api_instance).to be_instance_of(Carbon::HealthApi)
    end
  end

  # unit tests for check
  # Health
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'check test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
