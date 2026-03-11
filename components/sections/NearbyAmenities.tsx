import Image from "next/image";
import { nearbyAmenities } from "@/content/nearby";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface NearbyAmenitiesProps {
  compact?: boolean;
}

const categoryOrder = [
  "Shopping",
  "Education",
  "Healthcare",
  "Leisure",
  "Travel",
] as const;

export function NearbyAmenities({ compact = false }: NearbyAmenitiesProps) {
  const groupedAmenities = categoryOrder
    .map((category) => ({
      category,
      items: nearbyAmenities.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

  const groups = compact ? groupedAmenities.slice(0, 3) : groupedAmenities;

  return (
    <section className="section-space">
      <div className="page-shell">
        <div
          className={
            compact
              ? "soft-card surface-dark radius-feature px-6 py-7 sm:px-10 sm:py-10"
              : undefined
          }
        >
          <SectionHeading
            eyebrow="Around The Lombardy"
            title={
              compact
                ? "Broadacres and Fourways provide practical everyday convenience."
                : "Nearby schools, shopping, healthcare, and travel links support estate living."
            }
            description={
              compact
                ? "The estate sits within a well-established northern Johannesburg catchment with shopping, schools, healthcare, and travel links close at hand."
                : "The surrounding Broadacres and Fourways area offers established retail, education, healthcare, leisure, and travel connections for owners and residents."
            }
            maxWidth="wide"
            tone={compact ? "dark" : "light"}
          />

          <div
            className={`mt-10 grid gap-5 ${
              compact ? "xl:grid-cols-[0.86fr_1.14fr]" : "lg:grid-cols-[0.8fr_1.2fr]"
            }`}
          >
            {compact ? (
              <article className="soft-card surface-card radius-feature overflow-hidden p-3">
                <div className="grid gap-3 lg:grid-rows-[1.12fr_auto]">
                  <div className="radius-panel relative min-h-[18rem] overflow-hidden lg:min-h-[24rem]">
                    <Image
                      src="/images/inspiration/courtyard-garden.jpg"
                      alt="Landscaped residential courtyard reference."
                      fill
                      sizes="(max-width: 1279px) 100vw, 38vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,24,20,0.34)] via-transparent to-transparent" />
                  </div>
                  <div className="band-support-card radius-panel px-6 py-6 sm:px-7">
                    <p className="meta-label text-on-dark-label">
                      Everyday catchment
                    </p>
                    <p className="mt-4 text-xl leading-8 text-on-dark">
                      The estate is positioned within an established northern
                      Johannesburg catchment that supports everyday residential
                      living.
                    </p>
                    <p className="mt-5 text-sm leading-7 text-on-dark-muted sm:text-base">
                      Nearby schools, shopping, healthcare, and leisure anchors add
                      practical convenience without changing the estate’s calm,
                      residential character.
                    </p>
                  </div>
                </div>
              </article>
            ) : null}

            <div
              className={`grid gap-5 ${
                compact ? "md:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {groups.map((group) => (
                <article
                  key={group.category}
                  className={
                    compact
                      ? "band-support-card radius-card p-5 sm:p-7"
                      : "soft-card surface-card radius-card p-5 sm:p-7"
                  }
                >
                  <p
                    className={`eyebrow ${
                      compact ? "text-on-dark-label" : "text-[var(--color-sage-deep)]"
                    }`}
                  >
                    {group.category}
                  </p>
                  <div className="mt-5 space-y-5">
                    {group.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                      >
                        <h3
                          className={`text-xl font-medium transition ${
                            compact
                              ? "text-on-dark hover:text-white"
                              : "text-[var(--color-ink)] hover:text-[var(--color-sage-deep)]"
                          }`}
                        >
                          {item.name}
                        </h3>
                        <p
                          className={`mt-2 text-sm leading-7 ${
                            compact ? "text-on-dark-muted" : "text-[var(--color-ink-soft)]"
                          }`}
                        >
                          {item.summary}
                        </p>
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
