import newscatcherapi_client.exceptions

def search_all(method, **kwargs):
    try:
        if "page_size" in kwargs:
            page_size = kwargs["page_size"]
        elif "pageSize" in kwargs:
            page_size = kwargs["pageSize"]
        else:
            page_size = 100

        response = method(**kwargs)

        if response.total_hits > page_size:
            for page in range(2, response.total_pages + 1):
                kwargs["page"] = page
                res = method(**kwargs)
                response.articles.extend(res.articles)

        return response.articles

    except newscatcherapi_client.exceptions.ApiException as e:
        print("Exception when calling Search API: %s\n" % e)
        return None