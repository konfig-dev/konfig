=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::ChunksAndEmbeddingsUploadInput
describe Carbon::ChunksAndEmbeddingsUploadInput do
  let(:instance) { Carbon::ChunksAndEmbeddingsUploadInput.new }

  describe 'test an instance of ChunksAndEmbeddingsUploadInput' do
    it 'should create an instance of ChunksAndEmbeddingsUploadInput' do
      expect(instance).to be_instance_of(Carbon::ChunksAndEmbeddingsUploadInput)
    end
  end
  describe 'test attribute "embedding_model"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "chunks_and_embeddings"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "overwrite_existing"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
