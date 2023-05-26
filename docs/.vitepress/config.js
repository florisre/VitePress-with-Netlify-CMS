import { glob } from "glob";

let protokollFiles = glob
  .sync("docs/protokolle/**/*.md")
  .map((f) => f.replace("docs", "").replace("index.md", ""));

import { description } from "../../package.json";

const __dirname = getDirname(import.meta.url);

module.exports = {
	title: 'StuRa',
	description: 'Willkommen auf der offiziellen Seite Deiner Studierendenvertretung ',
	themeConfig: {
		repo: 'florisre/VitePress-with-Netlify-CMS',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		nav: [
			{
            text: "Sitzungen",
                // notice the trailing / (for the automatic next and prev links based on the sidebar)
                link: "/sitzungen/",
            },
            {
                text: "Protokolle",
                link: "/protokolle/",
            },
            {
                text: "Instagram",
                link: "https://www.instagram.com/sturaunifreiburg/",
            }
		],
	}
}
