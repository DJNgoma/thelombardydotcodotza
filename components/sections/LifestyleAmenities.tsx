import Image from "next/image";
import { amenities } from "@/content/amenities";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LifestyleAmenities() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Living at The Lombardy"
          title="Shared amenities that support everyday residential living."
          description="The estate’s amenities are designed for regular residential use and managed through clear standards, access controls, and booking processes."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="soft-card surface-card radius-card overflow-hidden p-3">
            <div className="flex h-full flex-col">
              <div className="radius-card relative min-h-[24rem] overflow-hidden bg-white">
                <Image
                  src="/images/estate/pool-from-newsletter.png"
                  alt="Estate pool image sourced from the March 2026 newsletter."
                  fill
                  className="object-cover"
                />
              </div>
              <div className="inset-surface radius-inset mt-3 p-5 sm:p-6">
                <p className="meta-label text-[var(--color-sage-deep)]">
                  Pool and clubhouse
                </p>
                <p className="body-copy-sm text-on-light-muted mt-3 sm:text-base">
                  The pool and clubhouse remain part of the estate’s everyday
                  residential offering, supported by controlled access and
                  managed booking processes.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {amenities.map((amenity) => (
              <article key={amenity.title} className="soft-card surface-card radius-card p-5 sm:p-7">
                <h3 className="text-3xl font-medium text-[var(--color-ink)]">
                  {amenity.title}
                </h3>
                <p className="body-copy-sm mt-4 sm:text-base">
                  {amenity.summary}
                </p>
                <p className="inset-surface radius-inset mt-6 px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                  {amenity.highlight}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
