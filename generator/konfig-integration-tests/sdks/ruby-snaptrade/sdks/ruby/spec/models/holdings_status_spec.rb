=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::HoldingsStatus
describe SnapTrade::HoldingsStatus do
  let(:instance) { SnapTrade::HoldingsStatus.new }

  describe 'test an instance of HoldingsStatus' do
    it 'should create an instance of HoldingsStatus' do
      expect(instance).to be_instance_of(SnapTrade::HoldingsStatus)
    end
  end
  describe 'test attribute "initial_sync_completed"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "last_successful_sync"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
