# SearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Q** | **string** |  | 
**SearchIn** | Pointer to **string** |  | [optional] [default to "title_content"]
**PredefinedSources** | Pointer to **string** |  | [optional] 
**Sources** | Pointer to **string** |  | [optional] 
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
**ClusteringEnabled** | Pointer to **bool** |  | [optional] 
**ClusteringThreshold** | Pointer to **float32** |  | [optional] 
**ClusteringVariable** | Pointer to **string** |  | [optional] 
**IncludeNlpData** | Pointer to **bool** |  | [optional] 
**HasNlp** | Pointer to **bool** |  | [optional] 
**Theme** | Pointer to **string** |  | [optional] 
**ORGEntityName** | Pointer to **string** |  | [optional] 
**PEREntityName** | Pointer to **string** |  | [optional] 
**LOCEntityName** | Pointer to **string** |  | [optional] 
**MISCEntityName** | Pointer to **string** |  | [optional] 
**TitleSentimentMin** | Pointer to **float32** |  | [optional] 
**TitleSentimentMax** | Pointer to **float32** |  | [optional] 
**ContentSentimentMin** | Pointer to **float32** |  | [optional] 
**ContentSentimentMax** | Pointer to **float32** |  | [optional] 

## Methods

### NewSearchRequest

`func NewSearchRequest(q string, ) *SearchRequest`

NewSearchRequest instantiates a new SearchRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchRequestWithDefaults

`func NewSearchRequestWithDefaults() *SearchRequest`

NewSearchRequestWithDefaults instantiates a new SearchRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQ

`func (o *SearchRequest) GetQ() string`

GetQ returns the Q field if non-nil, zero value otherwise.

### GetQOk

`func (o *SearchRequest) GetQOk() (*string, bool)`

GetQOk returns a tuple with the Q field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQ

`func (o *SearchRequest) SetQ(v string)`

SetQ sets Q field to given value.


### GetSearchIn

`func (o *SearchRequest) GetSearchIn() string`

GetSearchIn returns the SearchIn field if non-nil, zero value otherwise.

### GetSearchInOk

`func (o *SearchRequest) GetSearchInOk() (*string, bool)`

GetSearchInOk returns a tuple with the SearchIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchIn

`func (o *SearchRequest) SetSearchIn(v string)`

SetSearchIn sets SearchIn field to given value.

### HasSearchIn

`func (o *SearchRequest) HasSearchIn() bool`

HasSearchIn returns a boolean if a field has been set.

### GetPredefinedSources

`func (o *SearchRequest) GetPredefinedSources() string`

GetPredefinedSources returns the PredefinedSources field if non-nil, zero value otherwise.

### GetPredefinedSourcesOk

`func (o *SearchRequest) GetPredefinedSourcesOk() (*string, bool)`

GetPredefinedSourcesOk returns a tuple with the PredefinedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredefinedSources

`func (o *SearchRequest) SetPredefinedSources(v string)`

SetPredefinedSources sets PredefinedSources field to given value.

### HasPredefinedSources

`func (o *SearchRequest) HasPredefinedSources() bool`

HasPredefinedSources returns a boolean if a field has been set.

### GetSources

`func (o *SearchRequest) GetSources() string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *SearchRequest) GetSourcesOk() (*string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *SearchRequest) SetSources(v string)`

SetSources sets Sources field to given value.

### HasSources

`func (o *SearchRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetNotSources

`func (o *SearchRequest) GetNotSources() string`

GetNotSources returns the NotSources field if non-nil, zero value otherwise.

### GetNotSourcesOk

`func (o *SearchRequest) GetNotSourcesOk() (*string, bool)`

GetNotSourcesOk returns a tuple with the NotSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotSources

`func (o *SearchRequest) SetNotSources(v string)`

SetNotSources sets NotSources field to given value.

### HasNotSources

`func (o *SearchRequest) HasNotSources() bool`

HasNotSources returns a boolean if a field has been set.

### GetLang

`func (o *SearchRequest) GetLang() string`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *SearchRequest) GetLangOk() (*string, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *SearchRequest) SetLang(v string)`

SetLang sets Lang field to given value.

### HasLang

`func (o *SearchRequest) HasLang() bool`

HasLang returns a boolean if a field has been set.

### GetNotLang

`func (o *SearchRequest) GetNotLang() string`

GetNotLang returns the NotLang field if non-nil, zero value otherwise.

### GetNotLangOk

`func (o *SearchRequest) GetNotLangOk() (*string, bool)`

GetNotLangOk returns a tuple with the NotLang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotLang

`func (o *SearchRequest) SetNotLang(v string)`

