# AuthorSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorName** | **string** |  | 
**Sources** | Pointer to **string** |  | [optional] 
**PredefinedSources** | Pointer to **string** |  | [optional] 
**NotSources** | Pointer to **string** |  | [optional] 
**Lang** | Pointer to **string** |  | [optional] 
**NotLang** | Pointer to **string** |  | [optional] 
**Countries** | Pointer to **string** |  | [optional] 
**NotCountries** | Pointer to **string** |  | [optional] 
**From** | Pointer to [**From**](From.md) |  | [optional] 
**To** | Pointer to [**To**](To.md) |  | [optional] 
**PublishedDatePrecision** | Pointer to **string** |  | [optional] 
**ByParseDate** | Pointer to **bool** |  | [optional] [default to false]
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

### NewAuthorSearchRequest

`func NewAuthorSearchRequest(authorName string, ) *AuthorSearchRequest`

NewAuthorSearchRequest instantiates a new AuthorSearchRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorSearchRequestWithDefaults

`func NewAuthorSearchRequestWithDefaults() *AuthorSearchRequest`

NewAuthorSearchRequestWithDefaults instantiates a new AuthorSearchRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorName

`func (o *AuthorSearchRequest) GetAuthorName() string`

GetAuthorName returns the AuthorName field if non-nil, zero value otherwise.

### GetAuthorNameOk

`func (o *AuthorSearchRequest) GetAuthorNameOk() (*string, bool)`

GetAuthorNameOk returns a tuple with the AuthorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorName

`func (o *AuthorSearchRequest) SetAuthorName(v string)`

SetAuthorName sets AuthorName field to given value.


### GetSources

`func (o *AuthorSearchRequest) GetSources() string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *AuthorSearchRequest) GetSourcesOk() (*string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *AuthorSearchRequest) SetSources(v string)`

SetSources sets Sources field to given value.

### HasSources

`func (o *AuthorSearchRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetPredefinedSources

`func (o *AuthorSearchRequest) GetPredefinedSources() string`

GetPredefinedSources returns the PredefinedSources field if non-nil, zero value otherwise.

### GetPredefinedSourcesOk

`func (o *AuthorSearchRequest) GetPredefinedSourcesOk() (*string, bool)`

GetPredefinedSourcesOk returns a tuple with the PredefinedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredefinedSources

`func (o *AuthorSearchRequest) SetPredefinedSources(v string)`

SetPredefinedSources sets PredefinedSources field to given value.

### HasPredefinedSources

`func (o *AuthorSearchRequest) HasPredefinedSources() bool`

HasPredefinedSources returns a boolean if a field has been set.

### GetNotSources

`func (o *AuthorSearchRequest) GetNotSources() string`

GetNotSources returns the NotSources field if non-nil, zero value otherwise.

### GetNotSourcesOk

`func (o *AuthorSearchRequest) GetNotSourcesOk() (*string, bool)`

GetNotSourcesOk returns a tuple with the NotSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotSources

`func (o *AuthorSearchRequest) SetNotSources(v string)`

SetNotSources sets NotSources field to given value.

### HasNotSources

`func (o *AuthorSearchRequest) HasNotSources() bool`

HasNotSources returns a boolean if a field has been set.

### GetLang

`func (o *AuthorSearchRequest) GetLang() string`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *AuthorSearchRequest) GetLangOk() (*string, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *AuthorSearchRequest) SetLang(v string)`

SetLang sets Lang field to given value.

### HasLang

`func (o *AuthorSearchRequest) HasLang() bool`

HasLang returns a boolean if a field has been set.

### GetNotLang

`func (o *AuthorSearchRequest) GetNotLang() string`

GetNotLang returns the NotLang field if non-nil, zero value otherwise.

### GetNotLangOk

`func (o *AuthorSearchRequest) GetNotLangOk() (*string, bool)`

GetNotLangOk returns a tuple with the NotLang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotLang

`func (o *AuthorSearchRequest) SetNotLang(v string)`

SetNotLang sets NotLang field to given value.

### HasNotLang

`func (o *AuthorSearchRequest) HasNotLang() bool`

HasNotLang returns a boolean if a field has been set.

### GetCountries

`func (o *AuthorSearchRequest) GetCountries() string`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *AuthorSearchRequest) GetCountriesOk() (*string, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *AuthorSearchRequest) SetCountries(v string)`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *AuthorSearchRequest) HasCountries() bool`

HasCountries returns a boolean if a field has been set.

### GetNotCountries

`func (o *AuthorSearchRequest) GetNotCountries() string`

GetNotCountries returns the NotCountries field if non-nil, zero value otherwise.

### GetNotCountriesOk

`func (o *AuthorSearchRequest) GetNotCountriesOk() (*string, bool)`

GetNotCountriesOk returns a tuple with the NotCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotCountries

