=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::ExternalFileSyncStatuses
describe Carbon::ExternalFileSyncStatuses do
  let(:instance) { Carbon::ExternalFileSyncStatuses.new }

  describe 'test an instance of ExternalFileSyncStatuses' do
    it 'should create an instance of ExternalFileSyncStatuses' do
      expect(instance).to be_instance_of(Carbon::ExternalFileSyncStatuses)
    end
  end
end
