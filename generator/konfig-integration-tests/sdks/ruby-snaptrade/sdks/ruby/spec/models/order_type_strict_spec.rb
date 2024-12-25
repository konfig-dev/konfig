=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::OrderTypeStrict
describe SnapTrade::OrderTypeStrict do
  let(:instance) { SnapTrade::OrderTypeStrict.new }

  describe 'test an instance of OrderTypeStrict' do
    it 'should create an instance of OrderTypeStrict' do
      expect(instance).to be_instance_of(SnapTrade::OrderTypeStrict)
    end
  end
end
