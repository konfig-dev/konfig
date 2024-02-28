=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::OrganizationUserDataSourceOrderByColumns
describe Carbon::OrganizationUserDataSourceOrderByColumns do
  let(:instance) { Carbon::OrganizationUserDataSourceOrderByColumns.new }

  describe 'test an instance of OrganizationUserDataSourceOrderByColumns' do
    it 'should create an instance of OrganizationUserDataSourceOrderByColumns' do
      expect(instance).to be_instance_of(Carbon::OrganizationUserDataSourceOrderByColumns)
    end
  end
end
