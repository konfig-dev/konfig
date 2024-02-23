=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::PortfolioGroup
describe SnapTrade::PortfolioGroup do
  let(:instance) { SnapTrade::PortfolioGroup.new }

  describe 'test an instance of PortfolioGroup' do
    it 'should create an instance of PortfolioGroup' do
      expect(instance).to be_instance_of(SnapTrade::PortfolioGroup)
    end
  end
  describe 'test attribute "id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "name"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
