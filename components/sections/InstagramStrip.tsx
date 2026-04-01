import { estateGalleryPosts } from "@/content/social";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaticImage } from "@/components/ui/StaticImage";

function GalleryCard({ post }: { post: (typeof estateGalleryPosts)[number] }) {
  return (
    <article className="soft-card surface-card radius-card interactive-lift group h-full overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <StaticImage
          {...post.image}
          alt={post.title}
          pictureClassName="absolute inset-0"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 32vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-[1.4rem] font-medium text-[var(--color-ink)] sm:text-[1.55rem]">
          {post.title}
        </h3>
        <p className="body-copy-sm mt-3">
          {post.summary}
        </p>
      </div>
    </article>
  );
}

export function InstagramStrip() {
  if (!estateGalleryPosts.length) {
    return null;
  }

  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="soft-card surface-feature radius-feature px-6 py-7 sm:px-10 sm:py-10">
          <SectionHeading
            eyebrow="Estate gallery"
            title="Landscaping, gathering spaces, and wellness amenities in one tighter overview."
            description="The desktop gallery now reads as a single section instead of oversized standalone cards, while still showing the estate’s quieter residential character."
            maxWidth="wide"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {estateGalleryPosts.map((post) => (
              <GalleryCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
