import { SearchSimilarApiGenerated, SearchSimilarApiGetRequest, SearchSimilarApiPostRequest } from "./search-similar-api-generated";
import { searchAll } from "../search-all-helper";
import { AxiosRequestConfig } from "axios";
export * from "./search-similar-api-generated";

export class SearchSimilarApi extends SearchSimilarApiGenerated {

    public async get_all(requestParameters: SearchSimilarApiGetRequest, options?: AxiosRequestConfig) {
        return searchAll(this.get.bind(this), requestParameters, options);
    }

    public async post_all(requestParameters: SearchSimilarApiPostRequest, options?: AxiosRequestConfig) {
        return searchAll(this.post.bind(this), requestParameters, options);
    }
}
