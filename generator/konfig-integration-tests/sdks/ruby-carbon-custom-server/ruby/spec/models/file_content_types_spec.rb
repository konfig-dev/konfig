=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::FileContentTypes
describe Carbon::FileContentTypes do
  let(:instance) { Carbon::FileContentTypes.new }

  describe 'test an instance of FileContentTypes' do
    it 'should create an instance of FileContentTypes' do
      expect(instance).to be_instance_of(Carbon::FileContentTypes)
    end
  end
end
