import Image from "next/image";
import { estateGalleryPosts } from "@/content/social";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InstagramStrip() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Estate gallery"
          title="A closer look at the estate, its buildings, and shared amenities."
          description="These estate images reflect the residential setting, shared spaces, and day-to-day environment at The Lombardy Lifestyle Estate."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {estateGalleryPosts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="soft-card surface-card radius-card interactive-lift group overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-[var(--color-ink)]">
                  {post.title}
                </h3>
                <p className="body-copy-sm mt-3">
                  {post.summary}
                </p>
                <p className="meta-label mt-4 text-[var(--color-sage-deep)]">
                  View source
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
