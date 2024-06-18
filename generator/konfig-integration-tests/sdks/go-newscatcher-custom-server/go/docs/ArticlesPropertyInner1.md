# ArticlesPropertyInner1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Author** | Pointer to **string** |  | [optional] 
**Authors** | Pointer to [**ArticlesPropertyInnerAuthors**](ArticlesPropertyInnerAuthors.md) |  | [optional] 
**Journalists** | Pointer to [**ArticlesPropertyInnerJournalists**](ArticlesPropertyInnerJournalists.md) |  | [optional] 
**PublishedDate** | Pointer to **string** |  | [optional] 
**PublishedDatePrecision** | Pointer to **string** |  | [optional] 
**UpdatedDate** | Pointer to **string** |  | [optional] 
**UpdatedDatePrecision** | Pointer to **string** |  | [optional] 
**ParseDate** | Pointer to **string** |  | [optional] 
**Link** | Pointer to **string** |  | [optional] 
**DomainUrl** | Pointer to **string** |  | [optional] 
**FullDomainUrl** | Pointer to **string** |  | [optional] 
**NameSource** | Pointer to **string** |  | [optional] 
**IsHeadline** | Pointer to **string** |  | [optional] 
**PaidContent** | Pointer to **bool** |  | [optional] 
**ExtractionData** | Pointer to **string** |  | [optional] 
**Country** | Pointer to **string** |  | [optional] 
**Rights** | Pointer to **string** |  | [optional] 
**Rank** | Pointer to **int32** |  | [optional] 
**Media** | Pointer to **string** |  | [optional] 
**Language** | Pointer to **string** |  | [optional] 
**Content** | Pointer to **string** |  | [optional] 
**WordCount** | Pointer to **int32** |  | [optional] [default to 0]
**IsOpinion** | Pointer to **bool** |  | [optional] 
**TwitterAccount** | Pointer to **string** |  | [optional] 
**AllLinks** | Pointer to [**ArticlesPropertyInnerAllLinks**](ArticlesPropertyInnerAllLinks.md) |  | [optional] 
**AllDomainLinks** | Pointer to [**ArticlesPropertyInnerAllDomainLinks**](ArticlesPropertyInnerAllDomainLinks.md) |  | [optional] 
**Nlp** | Pointer to **map[string]interface{}** |  | [optional] [default to {}]
**Id** | Pointer to **string** |  | [optional] 
**Score** | Pointer to **float32** |  | [optional] 
**SimilarDocuments** | Pointer to [**[]SimilarDocument1**](SimilarDocument1.md) |  | [optional] [default to []]

## Methods

### NewArticlesPropertyInner1

`func NewArticlesPropertyInner1() *ArticlesPropertyInner1`

NewArticlesPropertyInner1 instantiates a new ArticlesPropertyInner1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArticlesPropertyInner1WithDefaults

`func NewArticlesPropertyInner1WithDefaults() *ArticlesPropertyInner1`

NewArticlesPropertyInner1WithDefaults instantiates a new ArticlesPropertyInner1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *ArticlesPropertyInner1) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ArticlesPropertyInner1) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ArticlesPropertyInner1) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *ArticlesPropertyInner1) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetDescription

