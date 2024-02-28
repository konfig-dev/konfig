=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::OrganizationUserDataSourceFilters
describe Carbon::OrganizationUserDataSourceFilters do
  let(:instance) { Carbon::OrganizationUserDataSourceFilters.new }

  describe 'test an instance of OrganizationUserDataSourceFilters' do
    it 'should create an instance of OrganizationUserDataSourceFilters' do
      expect(instance).to be_instance_of(Carbon::OrganizationUserDataSourceFilters)
    end
  end
  describe 'test attribute "source"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "ids"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "revoked_access"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
