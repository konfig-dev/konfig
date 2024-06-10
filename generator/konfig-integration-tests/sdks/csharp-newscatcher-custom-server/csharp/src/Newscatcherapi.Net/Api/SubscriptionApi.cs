using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class SubscriptionApi : SubscriptionApiGenerated {
        public SubscriptionApi() : base() {}
        public SubscriptionApi(string basePath): base(basePath) {}
        public SubscriptionApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public SubscriptionApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}