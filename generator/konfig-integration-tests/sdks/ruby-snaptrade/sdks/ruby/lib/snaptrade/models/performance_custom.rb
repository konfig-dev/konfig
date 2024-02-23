=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'date'
require 'time'

module SnapTrade
  # Performance Custom Response Object
  class PerformanceCustom
    attr_accessor :total_equity_timeframe

    attr_accessor :contributions

    attr_accessor :contribution_timeframe

    attr_accessor :contribution_timeframe_cumulative

    attr_accessor :withdrawal_timeframe

    # Current streak of cosecutive months where contributions were made
    attr_accessor :contribution_streak

    # Number of months in the timeframe with contributions
    attr_accessor :contribution_months_contributed

    # Total months in timeframe
    attr_accessor :contribution_total_months

    attr_accessor :dividends

    # Total dividends received over the timeframe
    attr_accessor :dividend_income

    # Average dividends received per month over the timeframe
    attr_accessor :monthly_dividends

    # list of tickers which may not be supported or may not have accurate price data
    attr_accessor :bad_tickers

    attr_accessor :dividend_timeline

    # commissions incurred during the timeframe
    attr_accessor :commissions

    # forex fees incurred during the timeframe
    attr_accessor :forex_fees

    # other fees incurred during the timeframe
    attr_accessor :fees

    # The return rate over the timeframe. Annualized if timeframe is longer than 1 year
    attr_accessor :rate_of_return

    attr_accessor :return_rate_timeframe

    # Whether the user has detailed mode enabled (more frequent data points for totalEquity and contribution timeframes)
    attr_accessor :detailed_mode

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'total_equity_timeframe' => :'totalEquityTimeframe',
        :'contributions' => :'contributions',
        :'contribution_timeframe' => :'contributionTimeframe',
        :'contribution_timeframe_cumulative' => :'contributionTimeframeCumulative',
        :'withdrawal_timeframe' => :'withdrawalTimeframe',
        :'contribution_streak' => :'contributionStreak',
        :'contribution_months_contributed' => :'contributionMonthsContributed',
        :'contribution_total_months' => :'contributionTotalMonths',
        :'dividends' => :'dividends',
        :'dividend_income' => :'dividendIncome',
        :'monthly_dividends' => :'monthlyDividends',
        :'bad_tickers' => :'badTickers',
        :'dividend_timeline' => :'dividendTimeline',
        :'commissions' => :'commissions',
        :'forex_fees' => :'forexFees',
        :'fees' => :'fees',
        :'rate_of_return' => :'rateOfReturn',
        :'return_rate_timeframe' => :'returnRateTimeframe',
        :'detailed_mode' => :'detailedMode'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'total_equity_timeframe' => :'Array<PastValue>',
        :'contributions' => :'NetContributions',
        :'contribution_timeframe' => :'Array<PastValue>',
        :'contribution_timeframe_cumulative' => :'Array<PastValue>',
        :'withdrawal_timeframe' => :'Array<PastValue>',
        :'contribution_streak' => :'Float',
        :'contribution_months_contributed' => :'Float',
        :'contribution_total_months' => :'Float',
        :'dividends' => :'Array<NetDividend>',
        :'dividend_income' => :'Float',
        :'monthly_dividends' => :'Float',
        :'bad_tickers' => :'Array<String>',
        :'dividend_timeline' => :'Array<MonthlyDividends>',
        :'commissions' => :'Float',
        :'forex_fees' => :'Float',
        :'fees' => :'Float',
        :'rate_of_return' => :'Float',
        :'return_rate_timeframe' => :'Array<SubPeriodReturnRate>',
        :'detailed_mode' => :'Boolean'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
        :'contribution_streak',
        :'contribution_months_contributed',
        :'contribution_total_months',
        :'dividend_income',
        :'monthly_dividends',
        :'commissions',
        :'forex_fees',
        :'fees',
        :'rate_of_return',
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `SnapTrade::PerformanceCustom` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `SnapTrade::PerformanceCustom`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'total_equity_timeframe')
        if (value = attributes[:'total_equity_timeframe']).is_a?(Array)
          self.total_equity_timeframe = value
        end
      end

      if attributes.key?(:'contributions')
        self.contributions = attributes[:'contributions']
      end

      if attributes.key?(:'contribution_timeframe')
        if (value = attributes[:'contribution_timeframe']).is_a?(Array)
          self.contribution_timeframe = value
        end
      end

      if attributes.key?(:'contribution_timeframe_cumulative')
        if (value = attributes[:'contribution_timeframe_cumulative']).is_a?(Array)
          self.contribution_timeframe_cumulative = value
        end
      end

      if attributes.key?(:'withdrawal_timeframe')
        if (value = attributes[:'withdrawal_timeframe']).is_a?(Array)
          self.withdrawal_timeframe = value
        end
      end

      if attributes.key?(:'contribution_streak')
        self.contribution_streak = attributes[:'contribution_streak']
      end

      if attributes.key?(:'contribution_months_contributed')
        self.contribution_months_contributed = attributes[:'contribution_months_contributed']
      end

      if attributes.key?(:'contribution_total_months')
        self.contribution_total_months = attributes[:'contribution_total_months']
      end

      if attributes.key?(:'dividends')
        if (value = attributes[:'dividends']).is_a?(Array)
          self.dividends = value
        end
      end

      if attributes.key?(:'dividend_income')
        self.dividend_income = attributes[:'dividend_income']
      end

      if attributes.key?(:'monthly_dividends')
        self.monthly_dividends = attributes[:'monthly_dividends']
      end

      if attributes.key?(:'bad_tickers')
        if (value = attributes[:'bad_tickers']).is_a?(Array)
          self.bad_tickers = value
        end
      end

      if attributes.key?(:'dividend_timeline')
        if (value = attributes[:'dividend_timeline']).is_a?(Array)
          self.dividend_timeline = value
        end
      end

      if attributes.key?(:'commissions')
        self.commissions = attributes[:'commissions']
      end

      if attributes.key?(:'forex_fees')
        self.forex_fees = attributes[:'forex_fees']
      end

      if attributes.key?(:'fees')
        self.fees = attributes[:'fees']
      end

      if attributes.key?(:'rate_of_return')
        self.rate_of_return = attributes[:'rate_of_return']
      end

      if attributes.key?(:'return_rate_timeframe')
        if (value = attributes[:'return_rate_timeframe']).is_a?(Array)
          self.return_rate_timeframe = value
        end
      end

      if attributes.key?(:'detailed_mode')
        self.detailed_mode = attributes[:'detailed_mode']
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
          total_equity_timeframe == o.total_equity_timeframe &&
          contributions == o.contributions &&
          contribution_timeframe == o.contribution_timeframe &&
          contribution_timeframe_cumulative == o.contribution_timeframe_cumulative &&
          withdrawal_timeframe == o.withdrawal_timeframe &&
          contribution_streak == o.contribution_streak &&
          contribution_months_contributed == o.contribution_months_contributed &&
          contribution_total_months == o.contribution_total_months &&
          dividends == o.dividends &&
          dividend_income == o.dividend_income &&
          monthly_dividends == o.monthly_dividends &&
          bad_tickers == o.bad_tickers &&
          dividend_timeline == o.dividend_timeline &&
          commissions == o.commissions &&
          forex_fees == o.forex_fees &&
          fees == o.fees &&
          rate_of_return == o.rate_of_return &&
          return_rate_timeframe == o.return_rate_timeframe &&
          detailed_mode == o.detailed_mode
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [total_equity_timeframe, contributions, contribution_timeframe, contribution_timeframe_cumulative, withdrawal_timeframe, contribution_streak, contribution_months_contributed, contribution_total_months, dividends, dividend_income, monthly_dividends, bad_tickers, dividend_timeline, commissions, forex_fees, fees, rate_of_return, return_rate_timeframe, detailed_mode].hash
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
