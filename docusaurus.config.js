const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HALODEVS",
  tagline: "HACKATHON, COMPETITIONS, IDEATHONS, AND EVENTS",
  // description: "HALODEVS ( Club Of Data Engineers ESI )",
  url: "http://ilearning.halodevs.tech",
  staticDirectories: ["static"],
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "halodevelopers", // Usually your GitHub org/user name.
  projectName: "halodevs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          // Please change this to your repo.
          editUrl: "https://github.com/halodevelopers/halodevs/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/halodevelopers/halodevs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "docs-projects",
        path: "docs-projects",
        routeBasePath: "docs-projects",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/halodevelopers/halodevs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "docs-sharing-night",
        path: "docs-sharing-night",
        routeBasePath: "docs-sharing-night",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/halodevelopers/halodevs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
      },
    ],

    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog-events",
        path: "blog-events",
        editUrl: `https://github.com/halodevelopers/halodevs/tree/main`,
        routeBasePath: "blog-events",
        include: ["**/*.{md,mdx}"],
        showReadingTime: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          '<a target="_blank" rel="noopener noreferrer" href="https://opensource.fb.com/support-ukraine" style="padding-right: 50px;">Support Ukraine 🇺🇦</a>Help Provide Humanitarian Aid to Ukraine',
        backgroundColor: '#0B0B45',
        textColor: '#FFFFFF',
        isCloseable: false,

      },
      navbar: {
        title: "HALODEVS",
        logo: {
          alt: "halodevs logo",
          src: "img/halodevs.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Training",
          },
          {
            to: "/docs-projects/intro",
            docId: "intro",
            position: "left",
            label: "Projects",
          },
          {
            to: "/blog/intro",
            label: "Competitions",
            position: "left",
          },
          {
            to: "/docs-sharing-night/intro",
            label: "Sharing Nights",
            position: "left",
            activeBaseRegex: `/docs-sharing-night/`,
          },
          {
            to: "/blog-events/intro",
            label: "Events",
            position: "left",
          },
          {
            href: "http://ilearning.halodevs.tech/",
            label: "HALODEVS",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Toturials",
            items: [
              {
                label: "Training",
                to: "/docs/intro",
              },
              {
                label: "Projects",
                to: "/docs-projects/intro",
              },
            ],
          },
          {
            title: "Events",
            items: [
              {
                label: "Competitions",
                to: "/blog/intro",
              },
              {
                label: "Sharing Nights",
                to: "/docs-sharing-night/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/halodevelopers",
              },
              {
                label: "Kaggle",
                href: "https://www.kaggle.com/halodevs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "halodevs.tech",
                href: "http://halodevs.tech/",
              },
              {
                label: "ilearning.halodevs.tech",
                href: "http://ilearning.halodevs.tech/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://kuyesu.github.io.me" target="_blank">Holodevs</a>. Halodevs The Devs Brain Team`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "YOUR_APP_ID",

      //   // Public API key: it is safe to commit it
      //   apiKey: "YOUR_SEARCH_API_KEY",

      //   indexName: "YOUR_INDEX_NAME",

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: "external\\.com|domain\\.com",

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   //... other Algolia params
      // },
    }),
};

module.exports = config;
