=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::OptionChainInnerChainPerRootInnerChainPerStrikePriceInner
describe SnapTrade::OptionChainInnerChainPerRootInnerChainPerStrikePriceInner do
  let(:instance) { SnapTrade::OptionChainInnerChainPerRootInnerChainPerStrikePriceInner.new }

  describe 'test an instance of OptionChainInnerChainPerRootInnerChainPerStrikePriceInner' do
    it 'should create an instance of OptionChainInnerChainPerRootInnerChainPerStrikePriceInner' do
      expect(instance).to be_instance_of(SnapTrade::OptionChainInnerChainPerRootInnerChainPerStrikePriceInner)
    end
  end
  describe 'test attribute "strike_price"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "call_symbol_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "put_symbol_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
