export interface ResponsiveImageSource {
  srcSet: string;
  type: string;
}

export interface ResponsiveImageAsset {
  src: string;
  width: number;
  height: number;
  sources?: ResponsiveImageSource[];
}

export const estateAerialImage: ResponsiveImageAsset = {
  src: "/images/estate/estate-aerial-clean.jpg",
  width: 1600,
  height: 827,
  sources: [
    {
      type: "image/avif",
      srcSet:
        "/images/estate/optimized/estate-aerial-clean-800.avif 800w, /images/estate/optimized/estate-aerial-clean-1600.avif 1600w",
    },
  ],
};

export const estateCourtyardImage: ResponsiveImageAsset = {
  src: "/images/estate/estate-courtyard-clean.jpg",
  width: 1600,
  height: 602,
  sources: [
    {
      type: "image/avif",
      srcSet:
        "/images/estate/optimized/estate-courtyard-clean-480.avif 480w, /images/estate/optimized/estate-courtyard-clean-960.avif 960w",
    },
  ],
};

export const poolNewsletterImage: ResponsiveImageAsset = {
  src: "/images/estate/pool-from-newsletter.png",
  width: 1200,
  height: 760,
  sources: [
    {
      type: "image/avif",
      srcSet:
        "/images/estate/optimized/pool-from-newsletter-480.avif 480w, /images/estate/optimized/pool-from-newsletter-1200.avif 1200w",
    },
  ],
};

export const courtyardGardenImage: ResponsiveImageAsset = {
  src: "/images/inspiration/courtyard-garden.jpg",
  width: 1800,
  height: 1200,
  sources: [
    {
      type: "image/avif",
      srcSet:
        "/images/inspiration/optimized/courtyard-garden-640.avif 640w, /images/inspiration/optimized/courtyard-garden-1280.avif 1280w",
    },
  ],
};

export const braaiFirepitImage: ResponsiveImageAsset = {
  src: "/images/inspiration/braai-firepit.webp",
  width: 1800,
  height: 1200,
  sources: [
    {
      type: "image/avif",
      srcSet:
        "/images/inspiration/optimized/braai-firepit-640.avif 640w, /images/inspiration/optimized/braai-firepit-1280.avif 1280w",
    },
  ],
};

export const gymInteriorImage: ResponsiveImageAsset = {
  src: "/images/inspiration/gym-interior.webp",
  width: 1800,
  height: 2400,
  sources: [
    {
      type: "image/avif",
      srcSet:
        "/images/inspiration/optimized/gym-interior-480.avif 480w, /images/inspiration/optimized/gym-interior-960.avif 960w",
    },
  ],
};

export const gardenWalkwayImage: ResponsiveImageAsset = {
  src: "/images/inspiration/garden-walkway.jpg",
  width: 1800,
  height: 1200,
  sources: [
    {
      type: "image/avif",
      srcSet:
        "/images/inspiration/optimized/garden-walkway-640.avif 640w, /images/inspiration/optimized/garden-walkway-960.avif 960w",
    },
  ],
};
