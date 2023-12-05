# LatestHeadlinesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**When** | Pointer to **string** |  | [optional] [default to "7d"]
**ByParseDate** | Pointer to **bool** |  | [optional] [default to false]
**Lang** | Pointer to **string** |  | [optional] 
**NotLang** | Pointer to **string** |  | [optional] 
**Countries** | Pointer to **string** |  | [optional] 
**NotCountries** | Pointer to **string** |  | [optional] 
**Sources** | Pointer to **string** |  | [optional] 
**PredefinedSources** | Pointer to **string** |  | [optional] 
**NotSources** | Pointer to **string** |  | [optional] 
**RankedOnly** | Pointer to **string** |  | [optional] 
**IsHeadline** | Pointer to **bool** |  | [optional] 
**IsPaidContent** | Pointer to **bool** |  | [optional] 
**ParentUrl** | Pointer to **string** |  | [optional] 
**Theme** | Pointer to **string** |  | [optional] 
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
**ORGEntityName** | Pointer to **string** |  | [optional] 
**PEREntityName** | Pointer to **string** |  | [optional] 
**LOCEntityName** | Pointer to **string** |  | [optional] 
**MISCEntityName** | Pointer to **string** |  | [optional] 
**TitleSentimentMin** | Pointer to **float32** |  | [optional] 
**TitleSentimentMax** | Pointer to **float32** |  | [optional] 
**ContentSentimentMin** | Pointer to **float32** |  | [optional] 
**ContentSentimentMax** | Pointer to **float32** |  | [optional] 

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

`func (o *LatestHeadlinesRequest) GetLang() string`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *LatestHeadlinesRequest) GetLangOk() (*string, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *LatestHeadlinesRequest) SetLang(v string)`

SetLang sets Lang field to given value.

### HasLang

`func (o *LatestHeadlinesRequest) HasLang() bool`

HasLang returns a boolean if a field has been set.

### GetNotLang

`func (o *LatestHeadlinesRequest) GetNotLang() string`

GetNotLang returns the NotLang field if non-nil, zero value otherwise.

### GetNotLangOk

`func (o *LatestHeadlinesRequest) GetNotLangOk() (*string, bool)`

GetNotLangOk returns a tuple with the NotLang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotLang

`func (o *LatestHeadlinesRequest) SetNotLang(v string)`

SetNotLang sets NotLang field to given value.

### HasNotLang

`func (o *LatestHeadlinesRequest) HasNotLang() bool`

HasNotLang returns a boolean if a field has been set.

### GetCountries

`func (o *LatestHeadlinesRequest) GetCountries() string`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *LatestHeadlinesRequest) GetCountriesOk() (*string, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *LatestHeadlinesRequest) SetCountries(v string)`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *LatestHeadlinesRequest) HasCountries() bool`

HasCountries returns a boolean if a field has been set.

### GetNotCountries

`func (o *LatestHeadlinesRequest) GetNotCountries() string`

GetNotCountries returns the NotCountries field if non-nil, zero value otherwise.

### GetNotCountriesOk

`func (o *LatestHeadlinesRequest) GetNotCountriesOk() (*string, bool)`

GetNotCountriesOk returns a tuple with the NotCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotCountries

`func (o *LatestHeadlinesRequest) SetNotCountries(v string)`

SetNotCountries sets NotCountries field to given value.

### HasNotCountries

`func (o *LatestHeadlinesRequest) HasNotCountries() bool`

HasNotCountries returns a boolean if a field has been set.

### GetSources

`func (o *LatestHeadlinesRequest) GetSources() string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *LatestHeadlinesRequest) GetSourcesOk() (*string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *LatestHeadlinesRequest) SetSources(v string)`

SetSources sets Sources field to given value.

### HasSources

`func (o *LatestHeadlinesRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetPredefinedSources

`func (o *LatestHeadlinesRequest) GetPredefinedSources() string`

GetPredefinedSources returns the PredefinedSources field if non-nil, zero value otherwise.

### GetPredefinedSourcesOk

`func (o *LatestHeadlinesRequest) GetPredefinedSourcesOk() (*string, bool)`

GetPredefinedSourcesOk returns a tuple with the PredefinedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredefinedSources

`func (o *LatestHeadlinesRequest) SetPredefinedSources(v string)`

SetPredefinedSources sets PredefinedSources field to given value.

### HasPredefinedSources

`func (o *LatestHeadlinesRequest) HasPredefinedSources() bool`

HasPredefinedSources returns a boolean if a field has been set.

### GetNotSources

`func (o *LatestHeadlinesRequest) GetNotSources() string`

GetNotSources returns the NotSources field if non-nil, zero value otherwise.

### GetNotSourcesOk

`func (o *LatestHeadlinesRequest) GetNotSourcesOk() (*string, bool)`

GetNotSourcesOk returns a tuple with the NotSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotSources

`func (o *LatestHeadlinesRequest) SetNotSources(v string)`

SetNotSources sets NotSources field to given value.

### HasNotSources

`func (o *LatestHeadlinesRequest) HasNotSources() bool`

HasNotSources returns a boolean if a field has been set.

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

`func (o *LatestHeadlinesRequest) GetParentUrl() string`

GetParentUrl returns the ParentUrl field if non-nil, zero value otherwise.

### GetParentUrlOk

`func (o *LatestHeadlinesRequest) GetParentUrlOk() (*string, bool)`

GetParentUrlOk returns a tuple with the ParentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentUrl

`func (o *LatestHeadlinesRequest) SetParentUrl(v string)`

SetParentUrl sets ParentUrl field to given value.

### HasParentUrl

`func (o *LatestHeadlinesRequest) HasParentUrl() bool`

HasParentUrl returns a boolean if a field has been set.

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

### GetAllLinks

`func (o *LatestHeadlinesRequest) GetAllLinks() string`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *LatestHeadlinesRequest) GetAllLinksOk() (*string, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *LatestHeadlinesRequest) SetAllLinks(v string)`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *LatestHeadlinesRequest) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### GetAllDomainLinks

`func (o *LatestHeadlinesRequest) GetAllDomainLinks() string`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *LatestHeadlinesRequest) GetAllDomainLinksOk() (*string, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *LatestHeadlinesRequest) SetAllDomainLinks(v string)`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *LatestHeadlinesRequest) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


