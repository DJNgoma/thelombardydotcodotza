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
    <article className="soft-card surface-card radius-card interactive-lift group overflow-hidden h-full">
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
      </div>
    </article>
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
        <div className="grid gap-5 xl:grid-cols-[0.74fr_1.26fr]">
          <div className="soft-card surface-stone radius-feature overflow-hidden p-3">
            <div className="grid gap-3 lg:grid-rows-[0.9fr_auto]">
              <div className="radius-panel relative min-h-[15rem] overflow-hidden lg:min-h-[22rem]">
                <Image
                  src="/images/inspiration/garden-walkway.jpg"
                  alt="Residential garden walkway reference."
                  fill
                  sizes="(max-width: 1279px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,24,20,0.3)] via-transparent to-transparent" />
              </div>
              <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                <SectionHeading
                  eyebrow="Estate gallery"
                  title="A closer look at the buildings, shared spaces, and residential setting."
                  description="The visual character of the estate is shaped by its internal layout, modern apartment buildings, and the shared amenities residents use every day."
                  maxWidth="wide"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.14fr_0.86fr]">
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
