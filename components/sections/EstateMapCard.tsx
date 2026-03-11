import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EstateMapCard() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="soft-card surface-panel radius-panel px-6 py-7 sm:px-8 sm:py-8">
            <SectionHeading
              eyebrow="Location"
              title="The estate sits within Broadacres, Johannesburg."
              description="The Lombardy Lifestyle Estate combines managed residential living with access to the wider Broadacres and Fourways area."
            />
            <div className="body-copy-sm mt-8 space-y-4 sm:text-base">
              <p>
                <strong className="text-[var(--color-ink)]">Location:</strong>{" "}
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--color-ink)]"
                >
                  {siteConfig.locationLabel}
                </a>
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Management:</strong>{" "}
                Operational administration is handled by {siteConfig.managementCompany}.
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Contact:</strong>{" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="transition hover:text-[var(--color-ink)]">
                  {siteConfig.contactEmail}
                </a>{" "}
                and{" "}
                <a href={siteConfig.contactPhoneHref} className="transition hover:text-[var(--color-ink)]">
                  {siteConfig.contactPhoneDisplay}
                </a>
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.googleMapsUrl}>Open in Google Maps</ButtonLink>
              <ButtonLink href="/management" variant="secondary">
                Management overview
              </ButtonLink>
            </div>
          </div>

          <div className="soft-card surface-card radius-card overflow-hidden p-3">
            <iframe
              title="Estate location"
              src={siteConfig.googleMapsEmbedUrl}
              className="radius-inset min-h-[28rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
