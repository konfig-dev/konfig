=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::FileFormatsNullable
describe Carbon::FileFormatsNullable do
  let(:instance) { Carbon::FileFormatsNullable.new }

  describe 'test an instance of FileFormatsNullable' do
    it 'should create an instance of FileFormatsNullable' do
      expect(instance).to be_instance_of(Carbon::FileFormatsNullable)
    end
  end
end
