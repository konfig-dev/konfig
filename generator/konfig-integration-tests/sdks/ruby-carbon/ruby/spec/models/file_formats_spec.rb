=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::FileFormats
describe Carbon::FileFormats do
  let(:instance) { Carbon::FileFormats.new }

  describe 'test an instance of FileFormats' do
    it 'should create an instance of FileFormats' do
      expect(instance).to be_instance_of(Carbon::FileFormats)
    end
  end
end
