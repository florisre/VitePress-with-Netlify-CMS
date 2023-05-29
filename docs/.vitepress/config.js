const fs = require("fs");
const path = require("path");

function getProtokollFiles() {
  const protokollDir = path.join(__dirname, "docs", "protokolle");
  const files = fs.readdirSync(protokollDir);
  return files.map((file) => path.join("/protokolle", file));
}

module.exports = {
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
        children: getProtokollFiles(),
      },
    ],
  },
};

