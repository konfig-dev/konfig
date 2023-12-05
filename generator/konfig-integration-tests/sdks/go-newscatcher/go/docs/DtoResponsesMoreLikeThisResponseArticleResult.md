# DtoResponsesMoreLikeThisResponseArticleResult

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
**Content** | **string** |  | 
**WordCount** | Pointer to **int32** |  | [optional] [default to 0]
**IsOpinion** | Pointer to **bool** |  | [optional] 
**TwitterAccount** | Pointer to **string** |  | [optional] 
**AllLinks** | Pointer to [**AllLinksProperty**](AllLinksProperty.md) |  | [optional] 
**AllDomainLinks** | Pointer to [**AllDomainLinksProperty**](AllDomainLinksProperty.md) |  | [optional] 
**Nlp** | Pointer to **map[string]interface{}** |  | [optional] [default to {}]
**Id** | **string** |  | 
**Score** | **float32** |  | 
**SimilarDocuments** | Pointer to [**[]SimilarDocument**](SimilarDocument.md) |  | [optional] [default to []]

## Methods

### NewDtoResponsesMoreLikeThisResponseArticleResult

`func NewDtoResponsesMoreLikeThisResponseArticleResult(title string, link string, domainUrl string, fullDomainUrl string, extractionData string, rank int32, content string, id string, score float32, ) *DtoResponsesMoreLikeThisResponseArticleResult`

NewDtoResponsesMoreLikeThisResponseArticleResult instantiates a new DtoResponsesMoreLikeThisResponseArticleResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDtoResponsesMoreLikeThisResponseArticleResultWithDefaults

`func NewDtoResponsesMoreLikeThisResponseArticleResultWithDefaults() *DtoResponsesMoreLikeThisResponseArticleResult`

NewDtoResponsesMoreLikeThisResponseArticleResultWithDefaults instantiates a new DtoResponsesMoreLikeThisResponseArticleResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetDescription

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAuthor

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetAuthor() string`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetAuthorOk() (*string, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetAuthor(v string)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetAuthors

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetAuthors() AuthorsProperty`

GetAuthors returns the Authors field if non-nil, zero value otherwise.

### GetAuthorsOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetAuthorsOk() (*AuthorsProperty, bool)`

GetAuthorsOk returns a tuple with the Authors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthors

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetAuthors(v AuthorsProperty)`

SetAuthors sets Authors field to given value.

### HasAuthors

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasAuthors() bool`

HasAuthors returns a boolean if a field has been set.

### GetJournalists

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetJournalists() JournalistsProperty`

GetJournalists returns the Journalists field if non-nil, zero value otherwise.

### GetJournalistsOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetJournalistsOk() (*JournalistsProperty, bool)`

GetJournalistsOk returns a tuple with the Journalists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJournalists

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetJournalists(v JournalistsProperty)`

SetJournalists sets Journalists field to given value.

### HasJournalists

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasJournalists() bool`

HasJournalists returns a boolean if a field has been set.

### GetPublishedDate

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetPublishedDate() string`

GetPublishedDate returns the PublishedDate field if non-nil, zero value otherwise.

### GetPublishedDateOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetPublishedDateOk() (*string, bool)`

GetPublishedDateOk returns a tuple with the PublishedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDate

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetPublishedDate(v string)`

SetPublishedDate sets PublishedDate field to given value.

### HasPublishedDate

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasPublishedDate() bool`

HasPublishedDate returns a boolean if a field has been set.

### GetPublishedDatePrecision

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetPublishedDatePrecision() string`

GetPublishedDatePrecision returns the PublishedDatePrecision field if non-nil, zero value otherwise.

### GetPublishedDatePrecisionOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetPublishedDatePrecisionOk() (*string, bool)`

GetPublishedDatePrecisionOk returns a tuple with the PublishedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDatePrecision

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetPublishedDatePrecision(v string)`

SetPublishedDatePrecision sets PublishedDatePrecision field to given value.

### HasPublishedDatePrecision

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasPublishedDatePrecision() bool`

HasPublishedDatePrecision returns a boolean if a field has been set.

