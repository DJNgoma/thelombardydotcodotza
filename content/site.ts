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
  locationLabel: "The Lombardy Lifestyle Estate, Lombardy Road, Broadacres, Johannesburg, South Africa",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=The+Lombardy+Lifestyle+Estate,+Lombardy+Road,+Broadacres,+Johannesburg,+South+Africa&output=embed",
  googleMapsUrl: "https://maps.app.goo.gl/qRVSgYrRRwUoJNuX9",
  managementCompany: "Landsdowne Property Group",
  managementSummary:
    "Landsdowne Property Group oversees operational management, maintenance coordination, resident support, and financial administration for the estate.",
  ownerPortalUrl: "https://app.weconnectu.co.za",
  ownerSupportEmail: "connect@landsdowne.co.za",
  trusteeContactEmail: "trustees@thelombardy.co.za",
  communityChatUrl:
    "https://chat.whatsapp.com/Jno37QOdorDELEFCzufmrc?mode=hqctcli",
  managementContacts: [
    {
      title: "Landsdowne support",
      summary:
        "Landsdowne Property Group handles day-to-day owner support, portal access help, and operational queries.",
      actionLabel: "Email Landsdowne",
      actionHref: "mailto:connect@landsdowne.co.za",
      secondaryLabel: "Open owner portal",
      secondaryHref: "https://app.weconnectu.co.za",
    },
    {
      title: "Owner portal support",
      summary:
        "Owners can sign in through WeConnectU for account records, levy information, and estate-issued documents.",
      actionLabel: "Open owner portal",
      actionHref: "https://app.weconnectu.co.za",
      secondaryLabel: "Email Landsdowne",
      secondaryHref: "mailto:connect@landsdowne.co.za",
    },
    {
      title: "Trustee escalation",
      summary:
        "If Landsdowne is not responsive, owners may escalate support or governance concerns to the trustees.",
      actionLabel: "Escalate to trustees",
      actionHref: "mailto:trustees@thelombardy.co.za",
    },
  ],
};
