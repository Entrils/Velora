import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useReveal(options = {}) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (!rootRef.current) {
      return undefined;
    }

    const {
      selector = "[data-reveal]",
      y = 40,
      duration = 1,
      stagger = 0.12,
      start = "top 82%",
      ease = "power3.out"
    } = options;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);

      if (!targets.length) {
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: rootRef.current,
            start,
            once: true
          }
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [options]);

  return rootRef;
}

export default useReveal;
