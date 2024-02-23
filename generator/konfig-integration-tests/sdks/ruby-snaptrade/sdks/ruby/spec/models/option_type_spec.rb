=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::OptionType
describe SnapTrade::OptionType do
  let(:instance) { SnapTrade::OptionType.new }

  describe 'test an instance of OptionType' do
    it 'should create an instance of OptionType' do
      expect(instance).to be_instance_of(SnapTrade::OptionType)
    end
  end
end
