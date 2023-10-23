// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { remarkCodeHike } = require("konfig-code-hike-mdx");

/**
 * mdx-mermaid plugin.
 *
 * @param config Config passed in from parser.
 * @returns Function to transform mdxast.
 */
function mermaid(config) {
  return async function transformer(ast) {
    const visit = await import("unist-util-visit").then((mod) =>
      typeof mod.default === "function" ? mod.default : mod.visit
    );

    // Find all the mermaid diagram code blocks. i.e. ```mermaid
    const instances = [];
    visit(ast, { type: "code", lang: "mermaid" }, (node, index, parent) => {
      instances.push([node, index, parent]);
    });

    // Replace each Mermaid code block with the Mermaid component
    for (let i = 0; i < instances.length; i++) {
      const [node, index, parent] = instances[i];
      const result = createMermaidNode(
        node,
        "Mermaid",
        i === 0 ? config : undefined
      );
      Array.prototype.splice.apply(parent.children, [index, 1, ...result]);
    }
    return ast;
  };
}

function createMermaidNode(node, hName, config) {
  return [
    {
      type: "mermaidCodeBlock",
      data: {
        hName,
        hProperties: {
          config: JSON.stringify(config),
          chart: node.value,
        },
      },
    },
  ];
}

const beforeRemarkPlugins = [
  [
    remarkCodeHike,
    {
      theme: "github-from-css",
      lineNumbers: true,
      showCopyButton: true,
      skipLanguages: ["", "mermaid"],
    },
  ],
];

const beforeRemarkPluginsForBlogs = [
  [
    remarkCodeHike,
    {
      theme: "github-from-css",
      lineNumbers: true,
      showCopyButton: false,
      skipLanguages: ["", "mermaid"],
    },
  ],
];

const beforeRemarkPluginsForPages = [
  [
    remarkCodeHike,
    {
      theme: "github-from-css",
      skipLanguages: ["", "mermaid"],
    },
  ],
];

/**
 * @returns {Promise<import('@docusaurus/types').Config>}
 */
async function createConfig() {
  const remarkPlugins = [
    (await import("remark-gfm")).default,
    [
      mermaid,
      {
        theme: { light: "default", dark: "dark" },
      },
    ],
  ];
  return {
    title: "Konfig",
    tagline: "Generate SDKs for your REST API",
    url: "https://konfigthis.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    themes: [
      "docusaurus-json-schema-plugin",
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          indexBlog: false,
          docsRouteBasePath: "/",
        },
      ],
      "mdx-v2",
    ],
    plugins: [
      async function docusaurus(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: "facebook", // Usually your GitHub org/user name.
    // projectName: "docusaurus", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },

    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            beforeDefaultRemarkPlugins: beforeRemarkPlugins,
            remarkPlugins: remarkPlugins,
            routeBasePath: "/docs",
            sidebarPath: require.resolve("./sidebars.js"),
          },
          pages: {
            beforeDefaultRemarkPlugins: beforeRemarkPluginsForPages,
            remarkPlugins: remarkPlugins,
          },
          theme: {
            customCss: [
              require.resolve("@code-hike/mdx/styles.css"),
              require.resolve("./src/css/custom.css"),
            ],
          },
          blog: {
            beforeDefaultRemarkPlugins: beforeRemarkPluginsForBlogs,
            blogSidebarCount: "ALL",
            remarkPlugins: remarkPlugins,
            showReadingTime: true,
            blogDescription: "Generate SDKs for your REST API",
            truncateMarker: /{\/\* TRUNCATE \*\/}/,
          },
          gtag: {
            trackingID: "G-L2Q9WBQN2D",
            anonymizeIP: true,
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: "light",
          disableSwitch: true,
        },
        navbar: {
          logo: {
            alt: "Konfig Logo",
            src: "img/logo-light.png",
            href: "https://konfigthis.com",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Documentation",
            },
            {
              to: "/interactive-tutorial",
              label: "Interactive Tutorial",
              position: "left",
            },
            { to: "/schedule-demo", label: "Schedule Demo", position: "right" },
            { to: "/blog", label: "Blog", position: "right" },
            { to: "/about", label: "About", position: "right" },
          ],
        },
        api: {
          authPersistance: "localStorage",
          serverVariablesPersistance: "localStorage",
        },
        footer: {
          style: "light",
          links: [
            {
              title: "Links",
              items: [
                {
                  label: "Website",
                  to: "https://konfigthis.com",
                },
                {
                  label: "LinkedIn",
                  to: "https://www.linkedin.com/company/konfig",
                },
                {
                  label: "Blog",
                  to: "/blog",
                },
              ],
            },
            // {
            //   title: "Docs",
            //   items: [
            //     {
            //       label: "Introduction",
            //       to: "/docs/intro",
            //     },
            //   ],
            // },
            // {
            //   title: "Community",
            //   items: [
            //     {
            //       label: "Stack Overflow",
            //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //     },
            //     {
            //       label: "Discord",
            //       href: "https://discordapp.com/invite/docusaurus",
            //     },
            //     {
            //       label: "Twitter",
            //       href: "https://twitter.com/docusaurus",
            //     },
            //   ],
            // },
            // {
            //   title: "More",
            //   items: [
            //     {
            //       label: "Blog",
            //       to: "/blog",
            //     },
            //     {
            //       label: "GitHub",
            //       href: "https://github.com/facebook/docusaurus",
            //     },
            //   ],
            // },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Konfig, Inc.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["ruby", "csharp", "php"],
        },
      }),
  };
}

module.exports = createConfig;
