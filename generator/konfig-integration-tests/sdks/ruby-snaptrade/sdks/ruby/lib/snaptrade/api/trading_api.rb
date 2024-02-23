=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'cgi'

module SnapTrade
  class TradingApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Cancel open order in account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to cancel the order in.
    # @param brokerage_order_id [String] 
    # @param body [TradingCancelUserAccountOrderRequest] The Order ID to be canceled
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def cancel_user_account_order(user_id:, user_secret:, account_id:, brokerage_order_id: SENTINEL, extra: {})
      _body = {}
      _body[:brokerage_order_id] = brokerage_order_id if brokerage_order_id != SENTINEL
      trading_cancel_user_account_order_request = _body
      data, _status_code, _headers = cancel_user_account_order_with_http_info_impl(user_id, user_secret, account_id, trading_cancel_user_account_order_request, extra)
      data
    end

    # Cancel open order in account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to cancel the order in.
    # @param brokerage_order_id [String] 
    # @param body [TradingCancelUserAccountOrderRequest] The Order ID to be canceled
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def cancel_user_account_order_with_http_info(user_id:, user_secret:, account_id:, brokerage_order_id: SENTINEL, extra: {})
      _body = {}
      _body[:brokerage_order_id] = brokerage_order_id if brokerage_order_id != SENTINEL
      trading_cancel_user_account_order_request = _body
      cancel_user_account_order_with_http_info_impl(user_id, user_secret, account_id, trading_cancel_user_account_order_request, extra)
    end

    # Cancel open order in account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to cancel the order in.
    # @param trading_cancel_user_account_order_request [TradingCancelUserAccountOrderRequest] The Order ID to be canceled
    # @param [Hash] opts the optional parameters
    # @return [AccountOrderRecord]
    def cancel_user_account_order_impl(user_id, user_secret, account_id, trading_cancel_user_account_order_request, opts = {})
      data, _status_code, _headers = cancel_user_account_order_with_http_info(user_id, user_secret, account_id, trading_cancel_user_account_order_request, opts)
      data
    end

    # Cancel open order in account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to cancel the order in.
    # @param trading_cancel_user_account_order_request [TradingCancelUserAccountOrderRequest] The Order ID to be canceled
    # @param [Hash] opts the optional parameters
    # @return [Array<(AccountOrderRecord, Integer, Hash)>] AccountOrderRecord data, response status code and response headers
    def cancel_user_account_order_with_http_info_impl(user_id, user_secret, account_id, trading_cancel_user_account_order_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: TradingApi.cancel_user_account_order ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling TradingApi.cancel_user_account_order"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling TradingApi.cancel_user_account_order"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling TradingApi.cancel_user_account_order"
      end
      # verify the required parameter 'trading_cancel_user_account_order_request' is set
      if @api_client.config.client_side_validation && trading_cancel_user_account_order_request.nil?
        fail ArgumentError, "Missing the required parameter 'trading_cancel_user_account_order_request' when calling TradingApi.cancel_user_account_order"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/orders/cancel'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(trading_cancel_user_account_order_request)

      # return_type
      return_type = opts[:debug_return_type] || 'AccountOrderRecord'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"TradingApi.cancel_user_account_order",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: TradingApi#cancel_user_account_order\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Check impact of trades on account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] 
    # @param action [Action] 
    # @param order_type [OrderType] 
    # @param price [Float] Trade Price if limit or stop limit order
    # @param stop [Float] Stop Price. If stop loss or stop limit order, the price to trigger the stop
    # @param time_in_force [TimeInForceStrict] 
    # @param units [Float] 
    # @param universal_symbol_id [String] 
    # @param notional_value [Float] 
    # @param body [ManualTradeForm] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_order_impact(user_id:, user_secret:, account_id: SENTINEL, action: SENTINEL, order_type: SENTINEL, price: SENTINEL, stop: SENTINEL, time_in_force: SENTINEL, units: SENTINEL, universal_symbol_id: SENTINEL, notional_value: SENTINEL, extra: {})
      _body = {}
      _body[:account_id] = account_id if account_id != SENTINEL
      _body[:action] = action if action != SENTINEL
      _body[:order_type] = order_type if order_type != SENTINEL
      _body[:price] = price if price != SENTINEL
      _body[:stop] = stop if stop != SENTINEL
      _body[:time_in_force] = time_in_force if time_in_force != SENTINEL
      _body[:units] = units if units != SENTINEL
      _body[:universal_symbol_id] = universal_symbol_id if universal_symbol_id != SENTINEL
      _body[:notional_value] = notional_value if notional_value != SENTINEL
      manual_trade_form = _body
      data, _status_code, _headers = get_order_impact_with_http_info_impl(user_id, user_secret, manual_trade_form, extra)
      data
    end

    # Check impact of trades on account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] 
    # @param action [Action] 
    # @param order_type [OrderType] 
    # @param price [Float] Trade Price if limit or stop limit order
    # @param stop [Float] Stop Price. If stop loss or stop limit order, the price to trigger the stop
    # @param time_in_force [TimeInForceStrict] 
    # @param units [Float] 
    # @param universal_symbol_id [String] 
    # @param notional_value [Float] 
    # @param body [ManualTradeForm] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_order_impact_with_http_info(user_id:, user_secret:, account_id: SENTINEL, action: SENTINEL, order_type: SENTINEL, price: SENTINEL, stop: SENTINEL, time_in_force: SENTINEL, units: SENTINEL, universal_symbol_id: SENTINEL, notional_value: SENTINEL, extra: {})
      _body = {}
      _body[:account_id] = account_id if account_id != SENTINEL
      _body[:action] = action if action != SENTINEL
      _body[:order_type] = order_type if order_type != SENTINEL
      _body[:price] = price if price != SENTINEL
      _body[:stop] = stop if stop != SENTINEL
      _body[:time_in_force] = time_in_force if time_in_force != SENTINEL
      _body[:units] = units if units != SENTINEL
      _body[:universal_symbol_id] = universal_symbol_id if universal_symbol_id != SENTINEL
      _body[:notional_value] = notional_value if notional_value != SENTINEL
      manual_trade_form = _body
      get_order_impact_with_http_info_impl(user_id, user_secret, manual_trade_form, extra)
    end

    # Check impact of trades on account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param manual_trade_form [ManualTradeForm] 
    # @param [Hash] opts the optional parameters
    # @return [ManualTradeAndImpact]
    def get_order_impact_impl(user_id, user_secret, manual_trade_form, opts = {})
      data, _status_code, _headers = get_order_impact_with_http_info(user_id, user_secret, manual_trade_form, opts)
      data
    end

    # Check impact of trades on account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param manual_trade_form [ManualTradeForm] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(ManualTradeAndImpact, Integer, Hash)>] ManualTradeAndImpact data, response status code and response headers
    def get_order_impact_with_http_info_impl(user_id, user_secret, manual_trade_form, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: TradingApi.get_order_impact ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling TradingApi.get_order_impact"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling TradingApi.get_order_impact"
      end
      # verify the required parameter 'manual_trade_form' is set
      if @api_client.config.client_side_validation && manual_trade_form.nil?
        fail ArgumentError, "Missing the required parameter 'manual_trade_form' when calling TradingApi.get_order_impact"
      end
      # resource path
      local_var_path = '/trade/impact'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(manual_trade_form)

      # return_type
      return_type = opts[:debug_return_type] || 'ManualTradeAndImpact'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"TradingApi.get_order_impact",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: TradingApi#get_order_impact\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Get symbol quotes
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param symbols [String] List of universal_symbol_id or tickers to get quotes for.
    # @param account_id [String] The ID of the account to get quotes.
    # @param use_ticker [Boolean] Should be set to True if providing tickers.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_quotes(user_id:, user_secret:, symbols:, account_id:, use_ticker: SENTINEL, extra: {})
      extra[:use_ticker] = use_ticker if use_ticker != SENTINEL
      data, _status_code, _headers = get_user_account_quotes_with_http_info_impl(user_id, user_secret, symbols, account_id, extra)
      data
    end

    # Get symbol quotes
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param symbols [String] List of universal_symbol_id or tickers to get quotes for.
    # @param account_id [String] The ID of the account to get quotes.
    # @param use_ticker [Boolean] Should be set to True if providing tickers.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_quotes_with_http_info(user_id:, user_secret:, symbols:, account_id:, use_ticker: SENTINEL, extra: {})
      extra[:use_ticker] = use_ticker if use_ticker != SENTINEL
      get_user_account_quotes_with_http_info_impl(user_id, user_secret, symbols, account_id, extra)
    end

    # Get symbol quotes
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param symbols [String] List of universal_symbol_id or tickers to get quotes for.
    # @param account_id [String] The ID of the account to get quotes.
    # @param [Hash] opts the optional parameters
    # @option opts [Boolean] :use_ticker Should be set to True if providing tickers.
    # @return [Array<SymbolsQuotesInner>]
    def get_user_account_quotes_impl(user_id, user_secret, symbols, account_id, opts = {})
      data, _status_code, _headers = get_user_account_quotes_with_http_info(user_id, user_secret, symbols, account_id, opts)
      data
    end

    # Get symbol quotes
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param symbols [String] List of universal_symbol_id or tickers to get quotes for.
    # @param account_id [String] The ID of the account to get quotes.
    # @param [Hash] opts the optional parameters
    # @option opts [Boolean] :use_ticker Should be set to True if providing tickers.
    # @return [Array<(Array<SymbolsQuotesInner>, Integer, Hash)>] Array<SymbolsQuotesInner> data, response status code and response headers
    def get_user_account_quotes_with_http_info_impl(user_id, user_secret, symbols, account_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: TradingApi.get_user_account_quotes ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling TradingApi.get_user_account_quotes"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling TradingApi.get_user_account_quotes"
      end
      # verify the required parameter 'symbols' is set
      if @api_client.config.client_side_validation && symbols.nil?
        fail ArgumentError, "Missing the required parameter 'symbols' when calling TradingApi.get_user_account_quotes"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling TradingApi.get_user_account_quotes"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/quotes'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret
      query_params[:'symbols'] = symbols
      query_params[:'use_ticker'] = opts[:'use_ticker'] if !opts[:'use_ticker'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<SymbolsQuotesInner>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"TradingApi.get_user_account_quotes",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: TradingApi#get_user_account_quotes\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Place a trade with NO validation.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] 
    # @param action [Action] 
    # @param order_type [OrderType] 
    # @param price [Float] Trade Price if limit or stop limit order
    # @param stop [Float] Stop Price. If stop loss or stop limit order, the price to trigger the stop
    # @param time_in_force [TimeInForceStrict] 
    # @param units [Float] 
    # @param universal_symbol_id [String] 
    # @param notional_value [Float] 
    # @param body [ManualTradeForm] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def place_force_order(user_id:, user_secret:, account_id: SENTINEL, action: SENTINEL, order_type: SENTINEL, price: SENTINEL, stop: SENTINEL, time_in_force: SENTINEL, units: SENTINEL, universal_symbol_id: SENTINEL, notional_value: SENTINEL, extra: {})
      _body = {}
      _body[:account_id] = account_id if account_id != SENTINEL
      _body[:action] = action if action != SENTINEL
      _body[:order_type] = order_type if order_type != SENTINEL
      _body[:price] = price if price != SENTINEL
      _body[:stop] = stop if stop != SENTINEL
      _body[:time_in_force] = time_in_force if time_in_force != SENTINEL
      _body[:units] = units if units != SENTINEL
      _body[:universal_symbol_id] = universal_symbol_id if universal_symbol_id != SENTINEL
      _body[:notional_value] = notional_value if notional_value != SENTINEL
      manual_trade_form = _body
      data, _status_code, _headers = place_force_order_with_http_info_impl(user_id, user_secret, manual_trade_form, extra)
      data
    end

    # Place a trade with NO validation.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] 
    # @param action [Action] 
    # @param order_type [OrderType] 
    # @param price [Float] Trade Price if limit or stop limit order
    # @param stop [Float] Stop Price. If stop loss or stop limit order, the price to trigger the stop
    # @param time_in_force [TimeInForceStrict] 
    # @param units [Float] 
    # @param universal_symbol_id [String] 
    # @param notional_value [Float] 
    # @param body [ManualTradeForm] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def place_force_order_with_http_info(user_id:, user_secret:, account_id: SENTINEL, action: SENTINEL, order_type: SENTINEL, price: SENTINEL, stop: SENTINEL, time_in_force: SENTINEL, units: SENTINEL, universal_symbol_id: SENTINEL, notional_value: SENTINEL, extra: {})
      _body = {}
      _body[:account_id] = account_id if account_id != SENTINEL
      _body[:action] = action if action != SENTINEL
      _body[:order_type] = order_type if order_type != SENTINEL
      _body[:price] = price if price != SENTINEL
      _body[:stop] = stop if stop != SENTINEL
      _body[:time_in_force] = time_in_force if time_in_force != SENTINEL
      _body[:units] = units if units != SENTINEL
      _body[:universal_symbol_id] = universal_symbol_id if universal_symbol_id != SENTINEL
      _body[:notional_value] = notional_value if notional_value != SENTINEL
      manual_trade_form = _body
      place_force_order_with_http_info_impl(user_id, user_secret, manual_trade_form, extra)
    end

    # Place a trade with NO validation.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param manual_trade_form [ManualTradeForm] 
    # @param [Hash] opts the optional parameters
    # @return [AccountOrderRecord]
    def place_force_order_impl(user_id, user_secret, manual_trade_form, opts = {})
      data, _status_code, _headers = place_force_order_with_http_info(user_id, user_secret, manual_trade_form, opts)
      data
    end

    # Place a trade with NO validation.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param manual_trade_form [ManualTradeForm] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(AccountOrderRecord, Integer, Hash)>] AccountOrderRecord data, response status code and response headers
    def place_force_order_with_http_info_impl(user_id, user_secret, manual_trade_form, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: TradingApi.place_force_order ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling TradingApi.place_force_order"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling TradingApi.place_force_order"
      end
      # verify the required parameter 'manual_trade_form' is set
      if @api_client.config.client_side_validation && manual_trade_form.nil?
        fail ArgumentError, "Missing the required parameter 'manual_trade_form' when calling TradingApi.place_force_order"
      end
      # resource path
      local_var_path = '/trade/place'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(manual_trade_form)

      # return_type
      return_type = opts[:debug_return_type] || 'AccountOrderRecord'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"TradingApi.place_force_order",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: TradingApi#place_force_order\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Place a OCO (One Cancels Other) order
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param first_trade_id [Object] The ID of first trade object obtained from trade/impact endpoint
    # @param second_trade_id [Object] The ID of second trade object obtained from trade/impact endpoint
    # @param body [TradingPlaceOCOOrderRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def place_oco_order(user_id:, user_secret:, first_trade_id: SENTINEL, second_trade_id: SENTINEL, extra: {})
      _body = {}
      _body[:first_trade_id] = first_trade_id if first_trade_id != SENTINEL
      _body[:second_trade_id] = second_trade_id if second_trade_id != SENTINEL
      trading_place_oco_order_request = _body
      data, _status_code, _headers = place_oco_order_with_http_info_impl(user_id, user_secret, trading_place_oco_order_request, extra)
      data
    end

    # Place a OCO (One Cancels Other) order
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param first_trade_id [Object] The ID of first trade object obtained from trade/impact endpoint
    # @param second_trade_id [Object] The ID of second trade object obtained from trade/impact endpoint
    # @param body [TradingPlaceOCOOrderRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def place_oco_order_with_http_info(user_id:, user_secret:, first_trade_id: SENTINEL, second_trade_id: SENTINEL, extra: {})
      _body = {}
      _body[:first_trade_id] = first_trade_id if first_trade_id != SENTINEL
      _body[:second_trade_id] = second_trade_id if second_trade_id != SENTINEL
      trading_place_oco_order_request = _body
      place_oco_order_with_http_info_impl(user_id, user_secret, trading_place_oco_order_request, extra)
    end

    # Place a OCO (One Cancels Other) order
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param trading_place_oco_order_request [TradingPlaceOCOOrderRequest] 
    # @param [Hash] opts the optional parameters
    # @return [AccountOrderRecord]
    def place_oco_order_impl(user_id, user_secret, trading_place_oco_order_request, opts = {})
      data, _status_code, _headers = place_oco_order_with_http_info(user_id, user_secret, trading_place_oco_order_request, opts)
      data
    end

    # Place a OCO (One Cancels Other) order
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param trading_place_oco_order_request [TradingPlaceOCOOrderRequest] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(AccountOrderRecord, Integer, Hash)>] AccountOrderRecord data, response status code and response headers
    def place_oco_order_with_http_info_impl(user_id, user_secret, trading_place_oco_order_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: TradingApi.place_oco_order ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling TradingApi.place_oco_order"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling TradingApi.place_oco_order"
      end
      # verify the required parameter 'trading_place_oco_order_request' is set
      if @api_client.config.client_side_validation && trading_place_oco_order_request.nil?
        fail ArgumentError, "Missing the required parameter 'trading_place_oco_order_request' when calling TradingApi.place_oco_order"
      end
      # resource path
      local_var_path = '/trade/oco'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(trading_place_oco_order_request)

      # return_type
      return_type = opts[:debug_return_type] || 'AccountOrderRecord'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"TradingApi.place_oco_order",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: TradingApi#place_oco_order\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Place order
    # @param trade_id [String] The ID of trade object obtained from trade/impact endpoint
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def place_order(trade_id:, user_id:, user_secret:, extra: {})
      data, _status_code, _headers = place_order_with_http_info_impl(trade_id, user_id, user_secret, extra)
      data
    end

    # Place order
    # @param trade_id [String] The ID of trade object obtained from trade/impact endpoint
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def place_order_with_http_info(trade_id:, user_id:, user_secret:, extra: {})
      place_order_with_http_info_impl(trade_id, user_id, user_secret, extra)
    end

    # Place order
    # @param trade_id [String] The ID of trade object obtained from trade/impact endpoint
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [AccountOrderRecord]
    def place_order_impl(trade_id, user_id, user_secret, opts = {})
      data, _status_code, _headers = place_order_with_http_info(trade_id, user_id, user_secret, opts)
      data
    end

    # Place order
    # @param trade_id [String] The ID of trade object obtained from trade/impact endpoint
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(AccountOrderRecord, Integer, Hash)>] AccountOrderRecord data, response status code and response headers
    def place_order_with_http_info_impl(trade_id, user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: TradingApi.place_order ...'
      end
      # verify the required parameter 'trade_id' is set
      if @api_client.config.client_side_validation && trade_id.nil?
        fail ArgumentError, "Missing the required parameter 'trade_id' when calling TradingApi.place_order"
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling TradingApi.place_order"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling TradingApi.place_order"
      end
      # resource path
      local_var_path = '/trade/{tradeId}'.sub('{' + 'tradeId' + '}', CGI.escape(trade_id.to_s))

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
      return_type = opts[:debug_return_type] || 'AccountOrderRecord'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"TradingApi.place_order",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: TradingApi#place_order\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Trading = TradingApi::new
end
