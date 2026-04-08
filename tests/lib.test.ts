import { describe, expect, it } from "vitest";

import { formatDisplayDate } from "../lib/date";
import { formatTrusteePublicName } from "../lib/formatters";
import { absoluteUrl, buildPageMetadata } from "../lib/metadata";
import { primaryNavigation, utilityNavigation } from "../lib/navigation";

describe("formatDisplayDate", () => {
  it("renders dates in the estate locale format", () => {
    expect(formatDisplayDate("2026-04-08")).toBe("08 April 2026");
  });
});

describe("formatTrusteePublicName", () => {
  it("reduces full names to first name and surname initial", () => {
    expect(formatTrusteePublicName("Jane Mary Doe")).toBe("Jane D");
  });

  it("returns single names unchanged", () => {
    expect(formatTrusteePublicName("Cher")).toBe("Cher");
  });
});

describe("metadata helpers", () => {
  it("builds absolute URLs from the site config", () => {
    expect(absoluteUrl("/governance")).toBe("https://thelombardy.co.za/governance");
  });

  it("builds canonical and social metadata with the default image", () => {
    const metadata = buildPageMetadata({
      title: "Governance",
      description: "Estate governance information.",
      path: "/governance",
    });

    expect(metadata.alternates?.canonical).toBe(
      "https://thelombardy.co.za/governance",
    );
    expect(metadata.openGraph).toEqual(
      expect.objectContaining({
        title: "Governance",
        description: "Estate governance information.",
        url: "https://thelombardy.co.za/governance",
        siteName: "The Lombardy",
      }),
    );
    expect(metadata.twitter).toEqual(
      expect.objectContaining({
        card: "summary_large_image",
        images: ["/images/estate/estate-aerial-clean.jpg"],
      }),
    );
  });

  it("allows per-page images to override the site default", () => {
    const metadata = buildPageMetadata({
      title: "Management",
      description: "Estate management contacts.",
      path: "/management",
      image: "/images/custom-management.jpg",
    });

    const openGraphImages = Array.isArray(metadata.openGraph?.images)
      ? metadata.openGraph.images
      : metadata.openGraph?.images
        ? [metadata.openGraph.images]
        : [];
    const openGraphImage = openGraphImages[0];

    expect(openGraphImage).toEqual(
      expect.objectContaining({
        url: "/images/custom-management.jpg",
        alt: "Management",
      }),
    );
  });
});

describe("navigation", () => {
  it("keeps the primary navigation stable", () => {
    expect(primaryNavigation.map((item) => item.href)).toEqual([
      "/",
      "/about",
      "/living",
      "/news",
      "/governance",
      "/management",
    ]);
  });

  it("uses configured utility routes for owner tools and community chat", () => {
    expect(utilityNavigation).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: "Owner Portal", href: "/portal" }),
        expect.objectContaining({
          label: "Estate WhatsApp",
          href: "/community-chat",
        }),
      ]),
    );
  });
});
