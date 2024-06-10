using System;
using System.Reflection;
using System.Collections.Generic;

namespace Newscatcherapi.Net.Api
{
    public class SearchAllHelper
    {
        public static List<object> prepareParameters(Dictionary<string, object> parameters, MethodInfo method)
        {
            ParameterInfo[] methodParams = method.GetParameters();
            List<object> result = new List<object>();

            foreach (ParameterInfo paramInfo in methodParams)
            {
                if (parameters.ContainsKey(paramInfo.Name))
                {
                    result.Add(parameters[paramInfo.Name]);
                }
                else
                {
                    if (paramInfo.HasDefaultValue)
                    {
                        result.Add(paramInfo.DefaultValue);
                    }
                    else
                    {
                        throw new ArgumentException($"Missing value for parameter '{paramInfo.Name}'");
                    }
                }
            }
            return result;
        }
    }
}