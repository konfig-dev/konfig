import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Meeting",
    "numberOfMethods": 164,
    "categories": [
      "productivity",
      "collaboration",
      "video",
      "conferencing",
      "webinar",
      "communications"
    ],
    "index": "meeting/typescript",
    "language": "TypeScript",
    "link": "/sdk/zoom/meeting/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zoom/meeting/openapi.yaml"
  },
  {
    "name": "Meeting",
    "numberOfMethods": 164,
    "categories": [
      "productivity",
      "collaboration",
      "video",
      "conferencing",
      "webinar",
      "communications"
    ],
    "index": "meeting/python",
    "language": "Python",
    "link": "/sdk/zoom/meeting/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zoom/meeting/openapi.yaml"
  },
  {
    "name": "Meeting",
    "numberOfMethods": 164,
    "categories": [
      "productivity",
      "collaboration",
      "video",
      "conferencing",
      "webinar",
      "communications"
    ],
    "index": "meeting/java",
    "language": "Java",
    "link": "/sdk/zoom/meeting/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zoom/meeting/openapi.yaml"
  }
];

export default function Zoom() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Zoom"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/favicon.png"
      sdks={sdks}
      homepage="zoom.us/"
      categories={allCategories}
      metaDescription={`Zoom is a video conferencing platform that allows users to connect remotely for virtual meetings, webinars, online events, and collaborative work sessions. With features like screen sharing, virtual backgrounds, and chat functionality, Zoom is a popular tool for individuals and businesses to communicate and collaborate in real-time.`}
    />
  )
}