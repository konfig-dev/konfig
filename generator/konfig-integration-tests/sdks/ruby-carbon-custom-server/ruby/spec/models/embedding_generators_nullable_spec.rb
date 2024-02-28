=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::EmbeddingGeneratorsNullable
describe Carbon::EmbeddingGeneratorsNullable do
  let(:instance) { Carbon::EmbeddingGeneratorsNullable.new }

  describe 'test an instance of EmbeddingGeneratorsNullable' do
    it 'should create an instance of EmbeddingGeneratorsNullable' do
      expect(instance).to be_instance_of(Carbon::EmbeddingGeneratorsNullable)
    end
  end
end
