=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::ChunksAndEmbeddings
describe Carbon::ChunksAndEmbeddings do
  let(:instance) { Carbon::ChunksAndEmbeddings.new }

  describe 'test an instance of ChunksAndEmbeddings' do
    it 'should create an instance of ChunksAndEmbeddings' do
      expect(instance).to be_instance_of(Carbon::ChunksAndEmbeddings)
    end
  end
  describe 'test attribute "chunk_number"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "chunk"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "embedding"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
