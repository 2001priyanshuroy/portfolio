"use client";

import { useScrollProgress, useSmoothScroll } from "@/hooks/useScroll";

export default function ScrollInit() {
  useScrollProgress();
  useSmoothScroll();
  return null;
}
