import Image from "next/image";
import { amenities } from "@/content/amenities";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LifestyleAmenities() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-6 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <div className="soft-card surface-stone radius-feature px-6 py-7 sm:px-10 sm:py-10">
            <SectionHeading
              eyebrow="Living at The Lombardy"
              title="Shared amenities designed for everyday estate living."
              description="Amenities are part of the estate’s daily residential offer, supported by practical access procedures, managed bookings, and standards that keep shared spaces orderly."
              maxWidth="wide"
            />

            <div className="mt-8 band-stack">
              <div className="soft-card surface-panel radius-panel px-5 py-5 sm:px-6">
                <p className="meta-label text-[var(--color-sage-deep)]">
                  Pool and clubhouse
                </p>
                <p className="body-copy-sm mt-4 sm:text-base">
                  The pool and clubhouse remain part of the estate’s everyday residential offering, supported by controlled access and managed booking processes.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="inset-surface radius-inset px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    Controlled access
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    Shared spaces remain resident-focused and access is managed through estate controls.
                  </p>
                </div>
                <div className="inset-surface radius-inset px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    Managed bookings
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    Clubhouse use is supported through practical booking steps and resident accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <article className="soft-card surface-card radius-feature overflow-hidden p-3">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)]">
              <div className="radius-panel relative min-h-[20rem] overflow-hidden sm:min-h-[23rem] xl:min-h-[27rem]">
                <Image
                  src="/images/estate/pool-from-newsletter.png"
                  alt="Estate pool image sourced from the March 2026 newsletter."
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,27,23,0.24)] via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                  <div className="soft-card surface-dark radius-panel px-5 py-5 sm:px-6">
                    <p className="meta-label text-on-dark-label">
                      Everyday resident amenity core
                    </p>
                    <p className="mt-3 text-sm leading-7 text-on-dark-muted sm:text-base">
                      The clubhouse, pool, braai area, and gym work best as a
                      single shared amenity mix rather than as oversized
                      standalone features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {amenities.map((amenity) => (
                  <article
                    key={amenity.title}
                    className="surface-panel radius-card flex flex-col justify-between border border-[var(--color-line)] p-4 xl:p-5"
                  >
                    <div>
                      <p className="meta-label text-[var(--color-sage-deep)]">
                        {amenity.title}
                      </p>
                      <p className="body-copy-sm mt-3">{amenity.summary}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-ink)]">
                      {amenity.highlight}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-3 xl:col-span-2">
            <article className="inset-surface radius-card px-5 py-5">
              <p className="meta-label text-[var(--color-sage-deep)]">
                Resident-first use
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                Shared facilities remain practical daily amenities rather than
                separate destination zones competing for attention on desktop.
              </p>
            </article>

            <article className="inset-surface radius-card px-5 py-5">
              <p className="meta-label text-[var(--color-sage-deep)]">
                Booking rhythm
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                Functions, clubhouse use, and braai activity still sit inside a
                managed booking flow that protects neighbouring residents.
              </p>
            </article>

            <article className="inset-surface radius-card px-5 py-5">
              <p className="meta-label text-[var(--color-sage-deep)]">
                Routine upkeep
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                Pool maintenance, cleaning, and gym servicing remain part of the
                estate&apos;s normal operating standard.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