`func (o *AuthorSearchRequest) SetNotCountries(v string)`

SetNotCountries sets NotCountries field to given value.

### HasNotCountries

`func (o *AuthorSearchRequest) HasNotCountries() bool`

HasNotCountries returns a boolean if a field has been set.

### GetFrom

`func (o *AuthorSearchRequest) GetFrom() From`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *AuthorSearchRequest) GetFromOk() (*From, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *AuthorSearchRequest) SetFrom(v From)`

SetFrom sets From field to given value.

### HasFrom

`func (o *AuthorSearchRequest) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetTo

`func (o *AuthorSearchRequest) GetTo() To`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *AuthorSearchRequest) GetToOk() (*To, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *AuthorSearchRequest) SetTo(v To)`

SetTo sets To field to given value.

### HasTo

`func (o *AuthorSearchRequest) HasTo() bool`

HasTo returns a boolean if a field has been set.

### GetPublishedDatePrecision

`func (o *AuthorSearchRequest) GetPublishedDatePrecision() string`

GetPublishedDatePrecision returns the PublishedDatePrecision field if non-nil, zero value otherwise.

### GetPublishedDatePrecisionOk

`func (o *AuthorSearchRequest) GetPublishedDatePrecisionOk() (*string, bool)`

GetPublishedDatePrecisionOk returns a tuple with the PublishedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDatePrecision

`func (o *AuthorSearchRequest) SetPublishedDatePrecision(v string)`

SetPublishedDatePrecision sets PublishedDatePrecision field to given value.

### HasPublishedDatePrecision

`func (o *AuthorSearchRequest) HasPublishedDatePrecision() bool`

HasPublishedDatePrecision returns a boolean if a field has been set.

### GetByParseDate

`func (o *AuthorSearchRequest) GetByParseDate() bool`

GetByParseDate returns the ByParseDate field if non-nil, zero value otherwise.

### GetByParseDateOk

`func (o *AuthorSearchRequest) GetByParseDateOk() (*bool, bool)`

GetByParseDateOk returns a tuple with the ByParseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetByParseDate

`func (o *AuthorSearchRequest) SetByParseDate(v bool)`

SetByParseDate sets ByParseDate field to given value.

### HasByParseDate

`func (o *AuthorSearchRequest) HasByParseDate() bool`

HasByParseDate returns a boolean if a field has been set.

### GetSortBy

`func (o *AuthorSearchRequest) GetSortBy() string`

GetSortBy returns the SortBy field if non-nil, zero value otherwise.

### GetSortByOk

`func (o *AuthorSearchRequest) GetSortByOk() (*string, bool)`

GetSortByOk returns a tuple with the SortBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortBy

`func (o *AuthorSearchRequest) SetSortBy(v string)`

SetSortBy sets SortBy field to given value.

### HasSortBy

`func (o *AuthorSearchRequest) HasSortBy() bool`

HasSortBy returns a boolean if a field has been set.

### GetRankedOnly

`func (o *AuthorSearchRequest) GetRankedOnly() string`

GetRankedOnly returns the RankedOnly field if non-nil, zero value otherwise.

### GetRankedOnlyOk

`func (o *AuthorSearchRequest) GetRankedOnlyOk() (*string, bool)`

GetRankedOnlyOk returns a tuple with the RankedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRankedOnly

`func (o *AuthorSearchRequest) SetRankedOnly(v string)`

SetRankedOnly sets RankedOnly field to given value.

### HasRankedOnly

`func (o *AuthorSearchRequest) HasRankedOnly() bool`

HasRankedOnly returns a boolean if a field has been set.

### GetFromRank

`func (o *AuthorSearchRequest) GetFromRank() int32`

GetFromRank returns the FromRank field if non-nil, zero value otherwise.

### GetFromRankOk

`func (o *AuthorSearchRequest) GetFromRankOk() (*int32, bool)`

GetFromRankOk returns a tuple with the FromRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRank

`func (o *AuthorSearchRequest) SetFromRank(v int32)`

SetFromRank sets FromRank field to given value.

### HasFromRank

`func (o *AuthorSearchRequest) HasFromRank() bool`

HasFromRank returns a boolean if a field has been set.

### GetToRank

`func (o *AuthorSearchRequest) GetToRank() int32`

GetToRank returns the ToRank field if non-nil, zero value otherwise.

### GetToRankOk

`func (o *AuthorSearchRequest) GetToRankOk() (*int32, bool)`

GetToRankOk returns a tuple with the ToRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRank

`func (o *AuthorSearchRequest) SetToRank(v int32)`

SetToRank sets ToRank field to given value.

### HasToRank

`func (o *AuthorSearchRequest) HasToRank() bool`

HasToRank returns a boolean if a field has been set.

### GetIsHeadline

`func (o *AuthorSearchRequest) GetIsHeadline() bool`

GetIsHeadline returns the IsHeadline field if non-nil, zero value otherwise.

### GetIsHeadlineOk

`func (o *AuthorSearchRequest) GetIsHeadlineOk() (*bool, bool)`

GetIsHeadlineOk returns a tuple with the IsHeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHeadline

`func (o *AuthorSearchRequest) SetIsHeadline(v bool)`

SetIsHeadline sets IsHeadline field to given value.

### HasIsHeadline

`func (o *AuthorSearchRequest) HasIsHeadline() bool`

HasIsHeadline returns a boolean if a field has been set.

### GetIsPaidContent

`func (o *AuthorSearchRequest) GetIsPaidContent() bool`

GetIsPaidContent returns the IsPaidContent field if non-nil, zero value otherwise.

### GetIsPaidContentOk

`func (o *AuthorSearchRequest) GetIsPaidContentOk() (*bool, bool)`

GetIsPaidContentOk returns a tuple with the IsPaidContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPaidContent

`func (o *AuthorSearchRequest) SetIsPaidContent(v bool)`

SetIsPaidContent sets IsPaidContent field to given value.

### HasIsPaidContent

`func (o *AuthorSearchRequest) HasIsPaidContent() bool`

HasIsPaidContent returns a boolean if a field has been set.

### GetParentUrl

`func (o *AuthorSearchRequest) GetParentUrl() string`

GetParentUrl returns the ParentUrl field if non-nil, zero value otherwise.

### GetParentUrlOk

`func (o *AuthorSearchRequest) GetParentUrlOk() (*string, bool)`

GetParentUrlOk returns a tuple with the ParentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentUrl

`func (o *AuthorSearchRequest) SetParentUrl(v string)`

SetParentUrl sets ParentUrl field to given value.

### HasParentUrl

`func (o *AuthorSearchRequest) HasParentUrl() bool`

HasParentUrl returns a boolean if a field has been set.

### GetAllLinks

`func (o *AuthorSearchRequest) GetAllLinks() string`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *AuthorSearchRequest) GetAllLinksOk() (*string, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *AuthorSearchRequest) SetAllLinks(v string)`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *AuthorSearchRequest) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### GetAllDomainLinks

