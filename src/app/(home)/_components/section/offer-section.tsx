"use client";

import { useEffect, useRef } from "react";
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
import { OfferSectionContent } from "@/content/home/offer-section";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function OfferSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(0);
  const isPinned = useRef<boolean>(false);
  const movePixelRef = useRef<number>(0);

  useGSAP(
    () => {
      const tickerCallback = () => {
        if (!isPinned.current) return;

        const progress = progressRef.current;
        const contentPercent = Math.min(1, Math.max(0, (progress - 0.1) / 0.8));

        gsap.to(contentRef.current, {
          x: `-${contentPercent * movePixelRef.current}px`,
          ease: "none",
        });
      };

      gsap.ticker.add(tickerCallback);

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 5,
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

  useEffect(() => {
    const handleResize = () => {
      const left = contentRef.current!.getBoundingClientRect().left;
      movePixelRef.current =
        contentRef.current!.scrollWidth - (window.innerWidth - left * 2);
    };

    let timer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timer);
      timer = setTimeout(handleResize, 150);
    };

    handleResize();
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#F6F3F2] my-24 py-12 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl px-8 mx-auto space-y-10">
        <h2 className="text-3xl text-center font-semibold">
          {OfferSectionContent.heading}
        </h2>
        <div ref={contentRef} className="flex flex-nowrap min-w-max gap-5">
          {OfferSectionContent.offers.map((offer) => (
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
          <p className="font-medium text-2xl">{OfferSectionContent.ctaTitle}</p>
          <Button asChild className="font-medium text-lg px-8 py-6">
            <a href={OfferSectionContent.ctaButtonUrl} target="_blank">
              {OfferSectionContent.ctaButtonText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
