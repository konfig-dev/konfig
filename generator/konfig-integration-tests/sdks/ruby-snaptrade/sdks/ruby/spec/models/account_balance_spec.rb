=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::AccountBalance
describe SnapTrade::AccountBalance do
  let(:instance) { SnapTrade::AccountBalance.new }

  describe 'test an instance of AccountBalance' do
    it 'should create an instance of AccountBalance' do
      expect(instance).to be_instance_of(SnapTrade::AccountBalance)
    end
  end
  describe 'test attribute "total"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
