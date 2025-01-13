import rss from '@astrojs/rss';
import config from '@/config/config.json';
import {getCollection} from 'astro:content';
import {sortByDate} from "../lib/utils/sortFunctions";

// noinspection JSUnusedGlobalSymbols
export async function GET(context: { site: any; }) {
  const posts = await getCollection('posts');
  const sortedPosts = sortByDate(posts);
  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>fr-fr</language>`,
  });
}
