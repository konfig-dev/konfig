=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Carbon::RankProperty
describe Carbon::RankProperty do
  let(:instance) { Carbon::RankProperty.new }

  describe 'test an instance of RankProperty' do
    it 'should create an instance of RankProperty' do
      expect(instance).to be_instance_of(Carbon::RankProperty)
    end
  end
end
