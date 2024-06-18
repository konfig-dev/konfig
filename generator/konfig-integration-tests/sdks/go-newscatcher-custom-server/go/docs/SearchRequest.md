# SearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Q** | **string** |  | 
**SearchIn** | Pointer to **string** |  | [optional] [default to "title_content"]
**PredefinedSources** | Pointer to **interface{}** |  | [optional] 
**Sources** | Pointer to **interface{}** |  | [optional] 
**NotSources** | Pointer to **interface{}** |  | [optional] 
**Lang** | Pointer to **interface{}** |  | [optional] 
**NotLang** | Pointer to **interface{}** |  | [optional] 
**Countries** | Pointer to **interface{}** |  | [optional] 
**NotCountries** | Pointer to **interface{}** |  | [optional] 
**NotAuthorName** | Pointer to **interface{}** |  | [optional] 
**From** | Pointer to **string** |  | [optional] 
**To** | Pointer to **string** |  | [optional] 
**PublishedDatePrecision** | Pointer to **string** |  | [optional] 
**ByParseDate** | Pointer to **bool** |  | [optional] [default to false]
**SortBy** | Pointer to **string** |  | [optional] [default to "relevancy"]
**RankedOnly** | Pointer to **string** |  | [optional] 
**FromRank** | Pointer to **int32** |  | [optional] 
**ToRank** | Pointer to **int32** |  | [optional] 
**IsHeadline** | Pointer to **bool** |  | [optional] 
**IsOpinion** | Pointer to **bool** |  | [optional] 
**IsPaidContent** | Pointer to **bool** |  | [optional] 
**ParentUrl** | Pointer to **interface{}** |  | [optional] 
**AllLinks** | Pointer to **interface{}** |  | [optional] 
**AllDomainLinks** | Pointer to **interface{}** |  | [optional] 
**WordCountMin** | Pointer to **int32** |  | [optional] 
**WordCountMax** | Pointer to **int32** |  | [optional] 
**Page** | Pointer to **int32** |  | [optional] [default to 1]
**PageSize** | Pointer to **int32** |  | [optional] [default to 100]
**ClusteringVariable** | Pointer to **string** |  | [optional] 
**ClusteringEnabled** | Pointer to **bool** |  | [optional] 
**ClusteringThreshold** | Pointer to **float32** |  | [optional] 
**IncludeNlpData** | Pointer to **bool** |  | [optional] 
**HasNlp** | Pointer to **bool** |  | [optional] 
**Theme** | Pointer to **string** |  | [optional] 
**NotTheme** | Pointer to **string** |  | [optional] 
**ORGEntityName** | Pointer to **string** |  | [optional] 
**PEREntityName** | Pointer to **string** |  | [optional] 
**LOCEntityName** | Pointer to **string** |  | [optional] 
**MISCEntityName** | Pointer to **string** |  | [optional] 
**TitleSentimentMin** | Pointer to **float32** |  | [optional] 
**TitleSentimentMax** | Pointer to **float32** |  | [optional] 
**ContentSentimentMin** | Pointer to **float32** |  | [optional] 
**ContentSentimentMax** | Pointer to **float32** |  | [optional] 
**IptcTags** | Pointer to **interface{}** |  | [optional] 
**NotIptcTags** | Pointer to **interface{}** |  | [optional] 
**SourceName** | Pointer to **interface{}** |  | [optional] 
**IabTags** | Pointer to **interface{}** |  | [optional] 
**NotIabTags** | Pointer to **interface{}** |  | [optional] 
**ExcludeDuplicates** | Pointer to **bool** |  | [optional] 

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

`func (o *SearchRequest) GetPredefinedSources() interface{}`

GetPredefinedSources returns the PredefinedSources field if non-nil, zero value otherwise.

### GetPredefinedSourcesOk

`func (o *SearchRequest) GetPredefinedSourcesOk() (*interface{}, bool)`

GetPredefinedSourcesOk returns a tuple with the PredefinedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredefinedSources

`func (o *SearchRequest) SetPredefinedSources(v interface{})`

SetPredefinedSources sets PredefinedSources field to given value.

### HasPredefinedSources

`func (o *SearchRequest) HasPredefinedSources() bool`

HasPredefinedSources returns a boolean if a field has been set.

### SetPredefinedSourcesNil

`func (o *SearchRequest) SetPredefinedSourcesNil(b bool)`

 SetPredefinedSourcesNil sets the value for PredefinedSources to be an explicit nil

### UnsetPredefinedSources
`func (o *SearchRequest) UnsetPredefinedSources()`

UnsetPredefinedSources ensures that no value is present for PredefinedSources, not even an explicit nil
### GetSources

