import { LatestHeadlinesApiGenerated, LatestHeadlinesApiGetRequest, LatestHeadlinesApiPostRequest } from "./latest-headlines-api-generated";
import { searchAll } from "../search-all-helper";
import { AxiosRequestConfig } from "axios";
export * from "./latest-headlines-api-generated";

export class LatestHeadlinesApi extends LatestHeadlinesApiGenerated {

    public async get_all(requestParameters: LatestHeadlinesApiGetRequest, options?: AxiosRequestConfig) {
        return searchAll(this.get.bind(this), requestParameters, options);
    }

    public async post_all(requestParameters: LatestHeadlinesApiPostRequest, options?: AxiosRequestConfig) {
        return searchAll(this.post.bind(this), requestParameters, options);
    }
}
