=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::EmbeddingsAndChunksOrderByColumns
describe Carbon::EmbeddingsAndChunksOrderByColumns do
  let(:instance) { Carbon::EmbeddingsAndChunksOrderByColumns.new }

  describe 'test an instance of EmbeddingsAndChunksOrderByColumns' do
    it 'should create an instance of EmbeddingsAndChunksOrderByColumns' do
      expect(instance).to be_instance_of(Carbon::EmbeddingsAndChunksOrderByColumns)
    end
  end
end
