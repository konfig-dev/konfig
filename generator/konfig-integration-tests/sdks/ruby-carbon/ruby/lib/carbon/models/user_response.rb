=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'date'
require 'time'

module Carbon
  class UserResponse
    attr_accessor :id

    attr_accessor :organization_id

    attr_accessor :organization_supplied_user_id

    attr_accessor :created_at

    attr_accessor :updated_at

    attr_accessor :deleted_at

    attr_accessor :num_files_synced

    attr_accessor :num_characters_synced

    attr_accessor :num_tokens_synced

    attr_accessor :unique_file_tags

    attr_accessor :enabled_features

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'id' => :'id',
        :'organization_id' => :'organization_id',
        :'organization_supplied_user_id' => :'organization_supplied_user_id',
        :'created_at' => :'created_at',
        :'updated_at' => :'updated_at',
        :'deleted_at' => :'deleted_at',
        :'num_files_synced' => :'num_files_synced',
        :'num_characters_synced' => :'num_characters_synced',
        :'num_tokens_synced' => :'num_tokens_synced',
        :'unique_file_tags' => :'unique_file_tags',
        :'enabled_features' => :'enabled_features'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'id' => :'Integer',
        :'organization_id' => :'Integer',
        :'organization_supplied_user_id' => :'String',
        :'created_at' => :'Time',
        :'updated_at' => :'Time',
        :'deleted_at' => :'Time',
        :'num_files_synced' => :'Integer',
        :'num_characters_synced' => :'Integer',
        :'num_tokens_synced' => :'Integer',
        :'unique_file_tags' => :'Array<Object>',
        :'enabled_features' => :'Object'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
        :'deleted_at',
        :'enabled_features'
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `Carbon::UserResponse` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `Carbon::UserResponse`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.key?(:'organization_id')
        self.organization_id = attributes[:'organization_id']
      end

      if attributes.key?(:'organization_supplied_user_id')
        self.organization_supplied_user_id = attributes[:'organization_supplied_user_id']
      end

      if attributes.key?(:'created_at')
        self.created_at = attributes[:'created_at']
      end

      if attributes.key?(:'updated_at')
        self.updated_at = attributes[:'updated_at']
      end

      if attributes.key?(:'deleted_at')
        self.deleted_at = attributes[:'deleted_at']
      end

      if attributes.key?(:'num_files_synced')
        self.num_files_synced = attributes[:'num_files_synced']
      end

      if attributes.key?(:'num_characters_synced')
        self.num_characters_synced = attributes[:'num_characters_synced']
      end

      if attributes.key?(:'num_tokens_synced')
        self.num_tokens_synced = attributes[:'num_tokens_synced']
      end

      if attributes.key?(:'unique_file_tags')
        if (value = attributes[:'unique_file_tags']).is_a?(Array)
          self.unique_file_tags = value
        end
      end

      if attributes.key?(:'enabled_features')
        self.enabled_features = attributes[:'enabled_features']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @id.nil?
        invalid_properties.push('invalid value for "id", id cannot be nil.')
      end

      if @organization_id.nil?
        invalid_properties.push('invalid value for "organization_id", organization_id cannot be nil.')
      end

      if @organization_supplied_user_id.nil?
        invalid_properties.push('invalid value for "organization_supplied_user_id", organization_supplied_user_id cannot be nil.')
      end

      if @created_at.nil?
        invalid_properties.push('invalid value for "created_at", created_at cannot be nil.')
      end

      if @updated_at.nil?
        invalid_properties.push('invalid value for "updated_at", updated_at cannot be nil.')
      end

      if @num_files_synced.nil?
        invalid_properties.push('invalid value for "num_files_synced", num_files_synced cannot be nil.')
      end

      if @num_characters_synced.nil?
        invalid_properties.push('invalid value for "num_characters_synced", num_characters_synced cannot be nil.')
      end

      if @num_tokens_synced.nil?
        invalid_properties.push('invalid value for "num_tokens_synced", num_tokens_synced cannot be nil.')
      end

      if @unique_file_tags.nil?
        invalid_properties.push('invalid value for "unique_file_tags", unique_file_tags cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @id.nil?
      return false if @organization_id.nil?
      return false if @organization_supplied_user_id.nil?
      return false if @created_at.nil?
      return false if @updated_at.nil?
      return false if @num_files_synced.nil?
      return false if @num_characters_synced.nil?
      return false if @num_tokens_synced.nil?
      return false if @unique_file_tags.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          id == o.id &&
          organization_id == o.organization_id &&
          organization_supplied_user_id == o.organization_supplied_user_id &&
          created_at == o.created_at &&
          updated_at == o.updated_at &&
          deleted_at == o.deleted_at &&
          num_files_synced == o.num_files_synced &&
          num_characters_synced == o.num_characters_synced &&
          num_tokens_synced == o.num_tokens_synced &&
          unique_file_tags == o.unique_file_tags &&
          enabled_features == o.enabled_features
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [id, organization_id, organization_supplied_user_id, created_at, updated_at, deleted_at, num_files_synced, num_characters_synced, num_tokens_synced, unique_file_tags, enabled_features].hash
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
