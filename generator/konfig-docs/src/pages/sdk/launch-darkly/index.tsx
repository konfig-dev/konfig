import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "LaunchDarkly",
    "numberOfMethods": 257,
    "categories": [
      "developer_tools",
      "automation",
      "feature_management",
      "software_development",
      "feature_flags",
      "analytics"
    ],
    "index": "launch-darkly/typescript",
    "language": "TypeScript",
    "link": "/sdk/launch-darkly/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/launchdarkly/openapi.yaml"
  },
  {
    "name": "LaunchDarkly",
    "numberOfMethods": 257,
    "categories": [
      "developer_tools",
      "automation",
      "feature_management",
      "software_development",
      "feature_flags",
      "analytics"
    ],
    "index": "launch-darkly/python",
    "language": "Python",
    "link": "/sdk/launch-darkly/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/launchdarkly/openapi.yaml"
  },
  {
    "name": "LaunchDarkly",
    "numberOfMethods": 257,
    "categories": [
      "developer_tools",
      "automation",
      "feature_management",
      "software_development",
      "feature_flags",
      "analytics"
    ],
    "index": "launch-darkly/java",
    "language": "Java",
    "link": "/sdk/launch-darkly/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/launchdarkly/openapi.yaml"
  }
];

export default function LaunchDarkly() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="LaunchDarkly"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/launchdarkly/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/launchdarkly/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/launchdarkly/favicon.png"
      sdks={sdks}
      homepage="launchdarkly.com"
      categories={allCategories}
      metaDescription={`LaunchDarkly is a feature management platform that empowers software teams to build better software faster with feature flags. By decoupling features from code deployments, teams can control and manage feature releases, target specific user segments, and monitor feature performance in real-time. With LaunchDarkly, teams can mitigate risks, optimize development workflows, and deliver value to customers with confidence.`}
    />
  )
}