=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ManualTradeFormNotionalValue
describe SnapTrade::ManualTradeFormNotionalValue do
  let(:instance) { SnapTrade::ManualTradeFormNotionalValue.new }

  describe 'test an instance of ManualTradeFormNotionalValue' do
    it 'should create an instance of ManualTradeFormNotionalValue' do
      expect(instance).to be_instance_of(SnapTrade::ManualTradeFormNotionalValue)
    end
  end
end
