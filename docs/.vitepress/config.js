import { resolve } from 'path';
import { fs } from 'fs';
import glob from 'glob';

const protokollFiles = glob
  .sync('protokolle/**/*.md', { cwd: __dirname })
  .map((f) => f.replace('.md', ''));

export default {
  lang: 'de-DE',
  title: 'StuRa',
  description: 'Replace with your description',
  head: [
    [
      'script',
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      },
    ],
  ],
  themeConfig: {
    logo: '/LogoSchwarz.png',
    notFound: [
      'There\'s nothing here. If you\'re looking for DecapCMS, manually enter `/admin` to the root site path to navigate directly to it.',
    ],
    navbar: [
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
    sidebar: {
      '/protokolle/': [
        {
          text: 'Protokolle',
          children: protokollFiles,
        },
      ],
    },
  },
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-attrs'));
  },
  alias: {
    '@theme/HomeFooter.vue': resolve(__dirname, '../components/MyHomeFooter.vue'),
  },
};

