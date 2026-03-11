import { siteConfig } from "@/content/site";
import type { NoticeMeta } from "@/lib/types";
import { absoluteUrl } from "@/lib/metadata";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [siteConfig.instagramUrl],
    description: siteConfig.description,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(notice: NoticeMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: notice.title,
    description: notice.summary,
    datePublished: notice.publishedAt,
    dateModified: notice.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: absoluteUrl(`/news/${notice.slug}`),
  };
}
