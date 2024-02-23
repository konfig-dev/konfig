=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ConnectionType
describe SnapTrade::ConnectionType do
  let(:instance) { SnapTrade::ConnectionType.new }

  describe 'test an instance of ConnectionType' do
    it 'should create an instance of ConnectionType' do
      expect(instance).to be_instance_of(SnapTrade::ConnectionType)
    end
  end
end
