import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import {defineConfig} from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import umami from "@yeskunall/astro-umami";

export default defineConfig({
  site: "https://blog.biblys.org/",
  base: "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {},
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
    umami({id :'984d1210-a376-4349-aa2f-83fab030a249' }),
    sitemap({
      filter: (page) => page !== 'https://blog.biblys.org/preview',
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://blog.biblys.org/') {
          item.changefreq = 'weekly';
          item.lastmod = new Date().toISOString();
          item.priority = 1;
        }
        return item;
      },
    }),

  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
