require 'spec_helper'

# Unit tests for SnapTrade::APIStatusApi
describe 'Test' do
  before do
  end

  after do
  end

  describe 'Api Exception should contain response headers' do
    it 'instance pattern' do
      configuration = RubyApiExceptionContainsResponseHeaders::Configuration.new
      configuration.host = "http://127.0.0.1:4071"
      client = RubyApiExceptionContainsResponseHeaders::Client.new(configuration)

      begin
        client.test.fetch()
        expect(false).to eq(true)
      rescue RubyApiExceptionContainsResponseHeaders::ApiError => e
        expect(e.to_s).to include('Response headers:')
      end
    end

    it 'static pattern' do
      RubyApiExceptionContainsResponseHeaders.host = "http://127.0.0.1:4071"

      begin
        RubyApiExceptionContainsResponseHeaders::Test.fetch()
        expect(false).to eq(true)
      rescue RubyApiExceptionContainsResponseHeaders::ApiError => e
        expect(e.to_s).to include('Response headers:')
      end
    end
  end
end