### GetUpdatedDate

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetUpdatedDate() string`

GetUpdatedDate returns the UpdatedDate field if non-nil, zero value otherwise.

### GetUpdatedDateOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetUpdatedDateOk() (*string, bool)`

GetUpdatedDateOk returns a tuple with the UpdatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedDate

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetUpdatedDate(v string)`

SetUpdatedDate sets UpdatedDate field to given value.

### HasUpdatedDate

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasUpdatedDate() bool`

HasUpdatedDate returns a boolean if a field has been set.

### GetUpdatedDatePrecision

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetUpdatedDatePrecision() string`

GetUpdatedDatePrecision returns the UpdatedDatePrecision field if non-nil, zero value otherwise.

### GetUpdatedDatePrecisionOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetUpdatedDatePrecisionOk() (*string, bool)`

GetUpdatedDatePrecisionOk returns a tuple with the UpdatedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedDatePrecision

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetUpdatedDatePrecision(v string)`

SetUpdatedDatePrecision sets UpdatedDatePrecision field to given value.

### HasUpdatedDatePrecision

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasUpdatedDatePrecision() bool`

HasUpdatedDatePrecision returns a boolean if a field has been set.

### GetParseDate

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetParseDate() string`

GetParseDate returns the ParseDate field if non-nil, zero value otherwise.

### GetParseDateOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetParseDateOk() (*string, bool)`

GetParseDateOk returns a tuple with the ParseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParseDate

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetParseDate(v string)`

SetParseDate sets ParseDate field to given value.

### HasParseDate

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasParseDate() bool`

HasParseDate returns a boolean if a field has been set.

### GetLink

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetLink() string`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetLinkOk() (*string, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetLink(v string)`

SetLink sets Link field to given value.


### GetDomainUrl

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.


### GetFullDomainUrl

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetFullDomainUrl() string`

GetFullDomainUrl returns the FullDomainUrl field if non-nil, zero value otherwise.

### GetFullDomainUrlOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetFullDomainUrlOk() (*string, bool)`

GetFullDomainUrlOk returns a tuple with the FullDomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullDomainUrl

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetFullDomainUrl(v string)`

SetFullDomainUrl sets FullDomainUrl field to given value.


### GetNameSource

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetNameSource() string`

GetNameSource returns the NameSource field if non-nil, zero value otherwise.

### GetNameSourceOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetNameSourceOk() (*string, bool)`

GetNameSourceOk returns a tuple with the NameSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameSource

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetNameSource(v string)`

SetNameSource sets NameSource field to given value.

### HasNameSource

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasNameSource() bool`

HasNameSource returns a boolean if a field has been set.

### GetIsHeadline

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetIsHeadline() string`

GetIsHeadline returns the IsHeadline field if non-nil, zero value otherwise.

### GetIsHeadlineOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetIsHeadlineOk() (*string, bool)`

GetIsHeadlineOk returns a tuple with the IsHeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHeadline

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetIsHeadline(v string)`

SetIsHeadline sets IsHeadline field to given value.

### HasIsHeadline

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasIsHeadline() bool`

HasIsHeadline returns a boolean if a field has been set.

### GetPaidContent

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetPaidContent() bool`

GetPaidContent returns the PaidContent field if non-nil, zero value otherwise.

### GetPaidContentOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetPaidContentOk() (*bool, bool)`

GetPaidContentOk returns a tuple with the PaidContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidContent

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetPaidContent(v bool)`

SetPaidContent sets PaidContent field to given value.

### HasPaidContent

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasPaidContent() bool`

HasPaidContent returns a boolean if a field has been set.

### GetExtractionData

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetExtractionData() string`

GetExtractionData returns the ExtractionData field if non-nil, zero value otherwise.

### GetExtractionDataOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetExtractionDataOk() (*string, bool)`

GetExtractionDataOk returns a tuple with the ExtractionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractionData

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetExtractionData(v string)`

SetExtractionData sets ExtractionData field to given value.


### GetCountry

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetRights

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetRights() string`

GetRights returns the Rights field if non-nil, zero value otherwise.

### GetRightsOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetRightsOk() (*string, bool)`

