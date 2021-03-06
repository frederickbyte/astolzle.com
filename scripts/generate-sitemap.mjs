import { writeFileSync } from 'fs';
import { globby } from 'globby';

async function generate() {
  const pages = await globby([
    'pages/*.js',
    'data/blog/**/*.mdx',
    'data/blog/**/*.md',
    'public/tags/**/*.xml',
    '!pages/_*.js',
    '!pages/api',
  ])

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
      .map((page) => {
        const path = page
          .replace('pages/', '/')
          .replace('data/blog', '/blog')
          .replace('public/', '/')
          .replace('.js', '')
          .replace('.jsx', '')
          .replace('.mdx', '')
          .replace('.md', '')
          .replace('/feed.xml', '')
        const route = path === '/index' ? '' : path
        if (page === `pages/404.jsx` || page === `pages/blog/[...slug].jsx`) {
          return;
        }
        return `
                      <url>
                          <loc>https://www.astolzle.com${route}</loc>
                      </url>
                  `;
      })
      .join('')}
      </urlset>
  `;

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', sitemap);
}

generate();
