=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::Model403FailedRequestResponse
describe SnapTrade::Model403FailedRequestResponse do
  let(:instance) { SnapTrade::Model403FailedRequestResponse.new }

  describe 'test an instance of Model403FailedRequestResponse' do
    it 'should create an instance of Model403FailedRequestResponse' do
      expect(instance).to be_instance_of(SnapTrade::Model403FailedRequestResponse)
    end
  end
  describe 'test attribute "default_detail"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "default_code"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
