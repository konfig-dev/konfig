=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'cgi'

module SnapTrade
  class OptionsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Creates an option strategy object that will be used to place an option strategy order
    # @param underlying_symbol_id [String] 
    # @param legs [Array<OptionLeg>] 
    # @param strategy_type [StrategyType] 
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to create the option strategy object in.
    # @param body [OptionsGetOptionStrategyRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_option_strategy(underlying_symbol_id:, legs:, strategy_type:, user_id:, user_secret:, account_id:, extra: {})
      _body = {}
      _body[:underlying_symbol_id] = underlying_symbol_id if underlying_symbol_id != SENTINEL
      _body[:legs] = legs if legs != SENTINEL
      _body[:strategy_type] = strategy_type if strategy_type != SENTINEL
      options_get_option_strategy_request = _body
      data, _status_code, _headers = get_option_strategy_with_http_info_impl(user_id, user_secret, account_id, options_get_option_strategy_request, extra)
      data
    end

    # Creates an option strategy object that will be used to place an option strategy order
    # @param underlying_symbol_id [String] 
    # @param legs [Array<OptionLeg>] 
    # @param strategy_type [StrategyType] 
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to create the option strategy object in.
    # @param body [OptionsGetOptionStrategyRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_option_strategy_with_http_info(underlying_symbol_id:, legs:, strategy_type:, user_id:, user_secret:, account_id:, extra: {})
      _body = {}
      _body[:underlying_symbol_id] = underlying_symbol_id if underlying_symbol_id != SENTINEL
      _body[:legs] = legs if legs != SENTINEL
      _body[:strategy_type] = strategy_type if strategy_type != SENTINEL
      options_get_option_strategy_request = _body
      get_option_strategy_with_http_info_impl(user_id, user_secret, account_id, options_get_option_strategy_request, extra)
    end

    # Creates an option strategy object that will be used to place an option strategy order
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to create the option strategy object in.
    # @param options_get_option_strategy_request [OptionsGetOptionStrategyRequest] 
    # @param [Hash] opts the optional parameters
    # @return [StrategyQuotes]
    def get_option_strategy_impl(user_id, user_secret, account_id, options_get_option_strategy_request, opts = {})
      data, _status_code, _headers = get_option_strategy_with_http_info(user_id, user_secret, account_id, options_get_option_strategy_request, opts)
      data
    end

    # Creates an option strategy object that will be used to place an option strategy order
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to create the option strategy object in.
    # @param options_get_option_strategy_request [OptionsGetOptionStrategyRequest] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(StrategyQuotes, Integer, Hash)>] StrategyQuotes data, response status code and response headers
    def get_option_strategy_with_http_info_impl(user_id, user_secret, account_id, options_get_option_strategy_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OptionsApi.get_option_strategy ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling OptionsApi.get_option_strategy"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling OptionsApi.get_option_strategy"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling OptionsApi.get_option_strategy"
      end
      # verify the required parameter 'options_get_option_strategy_request' is set
      if @api_client.config.client_side_validation && options_get_option_strategy_request.nil?
        fail ArgumentError, "Missing the required parameter 'options_get_option_strategy_request' when calling OptionsApi.get_option_strategy"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/optionStrategy'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
        header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(options_get_option_strategy_request)

      # return_type
      return_type = opts[:debug_return_type] || 'StrategyQuotes'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"OptionsApi.get_option_strategy",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OptionsApi#get_option_strategy\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Get the options chain
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get the options chain from.
    # @param symbol [String] Universal symbol ID if symbol
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_options_chain(user_id:, user_secret:, account_id:, symbol:, extra: {})
      data, _status_code, _headers = get_options_chain_with_http_info_impl(user_id, user_secret, account_id, symbol, extra)
      data
    end

    # Get the options chain
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get the options chain from.
    # @param symbol [String] Universal symbol ID if symbol
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_options_chain_with_http_info(user_id:, user_secret:, account_id:, symbol:, extra: {})
      get_options_chain_with_http_info_impl(user_id, user_secret, account_id, symbol, extra)
    end

    # Get the options chain
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get the options chain from.
    # @param symbol [String] Universal symbol ID if symbol
    # @param [Hash] opts the optional parameters
    # @return [Array<OptionChainInner>]
    def get_options_chain_impl(user_id, user_secret, account_id, symbol, opts = {})
      data, _status_code, _headers = get_options_chain_with_http_info(user_id, user_secret, account_id, symbol, opts)
      data
    end

    # Get the options chain
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get the options chain from.
    # @param symbol [String] Universal symbol ID if symbol
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<OptionChainInner>, Integer, Hash)>] Array<OptionChainInner> data, response status code and response headers
    def get_options_chain_with_http_info_impl(user_id, user_secret, account_id, symbol, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OptionsApi.get_options_chain ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling OptionsApi.get_options_chain"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling OptionsApi.get_options_chain"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling OptionsApi.get_options_chain"
      end
      # verify the required parameter 'symbol' is set
      if @api_client.config.client_side_validation && symbol.nil?
        fail ArgumentError, "Missing the required parameter 'symbol' when calling OptionsApi.get_options_chain"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/optionsChain'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret
      query_params[:'symbol'] = symbol

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<OptionChainInner>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"OptionsApi.get_options_chain",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OptionsApi#get_options_chain\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Get latest market data of option strategy
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account the strategy will be placed in.
    # @param option_strategy_id [String] Option strategy id obtained from response when creating option strategy object
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_options_strategy_quote(user_id:, user_secret:, account_id:, option_strategy_id:, extra: {})
      data, _status_code, _headers = get_options_strategy_quote_with_http_info_impl(user_id, user_secret, account_id, option_strategy_id, extra)
      data
    end

    # Get latest market data of option strategy
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account the strategy will be placed in.
    # @param option_strategy_id [String] Option strategy id obtained from response when creating option strategy object
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_options_strategy_quote_with_http_info(user_id:, user_secret:, account_id:, option_strategy_id:, extra: {})
      get_options_strategy_quote_with_http_info_impl(user_id, user_secret, account_id, option_strategy_id, extra)
    end

    # Get latest market data of option strategy
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account the strategy will be placed in.
    # @param option_strategy_id [String] Option strategy id obtained from response when creating option strategy object
    # @param [Hash] opts the optional parameters
    # @return [StrategyQuotes]
    def get_options_strategy_quote_impl(user_id, user_secret, account_id, option_strategy_id, opts = {})
      data, _status_code, _headers = get_options_strategy_quote_with_http_info(user_id, user_secret, account_id, option_strategy_id, opts)
      data
    end

    # Get latest market data of option strategy
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account the strategy will be placed in.
    # @param option_strategy_id [String] Option strategy id obtained from response when creating option strategy object
    # @param [Hash] opts the optional parameters
    # @return [Array<(StrategyQuotes, Integer, Hash)>] StrategyQuotes data, response status code and response headers
    def get_options_strategy_quote_with_http_info_impl(user_id, user_secret, account_id, option_strategy_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OptionsApi.get_options_strategy_quote ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling OptionsApi.get_options_strategy_quote"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling OptionsApi.get_options_strategy_quote"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling OptionsApi.get_options_strategy_quote"
      end
      # verify the required parameter 'option_strategy_id' is set
      if @api_client.config.client_side_validation && option_strategy_id.nil?
        fail ArgumentError, "Missing the required parameter 'option_strategy_id' when calling OptionsApi.get_options_strategy_quote"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/optionStrategy/{optionStrategyId}'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s)).sub('{' + 'optionStrategyId' + '}', CGI.escape(option_strategy_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'StrategyQuotes'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"OptionsApi.get_options_strategy_quote",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OptionsApi#get_options_strategy_quote\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Get the options holdings in the account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to fetch options holdings for.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_option_holdings(user_id:, user_secret:, account_id:, extra: {})
      data, _status_code, _headers = list_option_holdings_with_http_info_impl(user_id, user_secret, account_id, extra)
      data
    end

    # Get the options holdings in the account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to fetch options holdings for.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_option_holdings_with_http_info(user_id:, user_secret:, account_id:, extra: {})
      list_option_holdings_with_http_info_impl(user_id, user_secret, account_id, extra)
    end

    # Get the options holdings in the account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to fetch options holdings for.
    # @param [Hash] opts the optional parameters
    # @return [Array<OptionsPosition>]
    def list_option_holdings_impl(user_id, user_secret, account_id, opts = {})
      data, _status_code, _headers = list_option_holdings_with_http_info(user_id, user_secret, account_id, opts)
      data
    end

    # Get the options holdings in the account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to fetch options holdings for.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<OptionsPosition>, Integer, Hash)>] Array<OptionsPosition> data, response status code and response headers
    def list_option_holdings_with_http_info_impl(user_id, user_secret, account_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OptionsApi.list_option_holdings ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling OptionsApi.list_option_holdings"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling OptionsApi.list_option_holdings"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling OptionsApi.list_option_holdings"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/options'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<OptionsPosition>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"OptionsApi.list_option_holdings",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OptionsApi#list_option_holdings\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Place an option strategy order on the brokerage
    # @param order_type [OrderType] 
    # @param time_in_force [TimeInForceStrict] 
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to execute the strategy in.
    # @param option_strategy_id [String] Option strategy id obtained from response when creating option strategy object
    # @param price [Float] Trade Price if limit or stop limit order
    # @param body [OptionsPlaceOptionStrategyRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def place_option_strategy(order_type:, time_in_force:, user_id:, user_secret:, account_id:, option_strategy_id:, price: SENTINEL, extra: {})
      _body = {}
      _body[:order_type] = order_type if order_type != SENTINEL
      _body[:time_in_force] = time_in_force if time_in_force != SENTINEL
      _body[:price] = price if price != SENTINEL
      options_place_option_strategy_request = _body
      data, _status_code, _headers = place_option_strategy_with_http_info_impl(user_id, user_secret, account_id, option_strategy_id, options_place_option_strategy_request, extra)
      data
    end

    # Place an option strategy order on the brokerage
    # @param order_type [OrderType] 
    # @param time_in_force [TimeInForceStrict] 
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to execute the strategy in.
    # @param option_strategy_id [String] Option strategy id obtained from response when creating option strategy object
    # @param price [Float] Trade Price if limit or stop limit order
    # @param body [OptionsPlaceOptionStrategyRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def place_option_strategy_with_http_info(order_type:, time_in_force:, user_id:, user_secret:, account_id:, option_strategy_id:, price: SENTINEL, extra: {})
      _body = {}
      _body[:order_type] = order_type if order_type != SENTINEL
      _body[:time_in_force] = time_in_force if time_in_force != SENTINEL
      _body[:price] = price if price != SENTINEL
      options_place_option_strategy_request = _body
      place_option_strategy_with_http_info_impl(user_id, user_secret, account_id, option_strategy_id, options_place_option_strategy_request, extra)
    end

    # Place an option strategy order on the brokerage
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to execute the strategy in.
    # @param option_strategy_id [String] Option strategy id obtained from response when creating option strategy object
    # @param options_place_option_strategy_request [OptionsPlaceOptionStrategyRequest] 
    # @param [Hash] opts the optional parameters
    # @return [StrategyOrderRecord]
    def place_option_strategy_impl(user_id, user_secret, account_id, option_strategy_id, options_place_option_strategy_request, opts = {})
      data, _status_code, _headers = place_option_strategy_with_http_info(user_id, user_secret, account_id, option_strategy_id, options_place_option_strategy_request, opts)
      data
    end

    # Place an option strategy order on the brokerage
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to execute the strategy in.
    # @param option_strategy_id [String] Option strategy id obtained from response when creating option strategy object
    # @param options_place_option_strategy_request [OptionsPlaceOptionStrategyRequest] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(StrategyOrderRecord, Integer, Hash)>] StrategyOrderRecord data, response status code and response headers
    def place_option_strategy_with_http_info_impl(user_id, user_secret, account_id, option_strategy_id, options_place_option_strategy_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: OptionsApi.place_option_strategy ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling OptionsApi.place_option_strategy"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling OptionsApi.place_option_strategy"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling OptionsApi.place_option_strategy"
      end
      # verify the required parameter 'option_strategy_id' is set
      if @api_client.config.client_side_validation && option_strategy_id.nil?
        fail ArgumentError, "Missing the required parameter 'option_strategy_id' when calling OptionsApi.place_option_strategy"
      end
      # verify the required parameter 'options_place_option_strategy_request' is set
      if @api_client.config.client_side_validation && options_place_option_strategy_request.nil?
        fail ArgumentError, "Missing the required parameter 'options_place_option_strategy_request' when calling OptionsApi.place_option_strategy"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/optionStrategy/{optionStrategyId}/execute'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s)).sub('{' + 'optionStrategyId' + '}', CGI.escape(option_strategy_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
        header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(options_place_option_strategy_request)

      # return_type
      return_type = opts[:debug_return_type] || 'StrategyOrderRecord'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"OptionsApi.place_option_strategy",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: OptionsApi#place_option_strategy\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Options = OptionsApi::new
end
