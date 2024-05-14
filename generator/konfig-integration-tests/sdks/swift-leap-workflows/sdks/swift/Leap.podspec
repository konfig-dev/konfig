Pod::Spec.new do |s|
  s.name = 'Leap'
  s.swift_version = '5.0'
  s.ios.deployment_target = '13.0'
  s.osx.deployment_target = '13.0'
  s.tvos.deployment_target = '9.0'
  s.watchos.deployment_target = '4.0'
  s.version = '0.1.0'
  s.source = { :git => 'https://github.com/leap-ai/leap-workflows-swift-sdk.git', :tag => 'v0.1.0' }
  s.authors = 'tryleap.ai'
  s.license = { :type => 'MIT', :file => 'LICENSE' }
  s.homepage = 'https://github.com/leap-ai/leap-workflows-swift-sdk'
  s.summary = 'Leap Swift SDK'
  s.source_files = 'Leap/**/*.swift'
  s.dependency 'AnyCodable-Konfig', '~> 0.6.9'
end
