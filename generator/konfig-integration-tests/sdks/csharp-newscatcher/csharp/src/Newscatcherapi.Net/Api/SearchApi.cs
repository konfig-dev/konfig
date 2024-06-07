using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class SearchApi : SearchApiGenerated {
        public SearchApi() : base() {}
        public SearchApi(string basePath): base(basePath) {}
        public SearchApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public SearchApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}