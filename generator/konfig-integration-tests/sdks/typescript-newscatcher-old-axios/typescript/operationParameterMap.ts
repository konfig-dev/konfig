type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/authors-GET': {
        parameters: [
            {
                name: 'author_name'
            },
            {
                name: 'sources'
            },
            {
                name: 'predefined_sources'
            },
            {
                name: 'not_sources'
            },
            {
                name: 'lang'
            },
            {
                name: 'not_lang'
            },
            {
                name: 'countries'
            },
            {
                name: 'not_countries'
            },
            {
                name: 'from_'
            },
            {
                name: 'to_'
            },
            {
                name: 'published_date_precision'
            },
            {
                name: 'by_parse_date'
            },
            {
                name: 'sort_by'
            },
            {
                name: 'ranked_only'
            },
            {
                name: 'from_rank'
            },
            {
                name: 'to_rank'
            },
            {
                name: 'is_headline'
            },
            {
                name: 'is_paid_content'
            },
            {
                name: 'parent_url'
            },
            {
                name: 'all_links'
            },
            {
                name: 'all_domain_links'
            },
            {
                name: 'word_count_min'
            },
            {
                name: 'word_count_max'
            },
            {
                name: 'page'
            },
            {
                name: 'page_size'
            },
            {
                name: 'include_nlp_data'
            },
            {
                name: 'has_nlp'
            },
            {
                name: 'theme'
            },
            {
                name: 'ner_name'
            },
            {
                name: 'title_sentiment_min'
            },
            {
                name: 'title_sentiment_max'
            },
            {
                name: 'content_sentiment_min'
            },
            {
                name: 'content_sentiment_max'
            },
        ]
    },
    '/api/authors-POST': {
        parameters: [
            {
                name: 'author_name'
            },
            {
                name: 'sources'
            },
            {
                name: 'predefined_sources'
            },
            {
                name: 'not_sources'
            },
            {
                name: 'lang'
            },
            {
                name: 'not_lang'
            },
            {
                name: 'countries'
            },
            {
                name: 'not_countries'
            },
            {
                name: 'from_'
            },
            {
                name: 'to_'
            },
            {
                name: 'published_date_precision'
            },
            {
                name: 'by_parse_date'
            },
            {
                name: 'sort_by'
            },
            {
                name: 'ranked_only'
            },
            {
                name: 'from_rank'
            },
            {
                name: 'to_rank'
            },
            {
                name: 'is_headline'
            },
            {
                name: 'is_paid_content'
            },
            {
                name: 'parent_url'
            },
            {
                name: 'all_links'
            },
            {
                name: 'all_domain_links'
            },
            {
                name: 'word_count_min'
            },
            {
                name: 'word_count_max'
            },
            {
                name: 'page'
            },
            {
                name: 'page_size'
            },
            {
                name: 'include_nlp_data'
            },
            {
                name: 'has_nlp'
            },
            {
                name: 'theme'
            },
            {
                name: 'ner_name'
            },
            {
                name: 'title_sentiment_min'
            },
            {
                name: 'title_sentiment_max'
            },
            {
                name: 'content_sentiment_min'
            },
            {
                name: 'content_sentiment_max'
            },
        ]
    },
    '/api/latest_headlines-GET': {
        parameters: [
            {
                name: 'when'
            },
            {
                name: 'by_parse_date'
            },
            {
                name: 'lang'
            },
            {
                name: 'not_lang'
            },
            {
                name: 'countries'
            },
            {
                name: 'not_countries'
            },
            {
                name: 'sources'
            },
            {
                name: 'predefined_sources'
            },
            {
                name: 'not_sources'
            },
            {
                name: 'ranked_only'
            },
            {
                name: 'is_headline'
            },
            {
                name: 'is_paid_content'
            },
            {
                name: 'parent_url'
            },
            {
                name: 'theme'
            },
            {
                name: 'all_links'
            },
            {
                name: 'all_domain_links'
            },
            {
                name: 'word_count_min'
            },
            {
                name: 'word_count_max'
            },
            {
                name: 'page'
            },
            {
                name: 'page_size'
            },
            {
                name: 'clustering_enabled'
            },
            {
                name: 'clustering_threshold'
            },
            {
                name: 'clustering_variable'
            },
            {
                name: 'include_nlp_data'
            },
            {
                name: 'has_nlp'
            },
            {
                name: 'ORG_entity_name'
            },
            {
                name: 'PER_entity_name'
            },
            {
                name: 'LOC_entity_name'
            },
            {
                name: 'MISC_entity_name'
            },
            {
                name: 'title_sentiment_min'
            },
            {
                name: 'title_sentiment_max'
            },
            {
                name: 'content_sentiment_min'
            },
            {
                name: 'content_sentiment_max'
            },
        ]
    },
    '/api/latest_headlines-POST': {
        parameters: [
            {
                name: 'when'
            },
            {
                name: 'by_parse_date'
            },
            {
                name: 'lang'
            },
            {
                name: 'not_lang'
            },
            {
                name: 'countries'
            },
            {
                name: 'not_countries'
            },
            {
                name: 'sources'
            },
            {
                name: 'predefined_sources'
            },
            {
                name: 'not_sources'
            },
            {
                name: 'ranked_only'
            },
            {
                name: 'is_headline'
            },
            {
                name: 'is_paid_content'
            },
            {
                name: 'parent_url'
            },
            {
                name: 'theme'
            },
            {
                name: 'all_links'
            },
            {
                name: 'all_domain_links'
            },
            {
                name: 'word_count_min'
            },
            {
                name: 'word_count_max'
            },
            {
                name: 'page'
            },
            {
                name: 'page_size'
            },
            {
                name: 'clustering_enabled'
            },
            {
                name: 'clustering_threshold'
            },
            {
                name: 'clustering_variable'
            },
            {
                name: 'include_nlp_data'
            },
            {
                name: 'has_nlp'
            },
            {
                name: 'ORG_entity_name'
            },
            {
                name: 'PER_entity_name'
            },
            {
                name: 'LOC_entity_name'
            },
            {
                name: 'MISC_entity_name'
            },
            {
                name: 'title_sentiment_min'
            },
            {
                name: 'title_sentiment_max'
            },
            {
                name: 'content_sentiment_min'
            },
            {
                name: 'content_sentiment_max'
            },
        ]
    },
    '/api/search-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'search_in'
            },
            {
                name: 'predefined_sources'
            },
            {
                name: 'sources'
            },
            {
                name: 'not_sources'
            },
            {
                name: 'lang'
            },
            {
                name: 'not_lang'
            },
            {
                name: 'countries'
            },
            {
                name: 'not_countries'
            },
            {
                name: 'from_'
            },
            {
                name: 'to_'
            },
            {
                name: 'published_date_precision'
            },
            {
                name: 'by_parse_date'
            },
            {
                name: 'sort_by'
            },
            {
                name: 'ranked_only'
            },
            {
                name: 'from_rank'
            },
            {
                name: 'to_rank'
            },
            {
                name: 'is_headline'
            },
            {
                name: 'is_paid_content'
            },
            {
                name: 'parent_url'
            },
            {
                name: 'all_links'
            },
            {
                name: 'all_domain_links'
            },
            {
                name: 'word_count_min'
            },
            {
                name: 'word_count_max'
            },
            {
                name: 'page'
            },
            {
                name: 'page_size'
            },
            {
                name: 'clustering_enabled'
            },
            {
                name: 'clustering_threshold'
            },
            {
                name: 'clustering_variable'
            },
            {
                name: 'include_nlp_data'
            },
            {
                name: 'has_nlp'
            },
            {
                name: 'theme'
            },
            {
                name: 'ORG_entity_name'
            },
            {
                name: 'PER_entity_name'
            },
            {
                name: 'LOC_entity_name'
            },
            {
                name: 'MISC_entity_name'
            },
            {
                name: 'title_sentiment_min'
            },
            {
                name: 'title_sentiment_max'
            },
            {
                name: 'content_sentiment_min'
            },
            {
                name: 'content_sentiment_max'
            },
        ]
    },
    '/api/search-POST': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'search_in'
            },
            {
                name: 'predefined_sources'
            },
            {
                name: 'sources'
            },
            {
                name: 'not_sources'
            },
            {
                name: 'lang'
            },
            {
                name: 'not_lang'
            },
            {
                name: 'countries'
            },
            {
                name: 'not_countries'
            },
            {
                name: 'from_'
            },
            {
                name: 'to_'
            },
            {
                name: 'published_date_precision'
            },
            {
                name: 'by_parse_date'
            },
            {
                name: 'sort_by'
            },
            {
                name: 'ranked_only'
            },
            {
                name: 'from_rank'
            },
            {
                name: 'to_rank'
            },
            {
                name: 'is_headline'
            },
            {
                name: 'is_paid_content'
            },
            {
                name: 'parent_url'
            },
            {
                name: 'all_links'
            },
            {
                name: 'all_domain_links'
            },
            {
                name: 'word_count_min'
            },
            {
                name: 'word_count_max'
            },
            {
                name: 'page'
            },
            {
                name: 'page_size'
            },
            {
                name: 'clustering_enabled'
            },
            {
                name: 'clustering_threshold'
            },
            {
                name: 'clustering_variable'
            },
            {
                name: 'include_nlp_data'
            },
            {
                name: 'has_nlp'
            },
            {
                name: 'theme'
            },
            {
                name: 'ORG_entity_name'
            },
            {
                name: 'PER_entity_name'
            },
            {
                name: 'LOC_entity_name'
            },
            {
                name: 'MISC_entity_name'
            },
            {
                name: 'title_sentiment_min'
            },
            {
                name: 'title_sentiment_max'
            },
            {
                name: 'content_sentiment_min'
            },
            {
                name: 'content_sentiment_max'
            },
        ]
    },
    '/api/search_similar-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'search_in'
            },
            {
                name: 'include_similar_documents'
            },
            {
                name: 'similar_documents_number'
            },
            {
                name: 'similar_documents_fields'
            },
            {
                name: 'predefined_sources'
            },
            {
                name: 'sources'
            },
            {
                name: 'not_sources'
            },
            {
                name: 'lang'
            },
            {
                name: 'not_lang'
            },
            {
                name: 'countries'
            },
            {
                name: 'not_countries'
            },
            {
                name: 'from_'
            },
            {
                name: 'to_'
            },
            {
                name: 'by_parse_date'
            },
            {
                name: 'published_date_precision'
            },
            {
                name: 'sort_by'
            },
            {
                name: 'ranked_only'
            },
            {
                name: 'from_rank'
            },
            {
                name: 'to_rank'
            },
            {
                name: 'is_headline'
            },
            {
                name: 'is_paid_content'
            },
            {
                name: 'parent_url'
            },
            {
                name: 'all_links'
            },
            {
                name: 'all_domain_links'
            },
            {
                name: 'word_count_min'
            },
            {
                name: 'word_count_max'
            },
            {
                name: 'page'
            },
            {
                name: 'page_size'
            },
            {
                name: 'include_nlp_data'
            },
            {
                name: 'has_nlp'
            },
            {
                name: 'theme'
            },
            {
                name: 'ner_name'
            },
            {
                name: 'title_sentiment_min'
            },
            {
                name: 'title_sentiment_max'
            },
            {
                name: 'content_sentiment_min'
            },
            {
                name: 'content_sentiment_max'
            },
        ]
    },
    '/api/search_similar-POST': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'search_in'
            },
            {
                name: 'include_similar_documents'
            },
            {
                name: 'similar_documents_number'
            },
            {
                name: 'similar_documents_fields'
            },
            {
                name: 'predefined_sources'
            },
            {
                name: 'sources'
            },
            {
                name: 'not_sources'
            },
            {
                name: 'lang'
            },
            {
                name: 'not_lang'
            },
            {
                name: 'countries'
            },
            {
                name: 'not_countries'
            },
            {
                name: 'from_'
            },
            {
                name: 'to_'
            },
            {
                name: 'by_parse_date'
            },
            {
                name: 'published_date_precision'
            },
            {
                name: 'sort_by'
            },
            {
                name: 'ranked_only'
            },
            {
                name: 'from_rank'
            },
            {
                name: 'to_rank'
            },
            {
                name: 'is_headline'
            },
            {
                name: 'is_paid_content'
            },
            {
                name: 'parent_url'
            },
            {
                name: 'all_links'
            },
            {
                name: 'all_domain_links'
            },
            {
                name: 'word_count_min'
            },
            {
                name: 'word_count_max'
            },
            {
                name: 'page'
            },
            {
                name: 'page_size'
            },
            {
                name: 'include_nlp_data'
            },
            {
                name: 'has_nlp'
            },
            {
                name: 'theme'
            },
            {
                name: 'ner_name'
            },
            {
                name: 'title_sentiment_min'
            },
            {
                name: 'title_sentiment_max'
            },
            {
                name: 'content_sentiment_min'
            },
            {
                name: 'content_sentiment_max'
            },
        ]
    },
    '/api/sources-GET': {
        parameters: [
            {
                name: 'lang'
            },
            {
                name: 'countries'
            },
        ]
    },
    '/api/sources-POST': {
        parameters: [
            {
                name: 'lang'
            },
            {
                name: 'countries'
            },
        ]
    },
    '/api/subscription-GET': {
        parameters: [
        ]
    },
    '/api/subscription-POST': {
        parameters: [
        ]
    },
}