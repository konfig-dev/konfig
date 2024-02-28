=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'date'
require 'time'

module Carbon
  class ExternalFileSyncStatuses
    DELAYED = "DELAYED".freeze
    QUEUED_FOR_SYNC = "QUEUED_FOR_SYNC".freeze
    SYNCING = "SYNCING".freeze
    READY = "READY".freeze
    SYNC_ERROR = "SYNC_ERROR".freeze
    EVALUATING_RESYNC = "EVALUATING_RESYNC".freeze
    RATE_LIMITED = "RATE_LIMITED".freeze
    SYNC_ABORTED = "SYNC_ABORTED".freeze
    QUEUED_FOR_OCR = "QUEUED_FOR_OCR".freeze

    def self.all_vars
      @all_vars ||= [DELAYED, QUEUED_FOR_SYNC, SYNCING, READY, SYNC_ERROR, EVALUATING_RESYNC, RATE_LIMITED, SYNC_ABORTED, QUEUED_FOR_OCR].freeze
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
      return value if ExternalFileSyncStatuses.all_vars.include?(value)
      raise "Invalid ENUM value #{value} for class #ExternalFileSyncStatuses"
    end
  end
end
