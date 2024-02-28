=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::ChunkPropertiesNullable
describe Carbon::ChunkPropertiesNullable do
  let(:instance) { Carbon::ChunkPropertiesNullable.new }

  describe 'test an instance of ChunkPropertiesNullable' do
    it 'should create an instance of ChunkPropertiesNullable' do
      expect(instance).to be_instance_of(Carbon::ChunkPropertiesNullable)
    end
  end
  describe 'test attribute "set_page_as_boundary"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "prepend_filename_to_chunks"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "max_items_per_chunk"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
