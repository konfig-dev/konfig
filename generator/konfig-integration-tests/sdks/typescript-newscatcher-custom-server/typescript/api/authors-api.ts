import { AuthorsApiGenerated, AuthorsApiGetRequest, AuthorsApiPostRequest } from "./authors-api-generated";
import { searchAll } from "../search-all-helper";
import { AxiosRequestConfig } from "axios";
export * from "./authors-api-generated";

export class AuthorsApi extends AuthorsApiGenerated {

    public async get_all(requestParameters: AuthorsApiGetRequest, options?: AxiosRequestConfig) {
        return searchAll(this.get.bind(this), requestParameters, options);
    }

    public async post_all(requestParameters: AuthorsApiPostRequest, options?: AxiosRequestConfig) {
        return searchAll(this.post.bind(this), requestParameters, options);
    }
}
