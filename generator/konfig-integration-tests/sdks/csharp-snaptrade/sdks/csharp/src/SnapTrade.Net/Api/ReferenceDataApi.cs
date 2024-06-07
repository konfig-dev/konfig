using SnapTrade.Net.Client;

namespace SnapTrade.Net.Api
{
    public partial class ReferenceDataApi : ReferenceDataApiGenerated {
        public ReferenceDataApi() : base() {}
        public ReferenceDataApi(string basePath): base(basePath) {}
        public ReferenceDataApi(SnapTrade.Net.Client.Configuration configuration): base(configuration) {}
        public ReferenceDataApi(SnapTrade.Net.Client.ISynchronousClient client, SnapTrade.Net.Client.IAsynchronousClient asyncClient, SnapTrade.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}