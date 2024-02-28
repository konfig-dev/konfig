=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::S3GetFileInput
describe Carbon::S3GetFileInput do
  let(:instance) { Carbon::S3GetFileInput.new }

  describe 'test an instance of S3GetFileInput' do
    it 'should create an instance of S3GetFileInput' do
      expect(instance).to be_instance_of(Carbon::S3GetFileInput)
    end
  end
  describe 'test attribute "id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "bucket"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
