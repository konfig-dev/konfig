=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::GenericSuccessResponse
describe Carbon::GenericSuccessResponse do
  let(:instance) { Carbon::GenericSuccessResponse.new }

  describe 'test an instance of GenericSuccessResponse' do
    it 'should create an instance of GenericSuccessResponse' do
      expect(instance).to be_instance_of(Carbon::GenericSuccessResponse)
    end
  end
  describe 'test attribute "success"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
