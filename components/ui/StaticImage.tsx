import clsx from "clsx";
import type { ImgHTMLAttributes } from "react";
import type { ResponsiveImageSource } from "@/lib/image-assets";

interface StaticImageProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "src" | "alt" | "width" | "height"
  > {
  src: string;
  alt: string;
  width: number;
  height: number;
  sources?: ResponsiveImageSource[];
  pictureClassName?: string;
  priority?: boolean;
}

export function StaticImage({
  src,
  alt,
  width,
  height,
  sources,
  pictureClassName,
  className,
  loading,
  decoding = "async",
  fetchPriority,
  priority = false,
  sizes,
  ...props
}: StaticImageProps) {
  return (
    <picture className={clsx("block", pictureClassName)}>
      {sources?.map((source) => (
        <source
          key={`${source.type}-${source.srcSet}`}
          srcSet={source.srcSet}
          sizes={sizes}
          type={source.type}
        />
      ))}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? undefined : loading ?? "lazy"}
        decoding={decoding}
        fetchPriority={priority ? "high" : fetchPriority}
        className={clsx(className)}
        {...props}
      />
    </picture>
  );
}
