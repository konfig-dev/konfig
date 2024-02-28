=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'date'
require 'time'

module Carbon
  class OrganizationUserFilesToSyncFilters
    attr_accessor :tags

    attr_accessor :source

    attr_accessor :name

    attr_accessor :tags_v2

    attr_accessor :ids

    attr_accessor :external_file_ids

    attr_accessor :sync_statuses

    attr_accessor :parent_file_ids

    attr_accessor :organization_user_data_source_id

    attr_accessor :embedding_generators

    attr_accessor :root_files_only

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'tags' => :'tags',
        :'source' => :'source',
        :'name' => :'name',
        :'tags_v2' => :'tags_v2',
        :'ids' => :'ids',
        :'external_file_ids' => :'external_file_ids',
        :'sync_statuses' => :'sync_statuses',
        :'parent_file_ids' => :'parent_file_ids',
        :'organization_user_data_source_id' => :'organization_user_data_source_id',
        :'embedding_generators' => :'embedding_generators',
        :'root_files_only' => :'root_files_only'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'tags' => :'Hash<String, Tags1>',
        :'source' => :'SourceProperty',
        :'name' => :'String',
        :'tags_v2' => :'Object',
        :'ids' => :'Array<Integer>',
        :'external_file_ids' => :'Array<String>',
        :'sync_statuses' => :'Array<ExternalFileSyncStatuses>',
        :'parent_file_ids' => :'Array<Integer>',
        :'organization_user_data_source_id' => :'Array<Integer>',
        :'embedding_generators' => :'Array<EmbeddingGenerators>',
        :'root_files_only' => :'Boolean'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
        :'tags',
        :'source',
        :'name',
        :'tags_v2',
        :'ids',
        :'external_file_ids',
        :'sync_statuses',
        :'parent_file_ids',
        :'organization_user_data_source_id',
        :'embedding_generators',
        :'root_files_only'
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `Carbon::OrganizationUserFilesToSyncFilters` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `Carbon::OrganizationUserFilesToSyncFilters`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'tags')
        if (value = attributes[:'tags']).is_a?(Hash)
          self.tags = value
        end
      end

      if attributes.key?(:'source')
        self.source = attributes[:'source']
      end

      if attributes.key?(:'name')
        self.name = attributes[:'name']
      end

      if attributes.key?(:'tags_v2')
        self.tags_v2 = attributes[:'tags_v2']
      end

      if attributes.key?(:'ids')
        if (value = attributes[:'ids']).is_a?(Array)
          self.ids = value
        end
      end

      if attributes.key?(:'external_file_ids')
        if (value = attributes[:'external_file_ids']).is_a?(Array)
          self.external_file_ids = value
        end
      end

      if attributes.key?(:'sync_statuses')
        if (value = attributes[:'sync_statuses']).is_a?(Array)
          self.sync_statuses = value
        end
      end

      if attributes.key?(:'parent_file_ids')
        if (value = attributes[:'parent_file_ids']).is_a?(Array)
          self.parent_file_ids = value
        end
      end

      if attributes.key?(:'organization_user_data_source_id')
        if (value = attributes[:'organization_user_data_source_id']).is_a?(Array)
          self.organization_user_data_source_id = value
        end
      end

      if attributes.key?(:'embedding_generators')
        if (value = attributes[:'embedding_generators']).is_a?(Array)
          self.embedding_generators = value
        end
      end

      if attributes.key?(:'root_files_only')
        self.root_files_only = attributes[:'root_files_only']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          tags == o.tags &&
          source == o.source &&
          name == o.name &&
          tags_v2 == o.tags_v2 &&
          ids == o.ids &&
          external_file_ids == o.external_file_ids &&
          sync_statuses == o.sync_statuses &&
          parent_file_ids == o.parent_file_ids &&
          organization_user_data_source_id == o.organization_user_data_source_id &&
          embedding_generators == o.embedding_generators &&
          root_files_only == o.root_files_only
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [tags, source, name, tags_v2, ids, external_file_ids, sync_statuses, parent_file_ids, organization_user_data_source_id, embedding_generators, root_files_only].hash
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
