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
    OAUTH_REDIRECT = "OAUTH_REDIRECT".freeze
    DISCLAIMER_ACCEPTED = "DISCLAIMER_ACCEPTED".freeze
    BROKERAGE_CONNECTION_INITIATED = "BROKERAGE_CONNECTION_INITIATED".freeze
    BROKERAGE_RECONNECT_INITIATED = "BROKERAGE_RECONNECT_INITIATED".freeze
    BROKERAGE_AUTHENTICATION = "BROKERAGE_AUTHENTICATION".freeze
    OAUTH_BROKERAGE_AUTHENTICATION = "OAUTH_BROKERAGE_AUTHENTICATION".freeze
    MFA_REQUESTED = "MFA_REQUESTED".freeze
    MFA_SUBMITTED = "MFA_SUBMITTED".freeze
    MFA_CHOICE_REQUESTED = "MFA_CHOICE_REQUESTED".freeze
    MFA_CHOICE_SUBMITTED = "MFA_CHOICE_SUBMITTED".freeze
    CONNECTION_SUCCESSFUL = "CONNECTION_SUCCESSFUL".freeze
    CONNECTION_FAILED = "CONNECTION_FAILED".freeze
    PARTNER_REDIRECT = "PARTNER_REDIRECT".freeze
    CONNECTION_ABORTED = "CONNECTION_ABORTED".freeze
    SESSION_STARTED = "SESSION_STARTED".freeze

    def self.all_vars
      @all_vars ||= [OAUTH_REDIRECT, DISCLAIMER_ACCEPTED, BROKERAGE_CONNECTION_INITIATED, BROKERAGE_RECONNECT_INITIATED, BROKERAGE_AUTHENTICATION, OAUTH_BROKERAGE_AUTHENTICATION, MFA_REQUESTED, MFA_SUBMITTED, MFA_CHOICE_REQUESTED, MFA_CHOICE_SUBMITTED, CONNECTION_SUCCESSFUL, CONNECTION_FAILED, PARTNER_REDIRECT, CONNECTION_ABORTED, SESSION_STARTED].freeze
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
