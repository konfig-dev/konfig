using SnapTrade.Net.Client;

namespace SnapTrade.Net.Api
{
    public partial class AuthenticationApi : AuthenticationApiGenerated {
        public AuthenticationApi() : base() {}
        public AuthenticationApi(string basePath): base(basePath) {}
        public AuthenticationApi(SnapTrade.Net.Client.Configuration configuration): base(configuration) {}
        public AuthenticationApi(SnapTrade.Net.Client.ISynchronousClient client, SnapTrade.Net.Client.IAsynchronousClient asyncClient, SnapTrade.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}