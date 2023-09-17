/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
    },
    {
      label: "SDKs",
      type: "category",
      collapsible: false,
      items: [
        {
          label: "Getting Started",
          type: "category",
          items: [
            "getting-started/openapi-specification",
            "getting-started/postman-collections",
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          link: {
            type: "generated-index",
          },
          items: [
            "tutorials/setup-linting",
            "tutorials/setup-breaking-change-detection",
            "tutorials/fix-openapi-spec",
            "tutorials/automate-sdk-updates",
            "tutorials/publish-sdks",
            "tutorials/naming-operation-ids",
          ],
        },
        {
          type: "category",
          label: "Custom SDKs",
          link: {
            type: "doc",
            id: "custom-sdks",
          },
          items: [
            "custom-sdks/implementing-pagination",
            "custom-sdks/example-customized-sdks",
            "custom-sdks/flows",
          ],
        },
        {
          type: "category",
          label: "Reference",
          link: {
            type: "generated-index",
          },
          items: ["reference/language-and-oas-support", "reference/faq"],
        },
        {
          type: "doc",
          id: "lint-rules",
        },
        {
          type: "category",
          label: "konfig.yaml",
          link: {
            type: "doc",
            id: "konfig-yaml",
          },
          items: [{ type: "doc", id: "konfig-yaml/schema", label: "Schema" }],
        },
        {
          type: "doc",
          id: "example-sdks",
        },
      ],
    },
    {
      label: "Documentation",
      type: "category",
      collapsible: false,
      items: [
        {
          type: "doc",
          label: "API Reference",
          id: "portal/api-reference",
        },
        {
          type: "doc",
          label: "Markdown Pages",
          id: "portal/markdown-pages",
        },
        {
          type: "doc",
          label: "Interactive Demos",
          id: "portal/interactive-demos",
        },
        {
          type: "category",
          label: "Tutorials",
          items: [
            {
              type: "doc",
              label: "Creating Markdown Pages",
              id: "portal/tutorials/creating-markdown-pages",
            },
            {
              type: "doc",
              label: "Configuring a Custom Domain",
              id: "portal/tutorials/configuring-a-custom-domain",
            },
          ],
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
