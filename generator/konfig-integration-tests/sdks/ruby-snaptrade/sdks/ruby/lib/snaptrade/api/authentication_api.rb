=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'cgi'

module SnapTrade
  class AuthenticationApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Delete SnapTrade user
    #
    # Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.
    #
    # @param user_id [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def delete_snap_trade_user(user_id:, extra: {})
      data, _status_code, _headers = delete_snap_trade_user_with_http_info_impl(user_id, extra)
      data
    end

    # Delete SnapTrade user
    #
    # Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.
    #
    # @param user_id [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def delete_snap_trade_user_with_http_info(user_id:, extra: {})
      delete_snap_trade_user_with_http_info_impl(user_id, extra)
    end

    # Delete SnapTrade user
    # Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.
    # @param user_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [DeleteUserResponse]
    private def delete_snap_trade_user_impl(user_id, opts = {})
      data, _status_code, _headers = delete_snap_trade_user_with_http_info(user_id, opts)
      data
    end

    # Delete SnapTrade user
    # Deletes a user you&#39;ve registered over the SnapTrade API, and any data associated with them or their investment accounts.
    # @param user_id [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(DeleteUserResponse, Integer, Hash)>] DeleteUserResponse data, response status code and response headers
    private def delete_snap_trade_user_with_http_info_impl(user_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AuthenticationApi.delete_snap_trade_user ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AuthenticationApi.delete_snap_trade_user"
      end
      # resource path
      local_var_path = '/snapTrade/deleteUser'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'DeleteUserResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AuthenticationApi.delete_snap_trade_user",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:DELETE, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AuthenticationApi#delete_snap_trade_user\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Generate encrypted JWT token
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_jwt(user_id:, user_secret:, extra: {})
      data, _status_code, _headers = get_user_jwt_with_http_info_impl(user_id, user_secret, extra)
      data
    end

    # Generate encrypted JWT token
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_user_jwt_with_http_info(user_id:, user_secret:, extra: {})
      get_user_jwt_with_http_info_impl(user_id, user_secret, extra)
    end

    # Generate encrypted JWT token
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [EncryptedResponse]
    private def get_user_jwt_impl(user_id, user_secret, opts = {})
      data, _status_code, _headers = get_user_jwt_with_http_info(user_id, user_secret, opts)
      data
    end

    # Generate encrypted JWT token
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(EncryptedResponse, Integer, Hash)>] EncryptedResponse data, response status code and response headers
    private def get_user_jwt_with_http_info_impl(user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AuthenticationApi.get_user_jwt ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AuthenticationApi.get_user_jwt"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AuthenticationApi.get_user_jwt"
      end
      # resource path
      local_var_path = '/snapTrade/encryptedJWT'

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
      return_type = opts[:debug_return_type] || 'EncryptedResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AuthenticationApi.get_user_jwt",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AuthenticationApi#get_user_jwt\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # List SnapTrade users
    #
    # Returns a list of users you've registered over the SnapTrade API.
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_snap_trade_users(extra: {})
      data, _status_code, _headers = list_snap_trade_users_with_http_info_impl(extra)
      data
    end

    # List SnapTrade users
    #
    # Returns a list of users you've registered over the SnapTrade API.
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_snap_trade_users_with_http_info(extra: {})
      list_snap_trade_users_with_http_info_impl(extra)
    end

    # List SnapTrade users
    # Returns a list of users you've registered over the SnapTrade API.
    # @param [Hash] opts the optional parameters
    # @return [Array<String>]
    private def list_snap_trade_users_impl(opts = {})
      data, _status_code, _headers = list_snap_trade_users_with_http_info(opts)
      data
    end

    # List SnapTrade users
    # Returns a list of users you&#39;ve registered over the SnapTrade API.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<String>, Integer, Hash)>] Array<String> data, response status code and response headers
    private def list_snap_trade_users_with_http_info_impl(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AuthenticationApi.list_snap_trade_users ...'
      end
      # resource path
      local_var_path = '/snapTrade/listUsers'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<String>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AuthenticationApi.list_snap_trade_users",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AuthenticationApi#list_snap_trade_users\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Login user & generate connection link
    #
    # Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param broker [String] Slug of the brokerage to connect the user to
    # @param immediate_redirect [Boolean] When set to True, user will be redirected back to the partner's site instead of the connection portal
    # @param custom_redirect [String] URL to redirect the user to after the user connects their brokerage account
    # @param reconnect [String] The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information.
    # @param connection_type [ConnectionType] Sets whether the connection should be read or trade
    # @param connection_portal_version [ConnectionPortalVersion] Sets the version of the connection portal to render, with a default to 'v2'
    # @param body [SnapTradeLoginUserRequestBody] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def login_snap_trade_user(user_id:, user_secret:, broker: SENTINEL, immediate_redirect: SENTINEL, custom_redirect: SENTINEL, reconnect: SENTINEL, connection_type: SENTINEL, connection_portal_version: SENTINEL, extra: {})
      _body = {}
      _body[:broker] = broker if broker != SENTINEL
      _body[:immediateRedirect] = immediate_redirect if immediate_redirect != SENTINEL
      _body[:customRedirect] = custom_redirect if custom_redirect != SENTINEL
      _body[:reconnect] = reconnect if reconnect != SENTINEL
      _body[:connectionType] = connection_type if connection_type != SENTINEL
      _body[:connectionPortalVersion] = connection_portal_version if connection_portal_version != SENTINEL
      extra[:snap_trade_login_user_request_body] = _body if !_body.empty?
      data, _status_code, _headers = login_snap_trade_user_with_http_info_impl(user_id, user_secret, extra)
      data
    end

    # Login user & generate connection link
    #
    # Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param broker [String] Slug of the brokerage to connect the user to
    # @param immediate_redirect [Boolean] When set to True, user will be redirected back to the partner's site instead of the connection portal
    # @param custom_redirect [String] URL to redirect the user to after the user connects their brokerage account
    # @param reconnect [String] The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information.
    # @param connection_type [ConnectionType] Sets whether the connection should be read or trade
    # @param connection_portal_version [ConnectionPortalVersion] Sets the version of the connection portal to render, with a default to 'v2'
    # @param body [SnapTradeLoginUserRequestBody] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def login_snap_trade_user_with_http_info(user_id:, user_secret:, broker: SENTINEL, immediate_redirect: SENTINEL, custom_redirect: SENTINEL, reconnect: SENTINEL, connection_type: SENTINEL, connection_portal_version: SENTINEL, extra: {})
      _body = {}
      _body[:broker] = broker if broker != SENTINEL
      _body[:immediateRedirect] = immediate_redirect if immediate_redirect != SENTINEL
      _body[:customRedirect] = custom_redirect if custom_redirect != SENTINEL
      _body[:reconnect] = reconnect if reconnect != SENTINEL
      _body[:connectionType] = connection_type if connection_type != SENTINEL
      _body[:connectionPortalVersion] = connection_portal_version if connection_portal_version != SENTINEL
      extra[:snap_trade_login_user_request_body] = _body if !_body.empty?
      login_snap_trade_user_with_http_info_impl(user_id, user_secret, extra)
    end

    # Login user & generate connection link
    # Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [SnapTradeLoginUserRequestBody] :snap_trade_login_user_request_body 
    # @return [AuthenticationLoginSnapTradeUser200Response]
    private def login_snap_trade_user_impl(user_id, user_secret, opts = {})
      data, _status_code, _headers = login_snap_trade_user_with_http_info(user_id, user_secret, opts)
      data
    end

    # Login user &amp; generate connection link
    # Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [SnapTradeLoginUserRequestBody] :snap_trade_login_user_request_body 
    # @return [Array<(AuthenticationLoginSnapTradeUser200Response, Integer, Hash)>] AuthenticationLoginSnapTradeUser200Response data, response status code and response headers
    private def login_snap_trade_user_with_http_info_impl(user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AuthenticationApi.login_snap_trade_user ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling AuthenticationApi.login_snap_trade_user"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling AuthenticationApi.login_snap_trade_user"
      end
      # resource path
      local_var_path = '/snapTrade/login'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(opts[:'snap_trade_login_user_request_body'])

      # return_type
      return_type = opts[:debug_return_type] || 'AuthenticationLoginSnapTradeUser200Response'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AuthenticationApi.login_snap_trade_user",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AuthenticationApi#login_snap_trade_user\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Create SnapTrade user
    #
    # @param user_id [String] SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user
    # @param body [SnapTradeRegisterUserRequestBody] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def register_snap_trade_user(user_id: SENTINEL, extra: {})
      _body = {}
      _body[:userId] = user_id if user_id != SENTINEL
      snap_trade_register_user_request_body = _body
      data, _status_code, _headers = register_snap_trade_user_with_http_info_impl(snap_trade_register_user_request_body, extra)
      data
    end

    # Create SnapTrade user
    #
    # @param user_id [String] SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user
    # @param body [SnapTradeRegisterUserRequestBody] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def register_snap_trade_user_with_http_info(user_id: SENTINEL, extra: {})
      _body = {}
      _body[:userId] = user_id if user_id != SENTINEL
      snap_trade_register_user_request_body = _body
      register_snap_trade_user_with_http_info_impl(snap_trade_register_user_request_body, extra)
    end

    # Create SnapTrade user
    # @param snap_trade_register_user_request_body [SnapTradeRegisterUserRequestBody] 
    # @param [Hash] opts the optional parameters
    # @return [UserIDandSecret]
    private def register_snap_trade_user_impl(snap_trade_register_user_request_body, opts = {})
      data, _status_code, _headers = register_snap_trade_user_with_http_info(snap_trade_register_user_request_body, opts)
      data
    end

    # Create SnapTrade user
    # @param snap_trade_register_user_request_body [SnapTradeRegisterUserRequestBody] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(UserIDandSecret, Integer, Hash)>] UserIDandSecret data, response status code and response headers
    private def register_snap_trade_user_with_http_info_impl(snap_trade_register_user_request_body, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AuthenticationApi.register_snap_trade_user ...'
      end
      # verify the required parameter 'snap_trade_register_user_request_body' is set
      if @api_client.config.client_side_validation && snap_trade_register_user_request_body.nil?
        fail ArgumentError, "Missing the required parameter 'snap_trade_register_user_request_body' when calling AuthenticationApi.register_snap_trade_user"
      end
      # resource path
      local_var_path = '/snapTrade/registerUser'

      # query parameters
      query_params = opts[:query_params] || {}

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(snap_trade_register_user_request_body)

      # return_type
      return_type = opts[:debug_return_type] || 'UserIDandSecret'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AuthenticationApi.register_snap_trade_user",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AuthenticationApi#register_snap_trade_user\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end


    # Obtain a new user secret for a user
    #
    # @param user_id [String] SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user
    # @param user_secret [String] SnapTrade User Secret randomly generated by SnapTrade. This should be considered priviledged information and if compromised, you should delete and re-create this SnapTrade user.
    # @param body [UserIDandSecret] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def reset_snap_trade_user_secret(user_id: SENTINEL, user_secret: SENTINEL, extra: {})
      _body = {}
      _body[:userId] = user_id if user_id != SENTINEL
      _body[:userSecret] = user_secret if user_secret != SENTINEL
      user_i_dand_secret = _body
      data, _status_code, _headers = reset_snap_trade_user_secret_with_http_info_impl(user_i_dand_secret, extra)
      data
    end

    # Obtain a new user secret for a user
    #
    # @param user_id [String] SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user
    # @param user_secret [String] SnapTrade User Secret randomly generated by SnapTrade. This should be considered priviledged information and if compromised, you should delete and re-create this SnapTrade user.
    # @param body [UserIDandSecret] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def reset_snap_trade_user_secret_with_http_info(user_id: SENTINEL, user_secret: SENTINEL, extra: {})
      _body = {}
      _body[:userId] = user_id if user_id != SENTINEL
      _body[:userSecret] = user_secret if user_secret != SENTINEL
      user_i_dand_secret = _body
      reset_snap_trade_user_secret_with_http_info_impl(user_i_dand_secret, extra)
    end

    # Obtain a new user secret for a user
    # @param user_i_dand_secret [UserIDandSecret] 
    # @param [Hash] opts the optional parameters
    # @return [UserIDandSecret]
    private def reset_snap_trade_user_secret_impl(user_i_dand_secret, opts = {})
      data, _status_code, _headers = reset_snap_trade_user_secret_with_http_info(user_i_dand_secret, opts)
      data
    end

    # Obtain a new user secret for a user
    # @param user_i_dand_secret [UserIDandSecret] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(UserIDandSecret, Integer, Hash)>] UserIDandSecret data, response status code and response headers
    private def reset_snap_trade_user_secret_with_http_info_impl(user_i_dand_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AuthenticationApi.reset_snap_trade_user_secret ...'
      end
      # verify the required parameter 'user_i_dand_secret' is set
      if @api_client.config.client_side_validation && user_i_dand_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_i_dand_secret' when calling AuthenticationApi.reset_snap_trade_user_secret"
      end
      # resource path
      local_var_path = '/snapTrade/resetUserSecret'

      # query parameters
      query_params = opts[:query_params] || {}

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(user_i_dand_secret)

      # return_type
      return_type = opts[:debug_return_type] || 'UserIDandSecret'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"AuthenticationApi.reset_snap_trade_user_secret",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AuthenticationApi#reset_snap_trade_user_secret\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Authentication = AuthenticationApi::new
end
