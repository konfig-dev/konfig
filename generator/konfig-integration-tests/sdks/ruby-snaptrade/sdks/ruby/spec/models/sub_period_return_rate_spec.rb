=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::SubPeriodReturnRate
describe SnapTrade::SubPeriodReturnRate do
  let(:instance) { SnapTrade::SubPeriodReturnRate.new }

  describe 'test an instance of SubPeriodReturnRate' do
    it 'should create an instance of SubPeriodReturnRate' do
      expect(instance).to be_instance_of(SnapTrade::SubPeriodReturnRate)
    end
  end
  describe 'test attribute "period_start"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "period_end"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "rate_of_return"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
