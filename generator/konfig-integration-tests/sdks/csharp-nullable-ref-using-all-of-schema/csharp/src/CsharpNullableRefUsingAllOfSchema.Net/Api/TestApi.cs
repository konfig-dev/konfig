using CsharpNullableRefUsingAllOfSchema.Net.Client;

namespace CsharpNullableRefUsingAllOfSchema.Net.Api
{
    public partial class TestApi : TestApiGenerated {
        public TestApi() : base() {}
        public TestApi(string basePath): base(basePath) {}
        public TestApi(CsharpNullableRefUsingAllOfSchema.Net.Client.Configuration configuration): base(configuration) {}
        public TestApi(CsharpNullableRefUsingAllOfSchema.Net.Client.ISynchronousClient client, CsharpNullableRefUsingAllOfSchema.Net.Client.IAsynchronousClient asyncClient, CsharpNullableRefUsingAllOfSchema.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    }
}