using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class SourcesApi : SourcesApiGenerated {
        public SourcesApi() : base() {}
        public SourcesApi(string basePath): base(basePath) {}
        public SourcesApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public SourcesApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}