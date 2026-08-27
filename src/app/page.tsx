"use client";

import { Hero } from "./components/Hero";
import {
  Problem,
  Turn,
  Method,
  Experience,
  BeforeAfter,
  Proof,
  ForWho,
  Offer,
  FinalCta,
  Footer,
} from "./components/Sections";
import { useGsap } from "@/lib/use-reveal";

// const title = "VendaTok — Mentoria para vender no TikTok Shop";
// const description =
//   "Aprenda a criar conteúdo que chama atenção, apresentar produtos com desejo e transformar visualizações em pedidos no TikTok Shop.";

export default function Index() {
  useGsap(({ gsap }) => {
    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from("[data-hero-glow]", { opacity: 0, duration: 1.4 })
      .from(
        "[data-hero-visual]",
        { opacity: 0, y: 24, scale: 1.02, duration: 1.3 },
        0.1,
      )
      .from(
        "[data-hero-line]",
        { yPercent: 110, duration: 1, stagger: 0.09 },
        0.35,
      )
      .to("[data-hero-eyebrow]", { opacity: 1, duration: 0.6 }, 0.4)
      .to("[data-hero-sub]", { opacity: 1, y: 0, duration: 0.8 }, 0.95)
      .to("[data-hero-cta]", { opacity: 1, y: 0, duration: 0.8 }, 1.15);

    gsap.set(["[data-hero-sub]", "[data-hero-cta]"], { y: 14 });

    // scroll hint
    gsap.to("[data-scroll-hint]", {
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: "[data-hero]",
        start: "top+=60 top",
        toggleActions: "play none none reverse",
      },
    });

    // generic reveals
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      if (el.closest("[data-hero]")) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        },
      );
    });

    // method progress line
    if (!isMobile) {
      gsap.to("[data-method-progress]", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-method]",
          start: "top 70%",
          end: "bottom 80%",
          scrub: 0.4,
        },
      });

      gsap.to("[data-hero-visual]", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }
  });

  return (
    <main>
      <Hero />
      <Problem />
      <Turn />
      <Method />
      <Experience />
      <BeforeAfter />
      <Proof />
      <ForWho />
      <Offer />
      <FinalCta />
      <Footer />
    </main>
  );
}