`func (o *ArticlesPropertyInner1) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ArticlesPropertyInner1) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ArticlesPropertyInner1) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ArticlesPropertyInner1) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAuthor

`func (o *ArticlesPropertyInner1) GetAuthor() string`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *ArticlesPropertyInner1) GetAuthorOk() (*string, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *ArticlesPropertyInner1) SetAuthor(v string)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *ArticlesPropertyInner1) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetAuthors

`func (o *ArticlesPropertyInner1) GetAuthors() ArticlesPropertyInnerAuthors`

GetAuthors returns the Authors field if non-nil, zero value otherwise.

### GetAuthorsOk

`func (o *ArticlesPropertyInner1) GetAuthorsOk() (*ArticlesPropertyInnerAuthors, bool)`

GetAuthorsOk returns a tuple with the Authors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthors

`func (o *ArticlesPropertyInner1) SetAuthors(v ArticlesPropertyInnerAuthors)`

SetAuthors sets Authors field to given value.

### HasAuthors

`func (o *ArticlesPropertyInner1) HasAuthors() bool`

HasAuthors returns a boolean if a field has been set.

### GetJournalists

`func (o *ArticlesPropertyInner1) GetJournalists() ArticlesPropertyInnerJournalists`

GetJournalists returns the Journalists field if non-nil, zero value otherwise.

### GetJournalistsOk

`func (o *ArticlesPropertyInner1) GetJournalistsOk() (*ArticlesPropertyInnerJournalists, bool)`

GetJournalistsOk returns a tuple with the Journalists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJournalists

`func (o *ArticlesPropertyInner1) SetJournalists(v ArticlesPropertyInnerJournalists)`

SetJournalists sets Journalists field to given value.

### HasJournalists

`func (o *ArticlesPropertyInner1) HasJournalists() bool`

HasJournalists returns a boolean if a field has been set.

### GetPublishedDate

`func (o *ArticlesPropertyInner1) GetPublishedDate() string`

GetPublishedDate returns the PublishedDate field if non-nil, zero value otherwise.

### GetPublishedDateOk

`func (o *ArticlesPropertyInner1) GetPublishedDateOk() (*string, bool)`

GetPublishedDateOk returns a tuple with the PublishedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDate

`func (o *ArticlesPropertyInner1) SetPublishedDate(v string)`

SetPublishedDate sets PublishedDate field to given value.

### HasPublishedDate

`func (o *ArticlesPropertyInner1) HasPublishedDate() bool`

HasPublishedDate returns a boolean if a field has been set.

### GetPublishedDatePrecision

`func (o *ArticlesPropertyInner1) GetPublishedDatePrecision() string`

GetPublishedDatePrecision returns the PublishedDatePrecision field if non-nil, zero value otherwise.

### GetPublishedDatePrecisionOk

`func (o *ArticlesPropertyInner1) GetPublishedDatePrecisionOk() (*string, bool)`

GetPublishedDatePrecisionOk returns a tuple with the PublishedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedDatePrecision

`func (o *ArticlesPropertyInner1) SetPublishedDatePrecision(v string)`

SetPublishedDatePrecision sets PublishedDatePrecision field to given value.

### HasPublishedDatePrecision

`func (o *ArticlesPropertyInner1) HasPublishedDatePrecision() bool`

HasPublishedDatePrecision returns a boolean if a field has been set.

### GetUpdatedDate

`func (o *ArticlesPropertyInner1) GetUpdatedDate() string`

GetUpdatedDate returns the UpdatedDate field if non-nil, zero value otherwise.

### GetUpdatedDateOk

`func (o *ArticlesPropertyInner1) GetUpdatedDateOk() (*string, bool)`

GetUpdatedDateOk returns a tuple with the UpdatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedDate

`func (o *ArticlesPropertyInner1) SetUpdatedDate(v string)`

SetUpdatedDate sets UpdatedDate field to given value.

### HasUpdatedDate

`func (o *ArticlesPropertyInner1) HasUpdatedDate() bool`

HasUpdatedDate returns a boolean if a field has been set.

### GetUpdatedDatePrecision

`func (o *ArticlesPropertyInner1) GetUpdatedDatePrecision() string`

GetUpdatedDatePrecision returns the UpdatedDatePrecision field if non-nil, zero value otherwise.

### GetUpdatedDatePrecisionOk

`func (o *ArticlesPropertyInner1) GetUpdatedDatePrecisionOk() (*string, bool)`

GetUpdatedDatePrecisionOk returns a tuple with the UpdatedDatePrecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedDatePrecision

`func (o *ArticlesPropertyInner1) SetUpdatedDatePrecision(v string)`

SetUpdatedDatePrecision sets UpdatedDatePrecision field to given value.

### HasUpdatedDatePrecision

`func (o *ArticlesPropertyInner1) HasUpdatedDatePrecision() bool`

HasUpdatedDatePrecision returns a boolean if a field has been set.

### GetParseDate

`func (o *ArticlesPropertyInner1) GetParseDate() string`

GetParseDate returns the ParseDate field if non-nil, zero value otherwise.

### GetParseDateOk

`func (o *ArticlesPropertyInner1) GetParseDateOk() (*string, bool)`

GetParseDateOk returns a tuple with the ParseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParseDate

`func (o *ArticlesPropertyInner1) SetParseDate(v string)`

SetParseDate sets ParseDate field to given value.

### HasParseDate

`func (o *ArticlesPropertyInner1) HasParseDate() bool`

HasParseDate returns a boolean if a field has been set.

### GetLink

`func (o *ArticlesPropertyInner1) GetLink() string`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *ArticlesPropertyInner1) GetLinkOk() (*string, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *ArticlesPropertyInner1) SetLink(v string)`

