=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'cgi'

module Carbon
  class WebhooksApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Add Webhook Url
    #
    # @param url [String] 
    # @param body [AddWebhookProps] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def add_url(url:, extra: {})
      _body = {}
      _body[:url] = url if url != SENTINEL
      add_webhook_props = _body
      api_response = add_url_with_http_info_impl(add_webhook_props, extra)
      api_response.data
    end

    # Add Webhook Url
    #
    # @param url [String] 
    # @param body [AddWebhookProps] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def add_url_with_http_info(url:, extra: {})
      _body = {}
      _body[:url] = url if url != SENTINEL
      add_webhook_props = _body
      add_url_with_http_info_impl(add_webhook_props, extra)
    end

    # Add Webhook Url
    # @param add_webhook_props [AddWebhookProps] 
    # @param [Hash] opts the optional parameters
    # @return [Webhook]
    private def add_url_impl(add_webhook_props, opts = {})
      data, _status_code, _headers = add_url_with_http_info(add_webhook_props, opts)
      data
    end

    # Add Webhook Url
    # @param add_webhook_props [AddWebhookProps] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is Webhook, status code, headers and response
    private def add_url_with_http_info_impl(add_webhook_props, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WebhooksApi.add_url ...'
      end
      # verify the required parameter 'add_webhook_props' is set
      if @api_client.config.client_side_validation && add_webhook_props.nil?
        fail ArgumentError, "Missing the required parameter 'add_webhook_props' when calling WebhooksApi.add_url"
      end
      # resource path
      local_var_path = '/add_webhook'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(add_webhook_props)

      # return_type
      return_type = opts[:debug_return_type] || 'Webhook'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken']

      new_options = opts.merge(
        :operation => :"WebhooksApi.add_url",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: WebhooksApi#add_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Delete Webhook Url
    #
    # @param webhook_id [Integer] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def delete_url(webhook_id:, extra: {})
      api_response = delete_url_with_http_info_impl(webhook_id, extra)
      api_response.data
    end

    # Delete Webhook Url
    #
    # @param webhook_id [Integer] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def delete_url_with_http_info(webhook_id:, extra: {})
      delete_url_with_http_info_impl(webhook_id, extra)
    end

    # Delete Webhook Url
    # @param webhook_id [Integer] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def delete_url_impl(webhook_id, opts = {})
      data, _status_code, _headers = delete_url_with_http_info(webhook_id, opts)
      data
    end

    # Delete Webhook Url
    # @param webhook_id [Integer] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def delete_url_with_http_info_impl(webhook_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WebhooksApi.delete_url ...'
      end
      # verify the required parameter 'webhook_id' is set
      if @api_client.config.client_side_validation && webhook_id.nil?
        fail ArgumentError, "Missing the required parameter 'webhook_id' when calling WebhooksApi.delete_url"
      end
      # resource path
      local_var_path = '/delete_webhook/{webhook_id}'.sub('{' + 'webhook_id' + '}', CGI.escape(webhook_id.to_s))

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
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken']

      new_options = opts.merge(
        :operation => :"WebhooksApi.delete_url",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:DELETE, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: WebhooksApi#delete_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Webhook Urls
    #
    # @param pagination [Pagination] 
    # @param order_by [WebhookOrderByColumns] 
    # @param order_dir [OrderDir] 
    # @param filters [WebhookFilters] 
    # @param body [WebhookQueryInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def urls(pagination: SENTINEL, order_by: 'updated_at', order_dir: 'asc', filters: SENTINEL, extra: {})
      _body = {}
      _body[:pagination] = pagination if pagination != SENTINEL
      _body[:order_by] = order_by if order_by != SENTINEL
      _body[:order_dir] = order_dir if order_dir != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      webhook_query_input = _body
      api_response = urls_with_http_info_impl(webhook_query_input, extra)
      api_response.data
    end

    # Webhook Urls
    #
    # @param pagination [Pagination] 
    # @param order_by [WebhookOrderByColumns] 
    # @param order_dir [OrderDir] 
    # @param filters [WebhookFilters] 
    # @param body [WebhookQueryInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def urls_with_http_info(pagination: SENTINEL, order_by: 'updated_at', order_dir: 'asc', filters: SENTINEL, extra: {})
      _body = {}
      _body[:pagination] = pagination if pagination != SENTINEL
      _body[:order_by] = order_by if order_by != SENTINEL
      _body[:order_dir] = order_dir if order_dir != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      webhook_query_input = _body
      urls_with_http_info_impl(webhook_query_input, extra)
    end

    # Webhook Urls
    # @param webhook_query_input [WebhookQueryInput] 
    # @param [Hash] opts the optional parameters
    # @return [WebhookQueryResponse]
    private def urls_impl(webhook_query_input, opts = {})
      data, _status_code, _headers = urls_with_http_info(webhook_query_input, opts)
      data
    end

    # Webhook Urls
    # @param webhook_query_input [WebhookQueryInput] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is WebhookQueryResponse, status code, headers and response
    private def urls_with_http_info_impl(webhook_query_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WebhooksApi.urls ...'
      end
      # verify the required parameter 'webhook_query_input' is set
      if @api_client.config.client_side_validation && webhook_query_input.nil?
        fail ArgumentError, "Missing the required parameter 'webhook_query_input' when calling WebhooksApi.urls"
      end
      # resource path
      local_var_path = '/webhooks'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(webhook_query_input)

      # return_type
      return_type = opts[:debug_return_type] || 'WebhookQueryResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken']

      new_options = opts.merge(
        :operation => :"WebhooksApi.urls",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: WebhooksApi#urls\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Webhooks = WebhooksApi::new
end
