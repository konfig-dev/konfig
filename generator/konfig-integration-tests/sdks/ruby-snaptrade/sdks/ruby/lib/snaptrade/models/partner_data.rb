=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'date'
require 'time'

module SnapTrade
  # SnapTrade Partner metadata
  class PartnerData
    # URI to redirect user back to after user is done adding brokerage connections
    attr_accessor :redirect_uri

    # Brokerages that can be accessed by partners
    attr_accessor :allowed_brokerages

    # Name of Snaptrade Partner
    attr_accessor :name

    # Slug of Snaptrade Partner
    attr_accessor :slug

    # URL to partner's logo
    attr_accessor :logo_url

    # Shows if pin is required by users to access connection page
    attr_accessor :pin_required

    # Shows if users of Snaptrade partners can access trade endpoints
    attr_accessor :can_access_trades

    # Shows if Snaptrade partners can get user holdings data
    attr_accessor :can_access_holdings

    # Shows if Snaptrade partners can get users account history data
    attr_accessor :can_access_account_history

    # Shows if Snaptrade partners can get users holdings data
    attr_accessor :can_access_reference_data

    # Shows if users Snaptrade partners can access portfolio group management features
    attr_accessor :can_access_portfolio_management

    # Shows if Snaptrade partners can get users account order history
    attr_accessor :can_access_orders

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'redirect_uri' => :'redirect_uri',
        :'allowed_brokerages' => :'allowed_brokerages',
        :'name' => :'name',
        :'slug' => :'slug',
        :'logo_url' => :'logo_url',
        :'pin_required' => :'pin_required',
        :'can_access_trades' => :'can_access_trades',
        :'can_access_holdings' => :'can_access_holdings',
        :'can_access_account_history' => :'can_access_account_history',
        :'can_access_reference_data' => :'can_access_reference_data',
        :'can_access_portfolio_management' => :'can_access_portfolio_management',
        :'can_access_orders' => :'can_access_orders'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'redirect_uri' => :'String',
        :'allowed_brokerages' => :'Array<Brokerage>',
        :'name' => :'String',
        :'slug' => :'String',
        :'logo_url' => :'String',
        :'pin_required' => :'Boolean',
        :'can_access_trades' => :'Boolean',
        :'can_access_holdings' => :'Boolean',
        :'can_access_account_history' => :'Boolean',
        :'can_access_reference_data' => :'Boolean',
        :'can_access_portfolio_management' => :'Boolean',
        :'can_access_orders' => :'Boolean'
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
        fail ArgumentError, "The input argument (attributes) must be a hash in `SnapTrade::PartnerData` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `SnapTrade::PartnerData`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'redirect_uri')
        self.redirect_uri = attributes[:'redirect_uri']
      end

      if attributes.key?(:'allowed_brokerages')
        if (value = attributes[:'allowed_brokerages']).is_a?(Array)
          self.allowed_brokerages = value
        end
      end

      if attributes.key?(:'name')
        self.name = attributes[:'name']
      end

      if attributes.key?(:'slug')
        self.slug = attributes[:'slug']
      end

      if attributes.key?(:'logo_url')
        self.logo_url = attributes[:'logo_url']
      end

      if attributes.key?(:'pin_required')
        self.pin_required = attributes[:'pin_required']
      end

      if attributes.key?(:'can_access_trades')
        self.can_access_trades = attributes[:'can_access_trades']
      end

      if attributes.key?(:'can_access_holdings')
        self.can_access_holdings = attributes[:'can_access_holdings']
      end

      if attributes.key?(:'can_access_account_history')
        self.can_access_account_history = attributes[:'can_access_account_history']
      end

      if attributes.key?(:'can_access_reference_data')
        self.can_access_reference_data = attributes[:'can_access_reference_data']
      end

      if attributes.key?(:'can_access_portfolio_management')
        self.can_access_portfolio_management = attributes[:'can_access_portfolio_management']
      end

      if attributes.key?(:'can_access_orders')
        self.can_access_orders = attributes[:'can_access_orders']
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
          redirect_uri == o.redirect_uri &&
          allowed_brokerages == o.allowed_brokerages &&
          name == o.name &&
          slug == o.slug &&
          logo_url == o.logo_url &&
          pin_required == o.pin_required &&
          can_access_trades == o.can_access_trades &&
          can_access_holdings == o.can_access_holdings &&
          can_access_account_history == o.can_access_account_history &&
          can_access_reference_data == o.can_access_reference_data &&
          can_access_portfolio_management == o.can_access_portfolio_management &&
          can_access_orders == o.can_access_orders
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [redirect_uri, allowed_brokerages, name, slug, logo_url, pin_required, can_access_trades, can_access_holdings, can_access_account_history, can_access_reference_data, can_access_portfolio_management, can_access_orders].hash
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
