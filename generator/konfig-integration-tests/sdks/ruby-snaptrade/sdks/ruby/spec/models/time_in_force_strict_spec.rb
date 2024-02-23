=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::TimeInForceStrict
describe SnapTrade::TimeInForceStrict do
  let(:instance) { SnapTrade::TimeInForceStrict.new }

  describe 'test an instance of TimeInForceStrict' do
    it 'should create an instance of TimeInForceStrict' do
      expect(instance).to be_instance_of(SnapTrade::TimeInForceStrict)
    end
  end
end
