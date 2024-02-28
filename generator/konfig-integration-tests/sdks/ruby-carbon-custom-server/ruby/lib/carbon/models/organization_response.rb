=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'date'
require 'time'

module Carbon
  class OrganizationResponse
    attr_accessor :id

    attr_accessor :name

    attr_accessor :nickname

    attr_accessor :remove_branding

    attr_accessor :custom_branding

    attr_accessor :custom_limits

    attr_accessor :aggregate_file_size

    attr_accessor :aggregate_num_characters

    attr_accessor :aggregate_num_tokens

    attr_accessor :aggregate_num_embeddings

    attr_accessor :created_at

    attr_accessor :updated_at

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'id' => :'id',
        :'name' => :'name',
        :'nickname' => :'nickname',
        :'remove_branding' => :'remove_branding',
        :'custom_branding' => :'custom_branding',
        :'custom_limits' => :'custom_limits',
        :'aggregate_file_size' => :'aggregate_file_size',
        :'aggregate_num_characters' => :'aggregate_num_characters',
        :'aggregate_num_tokens' => :'aggregate_num_tokens',
        :'aggregate_num_embeddings' => :'aggregate_num_embeddings',
        :'created_at' => :'created_at',
        :'updated_at' => :'updated_at'
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
        :'name' => :'String',
        :'nickname' => :'String',
        :'remove_branding' => :'Boolean',
        :'custom_branding' => :'Object',
        :'custom_limits' => :'Object',
        :'aggregate_file_size' => :'Object',
        :'aggregate_num_characters' => :'Object',
        :'aggregate_num_tokens' => :'Object',
        :'aggregate_num_embeddings' => :'Object',
        :'created_at' => :'Time',
        :'updated_at' => :'Time'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
        :'nickname',
        :'custom_branding',
        :'custom_limits',
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `Carbon::OrganizationResponse` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `Carbon::OrganizationResponse`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.key?(:'name')
        self.name = attributes[:'name']
      end

      if attributes.key?(:'nickname')
        self.nickname = attributes[:'nickname']
      end

      if attributes.key?(:'remove_branding')
        self.remove_branding = attributes[:'remove_branding']
      end

      if attributes.key?(:'custom_branding')
        self.custom_branding = attributes[:'custom_branding']
      end

      if attributes.key?(:'custom_limits')
        self.custom_limits = attributes[:'custom_limits']
      end

      if attributes.key?(:'aggregate_file_size')
        self.aggregate_file_size = attributes[:'aggregate_file_size']
      end

      if attributes.key?(:'aggregate_num_characters')
        self.aggregate_num_characters = attributes[:'aggregate_num_characters']
      end

      if attributes.key?(:'aggregate_num_tokens')
        self.aggregate_num_tokens = attributes[:'aggregate_num_tokens']
      end

      if attributes.key?(:'aggregate_num_embeddings')
        self.aggregate_num_embeddings = attributes[:'aggregate_num_embeddings']
      end

      if attributes.key?(:'created_at')
        self.created_at = attributes[:'created_at']
      end

      if attributes.key?(:'updated_at')
        self.updated_at = attributes[:'updated_at']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @id.nil?
        invalid_properties.push('invalid value for "id", id cannot be nil.')
      end

      if @name.nil?
        invalid_properties.push('invalid value for "name", name cannot be nil.')
      end

      if @remove_branding.nil?
        invalid_properties.push('invalid value for "remove_branding", remove_branding cannot be nil.')
      end

      if @aggregate_file_size.nil?
        invalid_properties.push('invalid value for "aggregate_file_size", aggregate_file_size cannot be nil.')
      end

      if @aggregate_num_characters.nil?
        invalid_properties.push('invalid value for "aggregate_num_characters", aggregate_num_characters cannot be nil.')
      end

      if @aggregate_num_tokens.nil?
        invalid_properties.push('invalid value for "aggregate_num_tokens", aggregate_num_tokens cannot be nil.')
      end

      if @aggregate_num_embeddings.nil?
        invalid_properties.push('invalid value for "aggregate_num_embeddings", aggregate_num_embeddings cannot be nil.')
      end

      if @created_at.nil?
        invalid_properties.push('invalid value for "created_at", created_at cannot be nil.')
      end

      if @updated_at.nil?
        invalid_properties.push('invalid value for "updated_at", updated_at cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @id.nil?
      return false if @name.nil?
      return false if @remove_branding.nil?
      return false if @aggregate_file_size.nil?
      return false if @aggregate_num_characters.nil?
      return false if @aggregate_num_tokens.nil?
      return false if @aggregate_num_embeddings.nil?
      return false if @created_at.nil?
      return false if @updated_at.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          id == o.id &&
          name == o.name &&
          nickname == o.nickname &&
          remove_branding == o.remove_branding &&
          custom_branding == o.custom_branding &&
          custom_limits == o.custom_limits &&
          aggregate_file_size == o.aggregate_file_size &&
          aggregate_num_characters == o.aggregate_num_characters &&
          aggregate_num_tokens == o.aggregate_num_tokens &&
          aggregate_num_embeddings == o.aggregate_num_embeddings &&
          created_at == o.created_at &&
          updated_at == o.updated_at
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [id, name, nickname, remove_branding, custom_branding, custom_limits, aggregate_file_size, aggregate_num_characters, aggregate_num_tokens, aggregate_num_embeddings, created_at, updated_at].hash
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
