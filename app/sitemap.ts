import type { MetadataRoute } from "next";
import { getAllNotices } from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notices = await getAllNotices();

  const routes = [
    "/",
    "/about",
    "/living",
    "/news",
    "/governance",
    "/management",
    "/estate-rules",
    "/portal",
    "/community-chat",
    "/notices-login",
    "/levy-resources",
    "/forms",
  ];

  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: (route === "/" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: route === "/" ? 1 : 0.7,
    })),
    ...notices.map((notice) => ({
      url: absoluteUrl(`/news/${notice.slug}`),
      lastModified: new Date(notice.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
