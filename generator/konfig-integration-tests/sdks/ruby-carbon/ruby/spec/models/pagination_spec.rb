=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::Pagination
describe Carbon::Pagination do
  let(:instance) { Carbon::Pagination.new }

  describe 'test an instance of Pagination' do
    it 'should create an instance of Pagination' do
      expect(instance).to be_instance_of(Carbon::Pagination)
    end
  end
  describe 'test attribute "limit"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "offset"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
