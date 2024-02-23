=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::BrokerageAuthorizationTypeReadOnlyType
describe SnapTrade::BrokerageAuthorizationTypeReadOnlyType do
  let(:instance) { SnapTrade::BrokerageAuthorizationTypeReadOnlyType.new }

  describe 'test an instance of BrokerageAuthorizationTypeReadOnlyType' do
    it 'should create an instance of BrokerageAuthorizationTypeReadOnlyType' do
      expect(instance).to be_instance_of(SnapTrade::BrokerageAuthorizationTypeReadOnlyType)
    end
  end
end
