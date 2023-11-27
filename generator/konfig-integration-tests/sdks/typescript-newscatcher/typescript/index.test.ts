import { Newscatcher } from "./index";

// TODO: ENG-1429 Model properties should be camelCased in typescript SDKs
describe("newscatcherapi-typescript-sdk", () => {
  it("initialize client", async () => {
    const newscatcher = new Newscatcher({
      apiKey: "API_KEY",
    });
  });

  const client = new Newscatcher({
    basePath: "http://127.0.0.1:4041",
    apiKey: "dummy",
  });

  const getCommonParams = {
    lang: "lang_example",
    countries: "countries_example",
    notLang: "not_lang_example",
    notCountries: "not_countries_example",
    sources: "sources_example",
    predefinedSources: "predefined_sources_example",
    notSources: "not_sources_example",
    byParseDate: true,
    rankedOnly: "ranked_only_example",
    isHeadline: true,
    isPaidContent: true,
    parentUrl: "parent_url_example",
    allLinks: "all_links_example",
    allDomainLinks: "all_domain_links_example",
    wordCountMin: 100,
    wordCountMax: 100,
    page: 100,
    pageSize: 100,
    includeNlpData: true,
    hasNlp: true,
    theme: "theme_example",
    titleSentimentMin: 100,
    titleSentimentMax: 100,
    contentSentimentMin: 100,
    contentSentimentMax: 100,
  };
  const getToFromParams = {
    from: "from_example",
    to: "to_example",
    fromRank: 100,
    toRank: 100,
  };
  const getClusteringParams = {
    clusteringEnabled: true,
    clusteringThreshold: 100,
    clusteringVariable: "clustering_variable_example",
  };
  const getEntityParams = {
    orgEntityName: "org_entity_name_example",
    perEntityName: "per_entity_name_example",
    locEntityName: "loc_entity_name_example",
    miscEntityName: "misc_entity_name_example",
  };

  const postCommonParams = {
    lang: "lang_example",
    countries: "countries_example",
    not_lang: "not_lang_example",
    not_countries: "not_countries_example",
    sources: "sources_example",
    predefined_sources: "predefined_sources_example",
    not_sources: "not_sources_example",
    by_parse_date: true,
    ranked_only: "ranked_only_example",
    is_headline: true,
    is_paid_content: true,
    parent_url: "parent_url_example",
    all_links: "all_links_example",
    all_domain_links: "all_domain_links_example",
    word_count_min: 100,
    word_count_max: 100,
    page: 100,
    page_size: 100,
    include_nlp_data: true,
    has_nlp: true,
    theme: "theme_example",
    title_sentiment_min: 100,
    title_sentiment_max: 100,
    content_sentiment_min: 100,
    content_sentiment_max: 100,
  };
  const postToFromParams = {
    from_: "from_example",
    to_: "to_example",
    from_rank: 100,
    to_rank: 100,
  };
  const postClusteringParams = {
    clustering_enabled: true,
    clustering_threshold: 100,
    clustering_variable: "clustering_variable_example",
  };
  const postEntityParams = {
    ORG_entity_name: "org_entity_name_example",
    PER_entity_name: "per_entity_name_example",
    LOC_entity_name: "loc_entity_name_example",
    MISC_entity_name: "misc_entity_name_example",
  };

  it("search get", async () => {
    let result = await client.search.get({
      q: "q_example",
    });
    expect(result).not.toBeNull();
    result = await client.search.get({
      q: "q_example",
      ...getCommonParams,
      ...getToFromParams,
      ...getClusteringParams,
      ...getEntityParams,
      searchIn: "search_in_example",
      publishedDatePrecision: "published_date_precision_example",
      sortBy: "sort_by_example",
    });
    expect(result).not.toBeNull();
  });

  it("search post", async () => {
    let result = await client.search.post({
      q: "q_example",
    });
    expect(result).not.toBeNull();
    result = await client.search.post({
      q: "q_example",
      ...postCommonParams,
      ...postToFromParams,
      ...postClusteringParams,
      ...postEntityParams,
      search_in: "search_in_example",
      published_date_precision: "published_date_precision_example",
      sort_by: "sort_by_example",
    });
    expect(result).not.toBeNull();
  });

  it("latest headlines get", async () => {
    let result = client.latestHeadlines.get();
    expect(result).not.toBeNull();
    result = client.latestHeadlines.get({
      ...getCommonParams,
      ...getClusteringParams,
      ...getEntityParams,
      when: "when_example",
    });
    expect(result).not.toBeNull();
  });

  it("latest headlines post", async () => {
    let result = client.latestHeadlines.post({});
    expect(result).not.toBeNull();
    result = client.latestHeadlines.post({
      ...postCommonParams,
      ...postClusteringParams,
      ...postEntityParams,
      when: "when_example",
    });
    expect(result).not.toBeNull();
  });

  it("sources get", async () => {
    let result = await client.sources.get();
    expect(result).not.toBeNull();
    result = await client.sources.get({
      lang: "lang_example",
      countries: "countries_example",
    });
    expect(result).not.toBeNull();
  });

  it("sources post", async () => {
    let result = await client.sources.post({});
    expect(result).not.toBeNull();
    result = await client.sources.post({
      lang: "lang_example",
      countries: "countries_example",
    });
    expect(result).not.toBeNull();
  });

  it("authors get", async () => {
    let result = await client.authors.get({
      authorName: "authorName_example",
    });
    expect(result).not.toBeNull();
    result = await client.authors.get({
      authorName: "authorName_example",
      ...getCommonParams,
      ...getToFromParams,
      nerName: "nerName_example",
      publishedDatePrecision: "published_date_precision_example",
      sortBy: "sort_by_example",
    });
    expect(result).not.toBeNull();
  });

  it("authors post", async () => {
    let result = await client.authors.post({
      author_name: "authorName_example",
    });
    expect(result).not.toBeNull();
    result = await client.authors.post({
      author_name: "authorName_example",
      ...postCommonParams,
      ...postToFromParams,
      ner_name: "nerName_example",
      published_date_precision: "published_date_precision_example",
      sort_by: "sort_by_example",
    });
    expect(result).not.toBeNull();
  });

  it("search similar get", async () => {
    let result = await client.searchSimilar.get({
      q: "q_example",
    });
    expect(result).not.toBeNull();
    result = await client.searchSimilar.get({
      q: "q_example",
      ...getCommonParams,
      ...getToFromParams,
      searchIn: "search_in_example",
      publishedDatePrecision: "published_date_precision_example",
      sortBy: "sort_by_example",
      includeSimilarDocuments: true,
      similarDocumentsNumber: 100,
      similarDocumentsFields: "similar_documents_fields_example",
      nerName: "ner_name_example",
    });
    expect(result).not.toBeNull();
  });

  it("search similar post", async () => {
    let result = await client.searchSimilar.post({
      q: "q_example",
    });
    expect(result).not.toBeNull();
    result = await client.searchSimilar.post({
      q: "q_example",
      ...postCommonParams,
      ...postToFromParams,
      search_in: "search_in_example",
      published_date_precision: "published_date_precision_example",
      sort_by: "sort_by_example",
      include_similar_documents: true,
      similar_documents_number: 100,
      similar_documents_fields: "similar_documents_fields_example",
      ner_name: "ner_name_example",
    });
    expect(result).not.toBeNull();
  });

  it("subscrition get", async () => {
    let result = await client.subscription.get();
    expect(result).not.toBeNull();
  });

  it("subscrition post", async () => {
    let result = await client.subscription.post();
    expect(result).not.toBeNull();
  });
});
