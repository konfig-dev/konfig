using SnapTrade.Net.Client;

namespace SnapTrade.Net.Api
{
    public partial class APIStatusApi : APIStatusApiGenerated {
        public APIStatusApi() : base() {}
        public APIStatusApi(string basePath): base(basePath) {}
        public APIStatusApi(SnapTrade.Net.Client.Configuration configuration): base(configuration) {}
        public APIStatusApi(SnapTrade.Net.Client.ISynchronousClient client, SnapTrade.Net.Client.IAsynchronousClient asyncClient, SnapTrade.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}