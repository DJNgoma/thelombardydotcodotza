import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

interface MetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
}: MetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: siteConfig.shortName,
      locale: "en_ZA",
      images: [
        {
          url: image,
          width: 1600,
          height: 900,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
