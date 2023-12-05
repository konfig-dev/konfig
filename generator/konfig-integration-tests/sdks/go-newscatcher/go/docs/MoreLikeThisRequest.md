# MoreLikeThisRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Q** | **string** |  | 
**SearchIn** | Pointer to **string** |  | [optional] [default to "title_content"]
**IncludeSimilarDocuments** | Pointer to **bool** |  | [optional] [default to false]
**SimilarDocumentsNumber** | Pointer to **int32** |  | [optional] [default to 5]
**SimilarDocumentsFields** | Pointer to **string** |  | [optional] [default to "title,content"]
**PredefinedSources** | Pointer to **string** |  | [optional] 
**Sources** | Pointer to **string** |  | [optional] 
**NotSources** | Pointer to **string** |  | [optional] 
**Lang** | Pointer to **string** |  | [optional] 
**NotLang** | Pointer to **string** |  | [optional] 
**Countries** | Pointer to **string** |  | [optional] 
**NotCountries** | Pointer to **string** |  | [optional] 
**From** | Pointer to [**From**](From.md) |  | [optional] 
**To** | Pointer to [**To**](To.md) |  | [optional] 
**ByParseDate** | Pointer to **bool** |  | [optional] [default to false]
**PublishedDatePrecision** | Pointer to **string** |  | [optional] 
**SortBy** | Pointer to **string** |  | [optional] [default to "relevancy"]
**RankedOnly** | Pointer to **string** |  | [optional] 
**FromRank** | Pointer to **int32** |  | [optional] 
**ToRank** | Pointer to **int32** |  | [optional] 
**IsHeadline** | Pointer to **bool** |  | [optional] 
**IsPaidContent** | Pointer to **bool** |  | [optional] 
**ParentUrl** | Pointer to **string** |  | [optional] 
**AllLinks** | Pointer to **string** |  | [optional] 
**AllDomainLinks** | Pointer to **string** |  | [optional] 
**WordCountMin** | Pointer to **int32** |  | [optional] 
**WordCountMax** | Pointer to **int32** |  | [optional] 
**Page** | Pointer to **int32** |  | [optional] [default to 1]
**PageSize** | Pointer to **int32** |  | [optional] [default to 100]
**IncludeNlpData** | Pointer to **bool** |  | [optional] 
**HasNlp** | Pointer to **bool** |  | [optional] 
**Theme** | Pointer to **string** |  | [optional] 
**NerName** | Pointer to **string** |  | [optional] 
**TitleSentimentMin** | Pointer to **float32** |  | [optional] 
**TitleSentimentMax** | Pointer to **float32** |  | [optional] 
**ContentSentimentMin** | Pointer to **float32** |  | [optional] 
**ContentSentimentMax** | Pointer to **float32** |  | [optional] 

## Methods

### NewMoreLikeThisRequest

`func NewMoreLikeThisRequest(q string, ) *MoreLikeThisRequest`

NewMoreLikeThisRequest instantiates a new MoreLikeThisRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMoreLikeThisRequestWithDefaults

`func NewMoreLikeThisRequestWithDefaults() *MoreLikeThisRequest`

NewMoreLikeThisRequestWithDefaults instantiates a new MoreLikeThisRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQ

`func (o *MoreLikeThisRequest) GetQ() string`

GetQ returns the Q field if non-nil, zero value otherwise.

### GetQOk

`func (o *MoreLikeThisRequest) GetQOk() (*string, bool)`

GetQOk returns a tuple with the Q field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQ

`func (o *MoreLikeThisRequest) SetQ(v string)`

SetQ sets Q field to given value.


### GetSearchIn

`func (o *MoreLikeThisRequest) GetSearchIn() string`

GetSearchIn returns the SearchIn field if non-nil, zero value otherwise.

### GetSearchInOk

`func (o *MoreLikeThisRequest) GetSearchInOk() (*string, bool)`

GetSearchInOk returns a tuple with the SearchIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchIn

`func (o *MoreLikeThisRequest) SetSearchIn(v string)`

SetSearchIn sets SearchIn field to given value.

### HasSearchIn

`func (o *MoreLikeThisRequest) HasSearchIn() bool`