`func (o *SearchRequest) GetSources() interface{}`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *SearchRequest) GetSourcesOk() (*interface{}, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *SearchRequest) SetSources(v interface{})`

SetSources sets Sources field to given value.

### HasSources

`func (o *SearchRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.

### SetSourcesNil

`func (o *SearchRequest) SetSourcesNil(b bool)`

 SetSourcesNil sets the value for Sources to be an explicit nil

### UnsetSources
`func (o *SearchRequest) UnsetSources()`

UnsetSources ensures that no value is present for Sources, not even an explicit nil
### GetNotSources

`func (o *SearchRequest) GetNotSources() interface{}`

GetNotSources returns the NotSources field if non-nil, zero value otherwise.

### GetNotSourcesOk

`func (o *SearchRequest) GetNotSourcesOk() (*interface{}, bool)`

GetNotSourcesOk returns a tuple with the NotSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotSources

`func (o *SearchRequest) SetNotSources(v interface{})`

SetNotSources sets NotSources field to given value.

### HasNotSources

`func (o *SearchRequest) HasNotSources() bool`

HasNotSources returns a boolean if a field has been set.

### SetNotSourcesNil

`func (o *SearchRequest) SetNotSourcesNil(b bool)`

 SetNotSourcesNil sets the value for NotSources to be an explicit nil

### UnsetNotSources
`func (o *SearchRequest) UnsetNotSources()`

UnsetNotSources ensures that no value is present for NotSources, not even an explicit nil
### GetLang

`func (o *SearchRequest) GetLang() interface{}`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *SearchRequest) GetLangOk() (*interface{}, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *SearchRequest) SetLang(v interface{})`

SetLang sets Lang field to given value.

### HasLang

`func (o *SearchRequest) HasLang() bool`

HasLang returns a boolean if a field has been set.

### SetLangNil

`func (o *SearchRequest) SetLangNil(b bool)`

 SetLangNil sets the value for Lang to be an explicit nil

### UnsetLang
`func (o *SearchRequest) UnsetLang()`

UnsetLang ensures that no value is present for Lang, not even an explicit nil
### GetNotLang

`func (o *SearchRequest) GetNotLang() interface{}`

GetNotLang returns the NotLang field if non-nil, zero value otherwise.

### GetNotLangOk

`func (o *SearchRequest) GetNotLangOk() (*interface{}, bool)`

GetNotLangOk returns a tuple with the NotLang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotLang

`func (o *SearchRequest) SetNotLang(v interface{})`

SetNotLang sets NotLang field to given value.

### HasNotLang

`func (o *SearchRequest) HasNotLang() bool`

HasNotLang returns a boolean if a field has been set.

### SetNotLangNil

`func (o *SearchRequest) SetNotLangNil(b bool)`

 SetNotLangNil sets the value for NotLang to be an explicit nil

### UnsetNotLang
`func (o *SearchRequest) UnsetNotLang()`

UnsetNotLang ensures that no value is present for NotLang, not even an explicit nil
### GetCountries

`func (o *SearchRequest) GetCountries() interface{}`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *SearchRequest) GetCountriesOk() (*interface{}, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *SearchRequest) SetCountries(v interface{})`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *SearchRequest) HasCountries() bool`

HasCountries returns a boolean if a field has been set.

### SetCountriesNil

`func (o *SearchRequest) SetCountriesNil(b bool)`

 SetCountriesNil sets the value for Countries to be an explicit nil

### UnsetCountries
`func (o *SearchRequest) UnsetCountries()`

UnsetCountries ensures that no value is present for Countries, not even an explicit nil
### GetNotCountries

`func (o *SearchRequest) GetNotCountries() interface{}`

GetNotCountries returns the NotCountries field if non-nil, zero value otherwise.

### GetNotCountriesOk

`func (o *SearchRequest) GetNotCountriesOk() (*interface{}, bool)`

GetNotCountriesOk returns a tuple with the NotCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotCountries

`func (o *SearchRequest) SetNotCountries(v interface{})`

SetNotCountries sets NotCountries field to given value.

### HasNotCountries

`func (o *SearchRequest) HasNotCountries() bool`

HasNotCountries returns a boolean if a field has been set.

### SetNotCountriesNil

`func (o *SearchRequest) SetNotCountriesNil(b bool)`

 SetNotCountriesNil sets the value for NotCountries to be an explicit nil

### UnsetNotCountries
`func (o *SearchRequest) UnsetNotCountries()`

UnsetNotCountries ensures that no value is present for NotCountries, not even an explicit nil
### GetNotAuthorName

`func (o *SearchRequest) GetNotAuthorName() interface{}`

GetNotAuthorName returns the NotAuthorName field if non-nil, zero value otherwise.

### GetNotAuthorNameOk

`func (o *SearchRequest) GetNotAuthorNameOk() (*interface{}, bool)`

GetNotAuthorNameOk returns a tuple with the NotAuthorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotAuthorName

`func (o *SearchRequest) SetNotAuthorName(v interface{})`

SetNotAuthorName sets NotAuthorName field to given value.

### HasNotAuthorName

`func (o *SearchRequest) HasNotAuthorName() bool`

HasNotAuthorName returns a boolean if a field has been set.

### SetNotAuthorNameNil

`func (o *SearchRequest) SetNotAuthorNameNil(b bool)`

 SetNotAuthorNameNil sets the value for NotAuthorName to be an explicit nil

### UnsetNotAuthorName
`func (o *SearchRequest) UnsetNotAuthorName()`

UnsetNotAuthorName ensures that no value is present for NotAuthorName, not even an explicit nil
### GetFrom

`func (o *SearchRequest) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *SearchRequest) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *SearchRequest) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *SearchRequest) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetTo

`func (o *SearchRequest) GetTo() string`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *SearchRequest) GetToOk() (*string, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *SearchRequest) SetTo(v string)`

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

### GetIsOpinion

`func (o *SearchRequest) GetIsOpinion() bool`

GetIsOpinion returns the IsOpinion field if non-nil, zero value otherwise.

### GetIsOpinionOk

`func (o *SearchRequest) GetIsOpinionOk() (*bool, bool)`

GetIsOpinionOk returns a tuple with the IsOpinion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOpinion

`func (o *SearchRequest) SetIsOpinion(v bool)`

SetIsOpinion sets IsOpinion field to given value.

### HasIsOpinion

`func (o *SearchRequest) HasIsOpinion() bool`

HasIsOpinion returns a boolean if a field has been set.

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

`func (o *SearchRequest) GetParentUrl() interface{}`

GetParentUrl returns the ParentUrl field if non-nil, zero value otherwise.

### GetParentUrlOk

`func (o *SearchRequest) GetParentUrlOk() (*interface{}, bool)`

GetParentUrlOk returns a tuple with the ParentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentUrl

`func (o *SearchRequest) SetParentUrl(v interface{})`

SetParentUrl sets ParentUrl field to given value.

### HasParentUrl

`func (o *SearchRequest) HasParentUrl() bool`

HasParentUrl returns a boolean if a field has been set.

### SetParentUrlNil

`func (o *SearchRequest) SetParentUrlNil(b bool)`

 SetParentUrlNil sets the value for ParentUrl to be an explicit nil

### UnsetParentUrl
`func (o *SearchRequest) UnsetParentUrl()`

UnsetParentUrl ensures that no value is present for ParentUrl, not even an explicit nil
### GetAllLinks

`func (o *SearchRequest) GetAllLinks() interface{}`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *SearchRequest) GetAllLinksOk() (*interface{}, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *SearchRequest) SetAllLinks(v interface{})`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *SearchRequest) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### SetAllLinksNil

`func (o *SearchRequest) SetAllLinksNil(b bool)`

 SetAllLinksNil sets the value for AllLinks to be an explicit nil

### UnsetAllLinks
`func (o *SearchRequest) UnsetAllLinks()`

UnsetAllLinks ensures that no value is present for AllLinks, not even an explicit nil
### GetAllDomainLinks

