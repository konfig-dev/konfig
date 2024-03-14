import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Oxford Dictionaries",
    "numberOfMethods": 26,
    "categories": [
      "media",
      "collaboration",
      "language",
      "education",
      "grammar",
      "dictionaries",
      "language_learning"
    ],
    "index": "oxford-dictionaries/typescript",
    "language": "TypeScript",
    "link": "/sdk/oxford-dictionaries/typescript/",
    "developerDocumentation": "developer.oxforddictionaries.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/oxford-dictionaries/openapi.yaml"
  },
  {
    "name": "Oxford Dictionaries",
    "numberOfMethods": 26,
    "categories": [
      "media",
      "collaboration",
      "language",
      "education",
      "grammar",
      "dictionaries",
      "language_learning"
    ],
    "index": "oxford-dictionaries/python",
    "language": "Python",
    "link": "/sdk/oxford-dictionaries/python/",
    "developerDocumentation": "developer.oxforddictionaries.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/oxford-dictionaries/openapi.yaml"
  },
  {
    "name": "Oxford Dictionaries",
    "numberOfMethods": 26,
    "categories": [
      "media",
      "collaboration",
      "language",
      "education",
      "grammar",
      "dictionaries",
      "language_learning"
    ],
    "index": "oxford-dictionaries/java",
    "language": "Java",
    "link": "/sdk/oxford-dictionaries/java/",
    "developerDocumentation": "developer.oxforddictionaries.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/oxford-dictionaries/openapi.yaml"
  }
];

export default function OxfordDictionaries() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Oxford Dictionaries"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/favicon.png"
      sdks={sdks}
      homepage="developer.oxforddictionaries.com"
      categories={allCategories}
      metaDescription={`Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.`}
    />
  )
}