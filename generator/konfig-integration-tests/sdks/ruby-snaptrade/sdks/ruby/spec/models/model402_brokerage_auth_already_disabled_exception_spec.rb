=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::Model402BrokerageAuthAlreadyDisabledException
describe SnapTrade::Model402BrokerageAuthAlreadyDisabledException do
  let(:instance) { SnapTrade::Model402BrokerageAuthAlreadyDisabledException.new }

  describe 'test an instance of Model402BrokerageAuthAlreadyDisabledException' do
    it 'should create an instance of Model402BrokerageAuthAlreadyDisabledException' do
      expect(instance).to be_instance_of(SnapTrade::Model402BrokerageAuthAlreadyDisabledException)
    end
  end
  describe 'test attribute "detail"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "code"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
