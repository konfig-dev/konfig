=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::MonthlyDividends
describe SnapTrade::MonthlyDividends do
  let(:instance) { SnapTrade::MonthlyDividends.new }

  describe 'test an instance of MonthlyDividends' do
    it 'should create an instance of MonthlyDividends' do
      expect(instance).to be_instance_of(SnapTrade::MonthlyDividends)
    end
  end
  describe 'test attribute "date"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "dividends"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
