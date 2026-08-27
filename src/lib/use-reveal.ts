import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useGsap(
  setup: (ctx: {
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
  }) => void,
) {
  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    document.documentElement.classList.add("js-ready");

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      gsap.set(".reveal", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => setup({ gsap, ScrollTrigger }));

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
