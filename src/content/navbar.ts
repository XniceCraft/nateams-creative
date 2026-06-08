import type Link from "next/link";

interface NavbarContentType {
  logo: "/logo.png";
  routes: {
    label: string;
    href: Parameters<typeof Link>[0]["href"];
  }[];
  ctaButtonText: string;
  ctaButtonUrl: string;
}

export const NavbarContent: NavbarContentType = {
  logo: "/logo.png",
  routes: [
    {
      label: "Home",
      href: "#hero-section",
    },
    {
      label: "About",
      href: "#",
    },
    {
      label: "Services",
      href: "#",
    },
    {
      label: "Portfolio",
      href: "#",
    },
    {
      label: "Contact",
      href: "#",
    },
  ],
  ctaButtonText: "Start a project",
  ctaButtonUrl: "https://wa.me/6289512031897",
};
