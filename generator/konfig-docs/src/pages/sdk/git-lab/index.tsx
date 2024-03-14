import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "GitLab",
    "numberOfMethods": 73,
    "categories": [
      "developer_tools",
      "automation",
      "collaboration",
      "version_control",
      "continuous_integration",
      "continuous_delivery"
    ],
    "index": "git-lab/typescript",
    "language": "TypeScript",
    "link": "/sdk/git-lab/typescript/",
    "developerDocumentation": "docs.gitlab.com/ee/api/rest/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gitlab/openapi.yaml"
  },
  {
    "name": "GitLab",
    "numberOfMethods": 73,
    "categories": [
      "developer_tools",
      "automation",
      "collaboration",
      "version_control",
      "continuous_integration",
      "continuous_delivery"
    ],
    "index": "git-lab/python",
    "language": "Python",
    "link": "/sdk/git-lab/python/",
    "developerDocumentation": "docs.gitlab.com/ee/api/rest/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gitlab/openapi.yaml"
  },
  {
    "name": "GitLab",
    "numberOfMethods": 73,
    "categories": [
      "developer_tools",
      "automation",
      "collaboration",
      "version_control",
      "continuous_integration",
      "continuous_delivery"
    ],
    "index": "git-lab/java",
    "language": "Java",
    "link": "/sdk/git-lab/java/",
    "developerDocumentation": "docs.gitlab.com/ee/api/rest/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gitlab/openapi.yaml"
  }
];

export default function GitLab() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="GitLab"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gitlab/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gitlab/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gitlab/favicon.png"
      sdks={sdks}
      homepage="gitlab.com"
      categories={allCategories}
      metaDescription={`GitLab is a complete DevOps platform, delivered as a single application, that provides teams a way to collaborate, build, and deploy their software. With GitLab, you can automate the entire DevOps lifecycle from planning and creating code to testing, releasing, and monitoring applications.`}
    />
  )
}