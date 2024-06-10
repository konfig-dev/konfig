using System;
using System.Reflection;
using System.Collections.Generic;
using Newscatcherapi.Net.Client;
using Newscatcherapi.Net.Model;
using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class SearchLinkApi : SearchLinkApiGenerated {
        public SearchLinkApi() : base() {}
        public SearchLinkApi(string basePath): base(basePath) {}
        public SearchLinkApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public SearchLinkApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    
        public List<Object> GetAll(Dictionary<string, object> parameters = null) {
            parameters = parameters ?? new Dictionary<string, object>();
            int pageSize = parameters.ContainsKey("pageSize") ? (int) parameters["pageSize"] : 100;

            Type type = this.GetType();
            MethodInfo method = type.GetMethod("Get");
            List<object> paramValues = SearchAllHelper.prepareParameters(parameters, method);

            try {
                DtoResponsesSearchResponseSearchResponse response = (DtoResponsesSearchResponseSearchResponse) method.Invoke(this, paramValues.ToArray());
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        parameters["page"] = page;
                        DtoResponsesSearchResponseSearchResponse res = (DtoResponsesSearchResponseSearchResponse) method.Invoke(this, paramValues.ToArray());
                        response.Articles.AddRange(res.Articles);
                    }
                }
                return response.Articles;
            } catch (Exception e) {
                Console.WriteLine($"Exception when calling Search API: {e}");
                return null;
            }
        }

        public List<Object> PostAll(SearchURLRequest request) {
            int pageSize = request.PageSize;
            try {
                DtoResponsesSearchResponseSearchResponse response = this.Post(request);
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        request.Page = page;
                        DtoResponsesSearchResponseSearchResponse res = this.Post(request);
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