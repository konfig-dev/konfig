=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ModelPortfolioAssetClass
describe SnapTrade::ModelPortfolioAssetClass do
  let(:instance) { SnapTrade::ModelPortfolioAssetClass.new }

  describe 'test an instance of ModelPortfolioAssetClass' do
    it 'should create an instance of ModelPortfolioAssetClass' do
      expect(instance).to be_instance_of(SnapTrade::ModelPortfolioAssetClass)
    end
  end
  describe 'test attribute "model_asset_class"' do
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
