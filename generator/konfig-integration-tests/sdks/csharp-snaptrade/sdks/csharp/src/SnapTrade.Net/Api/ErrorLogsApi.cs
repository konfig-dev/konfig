using SnapTrade.Net.Client;

namespace SnapTrade.Net.Api
{
    public partial class ErrorLogsApi : ErrorLogsApiGenerated {
        public ErrorLogsApi() : base() {}
        public ErrorLogsApi(string basePath): base(basePath) {}
        public ErrorLogsApi(SnapTrade.Net.Client.Configuration configuration): base(configuration) {}
        public ErrorLogsApi(SnapTrade.Net.Client.ISynchronousClient client, SnapTrade.Net.Client.IAsynchronousClient asyncClient, SnapTrade.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}