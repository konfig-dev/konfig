=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::TradingPlaceOCOOrderRequest
describe SnapTrade::TradingPlaceOCOOrderRequest do
  let(:instance) { SnapTrade::TradingPlaceOCOOrderRequest.new }

  describe 'test an instance of TradingPlaceOCOOrderRequest' do
    it 'should create an instance of TradingPlaceOCOOrderRequest' do
      expect(instance).to be_instance_of(SnapTrade::TradingPlaceOCOOrderRequest)
    end
  end
  describe 'test attribute "first_trade_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "second_trade_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
