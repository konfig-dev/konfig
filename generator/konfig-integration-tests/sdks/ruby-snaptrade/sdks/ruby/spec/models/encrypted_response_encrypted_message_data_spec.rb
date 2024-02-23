=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SnapTrade::EncryptedResponseEncryptedMessageData
describe SnapTrade::EncryptedResponseEncryptedMessageData do
  let(:instance) { SnapTrade::EncryptedResponseEncryptedMessageData.new }

  describe 'test an instance of EncryptedResponseEncryptedMessageData' do
    it 'should create an instance of EncryptedResponseEncryptedMessageData' do
      expect(instance).to be_instance_of(SnapTrade::EncryptedResponseEncryptedMessageData)
    end
  end
  describe 'test attribute "encrypted_message"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "tag"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "nonce"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
