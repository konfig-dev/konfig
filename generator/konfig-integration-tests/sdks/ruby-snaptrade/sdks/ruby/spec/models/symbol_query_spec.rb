=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::SymbolQuery
describe SnapTrade::SymbolQuery do
  let(:instance) { SnapTrade::SymbolQuery.new }

  describe 'test an instance of SymbolQuery' do
    it 'should create an instance of SymbolQuery' do
      expect(instance).to be_instance_of(SnapTrade::SymbolQuery)
    end
  end
  describe 'test attribute "substring"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
