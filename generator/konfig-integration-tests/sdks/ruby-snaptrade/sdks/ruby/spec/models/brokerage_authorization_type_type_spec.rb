=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::BrokerageAuthorizationTypeType
describe SnapTrade::BrokerageAuthorizationTypeType do
  let(:instance) { SnapTrade::BrokerageAuthorizationTypeType.new }

  describe 'test an instance of BrokerageAuthorizationTypeType' do
    it 'should create an instance of BrokerageAuthorizationTypeType' do
      expect(instance).to be_instance_of(SnapTrade::BrokerageAuthorizationTypeType)
    end
  end
end
