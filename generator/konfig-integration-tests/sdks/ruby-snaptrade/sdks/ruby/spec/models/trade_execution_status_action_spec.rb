=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::TradeExecutionStatusAction
describe SnapTrade::TradeExecutionStatusAction do
  let(:instance) { SnapTrade::TradeExecutionStatusAction.new }

  describe 'test an instance of TradeExecutionStatusAction' do
    it 'should create an instance of TradeExecutionStatusAction' do
      expect(instance).to be_instance_of(SnapTrade::TradeExecutionStatusAction)
    end
  end
end
