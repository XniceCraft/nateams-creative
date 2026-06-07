"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const reasons = [
  {
    title: "Affordable Pricing",
    desc: "We keep our prices straightforward and competitive — no hidden fees.",
  },
  {
    title: "Easy Communication",
    desc: "Clear, prompt updates so you always know what’s happening.",
  },
  {
    title: "Quality Assurance",
    desc: "We review everything carefully to ensure it meets professional standards.",
  },
  {
    title: "Support After Launch",
    desc: "We’re here to help even after your website goes live.",
  },
] as const;

export function PartnerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const split = new SplitText(headingRef.current, {
      type: "words",
    });

    const titles = gsap.utils
      .toArray<HTMLHeadingElement>(".partner-reason-title")
      .map((title) => {
        const s = new SplitText(title, {
          type: "words",
        });
        return s.words;
      });

    const descriptions = gsap.utils
      .toArray<HTMLParagraphElement>(".partner-reason-description")
      .map((desc) => {
        const s = new SplitText(desc, {
          type: "words",
        });
        return s.words;
      });

    const timeline = gsap.timeline({ paused: true });

    timeline.fromTo(
      split.chars,
      {
        yPercent: -105,
      },
      {
        yPercent: 0,
        ease: "none",
        stagger: 0.04,
      }
    );

    for (let i = 0; i < reasons.length; i++) {
      const title = titles[i];
      const description = descriptions[i];

      timeline.fromTo(
        title,
        {
          yPercent: -105,
        },
        {
          yPercent: 0,
          ease: "none",
          stagger: 0.04,
        }
      );

      timeline.fromTo(
        description,
        {
          yPercent: -105,
        },
        {
          yPercent: 0,
          ease: "none",
          stagger: 0.04,
        },
        "<"
      );
    }

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      animation: timeline,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#EAE7E7] p-32 flex flex-col items-center my-24"
    >
      <div className="overflow-hidden mb-6">
        <h2 ref={headingRef} className="text-4xl text-center font-semibold">
          Why Work With Us
        </h2>
      </div>
      <div className="mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className="flex items-center gap-5 py-5 border-b border-gray-300 last:border-none"
          >
            <span>{(index + 1).toString().padStart(2, "0")}</span>
            <div>
              <h3 className="partner-reason-title text-gray-850 font-medium">
                {reason.title}
              </h3>
              <p className="partner-reason-description text-gray-700 text-xs">
                {reason.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