HasSearchIn returns a boolean if a field has been set.

### GetIncludeSimilarDocuments

`func (o *MoreLikeThisRequest) GetIncludeSimilarDocuments() bool`

GetIncludeSimilarDocuments returns the IncludeSimilarDocuments field if non-nil, zero value otherwise.

### GetIncludeSimilarDocumentsOk

`func (o *MoreLikeThisRequest) GetIncludeSimilarDocumentsOk() (*bool, bool)`

GetIncludeSimilarDocumentsOk returns a tuple with the IncludeSimilarDocuments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeSimilarDocuments

`func (o *MoreLikeThisRequest) SetIncludeSimilarDocuments(v bool)`

SetIncludeSimilarDocuments sets IncludeSimilarDocuments field to given value.

### HasIncludeSimilarDocuments

`func (o *MoreLikeThisRequest) HasIncludeSimilarDocuments() bool`

HasIncludeSimilarDocuments returns a boolean if a field has been set.

### GetSimilarDocumentsNumber

`func (o *MoreLikeThisRequest) GetSimilarDocumentsNumber() int32`

GetSimilarDocumentsNumber returns the SimilarDocumentsNumber field if non-nil, zero value otherwise.

### GetSimilarDocumentsNumberOk

`func (o *MoreLikeThisRequest) GetSimilarDocumentsNumberOk() (*int32, bool)`

GetSimilarDocumentsNumberOk returns a tuple with the SimilarDocumentsNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimilarDocumentsNumber

`func (o *MoreLikeThisRequest) SetSimilarDocumentsNumber(v int32)`

SetSimilarDocumentsNumber sets SimilarDocumentsNumber field to given value.

### HasSimilarDocumentsNumber

`func (o *MoreLikeThisRequest) HasSimilarDocumentsNumber() bool`

HasSimilarDocumentsNumber returns a boolean if a field has been set.

### GetSimilarDocumentsFields

`func (o *MoreLikeThisRequest) GetSimilarDocumentsFields() string`

GetSimilarDocumentsFields returns the SimilarDocumentsFields field if non-nil, zero value otherwise.

### GetSimilarDocumentsFieldsOk

`func (o *MoreLikeThisRequest) GetSimilarDocumentsFieldsOk() (*string, bool)`

GetSimilarDocumentsFieldsOk returns a tuple with the SimilarDocumentsFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimilarDocumentsFields

`func (o *MoreLikeThisRequest) SetSimilarDocumentsFields(v string)`

SetSimilarDocumentsFields sets SimilarDocumentsFields field to given value.

### HasSimilarDocumentsFields

`func (o *MoreLikeThisRequest) HasSimilarDocumentsFields() bool`

HasSimilarDocumentsFields returns a boolean if a field has been set.

### GetPredefinedSources

`func (o *MoreLikeThisRequest) GetPredefinedSources() string`

GetPredefinedSources returns the PredefinedSources field if non-nil, zero value otherwise.

### GetPredefinedSourcesOk

`func (o *MoreLikeThisRequest) GetPredefinedSourcesOk() (*string, bool)`

GetPredefinedSourcesOk returns a tuple with the PredefinedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredefinedSources

`func (o *MoreLikeThisRequest) SetPredefinedSources(v string)`

SetPredefinedSources sets PredefinedSources field to given value.

### HasPredefinedSources

`func (o *MoreLikeThisRequest) HasPredefinedSources() bool`

HasPredefinedSources returns a boolean if a field has been set.

### GetSources

`func (o *MoreLikeThisRequest) GetSources() string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *MoreLikeThisRequest) GetSourcesOk() (*string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *MoreLikeThisRequest) SetSources(v string)`

SetSources sets Sources field to given value.

### HasSources

`func (o *MoreLikeThisRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetNotSources

`func (o *MoreLikeThisRequest) GetNotSources() string`

GetNotSources returns the NotSources field if non-nil, zero value otherwise.

### GetNotSourcesOk

`func (o *MoreLikeThisRequest) GetNotSourcesOk() (*string, bool)`

GetNotSourcesOk returns a tuple with the NotSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotSources

`func (o *MoreLikeThisRequest) SetNotSources(v string)`

SetNotSources sets NotSources field to given value.

### HasNotSources

`func (o *MoreLikeThisRequest) HasNotSources() bool`

HasNotSources returns a boolean if a field has been set.

### GetLang

`func (o *MoreLikeThisRequest) GetLang() string`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *MoreLikeThisRequest) GetLangOk() (*string, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *MoreLikeThisRequest) SetLang(v string)`

