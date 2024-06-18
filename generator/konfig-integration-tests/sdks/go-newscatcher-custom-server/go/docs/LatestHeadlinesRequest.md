# LatestHeadlinesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**When** | Pointer to **string** |  | [optional] [default to "7d"]
**ByParseDate** | Pointer to **bool** |  | [optional] [default to false]
**Lang** | Pointer to **interface{}** |  | [optional] 
**NotLang** | Pointer to **interface{}** |  | [optional] 
**Countries** | Pointer to **interface{}** |  | [optional] 
**NotCountries** | Pointer to **interface{}** |  | [optional] 
**Sources** | Pointer to **interface{}** |  | [optional] 
**PredefinedSources** | Pointer to **interface{}** |  | [optional] 
**NotSources** | Pointer to **interface{}** |  | [optional] 
**NotAuthorName** | Pointer to **interface{}** |  | [optional] 
**RankedOnly** | Pointer to **string** |  | [optional] 
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
**IabTags** | Pointer to **interface{}** |  | [optional] 
**NotIabTags** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewLatestHeadlinesRequest

`func NewLatestHeadlinesRequest() *LatestHeadlinesRequest`

NewLatestHeadlinesRequest instantiates a new LatestHeadlinesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLatestHeadlinesRequestWithDefaults

`func NewLatestHeadlinesRequestWithDefaults() *LatestHeadlinesRequest`

NewLatestHeadlinesRequestWithDefaults instantiates a new LatestHeadlinesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWhen

`func (o *LatestHeadlinesRequest) GetWhen() string`

GetWhen returns the When field if non-nil, zero value otherwise.

### GetWhenOk

`func (o *LatestHeadlinesRequest) GetWhenOk() (*string, bool)`

GetWhenOk returns a tuple with the When field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhen

`func (o *LatestHeadlinesRequest) SetWhen(v string)`

SetWhen sets When field to given value.

### HasWhen

`func (o *LatestHeadlinesRequest) HasWhen() bool`

HasWhen returns a boolean if a field has been set.

### GetByParseDate

`func (o *LatestHeadlinesRequest) GetByParseDate() bool`

GetByParseDate returns the ByParseDate field if non-nil, zero value otherwise.

### GetByParseDateOk

`func (o *LatestHeadlinesRequest) GetByParseDateOk() (*bool, bool)`

GetByParseDateOk returns a tuple with the ByParseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetByParseDate

`func (o *LatestHeadlinesRequest) SetByParseDate(v bool)`

SetByParseDate sets ByParseDate field to given value.

### HasByParseDate

`func (o *LatestHeadlinesRequest) HasByParseDate() bool`

HasByParseDate returns a boolean if a field has been set.

### GetLang

