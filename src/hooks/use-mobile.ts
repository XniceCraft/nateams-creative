"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

function getIsMobile(breakpoint: number): boolean {
  return typeof window !== "undefined" && window.innerWidth < breakpoint;
}

export function useIsMobile(mobileBreakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    getIsMobile(mobileBreakpoint)
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`);
    const onChange = () => setIsMobile(getIsMobile(mobileBreakpoint));

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mobileBreakpoint]);

  return isMobile;
}
