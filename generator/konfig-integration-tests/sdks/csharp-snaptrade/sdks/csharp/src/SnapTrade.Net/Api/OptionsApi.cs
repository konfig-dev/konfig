using SnapTrade.Net.Client;

namespace SnapTrade.Net.Api
{
    public partial class OptionsApi : OptionsApiGenerated {
        public OptionsApi() : base() {}
        public OptionsApi(string basePath): base(basePath) {}
        public OptionsApi(SnapTrade.Net.Client.Configuration configuration): base(configuration) {}
        public OptionsApi(SnapTrade.Net.Client.ISynchronousClient client, SnapTrade.Net.Client.IAsynchronousClient asyncClient, SnapTrade.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}