public class  SnapTradeClient {
    var partnerClientId: String?;
    var partnerSignature: String?;
    var partnerTimestamp: String?;
    var basePath: String
    lazy var apiStatus: ApiStatusAPI = { return ApiStatusAPI(client: self) }()
    lazy var accountInformation: AccountInformationAPI = { return AccountInformationAPI(client: self) }()
    lazy var authentication: AuthenticationAPI = { return AuthenticationAPI(client: self) }()
    lazy var connections: ConnectionsAPI = { return ConnectionsAPI(client: self) }()
    lazy var errorLogs: ErrorLogsAPI = { return ErrorLogsAPI(client: self) }()
    lazy var options: OptionsAPI = { return OptionsAPI(client: self) }()
    lazy var referenceData: ReferenceDataAPI = { return ReferenceDataAPI(client: self) }()
    lazy var trading: TradingAPI = { return TradingAPI(client: self) }()
    lazy var transactionsAndReporting: TransactionsAndReportingAPI = { return TransactionsAndReportingAPI(client: self) }()

    init(
        partnerClientId: String?,
        partnerSignature: String?,
        partnerTimestamp: String?,
        basePath: String = "https://api.snaptrade.com/api/v1"
    ) {
        self.partnerClientId = partnerClientId
        self.partnerSignature = partnerSignature
        self.partnerTimestamp = partnerTimestamp
        self.basePath = basePath
    }

}
