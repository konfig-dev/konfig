# DtoResponsesSearchResponseArticleResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Author** | Pointer to **string** |  | [optional] 
**Authors** | Pointer to [**AuthorsProperty**](AuthorsProperty.md) |  | [optional] 
**Journalists** | Pointer to [**JournalistsProperty**](JournalistsProperty.md) |  | [optional] 
**PublishedDate** | Pointer to **string** |  | [optional] 
**PublishedDatePrecision** | Pointer to **string** |  | [optional] 
**UpdatedDate** | Pointer to **string** |  | [optional] 
**UpdatedDatePrecision** | Pointer to **string** |  | [optional] 
**ParseDate** | Pointer to **string** |  | [optional] 
**Link** | **string** |  | 
**DomainUrl** | **string** |  | 
**FullDomainUrl** | **string** |  | 
**NameSource** | Pointer to **string** |  | [optional] 
**IsHeadline** | Pointer to **string** |  | [optional] 
**PaidContent** | Pointer to **bool** |  | [optional] 
**ExtractionData** | **string** |  | 
**Country** | Pointer to **string** |  | [optional] 
**Rights** | Pointer to **string** |  | [optional] 
**Rank** | **int32** |  | 
**Media** | Pointer to **string** |  | [optional] 
**Language** | Pointer to **string** |  | [optional] 
**Content** | Pointer to **string** |  | [optional] 
**WordCount** | Pointer to **int32** |  | [optional] [default to 0]
**IsOpinion** | Pointer to **bool** |  | [optional] 
**TwitterAccount** | Pointer to **string** |  | [optional] 
**AllLinks** | Pointer to [**AllLinksProperty**](AllLinksProperty.md) |  | [optional] 
**AllDomainLinks** | Pointer to [**AllDomainLinksProperty**](AllDomainLinksProperty.md) |  | [optional] 
**Nlp** | Pointer to **map[string]interface{}** |  | [optional] [default to {}]
**Id** | **string** |  | 
**Score** | **float32** |  | 

## Methods

### NewDtoResponsesSearchResponseArticleResult

`func NewDtoResponsesSearchResponseArticleResult(title string, link string, domainUrl string, fullDomainUrl string, extractionData string, rank int32, id string, score float32, ) *DtoResponsesSearchResponseArticleResult`

NewDtoResponsesSearchResponseArticleResult instantiates a new DtoResponsesSearchResponseArticleResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDtoResponsesSearchResponseArticleResultWithDefaults

`func NewDtoResponsesSearchResponseArticleResultWithDefaults() *DtoResponsesSearchResponseArticleResult`

NewDtoResponsesSearchResponseArticleResultWithDefaults instantiates a new DtoResponsesSearchResponseArticleResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *DtoResponsesSearchResponseArticleResult) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *DtoResponsesSearchResponseArticleResult) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *DtoResponsesSearchResponseArticleResult) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetDescription

`func (o *DtoResponsesSearchResponseArticleResult) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DtoResponsesSearchResponseArticleResult) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DtoResponsesSearchResponseArticleResult) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DtoResponsesSearchResponseArticleResult) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAuthor

`func (o *DtoResponsesSearchResponseArticleResult) GetAuthor() string`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *DtoResponsesSearchResponseArticleResult) GetAuthorOk() (*string, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *DtoResponsesSearchResponseArticleResult) SetAuthor(v string)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *DtoResponsesSearchResponseArticleResult) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetAuthors

`func (o *DtoResponsesSearchResponseArticleResult) GetAuthors() AuthorsProperty`

GetAuthors returns the Authors field if non-nil, zero value otherwise.

### GetAuthorsOk

`func (o *DtoResponsesSearchResponseArticleResult) GetAuthorsOk() (*AuthorsProperty, bool)`

GetAuthorsOk returns a tuple with the Authors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthors

`func (o *DtoResponsesSearchResponseArticleResult) SetAuthors(v AuthorsProperty)`

SetAuthors sets Authors field to given value.

### HasAuthors

`func (o *DtoResponsesSearchResponseArticleResult) HasAuthors() bool`

HasAuthors returns a boolean if a field has been set.

### GetJournalists

`func (o *DtoResponsesSearchResponseArticleResult) GetJournalists() JournalistsProperty`

GetJournalists returns the Journalists field if non-nil, zero value otherwise.

### GetJournalistsOk

`func (o *DtoResponsesSearchResponseArticleResult) GetJournalistsOk() (*JournalistsProperty, bool)`

GetJournalistsOk returns a tuple with the Journalists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJournalists

`func (o *DtoResponsesSearchResponseArticleResult) SetJournalists(v JournalistsProperty)`

SetJournalists sets Journalists field to given value.

### HasJournalists

`func (o *DtoResponsesSearchResponseArticleResult) HasJournalists() bool`

HasJournalists returns a boolean if a field has been set.

### GetPublishedDate

`func (o *DtoResponsesSearchResponseArticleResult) GetPublishedDate() string`

GetPublishedDate returns the PublishedDate field if non-nil, zero value otherwise.

### GetPublishedDateOk

`func (o *DtoResponsesSearchResponseArticleResult) GetPublishedDateOk() (*string, bool)`

GetPublishedDateOk returns a tuple with the PublishedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDate

`func (o *DtoResponsesSearchResponseArticleResult) SetPublishedDate(v string)`

SetPublishedDate sets PublishedDate field to given value.

### HasPublishedDate

`func (o *DtoResponsesSearchResponseArticleResult) HasPublishedDate() bool`

HasPublishedDate returns a boolean if a field has been set.

### GetPublishedDatePrecision

`func (o *DtoResponsesSearchResponseArticleResult) GetPublishedDatePrecision() string`

GetPublishedDatePrecision returns the PublishedDatePrecision field if non-nil, zero value otherwise.

### GetPublishedDatePrecisionOk

`func (o *DtoResponsesSearchResponseArticleResult) GetPublishedDatePrecisionOk() (*string, bool)`

GetPublishedDatePrecisionOk returns a tuple with the PublishedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDatePrecision

`func (o *DtoResponsesSearchResponseArticleResult) SetPublishedDatePrecision(v string)`

SetPublishedDatePrecision sets PublishedDatePrecision field to given value.

### HasPublishedDatePrecision

`func (o *DtoResponsesSearchResponseArticleResult) HasPublishedDatePrecision() bool`

HasPublishedDatePrecision returns a boolean if a field has been set.

### GetUpdatedDate

`func (o *DtoResponsesSearchResponseArticleResult) GetUpdatedDate() string`

GetUpdatedDate returns the UpdatedDate field if non-nil, zero value otherwise.

### GetUpdatedDateOk

`func (o *DtoResponsesSearchResponseArticleResult) GetUpdatedDateOk() (*string, bool)`

GetUpdatedDateOk returns a tuple with the UpdatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedDate

`func (o *DtoResponsesSearchResponseArticleResult) SetUpdatedDate(v string)`

SetUpdatedDate sets UpdatedDate field to given value.

### HasUpdatedDate

`func (o *DtoResponsesSearchResponseArticleResult) HasUpdatedDate() bool`

HasUpdatedDate returns a boolean if a field has been set.

### GetUpdatedDatePrecision

`func (o *DtoResponsesSearchResponseArticleResult) GetUpdatedDatePrecision() string`

GetUpdatedDatePrecision returns the UpdatedDatePrecision field if non-nil, zero value otherwise.

### GetUpdatedDatePrecisionOk

`func (o *DtoResponsesSearchResponseArticleResult) GetUpdatedDatePrecisionOk() (*string, bool)`

GetUpdatedDatePrecisionOk returns a tuple with the UpdatedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedDatePrecision

`func (o *DtoResponsesSearchResponseArticleResult) SetUpdatedDatePrecision(v string)`

SetUpdatedDatePrecision sets UpdatedDatePrecision field to given value.

### HasUpdatedDatePrecision

`func (o *DtoResponsesSearchResponseArticleResult) HasUpdatedDatePrecision() bool`

HasUpdatedDatePrecision returns a boolean if a field has been set.

### GetParseDate

`func (o *DtoResponsesSearchResponseArticleResult) GetParseDate() string`

GetParseDate returns the ParseDate field if non-nil, zero value otherwise.

### GetParseDateOk

`func (o *DtoResponsesSearchResponseArticleResult) GetParseDateOk() (*string, bool)`

GetParseDateOk returns a tuple with the ParseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParseDate

`func (o *DtoResponsesSearchResponseArticleResult) SetParseDate(v string)`

SetParseDate sets ParseDate field to given value.

### HasParseDate

`func (o *DtoResponsesSearchResponseArticleResult) HasParseDate() bool`

HasParseDate returns a boolean if a field has been set.

### GetLink

`func (o *DtoResponsesSearchResponseArticleResult) GetLink() string`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *DtoResponsesSearchResponseArticleResult) GetLinkOk() (*string, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *DtoResponsesSearchResponseArticleResult) SetLink(v string)`

SetLink sets Link field to given value.


### GetDomainUrl

