import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Postmark",
    "numberOfMethods": 43,
    "categories": [
      "email"
    ],
    "index": "postmark/typescript",
    "language": "TypeScript",
    "link": "/sdk/postmark/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/postmark/openapi.yaml"
  },
  {
    "name": "Postmark",
    "numberOfMethods": 43,
    "categories": [
      "email"
    ],
    "index": "postmark/python",
    "language": "Python",
    "link": "/sdk/postmark/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/postmark/openapi.yaml"
  },
  {
    "name": "Postmark",
    "numberOfMethods": 43,
    "categories": [
      "email"
    ],
    "index": "postmark/java",
    "language": "Java",
    "link": "/sdk/postmark/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/postmark/openapi.yaml"
  }
];

export default function Postmark() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Postmark"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/postmark/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/postmark/logo.svg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/postmark/favicon.png"
      sdks={sdks}
      homepage="postmarkapp.com"
      categories={allCategories}
      metaDescription={`Send transactional and marketing emails and get them to the inbox on time, every time. Postmark is a fast and reliable email delivery service for developers.`}
    />
  )
}