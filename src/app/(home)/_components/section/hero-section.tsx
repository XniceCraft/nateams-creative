"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { TextPlugin } from "gsap/TextPlugin";
import { HeroSectionContent } from "@/content/home/hero-section";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, TextPlugin);

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollDownTextRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useGSAP(() => {
    gsap.to(headingRef.current, {
      text: {
        value: HeroSectionContent.heading,
        delimiter: "",
      },
      duration: 3,
      ease: "none",
    });

    if (!isMobile) {
      gsap.fromTo(
        scrollDownTextRef.current,
        {
          yPercent: 50,
        },
        {
          yPercent: -50,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          duration: 2,
        }
      );
    }
  }, [isMobile]);

  return (
    <section
      id="hero-section"
      className="relative border-b bg-gray-50 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-3xl w-full text-center px-8">
        <h2
          ref={headingRef}
          className="text-xl sm:text-3xl md:text-5xl font-semibold mb-5"
        >
          {HeroSectionContent.heading}
        </h2>
        <p className="text-gray-800 mb-12">{HeroSectionContent.description}</p>
        <Button className="mx-auto p-6" asChild>
          <a href={HeroSectionContent.buttonUrl} target="_blank">
            {HeroSectionContent.buttonText}
          </a>
        </Button>
      </div>
      {!isMobile && (
        <div
          ref={scrollDownTextRef}
          className="absolute right-3 -bottom-3 -rotate-90 text-sm origin-left translate-y-1/2"
        >
          <div className="inline-block w-12 h-1 bg-gray-500 align-middle" />
          <span className="inline-block text-gray-500 text-sm ml-2 align-middle">
            Scroll down
          </span>
        </div>
      )}
    </section>
  );
}
