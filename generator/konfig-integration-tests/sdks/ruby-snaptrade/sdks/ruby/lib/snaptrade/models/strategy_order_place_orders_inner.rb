=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'date'
require 'time'

module SnapTrade
  class StrategyOrderPlaceOrdersInner
    attr_accessor :id

    attr_accessor :symbol

    attr_accessor :symbol_id

    attr_accessor :total_quantity

    attr_accessor :open_quantity

    attr_accessor :filled_quantity

    attr_accessor :canceled_quantity

    attr_accessor :side

    attr_accessor :order_type

    attr_accessor :limit_price

    attr_accessor :stop_price

    attr_accessor :is_all_or_none

    attr_accessor :is_anonymous

    attr_accessor :iceberg_quantity

    attr_accessor :min_quantity

    attr_accessor :avg_exec_price

    attr_accessor :last_exec_price

    attr_accessor :source

    attr_accessor :time_in_force

    attr_accessor :gtd_date

    attr_accessor :state

    attr_accessor :rejection_reason

    attr_accessor :chain_id

    attr_accessor :creation_time

    attr_accessor :update_time

    attr_accessor :notes

    attr_accessor :primary_route

    attr_accessor :secondary_route

    attr_accessor :order_route

    attr_accessor :venue_holding_order

    attr_accessor :comission_charged

    attr_accessor :exchange_order_id

    attr_accessor :is_significant_share_holder

    attr_accessor :is_insider

    attr_accessor :is_limit_offset_in_dollar

    attr_accessor :user_id

    attr_accessor :placement_commission

    attr_accessor :legs

    attr_accessor :strategy_type

    attr_accessor :trigger_stop_price

    attr_accessor :order_group_id

    attr_accessor :order_class

    attr_accessor :is_cross_zero

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'id' => :'id',
        :'symbol' => :'symbol',
        :'symbol_id' => :'symbolId',
        :'total_quantity' => :'totalQuantity',
        :'open_quantity' => :'openQuantity',
        :'filled_quantity' => :'filledQuantity',
        :'canceled_quantity' => :'canceledQuantity',
        :'side' => :'side',
        :'order_type' => :'orderType',
        :'limit_price' => :'limitPrice',
        :'stop_price' => :'stopPrice',
        :'is_all_or_none' => :'isAllOrNone',
        :'is_anonymous' => :'isAnonymous',
        :'iceberg_quantity' => :'icebergQuantity',
        :'min_quantity' => :'minQuantity',
        :'avg_exec_price' => :'avgExecPrice',
        :'last_exec_price' => :'lastExecPrice',
        :'source' => :'source',
        :'time_in_force' => :'timeInForce',
        :'gtd_date' => :'gtdDate',
        :'state' => :'state',
        :'rejection_reason' => :'rejectionReason',
        :'chain_id' => :'chainId',
        :'creation_time' => :'creationTime',
        :'update_time' => :'updateTime',
        :'notes' => :'notes',
        :'primary_route' => :'primaryRoute',
        :'secondary_route' => :'secondaryRoute',
        :'order_route' => :'orderRoute',
        :'venue_holding_order' => :'venueHoldingOrder',
        :'comission_charged' => :'comissionCharged',
        :'exchange_order_id' => :'exchangeOrderId',
        :'is_significant_share_holder' => :'isSignificantShareHolder',
        :'is_insider' => :'isInsider',
        :'is_limit_offset_in_dollar' => :'isLimitOffsetInDollar',
        :'user_id' => :'userId',
        :'placement_commission' => :'placementCommission',
        :'legs' => :'legs',
        :'strategy_type' => :'strategyType',
        :'trigger_stop_price' => :'triggerStopPrice',
        :'order_group_id' => :'orderGroupId',
        :'order_class' => :'orderClass',
        :'is_cross_zero' => :'isCrossZero'
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
        :'symbol' => :'String',
        :'symbol_id' => :'Integer',
        :'total_quantity' => :'Integer',
        :'open_quantity' => :'Integer',
        :'filled_quantity' => :'Integer',
        :'canceled_quantity' => :'Integer',
        :'side' => :'String',
        :'order_type' => :'String',
        :'limit_price' => :'String',
        :'stop_price' => :'String',
        :'is_all_or_none' => :'Boolean',
        :'is_anonymous' => :'Boolean',
        :'iceberg_quantity' => :'String',
        :'min_quantity' => :'String',
        :'avg_exec_price' => :'Integer',
        :'last_exec_price' => :'String',
        :'source' => :'String',
        :'time_in_force' => :'String',
        :'gtd_date' => :'String',
        :'state' => :'String',
        :'rejection_reason' => :'String',
        :'chain_id' => :'Integer',
        :'creation_time' => :'String',
        :'update_time' => :'String',
        :'notes' => :'String',
        :'primary_route' => :'String',
        :'secondary_route' => :'String',
        :'order_route' => :'String',
        :'venue_holding_order' => :'String',
        :'comission_charged' => :'Integer',
        :'exchange_order_id' => :'String',
        :'is_significant_share_holder' => :'Boolean',
        :'is_insider' => :'Boolean',
        :'is_limit_offset_in_dollar' => :'Boolean',
        :'user_id' => :'Integer',
        :'placement_commission' => :'String',
        :'legs' => :'Array<StrategyOrderPlaceOrdersInnerLegsInner>',
        :'strategy_type' => :'String',
        :'trigger_stop_price' => :'String',
        :'order_group_id' => :'Integer',
        :'order_class' => :'String',
        :'is_cross_zero' => :'Boolean'
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
        fail ArgumentError, "The input argument (attributes) must be a hash in `SnapTrade::StrategyOrderPlaceOrdersInner` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `SnapTrade::StrategyOrderPlaceOrdersInner`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.key?(:'symbol')
        self.symbol = attributes[:'symbol']
      end

      if attributes.key?(:'symbol_id')
        self.symbol_id = attributes[:'symbol_id']
      end

      if attributes.key?(:'total_quantity')
        self.total_quantity = attributes[:'total_quantity']
      end

      if attributes.key?(:'open_quantity')
        self.open_quantity = attributes[:'open_quantity']
      end

      if attributes.key?(:'filled_quantity')
        self.filled_quantity = attributes[:'filled_quantity']
      end

      if attributes.key?(:'canceled_quantity')
        self.canceled_quantity = attributes[:'canceled_quantity']
      end

      if attributes.key?(:'side')
        self.side = attributes[:'side']
      end

      if attributes.key?(:'order_type')
        self.order_type = attributes[:'order_type']
      end

      if attributes.key?(:'limit_price')
        self.limit_price = attributes[:'limit_price']
      end

      if attributes.key?(:'stop_price')
        self.stop_price = attributes[:'stop_price']
      end

      if attributes.key?(:'is_all_or_none')
        self.is_all_or_none = attributes[:'is_all_or_none']
      end

      if attributes.key?(:'is_anonymous')
        self.is_anonymous = attributes[:'is_anonymous']
      end

      if attributes.key?(:'iceberg_quantity')
        self.iceberg_quantity = attributes[:'iceberg_quantity']
      end

      if attributes.key?(:'min_quantity')
        self.min_quantity = attributes[:'min_quantity']
      end

      if attributes.key?(:'avg_exec_price')
        self.avg_exec_price = attributes[:'avg_exec_price']
      end

      if attributes.key?(:'last_exec_price')
        self.last_exec_price = attributes[:'last_exec_price']
      end

      if attributes.key?(:'source')
        self.source = attributes[:'source']
      end

      if attributes.key?(:'time_in_force')
        self.time_in_force = attributes[:'time_in_force']
      end

      if attributes.key?(:'gtd_date')
        self.gtd_date = attributes[:'gtd_date']
      end

      if attributes.key?(:'state')
        self.state = attributes[:'state']
      end

      if attributes.key?(:'rejection_reason')
        self.rejection_reason = attributes[:'rejection_reason']
      end

      if attributes.key?(:'chain_id')
        self.chain_id = attributes[:'chain_id']
      end

      if attributes.key?(:'creation_time')
        self.creation_time = attributes[:'creation_time']
      end

      if attributes.key?(:'update_time')
        self.update_time = attributes[:'update_time']
      end

      if attributes.key?(:'notes')
        self.notes = attributes[:'notes']
      end

      if attributes.key?(:'primary_route')
        self.primary_route = attributes[:'primary_route']
      end

      if attributes.key?(:'secondary_route')
        self.secondary_route = attributes[:'secondary_route']
      end

      if attributes.key?(:'order_route')
        self.order_route = attributes[:'order_route']
      end

      if attributes.key?(:'venue_holding_order')
        self.venue_holding_order = attributes[:'venue_holding_order']
      end

      if attributes.key?(:'comission_charged')
        self.comission_charged = attributes[:'comission_charged']
      end

      if attributes.key?(:'exchange_order_id')
        self.exchange_order_id = attributes[:'exchange_order_id']
      end

      if attributes.key?(:'is_significant_share_holder')
        self.is_significant_share_holder = attributes[:'is_significant_share_holder']
      end

      if attributes.key?(:'is_insider')
        self.is_insider = attributes[:'is_insider']
      end

      if attributes.key?(:'is_limit_offset_in_dollar')
        self.is_limit_offset_in_dollar = attributes[:'is_limit_offset_in_dollar']
      end

      if attributes.key?(:'user_id')
        self.user_id = attributes[:'user_id']
      end

      if attributes.key?(:'placement_commission')
        self.placement_commission = attributes[:'placement_commission']
      end

      if attributes.key?(:'legs')
        if (value = attributes[:'legs']).is_a?(Array)
          self.legs = value
        end
      end

      if attributes.key?(:'strategy_type')
        self.strategy_type = attributes[:'strategy_type']
      end

      if attributes.key?(:'trigger_stop_price')
        self.trigger_stop_price = attributes[:'trigger_stop_price']
      end

      if attributes.key?(:'order_group_id')
        self.order_group_id = attributes[:'order_group_id']
      end

      if attributes.key?(:'order_class')
        self.order_class = attributes[:'order_class']
      end

      if attributes.key?(:'is_cross_zero')
        self.is_cross_zero = attributes[:'is_cross_zero']
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
          id == o.id &&
          symbol == o.symbol &&
          symbol_id == o.symbol_id &&
          total_quantity == o.total_quantity &&
          open_quantity == o.open_quantity &&
          filled_quantity == o.filled_quantity &&
          canceled_quantity == o.canceled_quantity &&
          side == o.side &&
          order_type == o.order_type &&
          limit_price == o.limit_price &&
          stop_price == o.stop_price &&
          is_all_or_none == o.is_all_or_none &&
          is_anonymous == o.is_anonymous &&
          iceberg_quantity == o.iceberg_quantity &&
          min_quantity == o.min_quantity &&
          avg_exec_price == o.avg_exec_price &&
          last_exec_price == o.last_exec_price &&
          source == o.source &&
          time_in_force == o.time_in_force &&
          gtd_date == o.gtd_date &&
          state == o.state &&
          rejection_reason == o.rejection_reason &&
          chain_id == o.chain_id &&
          creation_time == o.creation_time &&
          update_time == o.update_time &&
          notes == o.notes &&
          primary_route == o.primary_route &&
          secondary_route == o.secondary_route &&
          order_route == o.order_route &&
          venue_holding_order == o.venue_holding_order &&
          comission_charged == o.comission_charged &&
          exchange_order_id == o.exchange_order_id &&
          is_significant_share_holder == o.is_significant_share_holder &&
          is_insider == o.is_insider &&
          is_limit_offset_in_dollar == o.is_limit_offset_in_dollar &&
          user_id == o.user_id &&
          placement_commission == o.placement_commission &&
          legs == o.legs &&
          strategy_type == o.strategy_type &&
          trigger_stop_price == o.trigger_stop_price &&
          order_group_id == o.order_group_id &&
          order_class == o.order_class &&
          is_cross_zero == o.is_cross_zero
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [id, symbol, symbol_id, total_quantity, open_quantity, filled_quantity, canceled_quantity, side, order_type, limit_price, stop_price, is_all_or_none, is_anonymous, iceberg_quantity, min_quantity, avg_exec_price, last_exec_price, source, time_in_force, gtd_date, state, rejection_reason, chain_id, creation_time, update_time, notes, primary_route, secondary_route, order_route, venue_holding_order, comission_charged, exchange_order_id, is_significant_share_holder, is_insider, is_limit_offset_in_dollar, user_id, placement_commission, legs, strategy_type, trigger_stop_price, order_group_id, order_class, is_cross_zero].hash
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
