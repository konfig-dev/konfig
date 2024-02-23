=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::EncryptedResponse
describe SnapTrade::EncryptedResponse do
  let(:instance) { SnapTrade::EncryptedResponse.new }

  describe 'test an instance of EncryptedResponse' do
    it 'should create an instance of EncryptedResponse' do
      expect(instance).to be_instance_of(SnapTrade::EncryptedResponse)
    end
  end
  describe 'test attribute "encrypted_shared_key"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "encrypted_message_data"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
