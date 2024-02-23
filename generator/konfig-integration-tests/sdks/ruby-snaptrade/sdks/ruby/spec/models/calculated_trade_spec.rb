=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::CalculatedTrade
describe SnapTrade::CalculatedTrade do
  let(:instance) { SnapTrade::CalculatedTrade.new }

  describe 'test an instance of CalculatedTrade' do
    it 'should create an instance of CalculatedTrade' do
      expect(instance).to be_instance_of(SnapTrade::CalculatedTrade)
    end
  end
  describe 'test attribute "id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "trades"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
