import { Newscatcher } from "./index";

describe("newscatcherapi-typescript-sdk", () => {
  const client = new Newscatcher({
    basePath: "http://127.0.0.1:4115",
    apiKey: "dummy",
  });

  it("authors", async () => {
    const getResult = await client.authors.get_all({
      authorName: "authorName_example",
      pageSize: 10,
      nerName: "nerName_example",
      publishedDatePrecision: "published_date_precision_example",
      sortBy: "sort_by_example",
    })
    console.log(getResult)
    expect(getResult).not.toBeNull();
    expect(getResult).not.toBeUndefined();
    expect(getResult.length).toBe(6);

    const postResult = await client.authors.post_all({
      author_name: "authorName_example",
      page_size: 10,
      ner_name: "nerName_example",
      published_date_precision: "published_date_precision_example",
      sort_by: "sort_by_example",
    })
    console.log(postResult)
    expect(postResult).not.toBeNull();
    expect(postResult).not.toBeUndefined(); 
    expect(getResult.length).toBe(6);
  });
  it("search", async () => {
    const getResult = await client.search.get_all({
      q: "q_example",
      searchIn: "search_in_example",
      pageSize: 10,
    })
    console.log(getResult)
    expect(getResult).not.toBeNull();
    expect(getResult).not.toBeUndefined();
    expect(getResult.length).toBe(6);

    const postResult = await client.search.post_all({
      q: "q_example",
      page_size: 10,
      sort_by: "sort_by_example",
    })
    console.log(postResult)
    expect(postResult).not.toBeNull();
    expect(postResult).not.toBeUndefined(); 
    expect(getResult.length).toBe(6);
  });
  it("search similar", async () => {
    const getResult = await client.searchSimilar.get_all({
      q: "q_example",
      includeSimilarDocuments: true,
      pageSize: 10,
      nerName: "nerName_example",
      publishedDatePrecision: "published_date_precision_example",
      sortBy: "sort_by_example",
    })
    console.log(getResult)
    expect(getResult).not.toBeNull();
    expect(getResult).not.toBeUndefined();
    expect(getResult.length).toBe(6);

    const postResult = await client.searchSimilar.post_all({
      q: "q_example",
      page_size: 10,
      include_similar_documents: true,
      ner_name: "nerName_example",
      published_date_precision: "published_date_precision_example",
      sort_by: "sort_by_example",
    })
    console.log(postResult)
    expect(postResult).not.toBeNull();
    expect(postResult).not.toBeUndefined(); 
    expect(getResult.length).toBe(6);
  });
  it("latest headlines", async () => {
    const getResult = await client.latestHeadlines.get_all({
      lang: "lang_example",
      pageSize: 10,
    })
    console.log(getResult)
    expect(getResult).not.toBeNull();
    expect(getResult).not.toBeUndefined();
    expect(getResult.length).toBe(6);

    const postResult = await client.latestHeadlines.post_all({
      lang: "lang_example",
      page_size: 10,
    })
    console.log(postResult)
    expect(postResult).not.toBeNull();
    expect(postResult).not.toBeUndefined(); 
    expect(getResult.length).toBe(6);
  });
  it("search by link", async () => {
    const getResult = await client.searchLink.get_all({
      ids: "ids_example",
      pageSize: 10,
    })
    console.log(getResult)
    expect(getResult).not.toBeNull();
    expect(getResult).not.toBeUndefined();
    expect(getResult.length).toBe(6);

    const postResult = await client.searchLink.post_all({
      ids: "ids_example",
      page_size: 10,
    })
    console.log(postResult)
    expect(postResult).not.toBeNull();
    expect(postResult).not.toBeUndefined(); 
    expect(getResult.length).toBe(6);
  });
});
