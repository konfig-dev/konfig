=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ModelPortfolioDetails
describe SnapTrade::ModelPortfolioDetails do
  let(:instance) { SnapTrade::ModelPortfolioDetails.new }

  describe 'test an instance of ModelPortfolioDetails' do
    it 'should create an instance of ModelPortfolioDetails' do
      expect(instance).to be_instance_of(SnapTrade::ModelPortfolioDetails)
    end
  end
  describe 'test attribute "model_portfolio"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "model_portfolio_security"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "model_portfolio_asset_class"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
