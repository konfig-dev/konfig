=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ValidatedTradeBody
describe SnapTrade::ValidatedTradeBody do
  let(:instance) { SnapTrade::ValidatedTradeBody.new }

  describe 'test an instance of ValidatedTradeBody' do
    it 'should create an instance of ValidatedTradeBody' do
      expect(instance).to be_instance_of(SnapTrade::ValidatedTradeBody)
    end
  end
  describe 'test attribute "wait_to_confirm"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
