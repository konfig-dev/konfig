=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'cgi'

module Carbon
  class UtilitiesApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Fetch Urls
    #
    # Extracts all URLs from a webpage. 
    # 
    # Args:
    #     url (str): URL of the webpage
    # 
    # Returns:
    #     FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.
    #
    # @param url [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def fetch_urls(url:, extra: {})
      api_response = fetch_urls_with_http_info_impl(url, extra)
      api_response.data
    end

    # Fetch Urls
    #
    # Extracts all URLs from a webpage. 
    # 
    # Args:
    #     url (str): URL of the webpage
    # 
    # Returns:
    #     FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.
    #
    # @param url [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def fetch_urls_with_http_info(url:, extra: {})
      fetch_urls_with_http_info_impl(url, extra)
    end

    # Fetch Urls
    # Extracts all URLs from a webpage.   Args:     url (str): URL of the webpage  Returns:     FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.
    # @param url [String] 
    # @param [Hash] opts the optional parameters
    # @return [FetchURLsResponse]
    private def fetch_urls_impl(url, opts = {})
      data, _status_code, _headers = fetch_urls_with_http_info(url, opts)
      data
    end

    # Fetch Urls
    # Extracts all URLs from a webpage.   Args:     url (str): URL of the webpage  Returns:     FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.
    # @param url [String] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is FetchURLsResponse, status code, headers and response
    private def fetch_urls_with_http_info_impl(url, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UtilitiesApi.fetch_urls ...'
      end
      # verify the required parameter 'url' is set
      if @api_client.config.client_side_validation && url.nil?
        fail ArgumentError, "Missing the required parameter 'url' when calling UtilitiesApi.fetch_urls"
      end
      # resource path
      local_var_path = '/fetch_urls'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'url'] = url

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'FetchURLsResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"UtilitiesApi.fetch_urls",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UtilitiesApi#fetch_urls\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Fetch Youtube Transcripts
    #
    # Fetches english transcripts from YouTube videos.
    # 
    # Args:
    #     id (str): The ID of the YouTube video. 
    #     raw (bool): Whether to return the raw transcript or not. Defaults to False.
    # 
    # Returns:
    #     dict: A dictionary with the transcript of the YouTube video.
    #
    # @param id [String] 
    # @param raw [Boolean] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def fetch_youtube_transcripts(id:, raw: false, extra: {})
      extra[:raw] = raw if raw != SENTINEL
      api_response = fetch_youtube_transcripts_with_http_info_impl(id, extra)
      api_response.data
    end

    # Fetch Youtube Transcripts
    #
    # Fetches english transcripts from YouTube videos.
    # 
    # Args:
    #     id (str): The ID of the YouTube video. 
    #     raw (bool): Whether to return the raw transcript or not. Defaults to False.
    # 
    # Returns:
    #     dict: A dictionary with the transcript of the YouTube video.
    #
    # @param id [String] 
    # @param raw [Boolean] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def fetch_youtube_transcripts_with_http_info(id:, raw: false, extra: {})
      extra[:raw] = raw if raw != SENTINEL
      fetch_youtube_transcripts_with_http_info_impl(id, extra)
    end

    # Fetch Youtube Transcripts
    # Fetches english transcripts from YouTube videos.  Args:     id (str): The ID of the YouTube video.      raw (bool): Whether to return the raw transcript or not. Defaults to False.  Returns:     dict: A dictionary with the transcript of the YouTube video.
    # @param id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [Boolean] :raw  (default to false)
    # @return [YoutubeTranscriptResponse]
    private def fetch_youtube_transcripts_impl(id, opts = {})
      data, _status_code, _headers = fetch_youtube_transcripts_with_http_info(id, opts)
      data
    end

    # Fetch Youtube Transcripts
    # Fetches english transcripts from YouTube videos.  Args:     id (str): The ID of the YouTube video.      raw (bool): Whether to return the raw transcript or not. Defaults to False.  Returns:     dict: A dictionary with the transcript of the YouTube video.
    # @param id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [Boolean] :raw  (default to false)
    # @return [APIResponse] data is YoutubeTranscriptResponse, status code, headers and response
    private def fetch_youtube_transcripts_with_http_info_impl(id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UtilitiesApi.fetch_youtube_transcripts ...'
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling UtilitiesApi.fetch_youtube_transcripts"
      end
      # resource path
      local_var_path = '/fetch_youtube_transcript'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'id'] = id
      query_params[:'raw'] = opts[:'raw'] if !opts[:'raw'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'YoutubeTranscriptResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"UtilitiesApi.fetch_youtube_transcripts",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UtilitiesApi#fetch_youtube_transcripts\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Sitemap
    #
    # Retrieves all URLs from a sitemap, which can subsequently be utilized with our `web_scrape` endpoint.
    # 
    # <!--Args:
    #     url (str): URL of the sitemap
    # 
    # Returns:
    #     dict: A dictionary with a list of URLs extracted from the sitemap.-->
    #
    # @param url [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def process_sitemap(url:, extra: {})
      api_response = process_sitemap_with_http_info_impl(url, extra)
      api_response.data
    end

    # Sitemap
    #
    # Retrieves all URLs from a sitemap, which can subsequently be utilized with our `web_scrape` endpoint.
    # 
    # <!--Args:
    #     url (str): URL of the sitemap
    # 
    # Returns:
    #     dict: A dictionary with a list of URLs extracted from the sitemap.-->
    #
    # @param url [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def process_sitemap_with_http_info(url:, extra: {})
      process_sitemap_with_http_info_impl(url, extra)
    end

    # Sitemap
    # Retrieves all URLs from a sitemap, which can subsequently be utilized with our `web_scrape` endpoint.  <!--Args:     url (str): URL of the sitemap  Returns:     dict: A dictionary with a list of URLs extracted from the sitemap.-->
    # @param url [String] 
    # @param [Hash] opts the optional parameters
    # @return [Object]
    private def process_sitemap_impl(url, opts = {})
      data, _status_code, _headers = process_sitemap_with_http_info(url, opts)
      data
    end

    # Sitemap
    # Retrieves all URLs from a sitemap, which can subsequently be utilized with our &#x60;web_scrape&#x60; endpoint.  &lt;!--Args:     url (str): URL of the sitemap  Returns:     dict: A dictionary with a list of URLs extracted from the sitemap.--&gt;
    # @param url [String] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is Object, status code, headers and response
    private def process_sitemap_with_http_info_impl(url, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UtilitiesApi.process_sitemap ...'
      end
      # verify the required parameter 'url' is set
      if @api_client.config.client_side_validation && url.nil?
        fail ArgumentError, "Missing the required parameter 'url' when calling UtilitiesApi.process_sitemap"
      end
      # resource path
      local_var_path = '/process_sitemap'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'url'] = url

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"UtilitiesApi.process_sitemap",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UtilitiesApi#process_sitemap\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Scrape Sitemap
    #
    # Extracts all URLs from a sitemap and performs a web scrape on each of them.
    # 
    # Args:
    #     sitemap_url (str): URL of the sitemap
    # 
    # Returns:
    #     dict: A response object with the status of the scraping job message.-->
    #
    # @param url [String] 
    # @param tags [Hash<String, Tags1>] 
    # @param max_pages_to_scrape [Integer] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param enable_auto_sync [Boolean] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param html_tags_to_skip [Array<String>] 
    # @param css_classes_to_skip [Array<String>] 
    # @param css_selectors_to_skip [Array<String>] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param body [SitemapScrapeRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def scrape_sitemap(url:, tags: SENTINEL, max_pages_to_scrape: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, enable_auto_sync: false, generate_sparse_vectors: false, prepend_filename_to_chunks: false, html_tags_to_skip: SENTINEL, css_classes_to_skip: SENTINEL, css_selectors_to_skip: SENTINEL, embedding_model: 'OPENAI', extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:url] = url if url != SENTINEL
      _body[:max_pages_to_scrape] = max_pages_to_scrape if max_pages_to_scrape != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:enable_auto_sync] = enable_auto_sync if enable_auto_sync != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:html_tags_to_skip] = html_tags_to_skip if html_tags_to_skip != SENTINEL
      _body[:css_classes_to_skip] = css_classes_to_skip if css_classes_to_skip != SENTINEL
      _body[:css_selectors_to_skip] = css_selectors_to_skip if css_selectors_to_skip != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      sitemap_scrape_request = _body
      api_response = scrape_sitemap_with_http_info_impl(sitemap_scrape_request, extra)
      api_response.data
    end

    # Scrape Sitemap
    #
    # Extracts all URLs from a sitemap and performs a web scrape on each of them.
    # 
    # Args:
    #     sitemap_url (str): URL of the sitemap
    # 
    # Returns:
    #     dict: A response object with the status of the scraping job message.-->
    #
    # @param url [String] 
    # @param tags [Hash<String, Tags1>] 
    # @param max_pages_to_scrape [Integer] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param enable_auto_sync [Boolean] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param html_tags_to_skip [Array<String>] 
    # @param css_classes_to_skip [Array<String>] 
    # @param css_selectors_to_skip [Array<String>] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param body [SitemapScrapeRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def scrape_sitemap_with_http_info(url:, tags: SENTINEL, max_pages_to_scrape: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, enable_auto_sync: false, generate_sparse_vectors: false, prepend_filename_to_chunks: false, html_tags_to_skip: SENTINEL, css_classes_to_skip: SENTINEL, css_selectors_to_skip: SENTINEL, embedding_model: 'OPENAI', extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:url] = url if url != SENTINEL
      _body[:max_pages_to_scrape] = max_pages_to_scrape if max_pages_to_scrape != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:enable_auto_sync] = enable_auto_sync if enable_auto_sync != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:html_tags_to_skip] = html_tags_to_skip if html_tags_to_skip != SENTINEL
      _body[:css_classes_to_skip] = css_classes_to_skip if css_classes_to_skip != SENTINEL
      _body[:css_selectors_to_skip] = css_selectors_to_skip if css_selectors_to_skip != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      sitemap_scrape_request = _body
      scrape_sitemap_with_http_info_impl(sitemap_scrape_request, extra)
    end

    # Scrape Sitemap
    # Extracts all URLs from a sitemap and performs a web scrape on each of them.  Args:     sitemap_url (str): URL of the sitemap  Returns:     dict: A response object with the status of the scraping job message.-->
    # @param sitemap_scrape_request [SitemapScrapeRequest] 
    # @param [Hash] opts the optional parameters
    # @return [Object]
    private def scrape_sitemap_impl(sitemap_scrape_request, opts = {})
      data, _status_code, _headers = scrape_sitemap_with_http_info(sitemap_scrape_request, opts)
      data
    end

    # Scrape Sitemap
    # Extracts all URLs from a sitemap and performs a web scrape on each of them.  Args:     sitemap_url (str): URL of the sitemap  Returns:     dict: A response object with the status of the scraping job message.--&gt;
    # @param sitemap_scrape_request [SitemapScrapeRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is Object, status code, headers and response
    private def scrape_sitemap_with_http_info_impl(sitemap_scrape_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UtilitiesApi.scrape_sitemap ...'
      end
      # verify the required parameter 'sitemap_scrape_request' is set
      if @api_client.config.client_side_validation && sitemap_scrape_request.nil?
        fail ArgumentError, "Missing the required parameter 'sitemap_scrape_request' when calling UtilitiesApi.scrape_sitemap"
      end
      # resource path
      local_var_path = '/scrape_sitemap'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(sitemap_scrape_request)

      # return_type
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"UtilitiesApi.scrape_sitemap",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UtilitiesApi#scrape_sitemap\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Web Scrape
    #
    # Conduct a web scrape on a given webpage URL. Our web scraper is fully compatible with JavaScript and supports recursion depth, enabling you to efficiently extract all content from the target website.
    # 
    # <!--Args:
    #     scraping_requests (List[WebscrapeRequest]): A list of WebscrapeRequest objects.
    # 
    #     
    # Returns:
    #     dict: A response object with the status of the scraping job message.-->
    #
    # @param body [Array<WebscrapeRequest>] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def scrape_web(body:, extra: {})
      webscrape_request = body
      api_response = scrape_web_with_http_info_impl(webscrape_request, extra)
      api_response.data
    end

    # Web Scrape
    #
    # Conduct a web scrape on a given webpage URL. Our web scraper is fully compatible with JavaScript and supports recursion depth, enabling you to efficiently extract all content from the target website.
    # 
    # <!--Args:
    #     scraping_requests (List[WebscrapeRequest]): A list of WebscrapeRequest objects.
    # 
    #     
    # Returns:
    #     dict: A response object with the status of the scraping job message.-->
    #
    # @param body [Array<WebscrapeRequest>] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def scrape_web_with_http_info(body:, extra: {})
      webscrape_request = body
      scrape_web_with_http_info_impl(webscrape_request, extra)
    end

    # Web Scrape
    # Conduct a web scrape on a given webpage URL. Our web scraper is fully compatible with JavaScript and supports recursion depth, enabling you to efficiently extract all content from the target website.  <!--Args:     scraping_requests (List[WebscrapeRequest]): A list of WebscrapeRequest objects.       Returns:     dict: A response object with the status of the scraping job message.-->
    # @param webscrape_request [Array<WebscrapeRequest>] 
    # @param [Hash] opts the optional parameters
    # @return [Object]
    private def scrape_web_impl(webscrape_request, opts = {})
      data, _status_code, _headers = scrape_web_with_http_info(webscrape_request, opts)
      data
    end

    # Web Scrape
    # Conduct a web scrape on a given webpage URL. Our web scraper is fully compatible with JavaScript and supports recursion depth, enabling you to efficiently extract all content from the target website.  &lt;!--Args:     scraping_requests (List[WebscrapeRequest]): A list of WebscrapeRequest objects.       Returns:     dict: A response object with the status of the scraping job message.--&gt;
    # @param webscrape_request [Array<WebscrapeRequest>] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is Object, status code, headers and response
    private def scrape_web_with_http_info_impl(webscrape_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UtilitiesApi.scrape_web ...'
      end
      # verify the required parameter 'webscrape_request' is set
      if @api_client.config.client_side_validation && webscrape_request.nil?
        fail ArgumentError, "Missing the required parameter 'webscrape_request' when calling UtilitiesApi.scrape_web"
      end
      # resource path
      local_var_path = '/web_scrape'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(webscrape_request)

      # return_type
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"UtilitiesApi.scrape_web",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UtilitiesApi#scrape_web\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Search Urls
    #
    # Perform a web search and obtain a list of relevant URLs.
    # 
    # As an illustration, when you perform a search for “content related to MRNA,” you will receive a list of links such as the following:
    # 
    #     - https://tomrenz.substack.com/p/mrna-and-why-it-matters
    # 
    #     - https://www.statnews.com/2020/11/10/the-story-of-mrna-how-a-once-dismissed-idea-became-a-leading-technology-in-the-covid-vaccine-race/
    # 
    #     - https://www.statnews.com/2022/11/16/covid-19-vaccines-were-a-success-but-mrna-still-has-a-delivery-problem/
    #     
    #     - https://joomi.substack.com/p/were-still-being-misled-about-how
    # 
    # Subsequently, you can submit these links to the web_scrape endpoint in order to retrieve the content of the respective web pages.
    # 
    # Args:
    #     query (str): Query to search for
    # 
    # Returns:
    #     FetchURLsResponse: A response object with a list of URLs for a given search query.
    #
    # @param query [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def search_urls(query:, extra: {})
      api_response = search_urls_with_http_info_impl(query, extra)
      api_response.data
    end

    # Search Urls
    #
    # Perform a web search and obtain a list of relevant URLs.
    # 
    # As an illustration, when you perform a search for “content related to MRNA,” you will receive a list of links such as the following:
    # 
    #     - https://tomrenz.substack.com/p/mrna-and-why-it-matters
    # 
    #     - https://www.statnews.com/2020/11/10/the-story-of-mrna-how-a-once-dismissed-idea-became-a-leading-technology-in-the-covid-vaccine-race/
    # 
    #     - https://www.statnews.com/2022/11/16/covid-19-vaccines-were-a-success-but-mrna-still-has-a-delivery-problem/
    #     
    #     - https://joomi.substack.com/p/were-still-being-misled-about-how
    # 
    # Subsequently, you can submit these links to the web_scrape endpoint in order to retrieve the content of the respective web pages.
    # 
    # Args:
    #     query (str): Query to search for
    # 
    # Returns:
    #     FetchURLsResponse: A response object with a list of URLs for a given search query.
    #
    # @param query [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def search_urls_with_http_info(query:, extra: {})
      search_urls_with_http_info_impl(query, extra)
    end

    # Search Urls
    # Perform a web search and obtain a list of relevant URLs.  As an illustration, when you perform a search for “content related to MRNA,” you will receive a list of links such as the following:      - https://tomrenz.substack.com/p/mrna-and-why-it-matters      - https://www.statnews.com/2020/11/10/the-story-of-mrna-how-a-once-dismissed-idea-became-a-leading-technology-in-the-covid-vaccine-race/      - https://www.statnews.com/2022/11/16/covid-19-vaccines-were-a-success-but-mrna-still-has-a-delivery-problem/          - https://joomi.substack.com/p/were-still-being-misled-about-how  Subsequently, you can submit these links to the web_scrape endpoint in order to retrieve the content of the respective web pages.  Args:     query (str): Query to search for  Returns:     FetchURLsResponse: A response object with a list of URLs for a given search query.
    # @param query [String] 
    # @param [Hash] opts the optional parameters
    # @return [FetchURLsResponse]
    private def search_urls_impl(query, opts = {})
      data, _status_code, _headers = search_urls_with_http_info(query, opts)
      data
    end

    # Search Urls
    # Perform a web search and obtain a list of relevant URLs.  As an illustration, when you perform a search for “content related to MRNA,” you will receive a list of links such as the following:      - https://tomrenz.substack.com/p/mrna-and-why-it-matters      - https://www.statnews.com/2020/11/10/the-story-of-mrna-how-a-once-dismissed-idea-became-a-leading-technology-in-the-covid-vaccine-race/      - https://www.statnews.com/2022/11/16/covid-19-vaccines-were-a-success-but-mrna-still-has-a-delivery-problem/          - https://joomi.substack.com/p/were-still-being-misled-about-how  Subsequently, you can submit these links to the web_scrape endpoint in order to retrieve the content of the respective web pages.  Args:     query (str): Query to search for  Returns:     FetchURLsResponse: A response object with a list of URLs for a given search query.
    # @param query [String] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is FetchURLsResponse, status code, headers and response
    private def search_urls_with_http_info_impl(query, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UtilitiesApi.search_urls ...'
      end
      # verify the required parameter 'query' is set
      if @api_client.config.client_side_validation && query.nil?
        fail ArgumentError, "Missing the required parameter 'query' when calling UtilitiesApi.search_urls"
      end
      # resource path
      local_var_path = '/search_urls'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'query'] = query

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'FetchURLsResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"UtilitiesApi.search_urls",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UtilitiesApi#search_urls\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Utilities = UtilitiesApi::new
end
