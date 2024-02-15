Pod::Spec.new do |s|
  s.name = 'SnapTrade'
  s.swift_version = '5.0'
  s.ios.deployment_target = '13.0'
  s.osx.deployment_target = '13.0'
  s.tvos.deployment_target = '9.0'
  s.watchos.deployment_target = '4.0'
  s.version = '1.0.0'
  s.source = { :git => 'https://github.com/passiv/snaptrade-sdks.git', :tag => 'v1.0.0' }
  s.authors = 'snaptrade.com'
  s.license = { :type => 'MIT', :file => 'LICENSE' }
  s.homepage = 'https://github.com/passiv/snaptrade-sdks/tree/main/swift'
  s.summary = 'SnapTrade Swift SDK'
  s.source_files = 'SnapTrade/**/*.swift'
  s.dependency 'AnyCodable-Konfig', '~> 0.6.9'
end