SetLang sets Lang field to given value.

### HasLang

`func (o *MoreLikeThisRequest) HasLang() bool`

HasLang returns a boolean if a field has been set.

### GetNotLang

`func (o *MoreLikeThisRequest) GetNotLang() string`

GetNotLang returns the NotLang field if non-nil, zero value otherwise.

### GetNotLangOk

`func (o *MoreLikeThisRequest) GetNotLangOk() (*string, bool)`

GetNotLangOk returns a tuple with the NotLang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotLang

`func (o *MoreLikeThisRequest) SetNotLang(v string)`

SetNotLang sets NotLang field to given value.

### HasNotLang

`func (o *MoreLikeThisRequest) HasNotLang() bool`

HasNotLang returns a boolean if a field has been set.

### GetCountries

`func (o *MoreLikeThisRequest) GetCountries() string`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *MoreLikeThisRequest) GetCountriesOk() (*string, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *MoreLikeThisRequest) SetCountries(v string)`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *MoreLikeThisRequest) HasCountries() bool`

HasCountries returns a boolean if a field has been set.

### GetNotCountries

`func (o *MoreLikeThisRequest) GetNotCountries() string`

GetNotCountries returns the NotCountries field if non-nil, zero value otherwise.

### GetNotCountriesOk

`func (o *MoreLikeThisRequest) GetNotCountriesOk() (*string, bool)`

GetNotCountriesOk returns a tuple with the NotCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotCountries

`func (o *MoreLikeThisRequest) SetNotCountries(v string)`

SetNotCountries sets NotCountries field to given value.

### HasNotCountries

`func (o *MoreLikeThisRequest) HasNotCountries() bool`

HasNotCountries returns a boolean if a field has been set.

### GetFrom

`func (o *MoreLikeThisRequest) GetFrom() From`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *MoreLikeThisRequest) GetFromOk() (*From, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *MoreLikeThisRequest) SetFrom(v From)`

SetFrom sets From field to given value.

### HasFrom

`func (o *MoreLikeThisRequest) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetTo

