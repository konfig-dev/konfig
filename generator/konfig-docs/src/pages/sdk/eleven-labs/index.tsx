import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ElevenLabs",
    "numberOfMethods": 50,
    "categories": [
      "ai",
      "audio_generation",
      "voice_generation",
      "text_to_speech",
      "tts",
      "llm",
      "generative_ai"
    ],
    "index": "eleven-labs/typescript",
    "language": "TypeScript",
    "link": "/sdk/eleven-labs/typescript/",
    "developerDocumentation": "elevenlabs.io/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/elevenlabs/openapi.yaml"
  },
  {
    "name": "ElevenLabs",
    "numberOfMethods": 50,
    "categories": [
      "ai",
      "audio_generation",
      "voice_generation",
      "text_to_speech",
      "tts",
      "llm",
      "generative_ai"
    ],
    "index": "eleven-labs/python",
    "language": "Python",
    "link": "/sdk/eleven-labs/python/",
    "developerDocumentation": "elevenlabs.io/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/elevenlabs/openapi.yaml"
  },
  {
    "name": "ElevenLabs",
    "numberOfMethods": 50,
    "categories": [
      "ai",
      "audio_generation",
      "voice_generation",
      "text_to_speech",
      "tts",
      "llm",
      "generative_ai"
    ],
    "index": "eleven-labs/java",
    "language": "Java",
    "link": "/sdk/eleven-labs/java/",
    "developerDocumentation": "elevenlabs.io/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/elevenlabs/openapi.yaml"
  }
];

export default function ElevenLabs() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ElevenLabs"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/elevenlabs/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/elevenlabs/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/elevenlabs/favicon.png"
      sdks={sdks}
      homepage="elevenlabs.com"
      categories={allCategories}
      metaDescription={`Elevate your projects with the fastest & most powerful text to speech & voice API. Quickly generate AI voices in multiple languages for your chatbots, agents, LLMs, websites, apps and more.`}
    />
  )
}