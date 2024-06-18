# AuthorSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorName** | **string** |  | 
**NotAuthorName** | Pointer to **string** |  | [optional] 
**Sources** | Pointer to **interface{}** |  | [optional] 
**PredefinedSources** | Pointer to **interface{}** |  | [optional] 
**NotSources** | Pointer to **interface{}** |  | [optional] 
**Lang** | Pointer to **interface{}** |  | [optional] 
**NotLang** | Pointer to **interface{}** |  | [optional] 
**Countries** | Pointer to **interface{}** |  | [optional] 
**NotCountries** | Pointer to **interface{}** |  | [optional] 
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
**IncludeNlpData** | Pointer to **bool** |  | [optional] 
**HasNlp** | Pointer to **bool** |  | [optional] 
**Theme** | Pointer to **string** |  | [optional] 
**NotTheme** | Pointer to **string** |  | [optional] 
**NerName** | Pointer to **string** |  | [optional] 
**TitleSentimentMin** | Pointer to **float32** |  | [optional] 
**TitleSentimentMax** | Pointer to **float32** |  | [optional] 
**ContentSentimentMin** | Pointer to **float32** |  | [optional] 
**ContentSentimentMax** | Pointer to **float32** |  | [optional] 
**IptcTags** | Pointer to **interface{}** |  | [optional] 
**NotIptcTags** | Pointer to **interface{}** |  | [optional] 
**IabTags** | Pointer to **interface{}** |  | [optional] 
**NotIabTags** | Pointer to **interface{}** |  | [optional] 

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


### GetNotAuthorName

`func (o *AuthorSearchRequest) GetNotAuthorName() string`

GetNotAuthorName returns the NotAuthorName field if non-nil, zero value otherwise.

### GetNotAuthorNameOk

`func (o *AuthorSearchRequest) GetNotAuthorNameOk() (*string, bool)`

GetNotAuthorNameOk returns a tuple with the NotAuthorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotAuthorName

`func (o *AuthorSearchRequest) SetNotAuthorName(v string)`

SetNotAuthorName sets NotAuthorName field to given value.

### HasNotAuthorName

`func (o *AuthorSearchRequest) HasNotAuthorName() bool`

HasNotAuthorName returns a boolean if a field has been set.

### GetSources

