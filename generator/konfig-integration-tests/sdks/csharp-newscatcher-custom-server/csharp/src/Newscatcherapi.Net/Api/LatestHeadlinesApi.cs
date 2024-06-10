using System;
using System.Reflection;
using System.Collections.Generic;
using Newscatcherapi.Net.Client;
using Newscatcherapi.Net.Model;
using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class LatestHeadlinesApi : LatestHeadlinesApiGenerated {
        public LatestHeadlinesApi() : base() {}
        public LatestHeadlinesApi(string basePath): base(basePath) {}
        public LatestHeadlinesApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public LatestHeadlinesApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}

        public List<Object> GetAll(Dictionary<string, object> parameters) {
            int pageSize = parameters.ContainsKey("pageSize") ? (int) parameters["pageSize"] : 100;

            Type type = this.GetType();
            MethodInfo method = type.GetMethod("Get");
            List<object> paramValues = SearchAllHelper.prepareParameters(parameters, method);

            try {
                LatestHeadlinesGetResponse rawResponse = (LatestHeadlinesGetResponse) method.Invoke(this, paramValues.ToArray());
                LatestHeadlinesResponse response = rawResponse.GetLatestHeadlinesResponse();
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        parameters["page"] = page;
                        LatestHeadlinesGetResponse rawRes = (LatestHeadlinesGetResponse) method.Invoke(this, paramValues.ToArray());
                        LatestHeadlinesResponse res = rawRes.GetLatestHeadlinesResponse();
                        response.Articles.AddRange(res.Articles);
                    }
                }
                return response.Articles;
            } catch (Exception e) {
                Console.WriteLine($"Exception when calling Search API: {e}");
                return null;
            }
        }

        public List<Object> PostAll(LatestHeadlinesRequest request) {
            int pageSize = request.PageSize;
            try {
                LatestHeadlinesPostResponse rawResponse = this.Post(request);
                LatestHeadlinesResponse response = rawResponse.GetLatestHeadlinesResponse();
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        request.Page = page;
                        LatestHeadlinesPostResponse rawRes = this.Post(request);
                        LatestHeadlinesResponse res = rawRes.GetLatestHeadlinesResponse();
                        response.Articles.AddRange(res.Articles);
                    }
                }
                return response.Articles;
            } catch (Exception e) {
                Console.WriteLine($"Exception when calling Search API: {e}");
                return null;
            }
        }
    }
}