SetNotLang sets NotLang field to given value.

### HasNotLang

`func (o *SearchRequest) HasNotLang() bool`

HasNotLang returns a boolean if a field has been set.

### GetCountries

`func (o *SearchRequest) GetCountries() string`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *SearchRequest) GetCountriesOk() (*string, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *SearchRequest) SetCountries(v string)`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *SearchRequest) HasCountries() bool`

HasCountries returns a boolean if a field has been set.

### GetNotCountries

`func (o *SearchRequest) GetNotCountries() string`

GetNotCountries returns the NotCountries field if non-nil, zero value otherwise.

### GetNotCountriesOk

`func (o *SearchRequest) GetNotCountriesOk() (*string, bool)`

GetNotCountriesOk returns a tuple with the NotCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotCountries

`func (o *SearchRequest) SetNotCountries(v string)`

SetNotCountries sets NotCountries field to given value.

### HasNotCountries

`func (o *SearchRequest) HasNotCountries() bool`

HasNotCountries returns a boolean if a field has been set.

### GetFrom

`func (o *SearchRequest) GetFrom() From`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *SearchRequest) GetFromOk() (*From, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *SearchRequest) SetFrom(v From)`

SetFrom sets From field to given value.

### HasFrom

`func (o *SearchRequest) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetTo

`func (o *SearchRequest) GetTo() To`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *SearchRequest) GetToOk() (*To, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *SearchRequest) SetTo(v To)`

SetTo sets To field to given value.

### HasTo

`func (o *SearchRequest) HasTo() bool`

HasTo returns a boolean if a field has been set.

### GetPublishedDatePrecision

`func (o *SearchRequest) GetPublishedDatePrecision() string`

GetPublishedDatePrecision returns the PublishedDatePrecision field if non-nil, zero value otherwise.

### GetPublishedDatePrecisionOk

`func (o *SearchRequest) GetPublishedDatePrecisionOk() (*string, bool)`

GetPublishedDatePrecisionOk returns a tuple with the PublishedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDatePrecision

`func (o *SearchRequest) SetPublishedDatePrecision(v string)`

SetPublishedDatePrecision sets PublishedDatePrecision field to given value.

### HasPublishedDatePrecision

`func (o *SearchRequest) HasPublishedDatePrecision() bool`

HasPublishedDatePrecision returns a boolean if a field has been set.

### GetByParseDate

`func (o *SearchRequest) GetByParseDate() bool`

GetByParseDate returns the ByParseDate field if non-nil, zero value otherwise.

### GetByParseDateOk

`func (o *SearchRequest) GetByParseDateOk() (*bool, bool)`

GetByParseDateOk returns a tuple with the ByParseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetByParseDate

`func (o *SearchRequest) SetByParseDate(v bool)`

SetByParseDate sets ByParseDate field to given value.

### HasByParseDate

`func (o *SearchRequest) HasByParseDate() bool`

HasByParseDate returns a boolean if a field has been set.

### GetSortBy

`func (o *SearchRequest) GetSortBy() string`

GetSortBy returns the SortBy field if non-nil, zero value otherwise.

### GetSortByOk

`func (o *SearchRequest) GetSortByOk() (*string, bool)`

GetSortByOk returns a tuple with the SortBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortBy

`func (o *SearchRequest) SetSortBy(v string)`

SetSortBy sets SortBy field to given value.

### HasSortBy

`func (o *SearchRequest) HasSortBy() bool`

HasSortBy returns a boolean if a field has been set.

### GetRankedOnly

`func (o *SearchRequest) GetRankedOnly() string`

GetRankedOnly returns the RankedOnly field if non-nil, zero value otherwise.

### GetRankedOnlyOk

`func (o *SearchRequest) GetRankedOnlyOk() (*string, bool)`

GetRankedOnlyOk returns a tuple with the RankedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRankedOnly

`func (o *SearchRequest) SetRankedOnly(v string)`

SetRankedOnly sets RankedOnly field to given value.

### HasRankedOnly

`func (o *SearchRequest) HasRankedOnly() bool`

HasRankedOnly returns a boolean if a field has been set.

### GetFromRank

`func (o *SearchRequest) GetFromRank() int32`

GetFromRank returns the FromRank field if non-nil, zero value otherwise.

### GetFromRankOk

`func (o *SearchRequest) GetFromRankOk() (*int32, bool)`

GetFromRankOk returns a tuple with the FromRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRank

`func (o *SearchRequest) SetFromRank(v int32)`

SetFromRank sets FromRank field to given value.

### HasFromRank

`func (o *SearchRequest) HasFromRank() bool`

HasFromRank returns a boolean if a field has been set.

### GetToRank

`func (o *SearchRequest) GetToRank() int32`

GetToRank returns the ToRank field if non-nil, zero value otherwise.

### GetToRankOk

`func (o *SearchRequest) GetToRankOk() (*int32, bool)`

GetToRankOk returns a tuple with the ToRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRank

`func (o *SearchRequest) SetToRank(v int32)`

SetToRank sets ToRank field to given value.

### HasToRank

`func (o *SearchRequest) HasToRank() bool`

HasToRank returns a boolean if a field has been set.

### GetIsHeadline

`func (o *SearchRequest) GetIsHeadline() bool`

GetIsHeadline returns the IsHeadline field if non-nil, zero value otherwise.

### GetIsHeadlineOk

`func (o *SearchRequest) GetIsHeadlineOk() (*bool, bool)`

GetIsHeadlineOk returns a tuple with the IsHeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHeadline

`func (o *SearchRequest) SetIsHeadline(v bool)`

SetIsHeadline sets IsHeadline field to given value.

### HasIsHeadline

`func (o *SearchRequest) HasIsHeadline() bool`

HasIsHeadline returns a boolean if a field has been set.

### GetIsPaidContent

`func (o *SearchRequest) GetIsPaidContent() bool`

GetIsPaidContent returns the IsPaidContent field if non-nil, zero value otherwise.

### GetIsPaidContentOk

`func (o *SearchRequest) GetIsPaidContentOk() (*bool, bool)`

GetIsPaidContentOk returns a tuple with the IsPaidContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPaidContent

`func (o *SearchRequest) SetIsPaidContent(v bool)`

SetIsPaidContent sets IsPaidContent field to given value.

### HasIsPaidContent

`func (o *SearchRequest) HasIsPaidContent() bool`

HasIsPaidContent returns a boolean if a field has been set.

### GetParentUrl

`func (o *SearchRequest) GetParentUrl() string`

GetParentUrl returns the ParentUrl field if non-nil, zero value otherwise.

### GetParentUrlOk

`func (o *SearchRequest) GetParentUrlOk() (*string, bool)`

GetParentUrlOk returns a tuple with the ParentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentUrl

`func (o *SearchRequest) SetParentUrl(v string)`

SetParentUrl sets ParentUrl field to given value.

### HasParentUrl

`func (o *SearchRequest) HasParentUrl() bool`

HasParentUrl returns a boolean if a field has been set.

### GetAllLinks

`func (o *SearchRequest) GetAllLinks() string`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *SearchRequest) GetAllLinksOk() (*string, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *SearchRequest) SetAllLinks(v string)`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *SearchRequest) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### GetAllDomainLinks

