interface OfferSectionContentType {
  heading: string;
  ctaTitle: string;
  ctaButtonText: string;
  ctaButtonUrl: string;
  offers: {
    title: string;
    description: string;
  }[];
}

export const OfferSectionContent: OfferSectionContentType = {
  heading: "What We Can Help With",
  ctaTitle: "Ready to discuss your project?",
  ctaButtonText: "Schedule a Consultation",
  ctaButtonUrl: "https://wa.me/6289512031897",
  offers: [
    {
      title: "Website Design & Development",
      description: "Modern websites designed to attract and convert customers.",
    },
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages for campaigns and promotions.",
    },
    {
      title: "Business Website Revamp",
      description:
        "Transform outdated websites into professional digital assets.",
    },
    {
      title: "SEO Foundation",
      description:
        "Build websites optimized for search visibility from day one.",
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support, updates, and performance improvements.",
    },
  ],
};
