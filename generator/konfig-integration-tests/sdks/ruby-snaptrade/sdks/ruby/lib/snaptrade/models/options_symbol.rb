=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'date'
require 'time'

module SnapTrade
  # Options Symbol
  class OptionsSymbol
    attr_accessor :id

    attr_accessor :ticker

    attr_accessor :option_type

    attr_accessor :strike_price

    attr_accessor :expiration_date

    attr_accessor :is_mini_option

    attr_accessor :underlying_symbol

    attr_accessor :local_id

    attr_accessor :exchange_id

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'id' => :'id',
        :'ticker' => :'ticker',
        :'option_type' => :'option_type',
        :'strike_price' => :'strike_price',
        :'expiration_date' => :'expiration_date',
        :'is_mini_option' => :'is_mini_option',
        :'underlying_symbol' => :'underlying_symbol',
        :'local_id' => :'local_id',
        :'exchange_id' => :'exchange_id'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'id' => :'String',
        :'ticker' => :'String',
        :'option_type' => :'OptionType',
        :'strike_price' => :'Float',
        :'expiration_date' => :'String',
        :'is_mini_option' => :'Boolean',
        :'underlying_symbol' => :'UnderlyingSymbol',
        :'local_id' => :'String',
        :'exchange_id' => :'String'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `SnapTrade::OptionsSymbol` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `SnapTrade::OptionsSymbol`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.key?(:'ticker')
        self.ticker = attributes[:'ticker']
      end

      if attributes.key?(:'option_type')
        self.option_type = attributes[:'option_type']
      end

      if attributes.key?(:'strike_price')
        self.strike_price = attributes[:'strike_price']
      end

      if attributes.key?(:'expiration_date')
        self.expiration_date = attributes[:'expiration_date']
      end

      if attributes.key?(:'is_mini_option')
        self.is_mini_option = attributes[:'is_mini_option']
      end

      if attributes.key?(:'underlying_symbol')
        self.underlying_symbol = attributes[:'underlying_symbol']
      end

      if attributes.key?(:'local_id')
        self.local_id = attributes[:'local_id']
      end

      if attributes.key?(:'exchange_id')
        self.exchange_id = attributes[:'exchange_id']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @id.nil?
        invalid_properties.push('invalid value for "id", id cannot be nil.')
      end

      if @ticker.nil?
        invalid_properties.push('invalid value for "ticker", ticker cannot be nil.')
      end

      if @option_type.nil?
        invalid_properties.push('invalid value for "option_type", option_type cannot be nil.')
      end

      if @strike_price.nil?
        invalid_properties.push('invalid value for "strike_price", strike_price cannot be nil.')
      end

      if @expiration_date.nil?
        invalid_properties.push('invalid value for "expiration_date", expiration_date cannot be nil.')
      end

      if @underlying_symbol.nil?
        invalid_properties.push('invalid value for "underlying_symbol", underlying_symbol cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @id.nil?
      return false if @ticker.nil?
      return false if @option_type.nil?
      return false if @strike_price.nil?
      return false if @expiration_date.nil?
      return false if @underlying_symbol.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          id == o.id &&
          ticker == o.ticker &&
          option_type == o.option_type &&
          strike_price == o.strike_price &&
          expiration_date == o.expiration_date &&
          is_mini_option == o.is_mini_option &&
          underlying_symbol == o.underlying_symbol &&
          local_id == o.local_id &&
          exchange_id == o.exchange_id
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [id, ticker, option_type, strike_price, expiration_date, is_mini_option, underlying_symbol, local_id, exchange_id].hash
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
        klass = SnapTrade.const_get(type)
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
