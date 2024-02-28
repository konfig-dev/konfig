=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::TextEmbeddingGenerators
describe Carbon::TextEmbeddingGenerators do
  let(:instance) { Carbon::TextEmbeddingGenerators.new }

  describe 'test an instance of TextEmbeddingGenerators' do
    it 'should create an instance of TextEmbeddingGenerators' do
      expect(instance).to be_instance_of(Carbon::TextEmbeddingGenerators)
    end
  end
end
