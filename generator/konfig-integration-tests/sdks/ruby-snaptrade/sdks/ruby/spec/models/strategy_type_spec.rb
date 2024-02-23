=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::StrategyType
describe SnapTrade::StrategyType do
  let(:instance) { SnapTrade::StrategyType.new }

  describe 'test an instance of StrategyType' do
    it 'should create an instance of StrategyType' do
      expect(instance).to be_instance_of(SnapTrade::StrategyType)
    end
  end
end
