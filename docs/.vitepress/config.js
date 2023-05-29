const fs = require('fs');
const path = require('path');

module.exports = {
  title: 'StuRa',
  description: 'Willkommen auf der offiziellen Seite Deiner Studierendenvertretung',
  themeConfig: {
    repo: 'florisre/VitePress-with-Netlify-CMS',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Sitzungen',
        link: '/sitzungen/',
      },
      {
        text: 'Protokolle',
        link: '/protokolle/',
      },
      {
        text: 'Instagram',
        link: 'https://www.instagram.com/sturaunifreiburg/',
      },
    ],
    sidebar: getProtokolleSidebar(),
  },
};

function getProtokolleSidebar() {
  const basePath = '../protokolle';
  const sidebar = [];

  const subdirectories = fs.readdirSync(basePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  subdirectories.forEach((subdirectory) => {
    const subdirectoryPath = path.join(basePath, subdirectory);
    const files = fs.readdirSync(subdirectoryPath)
      .filter((file) => file.endsWith('.md'))
      .map((file) => path.join('/protokolle', subdirectory, file));

    if (files.length > 0) {
      sidebar.push({
        text: subdirectory,
        children: files,
      });
    }
  });

  return sidebar;
}

