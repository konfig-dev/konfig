import { SearchApiGenerated, SearchApiGetRequest, SearchApiPostRequest } from "./search-api-generated";
import { searchAll } from "../search-all-helper";
import { AxiosRequestConfig } from "axios";
export * from "./search-api-generated";

export class SearchApi extends SearchApiGenerated {

    public async get_all(requestParameters: SearchApiGetRequest, options?: AxiosRequestConfig) {
        return searchAll(this.get.bind(this), requestParameters, options);
    }

    public async post_all(requestParameters: SearchApiPostRequest, options?: AxiosRequestConfig) {
        return searchAll(this.post.bind(this), requestParameters, options);
    }
}
