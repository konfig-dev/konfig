=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'date'
require 'time'

module Carbon
  class GmailSyncInput
    attr_accessor :tags

    attr_accessor :filters

    attr_accessor :chunk_size

    attr_accessor :chunk_overlap

    attr_accessor :skip_embedding_generation

    attr_accessor :embedding_model

    attr_accessor :generate_sparse_vectors

    attr_accessor :prepend_filename_to_chunks

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'tags' => :'tags',
        :'filters' => :'filters',
        :'chunk_size' => :'chunk_size',
        :'chunk_overlap' => :'chunk_overlap',
        :'skip_embedding_generation' => :'skip_embedding_generation',
        :'embedding_model' => :'embedding_model',
        :'generate_sparse_vectors' => :'generate_sparse_vectors',
        :'prepend_filename_to_chunks' => :'prepend_filename_to_chunks'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'tags' => :'Object',
        :'filters' => :'Object',
        :'chunk_size' => :'Integer',
        :'chunk_overlap' => :'Integer',
        :'skip_embedding_generation' => :'Boolean',
        :'embedding_model' => :'EmbeddingGenerators',
        :'generate_sparse_vectors' => :'Boolean',
        :'prepend_filename_to_chunks' => :'Boolean'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
        :'tags',
        :'chunk_size',
        :'chunk_overlap',
        :'skip_embedding_generation',
        :'generate_sparse_vectors',
        :'prepend_filename_to_chunks'
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `Carbon::GmailSyncInput` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `Carbon::GmailSyncInput`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'tags')
        self.tags = attributes[:'tags']
      end

      if attributes.key?(:'filters')
        self.filters = attributes[:'filters']
      end

      if attributes.key?(:'chunk_size')
        self.chunk_size = attributes[:'chunk_size']
      else
        self.chunk_size = 1500
      end

      if attributes.key?(:'chunk_overlap')
        self.chunk_overlap = attributes[:'chunk_overlap']
      else
        self.chunk_overlap = 20
      end

      if attributes.key?(:'skip_embedding_generation')
        self.skip_embedding_generation = attributes[:'skip_embedding_generation']
      else
        self.skip_embedding_generation = false
      end

      if attributes.key?(:'embedding_model')
        self.embedding_model = attributes[:'embedding_model']
      else
        self.embedding_model = 'OPENAI'
      end

      if attributes.key?(:'generate_sparse_vectors')
        self.generate_sparse_vectors = attributes[:'generate_sparse_vectors']
      else
        self.generate_sparse_vectors = false
      end

      if attributes.key?(:'prepend_filename_to_chunks')
        self.prepend_filename_to_chunks = attributes[:'prepend_filename_to_chunks']
      else
        self.prepend_filename_to_chunks = false
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @filters.nil?
        invalid_properties.push('invalid value for "filters", filters cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @filters.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          tags == o.tags &&
          filters == o.filters &&
          chunk_size == o.chunk_size &&
          chunk_overlap == o.chunk_overlap &&
          skip_embedding_generation == o.skip_embedding_generation &&
          embedding_model == o.embedding_model &&
          generate_sparse_vectors == o.generate_sparse_vectors &&
          prepend_filename_to_chunks == o.prepend_filename_to_chunks
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [tags, filters, chunk_size, chunk_overlap, skip_embedding_generation, embedding_model, generate_sparse_vectors, prepend_filename_to_chunks].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def self.build_from_hash(attributes)
      new.build_from_hash(attributes)
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      attributes = attributes.transform_keys(&:to_sym)
      self.class.openapi_types.each_pair do |key, type|
        if attributes[self.class.attribute_map[key]].nil? && self.class.openapi_nullable.include?(key)
          self.send("#{key}=", nil)
        elsif type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :Time
        Time.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :Boolean
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        # models (e.g. Pet) or oneOf
        klass = Carbon.const_get(type)
        klass.respond_to?(:openapi_one_of) ? klass.build(value) : klass.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        if value.nil?
          is_nullable = self.class.openapi_nullable.include?(attr)
          next if !is_nullable || (is_nullable && !instance_variable_defined?(:"@#{attr}"))
        end

        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end

end
