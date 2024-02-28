=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::EmbeddingsAndChunksFilters
describe Carbon::EmbeddingsAndChunksFilters do
  let(:instance) { Carbon::EmbeddingsAndChunksFilters.new }

  describe 'test an instance of EmbeddingsAndChunksFilters' do
    it 'should create an instance of EmbeddingsAndChunksFilters' do
      expect(instance).to be_instance_of(Carbon::EmbeddingsAndChunksFilters)
    end
  end
  describe 'test attribute "user_file_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "embedding_model"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
