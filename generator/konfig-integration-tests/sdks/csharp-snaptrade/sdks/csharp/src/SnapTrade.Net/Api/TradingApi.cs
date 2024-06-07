using SnapTrade.Net.Client;

namespace SnapTrade.Net.Api
{
    public partial class TradingApi : TradingApiGenerated {
        public TradingApi() : base() {}
        public TradingApi(string basePath): base(basePath) {}
        public TradingApi(SnapTrade.Net.Client.Configuration configuration): base(configuration) {}
        public TradingApi(SnapTrade.Net.Client.ISynchronousClient client, SnapTrade.Net.Client.IAsynchronousClient asyncClient, SnapTrade.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}