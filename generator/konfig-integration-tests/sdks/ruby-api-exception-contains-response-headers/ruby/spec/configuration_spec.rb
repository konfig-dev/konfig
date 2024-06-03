=begin
#ruby-api-exception-contains-response-headers API

#A simple API based for testing ruby-api-exception-contains-response-headers.

The version of the OpenAPI document: 1.0.0
Contact: support@example.com
=end

require 'spec_helper'

describe RubyApiExceptionContainsResponseHeaders::Configuration do
  let(:config) { RubyApiExceptionContainsResponseHeaders::Configuration.default }

  before(:each) do
    # uncomment below to setup host and base_path
    # require 'URI'
    # uri = URI.parse("https://ruby-api-exception-contains-response-headers.konfigthis.com")
    # RubyApiExceptionContainsResponseHeaders.configure do |c|
    #   c.host = uri.host
    #   c.base_path = uri.path
    # end
  end

  describe '#base_url' do
    it 'should have the default value' do
      # uncomment below to test default value of the base path
      # expect(config.base_url).to eq("https://ruby-api-exception-contains-response-headers.konfigthis.com")
    end

    it 'should remove trailing slashes' do
      [nil, '', '/', '//'].each do |base_path|
        config.base_path = base_path
        # uncomment below to test trailing slashes
        # expect(config.base_url).to eq("https://ruby-api-exception-contains-response-headers.konfigthis.com")
      end
    end
  end
end
