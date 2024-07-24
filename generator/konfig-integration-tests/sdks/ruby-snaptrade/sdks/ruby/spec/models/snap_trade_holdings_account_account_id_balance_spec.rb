=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::SnapTradeHoldingsAccountAccountIdBalance
describe SnapTrade::SnapTradeHoldingsAccountAccountIdBalance do
  let(:instance) { SnapTrade::SnapTradeHoldingsAccountAccountIdBalance.new }

  describe 'test an instance of SnapTradeHoldingsAccountAccountIdBalance' do
    it 'should create an instance of SnapTradeHoldingsAccountAccountIdBalance' do
      expect(instance).to be_instance_of(SnapTrade::SnapTradeHoldingsAccountAccountIdBalance)
    end
  end
  describe 'test attribute "total"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
