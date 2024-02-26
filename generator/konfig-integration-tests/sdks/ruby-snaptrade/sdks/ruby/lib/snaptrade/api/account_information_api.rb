=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'cgi'

module SnapTrade
  class AccountInformationApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # List all accounts for the user, plus balances, positions, and orders for each account.
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param brokerage_authorizations [String] Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations).
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_all_user_holdings(user_id:, user_secret:, brokerage_authorizations: SENTINEL, extra: {})
      extra[:brokerage_authorizations] = brokerage_authorizations if brokerage_authorizations != SENTINEL
      data, _status_code, _headers = get_all_user_holdings_with_http_info_impl(user_id, user_secret, extra)
      data
    end

    # List all accounts for the user, plus balances, positions, and orders for each account.
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param brokerage_authorizations [String] Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations).
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_all_user_holdings_with_http_info(user_id:, user_secret:, brokerage_authorizations: SENTINEL, extra: {})
      extra[:brokerage_authorizations] = brokerage_authorizations if brokerage_authorizations != SENTINEL
      get_all_user_holdings_with_http_info_impl(user_id, user_secret, extra)
    end

    # List all accounts for the user, plus balances, positions, and orders for each account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :brokerage_authorizations Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations).
    # @return [Array<AccountHoldings>]
    private def get_all_user_holdings_impl(user_id, user_secret, opts = {})
      data, _status_code, _headers = get_all_user_holdings_with_http_info(user_id, user_secret, opts)
      data
    end

    # List all accounts for the user, plus balances, positions, and orders for each account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :brokerage_authorizations Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations).
    # @return [Array<(Array<AccountHoldings>, Integer, Hash)>] Array<AccountHoldings> data, response status code and response headers
    private def get_all_user_holdings_with_http_info_impl(user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AccountInformationApi.get_all_user_holdings ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AccountInformationApi.get_all_user_holdings"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AccountInformationApi.get_all_user_holdings"
      end
      # resource path
      local_var_path = '/holdings'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret
      query_params[:'brokerage_authorizations'] = opts[:'brokerage_authorizations'] if !opts[:'brokerage_authorizations'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<AccountHoldings>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AccountInformationApi.get_all_user_holdings",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AccountInformationApi#get_all_user_holdings\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # List account balances
    #
    # A list of account balances for the specified account (one per currency that the account holds).
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get balances.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_balance(user_id:, user_secret:, account_id:, extra: {})
      data, _status_code, _headers = get_user_account_balance_with_http_info_impl(user_id, user_secret, account_id, extra)
      data
    end

    # List account balances
    #
    # A list of account balances for the specified account (one per currency that the account holds).
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get balances.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_balance_with_http_info(user_id:, user_secret:, account_id:, extra: {})
      get_user_account_balance_with_http_info_impl(user_id, user_secret, account_id, extra)
    end

    # List account balances
    # A list of account balances for the specified account (one per currency that the account holds).
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get balances.
    # @param [Hash] opts the optional parameters
    # @return [Array<Balance>]
    private def get_user_account_balance_impl(user_id, user_secret, account_id, opts = {})
      data, _status_code, _headers = get_user_account_balance_with_http_info(user_id, user_secret, account_id, opts)
      data
    end

    # List account balances
    # A list of account balances for the specified account (one per currency that the account holds).
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get balances.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<Balance>, Integer, Hash)>] Array<Balance> data, response status code and response headers
    private def get_user_account_balance_with_http_info_impl(user_id, user_secret, account_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AccountInformationApi.get_user_account_balance ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AccountInformationApi.get_user_account_balance"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AccountInformationApi.get_user_account_balance"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling AccountInformationApi.get_user_account_balance"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/balances'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<Balance>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AccountInformationApi.get_user_account_balance",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AccountInformationApi#get_user_account_balance\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Return details of a specific investment account
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get detail of.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_details(user_id:, user_secret:, account_id:, extra: {})
      data, _status_code, _headers = get_user_account_details_with_http_info_impl(user_id, user_secret, account_id, extra)
      data
    end

    # Return details of a specific investment account
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get detail of.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_details_with_http_info(user_id:, user_secret:, account_id:, extra: {})
      get_user_account_details_with_http_info_impl(user_id, user_secret, account_id, extra)
    end

    # Return details of a specific investment account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get detail of.
    # @param [Hash] opts the optional parameters
    # @return [Account]
    private def get_user_account_details_impl(user_id, user_secret, account_id, opts = {})
      data, _status_code, _headers = get_user_account_details_with_http_info(user_id, user_secret, account_id, opts)
      data
    end

    # Return details of a specific investment account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get detail of.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Account, Integer, Hash)>] Account data, response status code and response headers
    private def get_user_account_details_with_http_info_impl(user_id, user_secret, account_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AccountInformationApi.get_user_account_details ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AccountInformationApi.get_user_account_details"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AccountInformationApi.get_user_account_details"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling AccountInformationApi.get_user_account_details"
      end
      # resource path
      local_var_path = '/accounts/{accountId}'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

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
      return_type = opts[:debug_return_type] || 'Account'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AccountInformationApi.get_user_account_details",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AccountInformationApi#get_user_account_details\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # List account orders
    #
    # Fetch all recent orders from a user's account.
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get orders.
    # @param state [String] defaults value is set to \&quot;all\&quot;
    # @param days [Integer] Number of days in the past to fetch the most recent orders. Defaults to the last 90 days if no value is passed in.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_orders(user_id:, user_secret:, account_id:, state: SENTINEL, days: SENTINEL, extra: {})
      extra[:state] = state if state != SENTINEL
      extra[:days] = days if days != SENTINEL
      data, _status_code, _headers = get_user_account_orders_with_http_info_impl(user_id, user_secret, account_id, extra)
      data
    end

    # List account orders
    #
    # Fetch all recent orders from a user's account.
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get orders.
    # @param state [String] defaults value is set to \&quot;all\&quot;
    # @param days [Integer] Number of days in the past to fetch the most recent orders. Defaults to the last 90 days if no value is passed in.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_orders_with_http_info(user_id:, user_secret:, account_id:, state: SENTINEL, days: SENTINEL, extra: {})
      extra[:state] = state if state != SENTINEL
      extra[:days] = days if days != SENTINEL
      get_user_account_orders_with_http_info_impl(user_id, user_secret, account_id, extra)
    end

    # List account orders
    # Fetch all recent orders from a user's account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get orders.
    # @param [Hash] opts the optional parameters
    # @option opts [String] :state defaults value is set to \"all\"
    # @option opts [Integer] :days Number of days in the past to fetch the most recent orders. Defaults to the last 90 days if no value is passed in.
    # @return [Array<AccountOrderRecord>]
    private def get_user_account_orders_impl(user_id, user_secret, account_id, opts = {})
      data, _status_code, _headers = get_user_account_orders_with_http_info(user_id, user_secret, account_id, opts)
      data
    end

    # List account orders
    # Fetch all recent orders from a user&#39;s account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get orders.
    # @param [Hash] opts the optional parameters
    # @option opts [String] :state defaults value is set to \"all\"
    # @option opts [Integer] :days Number of days in the past to fetch the most recent orders. Defaults to the last 90 days if no value is passed in.
    # @return [Array<(Array<AccountOrderRecord>, Integer, Hash)>] Array<AccountOrderRecord> data, response status code and response headers
    private def get_user_account_orders_with_http_info_impl(user_id, user_secret, account_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AccountInformationApi.get_user_account_orders ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AccountInformationApi.get_user_account_orders"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AccountInformationApi.get_user_account_orders"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling AccountInformationApi.get_user_account_orders"
      end
      allowable_values = ["all", "open", "executed"]
      if @api_client.config.client_side_validation && opts[:'state'] && !allowable_values.include?(opts[:'state'])
        fail ArgumentError, "invalid value for \"state\", must be one of #{allowable_values}"
      end
      if @api_client.config.client_side_validation && !opts[:'days'].nil? && opts[:'days'] < 1
        fail ArgumentError, 'invalid value for "opts[:"days"]" when calling AccountInformationApi.get_user_account_orders, must be greater than or equal to 1.'
      end

      # resource path
      local_var_path = '/accounts/{accountId}/orders'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret
      query_params[:'state'] = opts[:'state'] if !opts[:'state'].nil?
      query_params[:'days'] = opts[:'days'] if !opts[:'days'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<AccountOrderRecord>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AccountInformationApi.get_user_account_orders",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AccountInformationApi#get_user_account_orders\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # List account positions
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get positions.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_positions(user_id:, user_secret:, account_id:, extra: {})
      data, _status_code, _headers = get_user_account_positions_with_http_info_impl(user_id, user_secret, account_id, extra)
      data
    end

    # List account positions
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get positions.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_account_positions_with_http_info(user_id:, user_secret:, account_id:, extra: {})
      get_user_account_positions_with_http_info_impl(user_id, user_secret, account_id, extra)
    end

    # List account positions
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get positions.
    # @param [Hash] opts the optional parameters
    # @return [Array<Position>]
    private def get_user_account_positions_impl(user_id, user_secret, account_id, opts = {})
      data, _status_code, _headers = get_user_account_positions_with_http_info(user_id, user_secret, account_id, opts)
      data
    end

    # List account positions
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to get positions.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<Position>, Integer, Hash)>] Array<Position> data, response status code and response headers
    private def get_user_account_positions_with_http_info_impl(user_id, user_secret, account_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AccountInformationApi.get_user_account_positions ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AccountInformationApi.get_user_account_positions"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AccountInformationApi.get_user_account_positions"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling AccountInformationApi.get_user_account_positions"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/positions'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<Position>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AccountInformationApi.get_user_account_positions",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AccountInformationApi#get_user_account_positions\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # List balances, positions and orders for the specified account
    #
    # @param account_id [String] The ID of the account to fetch holdings for.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_holdings(account_id:, user_id:, user_secret:, extra: {})
      data, _status_code, _headers = get_user_holdings_with_http_info_impl(account_id, user_id, user_secret, extra)
      data
    end

    # List balances, positions and orders for the specified account
    #
    # @param account_id [String] The ID of the account to fetch holdings for.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_holdings_with_http_info(account_id:, user_id:, user_secret:, extra: {})
      get_user_holdings_with_http_info_impl(account_id, user_id, user_secret, extra)
    end

    # List balances, positions and orders for the specified account
    # @param account_id [String] The ID of the account to fetch holdings for.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [AccountHoldingsAccount]
    private def get_user_holdings_impl(account_id, user_id, user_secret, opts = {})
      data, _status_code, _headers = get_user_holdings_with_http_info(account_id, user_id, user_secret, opts)
      data
    end

    # List balances, positions and orders for the specified account
    # @param account_id [String] The ID of the account to fetch holdings for.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(AccountHoldingsAccount, Integer, Hash)>] AccountHoldingsAccount data, response status code and response headers
    private def get_user_holdings_with_http_info_impl(account_id, user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AccountInformationApi.get_user_holdings ...'
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling AccountInformationApi.get_user_holdings"
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AccountInformationApi.get_user_holdings"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AccountInformationApi.get_user_holdings"
      end
      # resource path
      local_var_path = '/accounts/{accountId}/holdings'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

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
      return_type = opts[:debug_return_type] || 'AccountHoldingsAccount'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AccountInformationApi.get_user_holdings",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AccountInformationApi#get_user_holdings\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # List accounts
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_user_accounts(user_id:, user_secret:, extra: {})
      data, _status_code, _headers = list_user_accounts_with_http_info_impl(user_id, user_secret, extra)
      data
    end

    # List accounts
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_user_accounts_with_http_info(user_id:, user_secret:, extra: {})
      list_user_accounts_with_http_info_impl(user_id, user_secret, extra)
    end

    # List accounts
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<Account>]
    private def list_user_accounts_impl(user_id, user_secret, opts = {})
      data, _status_code, _headers = list_user_accounts_with_http_info(user_id, user_secret, opts)
      data
    end

    # List accounts
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<Account>, Integer, Hash)>] Array<Account> data, response status code and response headers
    private def list_user_accounts_with_http_info_impl(user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AccountInformationApi.list_user_accounts ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AccountInformationApi.list_user_accounts"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AccountInformationApi.list_user_accounts"
      end
      # resource path
      local_var_path = '/accounts'

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
      return_type = opts[:debug_return_type] || 'Array<Account>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AccountInformationApi.list_user_accounts",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AccountInformationApi#list_user_accounts\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Update details of an investment account
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to update.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def update_user_account(user_id:, user_secret:, account_id:, extra: {})
      data, _status_code, _headers = update_user_account_with_http_info_impl(user_id, user_secret, account_id, extra)
      data
    end

    # Update details of an investment account
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to update.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def update_user_account_with_http_info(user_id:, user_secret:, account_id:, extra: {})
      update_user_account_with_http_info_impl(user_id, user_secret, account_id, extra)
    end

    # Update details of an investment account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to update.
    # @param [Hash] opts the optional parameters
    # @return [Array<Account>]
    private def update_user_account_impl(user_id, user_secret, account_id, opts = {})
      data, _status_code, _headers = update_user_account_with_http_info(user_id, user_secret, account_id, opts)
      data
    end

    # Update details of an investment account
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param account_id [String] The ID of the account to update.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<Account>, Integer, Hash)>] Array<Account> data, response status code and response headers
    private def update_user_account_with_http_info_impl(user_id, user_secret, account_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AccountInformationApi.update_user_account ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AccountInformationApi.update_user_account"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AccountInformationApi.update_user_account"
      end
      # verify the required parameter 'account_id' is set
      if @api_client.config.client_side_validation && account_id.nil?
        fail ArgumentError, "Missing the required parameter 'account_id' when calling AccountInformationApi.update_user_account"
      end
      # resource path
      local_var_path = '/accounts/{accountId}'.sub('{' + 'accountId' + '}', CGI.escape(account_id.to_s))

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
      return_type = opts[:debug_return_type] || 'Array<Account>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AccountInformationApi.update_user_account",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:PUT, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AccountInformationApi#update_user_account\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  AccountInformation = AccountInformationApi::new
end
