=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::UserRequestContent
describe Carbon::UserRequestContent do
  let(:instance) { Carbon::UserRequestContent.new }

  describe 'test an instance of UserRequestContent' do
    it 'should create an instance of UserRequestContent' do
      expect(instance).to be_instance_of(Carbon::UserRequestContent)
    end
  end
  describe 'test attribute "customer_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
