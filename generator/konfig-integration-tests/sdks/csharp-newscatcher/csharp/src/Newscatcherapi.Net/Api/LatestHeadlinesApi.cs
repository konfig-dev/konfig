using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class LatestHeadlinesApi : LatestHeadlinesApiGenerated {
        public LatestHeadlinesApi() : base() {}
        public LatestHeadlinesApi(string basePath): base(basePath) {}
        public LatestHeadlinesApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public LatestHeadlinesApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}