using System;
using System.Reflection;
using System.Collections.Generic;
using Newscatcherapi.Net.Client;
using Newscatcherapi.Net.Model;
using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class SearchApi : SearchApiGenerated {
        public SearchApi() : base() {}
        public SearchApi(string basePath): base(basePath) {}
        public SearchApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public SearchApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    
        public List<Object> GetAll(Dictionary<string, object> parameters) {
            int pageSize = parameters.ContainsKey("pageSize") ? (int) parameters["pageSize"] : 100;

            Type type = this.GetType();
            MethodInfo method = type.GetMethod("Get");
            List<object> paramValues = SearchAllHelper.prepareParameters(parameters, method);

            try {
                SearchGetResponse rawResponse = (SearchGetResponse) method.Invoke(this, paramValues.ToArray());
                DtoResponsesSearchResponseSearchResponse response = rawResponse.GetDtoResponsesSearchResponseSearchResponse();
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        parameters["page"] = page;
                        SearchGetResponse rawRes = (SearchGetResponse) method.Invoke(this, paramValues.ToArray());
                        DtoResponsesSearchResponseSearchResponse res = rawRes.GetDtoResponsesSearchResponseSearchResponse();
                        response.Articles.AddRange(res.Articles);
                    }
                }
                return response.Articles;
            } catch (Exception e) {
                Console.WriteLine($"Exception when calling Search API: {e}");
                return null;
            }
        }

        public List<Object> PostAll(SearchRequest request) {
            int pageSize = request.PageSize;
            try {
                SearchPostResponse rawResponse = this.Post(request);
                DtoResponsesSearchResponseSearchResponse response = rawResponse.GetDtoResponsesSearchResponseSearchResponse();
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        request.Page = page;
                        SearchPostResponse rawRes = this.Post(request);
                        DtoResponsesSearchResponseSearchResponse res = rawRes.GetDtoResponsesSearchResponseSearchResponse();
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