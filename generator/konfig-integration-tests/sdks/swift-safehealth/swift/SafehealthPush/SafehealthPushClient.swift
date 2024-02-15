public class SafehealthPushClient {
    public var identityAccessToken: String?;
    public var safeAccount: String?;
    public var safeTenant: String?;
    public var basePath: String
    public lazy var device: DeviceAPI = { return DeviceAPI(client: self) }()
    public lazy var userDevice: UserDeviceAPI = { return UserDeviceAPI(client: self) }()

    public init(
        identityAccessToken: String?,
        safeAccount: String?,
        safeTenant: String?,
        basePath: String = "https://api.dev-1.sf.safecdx.io/v1beta/notification-push"
    ) {
        self.identityAccessToken = identityAccessToken
        self.safeAccount = safeAccount
        self.safeTenant = safeTenant
        self.basePath = basePath
    }

}
