=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::OrderDir
describe Carbon::OrderDir do
  let(:instance) { Carbon::OrderDir.new }

  describe 'test an instance of OrderDir' do
    it 'should create an instance of OrderDir' do
      expect(instance).to be_instance_of(Carbon::OrderDir)
    end
  end
end
