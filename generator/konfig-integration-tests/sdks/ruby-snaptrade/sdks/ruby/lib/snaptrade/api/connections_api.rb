=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'cgi'

module SnapTrade
  class ConnectionsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Get brokerage authorization details
    # @param authorization_id [String] The ID of a brokerage authorization object.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def detail_brokerage_authorization(authorization_id:, user_id:, user_secret:, extra: {})
      data, _status_code, _headers = detail_brokerage_authorization_with_http_info_impl(authorization_id, user_id, user_secret, extra)
      data
    end

    # Get brokerage authorization details
    # @param authorization_id [String] The ID of a brokerage authorization object.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def detail_brokerage_authorization_with_http_info(authorization_id:, user_id:, user_secret:, extra: {})
      detail_brokerage_authorization_with_http_info_impl(authorization_id, user_id, user_secret, extra)
    end

    # Get brokerage authorization details
    # @param authorization_id [String] The ID of a brokerage authorization object.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [BrokerageAuthorization]
    def detail_brokerage_authorization_impl(authorization_id, user_id, user_secret, opts = {})
      data, _status_code, _headers = detail_brokerage_authorization_with_http_info(authorization_id, user_id, user_secret, opts)
      data
    end

    # Get brokerage authorization details
    # @param authorization_id [String] The ID of a brokerage authorization object.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(BrokerageAuthorization, Integer, Hash)>] BrokerageAuthorization data, response status code and response headers
    def detail_brokerage_authorization_with_http_info_impl(authorization_id, user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConnectionsApi.detail_brokerage_authorization ...'
      end
      # verify the required parameter 'authorization_id' is set
      if @api_client.config.client_side_validation && authorization_id.nil?
        fail ArgumentError, "Missing the required parameter 'authorization_id' when calling ConnectionsApi.detail_brokerage_authorization"
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling ConnectionsApi.detail_brokerage_authorization"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling ConnectionsApi.detail_brokerage_authorization"
      end
      # resource path
      local_var_path = '/authorizations/{authorizationId}'.sub('{' + 'authorizationId' + '}', CGI.escape(authorization_id.to_s))

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
      return_type = opts[:debug_return_type] || 'BrokerageAuthorization'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"ConnectionsApi.detail_brokerage_authorization",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConnectionsApi#detail_brokerage_authorization\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # List all brokerage authorizations for the user
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_brokerage_authorizations(user_id:, user_secret:, extra: {})
      data, _status_code, _headers = list_brokerage_authorizations_with_http_info_impl(user_id, user_secret, extra)
      data
    end

    # List all brokerage authorizations for the user
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_brokerage_authorizations_with_http_info(user_id:, user_secret:, extra: {})
      list_brokerage_authorizations_with_http_info_impl(user_id, user_secret, extra)
    end

    # List all brokerage authorizations for the user
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<BrokerageAuthorization>]
    def list_brokerage_authorizations_impl(user_id, user_secret, opts = {})
      data, _status_code, _headers = list_brokerage_authorizations_with_http_info(user_id, user_secret, opts)
      data
    end

    # List all brokerage authorizations for the user
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<BrokerageAuthorization>, Integer, Hash)>] Array<BrokerageAuthorization> data, response status code and response headers
    def list_brokerage_authorizations_with_http_info_impl(user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConnectionsApi.list_brokerage_authorizations ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling ConnectionsApi.list_brokerage_authorizations"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling ConnectionsApi.list_brokerage_authorizations"
      end
      # resource path
      local_var_path = '/authorizations'

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
      return_type = opts[:debug_return_type] || 'Array<BrokerageAuthorization>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"ConnectionsApi.list_brokerage_authorizations",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConnectionsApi#list_brokerage_authorizations\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Delete brokerage authorization
    # @param authorization_id [String] The ID of the Authorization to delete.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def remove_brokerage_authorization(authorization_id:, user_id:, user_secret:, extra: {})
      remove_brokerage_authorization_with_http_info_impl(authorization_id, user_id, user_secret, extra)
      nil
    end

    # Delete brokerage authorization
    # @param authorization_id [String] The ID of the Authorization to delete.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def remove_brokerage_authorization_with_http_info(authorization_id:, user_id:, user_secret:, extra: {})
      remove_brokerage_authorization_with_http_info_impl(authorization_id, user_id, user_secret, extra)
    end

    # Delete brokerage authorization
    # @param authorization_id [String] The ID of the Authorization to delete.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def remove_brokerage_authorization_impl(authorization_id, user_id, user_secret, opts = {})
      remove_brokerage_authorization_with_http_info(authorization_id, user_id, user_secret, opts)
      nil
    end

    # Delete brokerage authorization
    # @param authorization_id [String] The ID of the Authorization to delete.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Integer, Hash)>] nil, response status code and response headers
    def remove_brokerage_authorization_with_http_info_impl(authorization_id, user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConnectionsApi.remove_brokerage_authorization ...'
      end
      # verify the required parameter 'authorization_id' is set
      if @api_client.config.client_side_validation && authorization_id.nil?
        fail ArgumentError, "Missing the required parameter 'authorization_id' when calling ConnectionsApi.remove_brokerage_authorization"
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling ConnectionsApi.remove_brokerage_authorization"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling ConnectionsApi.remove_brokerage_authorization"
      end
      # resource path
      local_var_path = '/authorizations/{authorizationId}'.sub('{' + 'authorizationId' + '}', CGI.escape(authorization_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret

      # header parameters
      header_params = opts[:header_params] || {}

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type]

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"ConnectionsApi.remove_brokerage_authorization",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:DELETE, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConnectionsApi#remove_brokerage_authorization\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # List all session events for the partner
    # @param partner_client_id [String] 
    # @param user_id [String] Optional comma seperated list of user IDs used to filter the request on specific users
    # @param session_id [String] Optional comma seperated list of session IDs used to filter the request on specific users
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def session_events(partner_client_id:, user_id: SENTINEL, session_id: SENTINEL, extra: {})
      extra[:user_id] = user_id if user_id != SENTINEL
      extra[:session_id] = session_id if session_id != SENTINEL
      data, _status_code, _headers = session_events_with_http_info_impl(partner_client_id, extra)
      data
    end

    # List all session events for the partner
    # @param partner_client_id [String] 
    # @param user_id [String] Optional comma seperated list of user IDs used to filter the request on specific users
    # @param session_id [String] Optional comma seperated list of session IDs used to filter the request on specific users
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def session_events_with_http_info(partner_client_id:, user_id: SENTINEL, session_id: SENTINEL, extra: {})
      extra[:user_id] = user_id if user_id != SENTINEL
      extra[:session_id] = session_id if session_id != SENTINEL
      session_events_with_http_info_impl(partner_client_id, extra)
    end

    # List all session events for the partner
    # @param partner_client_id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :user_id Optional comma seperated list of user IDs used to filter the request on specific users
    # @option opts [String] :session_id Optional comma seperated list of session IDs used to filter the request on specific users
    # @return [Array<ConnectionsSessionEvents200ResponseInner>]
    def session_events_impl(partner_client_id, opts = {})
      data, _status_code, _headers = session_events_with_http_info(partner_client_id, opts)
      data
    end

    # List all session events for the partner
    # @param partner_client_id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :user_id Optional comma seperated list of user IDs used to filter the request on specific users
    # @option opts [String] :session_id Optional comma seperated list of session IDs used to filter the request on specific users
    # @return [Array<(Array<ConnectionsSessionEvents200ResponseInner>, Integer, Hash)>] Array<ConnectionsSessionEvents200ResponseInner> data, response status code and response headers
    def session_events_with_http_info_impl(partner_client_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConnectionsApi.session_events ...'
      end
      # verify the required parameter 'partner_client_id' is set
      if @api_client.config.client_side_validation && partner_client_id.nil?
        fail ArgumentError, "Missing the required parameter 'partner_client_id' when calling ConnectionsApi.session_events"
      end
      # resource path
      local_var_path = '/sessionEvents'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'PartnerClientId'] = partner_client_id
      query_params[:'userId'] = opts[:'user_id'] if !opts[:'user_id'].nil?
      query_params[:'sessionId'] = opts[:'session_id'] if !opts[:'session_id'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<ConnectionsSessionEvents200ResponseInner>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"ConnectionsApi.session_events",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConnectionsApi#session_events\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Connections = ConnectionsApi::new
end
