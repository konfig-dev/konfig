=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ManualTradeAndImpact
describe SnapTrade::ManualTradeAndImpact do
  let(:instance) { SnapTrade::ManualTradeAndImpact.new }

  describe 'test an instance of ManualTradeAndImpact' do
    it 'should create an instance of ManualTradeAndImpact' do
      expect(instance).to be_instance_of(SnapTrade::ManualTradeAndImpact)
    end
  end
  describe 'test attribute "trade"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "trade_impacts"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "combined_remaining_balance"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
