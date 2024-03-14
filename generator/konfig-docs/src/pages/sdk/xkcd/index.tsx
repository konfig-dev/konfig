import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "xkcd",
    "numberOfMethods": 2,
    "categories": [
      "media"
    ],
    "index": "xkcd/typescript",
    "language": "TypeScript",
    "link": "/sdk/xkcd/typescript/",
    "developerDocumentation": "xkcd.com/json.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xkcd/openapi.yaml"
  },
  {
    "name": "xkcd",
    "numberOfMethods": 2,
    "categories": [
      "media"
    ],
    "index": "xkcd/python",
    "language": "Python",
    "link": "/sdk/xkcd/python/",
    "developerDocumentation": "xkcd.com/json.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xkcd/openapi.yaml"
  },
  {
    "name": "xkcd",
    "numberOfMethods": 2,
    "categories": [
      "media"
    ],
    "index": "xkcd/java",
    "language": "Java",
    "link": "/sdk/xkcd/java/",
    "developerDocumentation": "xkcd.com/json.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xkcd/openapi.yaml"
  }
];

export default function Xkcd() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="xkcd"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xkcd/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xkcd/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xkcd/favicon.png"
      sdks={sdks}
      homepage="xkcd.com/"
      categories={allCategories}
      metaDescription={`xkcd is a webcomic of romance, sarcasm, math, and language. It delivers a mix of humor and intelligence through its stick-figure comics that explore various topics such as science, technology, and pop culture in a witty and insightful manner.`}
    />
  )
}