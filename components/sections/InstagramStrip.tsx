import Image from "next/image";
import { estateGalleryPosts } from "@/content/social";
import { SectionHeading } from "@/components/ui/SectionHeading";

function GalleryCard({
  post,
  featured = false,
}: {
  post: (typeof estateGalleryPosts)[number];
  featured?: boolean;
}) {
  return (
    <a
      href={post.href}
      target="_blank"
      rel="noreferrer"
      className="soft-card surface-card radius-card interactive-lift group overflow-hidden h-full"
    >
      <div
        className={`relative overflow-hidden ${
          featured
            ? "aspect-[16/10] xl:min-h-[35rem]"
            : "aspect-[4/5] sm:aspect-[4/4.5]"
        }`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className={featured ? "p-6 sm:p-7" : "p-5"}>
        <h3
          className={`font-medium text-[var(--color-ink)] ${
            featured ? "text-2xl sm:text-[1.8rem]" : "text-lg"
          }`}
        >
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
  );
}

export function InstagramStrip() {
  const [featuredPost, ...supportingPosts] = estateGalleryPosts;

  if (!featuredPost) {
    return null;
  }

  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="soft-card surface-feature radius-feature px-6 py-7 sm:px-10 sm:py-10">
            <SectionHeading
              eyebrow="Estate gallery"
              title="A closer look at the buildings, shared spaces, and residential setting."
              description="The visual character of the estate is shaped by its internal layout, modern apartment buildings, and the shared amenities residents use every day."
              maxWidth="wide"
            />
            <a
              href={featuredPost.href}
              target="_blank"
              rel="noreferrer"
              className="text-link mt-8"
            >
              View The Luxury Lombardy profile
            </a>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
            <GalleryCard post={featuredPost} featured />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
              {supportingPosts.map((post) => (
                <GalleryCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
