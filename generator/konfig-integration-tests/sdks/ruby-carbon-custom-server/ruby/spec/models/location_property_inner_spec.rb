=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::LocationPropertyInner
describe Carbon::LocationPropertyInner do
  let(:instance) { Carbon::LocationPropertyInner.new }

  describe 'test an instance of LocationPropertyInner' do
    it 'should create an instance of LocationPropertyInner' do
      expect(instance).to be_instance_of(Carbon::LocationPropertyInner)
    end
  end
end
