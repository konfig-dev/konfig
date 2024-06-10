using System;
using System.Reflection;
using System.Collections.Generic;
using Newscatcherapi.Net.Client;
using Newscatcherapi.Net.Model;
using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class SearchSimilarApi : SearchSimilarApiGenerated {
        public SearchSimilarApi() : base() {}
        public SearchSimilarApi(string basePath): base(basePath) {}
        public SearchSimilarApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public SearchSimilarApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    
        public List<Object> GetAll(Dictionary<string, object> parameters) {
            int pageSize = parameters.ContainsKey("pageSize") ? (int) parameters["pageSize"] : 100;

            Type type = this.GetType();
            MethodInfo method = type.GetMethod("Get");
            List<object> paramValues = SearchAllHelper.prepareParameters(parameters, method);

            try {
                SearchSimilarGetResponse rawResponse = (SearchSimilarGetResponse) method.Invoke(this, paramValues.ToArray());
                DtoResponsesMoreLikeThisResponseSearchResponse response = rawResponse.GetDtoResponsesMoreLikeThisResponseSearchResponse();
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        parameters["page"] = page;
                        SearchSimilarGetResponse rawRes = (SearchSimilarGetResponse) method.Invoke(this, paramValues.ToArray());
                        DtoResponsesMoreLikeThisResponseSearchResponse res = rawRes.GetDtoResponsesMoreLikeThisResponseSearchResponse();
                        response.Articles.AddRange(res.Articles);
                    }
                }
                return response.Articles;
            } catch (Exception e) {
                Console.WriteLine($"Exception when calling Search API: {e}");
                return null;
            }
        }

        public List<Object> PostAll(MoreLikeThisRequest request) {
            int pageSize = request.PageSize;
            try {
                SearchSimilarPostResponse rawResponse = this.Post(request);
                DtoResponsesMoreLikeThisResponseSearchResponse response = rawResponse.GetDtoResponsesMoreLikeThisResponseSearchResponse();
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        request.Page = page;
                        SearchSimilarPostResponse rawRes = this.Post(request);
                        DtoResponsesMoreLikeThisResponseSearchResponse res = rawRes.GetDtoResponsesMoreLikeThisResponseSearchResponse();
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