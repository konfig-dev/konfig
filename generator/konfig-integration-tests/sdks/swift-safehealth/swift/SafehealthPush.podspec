Pod::Spec.new do |s|
  s.name = 'SafehealthPush'
  s.swift_version = '5.0'
  s.ios.deployment_target = '13.0'
  s.osx.deployment_target = '13.0'
  s.tvos.deployment_target = '9.0'
  s.watchos.deployment_target = '4.0'
  s.version = '0.1.5'
  s.source = { :git => 'https://github.com/konfig-dev/safehealth-push-swift-sdk.git', :tag => 'v0.1.5' }
  s.authors = 'safehealth.me'
  s.license = { :type => 'MIT', :file => 'LICENSE' }
  s.homepage = 'https://github.com/konfig-dev/safehealth-push-swift-sdk'
  s.summary = 'SafehealthPush Swift SDK'
  s.source_files = 'SafehealthPush/**/*.swift'
  s.dependency 'AnyCodable-Konfig', '~> 0.6.9'
end