`func (o *AuthorSearchRequest) GetSources() interface{}`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *AuthorSearchRequest) GetSourcesOk() (*interface{}, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *AuthorSearchRequest) SetSources(v interface{})`

SetSources sets Sources field to given value.

### HasSources

`func (o *AuthorSearchRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.

### SetSourcesNil

`func (o *AuthorSearchRequest) SetSourcesNil(b bool)`

 SetSourcesNil sets the value for Sources to be an explicit nil

### UnsetSources
`func (o *AuthorSearchRequest) UnsetSources()`

UnsetSources ensures that no value is present for Sources, not even an explicit nil
### GetPredefinedSources

`func (o *AuthorSearchRequest) GetPredefinedSources() interface{}`

GetPredefinedSources returns the PredefinedSources field if non-nil, zero value otherwise.

### GetPredefinedSourcesOk

`func (o *AuthorSearchRequest) GetPredefinedSourcesOk() (*interface{}, bool)`

GetPredefinedSourcesOk returns a tuple with the PredefinedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredefinedSources

`func (o *AuthorSearchRequest) SetPredefinedSources(v interface{})`

SetPredefinedSources sets PredefinedSources field to given value.

### HasPredefinedSources

`func (o *AuthorSearchRequest) HasPredefinedSources() bool`

HasPredefinedSources returns a boolean if a field has been set.

### SetPredefinedSourcesNil

`func (o *AuthorSearchRequest) SetPredefinedSourcesNil(b bool)`

 SetPredefinedSourcesNil sets the value for PredefinedSources to be an explicit nil

### UnsetPredefinedSources
`func (o *AuthorSearchRequest) UnsetPredefinedSources()`

UnsetPredefinedSources ensures that no value is present for PredefinedSources, not even an explicit nil
### GetNotSources

`func (o *AuthorSearchRequest) GetNotSources() interface{}`

GetNotSources returns the NotSources field if non-nil, zero value otherwise.

### GetNotSourcesOk

`func (o *AuthorSearchRequest) GetNotSourcesOk() (*interface{}, bool)`

GetNotSourcesOk returns a tuple with the NotSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotSources

`func (o *AuthorSearchRequest) SetNotSources(v interface{})`

SetNotSources sets NotSources field to given value.

### HasNotSources

`func (o *AuthorSearchRequest) HasNotSources() bool`

HasNotSources returns a boolean if a field has been set.

### SetNotSourcesNil

`func (o *AuthorSearchRequest) SetNotSourcesNil(b bool)`

 SetNotSourcesNil sets the value for NotSources to be an explicit nil

### UnsetNotSources
`func (o *AuthorSearchRequest) UnsetNotSources()`

UnsetNotSources ensures that no value is present for NotSources, not even an explicit nil
### GetLang

`func (o *AuthorSearchRequest) GetLang() interface{}`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *AuthorSearchRequest) GetLangOk() (*interface{}, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *AuthorSearchRequest) SetLang(v interface{})`

SetLang sets Lang field to given value.

### HasLang

`func (o *AuthorSearchRequest) HasLang() bool`

HasLang returns a boolean if a field has been set.

### SetLangNil

`func (o *AuthorSearchRequest) SetLangNil(b bool)`

 SetLangNil sets the value for Lang to be an explicit nil

### UnsetLang
`func (o *AuthorSearchRequest) UnsetLang()`

UnsetLang ensures that no value is present for Lang, not even an explicit nil
### GetNotLang

`func (o *AuthorSearchRequest) GetNotLang() interface{}`

GetNotLang returns the NotLang field if non-nil, zero value otherwise.

### GetNotLangOk

`func (o *AuthorSearchRequest) GetNotLangOk() (*interface{}, bool)`

GetNotLangOk returns a tuple with the NotLang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotLang

`func (o *AuthorSearchRequest) SetNotLang(v interface{})`

SetNotLang sets NotLang field to given value.

### HasNotLang

`func (o *AuthorSearchRequest) HasNotLang() bool`

HasNotLang returns a boolean if a field has been set.

### SetNotLangNil

`func (o *AuthorSearchRequest) SetNotLangNil(b bool)`

 SetNotLangNil sets the value for NotLang to be an explicit nil

### UnsetNotLang
`func (o *AuthorSearchRequest) UnsetNotLang()`

UnsetNotLang ensures that no value is present for NotLang, not even an explicit nil
### GetCountries

`func (o *AuthorSearchRequest) GetCountries() interface{}`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *AuthorSearchRequest) GetCountriesOk() (*interface{}, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *AuthorSearchRequest) SetCountries(v interface{})`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *AuthorSearchRequest) HasCountries() bool`

HasCountries returns a boolean if a field has been set.

### SetCountriesNil

`func (o *AuthorSearchRequest) SetCountriesNil(b bool)`

 SetCountriesNil sets the value for Countries to be an explicit nil

### UnsetCountries
`func (o *AuthorSearchRequest) UnsetCountries()`

UnsetCountries ensures that no value is present for Countries, not even an explicit nil
### GetNotCountries

`func (o *AuthorSearchRequest) GetNotCountries() interface{}`

GetNotCountries returns the NotCountries field if non-nil, zero value otherwise.

### GetNotCountriesOk

`func (o *AuthorSearchRequest) GetNotCountriesOk() (*interface{}, bool)`

GetNotCountriesOk returns a tuple with the NotCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotCountries

`func (o *AuthorSearchRequest) SetNotCountries(v interface{})`

SetNotCountries sets NotCountries field to given value.

### HasNotCountries

`func (o *AuthorSearchRequest) HasNotCountries() bool`

HasNotCountries returns a boolean if a field has been set.

### SetNotCountriesNil

`func (o *AuthorSearchRequest) SetNotCountriesNil(b bool)`

 SetNotCountriesNil sets the value for NotCountries to be an explicit nil

### UnsetNotCountries
`func (o *AuthorSearchRequest) UnsetNotCountries()`

UnsetNotCountries ensures that no value is present for NotCountries, not even an explicit nil
### GetFrom

`func (o *AuthorSearchRequest) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *AuthorSearchRequest) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *AuthorSearchRequest) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *AuthorSearchRequest) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetTo

