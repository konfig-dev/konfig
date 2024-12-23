/*
NewsCatcher-V3 Production API

Testing LatestHeadlinesApiService

*/

// Code generated by Konfig (https://konfigthis.com);

package newscatcherapi

import (
    "testing"
    // "github.com/stretchr/testify/assert"
    // "github.com/stretchr/testify/require"
    // newscatcherapi "github.com/konfig-dev/newscatcher-go-sdk/go"
)

func Test_newscatcherapi_LatestHeadlinesApiService(t *testing.T) {

    // configuration := newscatcherapi.NewConfiguration()
    // configuration.SetHost("http://127.0.0.1:4010")
    /* 
    configuration.SetApiKey("X_API_TOKEN")
    client := newscatcherapi.NewAPIClient(configuration)
    */

    t.Run("Test LatestHeadlinesApiService Get", func(t *testing.T) {
        /* TODO: ENG-1367 Fix parameter values for Go SDK generated tests
        request := client.LatestHeadlinesApi.Get(
        )
        request.When(""7d"")
        request.ByParseDate(false)
        request.Lang("lang_example")
        request.NotLang("notLang_example")
        request.Countries("countries_example")
        request.NotCountries("notCountries_example")
        request.Sources("sources_example")
        request.PredefinedSources("predefinedSources_example")
        request.NotSources("notSources_example")
        request.RankedOnly("rankedOnly_example")
        request.IsHeadline(true)
        request.IsPaidContent(true)
        request.ParentUrl("parentUrl_example")
        request.Theme("theme_example")
        request.AllLinks("allLinks_example")
        request.AllDomainLinks("allDomainLinks_example")
        request.WordCountMin(56)
        request.WordCountMax(56)
        request.Page(1)
        request.PageSize(100)
        request.ClusteringEnabled(true)
        request.ClusteringThreshold(8.14)
        request.ClusteringVariable("clusteringVariable_example")
        request.IncludeNlpData(true)
        request.HasNlp(true)
        request.ORGEntityName("oRGEntityName_example")
        request.PEREntityName("pEREntityName_example")
        request.LOCEntityName("lOCEntityName_example")
        request.MISCEntityName("mISCEntityName_example")
        request.TitleSentimentMin(8.14)
        request.TitleSentimentMax(8.14)
        request.ContentSentimentMin(8.14)
        request.ContentSentimentMax(8.14)
        
        resp, httpRes, err := request.Execute()

        require.Nil(t, err)
        require.NotNil(t, resp)
        assert.Equal(t, 200, httpRes.StatusCode)
        */
    })

    t.Run("Test LatestHeadlinesApiService Post", func(t *testing.T) {
        /* TODO: ENG-1367 Fix parameter values for Go SDK generated tests
        
        latestHeadlinesRequest := *newscatcherapi.NewLatestHeadlinesRequest()
        latestHeadlinesRequest.SetWhen("7d")
        latestHeadlinesRequest.SetByParseDate(false)
        latestHeadlinesRequest.SetLang("null")
        latestHeadlinesRequest.SetNotLang("null")
        latestHeadlinesRequest.SetCountries("null")
        latestHeadlinesRequest.SetNotCountries("null")
        latestHeadlinesRequest.SetSources("null")
        latestHeadlinesRequest.SetPredefinedSources("null")
        latestHeadlinesRequest.SetNotSources("null")
        latestHeadlinesRequest.SetRankedOnly("null")
        latestHeadlinesRequest.SetIsHeadline(null)
        latestHeadlinesRequest.SetIsPaidContent(null)
        latestHeadlinesRequest.SetParentUrl("null")
        latestHeadlinesRequest.SetTheme("null")
        latestHeadlinesRequest.SetAllLinks("null")
        latestHeadlinesRequest.SetAllDomainLinks("null")
        latestHeadlinesRequest.SetWordCountMin(null)
        latestHeadlinesRequest.SetWordCountMax(null)
        latestHeadlinesRequest.SetPage(1)
        latestHeadlinesRequest.SetPageSize(100)
        latestHeadlinesRequest.SetClusteringEnabled(null)
        latestHeadlinesRequest.SetClusteringThreshold(null)
        latestHeadlinesRequest.SetClusteringVariable("null")
        latestHeadlinesRequest.SetIncludeNlpData(null)
        latestHeadlinesRequest.SetHasNlp(null)
        latestHeadlinesRequest.SetORGEntityName("null")
        latestHeadlinesRequest.SetPEREntityName("null")
        latestHeadlinesRequest.SetLOCEntityName("null")
        latestHeadlinesRequest.SetMISCEntityName("null")
        latestHeadlinesRequest.SetTitleSentimentMin(null)
        latestHeadlinesRequest.SetTitleSentimentMax(null)
        latestHeadlinesRequest.SetContentSentimentMin(null)
        latestHeadlinesRequest.SetContentSentimentMax(null)
        
        request := client.LatestHeadlinesApi.Post(
            latestHeadlinesRequest,
        )
        
        resp, httpRes, err := request.Execute()

        require.Nil(t, err)
        require.NotNil(t, resp)
        assert.Equal(t, 200, httpRes.StatusCode)
        */
    })

}