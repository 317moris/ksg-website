import { getList } from "@/lib/api";
import { Feed, FeedOptions, Item } from "feed";
import { NextResponse } from "next/server";

const rootUrl = "https://ksg-h.vercel.app"

export async function GET() {
   const posts = await getList();

   const feed = new Feed({
      id: "root",
      title: "埼玉県立越谷総合技術高等学校",
      link: "https://ksg-h.vercel.app",
      copyright: "All rights reserved 2025, KSG, 317moris",
   });

   const feeds: Item[] = posts.contents.map(post => ({
      id: post.id,
      title: post.title,
      description: post.subtitle,
      link: `${rootUrl}/news/${post.id}`,
      date: new Date(post.publishedAt ?? post.createdAt),
   }))

   for (const _feed of feeds) {
      feed.addItem(_feed)
   }

   return new NextResponse(feed.rss2(), {
      status: 200,
      headers: {
         "Content-Type": "application/xml"
      }
   })
}