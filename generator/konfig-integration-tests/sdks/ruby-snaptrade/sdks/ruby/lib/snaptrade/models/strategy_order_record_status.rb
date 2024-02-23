=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'date'
require 'time'

module SnapTrade
  class StrategyOrderRecordStatus
    PENDING = "PENDING".freeze
    ACCEPTED = "ACCEPTED".freeze
    FAILED = "FAILED".freeze
    REJECTED = "REJECTED".freeze
    CANCELED = "CANCELED".freeze
    PARTIAL_CANCELED = "PARTIAL_CANCELED".freeze
    CANCEL_PENDING = "CANCEL_PENDING".freeze
    EXECUTED = "EXECUTED".freeze
    PARTIAL = "PARTIAL".freeze
    REPLACE_PENDING = "REPLACE_PENDING".freeze
    REPLACED = "REPLACED".freeze
    STOPPED = "STOPPED".freeze
    SUSPENDED = "SUSPENDED".freeze
    EXPIRED = "EXPIRED".freeze
    QUEUED = "QUEUED".freeze
    TRIGGERED = "TRIGGERED".freeze
    ACTIVATED = "ACTIVATED".freeze
    PENDING_RISK_REVIEW = "PENDING_RISK_REVIEW".freeze
    CONTINGENT_ORDER = "CONTINGENT_ORDER".freeze

    def self.all_vars
      @all_vars ||= [PENDING, ACCEPTED, FAILED, REJECTED, CANCELED, PARTIAL_CANCELED, CANCEL_PENDING, EXECUTED, PARTIAL, REPLACE_PENDING, REPLACED, STOPPED, SUSPENDED, EXPIRED, QUEUED, TRIGGERED, ACTIVATED, PENDING_RISK_REVIEW, CONTINGENT_ORDER].freeze
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
      return value if StrategyOrderRecordStatus.all_vars.include?(value)
      raise "Invalid ENUM value #{value} for class #StrategyOrderRecordStatus"
    end
  end
end
