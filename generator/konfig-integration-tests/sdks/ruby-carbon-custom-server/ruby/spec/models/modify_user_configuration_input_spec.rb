=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::ModifyUserConfigurationInput
describe Carbon::ModifyUserConfigurationInput do
  let(:instance) { Carbon::ModifyUserConfigurationInput.new }

  describe 'test an instance of ModifyUserConfigurationInput' do
    it 'should create an instance of ModifyUserConfigurationInput' do
      expect(instance).to be_instance_of(Carbon::ModifyUserConfigurationInput)
    end
  end
  describe 'test attribute "configuration_key_name"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "value"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
