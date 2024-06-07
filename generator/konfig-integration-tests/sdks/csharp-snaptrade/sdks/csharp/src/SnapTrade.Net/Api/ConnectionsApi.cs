using SnapTrade.Net.Client;

namespace SnapTrade.Net.Api
{
    public partial class ConnectionsApi : ConnectionsApiGenerated {
        public ConnectionsApi() : base() {}
        public ConnectionsApi(string basePath): base(basePath) {}
        public ConnectionsApi(SnapTrade.Net.Client.Configuration configuration): base(configuration) {}
        public ConnectionsApi(SnapTrade.Net.Client.ISynchronousClient client, SnapTrade.Net.Client.IAsynchronousClient asyncClient, SnapTrade.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}