`func (o *AuthorSearchRequest) GetTo() string`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *AuthorSearchRequest) GetToOk() (*string, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *AuthorSearchRequest) SetTo(v string)`

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

### GetIsOpinion

`func (o *AuthorSearchRequest) GetIsOpinion() bool`

GetIsOpinion returns the IsOpinion field if non-nil, zero value otherwise.

### GetIsOpinionOk

`func (o *AuthorSearchRequest) GetIsOpinionOk() (*bool, bool)`

GetIsOpinionOk returns a tuple with the IsOpinion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOpinion

`func (o *AuthorSearchRequest) SetIsOpinion(v bool)`

SetIsOpinion sets IsOpinion field to given value.

### HasIsOpinion

`func (o *AuthorSearchRequest) HasIsOpinion() bool`

HasIsOpinion returns a boolean if a field has been set.

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

`func (o *AuthorSearchRequest) GetParentUrl() interface{}`

GetParentUrl returns the ParentUrl field if non-nil, zero value otherwise.

### GetParentUrlOk

`func (o *AuthorSearchRequest) GetParentUrlOk() (*interface{}, bool)`

GetParentUrlOk returns a tuple with the ParentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentUrl

`func (o *AuthorSearchRequest) SetParentUrl(v interface{})`

SetParentUrl sets ParentUrl field to given value.

### HasParentUrl

`func (o *AuthorSearchRequest) HasParentUrl() bool`

HasParentUrl returns a boolean if a field has been set.

### SetParentUrlNil

`func (o *AuthorSearchRequest) SetParentUrlNil(b bool)`

 SetParentUrlNil sets the value for ParentUrl to be an explicit nil

### UnsetParentUrl
`func (o *AuthorSearchRequest) UnsetParentUrl()`

UnsetParentUrl ensures that no value is present for ParentUrl, not even an explicit nil
### GetAllLinks

`func (o *AuthorSearchRequest) GetAllLinks() interface{}`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *AuthorSearchRequest) GetAllLinksOk() (*interface{}, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *AuthorSearchRequest) SetAllLinks(v interface{})`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *AuthorSearchRequest) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### SetAllLinksNil

`func (o *AuthorSearchRequest) SetAllLinksNil(b bool)`

 SetAllLinksNil sets the value for AllLinks to be an explicit nil

### UnsetAllLinks
`func (o *AuthorSearchRequest) UnsetAllLinks()`

UnsetAllLinks ensures that no value is present for AllLinks, not even an explicit nil
### GetAllDomainLinks

