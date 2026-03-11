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
    getLatestNotices(3),
  ]);

  return (
    <>
      <HeroEstate featuredNotice={featuredNotices[0]} />
      <NoticeCardGrid notices={latestNotices} variant="featured" tone="dark" />
      <LifestyleAmenities />
      <GovernanceSnapshot />
      <ManagementPanel />
      <NearbyAmenities compact />
      <InstagramStrip />
      <EstateMapCard />
    </>
  );
}
