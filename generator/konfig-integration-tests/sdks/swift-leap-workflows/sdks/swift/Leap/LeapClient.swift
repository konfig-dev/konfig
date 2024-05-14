public class LeapClient {
    public var apiKey: String?;
    public var basePath: String
    public lazy var bulkWorkflowRuns: BulkWorkflowRunsAPI = { return BulkWorkflowRunsAPI(client: self) }()
    public lazy var workflowRuns: WorkflowRunsAPI = { return WorkflowRunsAPI(client: self) }()

    public init(
        apiKey: String?,
        basePath: String = "https://api.workflows.tryleap.ai"
    ) {
        self.apiKey = apiKey
        self.basePath = basePath
    }

}
