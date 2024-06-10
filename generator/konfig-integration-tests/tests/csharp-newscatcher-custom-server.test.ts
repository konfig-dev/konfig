import { e2e } from "../util";
import { test } from "vitest";

const response = {
  status: "ok",
  total_hits: 300,
  page: 1,
  total_pages: 3,
  page_size: 100,
  articles: [{title: "article1"}, {title: "article2"}],
  user_input: {},
}

test("csharp-newscatcher-custom-server", async () => {
  await e2e(4088, {
    customServer: {
      routes: [
        {
          path: "/api/authors",
          method: "get",
          response: response
        },
        {
          path: "/api/authors",
          method: "post",
          response: response
        },
        {
          path: "/api/latest_headlines",
          method: "get",
          response: response
        },
        {
          path: "/api/latest_headlines",
          method: "post",
          response: response
        },
        {
          path: "/api/search_by_link",
          method: "get",
          response: response
        },
        {
          path: "/api/search_by_link",
          method: "post",
          response: response
        },
        {
          path: "/api/search_similar",
          method: "get",
          response: response
        },
        {
          path: "/api/search_similar",
          method: "post",
          response: response
        },
        {
          path: "/api/search",
          method: "get",
          response: response
        },
        {
          path: "/api/search",
          method: "post",
          response: response
        },
      ],
    },
  });
});