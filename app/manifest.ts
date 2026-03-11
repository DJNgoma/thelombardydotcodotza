import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Lombardy Lifestyle Estate",
    short_name: "The Lombardy",
  description:
      "Resident notices, governance, management information, and amenities for The Lombardy Lifestyle Estate, South Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1eb",
    theme_color: "#465446",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
