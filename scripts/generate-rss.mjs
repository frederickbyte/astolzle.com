import { writeFileSync } from 'fs';
import RSS from 'rss';

async function generate() {
  const feed = new RSS({
    title: 'Andrew Stolzle',
    site_url: 'https://astolzle.com',
    feed_url: 'https://astolzle.com/feed.xml'
  });

  // allBlogs.map((post) => {
  //   feed.item({
  //     title: post.title,
  //     url: `https://astolzle.com/blog/${post.slug}`,
  //     date: post.publishedAt,
  //     description: post.summary
  //   });
  // });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
