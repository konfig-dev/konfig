using SnapTrade.Net.Client;

namespace SnapTrade.Net.Api
{
    public partial class AccountInformationApi : AccountInformationApiGenerated {
        public AccountInformationApi() : base() {}
        public AccountInformationApi(string basePath): base(basePath) {}
        public AccountInformationApi(SnapTrade.Net.Client.Configuration configuration): base(configuration) {}
        public AccountInformationApi(SnapTrade.Net.Client.ISynchronousClient client, SnapTrade.Net.Client.IAsynchronousClient asyncClient, SnapTrade.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}