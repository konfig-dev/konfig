# -*- encoding: utf-8 -*-

=begin
#ruby-api-exception-contains-response-headers API

#A simple API based for testing ruby-api-exception-contains-response-headers.

The version of the OpenAPI document: 1.0.0
Contact: support@example.com
=end

$:.push File.expand_path("../lib", __FILE__)
require "ruby_api_exception_contains_response_headers/version"

Gem::Specification.new do |s|
  s.name        = "ruby_api_exception_contains_response_headers"
  s.version     = RubyApiExceptionContainsResponseHeaders::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["API Support"]
  s.email       = ["support@example.com"]
  s.homepage    = "http://example.com/support"
  s.summary     = "ruby-api-exception-contains-response-headers API Ruby Gem"
  s.description = "A simple API based for testing ruby-api-exception-contains-response-headers."
  s.license     = "MIT"
  s.required_ruby_version = ">= 2.4"
  s.metadata = {
    "documentation_uri" => "https://github.com/konfig-dev/ruby-api-exception-contains-response-headers",
    "source_code_uri"   => "https://github.com/konfig-dev/ruby-api-exception-contains-response-headers",
  }

  s.add_runtime_dependency 'faraday', '>= 1.0.1', '< 3.0'
  s.add_runtime_dependency 'faraday-multipart', '~> 1.0', '>= 1.0.4'

  s.add_development_dependency 'rspec', '~> 3.6', '>= 3.6.0'

  s.files         = `find *`.split("\n").uniq.sort.select { |f| !f.empty? }
  s.test_files    = `find spec/*`.split("\n")
  s.executables   = []
  s.require_paths = ["lib"]
end
