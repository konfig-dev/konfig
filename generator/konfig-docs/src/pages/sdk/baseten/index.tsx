import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Baseten",
    "numberOfMethods": 8,
    "categories": [
      "ai",
      "ml",
      "developer_tools",
      "automation",
      "collaboration",
      "media",
      "cloud",
      "open_source",
      "machine_learning",
      "deployment",
      "scalability",
      "cost_efficiency",
      "llm",
      "stable_diffusion",
      "tts",
      "text_to_audio",
      "text_to_speech",
      "text_to_image",
      "image_to_video",
      "image_classification",
      "text_embeddings",
      "audio_to_text",
      "image_to_text"
    ],
    "index": "baseten/typescript",
    "language": "TypeScript",
    "link": "/sdk/baseten/typescript/",
    "developerDocumentation": "docs.baseten.co/welcome",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baseten/openapi.yaml"
  },
  {
    "name": "Baseten",
    "numberOfMethods": 8,
    "categories": [
      "ai",
      "ml",
      "developer_tools",
      "automation",
      "collaboration",
      "media",
      "cloud",
      "open_source",
      "machine_learning",
      "deployment",
      "scalability",
      "cost_efficiency",
      "llm",
      "stable_diffusion",
      "tts",
      "text_to_audio",
      "text_to_speech",
      "text_to_image",
      "image_to_video",
      "image_classification",
      "text_embeddings",
      "audio_to_text",
      "image_to_text"
    ],
    "index": "baseten/python",
    "language": "Python",
    "link": "/sdk/baseten/python/",
    "developerDocumentation": "docs.baseten.co/welcome",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baseten/openapi.yaml"
  },
  {
    "name": "Baseten",
    "numberOfMethods": 8,
    "categories": [
      "ai",
      "ml",
      "developer_tools",
      "automation",
      "collaboration",
      "media",
      "cloud",
      "open_source",
      "machine_learning",
      "deployment",
      "scalability",
      "cost_efficiency",
      "llm",
      "stable_diffusion",
      "tts",
      "text_to_audio",
      "text_to_speech",
      "text_to_image",
      "image_to_video",
      "image_classification",
      "text_embeddings",
      "audio_to_text",
      "image_to_text"
    ],
    "index": "baseten/java",
    "language": "Java",
    "link": "/sdk/baseten/java/",
    "developerDocumentation": "docs.baseten.co/welcome",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baseten/openapi.yaml"
  }
];

export default function Baseten() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Baseten"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/favicon.png"
      sdks={sdks}
      homepage="baseten.co"
      categories={allCategories}
      metaDescription={`At Baseten we provide all the infrastructure you need to deploy and serve ML models performantly, scalably, and cost-efficiently.Get started in minutes, and avoid getting tangled in complex deployment processes. You can deploy best-in-class open-source models and take advantage of optimized serving for your own models.We also utilize horizontally scalable services that take you from prototype to production, with light-speed inference on infra that autoscales with your traffic.Best in class doesn't mean breaking the bank. Run your models on the best infrastructure without running up costs by taking advantage of our scaled-to-zero feature.`}
    />
  )
}