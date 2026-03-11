import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import type { NoticeMeta } from "@/lib/types";

interface HeroEstateProps {
  featuredNotice?: NoticeMeta;
}

export function HeroEstate({ featuredNotice }: HeroEstateProps) {
  return (
    <section className="hero-space">
      <div className="page-shell">
        <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="soft-card surface-feature noise-overlay radius-feature relative overflow-hidden px-6 py-7 sm:px-10 sm:py-11">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-[rgba(169,190,170,0.14)] via-transparent to-transparent" />
            <Pill>Secure, managed, residential</Pill>
            <h1 className="display-title display-hero balanced-text text-on-light mt-5 max-w-3xl font-semibold sm:mt-6">
              Premium estate living shaped by order, standards, and calm.
            </h1>
            <p className="body-copy-lg text-on-light-muted mt-6 max-w-2xl">
              The Lombardy Lifestyle Estate offers secure, modern residential
              living within a managed community environment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/news">View latest notices</ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                Explore the estate
              </ButtonLink>
            </div>

            {featuredNotice ? (
              <div className="inset-surface radius-panel mt-9 p-5">
                <p className="meta-label text-[var(--color-sage-deep)]">
                  Highlighted notice
                </p>
                <p className="text-on-light mt-3 text-xl font-medium">
                  {featuredNotice.title}
                </p>
                <p className="body-copy-sm text-on-light-muted mt-2">
                  {featuredNotice.summary}
                </p>
              </div>
            ) : null}
          </div>

          <div className="soft-card surface-feature radius-feature overflow-hidden p-3">
            <div className="radius-panel relative min-h-[25rem] overflow-hidden lg:min-h-full">
              <Image
                src="/images/estate/estate-aerial-clean.jpg"
                alt="Aerial view of The Lombardy Lifestyle Estate."
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