`func (o *MoreLikeThisRequest) GetTo() To`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *MoreLikeThisRequest) GetToOk() (*To, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *MoreLikeThisRequest) SetTo(v To)`

SetTo sets To field to given value.

### HasTo

`func (o *MoreLikeThisRequest) HasTo() bool`

HasTo returns a boolean if a field has been set.

### GetByParseDate

`func (o *MoreLikeThisRequest) GetByParseDate() bool`

GetByParseDate returns the ByParseDate field if non-nil, zero value otherwise.

### GetByParseDateOk

`func (o *MoreLikeThisRequest) GetByParseDateOk() (*bool, bool)`

GetByParseDateOk returns a tuple with the ByParseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetByParseDate

`func (o *MoreLikeThisRequest) SetByParseDate(v bool)`

SetByParseDate sets ByParseDate field to given value.

### HasByParseDate

`func (o *MoreLikeThisRequest) HasByParseDate() bool`

HasByParseDate returns a boolean if a field has been set.

### GetPublishedDatePrecision

`func (o *MoreLikeThisRequest) GetPublishedDatePrecision() string`

GetPublishedDatePrecision returns the PublishedDatePrecision field if non-nil, zero value otherwise.

### GetPublishedDatePrecisionOk

`func (o *MoreLikeThisRequest) GetPublishedDatePrecisionOk() (*string, bool)`

GetPublishedDatePrecisionOk returns a tuple with the PublishedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDatePrecision

`func (o *MoreLikeThisRequest) SetPublishedDatePrecision(v string)`

SetPublishedDatePrecision sets PublishedDatePrecision field to given value.

### HasPublishedDatePrecision

`func (o *MoreLikeThisRequest) HasPublishedDatePrecision() bool`

HasPublishedDatePrecision returns a boolean if a field has been set.

### GetSortBy

`func (o *MoreLikeThisRequest) GetSortBy() string`

GetSortBy returns the SortBy field if non-nil, zero value otherwise.

### GetSortByOk

`func (o *MoreLikeThisRequest) GetSortByOk() (*string, bool)`

GetSortByOk returns a tuple with the SortBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortBy

`func (o *MoreLikeThisRequest) SetSortBy(v string)`

SetSortBy sets SortBy field to given value.

### HasSortBy

`func (o *MoreLikeThisRequest) HasSortBy() bool`

HasSortBy returns a boolean if a field has been set.

### GetRankedOnly

`func (o *MoreLikeThisRequest) GetRankedOnly() string`

GetRankedOnly returns the RankedOnly field if non-nil, zero value otherwise.

### GetRankedOnlyOk

`func (o *MoreLikeThisRequest) GetRankedOnlyOk() (*string, bool)`

GetRankedOnlyOk returns a tuple with the RankedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRankedOnly

`func (o *MoreLikeThisRequest) SetRankedOnly(v string)`

SetRankedOnly sets RankedOnly field to given value.

### HasRankedOnly

`func (o *MoreLikeThisRequest) HasRankedOnly() bool`

HasRankedOnly returns a boolean if a field has been set.

### GetFromRank

`func (o *MoreLikeThisRequest) GetFromRank() int32`

GetFromRank returns the FromRank field if non-nil, zero value otherwise.

### GetFromRankOk

`func (o *MoreLikeThisRequest) GetFromRankOk() (*int32, bool)`

GetFromRankOk returns a tuple with the FromRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRank

`func (o *MoreLikeThisRequest) SetFromRank(v int32)`

SetFromRank sets FromRank field to given value.

### HasFromRank

`func (o *MoreLikeThisRequest) HasFromRank() bool`

HasFromRank returns a boolean if a field has been set.

### GetToRank

`func (o *MoreLikeThisRequest) GetToRank() int32`

GetToRank returns the ToRank field if non-nil, zero value otherwise.

### GetToRankOk

`func (o *MoreLikeThisRequest) GetToRankOk() (*int32, bool)`

GetToRankOk returns a tuple with the ToRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRank

`func (o *MoreLikeThisRequest) SetToRank(v int32)`

SetToRank sets ToRank field to given value.

### HasToRank

`func (o *MoreLikeThisRequest) HasToRank() bool`

HasToRank returns a boolean if a field has been set.

### GetIsHeadline

`func (o *MoreLikeThisRequest) GetIsHeadline() bool`

GetIsHeadline returns the IsHeadline field if non-nil, zero value otherwise.

### GetIsHeadlineOk

`func (o *MoreLikeThisRequest) GetIsHeadlineOk() (*bool, bool)`

GetIsHeadlineOk returns a tuple with the IsHeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHeadline

`func (o *MoreLikeThisRequest) SetIsHeadline(v bool)`

SetIsHeadline sets IsHeadline field to given value.

### HasIsHeadline

`func (o *MoreLikeThisRequest) HasIsHeadline() bool`

HasIsHeadline returns a boolean if a field has been set.

### GetIsPaidContent

`func (o *MoreLikeThisRequest) GetIsPaidContent() bool`

GetIsPaidContent returns the IsPaidContent field if non-nil, zero value otherwise.

### GetIsPaidContentOk

`func (o *MoreLikeThisRequest) GetIsPaidContentOk() (*bool, bool)`

GetIsPaidContentOk returns a tuple with the IsPaidContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPaidContent

`func (o *MoreLikeThisRequest) SetIsPaidContent(v bool)`

SetIsPaidContent sets IsPaidContent field to given value.

### HasIsPaidContent

`func (o *MoreLikeThisRequest) HasIsPaidContent() bool`

HasIsPaidContent returns a boolean if a field has been set.

### GetParentUrl

`func (o *MoreLikeThisRequest) GetParentUrl() string`

GetParentUrl returns the ParentUrl field if non-nil, zero value otherwise.

### GetParentUrlOk

`func (o *MoreLikeThisRequest) GetParentUrlOk() (*string, bool)`

GetParentUrlOk returns a tuple with the ParentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentUrl

`func (o *MoreLikeThisRequest) SetParentUrl(v string)`

SetParentUrl sets ParentUrl field to given value.

### HasParentUrl

`func (o *MoreLikeThisRequest) HasParentUrl() bool`

HasParentUrl returns a boolean if a field has been set.

### GetAllLinks

`func (o *MoreLikeThisRequest) GetAllLinks() string`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *MoreLikeThisRequest) GetAllLinksOk() (*string, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *MoreLikeThisRequest) SetAllLinks(v string)`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *MoreLikeThisRequest) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### GetAllDomainLinks

