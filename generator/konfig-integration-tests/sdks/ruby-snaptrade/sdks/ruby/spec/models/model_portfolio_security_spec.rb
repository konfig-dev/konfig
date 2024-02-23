=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ModelPortfolioSecurity
describe SnapTrade::ModelPortfolioSecurity do
  let(:instance) { SnapTrade::ModelPortfolioSecurity.new }

  describe 'test an instance of ModelPortfolioSecurity' do
    it 'should create an instance of ModelPortfolioSecurity' do
      expect(instance).to be_instance_of(SnapTrade::ModelPortfolioSecurity)
    end
  end
  describe 'test attribute "symbol"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "percent"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
