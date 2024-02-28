=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::DataSourceLastSyncActions
describe Carbon::DataSourceLastSyncActions do
  let(:instance) { Carbon::DataSourceLastSyncActions.new }

  describe 'test an instance of DataSourceLastSyncActions' do
    it 'should create an instance of DataSourceLastSyncActions' do
      expect(instance).to be_instance_of(Carbon::DataSourceLastSyncActions)
    end
  end
end
