=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'forwardable'

# Common files
require 'snaptrade/api_client'
require 'snaptrade/api_error'
require 'snaptrade/version'
require 'snaptrade/configuration'

# Models
require 'snaptrade/models/account'
require 'snaptrade/models/account_balance'
require 'snaptrade/models/account_balance_total'
require 'snaptrade/models/account_holdings'
require 'snaptrade/models/account_holdings_account'
require 'snaptrade/models/account_order_record'
require 'snaptrade/models/account_order_record_status'
require 'snaptrade/models/account_simple'
require 'snaptrade/models/account_sync_status'
require 'snaptrade/models/action'
require 'snaptrade/models/amount'
require 'snaptrade/models/auth_type'
require 'snaptrade/models/authentication_login_snap_trade_user200_response'
require 'snaptrade/models/balance'
require 'snaptrade/models/brokerage'
require 'snaptrade/models/brokerage_authorization'
require 'snaptrade/models/brokerage_authorization_type'
require 'snaptrade/models/brokerage_authorization_type_read_only'
require 'snaptrade/models/brokerage_authorization_type_read_only_brokerage'
require 'snaptrade/models/brokerage_authorization_type_read_only_type'
require 'snaptrade/models/brokerage_authorization_type_type'
require 'snaptrade/models/brokerage_symbol'
require 'snaptrade/models/brokerage_symbol_option_symbol'
require 'snaptrade/models/brokerage_symbol_symbol'
require 'snaptrade/models/brokerage_type'
require 'snaptrade/models/calculated_trade'
require 'snaptrade/models/cash_restriction'
require 'snaptrade/models/connection_portal_version'
require 'snaptrade/models/connection_type'
require 'snaptrade/models/connections_session_events200_response_inner'
require 'snaptrade/models/currency'
require 'snaptrade/models/delete_user_response'
require 'snaptrade/models/dividend_at_date'
require 'snaptrade/models/encrypted_response'
require 'snaptrade/models/encrypted_response_encrypted_message_data'
require 'snaptrade/models/exchange'
require 'snaptrade/models/exchange_rate_pairs'
require 'snaptrade/models/excluded_asset'
require 'snaptrade/models/jwt'
require 'snaptrade/models/login_redirect_uri'
require 'snaptrade/models/manual_trade'
require 'snaptrade/models/manual_trade_and_impact'
require 'snaptrade/models/manual_trade_balance'
require 'snaptrade/models/manual_trade_form'
require 'snaptrade/models/manual_trade_symbol'
require 'snaptrade/models/model400_failed_request_response'
require 'snaptrade/models/model401_failed_request_response'
require 'snaptrade/models/model403_failed_request_response'
require 'snaptrade/models/model404_failed_request_response'
require 'snaptrade/models/model500_unexpected_exception_response'
require 'snaptrade/models/model_asset_class'
require 'snaptrade/models/model_asset_class_details'
require 'snaptrade/models/model_asset_class_target'
require 'snaptrade/models/model_portfolio'
require 'snaptrade/models/model_portfolio_asset_class'
require 'snaptrade/models/model_portfolio_details'
require 'snaptrade/models/model_portfolio_security'
require 'snaptrade/models/model_type'
require 'snaptrade/models/monthly_dividends'
require 'snaptrade/models/net_contributions'
require 'snaptrade/models/net_dividend'
require 'snaptrade/models/option_chain_inner'
require 'snaptrade/models/option_chain_inner_chain_per_root_inner'
require 'snaptrade/models/option_chain_inner_chain_per_root_inner_chain_per_strike_price_inner'
require 'snaptrade/models/option_leg'
require 'snaptrade/models/option_leg_action'
require 'snaptrade/models/option_strategy'
require 'snaptrade/models/option_strategy_legs_inner'
require 'snaptrade/models/option_type'
require 'snaptrade/models/options_get_option_strategy_request'
require 'snaptrade/models/options_holdings'
require 'snaptrade/models/options_place_option_strategy_request'
require 'snaptrade/models/options_position'
require 'snaptrade/models/options_position_currency'
require 'snaptrade/models/options_symbol'
require 'snaptrade/models/order_type'
require 'snaptrade/models/partner_data'
require 'snaptrade/models/past_value'
require 'snaptrade/models/performance_custom'
require 'snaptrade/models/portfolio_group'
require 'snaptrade/models/portfolio_group_info'
require 'snaptrade/models/portfolio_group_position'
require 'snaptrade/models/portfolio_group_settings'
require 'snaptrade/models/position'
require 'snaptrade/models/position_symbol'
require 'snaptrade/models/redirect_tokenand_pin'
require 'snaptrade/models/security_type'
require 'snaptrade/models/session_event'
require 'snaptrade/models/session_event_type'
require 'snaptrade/models/snap_trade_api_disclaimer_accept_status'
require 'snaptrade/models/snap_trade_holdings_account'
require 'snaptrade/models/snap_trade_holdings_account_account_id'
require 'snaptrade/models/snap_trade_holdings_total_value'
require 'snaptrade/models/snap_trade_login_user_request_body'
require 'snaptrade/models/snap_trade_register_user_request_body'
require 'snaptrade/models/state'
require 'snaptrade/models/status'
require 'snaptrade/models/strategy_impact'
require 'snaptrade/models/strategy_impact_legs_inner'
require 'snaptrade/models/strategy_order_place'
require 'snaptrade/models/strategy_order_place_orders_inner'
require 'snaptrade/models/strategy_order_place_orders_inner_legs_inner'
require 'snaptrade/models/strategy_order_record'
require 'snaptrade/models/strategy_order_record_status'
require 'snaptrade/models/strategy_quotes'
require 'snaptrade/models/strategy_quotes_greek'
require 'snaptrade/models/strategy_type'
require 'snaptrade/models/sub_period_return_rate'
require 'snaptrade/models/symbol'
require 'snaptrade/models/symbol_query'
require 'snaptrade/models/symbols_quotes_inner'
require 'snaptrade/models/target_asset'
require 'snaptrade/models/time_in_force_strict'
require 'snaptrade/models/trade'
require 'snaptrade/models/trade_action'
require 'snaptrade/models/trade_execution_status'
require 'snaptrade/models/trade_execution_status_action'
require 'snaptrade/models/trade_impact'
require 'snaptrade/models/trading_cancel_user_account_order_request'
require 'snaptrade/models/trading_place_oco_order_request'
require 'snaptrade/models/transactions_status'
require 'snaptrade/models/type'
require 'snaptrade/models/us_exchange'
require 'snaptrade/models/underlying_symbol'
require 'snaptrade/models/universal_activity'
require 'snaptrade/models/universal_symbol'
require 'snaptrade/models/user_error_log'
require 'snaptrade/models/user_i_dand_secret'
require 'snaptrade/models/user_settings'