`func (o *SearchRequest) GetAllDomainLinks() string`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *SearchRequest) GetAllDomainLinksOk() (*string, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *SearchRequest) SetAllDomainLinks(v string)`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *SearchRequest) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### GetWordCountMin

`func (o *SearchRequest) GetWordCountMin() int32`

GetWordCountMin returns the WordCountMin field if non-nil, zero value otherwise.

### GetWordCountMinOk

`func (o *SearchRequest) GetWordCountMinOk() (*int32, bool)`

GetWordCountMinOk returns a tuple with the WordCountMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCountMin

`func (o *SearchRequest) SetWordCountMin(v int32)`

SetWordCountMin sets WordCountMin field to given value.

### HasWordCountMin

`func (o *SearchRequest) HasWordCountMin() bool`

HasWordCountMin returns a boolean if a field has been set.

### GetWordCountMax

`func (o *SearchRequest) GetWordCountMax() int32`

GetWordCountMax returns the WordCountMax field if non-nil, zero value otherwise.

### GetWordCountMaxOk

`func (o *SearchRequest) GetWordCountMaxOk() (*int32, bool)`

GetWordCountMaxOk returns a tuple with the WordCountMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCountMax

`func (o *SearchRequest) SetWordCountMax(v int32)`

SetWordCountMax sets WordCountMax field to given value.

### HasWordCountMax

`func (o *SearchRequest) HasWordCountMax() bool`

HasWordCountMax returns a boolean if a field has been set.

### GetPage

`func (o *SearchRequest) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *SearchRequest) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *SearchRequest) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *SearchRequest) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetPageSize

`func (o *SearchRequest) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *SearchRequest) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *SearchRequest) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *SearchRequest) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetClusteringEnabled

`func (o *SearchRequest) GetClusteringEnabled() bool`

GetClusteringEnabled returns the ClusteringEnabled field if non-nil, zero value otherwise.

### GetClusteringEnabledOk

`func (o *SearchRequest) GetClusteringEnabledOk() (*bool, bool)`

GetClusteringEnabledOk returns a tuple with the ClusteringEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusteringEnabled

`func (o *SearchRequest) SetClusteringEnabled(v bool)`

SetClusteringEnabled sets ClusteringEnabled field to given value.

### HasClusteringEnabled

`func (o *SearchRequest) HasClusteringEnabled() bool`

HasClusteringEnabled returns a boolean if a field has been set.

### GetClusteringThreshold

`func (o *SearchRequest) GetClusteringThreshold() float32`

GetClusteringThreshold returns the ClusteringThreshold field if non-nil, zero value otherwise.

### GetClusteringThresholdOk

`func (o *SearchRequest) GetClusteringThresholdOk() (*float32, bool)`

GetClusteringThresholdOk returns a tuple with the ClusteringThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusteringThreshold

`func (o *SearchRequest) SetClusteringThreshold(v float32)`

SetClusteringThreshold sets ClusteringThreshold field to given value.

### HasClusteringThreshold

`func (o *SearchRequest) HasClusteringThreshold() bool`

HasClusteringThreshold returns a boolean if a field has been set.

### GetClusteringVariable

`func (o *SearchRequest) GetClusteringVariable() string`

GetClusteringVariable returns the ClusteringVariable field if non-nil, zero value otherwise.

### GetClusteringVariableOk

`func (o *SearchRequest) GetClusteringVariableOk() (*string, bool)`

GetClusteringVariableOk returns a tuple with the ClusteringVariable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusteringVariable

`func (o *SearchRequest) SetClusteringVariable(v string)`

SetClusteringVariable sets ClusteringVariable field to given value.

### HasClusteringVariable

`func (o *SearchRequest) HasClusteringVariable() bool`

HasClusteringVariable returns a boolean if a field has been set.

### GetIncludeNlpData

`func (o *SearchRequest) GetIncludeNlpData() bool`

GetIncludeNlpData returns the IncludeNlpData field if non-nil, zero value otherwise.

### GetIncludeNlpDataOk

`func (o *SearchRequest) GetIncludeNlpDataOk() (*bool, bool)`

GetIncludeNlpDataOk returns a tuple with the IncludeNlpData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNlpData

`func (o *SearchRequest) SetIncludeNlpData(v bool)`

SetIncludeNlpData sets IncludeNlpData field to given value.

### HasIncludeNlpData

`func (o *SearchRequest) HasIncludeNlpData() bool`

HasIncludeNlpData returns a boolean if a field has been set.

### GetHasNlp

`func (o *SearchRequest) GetHasNlp() bool`

GetHasNlp returns the HasNlp field if non-nil, zero value otherwise.

### GetHasNlpOk

`func (o *SearchRequest) GetHasNlpOk() (*bool, bool)`

GetHasNlpOk returns a tuple with the HasNlp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNlp

`func (o *SearchRequest) SetHasNlp(v bool)`

SetHasNlp sets HasNlp field to given value.

### HasHasNlp

`func (o *SearchRequest) HasHasNlp() bool`

HasHasNlp returns a boolean if a field has been set.

### GetTheme

`func (o *SearchRequest) GetTheme() string`

GetTheme returns the Theme field if non-nil, zero value otherwise.

### GetThemeOk

`func (o *SearchRequest) GetThemeOk() (*string, bool)`

GetThemeOk returns a tuple with the Theme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTheme

`func (o *SearchRequest) SetTheme(v string)`

SetTheme sets Theme field to given value.

### HasTheme

`func (o *SearchRequest) HasTheme() bool`

HasTheme returns a boolean if a field has been set.

### GetORGEntityName

`func (o *SearchRequest) GetORGEntityName() string`

GetORGEntityName returns the ORGEntityName field if non-nil, zero value otherwise.

### GetORGEntityNameOk

`func (o *SearchRequest) GetORGEntityNameOk() (*string, bool)`

GetORGEntityNameOk returns a tuple with the ORGEntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetORGEntityName

`func (o *SearchRequest) SetORGEntityName(v string)`

SetORGEntityName sets ORGEntityName field to given value.

### HasORGEntityName

`func (o *SearchRequest) HasORGEntityName() bool`

HasORGEntityName returns a boolean if a field has been set.

### GetPEREntityName

`func (o *SearchRequest) GetPEREntityName() string`

GetPEREntityName returns the PEREntityName field if non-nil, zero value otherwise.

### GetPEREntityNameOk

`func (o *SearchRequest) GetPEREntityNameOk() (*string, bool)`

GetPEREntityNameOk returns a tuple with the PEREntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPEREntityName

`func (o *SearchRequest) SetPEREntityName(v string)`

SetPEREntityName sets PEREntityName field to given value.

### HasPEREntityName

`func (o *SearchRequest) HasPEREntityName() bool`

HasPEREntityName returns a boolean if a field has been set.

### GetLOCEntityName

`func (o *SearchRequest) GetLOCEntityName() string`

GetLOCEntityName returns the LOCEntityName field if non-nil, zero value otherwise.

### GetLOCEntityNameOk

`func (o *SearchRequest) GetLOCEntityNameOk() (*string, bool)`

GetLOCEntityNameOk returns a tuple with the LOCEntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOCEntityName

`func (o *SearchRequest) SetLOCEntityName(v string)`

SetLOCEntityName sets LOCEntityName field to given value.

### HasLOCEntityName

`func (o *SearchRequest) HasLOCEntityName() bool`

HasLOCEntityName returns a boolean if a field has been set.

### GetMISCEntityName

`func (o *SearchRequest) GetMISCEntityName() string`

GetMISCEntityName returns the MISCEntityName field if non-nil, zero value otherwise.

### GetMISCEntityNameOk

`func (o *SearchRequest) GetMISCEntityNameOk() (*string, bool)`

GetMISCEntityNameOk returns a tuple with the MISCEntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMISCEntityName

`func (o *SearchRequest) SetMISCEntityName(v string)`

SetMISCEntityName sets MISCEntityName field to given value.

### HasMISCEntityName

`func (o *SearchRequest) HasMISCEntityName() bool`

HasMISCEntityName returns a boolean if a field has been set.

### GetTitleSentimentMin

`func (o *SearchRequest) GetTitleSentimentMin() float32`

GetTitleSentimentMin returns the TitleSentimentMin field if non-nil, zero value otherwise.

### GetTitleSentimentMinOk

`func (o *SearchRequest) GetTitleSentimentMinOk() (*float32, bool)`

GetTitleSentimentMinOk returns a tuple with the TitleSentimentMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitleSentimentMin

`func (o *SearchRequest) SetTitleSentimentMin(v float32)`

SetTitleSentimentMin sets TitleSentimentMin field to given value.

### HasTitleSentimentMin

`func (o *SearchRequest) HasTitleSentimentMin() bool`

HasTitleSentimentMin returns a boolean if a field has been set.

### GetTitleSentimentMax

`func (o *SearchRequest) GetTitleSentimentMax() float32`

GetTitleSentimentMax returns the TitleSentimentMax field if non-nil, zero value otherwise.

### GetTitleSentimentMaxOk

`func (o *SearchRequest) GetTitleSentimentMaxOk() (*float32, bool)`

GetTitleSentimentMaxOk returns a tuple with the TitleSentimentMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitleSentimentMax

`func (o *SearchRequest) SetTitleSentimentMax(v float32)`

SetTitleSentimentMax sets TitleSentimentMax field to given value.

### HasTitleSentimentMax

`func (o *SearchRequest) HasTitleSentimentMax() bool`

HasTitleSentimentMax returns a boolean if a field has been set.

### GetContentSentimentMin

`func (o *SearchRequest) GetContentSentimentMin() float32`

GetContentSentimentMin returns the ContentSentimentMin field if non-nil, zero value otherwise.

### GetContentSentimentMinOk

`func (o *SearchRequest) GetContentSentimentMinOk() (*float32, bool)`

GetContentSentimentMinOk returns a tuple with the ContentSentimentMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSentimentMin

`func (o *SearchRequest) SetContentSentimentMin(v float32)`

SetContentSentimentMin sets ContentSentimentMin field to given value.

### HasContentSentimentMin

`func (o *SearchRequest) HasContentSentimentMin() bool`

HasContentSentimentMin returns a boolean if a field has been set.

### GetContentSentimentMax

`func (o *SearchRequest) GetContentSentimentMax() float32`

GetContentSentimentMax returns the ContentSentimentMax field if non-nil, zero value otherwise.

### GetContentSentimentMaxOk

`func (o *SearchRequest) GetContentSentimentMaxOk() (*float32, bool)`

GetContentSentimentMaxOk returns a tuple with the ContentSentimentMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSentimentMax

`func (o *SearchRequest) SetContentSentimentMax(v float32)`

SetContentSentimentMax sets ContentSentimentMax field to given value.

### HasContentSentimentMax

`func (o *SearchRequest) HasContentSentimentMax() bool`

HasContentSentimentMax returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


