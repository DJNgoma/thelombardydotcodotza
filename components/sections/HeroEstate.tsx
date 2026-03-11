import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import { formatDisplayDate } from "@/lib/date";
import type { NoticeMeta } from "@/lib/types";

interface SupportingVisual {
  title: string;
  summary: string;
  src: string;
  alt: string;
}

const supportingVisuals: SupportingVisual[] = [
  {
    title: "Residential frontage",
    summary:
      "Apartment buildings and landscaped edges shape the estate’s quieter internal streetscape.",
    src: "/images/estate/estate-courtyard-clean.jpg",
    alt: "Residential frontage at The Lombardy Lifestyle Estate.",
  },
  {
    title: "Pool and clubhouse",
    summary:
      "Shared leisure space remains part of the estate’s everyday residential offering.",
    src: "/images/estate/pool-from-newsletter.png",
    alt: "Pool and clubhouse area at The Lombardy Lifestyle Estate.",
  },
];

interface HeroEstateProps {
  featuredNotice?: NoticeMeta;
}

export function HeroEstate({ featuredNotice }: HeroEstateProps) {
  return (
    <section className="hero-space">
      <div className="page-shell">
        <div className="grid items-stretch gap-5 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="soft-card surface-stone noise-overlay radius-feature relative overflow-hidden px-6 py-7 sm:px-10 sm:py-10 xl:flex xl:min-h-[40rem] xl:flex-col xl:justify-between xl:px-10 xl:py-9 2xl:px-12 2xl:py-10">
            <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-br from-[rgba(169,190,170,0.16)] via-transparent to-transparent" />
            <div className="absolute -right-14 bottom-10 h-44 w-44 rounded-full bg-[rgba(118,136,116,0.08)] blur-3xl" />
            <div className="relative z-10">
              <Pill>Secure, managed, residential</Pill>
              <h1 className="display-title display-hero balanced-text text-on-light mt-5 max-w-[8.6ch] font-semibold sm:mt-6 xl:max-w-[8ch] xl:text-[3.6rem] xl:leading-[0.9] 2xl:text-[4.15rem]">
                Estate living shaped by calm, order, and belonging.
              </h1>
              <p className="body-copy-lg text-on-light-muted mt-5 max-w-[29rem] xl:text-[1rem]">
                The Lombardy Lifestyle Estate offers secure, modern residential
                living within a managed community environment.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row xl:mt-8">
                <ButtonLink href="/news">View latest notices</ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  Explore the estate
                </ButtonLink>
              </div>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3 xl:mt-10">
              <div className="inset-surface radius-inset px-4 py-4">
                <p className="meta-label text-[var(--color-sage-deep)]">
                  Shared amenities
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                  Clubhouse, pool, braai spaces, and gym.
                </p>
              </div>
              <div className="inset-surface radius-inset px-4 py-4">
                <p className="meta-label text-[var(--color-sage-deep)]">
                  Secure arrival
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                  Access control and managed visitor handling.
                </p>
              </div>
              <div className="inset-surface radius-inset px-4 py-4">
                <p className="meta-label text-[var(--color-sage-deep)]">
                  Resident standards
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                  Clear governance, notices, and estate rules.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.14fr_0.86fr] lg:grid-rows-[minmax(0,1fr)_auto] xl:min-h-[42rem]">
            <article className="soft-card surface-feature radius-feature overflow-hidden p-3 lg:row-span-2">
              <div className="radius-panel relative min-h-[25rem] overflow-hidden lg:min-h-[38rem] xl:min-h-[42rem]">
                <Image
                  src="/images/estate/estate-aerial-clean.jpg"
                  alt="Aerial view of The Lombardy Lifestyle Estate."
                  fill
                  priority
                  sizes="(max-width: 1279px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,27,23,0.16)] via-transparent to-transparent" />
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <div className="soft-card surface-dark radius-inset max-w-[23rem] px-4 py-4 sm:px-5">
                    <p className="meta-label text-on-dark-label">
                      Estate overview
                    </p>
                    <p className="mt-3 text-sm leading-7 text-on-dark-muted sm:text-base">
                      Aerial views show the entrance sequence, internal layout,
                      and shared spaces that shape day-to-day estate living.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-3">
              {supportingVisuals.map((visual) => (
                <article
                  key={visual.title}
                  className="soft-card surface-card radius-card overflow-hidden p-3"
                >
                  <div className="radius-inset overflow-hidden">
                    <div className="relative min-h-[11rem] overflow-hidden xl:min-h-[12.5rem]">
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 28vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="surface-panel border-t border-[var(--color-line)] px-4 py-4">
                      <p className="meta-label text-[var(--color-sage-deep)]">
                        {visual.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                        {visual.summary}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {featuredNotice ? (
              <article className="soft-card surface-dark radius-card px-6 py-6 sm:px-7">
                <div className="flex items-center justify-between gap-4">
                  <Pill tone="dark">Highlighted notice</Pill>
                  <span className="meta-label text-on-dark-label">
                    {formatDisplayDate(featuredNotice.publishedAt)}
                  </span>
                </div>
                <h2 className="mt-5 text-[1.7rem] leading-[1.04] font-medium text-on-dark xl:text-[1.92rem]">
                  {featuredNotice.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-on-dark-muted">
                  {featuredNotice.summary}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <ButtonLink
                    href={`/news/${featuredNotice.slug}`}
                    variant="secondary"
                    size="compact"
                  >
                    {featuredNotice.ctaLabel}
                  </ButtonLink>
                  <span className="meta-label text-on-dark-label">
                    {featuredNotice.audience.join(", ")}
                  </span>
                </div>
              </article>
            ) : (
              <article className="soft-card surface-stone radius-card px-6 py-6 sm:px-7">
                <p className="meta-label text-[var(--color-sage-deep)]">
                  Arrival and shared core
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--color-ink-soft)]">
                  The arrival sequence centres on controlled access, shared
                  amenities, and an orderly internal road network.
                </p>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
