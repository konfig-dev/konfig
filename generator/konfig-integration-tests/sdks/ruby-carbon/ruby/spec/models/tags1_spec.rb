=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::Tags1
describe Carbon::Tags1 do
  let(:instance) { Carbon::Tags1.new }

  describe 'test an instance of Tags1' do
    it 'should create an instance of Tags1' do
      expect(instance).to be_instance_of(Carbon::Tags1)
    end
  end
end
