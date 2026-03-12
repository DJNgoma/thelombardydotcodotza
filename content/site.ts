import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "The Lombardy Lifestyle Estate",
  shortName: "The Lombardy",
  description:
    "The Lombardy Lifestyle Estate offers secure, modern residential living within a managed community environment in South Africa.",
  url: "https://thelombardy.co.za",
  ogImage: "/images/estate/estate-aerial-clean.jpg",
  intro:
    "The Lombardy Lifestyle Estate offers secure, modern residential living within a managed community environment.",
  ownerPortalPath: "/portal",
  communityChatPath: "/community-chat",
  locationLabel: "The Lombardy Lifestyle Estate, Lombardy Road, Broadacres, Johannesburg, South Africa",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=The+Lombardy+Lifestyle+Estate,+Lombardy+Road,+Broadacres,+Johannesburg,+South+Africa&output=embed",
  googleMapsUrl: "https://maps.app.goo.gl/qRVSgYrRRwUoJNuX9",
  managementCompany: "Landsdowne Property Group",
  managementSummary:
    "Landsdowne Property Group administers owner support, finance-related queries, and general estate management for the estate.",
  ownerPortalUrl: "https://app.weconnectu.co.za",
  ownerSupportEmail: "connect@landsdowne.co.za",
  estateManagerWhatsapp: "+27 68 646 2895",
  estateManagerWhatsappUrl: "https://wa.me/27686462895",
  trusteeContactEmail: "trustees@thelombardy.co.za",
  communityChatUrl:
    "https://chat.whatsapp.com/Jno37QOdorDELEFCzufmrc?mode=hqctcli",
  managementContacts: [
    {
      title: "Landsdowne support",
      summary:
        "For finance queries, owner administration, and general estate matters, contact Landsdowne first.",
      actionLabel: "Email Landsdowne",
      actionHref: "mailto:connect@landsdowne.co.za",
    },
    {
      title: "Estate Manager WhatsApp",
      summary:
        "Estate management issues can be sent directly to the Estate Manager on WhatsApp for operational follow-up.",
      actionLabel: "WhatsApp the Estate Manager",
      actionHref: "https://wa.me/27686462895",
    },
    {
      title: "Owner portal",
      summary:
        "Owners can sign in through WeConnectU for account records, circulars, and estate-issued documents.",
      actionLabel: "Open owner portal",
      actionHref: "/portal",
    },
    {
      title: "Trustee escalation",
      summary:
        "If Landsdowne is not responsive, owners may escalate governance or support concerns to the trustees.",
      actionLabel: "Escalate to trustees",
      actionHref: "mailto:trustees@thelombardy.co.za",
    },
  ],
};
