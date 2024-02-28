=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'date'
require 'time'

module Carbon
  class UserFile
    attr_accessor :tags

    attr_accessor :id

    attr_accessor :source

    attr_accessor :organization_id

    attr_accessor :organization_supplied_user_id

    attr_accessor :organization_user_data_source_id

    attr_accessor :external_file_id

    attr_accessor :external_url

    attr_accessor :sync_status

    attr_accessor :sync_error_message

    attr_accessor :last_sync

    attr_accessor :file_statistics

    attr_accessor :file_metadata

    attr_accessor :embedding_properties

    attr_accessor :chunk_size

    attr_accessor :chunk_overlap

    attr_accessor :chunk_properties

    attr_accessor :name

    attr_accessor :parent_id

    attr_accessor :enable_auto_sync

    attr_accessor :presigned_url

    attr_accessor :parsed_text_url

    attr_accessor :additional_presigned_urls

    attr_accessor :skip_embedding_generation

    attr_accessor :source_created_at

    attr_accessor :generate_sparse_vectors

    attr_accessor :created_at

    attr_accessor :updated_at

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'tags' => :'tags',
        :'id' => :'id',
        :'source' => :'source',
        :'organization_id' => :'organization_id',
        :'organization_supplied_user_id' => :'organization_supplied_user_id',
        :'organization_user_data_source_id' => :'organization_user_data_source_id',
        :'external_file_id' => :'external_file_id',
        :'external_url' => :'external_url',
        :'sync_status' => :'sync_status',
        :'sync_error_message' => :'sync_error_message',
        :'last_sync' => :'last_sync',
        :'file_statistics' => :'file_statistics',
        :'file_metadata' => :'file_metadata',
        :'embedding_properties' => :'embedding_properties',
        :'chunk_size' => :'chunk_size',
        :'chunk_overlap' => :'chunk_overlap',
        :'chunk_properties' => :'chunk_properties',
        :'name' => :'name',
        :'parent_id' => :'parent_id',
        :'enable_auto_sync' => :'enable_auto_sync',
        :'presigned_url' => :'presigned_url',
        :'parsed_text_url' => :'parsed_text_url',
        :'additional_presigned_urls' => :'additional_presigned_urls',
        :'skip_embedding_generation' => :'skip_embedding_generation',
        :'source_created_at' => :'source_created_at',
        :'generate_sparse_vectors' => :'generate_sparse_vectors',
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
        :'tags' => :'Object',
        :'id' => :'Integer',
        :'source' => :'DataSourceType',
        :'organization_id' => :'Integer',
        :'organization_supplied_user_id' => :'String',
        :'organization_user_data_source_id' => :'Integer',
        :'external_file_id' => :'String',
        :'external_url' => :'String',
        :'sync_status' => :'ExternalFileSyncStatuses',
        :'sync_error_message' => :'String',
        :'last_sync' => :'Time',
        :'file_statistics' => :'FileStatisticsNullable',
        :'file_metadata' => :'Object',
        :'embedding_properties' => :'Hash<String, EmbeddingProperties>',
        :'chunk_size' => :'Integer',
        :'chunk_overlap' => :'Integer',
        :'chunk_properties' => :'ChunkPropertiesNullable',
        :'name' => :'String',
        :'parent_id' => :'Integer',
        :'enable_auto_sync' => :'Boolean',
        :'presigned_url' => :'String',
        :'parsed_text_url' => :'String',
        :'additional_presigned_urls' => :'Object',
        :'skip_embedding_generation' => :'Boolean',
        :'source_created_at' => :'Time',
        :'generate_sparse_vectors' => :'Boolean',
        :'created_at' => :'Time',
        :'updated_at' => :'Time'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
        :'tags',
        :'organization_user_data_source_id',
        :'external_url',
        :'sync_error_message',
        :'last_sync',
        :'file_statistics',
        :'file_metadata',
        :'embedding_properties',
        :'chunk_size',
        :'chunk_overlap',
        :'chunk_properties',
        :'name',
        :'parent_id',
        :'enable_auto_sync',
        :'presigned_url',
        :'parsed_text_url',
        :'additional_presigned_urls',
        :'source_created_at',
        :'generate_sparse_vectors',
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `Carbon::UserFile` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `Carbon::UserFile`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'tags')
        self.tags = attributes[:'tags']
      end

      if attributes.key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.key?(:'source')
        self.source = attributes[:'source']
      end

      if attributes.key?(:'organization_id')
        self.organization_id = attributes[:'organization_id']
      end

      if attributes.key?(:'organization_supplied_user_id')
        self.organization_supplied_user_id = attributes[:'organization_supplied_user_id']
      end

      if attributes.key?(:'organization_user_data_source_id')
        self.organization_user_data_source_id = attributes[:'organization_user_data_source_id']
      end

      if attributes.key?(:'external_file_id')
        self.external_file_id = attributes[:'external_file_id']
      end

      if attributes.key?(:'external_url')
        self.external_url = attributes[:'external_url']
      end

      if attributes.key?(:'sync_status')
        self.sync_status = attributes[:'sync_status']
      end

      if attributes.key?(:'sync_error_message')
        self.sync_error_message = attributes[:'sync_error_message']
      end

      if attributes.key?(:'last_sync')
        self.last_sync = attributes[:'last_sync']
      end

      if attributes.key?(:'file_statistics')
        self.file_statistics = attributes[:'file_statistics']
      end

      if attributes.key?(:'file_metadata')
        self.file_metadata = attributes[:'file_metadata']
      end

      if attributes.key?(:'embedding_properties')
        if (value = attributes[:'embedding_properties']).is_a?(Hash)
          self.embedding_properties = value
        end
      end

      if attributes.key?(:'chunk_size')
        self.chunk_size = attributes[:'chunk_size']
      end

      if attributes.key?(:'chunk_overlap')
        self.chunk_overlap = attributes[:'chunk_overlap']
      end

      if attributes.key?(:'chunk_properties')
        self.chunk_properties = attributes[:'chunk_properties']
      end

      if attributes.key?(:'name')
        self.name = attributes[:'name']
      end

      if attributes.key?(:'parent_id')
        self.parent_id = attributes[:'parent_id']
      end

      if attributes.key?(:'enable_auto_sync')
        self.enable_auto_sync = attributes[:'enable_auto_sync']
      end

      if attributes.key?(:'presigned_url')
        self.presigned_url = attributes[:'presigned_url']
      end

      if attributes.key?(:'parsed_text_url')
        self.parsed_text_url = attributes[:'parsed_text_url']
      end

      if attributes.key?(:'additional_presigned_urls')
        self.additional_presigned_urls = attributes[:'additional_presigned_urls']
      end

      if attributes.key?(:'skip_embedding_generation')
        self.skip_embedding_generation = attributes[:'skip_embedding_generation']
      end

      if attributes.key?(:'source_created_at')
        self.source_created_at = attributes[:'source_created_at']
      end

      if attributes.key?(:'generate_sparse_vectors')
        self.generate_sparse_vectors = attributes[:'generate_sparse_vectors']
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

      if @source.nil?
        invalid_properties.push('invalid value for "source", source cannot be nil.')
      end

      if @organization_id.nil?
        invalid_properties.push('invalid value for "organization_id", organization_id cannot be nil.')
      end

      if @organization_supplied_user_id.nil?
        invalid_properties.push('invalid value for "organization_supplied_user_id", organization_supplied_user_id cannot be nil.')
      end

      if @external_file_id.nil?
        invalid_properties.push('invalid value for "external_file_id", external_file_id cannot be nil.')
      end

      if @sync_status.nil?
        invalid_properties.push('invalid value for "sync_status", sync_status cannot be nil.')
      end

      if @skip_embedding_generation.nil?
        invalid_properties.push('invalid value for "skip_embedding_generation", skip_embedding_generation cannot be nil.')
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
      return false if @source.nil?
      return false if @organization_id.nil?
      return false if @organization_supplied_user_id.nil?
      return false if @external_file_id.nil?
      return false if @sync_status.nil?
      return false if @skip_embedding_generation.nil?
      return false if @created_at.nil?
      return false if @updated_at.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          tags == o.tags &&
          id == o.id &&
          source == o.source &&
          organization_id == o.organization_id &&
          organization_supplied_user_id == o.organization_supplied_user_id &&
          organization_user_data_source_id == o.organization_user_data_source_id &&
          external_file_id == o.external_file_id &&
          external_url == o.external_url &&
          sync_status == o.sync_status &&
          sync_error_message == o.sync_error_message &&
          last_sync == o.last_sync &&
          file_statistics == o.file_statistics &&
          file_metadata == o.file_metadata &&
          embedding_properties == o.embedding_properties &&
          chunk_size == o.chunk_size &&
          chunk_overlap == o.chunk_overlap &&
          chunk_properties == o.chunk_properties &&
          name == o.name &&
          parent_id == o.parent_id &&
          enable_auto_sync == o.enable_auto_sync &&
          presigned_url == o.presigned_url &&
          parsed_text_url == o.parsed_text_url &&
          additional_presigned_urls == o.additional_presigned_urls &&
          skip_embedding_generation == o.skip_embedding_generation &&
          source_created_at == o.source_created_at &&
          generate_sparse_vectors == o.generate_sparse_vectors &&
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
      [tags, id, source, organization_id, organization_supplied_user_id, organization_user_data_source_id, external_file_id, external_url, sync_status, sync_error_message, last_sync, file_statistics, file_metadata, embedding_properties, chunk_size, chunk_overlap, chunk_properties, name, parent_id, enable_auto_sync, presigned_url, parsed_text_url, additional_presigned_urls, skip_embedding_generation, source_created_at, generate_sparse_vectors, created_at, updated_at].hash
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
