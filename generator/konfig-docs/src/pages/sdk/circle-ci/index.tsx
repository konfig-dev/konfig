import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "CircleCI",
    "numberOfMethods": 78,
    "categories": [
      "developer_tools",
      "automation",
      "collaboration",
      "continuous_integration",
      "continuous_delivery",
      "continuous_integration",
      "continuous_delivery",
      "continuous_deployment",
      "containers",
      "devops",
      "cicd",
      "ci",
      "cd",
      "software_delivery",
      "ci_platform",
      "software_testing",
      "developer_experience"
    ],
    "index": "circle-ci/typescript",
    "language": "TypeScript",
    "link": "/sdk/circle-ci/typescript/",
    "developerDocumentation": "circleci.com/docs/api-intro/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/circleci/openapi.yaml"
  },
  {
    "name": "CircleCI",
    "numberOfMethods": 78,
    "categories": [
      "developer_tools",
      "automation",
      "collaboration",
      "continuous_integration",
      "continuous_delivery",
      "continuous_integration",
      "continuous_delivery",
      "continuous_deployment",
      "containers",
      "devops",
      "cicd",
      "ci",
      "cd",
      "software_delivery",
      "ci_platform",
      "software_testing",
      "developer_experience"
    ],
    "index": "circle-ci/python",
    "language": "Python",
    "link": "/sdk/circle-ci/python/",
    "developerDocumentation": "circleci.com/docs/api-intro/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/circleci/openapi.yaml"
  },
  {
    "name": "CircleCI",
    "numberOfMethods": 78,
    "categories": [
      "developer_tools",
      "automation",
      "collaboration",
      "continuous_integration",
      "continuous_delivery",
      "continuous_integration",
      "continuous_delivery",
      "continuous_deployment",
      "containers",
      "devops",
      "cicd",
      "ci",
      "cd",
      "software_delivery",
      "ci_platform",
      "software_testing",
      "developer_experience"
    ],
    "index": "circle-ci/java",
    "language": "Java",
    "link": "/sdk/circle-ci/java/",
    "developerDocumentation": "circleci.com/docs/api-intro/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/circleci/openapi.yaml"
  }
];

export default function CircleCi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="CircleCI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/circleci/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/circleci/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/circleci/favicon.png"
      sdks={sdks}
      homepage="circleci.com"
      categories={allCategories}
      metaDescription={`CircleCI is the software delivery engine for teams who want to ship software faster and with confidence. 
We do this today by building the world's best platform for Continuous Integration and Continuous Delivery (CI/CD). Ultimately, we plan to map every source of change for software teams, so they can accelerate innovation and growth. 

Our platform was built by a team of DevOps experts who understand how critical CI/CD is to your entire development process and your entire business. The best software teams know that speed, focus, and consistency of delivery make the difference between good and great. We built CircleCI to deliver on these promises so you can deliver on yours — to reliably bring only the highest quality products to your customers.

CircleCI is proud to be an Equal Opportunity and Affirmative Action employer. We do not discriminate based upon race, religion, color, national origin, sexual orientation, gender, gender identity, gender expression, transgender status, sexual stereotypes, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics. We also consider qualified applicants with criminal histories, consistent with applicable federal, state and local law.`}
    />
  )
}