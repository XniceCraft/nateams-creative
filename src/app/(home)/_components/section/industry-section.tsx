"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image } from "@/components/image";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/use-mobile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const industries = [
  {
    title: "Professional Services",
    image: "/placeholder.webp",
    description:
      "A practical talk on component APIs, accessibility, and shipping faster.",
  },
  {
    title: "Real Estate",
    image: "/placeholder.webp",
    description: "Property agents, property management, developers.",
  },
  {
    title: "Cafes & Restaurants",
    image: "/placeholder.webp",
    description: "Cafes, bakeries, restaurants, local F&B brands.",
  },
  {
    title: "Hospitality",
    image: "/placeholder.webp",
    description: "Hotels, villas, guesthouses, travel businesses.",
  },
  {
    title: "Startups & SaaS",
    image: "/placeholder.webp",
    description: "New businesses building credibility online.",
  },
  {
    title: "SMEs & Micro Businesses",
    image: "/placeholder.webp",
    description: "Local businesses looking to grow digitally.",
  },
];

export function IndustrySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const industryContentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(0);
  const isPinned = useRef<boolean>(false);
  const isMobile = useIsMobile();

  useGSAP(
    () => {
      if (isMobile) return;

      const tickerCallback = () => {
        if (!isPinned) return;

        const progress = progressRef.current;
        const contentPercent = Math.min(1, Math.max(0, (progress - 0.1) / 0.8));

        gsap.to(industryContentRef.current, {
          xPercent: -(contentPercent * 50),
          ease: "none",
        });
        gsap.to(progressBarRef.current, {
          scaleX: progress,
          ease: "none",
        });
      };

      gsap.ticker.add(tickerCallback);

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: ({ progress }) => {
          progressRef.current = progress;
        },
        onEnter: () => {
          isPinned.current = true;
        },
        onLeaveBack: () => {
          isPinned.current = false;
        },
      });

      return () => gsap.ticker.remove(tickerCallback);
    },
    { scope: containerRef, dependencies: [isMobile], revertOnUpdate: true }
  );

  return (
    <section
      ref={containerRef}
      className="w-full max-w-6xl mx-auto py-12 px-8 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Industries We Support
      </h2>
      <div
        ref={industryContentRef}
        className="flex flex-col md:flex-row md:flex-nowrap md:min-w-max gap-5 py-4 mb-5"
      >
        {industries.map((industry) => (
          <Card key={industry.title} className="pt-0 w-84 shrink-0">
            <Image
              src={industry.image}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardTitle>{industry.title}</CardTitle>
              <CardDescription>{industry.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="border w-full h-2 border-primary rounded">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-primary scale-x-0 origin-left"
        ></div>
      </div>
    </section>
  );
}
