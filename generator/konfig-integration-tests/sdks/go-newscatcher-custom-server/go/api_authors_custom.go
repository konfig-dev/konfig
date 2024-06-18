package newscatcherapi

import "fmt"

func (r *AuthorsApiGetRequest) ExecuteAll() []ArticlesPropertyInner {
	var pageSize int32 = 100
	if r.pageSize != nil {
		pageSize = *r.pageSize
	}
	response, _, err := r.Execute()
	if err != nil {
		fmt.Printf("Exception when calling Search all: %s\n", err)
		return nil
	}
	if *response.TotalHits > pageSize {
		for page := int32(2); page <= *response.TotalPages; page++ {
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

func (r *AuthorsApiPostRequest) ExecuteAll() []ArticlesPropertyInner {
	var pageSize int32 = 100
	if r.authorSearchRequest.PageSize != nil {
		pageSize = *r.authorSearchRequest.PageSize
	}
	response, _, err := r.Execute()
	if err != nil {
		fmt.Printf("Exception when calling Search all: %s\n", err)
		return nil
	}
	if *response.TotalHits > pageSize {
		for page := int32(2); page <= *response.TotalPages; page++ {
			r.authorSearchRequest.SetPage(page)
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