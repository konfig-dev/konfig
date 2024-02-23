=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::State
describe SnapTrade::State do
  let(:instance) { SnapTrade::State.new }

  describe 'test an instance of State' do
    it 'should create an instance of State' do
      expect(instance).to be_instance_of(SnapTrade::State)
    end
  end
end
