using System;
using System.Reflection;
using System.Collections.Generic;
using Newscatcherapi.Net.Client;
using Newscatcherapi.Net.Model;
using Newscatcherapi.Net.Client;

namespace Newscatcherapi.Net.Api
{
    public partial class AuthorsApi : AuthorsApiGenerated {
        public AuthorsApi() : base() {}
        public AuthorsApi(string basePath): base(basePath) {}
        public AuthorsApi(Newscatcherapi.Net.Client.Configuration configuration): base(configuration) {}
        public AuthorsApi(Newscatcherapi.Net.Client.ISynchronousClient client, Newscatcherapi.Net.Client.IAsynchronousClient asyncClient, Newscatcherapi.Net.Client.IReadableConfiguration configuration): base(client, asyncClient, configuration) {}
    
        public List<Object> GetAll(Dictionary<string, object> parameters) {
            int pageSize = parameters.ContainsKey("pageSize") ? (int) parameters["pageSize"] : 100;

            Type type = this.GetType();
            MethodInfo method = type.GetMethod("Get");
            List<object> paramValues = SearchAllHelper.prepareParameters(parameters, method);

            try {
                AuthorsGetResponse rawResponse = (AuthorsGetResponse) method.Invoke(this, paramValues.ToArray());
                DtoResponsesAuthorSearchResponseSearchResponse response = rawResponse.GetDtoResponsesAuthorSearchResponseSearchResponse();
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        parameters["page"] = page;
                        AuthorsGetResponse rawRes = (AuthorsGetResponse) method.Invoke(this, paramValues.ToArray());
                        DtoResponsesAuthorSearchResponseSearchResponse res = rawRes.GetDtoResponsesAuthorSearchResponseSearchResponse();
                        response.Articles.AddRange(res.Articles);
                    }
                }
                return response.Articles;
            } catch (Exception e) {
                Console.WriteLine($"Exception when calling Search API: {e}");
                return null;
            }
        }

        public List<Object> PostAll(AuthorSearchRequest request) {
            int pageSize = request.PageSize;
            try {
                AuthorsPostResponse rawResponse = this.Post(request);
                DtoResponsesAuthorSearchResponseSearchResponse response = rawResponse.GetDtoResponsesAuthorSearchResponseSearchResponse();
                if (response.TotalHits > pageSize)
                {
                    for (int page = 2; page <= response.TotalPages; page++)
                    {
                        request.Page = page;
                        AuthorsPostResponse rawRes = this.Post(request);
                        DtoResponsesAuthorSearchResponseSearchResponse res = rawRes.GetDtoResponsesAuthorSearchResponseSearchResponse();
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