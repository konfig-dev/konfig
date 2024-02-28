=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::FileContentTypesNullable
describe Carbon::FileContentTypesNullable do
  let(:instance) { Carbon::FileContentTypesNullable.new }

  describe 'test an instance of FileContentTypesNullable' do
    it 'should create an instance of FileContentTypesNullable' do
      expect(instance).to be_instance_of(Carbon::FileContentTypesNullable)
    end
  end
end
