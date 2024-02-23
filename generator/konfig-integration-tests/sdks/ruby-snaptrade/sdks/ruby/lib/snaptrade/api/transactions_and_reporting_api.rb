=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'cgi'

module SnapTrade
  class TransactionsAndReportingApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Get transaction history for a user
    # Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param start_date [Date] 
    # @param end_date [Date] 
    # @param accounts [String] Optional comma seperated list of account IDs used to filter the request on specific accounts
    # @param brokerage_authorizations [String] Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations
    # @param type [String] Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_activities(user_id:, user_secret:, start_date: SENTINEL, end_date: SENTINEL, accounts: SENTINEL, brokerage_authorizations: SENTINEL, type: SENTINEL, extra: {})
      extra[:start_date] = start_date if start_date != SENTINEL
      extra[:end_date] = end_date if end_date != SENTINEL
      extra[:accounts] = accounts if accounts != SENTINEL
      extra[:brokerage_authorizations] = brokerage_authorizations if brokerage_authorizations != SENTINEL
      extra[:type] = type if type != SENTINEL
      data, _status_code, _headers = get_activities_with_http_info_impl(user_id, user_secret, extra)
      data
    end

    # Get transaction history for a user
    # Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param start_date [Date] 
    # @param end_date [Date] 
    # @param accounts [String] Optional comma seperated list of account IDs used to filter the request on specific accounts
    # @param brokerage_authorizations [String] Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations
    # @param type [String] Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_activities_with_http_info(user_id:, user_secret:, start_date: SENTINEL, end_date: SENTINEL, accounts: SENTINEL, brokerage_authorizations: SENTINEL, type: SENTINEL, extra: {})
      extra[:start_date] = start_date if start_date != SENTINEL
      extra[:end_date] = end_date if end_date != SENTINEL
      extra[:accounts] = accounts if accounts != SENTINEL
      extra[:brokerage_authorizations] = brokerage_authorizations if brokerage_authorizations != SENTINEL
      extra[:type] = type if type != SENTINEL
      get_activities_with_http_info_impl(user_id, user_secret, extra)
    end

    # Get transaction history for a user
    # Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [Date] :start_date 
    # @option opts [Date] :end_date 
    # @option opts [String] :accounts Optional comma seperated list of account IDs used to filter the request on specific accounts
    # @option opts [String] :brokerage_authorizations Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations
    # @option opts [String] :type Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT
    # @return [Array<UniversalActivity>]
    def get_activities_impl(user_id, user_secret, opts = {})
      data, _status_code, _headers = get_activities_with_http_info(user_id, user_secret, opts)
      data
    end

    # Get transaction history for a user
    # Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [Date] :start_date 
    # @option opts [Date] :end_date 
    # @option opts [String] :accounts Optional comma seperated list of account IDs used to filter the request on specific accounts
    # @option opts [String] :brokerage_authorizations Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations
    # @option opts [String] :type Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT
    # @return [Array<(Array<UniversalActivity>, Integer, Hash)>] Array<UniversalActivity> data, response status code and response headers
    def get_activities_with_http_info_impl(user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: TransactionsAndReportingApi.get_activities ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling TransactionsAndReportingApi.get_activities"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling TransactionsAndReportingApi.get_activities"
      end
      # resource path
      local_var_path = '/activities'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret
      query_params[:'startDate'] = opts[:'start_date'] if !opts[:'start_date'].nil?
      query_params[:'endDate'] = opts[:'end_date'] if !opts[:'end_date'].nil?
      query_params[:'accounts'] = opts[:'accounts'] if !opts[:'accounts'].nil?
      query_params[:'brokerageAuthorizations'] = opts[:'brokerage_authorizations'] if !opts[:'brokerage_authorizations'].nil?
      query_params[:'type'] = opts[:'type'] if !opts[:'type'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<UniversalActivity>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"TransactionsAndReportingApi.get_activities",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: TransactionsAndReportingApi#get_activities\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Get performance information for a specific timeframe
    # Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.
    # @param start_date [Date] 
    # @param end_date [Date] 
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param accounts [String] Optional comma seperated list of account IDs used to filter the request on specific accounts
    # @param detailed [Boolean] Optional, increases frequency of data points for the total value and contribution charts if set to true
    # @param frequency [String] Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_reporting_custom_range(start_date:, end_date:, user_id:, user_secret:, accounts: SENTINEL, detailed: SENTINEL, frequency: SENTINEL, extra: {})
      extra[:accounts] = accounts if accounts != SENTINEL
      extra[:detailed] = detailed if detailed != SENTINEL
      extra[:frequency] = frequency if frequency != SENTINEL
      data, _status_code, _headers = get_reporting_custom_range_with_http_info_impl(start_date, end_date, user_id, user_secret, extra)
      data
    end

    # Get performance information for a specific timeframe
    # Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.
    # @param start_date [Date] 
    # @param end_date [Date] 
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param accounts [String] Optional comma seperated list of account IDs used to filter the request on specific accounts
    # @param detailed [Boolean] Optional, increases frequency of data points for the total value and contribution charts if set to true
    # @param frequency [String] Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_reporting_custom_range_with_http_info(start_date:, end_date:, user_id:, user_secret:, accounts: SENTINEL, detailed: SENTINEL, frequency: SENTINEL, extra: {})
      extra[:accounts] = accounts if accounts != SENTINEL
      extra[:detailed] = detailed if detailed != SENTINEL
      extra[:frequency] = frequency if frequency != SENTINEL
      get_reporting_custom_range_with_http_info_impl(start_date, end_date, user_id, user_secret, extra)
    end

    # Get performance information for a specific timeframe
    # Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.
    # @param start_date [Date] 
    # @param end_date [Date] 
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :accounts Optional comma seperated list of account IDs used to filter the request on specific accounts
    # @option opts [Boolean] :detailed Optional, increases frequency of data points for the total value and contribution charts if set to true
    # @option opts [String] :frequency Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.
    # @return [PerformanceCustom]
    def get_reporting_custom_range_impl(start_date, end_date, user_id, user_secret, opts = {})
      data, _status_code, _headers = get_reporting_custom_range_with_http_info(start_date, end_date, user_id, user_secret, opts)
      data
    end

    # Get performance information for a specific timeframe
    # Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.
    # @param start_date [Date] 
    # @param end_date [Date] 
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :accounts Optional comma seperated list of account IDs used to filter the request on specific accounts
    # @option opts [Boolean] :detailed Optional, increases frequency of data points for the total value and contribution charts if set to true
    # @option opts [String] :frequency Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.
    # @return [Array<(PerformanceCustom, Integer, Hash)>] PerformanceCustom data, response status code and response headers
    def get_reporting_custom_range_with_http_info_impl(start_date, end_date, user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: TransactionsAndReportingApi.get_reporting_custom_range ...'
      end
      # verify the required parameter 'start_date' is set
      if @api_client.config.client_side_validation && start_date.nil?
        fail ArgumentError, "Missing the required parameter 'start_date' when calling TransactionsAndReportingApi.get_reporting_custom_range"
      end
      # verify the required parameter 'end_date' is set
      if @api_client.config.client_side_validation && end_date.nil?
        fail ArgumentError, "Missing the required parameter 'end_date' when calling TransactionsAndReportingApi.get_reporting_custom_range"
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling TransactionsAndReportingApi.get_reporting_custom_range"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling TransactionsAndReportingApi.get_reporting_custom_range"
      end
      # resource path
      local_var_path = '/performance/custom'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'startDate'] = start_date
      query_params[:'endDate'] = end_date
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret
      query_params[:'accounts'] = opts[:'accounts'] if !opts[:'accounts'].nil?
      query_params[:'detailed'] = opts[:'detailed'] if !opts[:'detailed'].nil?
      query_params[:'frequency'] = opts[:'frequency'] if !opts[:'frequency'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'PerformanceCustom'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"TransactionsAndReportingApi.get_reporting_custom_range",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: TransactionsAndReportingApi#get_reporting_custom_range\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  TransactionsAndReporting = TransactionsAndReportingApi::new
end