SetLink sets Link field to given value.

### HasLink

`func (o *ArticlesPropertyInner1) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetDomainUrl

`func (o *ArticlesPropertyInner1) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *ArticlesPropertyInner1) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *ArticlesPropertyInner1) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.

### HasDomainUrl

`func (o *ArticlesPropertyInner1) HasDomainUrl() bool`

HasDomainUrl returns a boolean if a field has been set.

### GetFullDomainUrl

`func (o *ArticlesPropertyInner1) GetFullDomainUrl() string`

GetFullDomainUrl returns the FullDomainUrl field if non-nil, zero value otherwise.

### GetFullDomainUrlOk

`func (o *ArticlesPropertyInner1) GetFullDomainUrlOk() (*string, bool)`

GetFullDomainUrlOk returns a tuple with the FullDomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullDomainUrl

`func (o *ArticlesPropertyInner1) SetFullDomainUrl(v string)`

SetFullDomainUrl sets FullDomainUrl field to given value.

### HasFullDomainUrl

`func (o *ArticlesPropertyInner1) HasFullDomainUrl() bool`

HasFullDomainUrl returns a boolean if a field has been set.

### GetNameSource

`func (o *ArticlesPropertyInner1) GetNameSource() string`

GetNameSource returns the NameSource field if non-nil, zero value otherwise.

### GetNameSourceOk

`func (o *ArticlesPropertyInner1) GetNameSourceOk() (*string, bool)`

GetNameSourceOk returns a tuple with the NameSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameSource

`func (o *ArticlesPropertyInner1) SetNameSource(v string)`

SetNameSource sets NameSource field to given value.

### HasNameSource

`func (o *ArticlesPropertyInner1) HasNameSource() bool`

HasNameSource returns a boolean if a field has been set.

### GetIsHeadline

`func (o *ArticlesPropertyInner1) GetIsHeadline() string`

GetIsHeadline returns the IsHeadline field if non-nil, zero value otherwise.

### GetIsHeadlineOk

`func (o *ArticlesPropertyInner1) GetIsHeadlineOk() (*string, bool)`

GetIsHeadlineOk returns a tuple with the IsHeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHeadline

`func (o *ArticlesPropertyInner1) SetIsHeadline(v string)`

SetIsHeadline sets IsHeadline field to given value.

### HasIsHeadline

`func (o *ArticlesPropertyInner1) HasIsHeadline() bool`

HasIsHeadline returns a boolean if a field has been set.

### GetPaidContent

`func (o *ArticlesPropertyInner1) GetPaidContent() bool`

GetPaidContent returns the PaidContent field if non-nil, zero value otherwise.

### GetPaidContentOk

`func (o *ArticlesPropertyInner1) GetPaidContentOk() (*bool, bool)`

GetPaidContentOk returns a tuple with the PaidContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidContent

`func (o *ArticlesPropertyInner1) SetPaidContent(v bool)`

SetPaidContent sets PaidContent field to given value.

### HasPaidContent

`func (o *ArticlesPropertyInner1) HasPaidContent() bool`

HasPaidContent returns a boolean if a field has been set.

### GetExtractionData

`func (o *ArticlesPropertyInner1) GetExtractionData() string`

GetExtractionData returns the ExtractionData field if non-nil, zero value otherwise.

### GetExtractionDataOk

`func (o *ArticlesPropertyInner1) GetExtractionDataOk() (*string, bool)`

