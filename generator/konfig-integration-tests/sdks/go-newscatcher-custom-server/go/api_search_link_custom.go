package newscatcherapi

import "fmt"

func (r *SearchLinkApiGetRequest) ExecuteAll() []map[string]interface{} {
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

func (r *SearchLinkApiPostRequest) ExecuteAll() []map[string]interface{} {
	var pageSize int32 = 100
	if r.searchURLRequest.PageSize != nil {
		pageSize = *r.searchURLRequest.PageSize
	}
	response, _, err := r.Execute()
	if err != nil {
		fmt.Printf("Exception when calling Search all: %s\n", err)
		return nil
	}
	if response.TotalHits > pageSize {
		for page := int32(2); page <= response.TotalPages; page++ {
			r.searchURLRequest.SetPage(page)
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