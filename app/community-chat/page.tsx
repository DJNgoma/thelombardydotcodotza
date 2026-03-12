import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { PageLead } from "@/components/sections/PageLead";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Community Chat",
  description:
    "Guidance before joining The Lombardy community WhatsApp chat.",
  path: "/community-chat",
});

const chatGuidelines = [
  {
    title: "Resident conversation",
    body: "The WhatsApp group is intended for neighbourly estate conversation, quick community coordination, and informal updates shared between residents.",
  },
  {
    title: "Not official support",
    body: "Finance-related questions, owner access requests, and formal complaints should still go to Landsdowne first, while estate management issues should go to the Estate Manager line rather than the chat.",
  },
  {
    title: "Use respectfully",
    body: "Keep discussion relevant to estate life, avoid sharing access-sensitive information, and use the group in a way that respects other residents’ time and privacy.",
  },
];

export default function CommunityChatPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Community Chat", path: "/community-chat" },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Community Chat" }]}
      />
      <PageLead
        eyebrow="Community Chat"
        title="Read the context first before opening the estate WhatsApp group."
        description="The Lombardy community chat is useful for informal resident conversation, but it is not the estate’s official support or governance channel. Use Landsdowne and the Estate Manager line for support matters before continuing to WhatsApp."
        actions={[
          { href: siteConfig.communityChatUrl, label: "Open WhatsApp group" },
          {
            href: `mailto:${siteConfig.ownerSupportEmail}`,
            label: "Email Landsdowne instead",
            variant: "secondary",
          },
        ]}
        highlights={[
          "Resident conversation",
          "Not official support",
          "Respect privacy",
        ]}
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
          <SoftCard tone="dark" padding="lg">
            <p className="eyebrow text-on-dark-label">Before you join</p>
            <h2 className="display-title display-section mt-4 font-semibold text-on-dark">
              WhatsApp is for informal community conversation, not formal estate administration.
            </h2>
            <p className="body-copy-sm mt-5 text-on-dark-muted sm:text-base">
              If you need help with owner access, finance-related queries, or
              formal support, contact Landsdowne first. For estate management
              issues, use the Estate Manager WhatsApp line before using the
              resident group.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.communityChatUrl}>
                Continue to WhatsApp
              </ButtonLink>
              <ButtonLink href="/management" variant="secondary">
                Support overview
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="band-support-card radius-inset px-4 py-4">
                <p className="meta-label text-on-dark-label">Primary support</p>
                <a
                  href={`mailto:${siteConfig.ownerSupportEmail}`}
                  className="mt-2 block text-sm leading-6 text-on-dark transition hover:text-white"
                >
                  {siteConfig.ownerSupportEmail}
                </a>
              </div>
              <div className="band-support-card radius-inset px-4 py-4">
                <p className="meta-label text-on-dark-label">Estate Manager</p>
                <a
                  href={siteConfig.estateManagerWhatsappUrl}
                  className="mt-2 block text-sm leading-6 text-on-dark transition hover:text-white"
                >
                  {siteConfig.estateManagerWhatsapp}
                </a>
              </div>
            </div>
          </SoftCard>

          <div className="grid gap-5 md:grid-cols-3">
            {chatGuidelines.map((item, index) => (
              <SoftCard key={item.title} tone={index === 0 ? "stone" : "card"}>
                <h2 className="text-2xl font-medium text-[var(--color-ink)]">
                  {item.title}
                </h2>
                <p className="body-copy-sm mt-4 sm:text-base">
                  {item.body}
                </p>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