GetExtractionDataOk returns a tuple with the ExtractionData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractionData

`func (o *ArticlesPropertyInner1) SetExtractionData(v string)`

SetExtractionData sets ExtractionData field to given value.

### HasExtractionData

`func (o *ArticlesPropertyInner1) HasExtractionData() bool`

HasExtractionData returns a boolean if a field has been set.

### GetCountry

`func (o *ArticlesPropertyInner1) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *ArticlesPropertyInner1) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *ArticlesPropertyInner1) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *ArticlesPropertyInner1) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetRights

`func (o *ArticlesPropertyInner1) GetRights() string`

GetRights returns the Rights field if non-nil, zero value otherwise.

### GetRightsOk

`func (o *ArticlesPropertyInner1) GetRightsOk() (*string, bool)`

GetRightsOk returns a tuple with the Rights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRights

`func (o *ArticlesPropertyInner1) SetRights(v string)`

SetRights sets Rights field to given value.

### HasRights

`func (o *ArticlesPropertyInner1) HasRights() bool`

HasRights returns a boolean if a field has been set.

### GetRank

`func (o *ArticlesPropertyInner1) GetRank() int32`

GetRank returns the Rank field if non-nil, zero value otherwise.

### GetRankOk

`func (o *ArticlesPropertyInner1) GetRankOk() (*int32, bool)`

GetRankOk returns a tuple with the Rank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRank

`func (o *ArticlesPropertyInner1) SetRank(v int32)`

SetRank sets Rank field to given value.

### HasRank

`func (o *ArticlesPropertyInner1) HasRank() bool`

HasRank returns a boolean if a field has been set.

### GetMedia

`func (o *ArticlesPropertyInner1) GetMedia() string`

GetMedia returns the Media field if non-nil, zero value otherwise.

### GetMediaOk

`func (o *ArticlesPropertyInner1) GetMediaOk() (*string, bool)`

GetMediaOk returns a tuple with the Media field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedia

`func (o *ArticlesPropertyInner1) SetMedia(v string)`

SetMedia sets Media field to given value.

### HasMedia

`func (o *ArticlesPropertyInner1) HasMedia() bool`

HasMedia returns a boolean if a field has been set.

### GetLanguage

`func (o *ArticlesPropertyInner1) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ArticlesPropertyInner1) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ArticlesPropertyInner1) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *ArticlesPropertyInner1) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetContent

