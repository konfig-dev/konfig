import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Web",
    "numberOfMethods": 174,
    "categories": [
      "collaboration",
      "messaging",
      "automation"
    ],
    "index": "web/typescript",
    "language": "TypeScript",
    "link": "/sdk/slack/web/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/slack/web/openapi.yaml"
  },
  {
    "name": "Web",
    "numberOfMethods": 174,
    "categories": [
      "collaboration",
      "messaging",
      "automation"
    ],
    "index": "web/python",
    "language": "Python",
    "link": "/sdk/slack/web/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/slack/web/openapi.yaml"
  },
  {
    "name": "Web",
    "numberOfMethods": 174,
    "categories": [
      "collaboration",
      "messaging",
      "automation"
    ],
    "index": "web/java",
    "language": "Java",
    "link": "/sdk/slack/web/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/slack/web/openapi.yaml"
  }
];

export default function Slack() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Slack"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slack/web/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slack/web/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slack/web/favicon.png"
      sdks={sdks}
      homepage="slack.dev"
      categories={allCategories}
      metaDescription={`Slack is a popular messaging platform designed for teams and workplaces. It offers real-time messaging, file sharing, and collaboration tools to help teams communicate and work together effectively. Users can create channels for different topics, send direct messages, and integrate with other apps for seamless workflow management.`}
    />
  )
}