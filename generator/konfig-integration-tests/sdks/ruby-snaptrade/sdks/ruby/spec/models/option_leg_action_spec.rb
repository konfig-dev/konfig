=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::OptionLegAction
describe SnapTrade::OptionLegAction do
  let(:instance) { SnapTrade::OptionLegAction.new }

  describe 'test an instance of OptionLegAction' do
    it 'should create an instance of OptionLegAction' do
      expect(instance).to be_instance_of(SnapTrade::OptionLegAction)
    end
  end
end
