"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

export function Reveal({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className={`reveal ${className}`} {...props} />;
}
