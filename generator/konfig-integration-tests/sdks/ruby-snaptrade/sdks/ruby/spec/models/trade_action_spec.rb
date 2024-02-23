=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::TradeAction
describe SnapTrade::TradeAction do
  let(:instance) { SnapTrade::TradeAction.new }

  describe 'test an instance of TradeAction' do
    it 'should create an instance of TradeAction' do
      expect(instance).to be_instance_of(SnapTrade::TradeAction)
    end
  end
end