`func (o *ArticlesPropertyInner1) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ArticlesPropertyInner1) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ArticlesPropertyInner1) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *ArticlesPropertyInner1) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetWordCount

`func (o *ArticlesPropertyInner1) GetWordCount() int32`

GetWordCount returns the WordCount field if non-nil, zero value otherwise.

### GetWordCountOk

`func (o *ArticlesPropertyInner1) GetWordCountOk() (*int32, bool)`

GetWordCountOk returns a tuple with the WordCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordCount

`func (o *ArticlesPropertyInner1) SetWordCount(v int32)`

SetWordCount sets WordCount field to given value.

### HasWordCount

`func (o *ArticlesPropertyInner1) HasWordCount() bool`

HasWordCount returns a boolean if a field has been set.

### GetIsOpinion

`func (o *ArticlesPropertyInner1) GetIsOpinion() bool`

GetIsOpinion returns the IsOpinion field if non-nil, zero value otherwise.

### GetIsOpinionOk

`func (o *ArticlesPropertyInner1) GetIsOpinionOk() (*bool, bool)`

GetIsOpinionOk returns a tuple with the IsOpinion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOpinion

`func (o *ArticlesPropertyInner1) SetIsOpinion(v bool)`

SetIsOpinion sets IsOpinion field to given value.

### HasIsOpinion

`func (o *ArticlesPropertyInner1) HasIsOpinion() bool`

HasIsOpinion returns a boolean if a field has been set.

### GetTwitterAccount

`func (o *ArticlesPropertyInner1) GetTwitterAccount() string`

GetTwitterAccount returns the TwitterAccount field if non-nil, zero value otherwise.

### GetTwitterAccountOk

`func (o *ArticlesPropertyInner1) GetTwitterAccountOk() (*string, bool)`

GetTwitterAccountOk returns a tuple with the TwitterAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwitterAccount

`func (o *ArticlesPropertyInner1) SetTwitterAccount(v string)`

SetTwitterAccount sets TwitterAccount field to given value.

### HasTwitterAccount

`func (o *ArticlesPropertyInner1) HasTwitterAccount() bool`

HasTwitterAccount returns a boolean if a field has been set.

### GetAllLinks

`func (o *ArticlesPropertyInner1) GetAllLinks() ArticlesPropertyInnerAllLinks`

GetAllLinks returns the AllLinks field if non-nil, zero value otherwise.

### GetAllLinksOk

`func (o *ArticlesPropertyInner1) GetAllLinksOk() (*ArticlesPropertyInnerAllLinks, bool)`

GetAllLinksOk returns a tuple with the AllLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllLinks

`func (o *ArticlesPropertyInner1) SetAllLinks(v ArticlesPropertyInnerAllLinks)`

SetAllLinks sets AllLinks field to given value.

### HasAllLinks

`func (o *ArticlesPropertyInner1) HasAllLinks() bool`

HasAllLinks returns a boolean if a field has been set.

### GetAllDomainLinks

`func (o *ArticlesPropertyInner1) GetAllDomainLinks() ArticlesPropertyInnerAllDomainLinks`

GetAllDomainLinks returns the AllDomainLinks field if non-nil, zero value otherwise.

### GetAllDomainLinksOk

`func (o *ArticlesPropertyInner1) GetAllDomainLinksOk() (*ArticlesPropertyInnerAllDomainLinks, bool)`

GetAllDomainLinksOk returns a tuple with the AllDomainLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDomainLinks

`func (o *ArticlesPropertyInner1) SetAllDomainLinks(v ArticlesPropertyInnerAllDomainLinks)`

SetAllDomainLinks sets AllDomainLinks field to given value.

### HasAllDomainLinks

`func (o *ArticlesPropertyInner1) HasAllDomainLinks() bool`

HasAllDomainLinks returns a boolean if a field has been set.

### GetNlp

`func (o *ArticlesPropertyInner1) GetNlp() map[string]interface{}`

GetNlp returns the Nlp field if non-nil, zero value otherwise.

### GetNlpOk

`func (o *ArticlesPropertyInner1) GetNlpOk() (*map[string]interface{}, bool)`

GetNlpOk returns a tuple with the Nlp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNlp

`func (o *ArticlesPropertyInner1) SetNlp(v map[string]interface{})`

SetNlp sets Nlp field to given value.

### HasNlp

`func (o *ArticlesPropertyInner1) HasNlp() bool`

HasNlp returns a boolean if a field has been set.

### GetId

`func (o *ArticlesPropertyInner1) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ArticlesPropertyInner1) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ArticlesPropertyInner1) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ArticlesPropertyInner1) HasId() bool`

HasId returns a boolean if a field has been set.

### GetScore

`func (o *ArticlesPropertyInner1) GetScore() float32`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *ArticlesPropertyInner1) GetScoreOk() (*float32, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *ArticlesPropertyInner1) SetScore(v float32)`

SetScore sets Score field to given value.

### HasScore

`func (o *ArticlesPropertyInner1) HasScore() bool`

HasScore returns a boolean if a field has been set.

### GetSimilarDocuments

`func (o *ArticlesPropertyInner1) GetSimilarDocuments() []SimilarDocument1`

GetSimilarDocuments returns the SimilarDocuments field if non-nil, zero value otherwise.

### GetSimilarDocumentsOk

`func (o *ArticlesPropertyInner1) GetSimilarDocumentsOk() (*[]SimilarDocument1, bool)`

GetSimilarDocumentsOk returns a tuple with the SimilarDocuments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimilarDocuments

`func (o *ArticlesPropertyInner1) SetSimilarDocuments(v []SimilarDocument1)`

SetSimilarDocuments sets SimilarDocuments field to given value.

### HasSimilarDocuments

`func (o *ArticlesPropertyInner1) HasSimilarDocuments() bool`

HasSimilarDocuments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


