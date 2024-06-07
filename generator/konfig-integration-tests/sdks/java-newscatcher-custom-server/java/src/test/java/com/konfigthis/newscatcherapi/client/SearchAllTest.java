package com.konfigthis.newscatcherapi.client;

import com.konfigthis.newscatcherapi.client.model.ArticlesPropertyInner;
import com.konfigthis.newscatcherapi.client.model.ArticlesPropertyInner1;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

public class SearchAllTest {
    final String MOCK_SERVER_URL = "http://localhost:4085";

    @Test
    public void authorsTest() {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "API KEY";
        Newscatcher client = new Newscatcher(configuration);

        List<ArticlesPropertyInner> getResult = client.authors.get("author_name_example")
            .publishedDatePrecision("published_date_precision_example")
            .sortBy("sort_by_example")
            .nerName("ner_name_example")
            .executeSearchAll();
        Assertions.assertNotNull(getResult);
        Assertions.assertEquals(6, getResult.size());

        List<ArticlesPropertyInner> postResult = client.authors.post("author_name_example")
                .publishedDatePrecision("published_date_precision_example")
                .sortBy("sort_by_example")
                .nerName("ner_name_example")
                .executeSearchAll();
        Assertions.assertNotNull(postResult);
        Assertions.assertEquals(6, postResult.size());
    }

    @Test
    public void latestHeadlinesTest() {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "API KEY";
        Newscatcher client = new Newscatcher(configuration);

        List<Object> getResult = client.latestHeadlines.get()
                .when("when_example")
                .executeSearchAll();
        Assertions.assertNotNull(getResult);
        Assertions.assertEquals(6, getResult.size());

        List<Object> postResult = client.latestHeadlines.post()
                .when("when_example")
                .executeSearchAll();
        Assertions.assertNotNull(postResult);
        Assertions.assertEquals(6, postResult.size());
    }

    @Test
    public void searchTest() {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "API KEY";
        Newscatcher client = new Newscatcher(configuration);

        List<Object> getResult = client.search.get("q_example")
            .searchIn("search_in_example")
            .publishedDatePrecision("published_date_precision_example")
            .sortBy("sort_by_example")
            .executeSearchAll();
        Assertions.assertNotNull(getResult);
        Assertions.assertEquals(6, getResult.size());

        List<Object> postResult = client.search.post("q_example")
                .searchIn("search_in_example")
                .publishedDatePrecision("published_date_precision_example")
                .sortBy("sort_by_example")
                .executeSearchAll();
        Assertions.assertNotNull(postResult);
        Assertions.assertEquals(6, postResult.size());
    }

    @Test
    public void searchLinkTest() {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "API KEY";
        Newscatcher client = new Newscatcher(configuration);

        List<Object> getResult = client.searchLink.get().executeSearchAll();
        Assertions.assertNotNull(getResult);
        Assertions.assertEquals(6, getResult.size());

        List<Object> postResult = client.searchLink.post().executeSearchAll();
        Assertions.assertNotNull(postResult);
        Assertions.assertEquals(6, postResult.size());
    }

    @Test
    public void searchSimilarTest() {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "API KEY";
        Newscatcher client = new Newscatcher(configuration);

        List<ArticlesPropertyInner1> getResult = client.searchSimilar.get("q_example")
                .searchIn("search_in_example")
                .publishedDatePrecision("published_date_precision_example")
                .sortBy("sort_by_example")
                .includeSimilarDocuments(true)
                .similarDocumentsNumber(100)
                .similarDocumentsFields("similar_documents_fields_example")
                .nerName("ner_name_example")
                .executeSearchAll();
        Assertions.assertNotNull(getResult);
        Assertions.assertEquals(6, getResult.size());

        List<ArticlesPropertyInner1> postResult = client.searchSimilar.post("q_example")
                .searchIn("search_in_example")
                .publishedDatePrecision("published_date_precision_example")
                .sortBy("sort_by_example")
                .includeSimilarDocuments(true)
                .similarDocumentsNumber(100)
                .similarDocumentsFields("similar_documents_fields_example")
                .nerName("ner_name_example")
                .executeSearchAll();
        Assertions.assertNotNull(postResult);
        Assertions.assertEquals(6, postResult.size());
    }
}
