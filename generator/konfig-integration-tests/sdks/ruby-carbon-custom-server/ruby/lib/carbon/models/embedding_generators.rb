=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'date'
require 'time'

module Carbon
  class EmbeddingGenerators
    OPENAI = "OPENAI".freeze
    AZURE_OPENAI = "AZURE_OPENAI".freeze
    COHERE_MULTILINGUAL_V3 = "COHERE_MULTILINGUAL_V3".freeze
    VERTEX_MULTIMODAL = "VERTEX_MULTIMODAL".freeze
    OPENAI_ADA_LARGE_256 = "OPENAI_ADA_LARGE_256".freeze
    OPENAI_ADA_LARGE_1024 = "OPENAI_ADA_LARGE_1024".freeze
    OPENAI_ADA_LARGE_3072 = "OPENAI_ADA_LARGE_3072".freeze
    OPENAI_ADA_SMALL_512 = "OPENAI_ADA_SMALL_512".freeze
    OPENAI_ADA_SMALL_1536 = "OPENAI_ADA_SMALL_1536".freeze

    def self.all_vars
      @all_vars ||= [OPENAI, AZURE_OPENAI, COHERE_MULTILINGUAL_V3, VERTEX_MULTIMODAL, OPENAI_ADA_LARGE_256, OPENAI_ADA_LARGE_1024, OPENAI_ADA_LARGE_3072, OPENAI_ADA_SMALL_512, OPENAI_ADA_SMALL_1536].freeze
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
      return value if EmbeddingGenerators.all_vars.include?(value)
      raise "Invalid ENUM value #{value} for class #EmbeddingGenerators"
    end
  end
end
