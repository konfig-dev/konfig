import { SearchLinkApiGenerated, SearchLinkApiGetRequest, SearchLinkApiPostRequest } from "./search-link-api-generated";
import { searchAll } from "../search-all-helper";
import { AxiosRequestConfig } from "axios";
export * from "./search-link-api-generated";

export class SearchLinkApi extends SearchLinkApiGenerated {

    public async get_all(requestParameters: SearchLinkApiGetRequest, options?: AxiosRequestConfig) {
        return searchAll(this.get.bind(this), requestParameters, options);
    }

    public async post_all(requestParameters: SearchLinkApiPostRequest, options?: AxiosRequestConfig) {
        return searchAll(this.post.bind(this), requestParameters, options);
    }
}