`func (o *LatestHeadlinesRequest) GetLang() interface{}`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *LatestHeadlinesRequest) GetLangOk() (*interface{}, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *LatestHeadlinesRequest) SetLang(v interface{})`

SetLang sets Lang field to given value.

### HasLang

`func (o *LatestHeadlinesRequest) HasLang() bool`

HasLang returns a boolean if a field has been set.

### SetLangNil

`func (o *LatestHeadlinesRequest) SetLangNil(b bool)`

 SetLangNil sets the value for Lang to be an explicit nil

### UnsetLang
`func (o *LatestHeadlinesRequest) UnsetLang()`

UnsetLang ensures that no value is present for Lang, not even an explicit nil
### GetNotLang

`func (o *LatestHeadlinesRequest) GetNotLang() interface{}`

GetNotLang returns the NotLang field if non-nil, zero value otherwise.

### GetNotLangOk

`func (o *LatestHeadlinesRequest) GetNotLangOk() (*interface{}, bool)`

GetNotLangOk returns a tuple with the NotLang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotLang

`func (o *LatestHeadlinesRequest) SetNotLang(v interface{})`

SetNotLang sets NotLang field to given value.

### HasNotLang

`func (o *LatestHeadlinesRequest) HasNotLang() bool`

HasNotLang returns a boolean if a field has been set.

### SetNotLangNil

`func (o *LatestHeadlinesRequest) SetNotLangNil(b bool)`

 SetNotLangNil sets the value for NotLang to be an explicit nil

### UnsetNotLang
`func (o *LatestHeadlinesRequest) UnsetNotLang()`

UnsetNotLang ensures that no value is present for NotLang, not even an explicit nil
### GetCountries

`func (o *LatestHeadlinesRequest) GetCountries() interface{}`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *LatestHeadlinesRequest) GetCountriesOk() (*interface{}, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *LatestHeadlinesRequest) SetCountries(v interface{})`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *LatestHeadlinesRequest) HasCountries() bool`

HasCountries returns a boolean if a field has been set.

### SetCountriesNil

`func (o *LatestHeadlinesRequest) SetCountriesNil(b bool)`

 SetCountriesNil sets the value for Countries to be an explicit nil

### UnsetCountries
`func (o *LatestHeadlinesRequest) UnsetCountries()`

UnsetCountries ensures that no value is present for Countries, not even an explicit nil
### GetNotCountries

`func (o *LatestHeadlinesRequest) GetNotCountries() interface{}`

GetNotCountries returns the NotCountries field if non-nil, zero value otherwise.

### GetNotCountriesOk

`func (o *LatestHeadlinesRequest) GetNotCountriesOk() (*interface{}, bool)`

GetNotCountriesOk returns a tuple with the NotCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotCountries

`func (o *LatestHeadlinesRequest) SetNotCountries(v interface{})`

SetNotCountries sets NotCountries field to given value.

### HasNotCountries

`func (o *LatestHeadlinesRequest) HasNotCountries() bool`

HasNotCountries returns a boolean if a field has been set.

### SetNotCountriesNil

`func (o *LatestHeadlinesRequest) SetNotCountriesNil(b bool)`

 SetNotCountriesNil sets the value for NotCountries to be an explicit nil

### UnsetNotCountries
`func (o *LatestHeadlinesRequest) UnsetNotCountries()`

UnsetNotCountries ensures that no value is present for NotCountries, not even an explicit nil
### GetSources

`func (o *LatestHeadlinesRequest) GetSources() interface{}`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *LatestHeadlinesRequest) GetSourcesOk() (*interface{}, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *LatestHeadlinesRequest) SetSources(v interface{})`

SetSources sets Sources field to given value.

### HasSources