`func (o *DtoResponsesSearchResponseArticleResult) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *DtoResponsesSearchResponseArticleResult) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *DtoResponsesSearchResponseArticleResult) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.


### GetFullDomainUrl

`func (o *DtoResponsesSearchResponseArticleResult) GetFullDomainUrl() string`

GetFullDomainUrl returns the FullDomainUrl field if non-nil, zero value otherwise.

### GetFullDomainUrlOk

`func (o *DtoResponsesSearchResponseArticleResult) GetFullDomainUrlOk() (*string, bool)`

GetFullDomainUrlOk returns a tuple with the FullDomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullDomainUrl

`func (o *DtoResponsesSearchResponseArticleResult) SetFullDomainUrl(v string)`

SetFullDomainUrl sets FullDomainUrl field to given value.


### GetNameSource

`func (o *DtoResponsesSearchResponseArticleResult) GetNameSource() string`

GetNameSource returns the NameSource field if non-nil, zero value otherwise.

### GetNameSourceOk

`func (o *DtoResponsesSearchResponseArticleResult) GetNameSourceOk() (*string, bool)`

GetNameSourceOk returns a tuple with the NameSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameSource

`func (o *DtoResponsesSearchResponseArticleResult) SetNameSource(v string)`

SetNameSource sets NameSource field to given value.

### HasNameSource

`func (o *DtoResponsesSearchResponseArticleResult) HasNameSource() bool`

HasNameSource returns a boolean if a field has been set.

### GetIsHeadline

`func (o *DtoResponsesSearchResponseArticleResult) GetIsHeadline() string`

GetIsHeadline returns the IsHeadline field if non-nil, zero value otherwise.

### GetIsHeadlineOk

`func (o *DtoResponsesSearchResponseArticleResult) GetIsHeadlineOk() (*string, bool)`

GetIsHeadlineOk returns a tuple with the IsHeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHeadline

`func (o *DtoResponsesSearchResponseArticleResult) SetIsHeadline(v string)`

SetIsHeadline sets IsHeadline field to given value.

### HasIsHeadline

`func (o *DtoResponsesSearchResponseArticleResult) HasIsHeadline() bool`

HasIsHeadline returns a boolean if a field has been set.

### GetPaidContent

`func (o *DtoResponsesSearchResponseArticleResult) GetPaidContent() bool`

GetPaidContent returns the PaidContent field if non-nil, zero value otherwise.

### GetPaidContentOk

`func (o *DtoResponsesSearchResponseArticleResult) GetPaidContentOk() (*bool, bool)`

GetPaidContentOk returns a tuple with the PaidContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidContent

`func (o *DtoResponsesSearchResponseArticleResult) SetPaidContent(v bool)`

SetPaidContent sets PaidContent field to given value.

### HasPaidContent

`func (o *DtoResponsesSearchResponseArticleResult) HasPaidContent() bool`

HasPaidContent returns a boolean if a field has been set.

### GetExtractionData

`func (o *DtoResponsesSearchResponseArticleResult) GetExtractionData() string`

GetExtractionData returns the ExtractionData field if non-nil, zero value otherwise.

### GetExtractionDataOk

`func (o *DtoResponsesSearchResponseArticleResult) GetExtractionDataOk() (*string, bool)`

GetExtractionDataOk returns a tuple with the ExtractionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractionData

`func (o *DtoResponsesSearchResponseArticleResult) SetExtractionData(v string)`

SetExtractionData sets ExtractionData field to given value.


### GetCountry

`func (o *DtoResponsesSearchResponseArticleResult) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *DtoResponsesSearchResponseArticleResult) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *DtoResponsesSearchResponseArticleResult) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *DtoResponsesSearchResponseArticleResult) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetRights

`func (o *DtoResponsesSearchResponseArticleResult) GetRights() string`

GetRights returns the Rights field if non-nil, zero value otherwise.

### GetRightsOk

`func (o *DtoResponsesSearchResponseArticleResult) GetRightsOk() (*string, bool)`

GetRightsOk returns a tuple with the Rights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRights

`func (o *DtoResponsesSearchResponseArticleResult) SetRights(v string)`

SetRights sets Rights field to given value.

### HasRights

`func (o *DtoResponsesSearchResponseArticleResult) HasRights() bool`

HasRights returns a boolean if a field has been set.

### GetRank

`func (o *DtoResponsesSearchResponseArticleResult) GetRank() int32`

GetRank returns the Rank field if non-nil, zero value otherwise.

### GetRankOk

`func (o *DtoResponsesSearchResponseArticleResult) GetRankOk() (*int32, bool)`

GetRankOk returns a tuple with the Rank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRank

`func (o *DtoResponsesSearchResponseArticleResult) SetRank(v int32)`

SetRank sets Rank field to given value.


### GetMedia

`func (o *DtoResponsesSearchResponseArticleResult) GetMedia() string`

GetMedia returns the Media field if non-nil, zero value otherwise.

### GetMediaOk

`func (o *DtoResponsesSearchResponseArticleResult) GetMediaOk() (*string, bool)`

GetMediaOk returns a tuple with the Media field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedia

`func (o *DtoResponsesSearchResponseArticleResult) SetMedia(v string)`

SetMedia sets Media field to given value.

### HasMedia

