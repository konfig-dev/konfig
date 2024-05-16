import { AxiosRequestConfig } from "axios";
import { NewscatcherError } from "./error";

export async function searchAll(method: Function, requestParameters: any, options?: AxiosRequestConfig) {
    try {
        const pageSize = requestParameters.page_size || requestParameters.pageSize || 100;
        const response = (await method(requestParameters, options)).data;

        if (response.total_hits > pageSize) {
            for (let page = 2; page <= response.total_pages; page++) {
                requestParameters.page = page;
                const res = (await method(requestParameters, options)).data;
                response.articles.push(...res.articles);
            }
        }
        return response.articles;
    } catch (e) {
        if (e instanceof NewscatcherError) 
            console.error("Exception when calling API:", e);
        else 
            console.error("Unexpected error:", e);
        return null;
    }
}