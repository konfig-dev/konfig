public class  SnapTradeClient {
    public var partnerClientId: String?;
    public var partnerSignature: String?;
    public var partnerTimestamp: String?;
    public var basePath: String
    public lazy var apiStatus: ApiStatusAPI = { return ApiStatusAPI(client: self) }()
    public lazy var accountInformation: AccountInformationAPI = { return AccountInformationAPI(client: self) }()
    public lazy var authentication: AuthenticationAPI = { return AuthenticationAPI(client: self) }()
    public lazy var connections: ConnectionsAPI = { return ConnectionsAPI(client: self) }()
    public lazy var errorLogs: ErrorLogsAPI = { return ErrorLogsAPI(client: self) }()
    public lazy var options: OptionsAPI = { return OptionsAPI(client: self) }()
    public lazy var referenceData: ReferenceDataAPI = { return ReferenceDataAPI(client: self) }()
    public lazy var trading: TradingAPI = { return TradingAPI(client: self) }()
    public lazy var transactionsAndReporting: TransactionsAndReportingAPI = { return TransactionsAndReportingAPI(client: self) }()

    public init(
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
