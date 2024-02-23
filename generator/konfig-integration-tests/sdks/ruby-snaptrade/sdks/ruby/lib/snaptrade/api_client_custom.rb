
=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'base64'
require 'openssl'

module SnapTrade
  class ApiClientCustom
    def self.request_hook(request, configuration)
      request.params[:timestamp] = Time.now.to_i
      path = request.path[request.path.index('/api/v1/')..-1]
      query = Faraday::Utils.build_query(request.params)
      sig_object = {
        "content" => request.body.nil? || request.body.empty? ? nil : Hash[JSON.parse(request.body).sort],
        "path" => path,
        "query" => query
      }
      sig_content = JSON.generate(sig_object, sort_by: :to_s)
      sig_digest = OpenSSL::HMAC.digest(OpenSSL::Digest::SHA256.new, configuration.consumer_key, sig_content)
      signature = Base64.encode64(sig_digest).strip()
      request.headers[:Signature] = signature
    end
  end
end
