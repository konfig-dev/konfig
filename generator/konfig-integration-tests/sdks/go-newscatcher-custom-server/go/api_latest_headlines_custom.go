package newscatcherapi

import "fmt"

func (r *LatestHeadlinesApiGetRequest) ExecuteAll() []map[string]interface{} {
	var pageSize int32 = 100
	if r.pageSize != nil {
		pageSize = *r.pageSize
	}
	response, _, err := r.Execute()
	if err != nil {
		fmt.Printf("Exception when calling Search all: %s\n", err)
		return nil
	}
	if response.TotalHits > pageSize {
		for page := int32(2); page <= response.TotalPages; page++ {
			r.Page(page)
			res, _, err := r.Execute()
			if err != nil {
				fmt.Printf("Exception when calling Search all: %s\n", err)
				return nil
			}
			response.Articles = append(response.Articles, res.Articles...)
		}
	}
	return response.Articles
}

func (r *LatestHeadlinesApiPostRequest) ExecuteAll() []map[string]interface{} {
	var pageSize int32 = 100
	if r.latestHeadlinesRequest.PageSize != nil {
		pageSize = *r.latestHeadlinesRequest.PageSize
	}
	response, _, err := r.Execute()
	if err != nil {
		fmt.Printf("Exception when calling Search all: %s\n", err)
		return nil
	}
	if response.TotalHits > pageSize {
		for page := int32(2); page <= response.TotalPages; page++ {
			r.latestHeadlinesRequest.SetPage(page)
			res, _, err := r.Execute()
			if err != nil {
				fmt.Printf("Exception when calling Search all: %s\n", err)
				return nil
			}
			response.Articles = append(response.Articles, res.Articles...)
		}
	}
	return response.Articles
}