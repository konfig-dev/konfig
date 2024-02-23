# -*- encoding: utf-8 -*-

=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

$:.push File.expand_path("../lib", __FILE__)
require "snaptrade/version"

Gem::Specification.new do |s|
  s.name        = "snaptrade"
  s.version     = SnapTrade::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["SnapTrade"]
  s.email       = ["api@snaptrade.com"]
  s.homepage    = "https://snaptrade.com/"
  s.summary     = "SnapTrade Ruby Gem"
  s.description = "Connect brokerage accounts to your app for live positions and trading"
  s.license     = "MIT"
  s.required_ruby_version = ">= 2.4"
  s.metadata = {
    "documentation_uri" => "https://github.com/passiv/snaptrade-sdks/tree/master/sdks/ruby",
    "source_code_uri"   => "https://github.com/passiv/snaptrade-sdks/tree/master/sdks/ruby",
  }

  s.add_runtime_dependency 'faraday', '>= 1.0.1', '< 3.0'
  s.add_runtime_dependency 'faraday-multipart', '~> 1.0', '>= 1.0.4'

  s.add_development_dependency 'rspec', '~> 3.6', '>= 3.6.0'

  s.files         = `find *`.split("\n").uniq.sort.select { |f| !f.empty? }
  s.test_files    = `find spec/*`.split("\n")
  s.executables   = []
  s.require_paths = ["lib"]
end
