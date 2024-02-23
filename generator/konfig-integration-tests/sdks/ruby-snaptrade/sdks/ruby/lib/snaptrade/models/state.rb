=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'date'
require 'time'

module SnapTrade
  class State
    EXECUTED = "Executed".freeze
    CANCELED = "Canceled".freeze
    REJECTED = "Rejected".freeze
    FAILED = "Failed".freeze
    NOT_EXECUTED = "Not Executed".freeze

    def self.all_vars
      @all_vars ||= [EXECUTED, CANCELED, REJECTED, FAILED, NOT_EXECUTED].freeze
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
      return value if State.all_vars.include?(value)
      raise "Invalid ENUM value #{value} for class #State"
    end
  end
end
