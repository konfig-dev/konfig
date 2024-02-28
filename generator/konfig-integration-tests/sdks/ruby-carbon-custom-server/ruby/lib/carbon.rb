=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'forwardable'

# Common files
require 'carbon/api_client'
require 'carbon/api_error'
require 'carbon/version'
require 'carbon/configuration'

# Models
require 'carbon/models/add_webhook_props'
require 'carbon/models/body_create_upload_file_uploadfile_post'
require 'carbon/models/chunk_properties'
require 'carbon/models/chunk_properties_nullable'
require 'carbon/models/chunks_and_embeddings'
require 'carbon/models/chunks_and_embeddings_upload_input'
require 'carbon/models/data_source_last_sync_actions'
require 'carbon/models/data_source_sync_statuses'
require 'carbon/models/data_source_type'
require 'carbon/models/data_source_type_nullable'
require 'carbon/models/delete_files_query_input'
require 'carbon/models/directory_item'
require 'carbon/models/document_response'
require 'carbon/models/document_response_list'
require 'carbon/models/embedding_and_chunk'
require 'carbon/models/embedding_generators'
require 'carbon/models/embedding_generators_nullable'
require 'carbon/models/embedding_properties'
require 'carbon/models/embeddings_and_chunks_filters'
require 'carbon/models/embeddings_and_chunks_order_by_columns'
require 'carbon/models/embeddings_and_chunks_query_input'
require 'carbon/models/embeddings_and_chunks_response'
require 'carbon/models/external_file_sync_statuses'
require 'carbon/models/external_source_item'
require 'carbon/models/fetch_urls_response'
require 'carbon/models/file_content_types'
require 'carbon/models/file_content_types_nullable'
require 'carbon/models/file_formats'
require 'carbon/models/file_formats_nullable'
require 'carbon/models/file_statistics'
require 'carbon/models/file_statistics_nullable'
require 'carbon/models/fresh_desk_connect_request'
require 'carbon/models/generic_success_response'
require 'carbon/models/get_embedding_documents_body'
require 'carbon/models/gitbook_connect_request'
require 'carbon/models/gitbook_sync_request'
require 'carbon/models/gmail_sync_input'
require 'carbon/models/http_validation_error'
require 'carbon/models/hybrid_search_tuning_params'
require 'carbon/models/hybrid_search_tuning_params_nullable'
require 'carbon/models/list_data_source_items_request'
require 'carbon/models/list_data_source_items_response'
require 'carbon/models/list_request'
require 'carbon/models/list_response'
require 'carbon/models/location_property_inner'
require 'carbon/models/modify_user_configuration_input'
require 'carbon/models/o_auth_url_request'
require 'carbon/models/order_dir'
require 'carbon/models/organization_response'
require 'carbon/models/organization_user_data_source_api'
require 'carbon/models/organization_user_data_source_filters'
require 'carbon/models/organization_user_data_source_order_by_columns'
require 'carbon/models/organization_user_data_source_query_input'
require 'carbon/models/organization_user_data_source_response'
require 'carbon/models/organization_user_file_tag_create'
require 'carbon/models/organization_user_file_tags_remove'
require 'carbon/models/organization_user_files_to_sync_filters'
require 'carbon/models/organization_user_files_to_sync_order_by_types'
require 'carbon/models/organization_user_files_to_sync_query_input'
require 'carbon/models/outlook_sync_input'
require 'carbon/models/pagination'
require 'carbon/models/presigned_url_response'
require 'carbon/models/rss_feed_input'
require 'carbon/models/rank_property'
require 'carbon/models/raw_text_input'
require 'carbon/models/raw_transcript_property_inner_value'
require 'carbon/models/resync_file_query_input'
require 'carbon/models/revoke_access_token_input'
require 'carbon/models/s3_auth_request'
require 'carbon/models/s3_file_sync_input'
require 'carbon/models/s3_get_file_input'
require 'carbon/models/single_chunks_and_embeddings_upload_input'
require 'carbon/models/sitemap_scrape_request'
require 'carbon/models/source_property'
require 'carbon/models/sync_directory_request'
require 'carbon/models/sync_files_request'
require 'carbon/models/tags'
require 'carbon/models/tags1'
require 'carbon/models/text_embedding_generators'
require 'carbon/models/token_response'
require 'carbon/models/upload_file_from_url_input'
require 'carbon/models/user_file'
require 'carbon/models/user_files_v2'
require 'carbon/models/user_request_content'
require 'carbon/models/user_response'
require 'carbon/models/validation_error'
require 'carbon/models/webhook'
require 'carbon/models/webhook_filters'
require 'carbon/models/webhook_no_key'
require 'carbon/models/webhook_order_by_columns'
require 'carbon/models/webhook_query_input'
require 'carbon/models/webhook_query_response'
require 'carbon/models/webscrape_request'
require 'carbon/models/white_labeling_response'
require 'carbon/models/youtube_transcript_response'

# APIs
require 'carbon/api/auth_api'
require 'carbon/api/data_sources_api'
require 'carbon/api/embeddings_api'
require 'carbon/api/files_api'
require 'carbon/api/health_api'
require 'carbon/api/integrations_api'
require 'carbon/api/organizations_api'
require 'carbon/api/users_api'
require 'carbon/api/utilities_api'
require 'carbon/api/webhooks_api'

module Carbon
  @config = Configuration.default
  SENTINEL = Object.new
  class << self

    private def is_sentinel(value)
      value == SENTINEL
    end

    def host
      @config.host
    end

    def host=(value)
      @config.host = value
    end
    # api key from OpenAPI spec
    def access_token
      @config.access_token
    end

    def access_token=(value)
      @config.access_token = value
    end
    # api key from OpenAPI spec
    def api_key
      @config.api_key
    end

    def api_key=(value)
      @config.api_key = value
    end
    # api key from OpenAPI spec
    def customer_id
      @config.customer_id
    end

    def customer_id=(value)
      @config.customer_id = value
    end

    # Customize default settings for the SDK using block.
    #   Carbon.configure do |config|
    #     config.host = "http://example.com"
    #   end
    # If no block given, return the default Configuration object.
    def configure
      if block_given?
        yield(Configuration.default)
      else
        Configuration.default
      end
    end
  end

  class Client
    attr_reader :auth
    attr_reader :data_sources
    attr_reader :embeddings
    attr_reader :files
    attr_reader :health
    attr_reader :integrations
    attr_reader :organizations
    attr_reader :users
    attr_reader :utilities
    attr_reader :webhooks

    def initialize(config = Configuration.default)
      @api_client = ApiClient::new(config)
      @auth = Carbon::AuthApi.new(@api_client)
      @data_sources = Carbon::DataSourcesApi.new(@api_client)
      @embeddings = Carbon::EmbeddingsApi.new(@api_client)
      @files = Carbon::FilesApi.new(@api_client)
      @health = Carbon::HealthApi.new(@api_client)
      @integrations = Carbon::IntegrationsApi.new(@api_client)
      @organizations = Carbon::OrganizationsApi.new(@api_client)
      @users = Carbon::UsersApi.new(@api_client)
      @utilities = Carbon::UtilitiesApi.new(@api_client)
      @webhooks = Carbon::WebhooksApi.new(@api_client)
    end
  end
end
