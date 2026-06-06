"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, TextPlugin);

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollDownTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(headingRef.current, {
      text: {
        value: "We Build Websites That Turn Visitors Into Customers",
        delimiter: "",
      },
      duration: 3,
      ease: "none",
    });

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
  });

  return (
    <section
      id="hero-section"
      className="relative border-b bg-amber-50 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-3xl w-full text-center space-y-12">
        <h2 ref={headingRef} className="text-5xl font-semibold"></h2>
        <p className="text-gray-800">
          Helping businesses establish a professional online presence through
          strategic web design, development, and digital solutions.
        </p>
        <Button className="mx-auto p-6">Book a Free Consultation</Button>
      </div>
      <div
        ref={scrollDownTextRef}
        className="absolute right-3 -bottom-3 -rotate-90 text-sm origin-left translate-y-1/2"
      >
        <div className="inline-block w-12 h-1 bg-gray-500 align-middle" />
        <span className="inline-block text-gray-500 text-sm ml-2 align-middle">
          Scroll down
        </span>
      </div>
    </section>
  );
}