`func (o *AuthorSearchRequest) GetAllDomainLinks() string`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *AuthorSearchRequest) GetAllDomainLinksOk() (*string, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *AuthorSearchRequest) SetAllDomainLinks(v string)`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *AuthorSearchRequest) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### GetWordCountMin

`func (o *AuthorSearchRequest) GetWordCountMin() int32`

GetWordCountMin returns the WordCountMin field if non-nil, zero value otherwise.

### GetWordCountMinOk

`func (o *AuthorSearchRequest) GetWordCountMinOk() (*int32, bool)`

GetWordCountMinOk returns a tuple with the WordCountMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCountMin

`func (o *AuthorSearchRequest) SetWordCountMin(v int32)`

SetWordCountMin sets WordCountMin field to given value.

### HasWordCountMin

`func (o *AuthorSearchRequest) HasWordCountMin() bool`

HasWordCountMin returns a boolean if a field has been set.

### GetWordCountMax

`func (o *AuthorSearchRequest) GetWordCountMax() int32`

GetWordCountMax returns the WordCountMax field if non-nil, zero value otherwise.

### GetWordCountMaxOk

`func (o *AuthorSearchRequest) GetWordCountMaxOk() (*int32, bool)`

GetWordCountMaxOk returns a tuple with the WordCountMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCountMax

`func (o *AuthorSearchRequest) SetWordCountMax(v int32)`

SetWordCountMax sets WordCountMax field to given value.

### HasWordCountMax

`func (o *AuthorSearchRequest) HasWordCountMax() bool`

HasWordCountMax returns a boolean if a field has been set.

### GetPage

`func (o *AuthorSearchRequest) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *AuthorSearchRequest) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *AuthorSearchRequest) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *AuthorSearchRequest) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetPageSize

`func (o *AuthorSearchRequest) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *AuthorSearchRequest) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *AuthorSearchRequest) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *AuthorSearchRequest) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetIncludeNlpData

`func (o *AuthorSearchRequest) GetIncludeNlpData() bool`

GetIncludeNlpData returns the IncludeNlpData field if non-nil, zero value otherwise.

### GetIncludeNlpDataOk

`func (o *AuthorSearchRequest) GetIncludeNlpDataOk() (*bool, bool)`

GetIncludeNlpDataOk returns a tuple with the IncludeNlpData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNlpData

`func (o *AuthorSearchRequest) SetIncludeNlpData(v bool)`

SetIncludeNlpData sets IncludeNlpData field to given value.

### HasIncludeNlpData

`func (o *AuthorSearchRequest) HasIncludeNlpData() bool`

HasIncludeNlpData returns a boolean if a field has been set.

### GetHasNlp

`func (o *AuthorSearchRequest) GetHasNlp() bool`

GetHasNlp returns the HasNlp field if non-nil, zero value otherwise.

### GetHasNlpOk

`func (o *AuthorSearchRequest) GetHasNlpOk() (*bool, bool)`

GetHasNlpOk returns a tuple with the HasNlp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNlp

`func (o *AuthorSearchRequest) SetHasNlp(v bool)`

SetHasNlp sets HasNlp field to given value.

### HasHasNlp

`func (o *AuthorSearchRequest) HasHasNlp() bool`

HasHasNlp returns a boolean if a field has been set.

### GetTheme

`func (o *AuthorSearchRequest) GetTheme() string`

GetTheme returns the Theme field if non-nil, zero value otherwise.

### GetThemeOk

`func (o *AuthorSearchRequest) GetThemeOk() (*string, bool)`

GetThemeOk returns a tuple with the Theme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTheme

`func (o *AuthorSearchRequest) SetTheme(v string)`

SetTheme sets Theme field to given value.

### HasTheme

`func (o *AuthorSearchRequest) HasTheme() bool`

HasTheme returns a boolean if a field has been set.

### GetNerName

`func (o *AuthorSearchRequest) GetNerName() string`

GetNerName returns the NerName field if non-nil, zero value otherwise.

### GetNerNameOk

`func (o *AuthorSearchRequest) GetNerNameOk() (*string, bool)`

GetNerNameOk returns a tuple with the NerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNerName

`func (o *AuthorSearchRequest) SetNerName(v string)`

SetNerName sets NerName field to given value.

### HasNerName

`func (o *AuthorSearchRequest) HasNerName() bool`

HasNerName returns a boolean if a field has been set.

### GetTitleSentimentMin

`func (o *AuthorSearchRequest) GetTitleSentimentMin() float32`

GetTitleSentimentMin returns the TitleSentimentMin field if non-nil, zero value otherwise.

### GetTitleSentimentMinOk

`func (o *AuthorSearchRequest) GetTitleSentimentMinOk() (*float32, bool)`

GetTitleSentimentMinOk returns a tuple with the TitleSentimentMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitleSentimentMin

`func (o *AuthorSearchRequest) SetTitleSentimentMin(v float32)`

SetTitleSentimentMin sets TitleSentimentMin field to given value.

### HasTitleSentimentMin

`func (o *AuthorSearchRequest) HasTitleSentimentMin() bool`

HasTitleSentimentMin returns a boolean if a field has been set.

### GetTitleSentimentMax

`func (o *AuthorSearchRequest) GetTitleSentimentMax() float32`

GetTitleSentimentMax returns the TitleSentimentMax field if non-nil, zero value otherwise.

### GetTitleSentimentMaxOk

`func (o *AuthorSearchRequest) GetTitleSentimentMaxOk() (*float32, bool)`

GetTitleSentimentMaxOk returns a tuple with the TitleSentimentMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitleSentimentMax

`func (o *AuthorSearchRequest) SetTitleSentimentMax(v float32)`

SetTitleSentimentMax sets TitleSentimentMax field to given value.

### HasTitleSentimentMax

`func (o *AuthorSearchRequest) HasTitleSentimentMax() bool`

HasTitleSentimentMax returns a boolean if a field has been set.

### GetContentSentimentMin

`func (o *AuthorSearchRequest) GetContentSentimentMin() float32`

GetContentSentimentMin returns the ContentSentimentMin field if non-nil, zero value otherwise.

### GetContentSentimentMinOk

`func (o *AuthorSearchRequest) GetContentSentimentMinOk() (*float32, bool)`

GetContentSentimentMinOk returns a tuple with the ContentSentimentMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSentimentMin

`func (o *AuthorSearchRequest) SetContentSentimentMin(v float32)`

SetContentSentimentMin sets ContentSentimentMin field to given value.

### HasContentSentimentMin

`func (o *AuthorSearchRequest) HasContentSentimentMin() bool`

HasContentSentimentMin returns a boolean if a field has been set.

### GetContentSentimentMax

`func (o *AuthorSearchRequest) GetContentSentimentMax() float32`

GetContentSentimentMax returns the ContentSentimentMax field if non-nil, zero value otherwise.

### GetContentSentimentMaxOk

`func (o *AuthorSearchRequest) GetContentSentimentMaxOk() (*float32, bool)`

GetContentSentimentMaxOk returns a tuple with the ContentSentimentMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSentimentMax

`func (o *AuthorSearchRequest) SetContentSentimentMax(v float32)`

SetContentSentimentMax sets ContentSentimentMax field to given value.

### HasContentSentimentMax

`func (o *AuthorSearchRequest) HasContentSentimentMax() bool`

HasContentSentimentMax returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