# APIs
require 'snaptrade/api/account_information_api'
require 'snaptrade/api/api_status_api'
require 'snaptrade/api/authentication_api'
require 'snaptrade/api/connections_api'
require 'snaptrade/api/error_logs_api'
require 'snaptrade/api/options_api'
require 'snaptrade/api/reference_data_api'
require 'snaptrade/api/trading_api'
require 'snaptrade/api/transactions_and_reporting_api'

module SnapTrade
  @config = Configuration.default
  SENTINEL = Object.new
  class << self
    extend Forwardable

    def is_sentinel(value)
      value == SENTINEL
    end

    def_delegators :@config, :host, :host=
    def_delegators :@config, :client_id, :client_id= # api key
    def_delegators :@config, :signature, :signature= # api key
    def_delegators :@config, :timestamp, :timestamp= # api key
    def_delegators :@config, :consumer_key, :consumer_key= # client state from konfig.yaml

    # Customize default settings for the SDK using block.
    #   SnapTrade.configure do |config|
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
    attr_accessor :account_information
    attr_accessor :api_status
    attr_accessor :authentication
    attr_accessor :connections
    attr_accessor :error_logs
    attr_accessor :options
    attr_accessor :reference_data
    attr_accessor :trading
    attr_accessor :transactions_and_reporting

    def initialize(config = Configuration.default)
      @api_client = ApiClient::new(config)
      @account_information = SnapTrade::AccountInformationApi.new(@api_client)
      @api_status = SnapTrade::APIStatusApi.new(@api_client)
      @authentication = SnapTrade::AuthenticationApi.new(@api_client)
      @connections = SnapTrade::ConnectionsApi.new(@api_client)
      @error_logs = SnapTrade::ErrorLogsApi.new(@api_client)
      @options = SnapTrade::OptionsApi.new(@api_client)
      @reference_data = SnapTrade::ReferenceDataApi.new(@api_client)
      @trading = SnapTrade::TradingApi.new(@api_client)
      @transactions_and_reporting = SnapTrade::TransactionsAndReportingApi.new(@api_client)
    end
  end
end
