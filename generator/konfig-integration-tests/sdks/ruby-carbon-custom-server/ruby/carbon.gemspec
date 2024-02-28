# -*- encoding: utf-8 -*-

=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

$:.push File.expand_path("../lib", __FILE__)
require "carbon/version"

Gem::Specification.new do |s|
  s.name        = "carbon"
  s.version     = Carbon::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Konfig"]
  s.email       = ["engineering@konfigthis.com"]
  s.homepage    = "https://konfigthis.com"
  s.summary     = "Carbon Ruby Gem"
  s.description = "Connect external data to LLMs, no matter the source."
  s.license     = "MIT"
  s.required_ruby_version = ">= 2.4"
  s.metadata = {
    "documentation_uri" => "https://github.com/Carbon-for-Developers/carbon-sdks/tree/main/ruby",
    "source_code_uri"   => "https://github.com/Carbon-for-Developers/carbon-sdks/tree/main/ruby",
  }

  s.add_runtime_dependency 'faraday', '>= 1.0.1', '< 3.0'
  s.add_runtime_dependency 'faraday-multipart', '~> 1.0', '>= 1.0.4'

  s.add_development_dependency 'rspec', '~> 3.6', '>= 3.6.0'

  s.files         = `find *`.split("\n").uniq.sort.select { |f| !f.empty? }
  s.test_files    = `find spec/*`.split("\n")
  s.executables   = []
  s.require_paths = ["lib"]
end
