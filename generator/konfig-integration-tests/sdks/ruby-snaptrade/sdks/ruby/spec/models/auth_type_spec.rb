=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::AuthType
describe SnapTrade::AuthType do
  let(:instance) { SnapTrade::AuthType.new }

  describe 'test an instance of AuthType' do
    it 'should create an instance of AuthType' do
      expect(instance).to be_instance_of(SnapTrade::AuthType)
    end
  end
end
