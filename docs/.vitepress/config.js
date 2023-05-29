const { defineUserConfig } = require("@vuepress/cli");
const { path, glob } = require("@vuepress/utils");

let protokollFiles = glob
  .sync("docs/protokolle/**/*.md")
  .map((f) => f.replace("docs", "").replace("index.md", ""));

const config = defineUserConfig({
  lang: "en-US",
  title: "StuRa",
  description: "Willkommen auf der offiziellen Seite Deiner Studierendenvertretung",
  themeConfig: {
    repo: "florisre/VitePress-with-Netlify-CMS",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Sitzungen",
        link: "/sitzungen/",
      },
      {
        text: "Protokolle",
        link: "/protokolle/",
      },
      {
        text: "Instagram",
        link: "https://www.instagram.com/sturaunifreiburg/",
      },
    ],
    sidebar: [
      {
        text: "Protokolle",
        children: protokollFiles,
      },
    ],
  },
});

module.exports = config;

