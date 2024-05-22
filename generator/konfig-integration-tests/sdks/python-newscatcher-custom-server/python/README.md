# newscatcherapi-python-sdk<a id="newscatcherapi-python-sdk"></a>

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>


[![PyPI](https://img.shields.io/badge/PyPI-v6.0.6-blue)](https://pypi.org/project/newscatcherapi-python-sdk/6.0.6)
[![README.md](https://img.shields.io/badge/README-Click%20Here-green)](https://github.com/konfig-dev/newscatcher-sdks/tree/main/v3/python#readme)

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Requirements](#requirements)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Async](#async)
- [Raw HTTP Response](#raw-http-response)
- [Reference](#reference)
  * [`newscatcher.authors.get`](#newscatcherauthorsget)
  * [`newscatcher.authors.post`](#newscatcherauthorspost)
  * [`newscatcher.latest_headlines.get`](#newscatcherlatest_headlinesget)
  * [`newscatcher.latest_headlines.post`](#newscatcherlatest_headlinespost)
  * [`newscatcher.search.get`](#newscatchersearchget)
  * [`newscatcher.search.post`](#newscatchersearchpost)
  * [`newscatcher.search_link.get`](#newscatchersearch_linkget)
  * [`newscatcher.search_link.post`](#newscatchersearch_linkpost)
  * [`newscatcher.search_similar.get`](#newscatchersearch_similarget)
  * [`newscatcher.search_similar.post`](#newscatchersearch_similarpost)
  * [`newscatcher.sources.get`](#newscatchersourcesget)
  * [`newscatcher.sources.post`](#newscatchersourcespost)
  * [`newscatcher.subscription.get`](#newscatchersubscriptionget)
  * [`newscatcher.subscription.post`](#newscatchersubscriptionpost)

<!-- tocstop -->

## Requirements<a id="requirements"></a>

Python >=3.7

## Installation<a id="installation"></a>

```sh
pip install newscatcherapi-python-sdk==6.0.6
```

## Getting Started<a id="getting-started"></a>

```python
from pprint import pprint
from newscatcherapi_client import Newscatcher, ApiException

newscatcher = Newscatcher(
    api_key="YOUR_API_KEY",
)

try:
    # [Get] Search By Author Request
    get_response = newscatcher.authors.get(
        author_name="author_name_example",
        not_author_name="string_example",
        sources=None,
        predefined_sources=None,
        not_sources=None,
        lang=None,
        not_lang=None,
        countries=None,
        not_countries=None,
        from_="string_example",
        to_="string_example",
        published_date_precision="string_example",
        by_parse_date=False,
        sort_by="relevancy",
        ranked_only="string_example",
        from_rank=1,
        to_rank=1,
        is_headline=True,
        is_paid_content=True,
        parent_url=None,
        all_links=None,
        all_domain_links=None,
        word_count_min=0,
        word_count_max=0,
        page=1,
        page_size=100,
        include_nlp_data=True,
        has_nlp=True,
        theme="string_example",
        not_theme="string_example",
        ner_name="string_example",
        title_sentiment_min=3.14,
        title_sentiment_max=3.14,
        content_sentiment_min=3.14,
        content_sentiment_max=3.14,
        iptc_tags=None,
        not_iptc_tags=None,
        iab_tags=None,
        not_iab_tags=None,
    )
    print(get_response)
except ApiException as e:
    print("Exception when calling AuthorsApi.get: %s\n" % e)
    pprint(e.body)
    if e.status == 422:
        pprint(e.body["detail"])
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```

## Async<a id="async"></a>

`async` support is available by prepending `a` to any method.

```python
import asyncio
from pprint import pprint
from newscatcherapi_client import Newscatcher, ApiException

newscatcher = Newscatcher(
    api_key="YOUR_API_KEY",
)


async def main():
    try:
        # [Get] Search By Author Request
        get_response = await newscatcher.authors.aget(
            author_name="author_name_example",
            not_author_name="string_example",
            sources=None,
            predefined_sources=None,
            not_sources=None,
            lang=None,
            not_lang=None,
            countries=None,
            not_countries=None,
            from_="string_example",
            to_="string_example",
            published_date_precision="string_example",
            by_parse_date=False,
            sort_by="relevancy",
            ranked_only="string_example",
            from_rank=1,
            to_rank=1,
            is_headline=True,
            is_paid_content=True,
            parent_url=None,
            all_links=None,
            all_domain_links=None,
            word_count_min=0,
            word_count_max=0,
            page=1,
            page_size=100,
            include_nlp_data=True,
            has_nlp=True,
            theme="string_example",
            not_theme="string_example",
            ner_name="string_example",
            title_sentiment_min=3.14,
            title_sentiment_max=3.14,
            content_sentiment_min=3.14,
            content_sentiment_max=3.14,
            iptc_tags=None,
            not_iptc_tags=None,
            iab_tags=None,
            not_iab_tags=None,
        )
        print(get_response)
    except ApiException as e:
        print("Exception when calling AuthorsApi.get: %s\n" % e)
        pprint(e.body)
        if e.status == 422:
            pprint(e.body["detail"])
        pprint(e.headers)
        pprint(e.status)
        pprint(e.reason)
        pprint(e.round_trip_time)


asyncio.run(main())
```

## Raw HTTP Response<a id="raw-http-response"></a>

To access raw HTTP response values, use the `.raw` namespace.

```python
from pprint import pprint
from newscatcherapi_client import Newscatcher, ApiException

newscatcher = Newscatcher(
    api_key="YOUR_API_KEY",
)

try:
    # [Get] Search By Author Request
    get_response = newscatcher.authors.raw.get(
        author_name="author_name_example",
        not_author_name="string_example",
        sources=None,
        predefined_sources=None,
        not_sources=None,
        lang=None,
        not_lang=None,
        countries=None,
        not_countries=None,
        from_="string_example",
        to_="string_example",
        published_date_precision="string_example",
        by_parse_date=False,
        sort_by="relevancy",
        ranked_only="string_example",
        from_rank=1,
        to_rank=1,
        is_headline=True,
        is_paid_content=True,
        parent_url=None,
        all_links=None,
        all_domain_links=None,
        word_count_min=0,
        word_count_max=0,
        page=1,
        page_size=100,
        include_nlp_data=True,
        has_nlp=True,
        theme="string_example",
        not_theme="string_example",
        ner_name="string_example",
        title_sentiment_min=3.14,
        title_sentiment_max=3.14,
        content_sentiment_min=3.14,
        content_sentiment_max=3.14,
        iptc_tags=None,
        not_iptc_tags=None,
        iab_tags=None,
        not_iab_tags=None,
    )
    pprint(get_response.body)
    pprint(get_response.headers)
    pprint(get_response.status)
    pprint(get_response.round_trip_time)
except ApiException as e:
    print("Exception when calling AuthorsApi.get: %s\n" % e)
    pprint(e.body)
    if e.status == 422:
        pprint(e.body["detail"])
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```


## Reference<a id="reference"></a>
### `newscatcher.authors.get`<a id="newscatcherauthorsget"></a>

This endpoint allows you to search for articles by author. You need to specify the author name. You can also filter by language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_response = newscatcher.authors.get(
    author_name="author_name_example",
    not_author_name="string_example",
    sources=None,
    predefined_sources=None,
    not_sources=None,
    lang=None,
    not_lang=None,
    countries=None,
    not_countries=None,
    from_="string_example",
    to_="string_example",
    published_date_precision="string_example",
    by_parse_date=False,
    sort_by="relevancy",
    ranked_only="string_example",
    from_rank=1,
    to_rank=1,
    is_headline=True,
    is_paid_content=True,
    parent_url=None,
    all_links=None,
    all_domain_links=None,
    word_count_min=0,
    word_count_max=0,
    page=1,
    page_size=100,
    include_nlp_data=True,
    has_nlp=True,
    theme="string_example",
    not_theme="string_example",
    ner_name="string_example",
    title_sentiment_min=3.14,
    title_sentiment_max=3.14,
    content_sentiment_min=3.14,
    content_sentiment_max=3.14,
    iptc_tags=None,
    not_iptc_tags=None,
    iab_tags=None,
    not_iab_tags=None,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### author_name: `str`<a id="author_name-str"></a>

##### not_author_name: `str`<a id="not_author_name-str"></a>

##### sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### predefined_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="predefined_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### from_: Union[`str`, `datetime`]<a id="from_-unionstr-datetime"></a>


##### to_: Union[`str`, `datetime`]<a id="to_-unionstr-datetime"></a>


##### published_date_precision: `str`<a id="published_date_precision-str"></a>

##### by_parse_date: `bool`<a id="by_parse_date-bool"></a>

##### sort_by: `str`<a id="sort_by-str"></a>

##### ranked_only: `str`<a id="ranked_only-str"></a>

##### from_rank: `int`<a id="from_rank-int"></a>

##### to_rank: `int`<a id="to_rank-int"></a>

##### is_headline: `bool`<a id="is_headline-bool"></a>

##### is_paid_content: `bool`<a id="is_paid_content-bool"></a>

##### parent_url: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="parent_url-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### all_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="all_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### all_domain_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="all_domain_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### word_count_min: `int`<a id="word_count_min-int"></a>

##### word_count_max: `int`<a id="word_count_max-int"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

##### include_nlp_data: `bool`<a id="include_nlp_data-bool"></a>

##### has_nlp: `bool`<a id="has_nlp-bool"></a>

##### theme: `str`<a id="theme-str"></a>

##### not_theme: `str`<a id="not_theme-str"></a>

##### ner_name: `str`<a id="ner_name-str"></a>

##### title_sentiment_min: `Union[int, float]`<a id="title_sentiment_min-unionint-float"></a>

##### title_sentiment_max: `Union[int, float]`<a id="title_sentiment_max-unionint-float"></a>

##### content_sentiment_min: `Union[int, float]`<a id="content_sentiment_min-unionint-float"></a>

##### content_sentiment_max: `Union[int, float]`<a id="content_sentiment_max-unionint-float"></a>

##### iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`AuthorsGetResponse`](./newscatcherapi_client/pydantic/authors_get_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/authors` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.authors.post`<a id="newscatcherauthorspost"></a>

This endpoint allows you to search for articles by author. You need to specify the author name. You can also filter by language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
post_response = newscatcher.authors.post(
    author_name="string_example",
    not_author_name="string_example",
    sources=None,
    predefined_sources=None,
    not_sources=None,
    lang=None,
    not_lang=None,
    countries=None,
    not_countries=None,
    from_="string_example",
    to_="string_example",
    published_date_precision="string_example",
    by_parse_date=False,
    sort_by="relevancy",
    ranked_only="string_example",
    from_rank=1,
    to_rank=1,
    is_headline=True,
    is_paid_content=True,
    parent_url=None,
    all_links=None,
    all_domain_links=None,
    word_count_min=0,
    word_count_max=0,
    page=1,
    page_size=100,
    include_nlp_data=True,
    has_nlp=True,
    theme="string_example",
    not_theme="string_example",
    ner_name="string_example",
    title_sentiment_min=3.14,
    title_sentiment_max=3.14,
    content_sentiment_min=3.14,
    content_sentiment_max=3.14,
    iptc_tags=None,
    not_iptc_tags=None,
    iab_tags=None,
    not_iab_tags=None,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### author_name: `str`<a id="author_name-str"></a>

##### not_author_name: `str`<a id="not_author_name-str"></a>

##### sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### predefined_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="predefined_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### from_: Union[`str`, `datetime`]<a id="from_-unionstr-datetime"></a>


##### to_: Union[`str`, `datetime`]<a id="to_-unionstr-datetime"></a>


##### published_date_precision: `str`<a id="published_date_precision-str"></a>

##### by_parse_date: `bool`<a id="by_parse_date-bool"></a>

##### sort_by: `str`<a id="sort_by-str"></a>

##### ranked_only: `str`<a id="ranked_only-str"></a>

##### from_rank: `int`<a id="from_rank-int"></a>

##### to_rank: `int`<a id="to_rank-int"></a>

##### is_headline: `bool`<a id="is_headline-bool"></a>

##### is_paid_content: `bool`<a id="is_paid_content-bool"></a>

##### parent_url: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="parent_url-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### all_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="all_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### all_domain_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="all_domain_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### word_count_min: `int`<a id="word_count_min-int"></a>

##### word_count_max: `int`<a id="word_count_max-int"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

##### include_nlp_data: `bool`<a id="include_nlp_data-bool"></a>

##### has_nlp: `bool`<a id="has_nlp-bool"></a>

##### theme: `str`<a id="theme-str"></a>

##### not_theme: `str`<a id="not_theme-str"></a>

##### ner_name: `str`<a id="ner_name-str"></a>

##### title_sentiment_min: `Union[int, float]`<a id="title_sentiment_min-unionint-float"></a>

##### title_sentiment_max: `Union[int, float]`<a id="title_sentiment_max-unionint-float"></a>

##### content_sentiment_min: `Union[int, float]`<a id="content_sentiment_min-unionint-float"></a>

##### content_sentiment_max: `Union[int, float]`<a id="content_sentiment_max-unionint-float"></a>

##### iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`AuthorSearchRequest`](./newscatcherapi_client/type/author_search_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`AuthorsPostResponse`](./newscatcherapi_client/pydantic/authors_post_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/authors` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.latest_headlines.get`<a id="newscatcherlatest_headlinesget"></a>

This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_response = newscatcher.latest_headlines.get(
    when="7d",
    by_parse_date=False,
    lang=None,
    not_lang=None,
    countries=None,
    not_countries=None,
    sources=None,
    predefined_sources=None,
    not_sources=None,
    not_author_name=None,
    ranked_only="string_example",
    is_headline=True,
    is_paid_content=True,
    parent_url=None,
    all_links=None,
    all_domain_links=None,
    word_count_min=0,
    word_count_max=0,
    page=1,
    page_size=100,
    clustering_variable="string_example",
    clustering_enabled=True,
    clustering_threshold=3.14,
    include_nlp_data=True,
    has_nlp=True,
    theme="string_example",
    not_theme="string_example",
    org_entity_name="string_example",
    per_entity_name="string_example",
    loc_entity_name="string_example",
    misc_entity_name="string_example",
    title_sentiment_min=3.14,
    title_sentiment_max=3.14,
    content_sentiment_min=3.14,
    content_sentiment_max=3.14,
    iptc_tags=None,
    not_iptc_tags=None,
    iab_tags=None,
    not_iab_tags=None,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### when: `str`<a id="when-str"></a>

##### by_parse_date: `bool`<a id="by_parse_date-bool"></a>

##### lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### predefined_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="predefined_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_author_name: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_author_name-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### ranked_only: `str`<a id="ranked_only-str"></a>

##### is_headline: `bool`<a id="is_headline-bool"></a>

##### is_paid_content: `bool`<a id="is_paid_content-bool"></a>

##### parent_url: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="parent_url-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### all_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="all_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### all_domain_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="all_domain_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### word_count_min: `int`<a id="word_count_min-int"></a>

##### word_count_max: `int`<a id="word_count_max-int"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

##### clustering_variable: `str`<a id="clustering_variable-str"></a>

##### clustering_enabled: `bool`<a id="clustering_enabled-bool"></a>

##### clustering_threshold: `Union[int, float]`<a id="clustering_threshold-unionint-float"></a>

##### include_nlp_data: `bool`<a id="include_nlp_data-bool"></a>

##### has_nlp: `bool`<a id="has_nlp-bool"></a>

##### theme: `str`<a id="theme-str"></a>

##### not_theme: `str`<a id="not_theme-str"></a>

##### org_entity_name: `str`<a id="org_entity_name-str"></a>

##### per_entity_name: `str`<a id="per_entity_name-str"></a>

##### loc_entity_name: `str`<a id="loc_entity_name-str"></a>

##### misc_entity_name: `str`<a id="misc_entity_name-str"></a>

##### title_sentiment_min: `Union[int, float]`<a id="title_sentiment_min-unionint-float"></a>

##### title_sentiment_max: `Union[int, float]`<a id="title_sentiment_max-unionint-float"></a>

##### content_sentiment_min: `Union[int, float]`<a id="content_sentiment_min-unionint-float"></a>

##### content_sentiment_max: `Union[int, float]`<a id="content_sentiment_max-unionint-float"></a>

##### iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`LatestHeadlinesGetResponse`](./newscatcherapi_client/pydantic/latest_headlines_get_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/latest_headlines` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.latest_headlines.post`<a id="newscatcherlatest_headlinespost"></a>

This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
post_response = newscatcher.latest_headlines.post(
    when="7d",
    by_parse_date=False,
    lang=None,
    not_lang=None,
    countries=None,
    not_countries=None,
    sources=None,
    predefined_sources=None,
    not_sources=None,
    not_author_name=None,
    ranked_only="string_example",
    is_headline=True,
    is_paid_content=True,
    parent_url=None,
    all_links=None,
    all_domain_links=None,
    word_count_min=0,
    word_count_max=0,
    page=1,
    page_size=100,
    clustering_variable="string_example",
    clustering_enabled=True,
    clustering_threshold=3.14,
    include_nlp_data=True,
    has_nlp=True,
    theme="string_example",
    not_theme="string_example",
    org_entity_name="string_example",
    per_entity_name="string_example",
    loc_entity_name="string_example",
    misc_entity_name="string_example",
    title_sentiment_min=3.14,
    title_sentiment_max=3.14,
    content_sentiment_min=3.14,
    content_sentiment_max=3.14,
    iptc_tags=None,
    not_iptc_tags=None,
    iab_tags=None,
    not_iab_tags=None,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### when: `str`<a id="when-str"></a>

##### by_parse_date: `bool`<a id="by_parse_date-bool"></a>

##### lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### predefined_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="predefined_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_author_name: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_author_name-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### ranked_only: `str`<a id="ranked_only-str"></a>

##### is_headline: `bool`<a id="is_headline-bool"></a>

##### is_paid_content: `bool`<a id="is_paid_content-bool"></a>

##### parent_url: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="parent_url-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### all_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="all_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### all_domain_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="all_domain_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### word_count_min: `int`<a id="word_count_min-int"></a>

##### word_count_max: `int`<a id="word_count_max-int"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

##### clustering_variable: `str`<a id="clustering_variable-str"></a>

##### clustering_enabled: `bool`<a id="clustering_enabled-bool"></a>

##### clustering_threshold: `Union[int, float]`<a id="clustering_threshold-unionint-float"></a>

##### include_nlp_data: `bool`<a id="include_nlp_data-bool"></a>

##### has_nlp: `bool`<a id="has_nlp-bool"></a>

##### theme: `str`<a id="theme-str"></a>

##### not_theme: `str`<a id="not_theme-str"></a>

##### org_entity_name: `str`<a id="org_entity_name-str"></a>

##### per_entity_name: `str`<a id="per_entity_name-str"></a>

##### loc_entity_name: `str`<a id="loc_entity_name-str"></a>

##### misc_entity_name: `str`<a id="misc_entity_name-str"></a>

##### title_sentiment_min: `Union[int, float]`<a id="title_sentiment_min-unionint-float"></a>

##### title_sentiment_max: `Union[int, float]`<a id="title_sentiment_max-unionint-float"></a>

##### content_sentiment_min: `Union[int, float]`<a id="content_sentiment_min-unionint-float"></a>

##### content_sentiment_max: `Union[int, float]`<a id="content_sentiment_max-unionint-float"></a>

##### iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`LatestHeadlinesRequest`](./newscatcherapi_client/type/latest_headlines_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`LatestHeadlinesPostResponse`](./newscatcherapi_client/pydantic/latest_headlines_post_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/latest_headlines` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.search.get`<a id="newscatchersearchget"></a>

This endpoint allows you to search for articles. You can search for articles by keyword, language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_response = newscatcher.search.get(
    q="q_example",
    search_in="title_content",
    predefined_sources=None,
    sources=None,
    not_sources=None,
    lang=None,
    not_lang=None,
    countries=None,
    not_countries=None,
    not_author_name=None,
    from_="string_example",
    to_="string_example",
    published_date_precision="string_example",
    by_parse_date=False,
    sort_by="relevancy",
    ranked_only="string_example",
    from_rank=1,
    to_rank=1,
    is_headline=True,
    is_paid_content=True,
    parent_url=None,
    all_links=None,
    all_domain_links=None,
    word_count_min=0,
    word_count_max=0,
    page=1,
    page_size=100,
    clustering_variable="string_example",
    clustering_enabled=True,
    clustering_threshold=3.14,
    include_nlp_data=True,
    has_nlp=True,
    theme="string_example",
    not_theme="string_example",
    org_entity_name="string_example",
    per_entity_name="string_example",
    loc_entity_name="string_example",
    misc_entity_name="string_example",
    title_sentiment_min=3.14,
    title_sentiment_max=3.14,
    content_sentiment_min=3.14,
    content_sentiment_max=3.14,
    iptc_tags=None,
    not_iptc_tags=None,
    source_name=None,
    iab_tags=None,
    not_iab_tags=None,
    exclude_duplicates=True,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `str`<a id="q-str"></a>

##### search_in: `str`<a id="search_in-str"></a>

##### predefined_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="predefined_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_author_name: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_author_name-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### from_: Union[`str`, `datetime`]<a id="from_-unionstr-datetime"></a>


##### to_: Union[`str`, `datetime`]<a id="to_-unionstr-datetime"></a>


##### published_date_precision: `str`<a id="published_date_precision-str"></a>

##### by_parse_date: `bool`<a id="by_parse_date-bool"></a>

##### sort_by: `str`<a id="sort_by-str"></a>

##### ranked_only: `str`<a id="ranked_only-str"></a>

##### from_rank: `int`<a id="from_rank-int"></a>

##### to_rank: `int`<a id="to_rank-int"></a>

##### is_headline: `bool`<a id="is_headline-bool"></a>

##### is_paid_content: `bool`<a id="is_paid_content-bool"></a>

##### parent_url: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="parent_url-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### all_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="all_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### all_domain_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="all_domain_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### word_count_min: `int`<a id="word_count_min-int"></a>

##### word_count_max: `int`<a id="word_count_max-int"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

##### clustering_variable: `str`<a id="clustering_variable-str"></a>

##### clustering_enabled: `bool`<a id="clustering_enabled-bool"></a>

##### clustering_threshold: `Union[int, float]`<a id="clustering_threshold-unionint-float"></a>

##### include_nlp_data: `bool`<a id="include_nlp_data-bool"></a>

##### has_nlp: `bool`<a id="has_nlp-bool"></a>

##### theme: `str`<a id="theme-str"></a>

##### not_theme: `str`<a id="not_theme-str"></a>

##### org_entity_name: `str`<a id="org_entity_name-str"></a>

##### per_entity_name: `str`<a id="per_entity_name-str"></a>

##### loc_entity_name: `str`<a id="loc_entity_name-str"></a>

##### misc_entity_name: `str`<a id="misc_entity_name-str"></a>

##### title_sentiment_min: `Union[int, float]`<a id="title_sentiment_min-unionint-float"></a>

##### title_sentiment_max: `Union[int, float]`<a id="title_sentiment_max-unionint-float"></a>

##### content_sentiment_min: `Union[int, float]`<a id="content_sentiment_min-unionint-float"></a>

##### content_sentiment_max: `Union[int, float]`<a id="content_sentiment_max-unionint-float"></a>

##### iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### source_name: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="source_name-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### exclude_duplicates: `bool`<a id="exclude_duplicates-bool"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`SearchGetResponse`](./newscatcherapi_client/pydantic/search_get_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.search.post`<a id="newscatchersearchpost"></a>

This endpoint allows you to search for articles. You can search for articles by keyword, language, country, source, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
post_response = newscatcher.search.post(
    q="string_example",
    search_in="title_content",
    predefined_sources=None,
    sources=None,
    not_sources=None,
    lang=None,
    not_lang=None,
    countries=None,
    not_countries=None,
    not_author_name=None,
    from_="string_example",
    to_="string_example",
    published_date_precision="string_example",
    by_parse_date=False,
    sort_by="relevancy",
    ranked_only="string_example",
    from_rank=1,
    to_rank=1,
    is_headline=True,
    is_paid_content=True,
    parent_url=None,
    all_links=None,
    all_domain_links=None,
    word_count_min=0,
    word_count_max=0,
    page=1,
    page_size=100,
    clustering_variable="string_example",
    clustering_enabled=True,
    clustering_threshold=3.14,
    include_nlp_data=True,
    has_nlp=True,
    theme="string_example",
    not_theme="string_example",
    org_entity_name="string_example",
    per_entity_name="string_example",
    loc_entity_name="string_example",
    misc_entity_name="string_example",
    title_sentiment_min=3.14,
    title_sentiment_max=3.14,
    content_sentiment_min=3.14,
    content_sentiment_max=3.14,
    iptc_tags=None,
    not_iptc_tags=None,
    source_name=None,
    iab_tags=None,
    not_iab_tags=None,
    exclude_duplicates=True,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `str`<a id="q-str"></a>

##### search_in: `str`<a id="search_in-str"></a>

##### predefined_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="predefined_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_author_name: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_author_name-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### from_: Union[`str`, `datetime`]<a id="from_-unionstr-datetime"></a>


##### to_: Union[`str`, `datetime`]<a id="to_-unionstr-datetime"></a>


##### published_date_precision: `str`<a id="published_date_precision-str"></a>

##### by_parse_date: `bool`<a id="by_parse_date-bool"></a>

##### sort_by: `str`<a id="sort_by-str"></a>

##### ranked_only: `str`<a id="ranked_only-str"></a>

##### from_rank: `int`<a id="from_rank-int"></a>

##### to_rank: `int`<a id="to_rank-int"></a>

##### is_headline: `bool`<a id="is_headline-bool"></a>

##### is_paid_content: `bool`<a id="is_paid_content-bool"></a>

##### parent_url: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="parent_url-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### all_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="all_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### all_domain_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="all_domain_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### word_count_min: `int`<a id="word_count_min-int"></a>

##### word_count_max: `int`<a id="word_count_max-int"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

##### clustering_variable: `str`<a id="clustering_variable-str"></a>

##### clustering_enabled: `bool`<a id="clustering_enabled-bool"></a>

##### clustering_threshold: `Union[int, float]`<a id="clustering_threshold-unionint-float"></a>

##### include_nlp_data: `bool`<a id="include_nlp_data-bool"></a>

##### has_nlp: `bool`<a id="has_nlp-bool"></a>

##### theme: `str`<a id="theme-str"></a>

##### not_theme: `str`<a id="not_theme-str"></a>

##### org_entity_name: `str`<a id="org_entity_name-str"></a>

##### per_entity_name: `str`<a id="per_entity_name-str"></a>

##### loc_entity_name: `str`<a id="loc_entity_name-str"></a>

##### misc_entity_name: `str`<a id="misc_entity_name-str"></a>

##### title_sentiment_min: `Union[int, float]`<a id="title_sentiment_min-unionint-float"></a>

##### title_sentiment_max: `Union[int, float]`<a id="title_sentiment_max-unionint-float"></a>

##### content_sentiment_min: `Union[int, float]`<a id="content_sentiment_min-unionint-float"></a>

##### content_sentiment_max: `Union[int, float]`<a id="content_sentiment_max-unionint-float"></a>

##### iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### source_name: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="source_name-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_iab_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_iab_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### exclude_duplicates: `bool`<a id="exclude_duplicates-bool"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`SearchRequest`](./newscatcherapi_client/type/search_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`SearchPostResponse`](./newscatcherapi_client/pydantic/search_post_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.search_link.get`<a id="newscatchersearch_linkget"></a>

This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_response = newscatcher.search_link.get(
    ids=None,
    links=None,
    page=1,
    page_size=100,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="ids-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`DtoResponsesSearchResponseSearchResponse`](./newscatcherapi_client/pydantic/dto_responses_search_response_search_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search_by_link` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.search_link.post`<a id="newscatchersearch_linkpost"></a>

This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
post_response = newscatcher.search_link.post(
    ids=None,
    links=None,
    page=1,
    page_size=100,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="ids-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`SearchURLRequest`](./newscatcherapi_client/type/search_url_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`DtoResponsesSearchResponseSearchResponse`](./newscatcherapi_client/pydantic/dto_responses_search_response_search_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search_by_link` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.search_similar.get`<a id="newscatchersearch_similarget"></a>

This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_response = newscatcher.search_similar.get(
    q="q_example",
    search_in="title_content",
    include_similar_documents=False,
    similar_documents_number=5,
    similar_documents_fields="title,content",
    predefined_sources=None,
    sources=None,
    not_sources=None,
    lang=None,
    not_lang=None,
    countries=None,
    not_countries=None,
    from_="string_example",
    to_="string_example",
    by_parse_date=False,
    published_date_precision="string_example",
    sort_by="relevancy",
    ranked_only="string_example",
    from_rank=1,
    to_rank=1,
    is_headline=True,
    is_paid_content=True,
    parent_url=None,
    all_links=None,
    all_domain_links=None,
    word_count_min=0,
    word_count_max=0,
    page=1,
    page_size=100,
    include_nlp_data=True,
    has_nlp=True,
    theme="string_example",
    not_theme="string_example",
    ner_name="string_example",
    title_sentiment_min=3.14,
    title_sentiment_max=3.14,
    content_sentiment_min=3.14,
    content_sentiment_max=3.14,
    iptc_tags=None,
    not_iptc_tags=None,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `str`<a id="q-str"></a>

##### search_in: `str`<a id="search_in-str"></a>

##### include_similar_documents: `bool`<a id="include_similar_documents-bool"></a>

##### similar_documents_number: `int`<a id="similar_documents_number-int"></a>

##### similar_documents_fields: `str`<a id="similar_documents_fields-str"></a>

##### predefined_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="predefined_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### from_: Union[`str`, `datetime`]<a id="from_-unionstr-datetime"></a>


##### to_: Union[`str`, `datetime`]<a id="to_-unionstr-datetime"></a>


##### by_parse_date: `bool`<a id="by_parse_date-bool"></a>

##### published_date_precision: `str`<a id="published_date_precision-str"></a>

##### sort_by: `str`<a id="sort_by-str"></a>

##### ranked_only: `str`<a id="ranked_only-str"></a>

##### from_rank: `int`<a id="from_rank-int"></a>

##### to_rank: `int`<a id="to_rank-int"></a>

##### is_headline: `bool`<a id="is_headline-bool"></a>

##### is_paid_content: `bool`<a id="is_paid_content-bool"></a>

##### parent_url: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="parent_url-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### all_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="all_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### all_domain_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="all_domain_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### word_count_min: `int`<a id="word_count_min-int"></a>

##### word_count_max: `int`<a id="word_count_max-int"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

##### include_nlp_data: `bool`<a id="include_nlp_data-bool"></a>

##### has_nlp: `bool`<a id="has_nlp-bool"></a>

##### theme: `str`<a id="theme-str"></a>

##### not_theme: `str`<a id="not_theme-str"></a>

##### ner_name: `str`<a id="ner_name-str"></a>

##### title_sentiment_min: `Union[int, float]`<a id="title_sentiment_min-unionint-float"></a>

##### title_sentiment_max: `Union[int, float]`<a id="title_sentiment_max-unionint-float"></a>

##### content_sentiment_min: `Union[int, float]`<a id="content_sentiment_min-unionint-float"></a>

##### content_sentiment_max: `Union[int, float]`<a id="content_sentiment_max-unionint-float"></a>

##### iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### not_iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="not_iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`SearchSimilarGetResponse`](./newscatcherapi_client/pydantic/search_similar_get_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search_similar` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.search_similar.post`<a id="newscatchersearch_similarpost"></a>

This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
post_response = newscatcher.search_similar.post(
    q="string_example",
    search_in="title_content",
    include_similar_documents=False,
    similar_documents_number=5,
    similar_documents_fields="title,content",
    predefined_sources=None,
    sources=None,
    not_sources=None,
    lang=None,
    not_lang=None,
    countries=None,
    not_countries=None,
    from_="string_example",
    to_="string_example",
    by_parse_date=False,
    published_date_precision="string_example",
    sort_by="relevancy",
    ranked_only="string_example",
    from_rank=1,
    to_rank=1,
    is_headline=True,
    is_paid_content=True,
    parent_url=None,
    all_links=None,
    all_domain_links=None,
    word_count_min=0,
    word_count_max=0,
    page=1,
    page_size=100,
    include_nlp_data=True,
    has_nlp=True,
    theme="string_example",
    not_theme="string_example",
    ner_name="string_example",
    title_sentiment_min=3.14,
    title_sentiment_max=3.14,
    content_sentiment_min=3.14,
    content_sentiment_max=3.14,
    iptc_tags=None,
    not_iptc_tags=None,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `str`<a id="q-str"></a>

##### search_in: `str`<a id="search_in-str"></a>

##### include_similar_documents: `bool`<a id="include_similar_documents-bool"></a>

##### similar_documents_number: `int`<a id="similar_documents_number-int"></a>

##### similar_documents_fields: `str`<a id="similar_documents_fields-str"></a>

##### predefined_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="predefined_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_sources: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_sources-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_lang: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_lang-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_countries: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_countries-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### from_: Union[`str`, `datetime`]<a id="from_-unionstr-datetime"></a>


##### to_: Union[`str`, `datetime`]<a id="to_-unionstr-datetime"></a>


##### by_parse_date: `bool`<a id="by_parse_date-bool"></a>

##### published_date_precision: `str`<a id="published_date_precision-str"></a>

##### sort_by: `str`<a id="sort_by-str"></a>

##### ranked_only: `str`<a id="ranked_only-str"></a>

##### from_rank: `int`<a id="from_rank-int"></a>

##### to_rank: `int`<a id="to_rank-int"></a>

##### is_headline: `bool`<a id="is_headline-bool"></a>

##### is_paid_content: `bool`<a id="is_paid_content-bool"></a>

##### parent_url: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="parent_url-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### all_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="all_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### all_domain_links: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="all_domain_links-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### word_count_min: `int`<a id="word_count_min-int"></a>

##### word_count_max: `int`<a id="word_count_max-int"></a>

##### page: `int`<a id="page-int"></a>

##### page_size: `int`<a id="page_size-int"></a>

##### include_nlp_data: `bool`<a id="include_nlp_data-bool"></a>

##### has_nlp: `bool`<a id="has_nlp-bool"></a>

##### theme: `str`<a id="theme-str"></a>

##### not_theme: `str`<a id="not_theme-str"></a>

##### ner_name: `str`<a id="ner_name-str"></a>

##### title_sentiment_min: `Union[int, float]`<a id="title_sentiment_min-unionint-float"></a>

##### title_sentiment_max: `Union[int, float]`<a id="title_sentiment_max-unionint-float"></a>

##### content_sentiment_min: `Union[int, float]`<a id="content_sentiment_min-unionint-float"></a>

##### content_sentiment_max: `Union[int, float]`<a id="content_sentiment_max-unionint-float"></a>

##### iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### not_iptc_tags: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="not_iptc_tags-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`MoreLikeThisRequest`](./newscatcherapi_client/type/more_like_this_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`SearchSimilarPostResponse`](./newscatcherapi_client/pydantic/search_similar_post_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/search_similar` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.sources.get`<a id="newscatchersourcesget"></a>

This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_response = newscatcher.sources.get(
    lang="string_example",
    countries="string_example",
    predefined_sources="string_example",
    include_additional_info=True,
    from_rank=1,
    to_rank=1,
    source_name=None,
    source_url="string_example",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### lang: `str`<a id="lang-str"></a>

##### countries: `str`<a id="countries-str"></a>

##### predefined_sources: `str`<a id="predefined_sources-str"></a>

##### include_additional_info: `bool`<a id="include_additional_info-bool"></a>

##### from_rank: `int`<a id="from_rank-int"></a>

##### to_rank: `int`<a id="to_rank-int"></a>

##### source_name: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/.py)<a id="source_name-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypepy"></a>

##### source_url: `str`<a id="source_url-str"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`SourceResponse`](./newscatcherapi_client/pydantic/source_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/sources` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.sources.post`<a id="newscatchersourcespost"></a>

This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
post_response = newscatcher.sources.post(
    lang="string_example",
    countries="string_example",
    predefined_sources="string_example",
    include_additional_info=True,
    from_rank=1,
    to_rank=1,
    source_name=None,
    source_url="string_example",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### lang: `str`<a id="lang-str"></a>

##### countries: `str`<a id="countries-str"></a>

##### predefined_sources: `str`<a id="predefined_sources-str"></a>

##### include_additional_info: `bool`<a id="include_additional_info-bool"></a>

##### from_rank: `int`<a id="from_rank-int"></a>

##### to_rank: `int`<a id="to_rank-int"></a>

##### source_name: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./newscatcherapi_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="source_name-unionbool-date-datetime-dict-float-int-list-str-nonenewscatcherapi_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

##### source_url: `str`<a id="source_url-str"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`SourcesRequest`](./newscatcherapi_client/type/sources_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`SourceResponse`](./newscatcherapi_client/pydantic/source_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/sources` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.subscription.get`<a id="newscatchersubscriptionget"></a>

This endpoint allows you to get info about your subscription plan.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_response = newscatcher.subscription.get()
```

#### 🔄 Return<a id="🔄-return"></a>

[`SubscriptionResponse`](./newscatcherapi_client/pydantic/subscription_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/subscription` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `newscatcher.subscription.post`<a id="newscatchersubscriptionpost"></a>

This endpoint allows you to get info about your subscription plan.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
post_response = newscatcher.subscription.post()
```

#### 🔄 Return<a id="🔄-return"></a>

[`SubscriptionResponse`](./newscatcherapi_client/pydantic/subscription_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/subscription` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This Python package is automatically generated by [Konfig](https://konfigthis.com)
