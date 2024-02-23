=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::Type
describe SnapTrade::Type do
  let(:instance) { SnapTrade::Type.new }

  describe 'test an instance of Type' do
    it 'should create an instance of Type' do
      expect(instance).to be_instance_of(SnapTrade::Type)
    end
  end
end
