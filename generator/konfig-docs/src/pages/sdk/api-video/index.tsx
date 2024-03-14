import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "api.video",
    "numberOfMethods": 48,
    "categories": [
      "video",
      "developer_tools",
      "platform",
      "storage",
      "online_video",
      "video_encoding",
      "video_streaming",
      "live_streaming",
      "video_analytics",
      "video_api",
      "video_ondemand"
    ],
    "index": "api-video/typescript",
    "language": "TypeScript",
    "link": "/sdk/api-video/typescript/",
    "developerDocumentation": "docs.api.video/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/api-video/openapi.yaml"
  },
  {
    "name": "api.video",
    "numberOfMethods": 48,
    "categories": [
      "video",
      "developer_tools",
      "platform",
      "storage",
      "online_video",
      "video_encoding",
      "video_streaming",
      "live_streaming",
      "video_analytics",
      "video_api",
      "video_ondemand"
    ],
    "index": "api-video/python",
    "language": "Python",
    "link": "/sdk/api-video/python/",
    "developerDocumentation": "docs.api.video/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/api-video/openapi.yaml"
  },
  {
    "name": "api.video",
    "numberOfMethods": 48,
    "categories": [
      "video",
      "developer_tools",
      "platform",
      "storage",
      "online_video",
      "video_encoding",
      "video_streaming",
      "live_streaming",
      "video_analytics",
      "video_api",
      "video_ondemand"
    ],
    "index": "api-video/java",
    "language": "Java",
    "link": "/sdk/api-video/java/",
    "developerDocumentation": "docs.api.video/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/api-video/openapi.yaml"
  }
];

export default function ApiVideo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="api.video"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/api-video/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/api-video/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/api-video/favicon.png"
      sdks={sdks}
      homepage="api.video"
      categories={allCategories}
      metaDescription={`Deliver high-quality videos directly from your website, software, or app. 

api.video is an API-first platform that enables product builders to integrate video in their own apps and platforms in minutes, with just a few lines of code. 
The service handles the end-to-end workflow, from video ingestion to worldwide video delivery.`}
    />
  )
}