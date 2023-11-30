using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using RestSharp;
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace SnapTrade.Net.Client
{

    public partial class ApiClient
    {

        partial void InterceptRequest(RestRequest request)
        {
            string timestamp = DateTimeOffset.Now.ToUnixTimeSeconds().ToString();
            request.AddQueryParameter("timestamp", timestamp);
            string consumerKey = System.Web.HttpUtility.UrlEncode(this._configuration.ConsumerKey);

            // Find request body
            Parameter requestBody = null;
            System.Collections.Generic.IEnumerator<Parameter> enumerator = request.Parameters.GetEnumerator();
            foreach (Parameter parameter in request.Parameters)
            {
                if (parameter.Type == ParameterType.RequestBody)
                {
                    requestBody = parameter;
                }
            }
            string query = string.Join("&", request.Parameters
                .Where(p => p.Type == ParameterType.QueryString)
                .Select(p => $"{p.Name}={Uri.EscapeDataString((string)p.Value)}"));
            var resourceUrl = request.Resource;
            foreach (var parameter in request.Parameters.Where(p => p.Type == ParameterType.UrlSegment))
            {
                resourceUrl = resourceUrl.Replace("{" + parameter.Name + "}", parameter.Value.ToString());
            }
            string path = "/api/v1" + resourceUrl;

            var json = new
            {
                content = requestBody == null ? null : requestBody.Value,
                query = query,
                path = path
            };

            string signatureContent = SerializeObjectWithSortedKeys(json);
            string signature = ComputeHmac(this._configuration.ConsumerKey, signatureContent);
            request.AddHeader("Signature", signature);
        }

        /// <summary>
        /// Provides a default implementation of an Api client (both synchronous and asynchronous implementations),
        /// encapsulating general REST accessor use cases.
        /// </summary>
        public static string SerializeObjectWithSortedKeys(object obj)
        {
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new SortedKeysContractResolver()
            };

            return JsonConvert.SerializeObject(obj, Formatting.None, settings);
        }

        /// <summary>
        /// Compute HMAC signature of a string
        /// </summary>
        public static string ComputeHmac(string key, string message)
        {
            var encoding = new UTF8Encoding();
            var keyBytes = encoding.GetBytes(key);
            var messageBytes = encoding.GetBytes(message);

            using (var hmac = new HMACSHA256(keyBytes))
            {
                var hash = hmac.ComputeHash(messageBytes);
                return Convert.ToBase64String(hash);
            }
        }

        /// <summary>
        /// Implements sorting of properties in Json
        /// </summary>
        public class SortedKeysContractResolver : DefaultContractResolver
        {
            /// <summary>
            /// Override CreateProperties
            /// </summary>
            protected override System.Collections.Generic.IList<JsonProperty> CreateProperties(System.Type type, Newtonsoft.Json.MemberSerialization memberSerialization)
            {
                return base.CreateProperties(type, memberSerialization)
                    .OrderBy(p => p.PropertyName)
                    .ToList();
            }
        }
    }

}
