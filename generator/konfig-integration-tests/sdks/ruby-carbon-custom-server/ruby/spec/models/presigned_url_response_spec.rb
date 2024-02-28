=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::PresignedURLResponse
describe Carbon::PresignedURLResponse do
  let(:instance) { Carbon::PresignedURLResponse.new }

  describe 'test an instance of PresignedURLResponse' do
    it 'should create an instance of PresignedURLResponse' do
      expect(instance).to be_instance_of(Carbon::PresignedURLResponse)
    end
  end
  describe 'test attribute "presigned_url"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
