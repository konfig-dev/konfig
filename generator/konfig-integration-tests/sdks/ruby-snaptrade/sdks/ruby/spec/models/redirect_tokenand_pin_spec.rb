=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::RedirectTokenandPin
describe SnapTrade::RedirectTokenandPin do
  let(:instance) { SnapTrade::RedirectTokenandPin.new }

  describe 'test an instance of RedirectTokenandPin' do
    it 'should create an instance of RedirectTokenandPin' do
      expect(instance).to be_instance_of(SnapTrade::RedirectTokenandPin)
    end
  end
  describe 'test attribute "token"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "pin"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
