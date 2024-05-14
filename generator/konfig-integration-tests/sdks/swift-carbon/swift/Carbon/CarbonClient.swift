public class CarbonClient {
    public var accessToken: String?;
    public var apiKey: String?;
    public var customerId: String?;
    public var basePath: String
    public lazy var auth: AuthAPI = { return AuthAPI(client: self) }()
    public lazy var dataSources: DataSourcesAPI = { return DataSourcesAPI(client: self) }()
    public lazy var embeddings: EmbeddingsAPI = { return EmbeddingsAPI(client: self) }()
    public lazy var files: FilesAPI = { return FilesAPI(client: self) }()
    public lazy var health: HealthAPI = { return HealthAPI(client: self) }()
    public lazy var integrations: IntegrationsAPI = { return IntegrationsAPI(client: self) }()
    public lazy var organizations: OrganizationsAPI = { return OrganizationsAPI(client: self) }()
    public lazy var users: UsersAPI = { return UsersAPI(client: self) }()
    public lazy var utilities: UtilitiesAPI = { return UtilitiesAPI(client: self) }()
    public lazy var webhooks: WebhooksAPI = { return WebhooksAPI(client: self) }()

    public init(
        accessToken: String?,
        apiKey: String?,
        customerId: String?,
        basePath: String = "https://api.carbon.ai"
    ) {
        self.accessToken = accessToken
        self.apiKey = apiKey
        self.customerId = customerId
        self.basePath = basePath
    }

}