`func (o *DtoResponsesSearchResponseArticleResult) HasMedia() bool`

HasMedia returns a boolean if a field has been set.

### GetLanguage

`func (o *DtoResponsesSearchResponseArticleResult) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *DtoResponsesSearchResponseArticleResult) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *DtoResponsesSearchResponseArticleResult) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *DtoResponsesSearchResponseArticleResult) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetContent

`func (o *DtoResponsesSearchResponseArticleResult) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *DtoResponsesSearchResponseArticleResult) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *DtoResponsesSearchResponseArticleResult) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *DtoResponsesSearchResponseArticleResult) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetWordCount

`func (o *DtoResponsesSearchResponseArticleResult) GetWordCount() int32`

GetWordCount returns the WordCount field if non-nil, zero value otherwise.

### GetWordCountOk

`func (o *DtoResponsesSearchResponseArticleResult) GetWordCountOk() (*int32, bool)`

GetWordCountOk returns a tuple with the WordCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCount

`func (o *DtoResponsesSearchResponseArticleResult) SetWordCount(v int32)`

SetWordCount sets WordCount field to given value.

### HasWordCount

`func (o *DtoResponsesSearchResponseArticleResult) HasWordCount() bool`

HasWordCount returns a boolean if a field has been set.

### GetIsOpinion

`func (o *DtoResponsesSearchResponseArticleResult) GetIsOpinion() bool`

GetIsOpinion returns the IsOpinion field if non-nil, zero value otherwise.

### GetIsOpinionOk

`func (o *DtoResponsesSearchResponseArticleResult) GetIsOpinionOk() (*bool, bool)`

GetIsOpinionOk returns a tuple with the IsOpinion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOpinion

`func (o *DtoResponsesSearchResponseArticleResult) SetIsOpinion(v bool)`

SetIsOpinion sets IsOpinion field to given value.

### HasIsOpinion

`func (o *DtoResponsesSearchResponseArticleResult) HasIsOpinion() bool`

HasIsOpinion returns a boolean if a field has been set.

### GetTwitterAccount

`func (o *DtoResponsesSearchResponseArticleResult) GetTwitterAccount() string`

GetTwitterAccount returns the TwitterAccount field if non-nil, zero value otherwise.

### GetTwitterAccountOk

`func (o *DtoResponsesSearchResponseArticleResult) GetTwitterAccountOk() (*string, bool)`

GetTwitterAccountOk returns a tuple with the TwitterAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwitterAccount

`func (o *DtoResponsesSearchResponseArticleResult) SetTwitterAccount(v string)`

SetTwitterAccount sets TwitterAccount field to given value.

### HasTwitterAccount

`func (o *DtoResponsesSearchResponseArticleResult) HasTwitterAccount() bool`

HasTwitterAccount returns a boolean if a field has been set.

### GetAllLinks

`func (o *DtoResponsesSearchResponseArticleResult) GetAllLinks() AllLinksProperty`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *DtoResponsesSearchResponseArticleResult) GetAllLinksOk() (*AllLinksProperty, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *DtoResponsesSearchResponseArticleResult) SetAllLinks(v AllLinksProperty)`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *DtoResponsesSearchResponseArticleResult) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### GetAllDomainLinks

`func (o *DtoResponsesSearchResponseArticleResult) GetAllDomainLinks() AllDomainLinksProperty`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *DtoResponsesSearchResponseArticleResult) GetAllDomainLinksOk() (*AllDomainLinksProperty, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *DtoResponsesSearchResponseArticleResult) SetAllDomainLinks(v AllDomainLinksProperty)`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *DtoResponsesSearchResponseArticleResult) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### GetNlp

`func (o *DtoResponsesSearchResponseArticleResult) GetNlp() map[string]interface{}`

GetNlp returns the Nlp field if non-nil, zero value otherwise.

### GetNlpOk

`func (o *DtoResponsesSearchResponseArticleResult) GetNlpOk() (*map[string]interface{}, bool)`

GetNlpOk returns a tuple with the Nlp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNlp

`func (o *DtoResponsesSearchResponseArticleResult) SetNlp(v map[string]interface{})`

SetNlp sets Nlp field to given value.

### HasNlp

`func (o *DtoResponsesSearchResponseArticleResult) HasNlp() bool`

HasNlp returns a boolean if a field has been set.

### GetId

`func (o *DtoResponsesSearchResponseArticleResult) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DtoResponsesSearchResponseArticleResult) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DtoResponsesSearchResponseArticleResult) SetId(v string)`

SetId sets Id field to given value.


### GetScore

`func (o *DtoResponsesSearchResponseArticleResult) GetScore() float32`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *DtoResponsesSearchResponseArticleResult) GetScoreOk() (*float32, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *DtoResponsesSearchResponseArticleResult) SetScore(v float32)`

SetScore sets Score field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


