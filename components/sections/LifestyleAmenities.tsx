import Image from "next/image";
import { amenities } from "@/content/amenities";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LifestyleAmenities() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-5 xl:grid-cols-[0.86fr_1.14fr]">
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
            <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="radius-panel relative min-h-[23rem] overflow-hidden lg:min-h-[31rem]">
                <Image
                  src="/images/estate/pool-from-newsletter.png"
                  alt="Estate pool image sourced from the March 2026 newsletter."
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,27,23,0.2)] via-transparent to-transparent" />
              </div>

              <div className="grid gap-3">
                {amenities.slice(0, 2).map((amenity) => (
                  <article
                    key={amenity.title}
                    className="surface-panel radius-card flex flex-col justify-between border border-[var(--color-line)] p-5"
                  >
                    <div>
                      <p className="meta-label text-[var(--color-sage-deep)]">
                        {amenity.title}
                      </p>
                      <p className="body-copy-sm mt-4">
                        {amenity.summary}
                      </p>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-[var(--color-ink)]">
                      {amenity.highlight}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article className="soft-card surface-dark radius-card overflow-hidden p-3">
            <div className="radius-panel overflow-hidden">
              <div className="relative min-h-[15rem] overflow-hidden">
                <Image
                  src="/images/estate/hero-exterior.webp"
                  alt="Residential courtyard and shared green at an apartment-style estate."
                  fill
                  sizes="(max-width: 1279px) 100vw, 28vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,24,20,0.62)] via-transparent to-transparent" />
              </div>
              <div className="px-4 py-4">
                <p className="meta-label text-on-dark-label">
                  Residential setting
                </p>
                <p className="mt-3 text-sm leading-7 text-on-dark-muted">
                  Residential greens and internal courtyards help shape a calmer shared environment around the estate’s amenity spaces.
                </p>
              </div>
            </div>
          </article>

          {amenities.slice(2).map((amenity) => (
            <article
              key={amenity.title}
              className="soft-card surface-card radius-card overflow-hidden p-3"
            >
              <div className="radius-panel overflow-hidden">
                {amenity.image ? (
                  <div className="relative min-h-[15rem] overflow-hidden">
                    <Image
                      src={amenity.image}
                      alt={amenity.alt ?? amenity.title}
                      fill
                      sizes="(max-width: 1279px) 100vw, 28vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="surface-panel border-t border-[var(--color-line)] px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    {amenity.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                    {amenity.summary}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[var(--color-ink)]">
                    {amenity.highlight}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