`func (o *SearchRequest) GetAllDomainLinks() interface{}`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *SearchRequest) GetAllDomainLinksOk() (*interface{}, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *SearchRequest) SetAllDomainLinks(v interface{})`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *SearchRequest) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### SetAllDomainLinksNil

`func (o *SearchRequest) SetAllDomainLinksNil(b bool)`

 SetAllDomainLinksNil sets the value for AllDomainLinks to be an explicit nil

### UnsetAllDomainLinks
`func (o *SearchRequest) UnsetAllDomainLinks()`

UnsetAllDomainLinks ensures that no value is present for AllDomainLinks, not even an explicit nil
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

### GetNotTheme

`func (o *SearchRequest) GetNotTheme() string`

GetNotTheme returns the NotTheme field if non-nil, zero value otherwise.

### GetNotThemeOk

`func (o *SearchRequest) GetNotThemeOk() (*string, bool)`

GetNotThemeOk returns a tuple with the NotTheme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotTheme

`func (o *SearchRequest) SetNotTheme(v string)`

SetNotTheme sets NotTheme field to given value.

### HasNotTheme

`func (o *SearchRequest) HasNotTheme() bool`

HasNotTheme returns a boolean if a field has been set.

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

### GetIptcTags

`func (o *SearchRequest) GetIptcTags() interface{}`

GetIptcTags returns the IptcTags field if non-nil, zero value otherwise.

### GetIptcTagsOk

`func (o *SearchRequest) GetIptcTagsOk() (*interface{}, bool)`

GetIptcTagsOk returns a tuple with the IptcTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIptcTags

`func (o *SearchRequest) SetIptcTags(v interface{})`

SetIptcTags sets IptcTags field to given value.

### HasIptcTags

`func (o *SearchRequest) HasIptcTags() bool`

HasIptcTags returns a boolean if a field has been set.

### SetIptcTagsNil

`func (o *SearchRequest) SetIptcTagsNil(b bool)`

 SetIptcTagsNil sets the value for IptcTags to be an explicit nil

### UnsetIptcTags
`func (o *SearchRequest) UnsetIptcTags()`

UnsetIptcTags ensures that no value is present for IptcTags, not even an explicit nil
### GetNotIptcTags

`func (o *SearchRequest) GetNotIptcTags() interface{}`

GetNotIptcTags returns the NotIptcTags field if non-nil, zero value otherwise.

### GetNotIptcTagsOk

`func (o *SearchRequest) GetNotIptcTagsOk() (*interface{}, bool)`

GetNotIptcTagsOk returns a tuple with the NotIptcTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotIptcTags

`func (o *SearchRequest) SetNotIptcTags(v interface{})`

SetNotIptcTags sets NotIptcTags field to given value.

### HasNotIptcTags

`func (o *SearchRequest) HasNotIptcTags() bool`

HasNotIptcTags returns a boolean if a field has been set.

### SetNotIptcTagsNil

`func (o *SearchRequest) SetNotIptcTagsNil(b bool)`

 SetNotIptcTagsNil sets the value for NotIptcTags to be an explicit nil

### UnsetNotIptcTags
`func (o *SearchRequest) UnsetNotIptcTags()`

UnsetNotIptcTags ensures that no value is present for NotIptcTags, not even an explicit nil
### GetSourceName

`func (o *SearchRequest) GetSourceName() interface{}`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *SearchRequest) GetSourceNameOk() (*interface{}, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *SearchRequest) SetSourceName(v interface{})`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *SearchRequest) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### SetSourceNameNil

`func (o *SearchRequest) SetSourceNameNil(b bool)`

 SetSourceNameNil sets the value for SourceName to be an explicit nil

### UnsetSourceName
`func (o *SearchRequest) UnsetSourceName()`

UnsetSourceName ensures that no value is present for SourceName, not even an explicit nil
### GetIabTags

`func (o *SearchRequest) GetIabTags() interface{}`

GetIabTags returns the IabTags field if non-nil, zero value otherwise.

### GetIabTagsOk

`func (o *SearchRequest) GetIabTagsOk() (*interface{}, bool)`

GetIabTagsOk returns a tuple with the IabTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIabTags

`func (o *SearchRequest) SetIabTags(v interface{})`

SetIabTags sets IabTags field to given value.

### HasIabTags

`func (o *SearchRequest) HasIabTags() bool`

HasIabTags returns a boolean if a field has been set.

### SetIabTagsNil

`func (o *SearchRequest) SetIabTagsNil(b bool)`

 SetIabTagsNil sets the value for IabTags to be an explicit nil

### UnsetIabTags
`func (o *SearchRequest) UnsetIabTags()`

UnsetIabTags ensures that no value is present for IabTags, not even an explicit nil
### GetNotIabTags

`func (o *SearchRequest) GetNotIabTags() interface{}`

GetNotIabTags returns the NotIabTags field if non-nil, zero value otherwise.

### GetNotIabTagsOk

`func (o *SearchRequest) GetNotIabTagsOk() (*interface{}, bool)`

GetNotIabTagsOk returns a tuple with the NotIabTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotIabTags

`func (o *SearchRequest) SetNotIabTags(v interface{})`

SetNotIabTags sets NotIabTags field to given value.

### HasNotIabTags

`func (o *SearchRequest) HasNotIabTags() bool`

HasNotIabTags returns a boolean if a field has been set.

### SetNotIabTagsNil

`func (o *SearchRequest) SetNotIabTagsNil(b bool)`

 SetNotIabTagsNil sets the value for NotIabTags to be an explicit nil

### UnsetNotIabTags
`func (o *SearchRequest) UnsetNotIabTags()`

UnsetNotIabTags ensures that no value is present for NotIabTags, not even an explicit nil
### GetExcludeDuplicates

`func (o *SearchRequest) GetExcludeDuplicates() bool`

GetExcludeDuplicates returns the ExcludeDuplicates field if non-nil, zero value otherwise.

### GetExcludeDuplicatesOk

`func (o *SearchRequest) GetExcludeDuplicatesOk() (*bool, bool)`

GetExcludeDuplicatesOk returns a tuple with the ExcludeDuplicates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeDuplicates

`func (o *SearchRequest) SetExcludeDuplicates(v bool)`

SetExcludeDuplicates sets ExcludeDuplicates field to given value.

### HasExcludeDuplicates

`func (o *SearchRequest) HasExcludeDuplicates() bool`

HasExcludeDuplicates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


