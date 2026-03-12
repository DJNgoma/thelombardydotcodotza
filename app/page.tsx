import type { Metadata } from "next";
import { EstateMapCard } from "@/components/sections/EstateMapCard";
import { GovernanceSnapshot } from "@/components/sections/GovernanceSnapshot";
import { HeroEstate } from "@/components/sections/HeroEstate";
import { InstagramStrip } from "@/components/sections/InstagramStrip";
import { LifestyleAmenities } from "@/components/sections/LifestyleAmenities";
import { ManagementPanel } from "@/components/sections/ManagementPanel";
import { NearbyAmenities } from "@/components/sections/NearbyAmenities";
import { NoticeCardGrid } from "@/components/sections/NoticeCardGrid";
import { getFeaturedNotices, getLatestNotices } from "@/lib/content";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "The Lombardy Lifestyle Estate",
  description:
    "Notices, governance, management information, and shared amenity guidance for The Lombardy Lifestyle Estate.",
  path: "/",
});

export default async function HomePage() {
  const [featuredNotices, latestNotices] = await Promise.all([
    getFeaturedNotices(1),
    getLatestNotices(4),
  ]);
  const featuredNotice = featuredNotices[0];
  const homepageNotices = latestNotices
    .filter((notice) => notice.slug !== featuredNotice?.slug)
    .slice(0, 3);

  return (
    <>
      <HeroEstate featuredNotice={featuredNotice} />
      <NoticeCardGrid
        notices={homepageNotices}
        title="Recent notices and estate updates"
        description="Meeting notices, maintenance work, owner updates, and estate announcements are published here for owners and residents."
      />
      <LifestyleAmenities />
      <GovernanceSnapshot />
      <ManagementPanel />
      <NearbyAmenities compact />
      <InstagramStrip />
      <EstateMapCard />
    </>
  );
}
