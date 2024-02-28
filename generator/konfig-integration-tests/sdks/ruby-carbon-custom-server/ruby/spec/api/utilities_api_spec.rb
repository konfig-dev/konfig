=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'

# Unit tests for Carbon::UtilitiesApi
describe 'UtilitiesApi' do
  before do
    # run before each test
    @api_instance = Carbon::UtilitiesApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of UtilitiesApi' do
    it 'should create an instance of UtilitiesApi' do
      expect(@api_instance).to be_instance_of(Carbon::UtilitiesApi)
    end
  end

  # unit tests for fetch_urls
  # Fetch Urls
  # Extracts all URLs from a webpage.   Args:     url (str): URL of the webpage  Returns:     FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.
  # @param url 
  # @param [Hash] opts the optional parameters
  # @return [FetchURLsResponse]
  describe 'fetch_urls test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for fetch_youtube_transcripts
  # Fetch Youtube Transcripts
  # Fetches english transcripts from YouTube videos.  Args:     id (str): The ID of the YouTube video.      raw (bool): Whether to return the raw transcript or not. Defaults to False.  Returns:     dict: A dictionary with the transcript of the YouTube video.
  # @param id 
  # @param [Hash] opts the optional parameters
  # @option opts [Boolean] :raw 
  # @return [YoutubeTranscriptResponse]
  describe 'fetch_youtube_transcripts test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for process_sitemap
  # Sitemap
  # Retrieves all URLs from a sitemap, which can subsequently be utilized with our &#x60;web_scrape&#x60; endpoint.  &lt;!--Args:     url (str): URL of the sitemap  Returns:     dict: A dictionary with a list of URLs extracted from the sitemap.--&gt;
  # @param url 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'process_sitemap test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for scrape_sitemap
  # Scrape Sitemap
  # Extracts all URLs from a sitemap and performs a web scrape on each of them.  Args:     sitemap_url (str): URL of the sitemap  Returns:     dict: A response object with the status of the scraping job message.--&gt;
  # @param sitemap_scrape_request 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'scrape_sitemap test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for scrape_web
  # Web Scrape
  # Conduct a web scrape on a given webpage URL. Our web scraper is fully compatible with JavaScript and supports recursion depth, enabling you to efficiently extract all content from the target website.  &lt;!--Args:     scraping_requests (List[WebscrapeRequest]): A list of WebscrapeRequest objects.       Returns:     dict: A response object with the status of the scraping job message.--&gt;
  # @param webscrape_request 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'scrape_web test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for search_urls
  # Search Urls
  # Perform a web search and obtain a list of relevant URLs.  As an illustration, when you perform a search for “content related to MRNA,” you will receive a list of links such as the following:      - https://tomrenz.substack.com/p/mrna-and-why-it-matters      - https://www.statnews.com/2020/11/10/the-story-of-mrna-how-a-once-dismissed-idea-became-a-leading-technology-in-the-covid-vaccine-race/      - https://www.statnews.com/2022/11/16/covid-19-vaccines-were-a-success-but-mrna-still-has-a-delivery-problem/          - https://joomi.substack.com/p/were-still-being-misled-about-how  Subsequently, you can submit these links to the web_scrape endpoint in order to retrieve the content of the respective web pages.  Args:     query (str): Query to search for  Returns:     FetchURLsResponse: A response object with a list of URLs for a given search query.
  # @param query 
  # @param [Hash] opts the optional parameters
  # @return [FetchURLsResponse]
  describe 'search_urls test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
