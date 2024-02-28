require 'spec_helper'
require 'json'
require 'securerandom'
require 'debug'

describe 'GettingStarted' do
  before do
    Carbon.access_token = "YOUR API KEY"
    Carbon.api_key = "YOUR API KEY"
    Carbon.customer_id = "YOUR API KEY"
    Carbon.host = "http://127.0.0.1:4073"
  end

  after do
  end

  it 'getting started' do
    # 1) Get an access token for a customer
    configuration = Carbon::Configuration.new
    configuration.api_key = "YOUR_API_KEY"
    configuration.customer_id = "YOUR_CUSTOMER_ID"
    configuration.host = "http://127.0.0.1:4073"
    carbon = Carbon::Client.new(configuration)

    token = carbon.auth.get_access_token

    # 2) Use the access token to authenticate moving forward
    configuration = Carbon::Configuration.new
    configuration.access_token = token.access_token
    configuration.host = "http://127.0.0.1:4073"
    carbon = Carbon::Client.new(configuration)

    # use SDK as usual
    white_labeling = carbon.auth.get_white_labeling
  end

  it 'Utilities.scrape_web' do
    result = Carbon::Utilities.scrape_web(
      body: [
            {
                "url" => "url_example",
                "recursion_depth" => 3,
                "max_pages_to_scrape" => 100,
                "chunk_size" => 1500,
                "chunk_overlap" => 20,
                "skip_embedding_generation" => false,
                "enable_auto_sync" => false,
                "generate_sparse_vectors" => false,
                "prepend_filename_to_chunks" => false,
                "html_tags_to_skip" => [],
                "css_classes_to_skip" => [],
                "css_selectors_to_skip" => [],
                "embedding_model" => "OPENAI",
            }
        ],
    )
    expect(result).to_not be_nil
  end

  it 'data_sources.query_user_data_sources' do
    configuration = Carbon::Configuration.new
    configuration.access_token = 'YOUR API KEY'
    configuration.api_key = 'YOUR API KEY'
    configuration.customer_id = 'YOUR API KEY'
    configuration.host = 'http://127.0.0.1:4073'
    carbon = Carbon::Client.new(configuration)
    pagination = {
        "limit" => 10,
        "offset" => 0,
    }
    order_by = "created_at"
    order_dir = "desc"
    filters = {
            "source" => "GOOGLE_DRIVE",
        }
    result = carbon.data_sources.query_user_data_sources(
      pagination: pagination,
      order_by: order_by,
      order_dir: order_dir,
      filters: filters,
    )
    p result
  end

  it 'data_sources.query_user_data_sources static pattern' do
      result = Carbon::DataSources.query_user_data_sources(
        pagination: {
          "limit" => 10,
          "offset" => 0,
        },
        order_by: "created_at",
        order_dir: "desc",
        filters: {
          "source" => "GOOGLE_DRIVE",
        },
      )

      # assert result is not nil
      expect(result).to_not be_nil
  end

  it 'integrations.sync_gitbook' do
    result = Carbon::Integrations.sync_gitbook_with_http_info(
      space_ids: [
            "string_example"
        ],
      data_source_id: 1,
      tags: {},
      chunk_size: 1500,
      chunk_overlap: 20,
      skip_embedding_generation: false,
      embedding_model: "OPENAI",
      generate_sparse_vectors: false,
      prepend_filename_to_chunks: false,
    )
    expect(result).to_not be_nil
    expect(result.data).to_not be_nil
    expect(result.status_code).to eq(200)
    expect(result.headers).to_not be_nil
    expect(result.response).to_not be_nil
  end

  it 'embedding.get_documents' do
    configuration = Carbon::Configuration.new
    configuration.access_token = 'YOUR API KEY'
    configuration.api_key = 'YOUR API KEY'
    configuration.customer_id = 'YOUR API KEY'
    configuration.host = 'http://127.0.0.1:4073'
    carbon = Carbon::Client.new(configuration)
    result = carbon.embeddings.get_documents(
      query: "a",
      k: 1,
      tags: {
            "key": "string_example",
        },
      query_vector: [
            3.14
        ],
      file_ids: [
            1
        ],
      parent_file_ids: [
            1
        ],
      tags_v2: {
        },
      include_tags: true,
      include_vectors: true,
      include_raw_file: true,
      hybrid_search: true,
      hybrid_search_tuning_parameters: {
            "weight_a" => 0.5,
            "weight_b" => 0.5,
        },
      media_type: "TEXT",
      embedding_model: "OPENAI",
    )
    expect(result).to_not be_nil
  end

  it 'Webhooks.urls' do
    result = Carbon::Webhooks.urls(
      pagination: {
            "limit" => 10,
            "offset" => 0,
        },
      order_by: "created_at",
      order_dir: "desc",
      filters: {
            "ids" => [],
        },
    )
    expect(result).to_not be_nil
  end

  it 'Embeddings.upload_chunks_and_embeddings' do
    result = Carbon::Embeddings.upload_chunks_and_embeddings(
      embedding_model: "OPENAI",
      chunks_and_embeddings: [
            {
                "file_id" => 1,
                "chunks_and_embeddings" => [
                    {
                        "chunk_number" => 1,
                        "chunk" => "chunk_example",
                        "embedding" => [
                            3.14
                        ],
                    }
                ],
            }
        ],
      overwrite_existing: false,
    )
    expect(result).to_not be_nil
  end

  it 'files.upload' do
    # read from directory of this file ../README.md to file
    file = File.open(File.join(File.dirname(__FILE__), "../README.md"), "rb")

    result = Carbon::Files.upload(
      file: file,
      chunk_size: 1,
      chunk_overlap: 1,
      skip_embedding_generation: false,
      set_page_as_boundary: false,
      embedding_model: "OPENAI",
      use_ocr: false,
      generate_sparse_vectors: false,
      prepend_filename_to_chunks: false,
      max_items_per_chunk: 1,
    )
    expect(result).to_not be_nil
  end
end
