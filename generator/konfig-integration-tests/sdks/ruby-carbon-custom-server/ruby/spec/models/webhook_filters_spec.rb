=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::WebhookFilters
describe Carbon::WebhookFilters do
  let(:instance) { Carbon::WebhookFilters.new }

  describe 'test an instance of WebhookFilters' do
    it 'should create an instance of WebhookFilters' do
      expect(instance).to be_instance_of(Carbon::WebhookFilters)
    end
  end
  describe 'test attribute "ids"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
