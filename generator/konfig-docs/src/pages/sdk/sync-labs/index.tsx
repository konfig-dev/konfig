import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "sync. labs",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "audio_generation",
      "video",
      "language",
      "media"
    ],
    "index": "sync-labs/typescript",
    "language": "TypeScript",
    "link": "/sdk/sync-labs/typescript/",
    "developerDocumentation": "docs.synclabs.so/api-reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sync-labs/openapi.yaml"
  },
  {
    "name": "sync. labs",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "audio_generation",
      "video",
      "language",
      "media"
    ],
    "index": "sync-labs/python",
    "language": "Python",
    "link": "/sdk/sync-labs/python/",
    "developerDocumentation": "docs.synclabs.so/api-reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sync-labs/openapi.yaml"
  },
  {
    "name": "sync. labs",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "audio_generation",
      "video",
      "language",
      "media"
    ],
    "index": "sync-labs/java",
    "language": "Java",
    "link": "/sdk/sync-labs/java/",
    "developerDocumentation": "docs.synclabs.so/api-reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sync-labs/openapi.yaml"
  }
];

export default function SyncLabs() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="sync. labs"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/favicon.png"
      sdks={sdks}
      homepage="synclabs.so"
      companyKebabCase="sync-labs"
      categories={allCategories}
      metaDescription={`building generative models to modify + synthesize humans in video.

the first product we released is our synchronizer – a state-of-the-art lip-syncing model to sync a video to any audio in any language.

why is this important?

Imagine a world where you can watch your favorite films, content creators, or learn anything you want in your native tongue — seamlessly.

language should no longer be a barrier.

we're building a suite of audio / video models to change how we live, work, and play.`}
    />
  )
}