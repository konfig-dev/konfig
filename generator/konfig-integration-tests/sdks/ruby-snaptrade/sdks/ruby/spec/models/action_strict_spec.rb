=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ActionStrict
describe SnapTrade::ActionStrict do
  let(:instance) { SnapTrade::ActionStrict.new }

  describe 'test an instance of ActionStrict' do
    it 'should create an instance of ActionStrict' do
      expect(instance).to be_instance_of(SnapTrade::ActionStrict)
    end
  end
end