GetRightsOk returns a tuple with the Rights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRights

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetRights(v string)`

SetRights sets Rights field to given value.

### HasRights

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasRights() bool`

HasRights returns a boolean if a field has been set.

### GetRank

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetRank() int32`

GetRank returns the Rank field if non-nil, zero value otherwise.

### GetRankOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetRankOk() (*int32, bool)`

GetRankOk returns a tuple with the Rank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRank

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetRank(v int32)`

SetRank sets Rank field to given value.


### GetMedia

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetMedia() string`

GetMedia returns the Media field if non-nil, zero value otherwise.

### GetMediaOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetMediaOk() (*string, bool)`

GetMediaOk returns a tuple with the Media field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedia

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetMedia(v string)`

SetMedia sets Media field to given value.

### HasMedia

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasMedia() bool`

HasMedia returns a boolean if a field has been set.

### GetLanguage

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetContent

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetContent(v string)`

SetContent sets Content field to given value.


### GetWordCount

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetWordCount() int32`

GetWordCount returns the WordCount field if non-nil, zero value otherwise.

### GetWordCountOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetWordCountOk() (*int32, bool)`

GetWordCountOk returns a tuple with the WordCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCount

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetWordCount(v int32)`

SetWordCount sets WordCount field to given value.

### HasWordCount

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasWordCount() bool`

HasWordCount returns a boolean if a field has been set.

### GetIsOpinion

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetIsOpinion() bool`

GetIsOpinion returns the IsOpinion field if non-nil, zero value otherwise.

### GetIsOpinionOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetIsOpinionOk() (*bool, bool)`

GetIsOpinionOk returns a tuple with the IsOpinion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOpinion

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetIsOpinion(v bool)`

SetIsOpinion sets IsOpinion field to given value.

### HasIsOpinion

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasIsOpinion() bool`

HasIsOpinion returns a boolean if a field has been set.

### GetTwitterAccount

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetTwitterAccount() string`

GetTwitterAccount returns the TwitterAccount field if non-nil, zero value otherwise.

### GetTwitterAccountOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetTwitterAccountOk() (*string, bool)`

GetTwitterAccountOk returns a tuple with the TwitterAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwitterAccount

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetTwitterAccount(v string)`

SetTwitterAccount sets TwitterAccount field to given value.

### HasTwitterAccount

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasTwitterAccount() bool`

HasTwitterAccount returns a boolean if a field has been set.

### GetAllLinks

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetAllLinks() AllLinksProperty`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetAllLinksOk() (*AllLinksProperty, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetAllLinks(v AllLinksProperty)`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### GetAllDomainLinks

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetAllDomainLinks() AllDomainLinksProperty`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetAllDomainLinksOk() (*AllDomainLinksProperty, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetAllDomainLinks(v AllDomainLinksProperty)`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### GetNlp

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetNlp() map[string]interface{}`

GetNlp returns the Nlp field if non-nil, zero value otherwise.

### GetNlpOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetNlpOk() (*map[string]interface{}, bool)`

GetNlpOk returns a tuple with the Nlp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNlp

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetNlp(v map[string]interface{})`

SetNlp sets Nlp field to given value.

### HasNlp

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasNlp() bool`

HasNlp returns a boolean if a field has been set.

### GetId

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetId(v string)`

SetId sets Id field to given value.


### GetScore

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetScore() float32`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetScoreOk() (*float32, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetScore(v float32)`

SetScore sets Score field to given value.


### GetSimilarDocuments

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetSimilarDocuments() []SimilarDocument`

GetSimilarDocuments returns the SimilarDocuments field if non-nil, zero value otherwise.

### GetSimilarDocumentsOk

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) GetSimilarDocumentsOk() (*[]SimilarDocument, bool)`

GetSimilarDocumentsOk returns a tuple with the SimilarDocuments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimilarDocuments

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) SetSimilarDocuments(v []SimilarDocument)`

SetSimilarDocuments sets SimilarDocuments field to given value.

### HasSimilarDocuments

`func (o *DtoResponsesMoreLikeThisResponseArticleResult) HasSimilarDocuments() bool`

HasSimilarDocuments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


