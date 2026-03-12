export type NoticeCategory =
  | "Community"
  | "Governance"
  | "Maintenance"
  | "Finance"
  | "Security";

export type NoticeAudience =
  | "Residents"
  | "Owners"
  | "Trustees"
  | "Tenants"
  | "Prospective residents";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NoticeMeta {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  category: NoticeCategory;
  featured: boolean;
  audience: NoticeAudience[];
  ctaLabel: string;
}

export interface Trustee {
  name: string;
  role: string;
}

export interface Amenity {
  title: string;
  summary: string;
  highlight: string;
  image?: string;
  alt?: string;
}

export interface SocialPost {
  id: string;
  title: string;
  summary: string;
  image: string;
}

export type NearbyAmenityCategory =
  | "Shopping"
  | "Education"
  | "Healthcare"
  | "Leisure"
  | "Travel";

export interface NearbyAmenity {
  category: NearbyAmenityCategory;
  name: string;
  summary: string;
  href: string;
}

export interface ContactCard {
  title: string;
  summary: string;
  actionLabel?: string;
  actionHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  intro: string;
  ownerPortalPath: string;
  communityChatPath: string;
  locationLabel: string;
  googleMapsEmbedUrl: string;
  googleMapsUrl: string;
  managementCompany: string;
  managementSummary: string;
  ownerPortalUrl: string;
  ownerSupportEmail: string;
  estateManagerWhatsapp: string;
  estateManagerWhatsappUrl: string;
  trusteeContactEmail: string;
  communityChatUrl: string;
  managementContacts: ContactCard[];
}
