=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::HybridSearchTuningParams
describe Carbon::HybridSearchTuningParams do
  let(:instance) { Carbon::HybridSearchTuningParams.new }

  describe 'test an instance of HybridSearchTuningParams' do
    it 'should create an instance of HybridSearchTuningParams' do
      expect(instance).to be_instance_of(Carbon::HybridSearchTuningParams)
    end
  end
  describe 'test attribute "weight_a"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "weight_b"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
