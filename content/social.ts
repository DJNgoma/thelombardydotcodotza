import {
  braaiFirepitImage,
  courtyardGardenImage,
  gymInteriorImage,
} from "@/lib/image-assets";
import type { SocialPost } from "@/lib/types";

export const estateGalleryPosts: SocialPost[] = [
  {
    id: "landscaped-setting",
    title: "Landscaped setting",
    summary:
      "Landscaped edges and internal garden spaces reinforce the estate’s calmer residential tone.",
    image: courtyardGardenImage,
  },
  {
    id: "outdoor-gathering",
    title: "Outdoor gathering",
    summary:
      "Shared braai and patio settings support relaxed, considerate use by residents and their guests.",
    image: braaiFirepitImage,
  },
  {
    id: "wellness-space",
    title: "Wellness space",
    summary:
      "A modern gym environment reflects the estate’s focus on practical everyday amenities.",
    image: gymInteriorImage,
  },
];
