# newscatcherapi-typescript-sdk<a id="newscatcherapi-typescript-sdk"></a>

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

[![npm](https://img.shields.io/badge/npm-v6.0.7-blue)](https://www.npmjs.com/package/newscatcherapi-typescript-sdk/v/6.0.7)

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`newscatcher.authors.get`](#newscatcherauthorsget)
  * [`newscatcher.authors.post`](#newscatcherauthorspost)
  * [`newscatcher.latestHeadlines.get`](#newscatcherlatestheadlinesget)
  * [`newscatcher.latestHeadlines.post`](#newscatcherlatestheadlinespost)
  * [`newscatcher.search.get`](#newscatchersearchget)
  * [`newscatcher.search.post`](#newscatchersearchpost)
  * [`newscatcher.searchLink.get`](#newscatchersearchlinkget)
  * [`newscatcher.searchLink.post`](#newscatchersearchlinkpost)
  * [`newscatcher.searchSimilar.get`](#newscatchersearchsimilarget)
  * [`newscatcher.searchSimilar.post`](#newscatchersearchsimilarpost)
  * [`newscatcher.sources.get`](#newscatchersourcesget)
  * [`newscatcher.sources.post`](#newscatchersourcespost)
  * [`newscatcher.subscription.get`](#newscatchersubscriptionget)
  * [`newscatcher.subscription.post`](#newscatchersubscriptionpost)

<!-- tocstop -->

## Installation<a id="installation"></a>

<table>
<tr>
<th width="292px"><code>npm</code></th>
<th width="293px"><code>pnpm</code></th>
<th width="292px"><code>yarn</code></th>
</tr>
<tr>
<td>

```bash
npm i newscatcherapi-typescript-sdk
```

</td>
<td>

```bash
pnpm i newscatcherapi-typescript-sdk
```

</td>
<td>

```bash
yarn add newscatcherapi-typescript-sdk
```

</td>
</tr>
</table>

## Getting Started<a id="getting-started"></a>

```typescript
import { Newscatcher } from "newscatcherapi-typescript-sdk";

const newscatcher = new Newscatcher({
  // Defining the base path is optional and defaults to https://v3-api.newscatcherapi.com
  // basePath: "https://v3-api.newscatcherapi.com",
  apiKey: "API_KEY",
});

const getResponse = await newscatcher.authors.get({
  authorName: "authorName_example",
  byParseDate: false,
  sortBy: "relevancy",
  page: 1,
  pageSize: 100,
});

console.log(getResponse);
```

## Reference<a id="reference"></a>


### `newscatcher.authors.get`<a id="newscatcherauthorsget"></a>

This endpoint allows you to search for articles by author. You need to specify the author name. You can also filter by language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await newscatcher.authors.get({
  authorName: "authorName_example",
  byParseDate: false,
  sortBy: "relevancy",
  page: 1,
  pageSize: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorName: `string`<a id="authorname-string"></a>

##### notAuthorName: `string`<a id="notauthorname-string"></a>

##### sources: `any`<a id="sources-any"></a>

##### predefinedSources: `any`<a id="predefinedsources-any"></a>

##### notSources: `any`<a id="notsources-any"></a>

##### lang: `any`<a id="lang-any"></a>

##### notLang: `any`<a id="notlang-any"></a>

##### countries: `any`<a id="countries-any"></a>

##### notCountries: `any`<a id="notcountries-any"></a>

##### from: [`From`](./models/from.ts)<a id="from-frommodelsfromts"></a>

##### to: [`To`](./models/to.ts)<a id="to-tomodelstots"></a>

##### publishedDatePrecision: `string`<a id="publisheddateprecision-string"></a>

##### byParseDate: `boolean`<a id="byparsedate-boolean"></a>

##### sortBy: `string`<a id="sortby-string"></a>

##### rankedOnly: `string`<a id="rankedonly-string"></a>

##### fromRank: `number`<a id="fromrank-number"></a>

##### toRank: `number`<a id="torank-number"></a>

##### isHeadline: `boolean`<a id="isheadline-boolean"></a>

##### isPaidContent: `boolean`<a id="ispaidcontent-boolean"></a>

##### parentUrl: `any`<a id="parenturl-any"></a>

##### allLinks: `any`<a id="alllinks-any"></a>

##### allDomainLinks: `any`<a id="alldomainlinks-any"></a>

##### wordCountMin: `number`<a id="wordcountmin-number"></a>

##### wordCountMax: `number`<a id="wordcountmax-number"></a>

##### page: `number`<a id="page-number"></a>

##### pageSize: `number`<a id="pagesize-number"></a>

##### includeNlpData: `boolean`<a id="includenlpdata-boolean"></a>

##### hasNlp: `boolean`<a id="hasnlp-boolean"></a>

##### theme: `string`<a id="theme-string"></a>

##### notTheme: `string`<a id="nottheme-string"></a>

##### nerName: `string`<a id="nername-string"></a>

##### titleSentimentMin: `number`<a id="titlesentimentmin-number"></a>

##### titleSentimentMax: `number`<a id="titlesentimentmax-number"></a>

##### contentSentimentMin: `number`<a id="contentsentimentmin-number"></a>

##### contentSentimentMax: `number`<a id="contentsentimentmax-number"></a>

##### iptcTags: `any`<a id="iptctags-any"></a>

##### notIptcTags: `any`<a id="notiptctags-any"></a>

##### iabTags: `any`<a id="iabtags-any"></a>

##### notIabTags: `any`<a id="notiabtags-any"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AuthorsGetResponse](./models/authors-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/authors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.authors.post`<a id="newscatcherauthorspost"></a>

This endpoint allows you to search for articles by author. You need to specify the author name. You can also filter by language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postResponse = await newscatcher.authors.post({
  author_name: "author_name_example",
  by_parse_date: false,
  sort_by: "relevancy",
  page: 1,
  page_size: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### author_name: `string`<a id="author_name-string"></a>

##### not_author_name: `string`<a id="not_author_name-string"></a>

##### sources: `any`<a id="sources-any"></a>

##### predefined_sources: `any`<a id="predefined_sources-any"></a>

##### not_sources: `any`<a id="not_sources-any"></a>

##### lang: `any`<a id="lang-any"></a>

##### not_lang: `any`<a id="not_lang-any"></a>

##### countries: `any`<a id="countries-any"></a>

##### not_countries: `any`<a id="not_countries-any"></a>

##### from_: [`From`](./models/from.ts)<a id="from_-frommodelsfromts"></a>

##### to_: [`To`](./models/to.ts)<a id="to_-tomodelstots"></a>

##### published_date_precision: `string`<a id="published_date_precision-string"></a>

##### by_parse_date: `boolean`<a id="by_parse_date-boolean"></a>

##### sort_by: `string`<a id="sort_by-string"></a>

##### ranked_only: `string`<a id="ranked_only-string"></a>

##### from_rank: `number`<a id="from_rank-number"></a>

##### to_rank: `number`<a id="to_rank-number"></a>

##### is_headline: `boolean`<a id="is_headline-boolean"></a>

##### is_paid_content: `boolean`<a id="is_paid_content-boolean"></a>

##### parent_url: `any`<a id="parent_url-any"></a>

##### all_links: `any`<a id="all_links-any"></a>

##### all_domain_links: `any`<a id="all_domain_links-any"></a>

##### word_count_min: `number`<a id="word_count_min-number"></a>

##### word_count_max: `number`<a id="word_count_max-number"></a>

##### page: `number`<a id="page-number"></a>

##### page_size: `number`<a id="page_size-number"></a>

##### include_nlp_data: `boolean`<a id="include_nlp_data-boolean"></a>

##### has_nlp: `boolean`<a id="has_nlp-boolean"></a>

##### theme: `string`<a id="theme-string"></a>

##### not_theme: `string`<a id="not_theme-string"></a>

##### ner_name: `string`<a id="ner_name-string"></a>

##### title_sentiment_min: `number`<a id="title_sentiment_min-number"></a>

##### title_sentiment_max: `number`<a id="title_sentiment_max-number"></a>

##### content_sentiment_min: `number`<a id="content_sentiment_min-number"></a>

##### content_sentiment_max: `number`<a id="content_sentiment_max-number"></a>

##### iptc_tags: `any`<a id="iptc_tags-any"></a>

##### not_iptc_tags: `any`<a id="not_iptc_tags-any"></a>

##### iab_tags: `any`<a id="iab_tags-any"></a>

##### not_iab_tags: `any`<a id="not_iab_tags-any"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AuthorsPostResponse](./models/authors-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/authors` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.latestHeadlines.get`<a id="newscatcherlatestheadlinesget"></a>

This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await newscatcher.latestHeadlines.get({
  when: "7d",
  byParseDate: false,
  page: 1,
  pageSize: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### when: `string`<a id="when-string"></a>

##### byParseDate: `boolean`<a id="byparsedate-boolean"></a>

##### lang: `any`<a id="lang-any"></a>

##### notLang: `any`<a id="notlang-any"></a>

##### countries: `any`<a id="countries-any"></a>

##### notCountries: `any`<a id="notcountries-any"></a>

##### sources: `any`<a id="sources-any"></a>

##### predefinedSources: `any`<a id="predefinedsources-any"></a>

##### notSources: `any`<a id="notsources-any"></a>

##### notAuthorName: `any`<a id="notauthorname-any"></a>

##### rankedOnly: `string`<a id="rankedonly-string"></a>

##### isHeadline: `boolean`<a id="isheadline-boolean"></a>

##### isPaidContent: `boolean`<a id="ispaidcontent-boolean"></a>

##### parentUrl: `any`<a id="parenturl-any"></a>

##### allLinks: `any`<a id="alllinks-any"></a>

##### allDomainLinks: `any`<a id="alldomainlinks-any"></a>

##### wordCountMin: `number`<a id="wordcountmin-number"></a>

##### wordCountMax: `number`<a id="wordcountmax-number"></a>

##### page: `number`<a id="page-number"></a>

##### pageSize: `number`<a id="pagesize-number"></a>

##### clusteringVariable: `string`<a id="clusteringvariable-string"></a>

##### clusteringEnabled: `boolean`<a id="clusteringenabled-boolean"></a>

##### clusteringThreshold: `number`<a id="clusteringthreshold-number"></a>

##### includeNlpData: `boolean`<a id="includenlpdata-boolean"></a>

##### hasNlp: `boolean`<a id="hasnlp-boolean"></a>

##### theme: `string`<a id="theme-string"></a>

##### notTheme: `string`<a id="nottheme-string"></a>

##### orgEntityName: `string`<a id="orgentityname-string"></a>

##### perEntityName: `string`<a id="perentityname-string"></a>

##### locEntityName: `string`<a id="locentityname-string"></a>

##### miscEntityName: `string`<a id="miscentityname-string"></a>

##### titleSentimentMin: `number`<a id="titlesentimentmin-number"></a>

##### titleSentimentMax: `number`<a id="titlesentimentmax-number"></a>

##### contentSentimentMin: `number`<a id="contentsentimentmin-number"></a>

##### contentSentimentMax: `number`<a id="contentsentimentmax-number"></a>

##### iptcTags: `any`<a id="iptctags-any"></a>

##### notIptcTags: `any`<a id="notiptctags-any"></a>

##### iabTags: `any`<a id="iabtags-any"></a>

##### notIabTags: `any`<a id="notiabtags-any"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LatestHeadlinesGetResponse](./models/latest-headlines-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/latest_headlines` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.latestHeadlines.post`<a id="newscatcherlatestheadlinespost"></a>

This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postResponse = await newscatcher.latestHeadlines.post({
  when: "7d",
  by_parse_date: false,
  page: 1,
  page_size: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### when: `string`<a id="when-string"></a>

##### by_parse_date: `boolean`<a id="by_parse_date-boolean"></a>

##### lang: `any`<a id="lang-any"></a>

##### not_lang: `any`<a id="not_lang-any"></a>

##### countries: `any`<a id="countries-any"></a>

##### not_countries: `any`<a id="not_countries-any"></a>

##### sources: `any`<a id="sources-any"></a>

##### predefined_sources: `any`<a id="predefined_sources-any"></a>

##### not_sources: `any`<a id="not_sources-any"></a>

##### not_author_name: `any`<a id="not_author_name-any"></a>

##### ranked_only: `string`<a id="ranked_only-string"></a>

##### is_headline: `boolean`<a id="is_headline-boolean"></a>

##### is_paid_content: `boolean`<a id="is_paid_content-boolean"></a>

##### parent_url: `any`<a id="parent_url-any"></a>

##### all_links: `any`<a id="all_links-any"></a>

##### all_domain_links: `any`<a id="all_domain_links-any"></a>

##### word_count_min: `number`<a id="word_count_min-number"></a>

##### word_count_max: `number`<a id="word_count_max-number"></a>

##### page: `number`<a id="page-number"></a>

##### page_size: `number`<a id="page_size-number"></a>

##### clustering_variable: `string`<a id="clustering_variable-string"></a>

##### clustering_enabled: `boolean`<a id="clustering_enabled-boolean"></a>

##### clustering_threshold: `number`<a id="clustering_threshold-number"></a>

##### include_nlp_data: `boolean`<a id="include_nlp_data-boolean"></a>

##### has_nlp: `boolean`<a id="has_nlp-boolean"></a>

##### theme: `string`<a id="theme-string"></a>

##### not_theme: `string`<a id="not_theme-string"></a>

##### ORG_entity_name: `string`<a id="org_entity_name-string"></a>

##### PER_entity_name: `string`<a id="per_entity_name-string"></a>

##### LOC_entity_name: `string`<a id="loc_entity_name-string"></a>

##### MISC_entity_name: `string`<a id="misc_entity_name-string"></a>

##### title_sentiment_min: `number`<a id="title_sentiment_min-number"></a>

##### title_sentiment_max: `number`<a id="title_sentiment_max-number"></a>

##### content_sentiment_min: `number`<a id="content_sentiment_min-number"></a>

##### content_sentiment_max: `number`<a id="content_sentiment_max-number"></a>

##### iptc_tags: `any`<a id="iptc_tags-any"></a>

##### not_iptc_tags: `any`<a id="not_iptc_tags-any"></a>

##### iab_tags: `any`<a id="iab_tags-any"></a>

##### not_iab_tags: `any`<a id="not_iab_tags-any"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LatestHeadlinesPostResponse](./models/latest-headlines-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/latest_headlines` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.search.get`<a id="newscatchersearchget"></a>

This endpoint allows you to search for articles. You can search for articles by keyword, language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await newscatcher.search.get({
  q: "q_example",
  searchIn: "title_content",
  byParseDate: false,
  sortBy: "relevancy",
  page: 1,
  pageSize: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

##### searchIn: `string`<a id="searchin-string"></a>

##### predefinedSources: `any`<a id="predefinedsources-any"></a>

##### sources: `any`<a id="sources-any"></a>

##### notSources: `any`<a id="notsources-any"></a>

##### lang: `any`<a id="lang-any"></a>

##### notLang: `any`<a id="notlang-any"></a>

##### countries: `any`<a id="countries-any"></a>

##### notCountries: `any`<a id="notcountries-any"></a>

##### notAuthorName: `any`<a id="notauthorname-any"></a>

##### from: [`From`](./models/from.ts)<a id="from-frommodelsfromts"></a>

##### to: [`To`](./models/to.ts)<a id="to-tomodelstots"></a>

##### publishedDatePrecision: `string`<a id="publisheddateprecision-string"></a>

##### byParseDate: `boolean`<a id="byparsedate-boolean"></a>

##### sortBy: `string`<a id="sortby-string"></a>

##### rankedOnly: `string`<a id="rankedonly-string"></a>

##### fromRank: `number`<a id="fromrank-number"></a>

##### toRank: `number`<a id="torank-number"></a>

##### isHeadline: `boolean`<a id="isheadline-boolean"></a>

##### isPaidContent: `boolean`<a id="ispaidcontent-boolean"></a>

##### parentUrl: `any`<a id="parenturl-any"></a>

##### allLinks: `any`<a id="alllinks-any"></a>

##### allDomainLinks: `any`<a id="alldomainlinks-any"></a>

##### wordCountMin: `number`<a id="wordcountmin-number"></a>

##### wordCountMax: `number`<a id="wordcountmax-number"></a>

##### page: `number`<a id="page-number"></a>

##### pageSize: `number`<a id="pagesize-number"></a>

##### clusteringVariable: `string`<a id="clusteringvariable-string"></a>

##### clusteringEnabled: `boolean`<a id="clusteringenabled-boolean"></a>

##### clusteringThreshold: `number`<a id="clusteringthreshold-number"></a>

##### includeNlpData: `boolean`<a id="includenlpdata-boolean"></a>

##### hasNlp: `boolean`<a id="hasnlp-boolean"></a>

##### theme: `string`<a id="theme-string"></a>

##### notTheme: `string`<a id="nottheme-string"></a>

##### orgEntityName: `string`<a id="orgentityname-string"></a>

##### perEntityName: `string`<a id="perentityname-string"></a>

##### locEntityName: `string`<a id="locentityname-string"></a>

##### miscEntityName: `string`<a id="miscentityname-string"></a>

##### titleSentimentMin: `number`<a id="titlesentimentmin-number"></a>

##### titleSentimentMax: `number`<a id="titlesentimentmax-number"></a>

##### contentSentimentMin: `number`<a id="contentsentimentmin-number"></a>

##### contentSentimentMax: `number`<a id="contentsentimentmax-number"></a>

##### iptcTags: `any`<a id="iptctags-any"></a>

##### notIptcTags: `any`<a id="notiptctags-any"></a>

##### sourceName: `any`<a id="sourcename-any"></a>

##### iabTags: `any`<a id="iabtags-any"></a>

##### notIabTags: `any`<a id="notiabtags-any"></a>

##### excludeDuplicates: `boolean`<a id="excludeduplicates-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SearchGetResponse](./models/search-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.search.post`<a id="newscatchersearchpost"></a>

This endpoint allows you to search for articles. You can search for articles by keyword, language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postResponse = await newscatcher.search.post({
  q: "q_example",
  search_in: "title_content",
  by_parse_date: false,
  sort_by: "relevancy",
  page: 1,
  page_size: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

##### search_in: `string`<a id="search_in-string"></a>

##### predefined_sources: `any`<a id="predefined_sources-any"></a>

##### sources: `any`<a id="sources-any"></a>

##### not_sources: `any`<a id="not_sources-any"></a>

##### lang: `any`<a id="lang-any"></a>

##### not_lang: `any`<a id="not_lang-any"></a>

##### countries: `any`<a id="countries-any"></a>

##### not_countries: `any`<a id="not_countries-any"></a>

##### not_author_name: `any`<a id="not_author_name-any"></a>

##### from_: [`From`](./models/from.ts)<a id="from_-frommodelsfromts"></a>

##### to_: [`To`](./models/to.ts)<a id="to_-tomodelstots"></a>

##### published_date_precision: `string`<a id="published_date_precision-string"></a>

##### by_parse_date: `boolean`<a id="by_parse_date-boolean"></a>

##### sort_by: `string`<a id="sort_by-string"></a>

##### ranked_only: `string`<a id="ranked_only-string"></a>

##### from_rank: `number`<a id="from_rank-number"></a>

##### to_rank: `number`<a id="to_rank-number"></a>

##### is_headline: `boolean`<a id="is_headline-boolean"></a>

##### is_paid_content: `boolean`<a id="is_paid_content-boolean"></a>

##### parent_url: `any`<a id="parent_url-any"></a>

##### all_links: `any`<a id="all_links-any"></a>

##### all_domain_links: `any`<a id="all_domain_links-any"></a>

##### word_count_min: `number`<a id="word_count_min-number"></a>

##### word_count_max: `number`<a id="word_count_max-number"></a>

##### page: `number`<a id="page-number"></a>

##### page_size: `number`<a id="page_size-number"></a>

##### clustering_variable: `string`<a id="clustering_variable-string"></a>

##### clustering_enabled: `boolean`<a id="clustering_enabled-boolean"></a>

##### clustering_threshold: `number`<a id="clustering_threshold-number"></a>

##### include_nlp_data: `boolean`<a id="include_nlp_data-boolean"></a>

##### has_nlp: `boolean`<a id="has_nlp-boolean"></a>

##### theme: `string`<a id="theme-string"></a>

##### not_theme: `string`<a id="not_theme-string"></a>

##### ORG_entity_name: `string`<a id="org_entity_name-string"></a>

##### PER_entity_name: `string`<a id="per_entity_name-string"></a>

##### LOC_entity_name: `string`<a id="loc_entity_name-string"></a>

##### MISC_entity_name: `string`<a id="misc_entity_name-string"></a>

##### title_sentiment_min: `number`<a id="title_sentiment_min-number"></a>

##### title_sentiment_max: `number`<a id="title_sentiment_max-number"></a>

##### content_sentiment_min: `number`<a id="content_sentiment_min-number"></a>

##### content_sentiment_max: `number`<a id="content_sentiment_max-number"></a>

##### iptc_tags: `any`<a id="iptc_tags-any"></a>

##### not_iptc_tags: `any`<a id="not_iptc_tags-any"></a>

##### source_name: `any`<a id="source_name-any"></a>

##### iab_tags: `any`<a id="iab_tags-any"></a>

##### not_iab_tags: `any`<a id="not_iab_tags-any"></a>

##### exclude_duplicates: `boolean`<a id="exclude_duplicates-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SearchPostResponse](./models/search-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.searchLink.get`<a id="newscatchersearchlinkget"></a>

This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await newscatcher.searchLink.get({
  page: 1,
  pageSize: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `any`<a id="ids-any"></a>

##### links: `any`<a id="links-any"></a>

##### page: `number`<a id="page-number"></a>

##### pageSize: `number`<a id="pagesize-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DtoResponsesSearchResponseSearchResponse](./models/dto-responses-search-response-search-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search_by_link` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.searchLink.post`<a id="newscatchersearchlinkpost"></a>

This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postResponse = await newscatcher.searchLink.post({
  page: 1,
  page_size: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `any`<a id="ids-any"></a>

##### links: `any`<a id="links-any"></a>

##### page: `number`<a id="page-number"></a>

##### page_size: `number`<a id="page_size-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DtoResponsesSearchResponseSearchResponse](./models/dto-responses-search-response-search-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search_by_link` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.searchSimilar.get`<a id="newscatchersearchsimilarget"></a>

This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await newscatcher.searchSimilar.get({
  q: "q_example",
  searchIn: "title_content",
  includeSimilarDocuments: false,
  similarDocumentsNumber: 5,
  similarDocumentsFields: "title,content",
  byParseDate: false,
  sortBy: "relevancy",
  page: 1,
  pageSize: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

##### searchIn: `string`<a id="searchin-string"></a>

##### includeSimilarDocuments: `boolean`<a id="includesimilardocuments-boolean"></a>

##### similarDocumentsNumber: `number`<a id="similardocumentsnumber-number"></a>

##### similarDocumentsFields: `string`<a id="similardocumentsfields-string"></a>

##### predefinedSources: `any`<a id="predefinedsources-any"></a>

##### sources: `any`<a id="sources-any"></a>

##### notSources: `any`<a id="notsources-any"></a>

##### lang: `any`<a id="lang-any"></a>

##### notLang: `any`<a id="notlang-any"></a>

##### countries: `any`<a id="countries-any"></a>

##### notCountries: `any`<a id="notcountries-any"></a>

##### from: [`From`](./models/from.ts)<a id="from-frommodelsfromts"></a>

##### to: [`To`](./models/to.ts)<a id="to-tomodelstots"></a>

##### byParseDate: `boolean`<a id="byparsedate-boolean"></a>

##### publishedDatePrecision: `string`<a id="publisheddateprecision-string"></a>

##### sortBy: `string`<a id="sortby-string"></a>

##### rankedOnly: `string`<a id="rankedonly-string"></a>

##### fromRank: `number`<a id="fromrank-number"></a>

##### toRank: `number`<a id="torank-number"></a>

##### isHeadline: `boolean`<a id="isheadline-boolean"></a>

##### isPaidContent: `boolean`<a id="ispaidcontent-boolean"></a>

##### parentUrl: `any`<a id="parenturl-any"></a>

##### allLinks: `any`<a id="alllinks-any"></a>

##### allDomainLinks: `any`<a id="alldomainlinks-any"></a>

##### wordCountMin: `number`<a id="wordcountmin-number"></a>

##### wordCountMax: `number`<a id="wordcountmax-number"></a>

##### page: `number`<a id="page-number"></a>

##### pageSize: `number`<a id="pagesize-number"></a>

##### includeNlpData: `boolean`<a id="includenlpdata-boolean"></a>

##### hasNlp: `boolean`<a id="hasnlp-boolean"></a>

##### theme: `string`<a id="theme-string"></a>

##### notTheme: `string`<a id="nottheme-string"></a>

##### nerName: `string`<a id="nername-string"></a>

##### titleSentimentMin: `number`<a id="titlesentimentmin-number"></a>

##### titleSentimentMax: `number`<a id="titlesentimentmax-number"></a>

##### contentSentimentMin: `number`<a id="contentsentimentmin-number"></a>

##### contentSentimentMax: `number`<a id="contentsentimentmax-number"></a>

##### iptcTags: `any`<a id="iptctags-any"></a>

##### notIptcTags: `any`<a id="notiptctags-any"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SearchSimilarGetResponse](./models/search-similar-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search_similar` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.searchSimilar.post`<a id="newscatchersearchsimilarpost"></a>

This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postResponse = await newscatcher.searchSimilar.post({
  q: "q_example",
  search_in: "title_content",
  include_similar_documents: false,
  similar_documents_number: 5,
  similar_documents_fields: "title,content",
  by_parse_date: false,
  sort_by: "relevancy",
  page: 1,
  page_size: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

##### search_in: `string`<a id="search_in-string"></a>

##### include_similar_documents: `boolean`<a id="include_similar_documents-boolean"></a>

##### similar_documents_number: `number`<a id="similar_documents_number-number"></a>

##### similar_documents_fields: `string`<a id="similar_documents_fields-string"></a>

##### predefined_sources: `any`<a id="predefined_sources-any"></a>

##### sources: `any`<a id="sources-any"></a>

##### not_sources: `any`<a id="not_sources-any"></a>

##### lang: `any`<a id="lang-any"></a>

##### not_lang: `any`<a id="not_lang-any"></a>

##### countries: `any`<a id="countries-any"></a>

##### not_countries: `any`<a id="not_countries-any"></a>

##### from_: [`From`](./models/from.ts)<a id="from_-frommodelsfromts"></a>

##### to_: [`To`](./models/to.ts)<a id="to_-tomodelstots"></a>

##### by_parse_date: `boolean`<a id="by_parse_date-boolean"></a>

##### published_date_precision: `string`<a id="published_date_precision-string"></a>

##### sort_by: `string`<a id="sort_by-string"></a>

##### ranked_only: `string`<a id="ranked_only-string"></a>

##### from_rank: `number`<a id="from_rank-number"></a>

##### to_rank: `number`<a id="to_rank-number"></a>

##### is_headline: `boolean`<a id="is_headline-boolean"></a>

##### is_paid_content: `boolean`<a id="is_paid_content-boolean"></a>

##### parent_url: `any`<a id="parent_url-any"></a>

##### all_links: `any`<a id="all_links-any"></a>

##### all_domain_links: `any`<a id="all_domain_links-any"></a>

##### word_count_min: `number`<a id="word_count_min-number"></a>

##### word_count_max: `number`<a id="word_count_max-number"></a>

##### page: `number`<a id="page-number"></a>

##### page_size: `number`<a id="page_size-number"></a>

##### include_nlp_data: `boolean`<a id="include_nlp_data-boolean"></a>

##### has_nlp: `boolean`<a id="has_nlp-boolean"></a>

##### theme: `string`<a id="theme-string"></a>

##### not_theme: `string`<a id="not_theme-string"></a>

##### ner_name: `string`<a id="ner_name-string"></a>

##### title_sentiment_min: `number`<a id="title_sentiment_min-number"></a>

##### title_sentiment_max: `number`<a id="title_sentiment_max-number"></a>

##### content_sentiment_min: `number`<a id="content_sentiment_min-number"></a>

##### content_sentiment_max: `number`<a id="content_sentiment_max-number"></a>

##### iptc_tags: `any`<a id="iptc_tags-any"></a>

##### not_iptc_tags: `any`<a id="not_iptc_tags-any"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SearchSimilarPostResponse](./models/search-similar-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search_similar` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.sources.get`<a id="newscatchersourcesget"></a>

This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await newscatcher.sources.get({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### lang: `string`<a id="lang-string"></a>

##### countries: `string`<a id="countries-string"></a>

##### predefinedSources: `string`<a id="predefinedsources-string"></a>

##### includeAdditionalInfo: `boolean`<a id="includeadditionalinfo-boolean"></a>

##### fromRank: `number`<a id="fromrank-number"></a>

##### toRank: `number`<a id="torank-number"></a>

##### sourceName: `any`<a id="sourcename-any"></a>

##### sourceUrl: `string`<a id="sourceurl-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SourceResponse](./models/source-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/sources` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.sources.post`<a id="newscatchersourcespost"></a>

This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postResponse = await newscatcher.sources.post({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### lang: `string`<a id="lang-string"></a>

##### countries: `string`<a id="countries-string"></a>

##### predefined_sources: `string`<a id="predefined_sources-string"></a>

##### include_additional_info: `boolean`<a id="include_additional_info-boolean"></a>

##### from_rank: `number`<a id="from_rank-number"></a>

##### to_rank: `number`<a id="to_rank-number"></a>

##### source_name: `any`<a id="source_name-any"></a>

##### source_url: `string`<a id="source_url-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SourceResponse](./models/source-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/sources` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.subscription.get`<a id="newscatchersubscriptionget"></a>

This endpoint allows you to get info about your subscription plan.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await newscatcher.subscription.get();
```

#### 🔄 Return<a id="🔄-return"></a>

[SubscriptionResponse](./models/subscription-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/subscription` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `newscatcher.subscription.post`<a id="newscatchersubscriptionpost"></a>

This endpoint allows you to get info about your subscription plan.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postResponse = await newscatcher.subscription.post();
```

#### 🔄 Return<a id="🔄-return"></a>

[SubscriptionResponse](./models/subscription-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/subscription` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
