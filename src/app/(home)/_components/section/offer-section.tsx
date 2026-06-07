"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const offers = [
  {
    title: "Website Design & Development",
    description: "Modern websites designed to attract and convert customers.",
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages for campaigns and promotions.",
  },
  {
    title: "Business Website Revamp",
    description:
      "Transform outdated websites into professional digital assets.",
  },
  {
    title: "SEO Foundation",
    description: "Build websites optimized for search visibility from day one.",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support, updates, and performance improvements.",
  },
] as const;

export function OfferSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(0);
  const isPinned = useRef<boolean>(false);

  useGSAP(
    () => {
      const tickerCallback = () => {
        if (!isPinned) return;

        const progress = progressRef.current;
        const contentPercent = Math.min(1, Math.max(0, (progress - 0.1) / 0.8));

        gsap.to(contentRef.current, {
          xPercent: -(contentPercent * 50),
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
    { scope: containerRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={containerRef}
      className="bg-[#F6F3F2] my-24 py-12 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl px-8 mx-auto space-y-10">
        <h2 className="text-3xl text-center font-semibold">
          What We Can Help With
        </h2>
        <div ref={contentRef} className="flex flex-nowrap min-w-max gap-5">
          {offers.map((offer) => (
            <Card
              key={offer.title}
              className="bg-amber-50 rounded-tr-[3rem] h-64 min-w-54 shrink-0"
            >
              <CardHeader>
                <CardTitle>
                  <h3>{offer.title}</h3>
                </CardTitle>
                <CardDescription>{offer.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="font-medium text-2xl">Ready to discuss your project?</p>
          <Button className="font-medium text-lg px-8 py-6">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
