import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "SoundCloud",
    "numberOfMethods": 55,
    "categories": [
      "media"
    ],
    "index": "sound-cloud/typescript",
    "language": "TypeScript",
    "link": "/sdk/sound-cloud/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/soundcloud/openapi.yaml"
  },
  {
    "name": "SoundCloud",
    "numberOfMethods": 55,
    "categories": [
      "media"
    ],
    "index": "sound-cloud/python",
    "language": "Python",
    "link": "/sdk/sound-cloud/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/soundcloud/openapi.yaml"
  },
  {
    "name": "SoundCloud",
    "numberOfMethods": 55,
    "categories": [
      "media"
    ],
    "index": "sound-cloud/java",
    "language": "Java",
    "link": "/sdk/sound-cloud/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/soundcloud/openapi.yaml"
  }
];

export default function SoundCloud() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="SoundCloud"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/favicon.jpeg"
      sdks={sdks}
      homepage="developers.soundcloud.com"
      categories={allCategories}
      metaDescription={`Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.`}
    />
  )
}