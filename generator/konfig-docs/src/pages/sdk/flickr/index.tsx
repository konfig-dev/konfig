import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Flickr",
    "numberOfMethods": 25,
    "categories": [
      "media",
      "collaboration",
      "social_media"
    ],
    "index": "flickr/typescript",
    "language": "TypeScript",
    "link": "/sdk/flickr/typescript/",
    "developerDocumentation": "www.flickr.com/services/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/flickr/openapi.yaml"
  },
  {
    "name": "Flickr",
    "numberOfMethods": 25,
    "categories": [
      "media",
      "collaboration",
      "social_media"
    ],
    "index": "flickr/python",
    "language": "Python",
    "link": "/sdk/flickr/python/",
    "developerDocumentation": "www.flickr.com/services/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/flickr/openapi.yaml"
  },
  {
    "name": "Flickr",
    "numberOfMethods": 25,
    "categories": [
      "media",
      "collaboration",
      "social_media"
    ],
    "index": "flickr/java",
    "language": "Java",
    "link": "/sdk/flickr/java/",
    "developerDocumentation": "www.flickr.com/services/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/flickr/openapi.yaml"
  }
];

export default function Flickr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Flickr"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/flickr/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/flickr/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/flickr/favicon.png"
      sdks={sdks}
      homepage="flickr.com"
      categories={allCategories}
      metaDescription={`Flickr is an image hosting and video hosting website, web services suite, and online community platform. It was one of the earliest Web 2.0 applications. Flickr allows users to share and embed personal photographs and videos, and to interact with other members through commenting, groups, and more.`}
    />
  )
}