`func (o *LatestHeadlinesRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.

### SetSourcesNil

`func (o *LatestHeadlinesRequest) SetSourcesNil(b bool)`

 SetSourcesNil sets the value for Sources to be an explicit nil

### UnsetSources
`func (o *LatestHeadlinesRequest) UnsetSources()`

UnsetSources ensures that no value is present for Sources, not even an explicit nil
### GetPredefinedSources

`func (o *LatestHeadlinesRequest) GetPredefinedSources() interface{}`

GetPredefinedSources returns the PredefinedSources field if non-nil, zero value otherwise.

### GetPredefinedSourcesOk

`func (o *LatestHeadlinesRequest) GetPredefinedSourcesOk() (*interface{}, bool)`

GetPredefinedSourcesOk returns a tuple with the PredefinedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredefinedSources

`func (o *LatestHeadlinesRequest) SetPredefinedSources(v interface{})`

SetPredefinedSources sets PredefinedSources field to given value.

### HasPredefinedSources

`func (o *LatestHeadlinesRequest) HasPredefinedSources() bool`

HasPredefinedSources returns a boolean if a field has been set.

### SetPredefinedSourcesNil

`func (o *LatestHeadlinesRequest) SetPredefinedSourcesNil(b bool)`

 SetPredefinedSourcesNil sets the value for PredefinedSources to be an explicit nil

### UnsetPredefinedSources
`func (o *LatestHeadlinesRequest) UnsetPredefinedSources()`

UnsetPredefinedSources ensures that no value is present for PredefinedSources, not even an explicit nil
### GetNotSources

`func (o *LatestHeadlinesRequest) GetNotSources() interface{}`

GetNotSources returns the NotSources field if non-nil, zero value otherwise.

### GetNotSourcesOk

`func (o *LatestHeadlinesRequest) GetNotSourcesOk() (*interface{}, bool)`

GetNotSourcesOk returns a tuple with the NotSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotSources

`func (o *LatestHeadlinesRequest) SetNotSources(v interface{})`

SetNotSources sets NotSources field to given value.

### HasNotSources

`func (o *LatestHeadlinesRequest) HasNotSources() bool`

HasNotSources returns a boolean if a field has been set.

### SetNotSourcesNil

`func (o *LatestHeadlinesRequest) SetNotSourcesNil(b bool)`

 SetNotSourcesNil sets the value for NotSources to be an explicit nil

### UnsetNotSources
`func (o *LatestHeadlinesRequest) UnsetNotSources()`

UnsetNotSources ensures that no value is present for NotSources, not even an explicit nil
### GetNotAuthorName

`func (o *LatestHeadlinesRequest) GetNotAuthorName() interface{}`

GetNotAuthorName returns the NotAuthorName field if non-nil, zero value otherwise.

### GetNotAuthorNameOk

`func (o *LatestHeadlinesRequest) GetNotAuthorNameOk() (*interface{}, bool)`

GetNotAuthorNameOk returns a tuple with the NotAuthorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotAuthorName

`func (o *LatestHeadlinesRequest) SetNotAuthorName(v interface{})`

SetNotAuthorName sets NotAuthorName field to given value.

### HasNotAuthorName

`func (o *LatestHeadlinesRequest) HasNotAuthorName() bool`

HasNotAuthorName returns a boolean if a field has been set.

### SetNotAuthorNameNil

`func (o *LatestHeadlinesRequest) SetNotAuthorNameNil(b bool)`

 SetNotAuthorNameNil sets the value for NotAuthorName to be an explicit nil

### UnsetNotAuthorName
`func (o *LatestHeadlinesRequest) UnsetNotAuthorName()`

UnsetNotAuthorName ensures that no value is present for NotAuthorName, not even an explicit nil
### GetRankedOnly

`func (o *LatestHeadlinesRequest) GetRankedOnly() string`

GetRankedOnly returns the RankedOnly field if non-nil, zero value otherwise.

### GetRankedOnlyOk

`func (o *LatestHeadlinesRequest) GetRankedOnlyOk() (*string, bool)`

GetRankedOnlyOk returns a tuple with the RankedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRankedOnly

`func (o *LatestHeadlinesRequest) SetRankedOnly(v string)`

SetRankedOnly sets RankedOnly field to given value.

### HasRankedOnly

`func (o *LatestHeadlinesRequest) HasRankedOnly() bool`

HasRankedOnly returns a boolean if a field has been set.

### GetIsHeadline

`func (o *LatestHeadlinesRequest) GetIsHeadline() bool`

GetIsHeadline returns the IsHeadline field if non-nil, zero value otherwise.

### GetIsHeadlineOk

`func (o *LatestHeadlinesRequest) GetIsHeadlineOk() (*bool, bool)`

GetIsHeadlineOk returns a tuple with the IsHeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHeadline

`func (o *LatestHeadlinesRequest) SetIsHeadline(v bool)`

SetIsHeadline sets IsHeadline field to given value.

### HasIsHeadline

`func (o *LatestHeadlinesRequest) HasIsHeadline() bool`

HasIsHeadline returns a boolean if a field has been set.

### GetIsOpinion

`func (o *LatestHeadlinesRequest) GetIsOpinion() bool`

GetIsOpinion returns the IsOpinion field if non-nil, zero value otherwise.

### GetIsOpinionOk

`func (o *LatestHeadlinesRequest) GetIsOpinionOk() (*bool, bool)`

GetIsOpinionOk returns a tuple with the IsOpinion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOpinion

`func (o *LatestHeadlinesRequest) SetIsOpinion(v bool)`

SetIsOpinion sets IsOpinion field to given value.

### HasIsOpinion

`func (o *LatestHeadlinesRequest) HasIsOpinion() bool`

HasIsOpinion returns a boolean if a field has been set.

### GetIsPaidContent

`func (o *LatestHeadlinesRequest) GetIsPaidContent() bool`

GetIsPaidContent returns the IsPaidContent field if non-nil, zero value otherwise.

### GetIsPaidContentOk

`func (o *LatestHeadlinesRequest) GetIsPaidContentOk() (*bool, bool)`

GetIsPaidContentOk returns a tuple with the IsPaidContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPaidContent

`func (o *LatestHeadlinesRequest) SetIsPaidContent(v bool)`

SetIsPaidContent sets IsPaidContent field to given value.

### HasIsPaidContent

`func (o *LatestHeadlinesRequest) HasIsPaidContent() bool`

HasIsPaidContent returns a boolean if a field has been set.

### GetParentUrl

`func (o *LatestHeadlinesRequest) GetParentUrl() interface{}`

GetParentUrl returns the ParentUrl field if non-nil, zero value otherwise.

### GetParentUrlOk

`func (o *LatestHeadlinesRequest) GetParentUrlOk() (*interface{}, bool)`

GetParentUrlOk returns a tuple with the ParentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentUrl

`func (o *LatestHeadlinesRequest) SetParentUrl(v interface{})`

SetParentUrl sets ParentUrl field to given value.

### HasParentUrl

`func (o *LatestHeadlinesRequest) HasParentUrl() bool`

HasParentUrl returns a boolean if a field has been set.

### SetParentUrlNil

`func (o *LatestHeadlinesRequest) SetParentUrlNil(b bool)`

 SetParentUrlNil sets the value for ParentUrl to be an explicit nil

### UnsetParentUrl
`func (o *LatestHeadlinesRequest) UnsetParentUrl()`

UnsetParentUrl ensures that no value is present for ParentUrl, not even an explicit nil
### GetAllLinks

`func (o *LatestHeadlinesRequest) GetAllLinks() interface{}`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *LatestHeadlinesRequest) GetAllLinksOk() (*interface{}, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *LatestHeadlinesRequest) SetAllLinks(v interface{})`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *LatestHeadlinesRequest) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### SetAllLinksNil

