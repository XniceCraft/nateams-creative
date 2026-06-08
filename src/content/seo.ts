import type { Metadata } from "next";

type SEO = Pick<
  Metadata,
  "title" | "description" | "keywords" | "openGraph" | "twitter"
>;

export const SEO: SEO = {
  title: "Nateams Creative - Software & Web Development Agency",
  description:
    "Nateams Creative is a web development and software engineering agency that helps businesses create professional websites, applications, and digital products.",
  keywords: [
    "web development",
    "software engineering",
    "web design",
    "react",
    "next.js",
    "typescript",
  ],
  openGraph: {
    title: "Nateams Creative - Software & Web Development Agency",
    description:
      "Nateams Creative is a web development and software engineering agency that helps businesses create professional websites, applications, and digital products.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nateams Creative",
      },
    ],
    type: "website",
    siteName: "Nateams Creative",
    url: "https://nateams-creative.vercel.app",
  },
  twitter: {
    title: "Nateams Creative - Software & Web Development Agency",
    description:
      "Nateams Creative is a web development and software engineering agency that helps businesses create professional websites, applications, and digital products.",
    images: ["/logo.png"],
    card: "summary_large_image",
  },
};
