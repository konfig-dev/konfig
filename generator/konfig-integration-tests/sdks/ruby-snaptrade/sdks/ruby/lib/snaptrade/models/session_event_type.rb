=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'date'
require 'time'

module SnapTrade
  class SessionEventType
    CONNECTION_FAILED = "CONNECTION_FAILED".freeze
    DISCLAIMER_ACCEPTED = "DISCLAIMER_ACCEPTED".freeze
    BROKERAGE_CONNECTION_INITIATED = "BROKERAGE_CONNECTION_INITIATED".freeze
    BROKERAGE_AUTHENTICATION = "BROKERAGE_AUTHENTICATION".freeze
    MFA_AUTHORIZATION = "MFA_AUTHORIZATION".freeze
    CONNECTION_SUCCESSFUL = "CONNECTION_SUCCESSFUL".freeze
    PARTNER_REDIRECT = "PARTNER_REDIRECT".freeze

    def self.all_vars
      @all_vars ||= [CONNECTION_FAILED, DISCLAIMER_ACCEPTED, BROKERAGE_CONNECTION_INITIATED, BROKERAGE_AUTHENTICATION, MFA_AUTHORIZATION, CONNECTION_SUCCESSFUL, PARTNER_REDIRECT].freeze
    end

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def self.build_from_hash(value)
      new.build_from_hash(value)
    end

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def build_from_hash(value)
      return value if SessionEventType.all_vars.include?(value)
      raise "Invalid ENUM value #{value} for class #SessionEventType"
    end
  end
end
