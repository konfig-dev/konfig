=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ModelType
describe SnapTrade::ModelType do
  let(:instance) { SnapTrade::ModelType.new }

  describe 'test an instance of ModelType' do
    it 'should create an instance of ModelType' do
      expect(instance).to be_instance_of(SnapTrade::ModelType)
    end
  end
end
