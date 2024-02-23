=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::SessionEventType
describe SnapTrade::SessionEventType do
  let(:instance) { SnapTrade::SessionEventType.new }

  describe 'test an instance of SessionEventType' do
    it 'should create an instance of SessionEventType' do
      expect(instance).to be_instance_of(SnapTrade::SessionEventType)
    end
  end
end
