=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::FigiInstrument
describe SnapTrade::FigiInstrument do
  let(:instance) { SnapTrade::FigiInstrument.new }

  describe 'test an instance of FigiInstrument' do
    it 'should create an instance of FigiInstrument' do
      expect(instance).to be_instance_of(SnapTrade::FigiInstrument)
    end
  end
  describe 'test attribute "figi_code"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "figi_share_class"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
