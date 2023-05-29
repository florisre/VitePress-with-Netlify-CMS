const fs = require("fs");
const path = require("path");

function getProtokollFiles() {
  const protokollDir = path.join(__dirname, "..", "protokolle");
  if (fs.existsSync(protokollDir)) {
    const files = fs.readdirSync(protokollDir);
    return files.map((file) => {
      const filePath = path.join(protokollDir, file);
      const relativePath = path.relative(__dirname, filePath);
      return `/${relativePath}`;
    });
  }
  return [];
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

