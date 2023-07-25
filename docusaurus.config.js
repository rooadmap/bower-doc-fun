// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const title = "바우어";
const tagline = "바우어";
const logoAlt = "바우어 로고";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline,
  favicon: "img/eyes/favicon.ico",

  // Set the production url of your site here
  url: "https://bower.fun",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cybaj", // Usually your GitHub org/user name.
  projectName: "bower-dot-fun", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "kr",
    locales: ["kr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/rooadmap_logo.png",
      navbar: {
        title,
        logo: {
          alt: logoAlt,
          src: "img/eyes/favicon-96x96.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "services",
            position: "left",
            label: "서비스",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "dropdown",
            label: "루아드맵",
            position: "right",
            items: [
              {
                type: "doc",
                label: "더 많은 지도",
                docId: "rooadmap/more-maps",
              },
              {
                type: "doc",
                label: "출시 계획",
                docId: "rooadmap/schedule",
              },
              {
                label: "루아드맵",
                href: "https://rooadmap.com",
              },
            ],
          },
          {
            type: "dropdown",
            label: "To Bower",
            position: "right",
            items: [
              {
                type: "doc",
                label: "루아드맵에 대한 의견",
                docId: "feedback/about-rooadmap",
              },
              {
                type: "doc",
                label: "모든 의견",
                docId: "feedback/just-about-bower",
              },
              {
                type: "doc",
                label: "연락처",
                docId: "feedback/contact",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/cybaj/rooad-univ-template",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bower, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
