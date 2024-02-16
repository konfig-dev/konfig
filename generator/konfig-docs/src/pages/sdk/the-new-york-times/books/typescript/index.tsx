import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function TheNewYorkTimesBooksTypeScriptSdk() {
  return (
    <Sdk
      sdkName="nytimes-typescript-sdk"
      metaDescription="Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and international news, politics, business, technology, science, health, arts, sports and more."
      company="The New York Times"
      serviceName="Books"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/the-new-york-times/books/logo.png"
      clientNameCamelCase="nyt"
      homepage="developer.nytimes.com"
      lastUpdated={new Date("2024-02-09T23:50:03.376Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/the-new-york-times/books/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/the-new-york-times/books/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/lists.json",
    "method": "getBestSellers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Best Sellers List",
    "parameters": [
      {
        "name": "list",
        "schema": "string",
        "required": true,
        "description": "The name of the Times best sellers list (hardcover-fiction, paperback-nonfiction, ...).\nThe /lists/names service returns all the list names.\nThe encoded list names are lower case with hyphens instead of spaces (e.g. e-book-fiction, instead of E-Book Fiction)."
      },
      {
        "name": "bestsellersDate",
        "schema": "string",
        "description": "YYYY-MM-DD\n\nThe week-ending date for the sales reflected on list-name. Times best sellers lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29)."
      },
      {
        "name": "publishedDate",
        "schema": "string",
        "description": "YYYY-MM-DD\n\nThe date the best sellers list was published on NYTimes.com (different than bestsellers-date).  Use \"current\" for latest list."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/lists/{date}/{list}.json",
    "method": "getByDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Best Sellers List by Date",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "YYYY-MM-DD or \"current\"\n\nThe date the best sellers list was published on NYTimes.com.  Use \"current\" to get latest list."
      },
      {
        "name": "list",
        "schema": "string",
        "required": true,
        "description": "Name of the Best Sellers List (e.g. hardcover-fiction). You can get the full list of names from the /lists/names.json service."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/lists/full-overview.json",
    "method": "getAllBestSellers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Best Sellers List Full Overview",
    "parameters": [
      {
        "name": "publishedDate",
        "schema": "string",
        "description": "YYYY-MM-DD\n\nThe best-seller list publication date.\nYou do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.\n\nIf you do not include a published date, the current week's best sellers lists will be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/lists/overview.json",
    "method": "getBestSellersOverview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Best Sellers List Overview",
    "parameters": [
      {
        "name": "publishedDate",
        "schema": "string",
        "description": "YYYY-MM-DD\n\nThe best-seller list publication date.\nYou do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.\n\nIf you do not include a published date, the current week's best sellers lists will be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/lists/names.json",
    "method": "getNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Best Sellers List Names",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/lists/best-sellers/history.json",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "List",
    "typeScriptTag": "list",
    "description": "Best Sellers List History",
    "parameters": [
      {
        "name": "ageGroup",
        "schema": "string",
        "description": "The target age group for the best seller."
      },
      {
        "name": "author",
        "schema": "string",
        "description": "The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).\n\nWhen searching the author field, you can specify any combination of first, middle and last names.\n\nWhen sort-by is set to author, the results will be sorted by author's first name."
      },
      {
        "name": "contributor",
        "schema": "string",
        "description": "The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).\n\nWhen searching, you can specify any combination of first, middle and last names of any of the contributors.\n\nWhen sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed."
      },
      {
        "name": "isbn",
        "schema": "string",
        "description": "International Standard Book Number, 10 or 13 digits\n\nA best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229)."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results if there are more than 20. Defaults to 0. The num_results field indicates how many results there are total."
      },
      {
        "name": "price",
        "schema": "string",
        "description": "The publisher's list price of the best seller, including decimal point."
      },
      {
        "name": "publisher",
        "schema": "string",
        "description": "The standardized name of the publisher"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "The title of the best seller\n\nWhen searching, you can specify a portion of a title or a full title."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/reviews.json",
    "method": "getBookReviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review",
    "typeScriptTag": "review",
    "description": "Reviews",
    "parameters": [
      {
        "name": "isbn",
        "schema": "integer",
        "description": "Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs."
      },
      {
        "name": "title",
        "schema": "string",
        "description": "You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20."
      },
      {
        "name": "author",
        "schema": "string",
        "description": "You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Books API"
      apiBaseUrl="https://api.nytimes.com/svc/books/v3"
      apiVersion="3.0.0"
      endpoints={7}
      sdkMethods={7}
      schemas={1}
      parameters={20}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/the-new-york-times/books/openapi.yaml"
    />
  );
}
  