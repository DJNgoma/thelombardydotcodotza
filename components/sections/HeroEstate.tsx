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

const heroFacts = [
  {
    title: "Shared amenities",
    summary: "Clubhouse, pool, braai spaces, and gym.",
  },
  {
    title: "Secure arrival",
    summary: "Access control and managed visitor handling.",
  },
];

interface HeroEstateProps {
  featuredNotice?: NoticeMeta;
}

export function HeroEstate({ featuredNotice }: HeroEstateProps) {
  return (
    <section className="hero-space">
      <div className="page-shell">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(30rem,0.92fr)] xl:items-start">
          <article className="soft-card surface-feature radius-feature overflow-hidden p-3 xl:self-start">
            <div className="radius-panel relative min-h-[23rem] overflow-hidden sm:min-h-[30rem] xl:min-h-[35rem] 2xl:min-h-[38rem]">
              <Image
                src="/images/estate/estate-aerial-clean.jpg"
                alt="Aerial view of The Lombardy Lifestyle Estate."
                fill
                priority
                sizes="(max-width: 1279px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,27,23,0.3)] via-[rgba(20,27,23,0.04)] to-transparent" />
              <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                <div className="rounded-full border border-white/16 bg-[rgba(18,24,20,0.48)] px-3 py-2 text-[0.68rem] font-semibold tracking-[var(--tracking-ui)] uppercase text-on-dark backdrop-blur-md sm:px-4">
                  Broadacres, Johannesburg
                </div>
              </div>
              <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5 xl:max-w-[27rem]">
                <div className="soft-card surface-dark radius-panel px-5 py-5 sm:px-6">
                  <p className="meta-label text-on-dark-label">
                    Estate overview
                  </p>
                  <p className="mt-3 text-base leading-7 text-on-dark-muted">
                    Aerial views show the entrance sequence, internal layout,
                    and shared spaces that shape day-to-day estate living.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <div className="soft-card surface-stone noise-overlay radius-feature relative overflow-hidden px-6 py-7 sm:px-10 sm:py-10 xl:px-9 xl:py-8 2xl:px-10 2xl:py-9">
            <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-br from-[rgba(169,190,170,0.16)] via-transparent to-transparent" />
            <div className="absolute -right-14 bottom-10 h-44 w-44 rounded-full bg-[rgba(118,136,116,0.08)] blur-3xl" />
            <div className="relative z-10">
              <Pill>Secure, managed, residential</Pill>
              <h1 className="display-title balanced-text mt-5 max-w-[11ch] text-[clamp(2.9rem,5vw,4.9rem)] leading-[0.95] font-semibold text-on-light sm:mt-6 xl:max-w-[11.25ch]">
                Estate living shaped by calm, order, and belonging.
              </h1>
              <p className="body-copy-lg text-on-light-muted mt-5 max-w-[32rem] xl:text-[1rem]">
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

            <dl className="relative z-10 mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] xl:mt-10">
              {heroFacts.map((fact) => (
                <div
                  key={fact.title}
                  className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4"
                >
                  <dt className="meta-label text-[var(--color-sage-deep)]">
                    {fact.title}
                  </dt>
                  <dd className="text-sm leading-7 text-[var(--color-ink-soft)]">
                    {fact.summary}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-5 xl:col-span-2 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.78fr)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {supportingVisuals.map((visual) => (
                <article
                  key={visual.title}
                  className="soft-card surface-panel radius-card overflow-hidden p-3"
                >
                  <div className="radius-inset flex h-full gap-3 overflow-hidden">
                    <div className="relative min-h-[6.5rem] w-[6.75rem] shrink-0 overflow-hidden sm:w-[7.5rem]">
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        fill
                        sizes="(max-width: 639px) 28vw, (max-width: 1023px) 18vw, 10vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center px-1 py-1 pr-2">
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
              <article className="soft-card surface-dark radius-feature px-6 py-6 sm:px-7">
                <div className="grid gap-5 lg:grid-cols-[minmax(0,9.5rem)_1fr] lg:gap-7">
                  <div className="flex flex-col gap-4">
                    <Pill tone="dark">Highlighted notice</Pill>
                    <div className="space-y-2">
                      <span className="meta-label block text-on-dark-label">
                        {formatDisplayDate(featuredNotice.publishedAt)}
                      </span>
                      <span className="meta-label block text-on-dark-label">
                        {featuredNotice.audience.join(", ")}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[1.65rem] leading-[1.04] font-medium text-on-dark xl:text-[1.8rem]">
                      {featuredNotice.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-on-dark-muted">
                      {featuredNotice.summary}
                    </p>
                    <div className="mt-5">
                      <ButtonLink
                        href={`/news/${featuredNotice.slug}`}
                        variant="secondary"
                        size="compact"
                      >
                        {featuredNotice.ctaLabel}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </article>
            ) : (
              <article className="soft-card surface-stone radius-feature px-6 py-6 sm:px-7">
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
