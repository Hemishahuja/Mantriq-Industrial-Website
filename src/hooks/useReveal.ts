import { useEffect, useRef } from "react";

/**
 * useReveal
 * Adds "is-visible" to the element when it crosses a 15% viewport threshold.
 * - One-time trigger for performance.
 * - Uses transform/opacity-only CSS (pair with .reveal in index.css).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, reveal immediately.
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      {
        // Trigger when 15% of the element is visible
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
