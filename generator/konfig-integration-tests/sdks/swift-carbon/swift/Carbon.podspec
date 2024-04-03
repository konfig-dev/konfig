Pod::Spec.new do |s|
  s.name = 'Carbon'
  s.swift_version = '5.0'
  s.ios.deployment_target = '13.0'
  s.osx.deployment_target = '13.0'
  s.tvos.deployment_target = '9.0'
  s.watchos.deployment_target = '4.0'
  s.version = '0.1.0'
  s.source = { :git => 'https://github.com/Carbon-for-Developers/carbon-sdks.git', :tag => 'v0.1.0' }
  s.authors = 'carbon.ai'
  s.license = { :type => 'MIT', :file => 'LICENSE' }
  s.homepage = 'https://github.com/Carbon-for-Developers/carbon-sdks/tree/main/swift'
  s.summary = 'Carbon Swift SDK'
  s.source_files = 'Carbon/**/*.swift'
  s.dependency 'AnyCodable-Konfig', '~> 0.6.9'
end
