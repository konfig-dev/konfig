=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::OrganizationUserFilesToSyncOrderByTypes
describe Carbon::OrganizationUserFilesToSyncOrderByTypes do
  let(:instance) { Carbon::OrganizationUserFilesToSyncOrderByTypes.new }

  describe 'test an instance of OrganizationUserFilesToSyncOrderByTypes' do
    it 'should create an instance of OrganizationUserFilesToSyncOrderByTypes' do
      expect(instance).to be_instance_of(Carbon::OrganizationUserFilesToSyncOrderByTypes)
    end
  end
end