`func (o *AuthorSearchRequest) GetAllDomainLinks() interface{}`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *AuthorSearchRequest) GetAllDomainLinksOk() (*interface{}, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *AuthorSearchRequest) SetAllDomainLinks(v interface{})`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *AuthorSearchRequest) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### SetAllDomainLinksNil

`func (o *AuthorSearchRequest) SetAllDomainLinksNil(b bool)`

 SetAllDomainLinksNil sets the value for AllDomainLinks to be an explicit nil

### UnsetAllDomainLinks
`func (o *AuthorSearchRequest) UnsetAllDomainLinks()`

UnsetAllDomainLinks ensures that no value is present for AllDomainLinks, not even an explicit nil
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

### GetNotTheme

`func (o *AuthorSearchRequest) GetNotTheme() string`

GetNotTheme returns the NotTheme field if non-nil, zero value otherwise.

### GetNotThemeOk

`func (o *AuthorSearchRequest) GetNotThemeOk() (*string, bool)`

GetNotThemeOk returns a tuple with the NotTheme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotTheme

`func (o *AuthorSearchRequest) SetNotTheme(v string)`

SetNotTheme sets NotTheme field to given value.

### HasNotTheme

`func (o *AuthorSearchRequest) HasNotTheme() bool`

HasNotTheme returns a boolean if a field has been set.

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

### GetIptcTags

`func (o *AuthorSearchRequest) GetIptcTags() interface{}`

GetIptcTags returns the IptcTags field if non-nil, zero value otherwise.

### GetIptcTagsOk

`func (o *AuthorSearchRequest) GetIptcTagsOk() (*interface{}, bool)`

GetIptcTagsOk returns a tuple with the IptcTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIptcTags

`func (o *AuthorSearchRequest) SetIptcTags(v interface{})`

SetIptcTags sets IptcTags field to given value.

### HasIptcTags

`func (o *AuthorSearchRequest) HasIptcTags() bool`

HasIptcTags returns a boolean if a field has been set.

### SetIptcTagsNil

`func (o *AuthorSearchRequest) SetIptcTagsNil(b bool)`

 SetIptcTagsNil sets the value for IptcTags to be an explicit nil

### UnsetIptcTags
`func (o *AuthorSearchRequest) UnsetIptcTags()`

UnsetIptcTags ensures that no value is present for IptcTags, not even an explicit nil
### GetNotIptcTags

`func (o *AuthorSearchRequest) GetNotIptcTags() interface{}`

GetNotIptcTags returns the NotIptcTags field if non-nil, zero value otherwise.

### GetNotIptcTagsOk

`func (o *AuthorSearchRequest) GetNotIptcTagsOk() (*interface{}, bool)`

GetNotIptcTagsOk returns a tuple with the NotIptcTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotIptcTags

`func (o *AuthorSearchRequest) SetNotIptcTags(v interface{})`

SetNotIptcTags sets NotIptcTags field to given value.

### HasNotIptcTags

`func (o *AuthorSearchRequest) HasNotIptcTags() bool`

HasNotIptcTags returns a boolean if a field has been set.

### SetNotIptcTagsNil

`func (o *AuthorSearchRequest) SetNotIptcTagsNil(b bool)`

 SetNotIptcTagsNil sets the value for NotIptcTags to be an explicit nil

### UnsetNotIptcTags
`func (o *AuthorSearchRequest) UnsetNotIptcTags()`

UnsetNotIptcTags ensures that no value is present for NotIptcTags, not even an explicit nil
### GetIabTags

`func (o *AuthorSearchRequest) GetIabTags() interface{}`

GetIabTags returns the IabTags field if non-nil, zero value otherwise.

### GetIabTagsOk

`func (o *AuthorSearchRequest) GetIabTagsOk() (*interface{}, bool)`

GetIabTagsOk returns a tuple with the IabTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIabTags

`func (o *AuthorSearchRequest) SetIabTags(v interface{})`

SetIabTags sets IabTags field to given value.

### HasIabTags

`func (o *AuthorSearchRequest) HasIabTags() bool`

HasIabTags returns a boolean if a field has been set.

### SetIabTagsNil

`func (o *AuthorSearchRequest) SetIabTagsNil(b bool)`

 SetIabTagsNil sets the value for IabTags to be an explicit nil

### UnsetIabTags
`func (o *AuthorSearchRequest) UnsetIabTags()`

UnsetIabTags ensures that no value is present for IabTags, not even an explicit nil
### GetNotIabTags

`func (o *AuthorSearchRequest) GetNotIabTags() interface{}`

GetNotIabTags returns the NotIabTags field if non-nil, zero value otherwise.

### GetNotIabTagsOk

`func (o *AuthorSearchRequest) GetNotIabTagsOk() (*interface{}, bool)`

GetNotIabTagsOk returns a tuple with the NotIabTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotIabTags

`func (o *AuthorSearchRequest) SetNotIabTags(v interface{})`

SetNotIabTags sets NotIabTags field to given value.

### HasNotIabTags

`func (o *AuthorSearchRequest) HasNotIabTags() bool`

HasNotIabTags returns a boolean if a field has been set.

### SetNotIabTagsNil

`func (o *AuthorSearchRequest) SetNotIabTagsNil(b bool)`

 SetNotIabTagsNil sets the value for NotIabTags to be an explicit nil

### UnsetNotIabTags
`func (o *AuthorSearchRequest) UnsetNotIabTags()`

UnsetNotIabTags ensures that no value is present for NotIabTags, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


