import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Discourse",
    "numberOfMethods": 87,
    "categories": [
      "collaboration",
      "media",
      "forum",
      "community_engagement",
      "discussion",
      "moderation",
      "customization",
      "conversations",
      "user_participation",
      "knowledge_sharing",
      "ideas"
    ],
    "index": "discourse/typescript",
    "language": "TypeScript",
    "link": "/sdk/discourse/typescript/",
    "developerDocumentation": "docs.discourse.org/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/discourse/openapi.yaml"
  },
  {
    "name": "Discourse",
    "numberOfMethods": 87,
    "categories": [
      "collaboration",
      "media",
      "forum",
      "community_engagement",
      "discussion",
      "moderation",
      "customization",
      "conversations",
      "user_participation",
      "knowledge_sharing",
      "ideas"
    ],
    "index": "discourse/python",
    "language": "Python",
    "link": "/sdk/discourse/python/",
    "developerDocumentation": "docs.discourse.org/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/discourse/openapi.yaml"
  },
  {
    "name": "Discourse",
    "numberOfMethods": 87,
    "categories": [
      "collaboration",
      "media",
      "forum",
      "community_engagement",
      "discussion",
      "moderation",
      "customization",
      "conversations",
      "user_participation",
      "knowledge_sharing",
      "ideas"
    ],
    "index": "discourse/java",
    "language": "Java",
    "link": "/sdk/discourse/java/",
    "developerDocumentation": "docs.discourse.org/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/discourse/openapi.yaml"
  }
];

export default function Discourse() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Discourse"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/discourse/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/discourse/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/discourse/favicon.png"
      sdks={sdks}
      homepage="discourse.org"
      categories={allCategories}
      metaDescription={`Discourse is a modern forum software designed for community engagement and discussion. It offers a user-friendly interface, powerful moderation tools, and extensive customization options. Discourse fosters healthy conversations, promotes user participation, and provides a platform for sharing knowledge and ideas across diverse communities.`}
    />
  )
}