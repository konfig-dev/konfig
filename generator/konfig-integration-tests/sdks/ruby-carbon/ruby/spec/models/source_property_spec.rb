=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::SourceProperty
describe Carbon::SourceProperty do
  let(:instance) { Carbon::SourceProperty.new }

  describe 'test an instance of SourceProperty' do
    it 'should create an instance of SourceProperty' do
      expect(instance).to be_instance_of(Carbon::SourceProperty)
    end
  end
end
