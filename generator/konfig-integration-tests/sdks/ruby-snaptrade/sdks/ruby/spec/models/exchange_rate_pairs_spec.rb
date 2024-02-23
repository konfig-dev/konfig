=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ExchangeRatePairs
describe SnapTrade::ExchangeRatePairs do
  let(:instance) { SnapTrade::ExchangeRatePairs.new }

  describe 'test an instance of ExchangeRatePairs' do
    it 'should create an instance of ExchangeRatePairs' do
      expect(instance).to be_instance_of(SnapTrade::ExchangeRatePairs)
    end
  end
  describe 'test attribute "src"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "dst"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "exchange_rate"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
