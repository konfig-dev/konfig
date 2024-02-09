public class SnapTradeClient {
    var partnerClientId: String?
    var partnerSignature: String?
    var partnerTimestamp: String?
    var basePath: String
    lazy var authentication: AuthenticationAPI = { return AuthenticationAPI(client: self) }()

    init(partnerClientId: String?, partnerSignature: String?, partnerTimestamp: String?, basePath: String = "https://api.snaptrade.com/api/v1") {
        self.partnerClientId = partnerClientId
        self.partnerSignature = partnerSignature
        self.partnerTimestamp = partnerTimestamp
        self.basePath = basePath
    }

}
