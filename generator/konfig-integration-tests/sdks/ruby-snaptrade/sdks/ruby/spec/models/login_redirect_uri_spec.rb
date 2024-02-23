=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::LoginRedirectURI
describe SnapTrade::LoginRedirectURI do
  let(:instance) { SnapTrade::LoginRedirectURI.new }

  describe 'test an instance of LoginRedirectURI' do
    it 'should create an instance of LoginRedirectURI' do
      expect(instance).to be_instance_of(SnapTrade::LoginRedirectURI)
    end
  end
  describe 'test attribute "redirect_uri"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "session_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
