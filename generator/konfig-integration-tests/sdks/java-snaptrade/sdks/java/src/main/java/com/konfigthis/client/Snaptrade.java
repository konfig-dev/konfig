package com.konfigthis.client;

import com.konfigthis.client.api.AccountInformationApi;
import com.konfigthis.client.api.ApiStatusApi;
import com.konfigthis.client.api.AuthenticationApi;
import com.konfigthis.client.api.ConnectionsApi;
import com.konfigthis.client.api.ErrorLogsApi;
import com.konfigthis.client.api.OptionsApi;
import com.konfigthis.client.api.ReferenceDataApi;
import com.konfigthis.client.api.TradingApi;
import com.konfigthis.client.api.TransactionsAndReportingApi;

public class Snaptrade {
    private ApiClient apiClient;
    public final AccountInformationApi accountInformation;
    public final ApiStatusApi apiStatus;
    public final AuthenticationApi authentication;
    public final ConnectionsApi connections;
    public final ErrorLogsApi errorLogs;
    public final OptionsApi options;
    public final ReferenceDataApi referenceData;
    public final TradingApi trading;
    public final TransactionsAndReportingApi transactionsAndReporting;

    public Snaptrade() {
        this(null);
    }

    public Snaptrade(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.accountInformation = new AccountInformationApi(this.apiClient);
        this.apiStatus = new ApiStatusApi(this.apiClient);
        this.authentication = new AuthenticationApi(this.apiClient);
        this.connections = new ConnectionsApi(this.apiClient);
        this.errorLogs = new ErrorLogsApi(this.apiClient);
        this.options = new OptionsApi(this.apiClient);
        this.referenceData = new ReferenceDataApi(this.apiClient);
        this.trading = new TradingApi(this.apiClient);
        this.transactionsAndReporting = new TransactionsAndReportingApi(this.apiClient);
    }

}
