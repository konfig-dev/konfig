using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class SearchSimilarApi : SearchSimilarApiGenerated {
        public SearchSimilarApi() : base() {}
        public SearchSimilarApi(string basePath): base(basePath) {}
        public SearchSimilarApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public SearchSimilarApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}