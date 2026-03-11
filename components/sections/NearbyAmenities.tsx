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
        />

        <div className={`mt-10 grid gap-5 ${compact ? "lg:grid-cols-3" : "lg:grid-cols-2 xl:grid-cols-3"}`}>
          {groups.map((group) => (
            <article
              key={group.category}
              className="soft-card surface-card radius-card p-5 sm:p-7"
            >
              <p className="eyebrow">{group.category}</p>
              <div className="mt-5 space-y-5">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <h3 className="text-xl font-medium text-[var(--color-ink)] transition hover:text-[var(--color-sage-deep)]">
                      {item.name}
                    </h3>
                    <p className="body-copy-sm mt-2">{item.summary}</p>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
