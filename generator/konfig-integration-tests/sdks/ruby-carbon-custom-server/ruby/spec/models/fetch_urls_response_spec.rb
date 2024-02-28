=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::FetchURLsResponse
describe Carbon::FetchURLsResponse do
  let(:instance) { Carbon::FetchURLsResponse.new }

  describe 'test an instance of FetchURLsResponse' do
    it 'should create an instance of FetchURLsResponse' do
      expect(instance).to be_instance_of(Carbon::FetchURLsResponse)
    end
  end
  describe 'test attribute "urls"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "html_content"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
