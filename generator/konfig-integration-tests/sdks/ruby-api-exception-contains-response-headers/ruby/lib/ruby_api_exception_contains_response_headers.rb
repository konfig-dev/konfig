=begin
#ruby-api-exception-contains-response-headers API

#A simple API based for testing ruby-api-exception-contains-response-headers.

The version of the OpenAPI document: 1.0.0
Contact: support@example.com
=end

require 'forwardable'

# Common files
require 'ruby_api_exception_contains_response_headers/api_client'
require 'ruby_api_exception_contains_response_headers/api_error'
require 'ruby_api_exception_contains_response_headers/version'
require 'ruby_api_exception_contains_response_headers/configuration'

# Models

# APIs
require 'ruby_api_exception_contains_response_headers/api/test_api'

module RubyApiExceptionContainsResponseHeaders
  @config = Configuration.default
  SENTINEL = Object.new
  class << self

    private def is_sentinel(value)
      value == SENTINEL
    end

    def host
      @config.host
    end

    def host=(value)
      @config.host = value
    end
    # api key from OpenAPI spec
    def api_key
      @config.api_key
    end

    def api_key=(value)
      @config.api_key = value
    end

    # Customize default settings for the SDK using block.
    #   RubyApiExceptionContainsResponseHeaders.configure do |config|
    #     config.host = "http://example.com"
    #   end
    # If no block given, return the default Configuration object.
    def configure
      if block_given?
        yield(Configuration.default)
      else
        Configuration.default
      end
    end
  end

  class Client
    attr_reader :test

    def initialize(config = Configuration.default)
      @api_client = ApiClient::new(config)
      @test = RubyApiExceptionContainsResponseHeaders::TestApi.new(@api_client)
    end
  end
end
