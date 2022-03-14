import { writeFileSync } from 'fs';
import RSS from 'rss';

async function generate() {
  const feed = new RSS({
    title: 'Andrew Stolzle',
    site_url: 'https://astolzle.com',
    feed_url: 'https://astolzle.com/feed.xml'
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
