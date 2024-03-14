import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Client",
    "numberOfMethods": 95,
    "categories": [
      "developer_tools",
      "open_source",
      "platform",
      "storage",
      "auth",
      "functions",
      "database",
      "db"
    ],
    "index": "client/typescript",
    "language": "TypeScript",
    "link": "/sdk/appwrite/client/typescript/",
    "developerDocumentation": "appwrite.io/docs/references#api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/client/openapi.yaml"
  },
  {
    "name": "Client",
    "numberOfMethods": 95,
    "categories": [
      "developer_tools",
      "open_source",
      "platform",
      "storage",
      "auth",
      "functions",
      "database",
      "db"
    ],
    "index": "client/python",
    "language": "Python",
    "link": "/sdk/appwrite/client/python/",
    "developerDocumentation": "appwrite.io/docs/references#api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/client/openapi.yaml"
  },
  {
    "name": "Client",
    "numberOfMethods": 95,
    "categories": [
      "developer_tools",
      "open_source",
      "platform",
      "storage",
      "auth",
      "functions",
      "database",
      "db"
    ],
    "index": "client/java",
    "language": "Java",
    "link": "/sdk/appwrite/client/java/",
    "developerDocumentation": "appwrite.io/docs/references#api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/client/openapi.yaml"
  },
  {
    "name": "Console",
    "numberOfMethods": 356,
    "categories": [
      "developer_tools",
      "open_source",
      "storage",
      "platform",
      "data_ownership",
      "db",
      "database",
      "auth",
      "functions"
    ],
    "index": "console/typescript",
    "language": "TypeScript",
    "link": "/sdk/appwrite/console/typescript/",
    "developerDocumentation": "appwrite.io/docs/references#api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/console/openapi.yaml"
  },
  {
    "name": "Console",
    "numberOfMethods": 356,
    "categories": [
      "developer_tools",
      "open_source",
      "storage",
      "platform",
      "data_ownership",
      "db",
      "database",
      "auth",
      "functions"
    ],
    "index": "console/python",
    "language": "Python",
    "link": "/sdk/appwrite/console/python/",
    "developerDocumentation": "appwrite.io/docs/references#api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/console/openapi.yaml"
  },
  {
    "name": "Console",
    "numberOfMethods": 356,
    "categories": [
      "developer_tools",
      "open_source",
      "storage",
      "platform",
      "data_ownership",
      "db",
      "database",
      "auth",
      "functions"
    ],
    "index": "console/java",
    "language": "Java",
    "link": "/sdk/appwrite/console/java/",
    "developerDocumentation": "appwrite.io/docs/references#api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/console/openapi.yaml"
  },
  {
    "name": "Server",
    "numberOfMethods": 259,
    "categories": [
      "developer_tools",
      "open_source",
      "platform",
      "data_ownership",
      "db",
      "database",
      "auth",
      "functions",
      "storage"
    ],
    "index": "server/typescript",
    "language": "TypeScript",
    "link": "/sdk/appwrite/server/typescript/",
    "developerDocumentation": "appwrite.io/docs/references#api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/server/openapi.yaml"
  },
  {
    "name": "Server",
    "numberOfMethods": 259,
    "categories": [
      "developer_tools",
      "open_source",
      "platform",
      "data_ownership",
      "db",
      "database",
      "auth",
      "functions",
      "storage"
    ],
    "index": "server/python",
    "language": "Python",
    "link": "/sdk/appwrite/server/python/",
    "developerDocumentation": "appwrite.io/docs/references#api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/server/openapi.yaml"
  },
  {
    "name": "Server",
    "numberOfMethods": 259,
    "categories": [
      "developer_tools",
      "open_source",
      "platform",
      "data_ownership",
      "db",
      "database",
      "auth",
      "functions",
      "storage"
    ],
    "index": "server/java",
    "language": "Java",
    "link": "/sdk/appwrite/server/java/",
    "developerDocumentation": "appwrite.io/docs/references#api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/server/openapi.yaml"
  }
];

export default function Appwrite() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Appwrite"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/client/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/client/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/client/favicon.png"
      sdks={sdks}
      homepage="appwrite.io"
      categories={allCategories}
      metaDescription={`Appwrite's open-source development platform lets you build any application at any scale, own your data, and use your preferred coding languages and tools.

Build like a team of hundreds.`}
    />
  )
}