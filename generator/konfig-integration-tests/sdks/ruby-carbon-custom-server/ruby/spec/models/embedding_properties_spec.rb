=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::EmbeddingProperties
describe Carbon::EmbeddingProperties do
  let(:instance) { Carbon::EmbeddingProperties.new }

  describe 'test an instance of EmbeddingProperties' do
    it 'should create an instance of EmbeddingProperties' do
      expect(instance).to be_instance_of(Carbon::EmbeddingProperties)
    end
  end
  describe 'test attribute "chunk_size"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "chunk_overlap"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
