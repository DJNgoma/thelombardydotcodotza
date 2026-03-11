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
  contactEmail: "living@lombardyluxury.co.za",
  contactPhoneDisplay: "+27 (0) 74 280 0000",
  contactPhoneHref: "tel:+27742800000",
  instagramUrl: "https://www.instagram.com/theluxurylombardy/",
  ownerPortalUrl: "https://app.weconnectu.co.za",
  ownerSupportEmail: "connect@landsdowne.co.za",
  trusteeContactEmail: "trustees@thelombardy.co.za",
  communityChatUrl:
    "https://chat.whatsapp.com/Jno37QOdorDELEFCzufmrc?mode=hqctcli",
  managementContacts: [
    {
      title: "Estate enquiries",
      summary:
        "General estate enquiries may be directed to the estate phone number and email listed here.",
      actionLabel: "Email enquiries",
      actionHref: "mailto:living@lombardyluxury.co.za",
      secondaryLabel: "Call enquiries",
      secondaryHref: "tel:+27742800000",
    },
    {
      title: "Owner portal support",
      summary:
        "Owners can sign in through WeConnectU. If access assistance is needed, Landsdowne and the trustees can assist by email.",
      actionLabel: "Open owner portal",
      actionHref: "https://app.weconnectu.co.za",
      secondaryLabel: "Email support",
      secondaryHref: "mailto:connect@landsdowne.co.za",
    },
    {
      title: "Trustee contact",
      summary:
        "Trustee correspondence can be directed to the estate trustee mailbox where owner support or governance follow-up is required.",
      actionLabel: "Email trustees",
      actionHref: "mailto:trustees@thelombardy.co.za",
    },
  ],
};