`func (o *MoreLikeThisRequest) GetAllDomainLinks() string`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *MoreLikeThisRequest) GetAllDomainLinksOk() (*string, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *MoreLikeThisRequest) SetAllDomainLinks(v string)`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *MoreLikeThisRequest) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### GetWordCountMin

`func (o *MoreLikeThisRequest) GetWordCountMin() int32`

GetWordCountMin returns the WordCountMin field if non-nil, zero value otherwise.

### GetWordCountMinOk

`func (o *MoreLikeThisRequest) GetWordCountMinOk() (*int32, bool)`

GetWordCountMinOk returns a tuple with the WordCountMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCountMin

`func (o *MoreLikeThisRequest) SetWordCountMin(v int32)`

SetWordCountMin sets WordCountMin field to given value.

### HasWordCountMin

`func (o *MoreLikeThisRequest) HasWordCountMin() bool`

HasWordCountMin returns a boolean if a field has been set.

### GetWordCountMax

`func (o *MoreLikeThisRequest) GetWordCountMax() int32`

GetWordCountMax returns the WordCountMax field if non-nil, zero value otherwise.

### GetWordCountMaxOk

`func (o *MoreLikeThisRequest) GetWordCountMaxOk() (*int32, bool)`

GetWordCountMaxOk returns a tuple with the WordCountMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCountMax

`func (o *MoreLikeThisRequest) SetWordCountMax(v int32)`

SetWordCountMax sets WordCountMax field to given value.

### HasWordCountMax

`func (o *MoreLikeThisRequest) HasWordCountMax() bool`

HasWordCountMax returns a boolean if a field has been set.

### GetPage

`func (o *MoreLikeThisRequest) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *MoreLikeThisRequest) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *MoreLikeThisRequest) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *MoreLikeThisRequest) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetPageSize

`func (o *MoreLikeThisRequest) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *MoreLikeThisRequest) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *MoreLikeThisRequest) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *MoreLikeThisRequest) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetIncludeNlpData

`func (o *MoreLikeThisRequest) GetIncludeNlpData() bool`

GetIncludeNlpData returns the IncludeNlpData field if non-nil, zero value otherwise.

### GetIncludeNlpDataOk

`func (o *MoreLikeThisRequest) GetIncludeNlpDataOk() (*bool, bool)`

GetIncludeNlpDataOk returns a tuple with the IncludeNlpData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNlpData

`func (o *MoreLikeThisRequest) SetIncludeNlpData(v bool)`

SetIncludeNlpData sets IncludeNlpData field to given value.

### HasIncludeNlpData

`func (o *MoreLikeThisRequest) HasIncludeNlpData() bool`

HasIncludeNlpData returns a boolean if a field has been set.

### GetHasNlp

`func (o *MoreLikeThisRequest) GetHasNlp() bool`

GetHasNlp returns the HasNlp field if non-nil, zero value otherwise.

### GetHasNlpOk

`func (o *MoreLikeThisRequest) GetHasNlpOk() (*bool, bool)`

GetHasNlpOk returns a tuple with the HasNlp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNlp

`func (o *MoreLikeThisRequest) SetHasNlp(v bool)`

SetHasNlp sets HasNlp field to given value.

### HasHasNlp

`func (o *MoreLikeThisRequest) HasHasNlp() bool`

HasHasNlp returns a boolean if a field has been set.

### GetTheme

`func (o *MoreLikeThisRequest) GetTheme() string`

GetTheme returns the Theme field if non-nil, zero value otherwise.

### GetThemeOk

`func (o *MoreLikeThisRequest) GetThemeOk() (*string, bool)`

GetThemeOk returns a tuple with the Theme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTheme

`func (o *MoreLikeThisRequest) SetTheme(v string)`

SetTheme sets Theme field to given value.

### HasTheme

`func (o *MoreLikeThisRequest) HasTheme() bool`

HasTheme returns a boolean if a field has been set.

### GetNerName

`func (o *MoreLikeThisRequest) GetNerName() string`

GetNerName returns the NerName field if non-nil, zero value otherwise.

### GetNerNameOk

`func (o *MoreLikeThisRequest) GetNerNameOk() (*string, bool)`

GetNerNameOk returns a tuple with the NerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNerName

`func (o *MoreLikeThisRequest) SetNerName(v string)`

SetNerName sets NerName field to given value.

### HasNerName

`func (o *MoreLikeThisRequest) HasNerName() bool`

HasNerName returns a boolean if a field has been set.

### GetTitleSentimentMin

`func (o *MoreLikeThisRequest) GetTitleSentimentMin() float32`

GetTitleSentimentMin returns the TitleSentimentMin field if non-nil, zero value otherwise.

### GetTitleSentimentMinOk

`func (o *MoreLikeThisRequest) GetTitleSentimentMinOk() (*float32, bool)`

GetTitleSentimentMinOk returns a tuple with the TitleSentimentMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitleSentimentMin

`func (o *MoreLikeThisRequest) SetTitleSentimentMin(v float32)`

SetTitleSentimentMin sets TitleSentimentMin field to given value.

### HasTitleSentimentMin

`func (o *MoreLikeThisRequest) HasTitleSentimentMin() bool`

HasTitleSentimentMin returns a boolean if a field has been set.

### GetTitleSentimentMax

`func (o *MoreLikeThisRequest) GetTitleSentimentMax() float32`

GetTitleSentimentMax returns the TitleSentimentMax field if non-nil, zero value otherwise.

### GetTitleSentimentMaxOk

`func (o *MoreLikeThisRequest) GetTitleSentimentMaxOk() (*float32, bool)`

GetTitleSentimentMaxOk returns a tuple with the TitleSentimentMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitleSentimentMax

`func (o *MoreLikeThisRequest) SetTitleSentimentMax(v float32)`

SetTitleSentimentMax sets TitleSentimentMax field to given value.

### HasTitleSentimentMax

`func (o *MoreLikeThisRequest) HasTitleSentimentMax() bool`

HasTitleSentimentMax returns a boolean if a field has been set.

### GetContentSentimentMin

`func (o *MoreLikeThisRequest) GetContentSentimentMin() float32`

GetContentSentimentMin returns the ContentSentimentMin field if non-nil, zero value otherwise.

### GetContentSentimentMinOk

`func (o *MoreLikeThisRequest) GetContentSentimentMinOk() (*float32, bool)`

GetContentSentimentMinOk returns a tuple with the ContentSentimentMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSentimentMin

`func (o *MoreLikeThisRequest) SetContentSentimentMin(v float32)`

SetContentSentimentMin sets ContentSentimentMin field to given value.

### HasContentSentimentMin

`func (o *MoreLikeThisRequest) HasContentSentimentMin() bool`

HasContentSentimentMin returns a boolean if a field has been set.

### GetContentSentimentMax

`func (o *MoreLikeThisRequest) GetContentSentimentMax() float32`

GetContentSentimentMax returns the ContentSentimentMax field if non-nil, zero value otherwise.

### GetContentSentimentMaxOk

`func (o *MoreLikeThisRequest) GetContentSentimentMaxOk() (*float32, bool)`

GetContentSentimentMaxOk returns a tuple with the ContentSentimentMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSentimentMax

`func (o *MoreLikeThisRequest) SetContentSentimentMax(v float32)`

SetContentSentimentMax sets ContentSentimentMax field to given value.

### HasContentSentimentMax

`func (o *MoreLikeThisRequest) HasContentSentimentMax() bool`

HasContentSentimentMax returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


