=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::ModelAssetClassTarget
describe SnapTrade::ModelAssetClassTarget do
  let(:instance) { SnapTrade::ModelAssetClassTarget.new }

  describe 'test an instance of ModelAssetClassTarget' do
    it 'should create an instance of ModelAssetClassTarget' do
      expect(instance).to be_instance_of(SnapTrade::ModelAssetClassTarget)
    end
  end
  describe 'test attribute "symbol"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
