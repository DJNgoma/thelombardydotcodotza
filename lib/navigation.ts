import type { NavItem } from "@/lib/types";
import { siteConfig } from "@/content/site";

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Living", href: "/living" },
  { label: "Notices", href: "/news" },
  { label: "Governance", href: "/governance" },
  { label: "Management", href: "/management" },
];

export const utilityNavigation: NavItem[] = [
  { label: "Owner Portal", href: siteConfig.ownerPortalUrl, external: true },
  { label: "Estate Rules", href: "/estate-rules" },
  { label: "Levy Information", href: "/levy-resources" },
  { label: "Forms", href: "/forms" },
  {
    label: "The Lombardy Community Chat",
    href: siteConfig.communityChatUrl,
    external: true,
  },
];