`func (o *LatestHeadlinesRequest) SetAllLinksNil(b bool)`

 SetAllLinksNil sets the value for AllLinks to be an explicit nil

### UnsetAllLinks
`func (o *LatestHeadlinesRequest) UnsetAllLinks()`

UnsetAllLinks ensures that no value is present for AllLinks, not even an explicit nil
### GetAllDomainLinks

`func (o *LatestHeadlinesRequest) GetAllDomainLinks() interface{}`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *LatestHeadlinesRequest) GetAllDomainLinksOk() (*interface{}, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *LatestHeadlinesRequest) SetAllDomainLinks(v interface{})`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *LatestHeadlinesRequest) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### SetAllDomainLinksNil

`func (o *LatestHeadlinesRequest) SetAllDomainLinksNil(b bool)`

 SetAllDomainLinksNil sets the value for AllDomainLinks to be an explicit nil

### UnsetAllDomainLinks
`func (o *LatestHeadlinesRequest) UnsetAllDomainLinks()`

UnsetAllDomainLinks ensures that no value is present for AllDomainLinks, not even an explicit nil
### GetWordCountMin

`func (o *LatestHeadlinesRequest) GetWordCountMin() int32`

GetWordCountMin returns the WordCountMin field if non-nil, zero value otherwise.

### GetWordCountMinOk

`func (o *LatestHeadlinesRequest) GetWordCountMinOk() (*int32, bool)`

GetWordCountMinOk returns a tuple with the WordCountMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCountMin

`func (o *LatestHeadlinesRequest) SetWordCountMin(v int32)`

SetWordCountMin sets WordCountMin field to given value.

### HasWordCountMin

`func (o *LatestHeadlinesRequest) HasWordCountMin() bool`

HasWordCountMin returns a boolean if a field has been set.

### GetWordCountMax

`func (o *LatestHeadlinesRequest) GetWordCountMax() int32`

GetWordCountMax returns the WordCountMax field if non-nil, zero value otherwise.

### GetWordCountMaxOk

`func (o *LatestHeadlinesRequest) GetWordCountMaxOk() (*int32, bool)`

GetWordCountMaxOk returns a tuple with the WordCountMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCountMax

`func (o *LatestHeadlinesRequest) SetWordCountMax(v int32)`

SetWordCountMax sets WordCountMax field to given value.

### HasWordCountMax

`func (o *LatestHeadlinesRequest) HasWordCountMax() bool`

HasWordCountMax returns a boolean if a field has been set.

### GetPage

`func (o *LatestHeadlinesRequest) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *LatestHeadlinesRequest) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *LatestHeadlinesRequest) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *LatestHeadlinesRequest) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetPageSize

