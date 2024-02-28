=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::GitbookConnectRequest
describe Carbon::GitbookConnectRequest do
  let(:instance) { Carbon::GitbookConnectRequest.new }

  describe 'test an instance of GitbookConnectRequest' do
    it 'should create an instance of GitbookConnectRequest' do
      expect(instance).to be_instance_of(Carbon::GitbookConnectRequest)
    end
  end
  describe 'test attribute "organization"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "access_token"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
