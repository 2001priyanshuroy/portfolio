"use client";

import React, { useEffect, useState, useRef } from "react";

export function useScrollProgress() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        progressBar.style.width = scrollPercent + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export function useSmoothScroll() {
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = "auto";
    };
  }, []);
}

export function useScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return scrollToTop;
}

export function useIsInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, threshold]);

  return { ref, isInView };
}
