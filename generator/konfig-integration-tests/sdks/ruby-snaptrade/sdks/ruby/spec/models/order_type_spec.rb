=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::OrderType
describe SnapTrade::OrderType do
  let(:instance) { SnapTrade::OrderType.new }

  describe 'test an instance of OrderType' do
    it 'should create an instance of OrderType' do
      expect(instance).to be_instance_of(SnapTrade::OrderType)
    end
  end
end
