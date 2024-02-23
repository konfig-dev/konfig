=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::Action
describe SnapTrade::Action do
  let(:instance) { SnapTrade::Action.new }

  describe 'test an instance of Action' do
    it 'should create an instance of Action' do
      expect(instance).to be_instance_of(SnapTrade::Action)
    end
  end
end
