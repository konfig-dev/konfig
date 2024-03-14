import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Just Eat",
    "numberOfMethods": 91,
    "categories": [
      "ecommerce",
      "food_delivery",
      "online_food_ordering"
    ],
    "index": "just-eat/typescript",
    "language": "TypeScript",
    "link": "/sdk/just-eat/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/just-eat/openapi.yaml"
  },
  {
    "name": "Just Eat",
    "numberOfMethods": 91,
    "categories": [
      "ecommerce",
      "food_delivery",
      "online_food_ordering"
    ],
    "index": "just-eat/python",
    "language": "Python",
    "link": "/sdk/just-eat/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/just-eat/openapi.yaml"
  },
  {
    "name": "Just Eat",
    "numberOfMethods": 91,
    "categories": [
      "ecommerce",
      "food_delivery",
      "online_food_ordering"
    ],
    "index": "just-eat/java",
    "language": "Java",
    "link": "/sdk/just-eat/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/just-eat/openapi.yaml"
  }
];

export default function JustEat() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Just Eat"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/just-eat/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/just-eat/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/just-eat/favicon.png"
      sdks={sdks}
      homepage="developers.just-eat.com/"
      categories={allCategories}
      metaDescription={`Just Eat is an online food ordering and delivery platform that connects users with a wide range of restaurants in their area. Users can browse menus, place orders, and have food delivered straight to their doorstep. Just Eat offers a convenient and easy way to satisfy food cravings from the comfort of home.`}
    />
  )
}