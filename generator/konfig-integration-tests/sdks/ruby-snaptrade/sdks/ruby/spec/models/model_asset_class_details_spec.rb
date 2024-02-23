=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ModelAssetClassDetails
describe SnapTrade::ModelAssetClassDetails do
  let(:instance) { SnapTrade::ModelAssetClassDetails.new }

  describe 'test an instance of ModelAssetClassDetails' do
    it 'should create an instance of ModelAssetClassDetails' do
      expect(instance).to be_instance_of(SnapTrade::ModelAssetClassDetails)
    end
  end
  describe 'test attribute "model_asset_class"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "model_asset_class_target"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
