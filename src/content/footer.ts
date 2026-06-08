import type Link from "next/link";

interface FooterContentType {
  logo: "/logo.png";
  heading: string;
  description: string;
  routes: {
    label: string;
    href: Parameters<typeof Link>[0]["href"];
  }[];
  contacts: {
    label: string;
    url: string;
  }[];
}

export const FooterContent: FooterContentType = {
  logo: "/logo.png",
  heading: "Nateams Agency",
  description:
    "Elevating businesses through purposeful software design and development.",
  routes: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about-section",
    },
    {
      label: "Services",
      href: "#services-section",
    },
    {
      label: "Portfolio",
      href: "#portfolio-section",
    },
    {
      label: "Contact",
      href: "#contact-section",
    },
  ],
  contacts: [
    {
      label: "Whatsapp",
      url: "https://wa.me/6289512031897",
    },
    {
      label: "Instagram",
      url: "https://instagram.com/nateamscreative",
    },
    {
      label: "Linkedin",
      url: "#",
    },
  ],
};
