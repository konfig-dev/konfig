using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class AuthorsApi : AuthorsApiGenerated {
        public AuthorsApi() : base() {}
        public AuthorsApi(string basePath): base(basePath) {}
        public AuthorsApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public AuthorsApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}