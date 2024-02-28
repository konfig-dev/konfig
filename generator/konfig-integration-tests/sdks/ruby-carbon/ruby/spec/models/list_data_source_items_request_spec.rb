=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::ListDataSourceItemsRequest
describe Carbon::ListDataSourceItemsRequest do
  let(:instance) { Carbon::ListDataSourceItemsRequest.new }

  describe 'test an instance of ListDataSourceItemsRequest' do
    it 'should create an instance of ListDataSourceItemsRequest' do
      expect(instance).to be_instance_of(Carbon::ListDataSourceItemsRequest)
    end
  end
  describe 'test attribute "data_source_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "parent_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "pagination"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