`func (o *LatestHeadlinesRequest) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *LatestHeadlinesRequest) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *LatestHeadlinesRequest) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *LatestHeadlinesRequest) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetClusteringVariable

`func (o *LatestHeadlinesRequest) GetClusteringVariable() string`

GetClusteringVariable returns the ClusteringVariable field if non-nil, zero value otherwise.

### GetClusteringVariableOk

`func (o *LatestHeadlinesRequest) GetClusteringVariableOk() (*string, bool)`

GetClusteringVariableOk returns a tuple with the ClusteringVariable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusteringVariable

`func (o *LatestHeadlinesRequest) SetClusteringVariable(v string)`

SetClusteringVariable sets ClusteringVariable field to given value.

### HasClusteringVariable

`func (o *LatestHeadlinesRequest) HasClusteringVariable() bool`

HasClusteringVariable returns a boolean if a field has been set.

### GetClusteringEnabled

`func (o *LatestHeadlinesRequest) GetClusteringEnabled() bool`

GetClusteringEnabled returns the ClusteringEnabled field if non-nil, zero value otherwise.

### GetClusteringEnabledOk

`func (o *LatestHeadlinesRequest) GetClusteringEnabledOk() (*bool, bool)`

GetClusteringEnabledOk returns a tuple with the ClusteringEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusteringEnabled

`func (o *LatestHeadlinesRequest) SetClusteringEnabled(v bool)`

SetClusteringEnabled sets ClusteringEnabled field to given value.

### HasClusteringEnabled

`func (o *LatestHeadlinesRequest) HasClusteringEnabled() bool`

HasClusteringEnabled returns a boolean if a field has been set.

### GetClusteringThreshold

`func (o *LatestHeadlinesRequest) GetClusteringThreshold() float32`

GetClusteringThreshold returns the ClusteringThreshold field if non-nil, zero value otherwise.

### GetClusteringThresholdOk

`func (o *LatestHeadlinesRequest) GetClusteringThresholdOk() (*float32, bool)`

GetClusteringThresholdOk returns a tuple with the ClusteringThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusteringThreshold

`func (o *LatestHeadlinesRequest) SetClusteringThreshold(v float32)`

SetClusteringThreshold sets ClusteringThreshold field to given value.

### HasClusteringThreshold

`func (o *LatestHeadlinesRequest) HasClusteringThreshold() bool`

HasClusteringThreshold returns a boolean if a field has been set.

### GetIncludeNlpData

`func (o *LatestHeadlinesRequest) GetIncludeNlpData() bool`

GetIncludeNlpData returns the IncludeNlpData field if non-nil, zero value otherwise.

### GetIncludeNlpDataOk

`func (o *LatestHeadlinesRequest) GetIncludeNlpDataOk() (*bool, bool)`

GetIncludeNlpDataOk returns a tuple with the IncludeNlpData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNlpData

`func (o *LatestHeadlinesRequest) SetIncludeNlpData(v bool)`

SetIncludeNlpData sets IncludeNlpData field to given value.

### HasIncludeNlpData

`func (o *LatestHeadlinesRequest) HasIncludeNlpData() bool`

HasIncludeNlpData returns a boolean if a field has been set.

### GetHasNlp

`func (o *LatestHeadlinesRequest) GetHasNlp() bool`

GetHasNlp returns the HasNlp field if non-nil, zero value otherwise.

### GetHasNlpOk

`func (o *LatestHeadlinesRequest) GetHasNlpOk() (*bool, bool)`

GetHasNlpOk returns a tuple with the HasNlp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNlp

`func (o *LatestHeadlinesRequest) SetHasNlp(v bool)`

SetHasNlp sets HasNlp field to given value.

### HasHasNlp

`func (o *LatestHeadlinesRequest) HasHasNlp() bool`

HasHasNlp returns a boolean if a field has been set.

### GetTheme

`func (o *LatestHeadlinesRequest) GetTheme() string`

GetTheme returns the Theme field if non-nil, zero value otherwise.

### GetThemeOk

`func (o *LatestHeadlinesRequest) GetThemeOk() (*string, bool)`

GetThemeOk returns a tuple with the Theme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTheme

`func (o *LatestHeadlinesRequest) SetTheme(v string)`

SetTheme sets Theme field to given value.

### HasTheme

`func (o *LatestHeadlinesRequest) HasTheme() bool`

HasTheme returns a boolean if a field has been set.

### GetNotTheme

`func (o *LatestHeadlinesRequest) GetNotTheme() string`

GetNotTheme returns the NotTheme field if non-nil, zero value otherwise.

### GetNotThemeOk

`func (o *LatestHeadlinesRequest) GetNotThemeOk() (*string, bool)`

GetNotThemeOk returns a tuple with the NotTheme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotTheme

`func (o *LatestHeadlinesRequest) SetNotTheme(v string)`

SetNotTheme sets NotTheme field to given value.

### HasNotTheme

`func (o *LatestHeadlinesRequest) HasNotTheme() bool`

HasNotTheme returns a boolean if a field has been set.

### GetORGEntityName

`func (o *LatestHeadlinesRequest) GetORGEntityName() string`

GetORGEntityName returns the ORGEntityName field if non-nil, zero value otherwise.

### GetORGEntityNameOk

`func (o *LatestHeadlinesRequest) GetORGEntityNameOk() (*string, bool)`

GetORGEntityNameOk returns a tuple with the ORGEntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetORGEntityName

`func (o *LatestHeadlinesRequest) SetORGEntityName(v string)`

SetORGEntityName sets ORGEntityName field to given value.

### HasORGEntityName

`func (o *LatestHeadlinesRequest) HasORGEntityName() bool`

HasORGEntityName returns a boolean if a field has been set.

### GetPEREntityName

`func (o *LatestHeadlinesRequest) GetPEREntityName() string`

GetPEREntityName returns the PEREntityName field if non-nil, zero value otherwise.

### GetPEREntityNameOk

`func (o *LatestHeadlinesRequest) GetPEREntityNameOk() (*string, bool)`

GetPEREntityNameOk returns a tuple with the PEREntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPEREntityName

`func (o *LatestHeadlinesRequest) SetPEREntityName(v string)`

SetPEREntityName sets PEREntityName field to given value.

### HasPEREntityName

`func (o *LatestHeadlinesRequest) HasPEREntityName() bool`

HasPEREntityName returns a boolean if a field has been set.

### GetLOCEntityName

`func (o *LatestHeadlinesRequest) GetLOCEntityName() string`

GetLOCEntityName returns the LOCEntityName field if non-nil, zero value otherwise.

### GetLOCEntityNameOk

`func (o *LatestHeadlinesRequest) GetLOCEntityNameOk() (*string, bool)`

GetLOCEntityNameOk returns a tuple with the LOCEntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOCEntityName

`func (o *LatestHeadlinesRequest) SetLOCEntityName(v string)`

SetLOCEntityName sets LOCEntityName field to given value.

### HasLOCEntityName

`func (o *LatestHeadlinesRequest) HasLOCEntityName() bool`

HasLOCEntityName returns a boolean if a field has been set.

### GetMISCEntityName

`func (o *LatestHeadlinesRequest) GetMISCEntityName() string`

GetMISCEntityName returns the MISCEntityName field if non-nil, zero value otherwise.

### GetMISCEntityNameOk

`func (o *LatestHeadlinesRequest) GetMISCEntityNameOk() (*string, bool)`

GetMISCEntityNameOk returns a tuple with the MISCEntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMISCEntityName

`func (o *LatestHeadlinesRequest) SetMISCEntityName(v string)`

SetMISCEntityName sets MISCEntityName field to given value.

### HasMISCEntityName

`func (o *LatestHeadlinesRequest) HasMISCEntityName() bool`

HasMISCEntityName returns a boolean if a field has been set.

### GetTitleSentimentMin

`func (o *LatestHeadlinesRequest) GetTitleSentimentMin() float32`

GetTitleSentimentMin returns the TitleSentimentMin field if non-nil, zero value otherwise.

### GetTitleSentimentMinOk

`func (o *LatestHeadlinesRequest) GetTitleSentimentMinOk() (*float32, bool)`

GetTitleSentimentMinOk returns a tuple with the TitleSentimentMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitleSentimentMin

`func (o *LatestHeadlinesRequest) SetTitleSentimentMin(v float32)`

SetTitleSentimentMin sets TitleSentimentMin field to given value.

### HasTitleSentimentMin

`func (o *LatestHeadlinesRequest) HasTitleSentimentMin() bool`

HasTitleSentimentMin returns a boolean if a field has been set.

### GetTitleSentimentMax

`func (o *LatestHeadlinesRequest) GetTitleSentimentMax() float32`

GetTitleSentimentMax returns the TitleSentimentMax field if non-nil, zero value otherwise.

### GetTitleSentimentMaxOk

`func (o *LatestHeadlinesRequest) GetTitleSentimentMaxOk() (*float32, bool)`

GetTitleSentimentMaxOk returns a tuple with the TitleSentimentMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitleSentimentMax

`func (o *LatestHeadlinesRequest) SetTitleSentimentMax(v float32)`

SetTitleSentimentMax sets TitleSentimentMax field to given value.

### HasTitleSentimentMax

`func (o *LatestHeadlinesRequest) HasTitleSentimentMax() bool`

HasTitleSentimentMax returns a boolean if a field has been set.

### GetContentSentimentMin

`func (o *LatestHeadlinesRequest) GetContentSentimentMin() float32`

GetContentSentimentMin returns the ContentSentimentMin field if non-nil, zero value otherwise.

### GetContentSentimentMinOk

`func (o *LatestHeadlinesRequest) GetContentSentimentMinOk() (*float32, bool)`

GetContentSentimentMinOk returns a tuple with the ContentSentimentMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSentimentMin

`func (o *LatestHeadlinesRequest) SetContentSentimentMin(v float32)`

SetContentSentimentMin sets ContentSentimentMin field to given value.

### HasContentSentimentMin

`func (o *LatestHeadlinesRequest) HasContentSentimentMin() bool`

HasContentSentimentMin returns a boolean if a field has been set.

### GetContentSentimentMax

`func (o *LatestHeadlinesRequest) GetContentSentimentMax() float32`

GetContentSentimentMax returns the ContentSentimentMax field if non-nil, zero value otherwise.

### GetContentSentimentMaxOk

`func (o *LatestHeadlinesRequest) GetContentSentimentMaxOk() (*float32, bool)`

GetContentSentimentMaxOk returns a tuple with the ContentSentimentMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSentimentMax

`func (o *LatestHeadlinesRequest) SetContentSentimentMax(v float32)`

SetContentSentimentMax sets ContentSentimentMax field to given value.

### HasContentSentimentMax

`func (o *LatestHeadlinesRequest) HasContentSentimentMax() bool`

HasContentSentimentMax returns a boolean if a field has been set.

### GetIptcTags

`func (o *LatestHeadlinesRequest) GetIptcTags() interface{}`

GetIptcTags returns the IptcTags field if non-nil, zero value otherwise.

### GetIptcTagsOk

`func (o *LatestHeadlinesRequest) GetIptcTagsOk() (*interface{}, bool)`

GetIptcTagsOk returns a tuple with the IptcTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIptcTags

`func (o *LatestHeadlinesRequest) SetIptcTags(v interface{})`

SetIptcTags sets IptcTags field to given value.

### HasIptcTags

`func (o *LatestHeadlinesRequest) HasIptcTags() bool`

HasIptcTags returns a boolean if a field has been set.

### SetIptcTagsNil

`func (o *LatestHeadlinesRequest) SetIptcTagsNil(b bool)`

 SetIptcTagsNil sets the value for IptcTags to be an explicit nil

### UnsetIptcTags
`func (o *LatestHeadlinesRequest) UnsetIptcTags()`

UnsetIptcTags ensures that no value is present for IptcTags, not even an explicit nil
### GetNotIptcTags

`func (o *LatestHeadlinesRequest) GetNotIptcTags() interface{}`

GetNotIptcTags returns the NotIptcTags field if non-nil, zero value otherwise.

### GetNotIptcTagsOk

`func (o *LatestHeadlinesRequest) GetNotIptcTagsOk() (*interface{}, bool)`

GetNotIptcTagsOk returns a tuple with the NotIptcTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotIptcTags

`func (o *LatestHeadlinesRequest) SetNotIptcTags(v interface{})`

SetNotIptcTags sets NotIptcTags field to given value.

### HasNotIptcTags

`func (o *LatestHeadlinesRequest) HasNotIptcTags() bool`

HasNotIptcTags returns a boolean if a field has been set.

### SetNotIptcTagsNil

`func (o *LatestHeadlinesRequest) SetNotIptcTagsNil(b bool)`

 SetNotIptcTagsNil sets the value for NotIptcTags to be an explicit nil

### UnsetNotIptcTags
`func (o *LatestHeadlinesRequest) UnsetNotIptcTags()`

UnsetNotIptcTags ensures that no value is present for NotIptcTags, not even an explicit nil
### GetIabTags

`func (o *LatestHeadlinesRequest) GetIabTags() interface{}`

GetIabTags returns the IabTags field if non-nil, zero value otherwise.

### GetIabTagsOk

`func (o *LatestHeadlinesRequest) GetIabTagsOk() (*interface{}, bool)`

GetIabTagsOk returns a tuple with the IabTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIabTags

`func (o *LatestHeadlinesRequest) SetIabTags(v interface{})`

SetIabTags sets IabTags field to given value.

### HasIabTags

`func (o *LatestHeadlinesRequest) HasIabTags() bool`

HasIabTags returns a boolean if a field has been set.

### SetIabTagsNil

`func (o *LatestHeadlinesRequest) SetIabTagsNil(b bool)`

 SetIabTagsNil sets the value for IabTags to be an explicit nil

### UnsetIabTags
`func (o *LatestHeadlinesRequest) UnsetIabTags()`

UnsetIabTags ensures that no value is present for IabTags, not even an explicit nil
### GetNotIabTags

`func (o *LatestHeadlinesRequest) GetNotIabTags() interface{}`

GetNotIabTags returns the NotIabTags field if non-nil, zero value otherwise.

### GetNotIabTagsOk

`func (o *LatestHeadlinesRequest) GetNotIabTagsOk() (*interface{}, bool)`

GetNotIabTagsOk returns a tuple with the NotIabTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotIabTags

`func (o *LatestHeadlinesRequest) SetNotIabTags(v interface{})`

SetNotIabTags sets NotIabTags field to given value.

### HasNotIabTags

`func (o *LatestHeadlinesRequest) HasNotIabTags() bool`

HasNotIabTags returns a boolean if a field has been set.

### SetNotIabTagsNil

`func (o *LatestHeadlinesRequest) SetNotIabTagsNil(b bool)`

 SetNotIabTagsNil sets the value for NotIabTags to be an explicit nil

### UnsetNotIabTags
`func (o *LatestHeadlinesRequest) UnsetNotIabTags()`

UnsetNotIabTags ensures that no value is present for NotIabTags, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


