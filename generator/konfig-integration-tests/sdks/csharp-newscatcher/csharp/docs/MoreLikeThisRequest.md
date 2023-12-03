# Newscatcherapi.Net.Model.MoreLikeThisRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Q** | **string** |  | 
**SearchIn** | **string** |  | [optional] [default to "title_content"]
**IncludeSimilarDocuments** | **bool** |  | [optional] [default to false]
**SimilarDocumentsNumber** | **int** |  | [optional] [default to 5]
**SimilarDocumentsFields** | **string** |  | [optional] [default to "title,content"]
**PredefinedSources** | **string** |  | [optional] 
**Sources** | **string** |  | [optional] 
**NotSources** | **string** |  | [optional] 
**Lang** | **string** |  | [optional] 
**NotLang** | **string** |  | [optional] 
**Countries** | **string** |  | [optional] 
**NotCountries** | **string** |  | [optional] 
**From** | [**From**](From.md) |  | [optional] 
**To** | [**To**](To.md) |  | [optional] 
**ByParseDate** | **bool** |  | [optional] [default to false]
**PublishedDatePrecision** | **string** |  | [optional] 
**SortBy** | **string** |  | [optional] [default to "relevancy"]
**RankedOnly** | **string** |  | [optional] 
**FromRank** | **int** |  | [optional] 
**ToRank** | **int** |  | [optional] 
**IsHeadline** | **bool** |  | [optional] 
**IsPaidContent** | **bool** |  | [optional] 
**ParentUrl** | **string** |  | [optional] 
**AllLinks** | **string** |  | [optional] 
**AllDomainLinks** | **string** |  | [optional] 
**WordCountMin** | **int** |  | [optional] 
**WordCountMax** | **int** |  | [optional] 
**Page** | **int** |  | [optional] [default to 1]
**PageSize** | **int** |  | [optional] [default to 100]
**IncludeNlpData** | **bool** |  | [optional] 
**HasNlp** | **bool** |  | [optional] 
**Theme** | **string** |  | [optional] 
**NerName** | **string** |  | [optional] 
**TitleSentimentMin** | **double** |  | [optional] 
**TitleSentimentMax** | **double** |  | [optional] 
**ContentSentimentMin** | **double** |  | [optional] 
**ContentSentimentMax** | **double** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

