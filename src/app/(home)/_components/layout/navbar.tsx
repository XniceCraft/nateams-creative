"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const routes = [
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
] as const;

function DesktopMenu() {
  return (
    <>
      <ul className="flex gap-4">
        {routes.map((route) => (
          <li
            key={route.label}
            className="relative text-sm group overflow-y-hidden"
          >
            <Link
              className="block relative transition-normal duration-300 ease-out top-0 group-hover:-top-full"
              href={route.href}
            >
              {route.label}
            </Link>
            <Link
              className="block absolute top-full left-0 group-hover:top-0 transition-normal duration-300 ease-out"
              href={route.href}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button>Start a project</Button>
    </>
  );
}

function MobileMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="ghost">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="z-200">
        <DrawerHeader>
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>Main navigation menu</DrawerDescription>
        </DrawerHeader>
        <ul className="no-scrollbar space-y-6 px-4">
          {routes.map((route) => (
            <li
              key={route.label}
              className="relative text-sm group overflow-y-hidden"
            >
              <Link
                className="block relative transition-normal duration-300 ease-out top-0 group-hover:-top-full"
                href={route.href}
              >
                {route.label}
              </Link>
              <Link
                className="block absolute top-full left-0 group-hover:top-0 transition-normal duration-300 ease-out"
                href={route.href}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <DrawerFooter>
          <Button>Start a project</Button>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <nav
      id="navigation-bar"
      className="fixed top-0 left-0 z-100 w-full px-6 py-4"
    >
      <div className="bg-white/50 backdrop-blur-lg rounded-full shadow py-2 px-4 max-w-6xl w-full mx-auto flex justify-between items-center">
        <img
          src="/logo.png"
          className="size-8 object-contain hover:scale-105 hover:-rotate-12 transition-normal duration-300 ease-out"
          alt="Nateams logo"
        />
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </nav>
  );
}
