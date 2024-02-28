=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::DataSourceSyncStatuses
describe Carbon::DataSourceSyncStatuses do
  let(:instance) { Carbon::DataSourceSyncStatuses.new }

  describe 'test an instance of DataSourceSyncStatuses' do
    it 'should create an instance of DataSourceSyncStatuses' do
      expect(instance).to be_instance_of(Carbon::DataSourceSyncStatuses)
    end
  end
end
